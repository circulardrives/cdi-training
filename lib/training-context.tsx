"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { MODULES } from "./modules-data";

interface TrainingState {
  /** Set of "moduleId-topicId" strings */
  completed: Set<string>;
  markComplete: (moduleId: number, topicId: number) => void;
  isTopicCompleted: (moduleId: number, topicId: number) => boolean;
  isModuleCompleted: (moduleId: number) => boolean;
  moduleProgress: (moduleId: number) => { done: number; total: number; percent: number };
  overallProgress: () => { done: number; total: number; percent: number };
  allComplete: boolean;
  resetProgress: () => void;
}

const TrainingContext = createContext<TrainingState | null>(null);
const STORAGE_KEY = "cdi-training-progress";

function toKey(moduleId: number, topicId: number) {
  return `${moduleId}-${topicId}`;
}

export function TrainingProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCompleted(new Set(JSON.parse(stored)));
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
    }
  }, [completed, loaded]);

  const markComplete = useCallback((moduleId: number, topicId: number) => {
    setCompleted((prev) => {
      const key = toKey(moduleId, topicId);
      if (prev.has(key)) return prev;
      const next = new Set(prev);
      next.add(key);
      return next;
    });
  }, []);

  const isTopicCompleted = useCallback(
    (moduleId: number, topicId: number) => completed.has(toKey(moduleId, topicId)),
    [completed]
  );

  const isModuleCompleted = useCallback(
    (moduleId: number) => {
      const mod = MODULES.find((m) => m.id === moduleId);
      if (!mod) return false;
      return mod.topics.every((t) => completed.has(toKey(moduleId, t.id)));
    },
    [completed]
  );

  const moduleProgress = useCallback(
    (moduleId: number) => {
      const mod = MODULES.find((m) => m.id === moduleId);
      if (!mod) return { done: 0, total: 0, percent: 0 };
      const total = mod.topics.length;
      const done = mod.topics.filter((t) => completed.has(toKey(moduleId, t.id))).length;
      return { done, total, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
    },
    [completed]
  );

  const overallProgress = useCallback(() => {
    const total = MODULES.reduce((sum, m) => sum + m.topics.length, 0);
    const done = completed.size;
    return { done, total, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
  }, [completed]);

  const totalTopics = MODULES.reduce((sum, m) => sum + m.topics.length, 0);
  const allComplete = completed.size >= totalTopics;

  const resetProgress = useCallback(() => {
    setCompleted(new Set());
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }, []);

  return (
    <TrainingContext.Provider
      value={{
        completed,
        markComplete,
        isTopicCompleted,
        isModuleCompleted,
        moduleProgress,
        overallProgress,
        allComplete,
        resetProgress,
      }}
    >
      {children}
    </TrainingContext.Provider>
  );
}

export function useTraining() {
  const ctx = useContext(TrainingContext);
  if (!ctx) throw new Error("useTraining must be used within TrainingProvider");
  return ctx;
}
