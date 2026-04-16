import { TrainingSidebar } from "@/components/training-sidebar";
import { TrainingProvider } from "@/lib/training-context";

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TrainingProvider>
      <div className="flex min-h-screen">
        <TrainingSidebar />
        <main className="flex-1 flex flex-col overflow-y-auto">{children}</main>
      </div>
    </TrainingProvider>
  );
}
