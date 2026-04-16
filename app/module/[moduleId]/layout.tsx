import { TrainingSidebar } from "@/components/training-sidebar";
import { TrainingProvider } from "@/lib/training-context";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TrainingProvider>
      <SidebarProvider>
        <TrainingSidebar />
        <SidebarInset>
          {/* Mobile trigger bar */}
          <div className="md:hidden sticky top-0 z-20 flex items-center gap-2 border-b border-border bg-background/80 backdrop-blur-md px-4 py-2">
            <SidebarTrigger />
            <span className="text-sm font-mono text-muted-foreground">CDI Training</span>
          </div>
          <main className="flex-1 flex flex-col overflow-y-auto">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </TrainingProvider>
  );
}
