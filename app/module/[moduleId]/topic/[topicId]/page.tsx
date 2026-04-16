import { MODULES } from "@/lib/modules-data";
import { TopicPageClient } from "./topic-page-client";

export function generateStaticParams() {
  const params: { moduleId: string; topicId: string }[] = [];
  for (const mod of MODULES) {
    for (const topic of mod.topics) {
      params.push({ moduleId: String(mod.id), topicId: String(topic.id) });
    }
  }
  return params;
}

export default function TopicPageRoute() {
  return <TopicPageClient />;
}
