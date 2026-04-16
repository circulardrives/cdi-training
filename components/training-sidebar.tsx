"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { MODULES, getTopicHref } from "@/lib/modules-data";
import { useTraining } from "@/lib/training-context";
import { ModuleIcon } from "@/components/module-icon";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarGroup,
  useSidebar,
} from "@/components/ui/sidebar";

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
  const { setOpenMobile, isMobile } = useSidebar();

  const { done: completedCount, total: totalTopics, percent } = overallProgress();

  const handleNavigate = () => {
    if (isMobile) setOpenMobile(false);
  };

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="p-6 border-b border-sidebar-border">
        <Link href="/module/1/topic/1" className="block" onClick={handleNavigate}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cdi-logo.svg"
            alt="Circular Drive Initiative"
            className="h-14 w-auto"
          />
        </Link>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarMenu>
            {MODULES.map((mod) => {
              const isExpanded = pathname.startsWith(`/module/${mod.id}`);
              const modCompleted = isModuleCompleted(mod.id);

              return (
                <SidebarMenuItem key={mod.id}>
                  <SidebarMenuButton
                    render={<Link href={getTopicHref(mod.id, 1)} onClick={handleNavigate} />}
                    isActive={isExpanded}
                    className="py-2 h-auto"
                  >
                    <div
                      className={cn(
                        "size-6 rounded flex items-center justify-center shrink-0",
                        modCompleted
                          ? "bg-cdi-green/20 text-cdi-green"
                          : isExpanded
                            ? "bg-cdi-green text-white"
                            : "bg-muted text-muted-foreground"
                      )}
                    >
                      {modCompleted ? <CheckIcon /> : <ModuleIcon name={mod.icon} className="size-3.5" />}
                    </div>
                    <span
                      className={cn(
                        "text-xs font-medium truncate",
                        isExpanded ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {mod.title}
                    </span>
                  </SidebarMenuButton>

                  {isExpanded && (
                    <SidebarMenuSub>
                      {mod.topics.map((topic) => {
                        const href = getTopicHref(mod.id, topic.id);
                        const isActive = pathname === href;
                        const completed = isTopicCompleted(mod.id, topic.id);

                        return (
                          <SidebarMenuSubItem key={topic.id}>
                            <SidebarMenuSubButton
                              render={<Link href={href} onClick={handleNavigate} />}
                              isActive={isActive}
                              className={cn(
                                "h-auto py-1.5",
                                isActive &&
                                  "bg-cdi-green/10 border border-cdi-green/20 text-cdi-green"
                              )}
                            >
                              <div
                                className={cn(
                                  "size-4 rounded flex items-center justify-center text-[8px] font-mono font-bold shrink-0",
                                  completed
                                    ? "bg-cdi-green/20 text-cdi-green"
                                    : isActive
                                      ? "bg-cdi-green text-white"
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
                                  "truncate text-xs",
                                  isActive
                                    ? "text-cdi-green font-medium"
                                    : "text-muted-foreground"
                                )}
                              >
                                {topic.title}
                              </span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-muted-foreground">Progress</span>
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
            handleNavigate();
            router.push("/module/1/topic/1");
          }}
          className="w-full px-3 py-2 rounded-lg text-xs font-mono text-muted-foreground hover:text-cdi-green hover:bg-cdi-green/5 hover:border-cdi-green/30 border border-sidebar-border transition-all"
        >
          Restart Training
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
