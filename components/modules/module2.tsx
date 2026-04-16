"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Topic 1 – Principles of Circularity                              */
/* ------------------------------------------------------------------ */

const circularityLevels = [
  {
    rank: 1,
    label: "Use / Life Extension",
    description:
      "Predictive failure analysis, firmware upgrades, and proactive maintenance keep drives operating longer.",
    impact: "Highest impact",
    color: "bg-cdi-green/10 border-cdi-green/30 text-cdi-green",
    barWidth: "w-full",
  },
  {
    rank: 2,
    label: "Reuse",
    description:
      "Redeploy drives into secondary workloads. Saves 5.5 kg CO2e per HDD — 275x more than recycling.",
    impact: "5.5 kg CO2e saved per HDD",
    color: "bg-cdi-teal/10 border-cdi-teal/30 text-cdi-teal",
    barWidth: "w-[82%]",
  },
  {
    rank: 3,
    label: "Repair / Refurbish",
    description:
      "Replace failed components and return drives to a known-good state for continued service.",
    impact: "High impact",
    color: "bg-cdi-spruce/10 border-cdi-spruce/30 text-cdi-spruce",
    barWidth: "w-[60%]",
  },
  {
    rank: 4,
    label: "Recycle",
    description:
      "Shred and recover raw materials. Important, but captures only a fraction of embedded value.",
    impact: "0.02 kg CO2e saved per HDD",
    color: "bg-gray-100 border-gray-300 text-gray-600",
    barWidth: "w-[20%]",
  },
];

function Topic1() {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed">
        A circular economy keeps resources in use for as long as possible,
        extracting maximum value before recovery. In the storage industry, the
        priority hierarchy determines which strategy delivers the greatest
        environmental and economic return.
      </p>

      {/* Priority hierarchy */}
      <div className="space-y-3">
        {circularityLevels.map((level) => (
          <div
            key={level.rank}
            className={cn(
              "rounded-lg border-l-4 p-4 transition-all",
              level.color
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold shadow-sm">
                    {level.rank}
                  </span>
                  <h4 className="font-semibold">{level.label}</h4>
                </div>
                <p className="text-sm text-gray-600">{level.description}</p>
              </div>
              <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-medium shadow-sm">
                {level.impact}
              </span>
            </div>
            {/* impact bar */}
            <div className="mt-3 h-2 w-full rounded-full bg-white/60">
              <div
                className={cn("h-2 rounded-full bg-current", level.barWidth)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dramatic stat comparison */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-cdi-green/30 bg-cdi-green/5 p-6 text-center">
          <p className="text-4xl font-extrabold text-cdi-green">5.5 kg</p>
          <p className="mt-1 text-sm font-medium text-cdi-green/80">
            CO2e saved per HDD via Reuse
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
          <p className="text-4xl font-extrabold text-gray-400">0.02 kg</p>
          <p className="mt-1 text-sm font-medium text-gray-400">
            CO2e saved per HDD via Recycling
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-sm font-semibold text-cdi-green mb-1">
          Key Takeaway
        </p>
        <p className="text-sm text-gray-700">
          Reuse delivers 275 times the carbon benefit of recycling for a single
          hard drive. Always prioritize keeping drives in service over material
          recovery.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Topic 2 – The Economic Imperative                                 */
/* ------------------------------------------------------------------ */

const demandStats = [
  { value: "831 EB", label: "HDD shipments (2023)", accent: "text-cdi-green" },
  { value: "365 EB", label: "SSD shipments (2023)", accent: "text-cdi-teal" },
  {
    value: "475x",
    label: "Storage base growth by 2035",
    accent: "text-cdi-spruce",
  },
  {
    value: "50-80%",
    label: "Cost reduction via refurbished drives",
    accent: "text-cdi-green",
  },
];

const secondaryWorkloads = [
  { name: "Archival / Cold Storage", icon: "📦" },
  { name: "Lower-throughput Applications", icon: "📊" },
  { name: "Cryptocurrency Mining", icon: "⛏️" },
  { name: "Development & Testing", icon: "🧪" },
];

function Topic2() {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed">
        Global data demand is accelerating at an unprecedented rate. The gap
        between new-drive supply and total storage demand creates a massive
        opportunity for refurbished and secondary-market drives.
      </p>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3">
        {demandStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm"
          >
            <p className={cn("text-3xl font-extrabold", stat.accent)}>
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Supply gap explanation */}
      <div className="rounded-lg border border-cdi-teal/20 bg-cdi-teal/5 p-5">
        <h4 className="text-sm font-semibold text-cdi-teal mb-2">
          The Supply Gap
        </h4>
        <p className="text-sm text-gray-700">
          With a 475x expansion in the storage base projected by 2035, new
          manufacturing alone cannot keep pace. Refurbished drives fill this gap
          at 50-80% lower cost while extending the useful life of existing
          hardware.
        </p>
      </div>

      {/* Secondary market workloads */}
      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-3">
          Secondary Market Workloads (Non-Cannibalizing)
        </h4>
        <p className="text-sm text-gray-600 mb-3">
          Secondary markets serve fundamentally different use cases than primary
          sales, so they expand the total addressable market rather than
          competing with it.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {secondaryWorkloads.map((w) => (
            <div
              key={w.name}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-3 text-sm"
            >
              <span className="text-lg">{w.icon}</span>
              <span className="text-gray-700">{w.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-sm font-semibold text-cdi-green mb-1">
          Key Takeaway
        </p>
        <p className="text-sm text-gray-700">
          Refurbished drives address workloads that new drives are not
          cost-effective for. Secondary markets complement primary sales, closing
          the supply gap without cannibalization.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Topic 3 – Incentivizing Reuse via GHG Allocation                  */
/* ------------------------------------------------------------------ */

function Topic3() {
  const [method, setMethod] = useState<"cutoff" | "cff">("cutoff");

  return (
    <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed">
        How we allocate greenhouse-gas emissions between a drive's first and
        second life determines whether organizations are financially incentivized
        to return hardware for reuse. The accounting method matters.
      </p>

      {/* Toggle */}
      <div className="flex items-center justify-center gap-1 rounded-full border border-gray-200 bg-gray-50 p-1 max-w-md mx-auto">
        <button
          onClick={() => setMethod("cutoff")}
          className={cn(
            "flex-1 rounded-full px-4 py-2 text-sm font-medium transition-all",
            method === "cutoff"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          Cutoff Method
        </button>
        <button
          onClick={() => setMethod("cff")}
          className={cn(
            "flex-1 rounded-full px-4 py-2 text-sm font-medium transition-all",
            method === "cff"
              ? "bg-cdi-green text-white shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          Circular Footprint Formula
        </button>
      </div>

      {/* Visual diagram */}
      {method === "cutoff" ? (
        <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-5">
          <h4 className="text-sm font-bold text-gray-800 text-center">
            Cutoff Method (Traditional)
          </h4>

          {/* First user bar */}
          <div>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>First User</span>
              <span className="font-semibold text-gray-800">
                100% of manufacturing emissions
              </span>
            </div>
            <div className="h-8 w-full rounded-lg bg-red-100 border border-red-200 flex items-center justify-center">
              <span className="text-xs font-medium text-red-700">
                Full carbon burden
              </span>
            </div>
          </div>

          {/* Second user bar */}
          <div>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>Second User</span>
              <span className="font-semibold text-gray-800">
                0% of manufacturing emissions
              </span>
            </div>
            <div className="h-8 w-full rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
              <span className="text-xs font-medium text-gray-400">
                No allocated burden
              </span>
            </div>
          </div>

          <div className="rounded-lg bg-red-50 border border-red-200 p-4">
            <p className="text-sm text-red-800">
              <span className="font-semibold">Problem:</span> The first user
              bears all manufacturing carbon with no benefit for returning the
              drive. There is zero incentive to participate in circular programs.
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-cdi-green/20 bg-white p-6 space-y-5">
          <h4 className="text-sm font-bold text-cdi-green text-center">
            Circular Footprint Formula (CFF)
          </h4>

          {/* First user bar */}
          <div>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>First User</span>
              <span className="font-semibold text-cdi-green">
                ~50% of manufacturing emissions
              </span>
            </div>
            <div className="h-8 flex rounded-lg overflow-hidden border border-cdi-green/20">
              <div className="w-1/2 bg-cdi-green/20 flex items-center justify-center">
                <span className="text-xs font-medium text-cdi-green">
                  Shared burden
                </span>
              </div>
              <div className="w-1/2 bg-cdi-green/5 flex items-center justify-center">
                <span className="text-xs font-medium text-cdi-green/50">
                  Credit for return
                </span>
              </div>
            </div>
          </div>

          {/* Second user bar */}
          <div>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>Second User</span>
              <span className="font-semibold text-cdi-teal">
                ~50% of manufacturing emissions
              </span>
            </div>
            <div className="h-8 flex rounded-lg overflow-hidden border border-cdi-teal/20">
              <div className="w-1/2 bg-cdi-teal/20 flex items-center justify-center">
                <span className="text-xs font-medium text-cdi-teal">
                  Shared burden
                </span>
              </div>
              <div className="w-1/2 bg-cdi-teal/5 flex items-center justify-center">
                <span className="text-xs font-medium text-cdi-teal/50">
                  Accepts allocation
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-cdi-green/5 border border-cdi-green/20 p-4">
            <p className="text-sm text-gray-800">
              <span className="font-semibold text-cdi-green">Solution:</span>{" "}
              Splitting emissions ~50/50 gives the first user a carbon credit
              for returning hardware, while the second user accepts a fair share.
              Both parties benefit from circular participation.
            </p>
          </div>
        </div>
      )}

      {/* Side-by-side summary */}
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs text-gray-500 mb-1">Cutoff Method</p>
          <p className="text-sm font-semibold text-gray-800">No incentive</p>
          <p className="text-xs text-gray-500 mt-1">to return drives</p>
        </div>
        <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-4">
          <p className="text-xs text-cdi-green mb-1">CFF</p>
          <p className="text-sm font-semibold text-cdi-green">
            Both users benefit
          </p>
          <p className="text-xs text-gray-500 mt-1">from circular programs</p>
        </div>
      </div>

      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-sm font-semibold text-cdi-green mb-1">
          Key Takeaway
        </p>
        <p className="text-sm text-gray-700">
          The Circular Footprint Formula creates a shared-incentive model that
          rewards both the organization returning hardware and the one reusing
          it. Switching from the Cutoff Method to CFF is essential for scaling
          circular storage programs.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Topic 4 – Hardware Interoperability & Recovery                    */
/* ------------------------------------------------------------------ */

const interopCards = [
  {
    title: "OCP Open Standards",
    icon: "🔓",
    accent: "border-cdi-teal/30 bg-cdi-teal/5",
    accentText: "text-cdi-teal",
    points: [
      "Open Compute Project defines hardware specs that enable cross-organization drive reuse",
      "Standardized form factors, interfaces, and firmware APIs reduce lock-in",
      "Drives from one hyperscaler can be redeployed in another's infrastructure",
    ],
  },
  {
    title: "Robotic Micro-Factories",
    icon: "🤖",
    accent: "border-cdi-spruce/30 bg-cdi-spruce/5",
    accentText: "text-cdi-spruce",
    points: [
      "Non-destructive HDD disassembly using robotic automation",
      "Separate platters from rare-earth magnets without damage",
      "Enables component-level reuse and targeted recycling of high-value materials",
    ],
  },
];

function Topic4() {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed">
        Scaling circularity requires both interoperable hardware standards and
        advanced recovery processes. Open standards enable drives to flow between
        organizations, while robotic disassembly unlocks value from
        end-of-service hardware.
      </p>

      {/* Info cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {interopCards.map((card) => (
          <div
            key={card.title}
            className={cn("rounded-xl border p-5", card.accent)}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{card.icon}</span>
              <h4 className={cn("font-semibold text-sm", card.accentText)}>
                {card.title}
              </h4>
            </div>
            <ul className="space-y-2">
              {card.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className={cn("mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-current", card.accentText)} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Microsoft stat */}
      <div className="rounded-xl border border-cdi-green/30 bg-cdi-green/5 p-6 text-center">
        <p className="text-sm text-gray-500 mb-1">Industry Benchmark</p>
        <p className="text-4xl font-extrabold text-cdi-green">90%</p>
        <p className="mt-1 text-sm font-medium text-gray-700">
          Microsoft's target reuse rate for decommissioned drives by 2025
        </p>
      </div>

      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-sm font-semibold text-cdi-green mb-1">
          Key Takeaway
        </p>
        <p className="text-sm text-gray-700">
          OCP open standards and robotic micro-factories are the infrastructure
          layer that makes circular storage possible at scale. Industry leaders
          are already targeting 90% reuse rates.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported Module Component                                         */
/* ------------------------------------------------------------------ */

const topics: Record<number, { title: string; Component: () => React.ReactNode }> = {
  1: { title: "Principles of Circularity", Component: Topic1 },
  2: { title: "The Economic Imperative", Component: Topic2 },
  3: { title: "Incentivizing Reuse via GHG Allocation", Component: Topic3 },
  4: { title: "Hardware Interoperability & Recovery", Component: Topic4 },
};

export function Module2Content({ topicId }: { topicId: number }) {
  const topic = topics[topicId];

  if (!topic) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
        <p className="text-sm text-red-600">
          Topic {topicId} not found in Module 2.
        </p>
      </div>
    );
  }

  const { Component } = topic;

  return (
    <div className="space-y-6">
      <Component />
    </div>
  );
}
