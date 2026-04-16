"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MODULES, getModule, getTopicHref } from "@/lib/modules-data";
import { useTraining } from "@/lib/training-context";

export function ModuleLandingClient() {
  const params = useParams();
  const moduleId = parseInt(params.moduleId as string, 10);
  const mod = getModule(moduleId);
  const { isTopicCompleted, isModuleCompleted } = useTraining();

  if (!mod) return null;
  const modComplete = isModuleCompleted(moduleId);

  return (
    <div className="flex-1 flex flex-col">
      <div className="relative overflow-hidden border-b border-border bg-card/50 px-8 py-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cdi-green-light via-transparent to-cdi-teal-light pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-widest">
              Module {moduleId} of {MODULES.length}
            </Badge>
            {modComplete && (
              <Badge className="bg-cdi-green/20 text-cdi-green border-cdi-green/30 font-mono text-[10px]">
                Complete
              </Badge>
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gradient-cdi mb-3">{mod.title}</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">{mod.description}</p>
        </div>
      </div>

      <div className="flex-1 px-8 py-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {mod.topics.map((topic) => {
            const completed = isTopicCompleted(moduleId, topic.id);
            return (
              <Link
                key={topic.id}
                href={getTopicHref(moduleId, topic.id)}
                className={cn(
                  "group relative rounded-xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
                  completed
                    ? "border-cdi-green/20 bg-cdi-green/5 hover:shadow-cdi-green/10"
                    : "border-border bg-card hover:border-cdi-green/20 hover:shadow-cdi-green/5"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className={cn("size-10 rounded-lg flex items-center justify-center text-sm font-mono font-bold shrink-0 transition-colors", completed ? "bg-cdi-green/20 text-cdi-green" : "bg-muted text-muted-foreground group-hover:bg-cdi-green/10 group-hover:text-cdi-green")}>
                    {completed ? (
                      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    ) : (
                      `0${topic.id}`
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-cdi-green transition-colors">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{topic.subtitle}</p>
                  </div>
                  <svg className="size-5 text-muted-foreground group-hover:text-cdi-green group-hover:translate-x-1 transition-all shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <footer className="border-t border-border px-8 py-4 mt-auto">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">Circular Drive Initiative</span>
          <span className="font-mono text-[10px] text-muted-foreground/60">CDI Data Sanitization Best Practices</span>
        </div>
      </footer>
    </div>
  );
}
