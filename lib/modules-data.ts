export interface TopicDef {
  id: number;
  title: string;
  subtitle: string;
}

export interface ModuleDef {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  topics: TopicDef[];
}

export const MODULES: ModuleDef[] = [
  {
    id: 1,
    title: "Introduction to Sustainability in Data Storage",
    subtitle: "E-waste crisis & environmental impact",
    description:
      "Understand the environmental impact of the linear economy and the greenhouse gas footprint of data storage in the ICT sector.",
    icon: "leaf",
    topics: [
      { id: 1, title: "The E-Waste Challenge", subtitle: "Linear economy & 62B kg of annual e-waste" },
      { id: 2, title: "Environmental Impact of Storage", subtitle: "HDD vs SSD carbon footprint profiles" },
      { id: 3, title: "GHG Accounting Basics", subtitle: "Scope 1, 2, and 3 emissions explained" },
      { id: 4, title: "The Destruction Problem", subtitle: "Why 90% of HDDs are shredded after first use" },
    ],
  },
  {
    id: 2,
    title: "Circularity in the Storage Economy",
    subtitle: "Reuse, economics & incentives",
    description:
      "Learn the principles of the circular economy, the economic imperatives of drive reuse, and how to measure and incentivize circular behaviors.",
    icon: "recycle",
    topics: [
      { id: 1, title: "Principles of Circularity", subtitle: "From linear waste to circular value" },
      { id: 2, title: "The Economic Imperative", subtitle: "50-80% cost reduction via reuse" },
      { id: 3, title: "Incentivizing Reuse via GHG Allocation", subtitle: "Cutoff Method vs Circular Footprint Formula" },
      { id: 4, title: "Hardware Interoperability & Recovery", subtitle: "OCP standards & robotic disassembly" },
    ],
  },
  {
    id: 3,
    title: "Introduction to Media Sanitization & Risk Assessment",
    subtitle: "Foundations of data security",
    description:
      "Grasp the foundational concepts of data sanitization, regulatory compliance, and risk-based decision-making.",
    icon: "shield",
    topics: [
      { id: 1, title: "What is Sanitization?", subtitle: "Definitions and core concepts" },
      { id: 2, title: "The Target of Sanitization", subtitle: "All logical and physical data locations" },
      { id: 3, title: "Risk Assessment & Threat Agents", subtitle: "Likelihood × Magnitude framework" },
      { id: 4, title: "Regulatory & Compliance Landscape", subtitle: "IEEE 2883, NIST, GDPR, PCI-DSS & more" },
    ],
  },
  {
    id: 4,
    title: "IEEE 2883 and Media Sanitization Methods",
    subtitle: "Clear, Purge & Destruct",
    description:
      "Master the IEEE 2883-2022 standard techniques to securely eliminate data while preserving hardware for reuse where possible.",
    icon: "drive",
    topics: [
      { id: 1, title: "The Clear Method", subtitle: "Logical techniques for user-addressable space" },
      { id: 2, title: "The Purge Method", subtitle: "CE, Block Erase & Overwrite — the key to circularity" },
      { id: 3, title: "The Destruct Method", subtitle: "Physical destruction and its modern limitations" },
    ],
  },
  {
    id: 5,
    title: "Building a Trustworthy Sanitization Program",
    subtitle: "Lifecycle, verification & trust",
    description:
      "Learn how to operationalize, verify, and document a media sanitization program with hardware-level trust guarantees.",
    icon: "award",
    topics: [
      { id: 1, title: "The Data Sanitization Lifecycle", subtitle: "8-step lifecycle from classification to continuous improvement" },
      { id: 2, title: "Verification of Sanitization Outcomes", subtitle: "How to verify Clear, Purge, and Cryptographic Erase" },
      { id: 3, title: "Certificate of Sanitization (CoS)", subtitle: "Required documentation per ISO/IEC 27040" },
      { id: 4, title: "The Future of Trust: Hardware Security", subtitle: "Caliptra, OCP L.O.C.K., and silicon root of trust" },
    ],
  },
];

export function getModule(moduleId: number) {
  return MODULES.find((m) => m.id === moduleId);
}

export function getTopic(moduleId: number, topicId: number) {
  const mod = getModule(moduleId);
  if (!mod) return undefined;
  return mod.topics.find((t) => t.id === topicId);
}

export function getModuleHref(moduleId: number) {
  return `/module/${moduleId}`;
}

export function getTopicHref(moduleId: number, topicId: number) {
  return `/module/${moduleId}/topic/${topicId}`;
}
