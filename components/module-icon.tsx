import {
  LeafIcon,
  RecycleIcon,
  ShieldCheckIcon,
  HardDriveIcon,
  AwardIcon,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  leaf: LeafIcon,
  recycle: RecycleIcon,
  shield: ShieldCheckIcon,
  drive: HardDriveIcon,
  award: AwardIcon,
};

export function ModuleIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? LeafIcon;
  return <Icon className={cn("size-4", className)} />;
}
