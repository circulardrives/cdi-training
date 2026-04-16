import { MODULES } from "@/lib/modules-data";
import { ModuleLandingClient } from "./module-landing-client";

export function generateStaticParams() {
  return MODULES.map((m) => ({ moduleId: String(m.id) }));
}

export default function ModuleLandingPage() {
  return <ModuleLandingClient />;
}
