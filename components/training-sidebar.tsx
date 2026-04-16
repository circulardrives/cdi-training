"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { MODULES, getModuleHref, getTopicHref } from "@/lib/modules-data";
import { useTraining } from "@/lib/training-context";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-3", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function TrainingSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isTopicCompleted, isModuleCompleted, overallProgress, resetProgress } =
    useTraining();

  const { done: completedCount, total: totalTopics, percent } = overallProgress();

  return (
    <aside className="w-72 shrink-0 border-r border-border bg-card/50 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link href="/module/1/topic/1" className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cdi-logo.svg"
            alt="Circular Drive Initiative"
            className="h-14 w-auto"
          />
        </Link>
      </div>

      <nav className="flex-1 p-3 flex flex-col gap-0.5 overflow-y-auto">
        {MODULES.map((mod) => {
          const isExpanded = pathname.startsWith(`/module/${mod.id}`);
          const modCompleted = isModuleCompleted(mod.id);

          return (
            <div key={mod.id}>
              {/* Module header */}
              <Link
                href={getTopicHref(mod.id, 1)}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors",
                  isExpanded
                    ? "bg-accent/50"
                    : "hover:bg-accent/30"
                )}
              >
                <div
                  className={cn(
                    "size-5 rounded flex items-center justify-center text-[9px] font-mono font-bold shrink-0",
                    modCompleted
                      ? "bg-cdi-green/20 text-cdi-green"
                      : isExpanded
                        ? "bg-cdi-green text-background"
                        : "bg-muted text-muted-foreground"
                  )}
                >
                  {modCompleted ? <CheckIcon /> : mod.id}
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "text-xs font-medium truncate",
                      isExpanded ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {mod.title}
                  </p>
                </div>
              </Link>

              {/* Expanded topics */}
              {isExpanded && (
                <div className="ml-4 pl-3 border-l border-border mt-0.5 mb-1 flex flex-col gap-0.5">
                  {mod.topics.map((topic) => {
                    const href = getTopicHref(mod.id, topic.id);
                    const isActive = pathname === href;
                    const completed = isTopicCompleted(mod.id, topic.id);

                    return (
                      <Link
                        key={topic.id}
                        href={href}
                        className={cn(
                          "flex items-center gap-2 px-2.5 py-1.5 rounded-md transition-all text-xs",
                          "hover:bg-accent/40",
                          isActive && "bg-cdi-green/10 border border-cdi-green/20"
                        )}
                      >
                        <div
                          className={cn(
                            "size-4 rounded flex items-center justify-center text-[8px] font-mono font-bold shrink-0",
                            completed
                              ? "bg-cdi-green/20 text-cdi-green"
                              : isActive
                                ? "bg-cdi-green text-background"
                                : "bg-muted text-muted-foreground"
                          )}
                        >
                          {completed ? (
                            <CheckIcon className="size-2.5" />
                          ) : (
                            topic.id
                          )}
                        </div>
                        <span
                          className={cn(
                            "truncate",
                            isActive
                              ? "text-cdi-green font-medium"
                              : "text-muted-foreground"
                          )}
                        >
                          {topic.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Progress footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-muted-foreground">
            Progress
          </span>
          <span className="text-xs font-mono text-cdi-green">
            {completedCount}/{totalTopics} topics
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-3">
          <div
            className="h-full rounded-full bg-cdi-green transition-all duration-700"
            style={{ width: `${percent}%` }}
          />
        </div>
        <button
          onClick={() => {
            resetProgress();
            router.push("/module/1/topic/1");
          }}
          className="w-full px-3 py-2 rounded-lg text-xs font-mono text-muted-foreground hover:text-cdi-green hover:bg-cdi-green/5 hover:border-cdi-green/30 border border-border transition-all"
        >
          Restart Training
        </button>
      </div>
    </aside>
  );
}
