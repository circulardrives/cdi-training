"use client";

import { useParams } from "next/navigation";
import { getModule, getTopic } from "@/lib/modules-data";
import { TopicPage } from "@/components/topic-page";
import { Module1Content } from "@/components/modules/module1";
import { Module2Content } from "@/components/modules/module2";
import { Module3Content } from "@/components/modules/module3";
import { Module4Content } from "@/components/modules/module4";
import { Module5Content } from "@/components/modules/module5";

const CONTENT_MAP: Record<number, React.ComponentType<{ topicId: number }>> = {
  1: Module1Content,
  2: Module2Content,
  3: Module3Content,
  4: Module4Content,
  5: Module5Content,
};

export function TopicPageClient() {
  const params = useParams();
  const moduleId = parseInt(params.moduleId as string, 10);
  const topicId = parseInt(params.topicId as string, 10);

  const mod = getModule(moduleId);
  const topic = getTopic(moduleId, topicId);
  if (!mod || !topic) return null;

  const ContentComponent = CONTENT_MAP[moduleId];
  if (!ContentComponent) return null;

  return (
    <TopicPage moduleId={moduleId} topicId={topicId}>
      <ContentComponent topicId={topicId} />
    </TopicPage>
  );
}
