"use client";

import { type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  MODULES,
  getModule,
  getTopic,
  getTopicHref,
} from "@/lib/modules-data";
import { useTraining } from "@/lib/training-context";

interface TopicPageProps {
  moduleId: number;
  topicId: number;
  children: ReactNode;
}

function getPrevNext(moduleId: number, topicId: number) {
  const mod = getModule(moduleId);
  if (!mod) return { prev: null, next: null, totalInModule: 0 };

  const totalInModule = mod.topics.length;
  let prev: { moduleId: number; topicId: number; title: string } | null = null;
  let next: { moduleId: number; topicId: number; title: string } | null = null;

  // Previous
  if (topicId > 1) {
    const t = getTopic(moduleId, topicId - 1);
    if (t) prev = { moduleId, topicId: topicId - 1, title: t.title };
  } else {
    // Last topic of previous module
    const prevMod = getModule(moduleId - 1);
    if (prevMod) {
      const lastTopic = prevMod.topics[prevMod.topics.length - 1];
      prev = { moduleId: moduleId - 1, topicId: lastTopic.id, title: lastTopic.title };
    }
  }

  // Next
  if (topicId < totalInModule) {
    const t = getTopic(moduleId, topicId + 1);
    if (t) next = { moduleId, topicId: topicId + 1, title: t.title };
  } else {
    // First topic of next module
    const nextMod = getModule(moduleId + 1);
    if (nextMod && nextMod.topics.length > 0) {
      next = { moduleId: moduleId + 1, topicId: 1, title: nextMod.topics[0].title };
    }
  }

  return { prev, next, totalInModule };
}

export function TopicPage({ moduleId, topicId, children }: TopicPageProps) {
  const router = useRouter();
  const { markComplete, isTopicCompleted } = useTraining();

  const topic = getTopic(moduleId, topicId);
  const completed = isTopicCompleted(moduleId, topicId);
  const { prev, next, totalInModule } = getPrevNext(moduleId, topicId);

  // Determine if this is the very last topic across all modules
  const lastModule = MODULES[MODULES.length - 1];
  const isLastTopic =
    moduleId === lastModule.id &&
    topicId === lastModule.topics[lastModule.topics.length - 1].id;

  if (!topic) return null;

  return (
    <div className="flex flex-col min-h-full">
      {/* Topic header */}
      <div className="border-b border-border bg-card/50 px-8 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Badge
              variant="secondary"
              className="font-mono text-[10px] uppercase tracking-widest"
            >
              Topic {topicId} of {totalInModule}
            </Badge>
            {completed && (
              <Badge className="bg-cdi-green/20 text-cdi-green border-cdi-green/30 font-mono text-[10px]">
                Completed
              </Badge>
            )}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground mb-1">
            {topic.title}
          </h1>
          <p className="text-sm text-muted-foreground">{topic.subtitle}</p>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 px-8 py-8">
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>

      {/* Bottom navigation */}
      <div className="border-t border-border bg-card/50 px-8 py-4 mt-auto">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          {/* Previous */}
          {prev ? (
            <button
              onClick={() => router.push(getTopicHref(prev.moduleId, prev.topicId))}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="max-w-[120px] truncate">{prev.title}</span>
            </button>
          ) : (
            <div />
          )}

          {/* Mark complete / status */}
          <div className="flex items-center gap-3">
            {!completed && (
              <button
                onClick={() => markComplete(moduleId, topicId)}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-cdi-green/30 text-cdi-green hover:bg-cdi-green/10 transition-all"
              >
                Mark as Complete
              </button>
            )}
            {completed && (
              <span className="flex items-center gap-1.5 text-xs font-mono text-cdi-green">
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Complete
              </span>
            )}
          </div>

          {/* Next / Finish */}
          {isLastTopic ? (
            <button
              onClick={() => {
                markComplete(moduleId, topicId);
                router.push("/complete");
              }}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                "bg-cdi-green text-background hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cdi-green/20"
              )}
            >
              Finish Training
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          ) : next ? (
            <button
              onClick={() => {
                markComplete(moduleId, topicId);
                router.push(getTopicHref(next.moduleId, next.topicId));
              }}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                "bg-cdi-green text-background hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cdi-green/20"
              )}
            >
              <span className="max-w-[120px] truncate">{next.title}</span>
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
