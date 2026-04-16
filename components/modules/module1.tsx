"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Topic 1 — The E-Waste Challenge                                   */
/* ------------------------------------------------------------------ */

function Topic1() {
  const stats = [
    { value: "62B kg", label: "E-waste generated globally in 2022" },
    { value: "22.3%", label: "Collected and properly recycled" },
    { value: "259M", label: "HDDs shipped in 2021" },
    { value: "429M", label: "SSDs shipped in 2021" },
    { value: "475x", label: "Projected storage base growth by 2035 vs 2010" },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">
          The E-Waste Challenge
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Our economy follows a <strong>take-make-waste</strong> linear model:
          raw materials are extracted, turned into products, used briefly, then
          discarded. For data storage hardware, this cycle is accelerating at an
          alarming pace -- and the environmental cost is staggering.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((s) => (
          <div
            key={s.value}
            className="rounded-xl border border-cdi-green/30 bg-cdi-green/10 p-5 text-center"
          >
            <p className="text-3xl font-extrabold text-cdi-green">{s.value}</p>
            <p className="mt-2 text-xs text-gray-500 leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Linear economy explainer */}
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="font-semibold text-gray-900 mb-3">
          The Linear Economy Problem
        </h3>
        <div className="flex flex-wrap items-center gap-2 text-sm font-mono text-gray-500">
          <span className="rounded bg-gray-100 px-3 py-1">Extract</span>
          <span>&rarr;</span>
          <span className="rounded bg-gray-100 px-3 py-1">Manufacture</span>
          <span>&rarr;</span>
          <span className="rounded bg-gray-100 px-3 py-1">Use</span>
          <span>&rarr;</span>
          <span className="rounded bg-red-50 px-3 py-1 text-red-600">
            Waste
          </span>
        </div>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          Each year, hundreds of millions of storage drives follow this
          one-way path. Materials, energy, and economic value are permanently
          lost. The projected 475x growth in installed storage only amplifies the
          urgency of breaking this cycle.
        </p>
      </div>

      {/* Key takeaway */}
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-sm font-semibold text-cdi-green mb-1">
          Key Takeaway
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          The linear economy model is unsustainable for data storage. With
          e-waste growing and recycling rates stuck below 25%, the industry
          needs a circular approach that keeps drives and their materials in
          productive use for as long as possible.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Topic 2 — Environmental Impact of Storage                         */
/* ------------------------------------------------------------------ */

function Topic2() {
  const [activeType, setActiveType] = useState<"hdd" | "ssd">("hdd");

  const profiles = {
    hdd: {
      title: "Hard Disk Drive (HDD)",
      highlight: "87%",
      highlightLabel: "of GHG emissions from use-phase power consumption",
      details: [
        "Spinning platters require continuous power",
        "Use-phase electricity dominates the carbon footprint",
        "Manufacturing impact is comparatively small",
        "Longer lifespan can amortize embodied carbon effectively",
      ],
    },
    ssd: {
      title: "Solid State Drive (SSD)",
      highlight: "~50%",
      highlightLabel: "of GHG emissions from NAND flash manufacturing",
      details: [
        "No moving parts means lower operational power",
        "NAND flash fabrication is extremely energy-intensive",
        "Carbon footprint scales linearly with capacity",
        "A 2 TB SSD has roughly 2x the manufacturing carbon of a 1 TB SSD",
      ],
    },
  };

  const p = profiles[activeType];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">
          Environmental Impact of Storage
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          HDDs and SSDs have fundamentally different environmental profiles.
          Understanding where carbon emissions concentrate in each lifecycle is
          critical for making sustainable storage decisions.
        </p>
      </div>

      {/* Toggle */}
      <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
        {(["hdd", "ssd"] as const).map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={cn(
              "rounded-md px-5 py-2 text-sm font-semibold transition-all",
              activeType === type
                ? "bg-white text-cdi-green shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Profile card */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-5">
        <h3 className="font-semibold text-gray-900 text-lg">{p.title}</h3>

        <div
          className={cn(
            "rounded-lg p-5 text-center",
            activeType === "hdd"
              ? "bg-cdi-teal/10"
              : "bg-cdi-spruce/10"
          )}
        >
          <p
            className={cn(
              "text-5xl font-extrabold",
              activeType === "hdd" ? "text-cdi-teal" : "text-cdi-spruce"
            )}
          >
            {p.highlight}
          </p>
          <p className="mt-2 text-sm text-gray-600">{p.highlightLabel}</p>
        </div>

        <ul className="space-y-2">
          {p.details.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cdi-green shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>

      {/* Key takeaway */}
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-sm font-semibold text-cdi-green mb-1">
          Key Takeaway
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          HDD carbon is dominated by use-phase power; SSD carbon is dominated by
          manufacturing. This means extending SSD life or enabling reuse has an
          outsized impact on reducing total lifecycle emissions.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Topic 3 — GHG Accounting Basics                                   */
/* ------------------------------------------------------------------ */

function Topic3() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const scopes = [
    {
      num: 1,
      title: "Scope 1 -- Direct Emissions",
      summary: "GHG emissions from sources the company owns or controls.",
      details:
        "Includes on-site fuel combustion, company vehicles, and fugitive emissions. For storage manufacturers, this covers factory operations and company-owned transport.",
      color: "bg-cdi-green/10 border-cdi-green/30",
      accent: "text-cdi-green",
    },
    {
      num: 2,
      title: "Scope 2 -- Purchased Energy",
      summary: "Indirect emissions from purchased electricity, heat, or steam.",
      details:
        "Data centers running storage drives contribute to Scope 2. The carbon intensity depends on the local energy grid -- renewable grids dramatically lower Scope 2 for storage use-phase.",
      color: "bg-cdi-teal/10 border-cdi-teal/30",
      accent: "text-cdi-teal",
    },
    {
      num: 3,
      title: "Scope 3 -- Value Chain",
      summary:
        "All other indirect emissions across the upstream and downstream value chain.",
      details:
        "For SSDs, Scope 3 includes NAND flash manufacturing, raw material extraction, logistics, and end-of-life processing. Extending first use or enabling reuse directly reduces Scope 3 by amortizing embodied manufacturing carbon over more years of service.",
      color: "bg-cdi-spruce/10 border-cdi-spruce/30",
      accent: "text-cdi-spruce",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">
          GHG Accounting Basics
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          The Greenhouse Gas Protocol divides emissions into three scopes. For
          data storage, understanding these scopes reveals where the biggest
          reduction opportunities lie.
        </p>
      </div>

      {/* Scope cards */}
      <div className="space-y-4">
        {scopes.map((s) => (
          <button
            key={s.num}
            onClick={() => setExpanded(expanded === s.num ? null : s.num)}
            className={cn(
              "w-full text-left rounded-xl border p-5 transition-all",
              s.color
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white",
                    s.num === 1
                      ? "bg-cdi-green"
                      : s.num === 2
                        ? "bg-cdi-teal"
                        : "bg-cdi-spruce"
                  )}
                >
                  {s.num}
                </span>
                <div>
                  <p className={cn("font-semibold", s.accent)}>{s.title}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{s.summary}</p>
                </div>
              </div>
              <span className="text-gray-400 text-lg">
                {expanded === s.num ? "\u2212" : "+"}
              </span>
            </div>
            {expanded === s.num && (
              <p className="mt-4 text-sm text-gray-600 leading-relaxed pl-12">
                {s.details}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Storage callout */}
      <div className="rounded-lg border border-cdi-teal/20 bg-cdi-teal/10 p-5">
        <p className="text-sm font-semibold text-cdi-teal mb-1">
          Why This Matters for Storage
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          For SSDs, Scope 3 emissions (especially manufacturing) can represent
          half the total carbon footprint. Every year a drive stays in service --
          or is securely reused instead of destroyed -- the per-year carbon cost
          drops. This makes drive circularity one of the most effective
          sustainability levers available.
        </p>
      </div>

      {/* Key takeaway */}
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-sm font-semibold text-cdi-green mb-1">
          Key Takeaway
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Extending drive life or enabling secure reuse directly reduces Scope 3
          emissions by amortizing manufacturing carbon over a longer useful
          period. This is the core sustainability case for circular drive
          programs.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Topic 4 — The Destruction Problem                                 */
/* ------------------------------------------------------------------ */

function Topic4() {
  const consequences = [
    {
      title: "Value Destruction",
      description:
        "Fully functional drives with years of remaining service life are shredded. The residual economic value of the hardware is permanently lost.",
      icon: "\u{1F4B8}",
      bg: "bg-cdi-green/10",
    },
    {
      title: "Toxic Waste",
      description:
        "Shredded drive fragments contain lead, mercury, cadmium, and other hazardous materials that contaminate landfills and harm communities.",
      icon: "\u26A0\uFE0F",
      bg: "bg-cdi-teal/10",
    },
    {
      title: "Lost Materials",
      description:
        "Rare-earth metals and specialty alloys used in drives are extremely difficult to recover from shredded waste, breaking the material supply chain.",
      icon: "\u{1F30D}",
      bg: "bg-cdi-spruce/10",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">
          The Destruction Problem
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          When organizations decommission storage drives, the default practice
          is physical destruction. While this guarantees data elimination, it
          comes at an enormous environmental and economic cost.
        </p>
      </div>

      {/* Dramatic stat */}
      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
        <p className="text-7xl font-extrabold text-red-500">~90%</p>
        <p className="mt-3 text-gray-600 text-lg">
          of HDDs are physically destroyed after first use
        </p>
      </div>

      {/* Consequence cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {consequences.map((c) => (
          <div
            key={c.title}
            className={cn("rounded-xl border border-gray-200 p-5", c.bg)}
          >
            <span className="text-2xl">{c.icon}</span>
            <h3 className="mt-3 font-semibold text-gray-900">{c.title}</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {c.description}
            </p>
          </div>
        ))}
      </div>

      {/* Forward-looking callout */}
      <div className="rounded-lg border border-cdi-teal/20 bg-cdi-teal/10 p-5">
        <p className="text-sm font-semibold text-cdi-teal mb-1">
          There Is a Better Way
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Media sanitization -- the process of securely erasing all data from a
          drive to a verifiable standard -- eliminates the need for physical
          destruction. In upcoming modules, you will learn how standards like
          NIST SP 800-88 and IEEE 2883 enable drives to be safely reused or
          recycled without compromising data security.
        </p>
      </div>

      {/* Key takeaway */}
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-sm font-semibold text-cdi-green mb-1">
          Key Takeaway
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Physical destruction is the default, but not the only option. Secure
          media sanitization can achieve the same data security guarantee while
          preserving the drive for reuse -- turning waste back into value.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported Module1Content router                                     */
/* ------------------------------------------------------------------ */

export function Module1Content({ topicId }: { topicId: number }) {
  switch (topicId) {
    case 1:
      return <Topic1 />;
    case 2:
      return <Topic2 />;
    case 3:
      return <Topic3 />;
    case 4:
      return <Topic4 />;
    default:
      return (
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center text-gray-500">
          Topic not found.
        </div>
      );
  }
}
