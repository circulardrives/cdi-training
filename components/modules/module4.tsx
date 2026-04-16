"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Topic 1 — The Clear Method                                        */
/* ------------------------------------------------------------------ */

function Topic1() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">The Clear Method</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Clear uses <strong>logical techniques</strong> to sanitize data on
          user-addressable storage locations. It protects against simple,
          non-invasive data recovery attempts -- the kind performed through
          standard host interfaces like file recovery utilities. Importantly,
          Clear has no negative impact on device usability: the drive remains
          fully functional afterward.
        </p>
      </div>

      {/* What Clear does vs doesn't do */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-cdi-green/30 bg-cdi-green/10 p-5">
          <p className="text-sm font-bold text-cdi-green mb-3">
            What Clear Does
          </p>
          <ul className="space-y-2">
            {[
              "Overwrites user-addressable storage locations",
              "Prevents recovery via standard host interface tools",
              "Preserves full device functionality for reuse",
              "Fast and easy to execute at scale",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="mt-1 text-cdi-green font-bold">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-sm font-bold text-red-600 mb-3">
            What Clear Does NOT Do
          </p>
          <ul className="space-y-2">
            {[
              "Does NOT target hidden spaces (overprovisioned areas)",
              "Does NOT reach reallocated or bad blocks",
              "Does NOT protect against lab-level recovery techniques",
              "Does NOT meet requirements for sensitive data leaving the org",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="mt-1 text-red-500 font-bold">&#10007;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Addressable vs Hidden Space Visual */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h3 className="font-semibold text-gray-900 mb-4">
          Addressable vs. Hidden Storage Space
        </h3>
        <div className="space-y-3">
          <div className="rounded-lg bg-cdi-green/10 border border-cdi-green/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-cdi-green">
                  User-Addressable Space
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Visible to the operating system and standard tools
                </p>
              </div>
              <span className="rounded-full bg-cdi-green/20 px-3 py-1 text-xs font-semibold text-cdi-green">
                Clear Reaches This
              </span>
            </div>
          </div>
          <div className="rounded-lg bg-gray-100 border border-gray-300 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  Hidden Space (Overprovisioned / Reallocated Blocks)
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Invisible to the OS -- managed by the drive controller
                </p>
              </div>
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                NOT Reached by Clear
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Suitability Callout */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-cdi-teal/30 bg-cdi-teal/10 p-5">
          <p className="text-sm font-semibold text-cdi-teal mb-2">
            When to Use Clear
          </p>
          <ul className="space-y-1.5">
            {[
              "Low-risk or non-sensitive data",
              "Internal reuse within the same organization",
              "Quick turnaround needed for internal redeployment",
            ].map((item) => (
              <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cdi-teal shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-5">
          <p className="text-sm font-semibold text-red-600 mb-2">
            When NOT to Use Clear
          </p>
          <ul className="space-y-1.5">
            {[
              "Sensitive data leaving the organization",
              "Drives destined for resale or external transfer",
              "Regulatory compliance requires Purge or Destruct",
            ].map((item) => (
              <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Key takeaway */}
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-sm font-semibold text-cdi-green mb-1">
          Key Takeaway
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Clear is the lightest sanitization method -- effective against casual
          recovery attempts and ideal for low-risk internal reuse. However, it
          cannot reach hidden storage areas, making it unsuitable for sensitive
          data that will leave organizational control.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Topic 2 — The Purge Method (The Key to Circularity)               */
/* ------------------------------------------------------------------ */

function Topic2() {
  const [activeTab, setActiveTab] = useState<
    "cryptographic" | "block" | "overwrite"
  >("cryptographic");

  const techniques = {
    cryptographic: {
      title: "Cryptographic Erase (CE)",
      icon: "\uD83D\uDD10",
      speed: "Seconds",
      mediaType: "Any self-encrypting drive (SED)",
      securityLevel: "Very High",
      description:
        "Destroys the media encryption key (MEK), rendering all data on the drive cryptographically unrecoverable. The fastest Purge technique -- completes in seconds regardless of drive capacity.",
      details: [
        "Requires AES-128 or stronger encryption",
        "High entropy key generation is essential",
        "ALL copies of the encryption key must be destroyed",
        "Highly scalable -- ideal for large fleet operations",
        "Drive remains fully functional with a new key",
      ],
    },
    block: {
      title: "Block Erase",
      icon: "\u26A1",
      speed: "Seconds to Minutes",
      mediaType: "NAND flash / SSDs",
      securityLevel: "High",
      description:
        "Zeros entire erase blocks in a single operation. Uniquely effective for flash storage because it reaches both accessible AND inaccessible blocks managed by the drive controller.",
      details: [
        "Designed specifically for NAND flash architecture",
        "Single operation zeros entire erase blocks",
        "Reaches inaccessible blocks (overprovisioned areas)",
        "Preserves NAND endurance better than repeated writes",
        "Fast execution -- seconds to minutes for most drives",
      ],
    },
    overwrite: {
      title: "Overwrite",
      icon: "\uD83D\uDCDD",
      speed: "Hours to Days",
      mediaType: "HDDs (primarily)",
      securityLevel: "High",
      description:
        "Writes a fixed pattern across the entire media surface. When using device-level commands that target non-addressable areas, this elevates from a Clear to a Purge technique.",
      details: [
        "Writes fixed pattern across entire media surface",
        "Device commands target non-addressable areas (elevates to Purge)",
        "Standard method for older HDDs without encryption",
        "Can take hours or days on large-capacity drives",
        "Well-understood and widely supported technique",
      ],
    },
  };

  const tabs = [
    { key: "cryptographic" as const, label: "Cryptographic Erase" },
    { key: "block" as const, label: "Block Erase" },
    { key: "overwrite" as const, label: "Overwrite" },
  ];

  const t = techniques[activeTab];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">
          The Purge Method
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Purge applies physical or logical techniques that make data recovery
          infeasible even with state-of-the-art laboratory techniques --{" "}
          <strong>while keeping the device fully reusable</strong>. IEEE 2883
          defines three Purge techniques, each suited to different media types
          and operational needs.
        </p>
      </div>

      {/* Circularity callout */}
      <div className="rounded-xl border-2 border-cdi-green bg-cdi-green/10 p-6">
        <div className="flex items-start gap-3">
          <span className="text-3xl">&#x267B;&#xFE0F;</span>
          <div>
            <p className="text-lg font-bold text-cdi-green">
              Purge Is the Key to Circularity
            </p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Purge is the method that makes the circular economy for storage
              possible. It provides the same data security assurance as physical
              destruction -- recovery is infeasible even in a lab -- while
              preserving the drive for reuse, resale, or responsible recycling.
              This is the bridge between data security and sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Technique Tabs */}
      <div>
        <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-semibold transition-all",
                activeTab === tab.key
                  ? "bg-white text-cdi-green shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active technique detail */}
        <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6 space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{t.icon}</span>
            <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            {t.description}
          </p>

          <ul className="space-y-2">
            {t.details.map((d) => (
              <li
                key={d}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cdi-green shrink-0" />
                {d}
              </li>
            ))}
          </ul>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-cdi-green/10 p-3 text-center">
              <p className="text-xs text-gray-500">Speed</p>
              <p className="text-sm font-bold text-cdi-green">{t.speed}</p>
            </div>
            <div className="rounded-lg bg-cdi-teal/10 p-3 text-center">
              <p className="text-xs text-gray-500">Media Type</p>
              <p className="text-sm font-bold text-cdi-teal">{t.mediaType}</p>
            </div>
            <div className="rounded-lg bg-cdi-spruce/10 p-3 text-center">
              <p className="text-xs text-gray-500">Security Level</p>
              <p className="text-sm font-bold text-cdi-spruce">
                {t.securityLevel}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900 text-sm">
            Purge Techniques at a Glance
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-5 py-3 text-left font-semibold text-gray-700">
                  Technique
                </th>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">
                  Speed
                </th>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">
                  Best For
                </th>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">
                  Security
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-50">
                <td className="px-5 py-3 font-medium text-gray-900">
                  Cryptographic Erase
                </td>
                <td className="px-5 py-3 text-gray-600">Seconds</td>
                <td className="px-5 py-3 text-gray-600">
                  Self-encrypting drives (SED)
                </td>
                <td className="px-5 py-3">
                  <span className="rounded-full bg-cdi-green/10 px-2.5 py-0.5 text-xs font-semibold text-cdi-green">
                    Very High
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="px-5 py-3 font-medium text-gray-900">
                  Block Erase
                </td>
                <td className="px-5 py-3 text-gray-600">Seconds -- Minutes</td>
                <td className="px-5 py-3 text-gray-600">NAND flash / SSDs</td>
                <td className="px-5 py-3">
                  <span className="rounded-full bg-cdi-green/10 px-2.5 py-0.5 text-xs font-semibold text-cdi-green">
                    High
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-gray-900">
                  Overwrite
                </td>
                <td className="px-5 py-3 text-gray-600">Hours -- Days</td>
                <td className="px-5 py-3 text-gray-600">
                  HDDs without encryption
                </td>
                <td className="px-5 py-3">
                  <span className="rounded-full bg-cdi-green/10 px-2.5 py-0.5 text-xs font-semibold text-cdi-green">
                    High
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key takeaway */}
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-sm font-semibold text-cdi-green mb-1">
          Key Takeaway
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Purge makes data recovery infeasible even with state-of-the-art
          laboratory techniques -- while keeping the device fully reusable. Of
          the three techniques, Cryptographic Erase is the fastest and most
          scalable, completing in seconds regardless of drive capacity. Purge is
          the foundation of circular storage programs.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Topic 3 — The Destruct Method                                     */
/* ------------------------------------------------------------------ */

function Topic3() {
  const approvedTechniques = [
    {
      title: "Melt",
      icon: "\uD83C\uDF2B\uFE0F",
      description:
        "Liquefies the storage media completely, eliminating all data-bearing surfaces. No fragment survives in a readable form.",
      color: "border-cdi-green/30 bg-cdi-green/10",
      accent: "text-cdi-green",
    },
    {
      title: "Incinerate",
      icon: "\uD83D\uDD25",
      description:
        "Burns the storage media at temperatures sufficient to fully destroy all data-bearing materials. Complete and verifiable elimination.",
      color: "border-cdi-teal/30 bg-cdi-teal/10",
      accent: "text-cdi-teal",
    },
    {
      title: "Disintegrate",
      icon: "\u2699\uFE0F",
      description:
        "Reduces the media to fine particles through industrial disintegrators. Particle size must be small enough to preclude any data reconstruction.",
      color: "border-cdi-spruce/30 bg-cdi-spruce/10",
      accent: "text-cdi-spruce",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">
          The Destruct Method
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Destruct is the physical destruction of storage media -- the device
          can <strong>never be used again</strong>. This is the last resort when
          drives are broken, Purge verification has failed, or the media is
          obsolete. It should never be the default choice for functional drives.
        </p>
      </div>

      {/* Last resort callout */}
      <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-6">
        <div className="flex items-start gap-3">
          <span className="text-3xl">&#9888;&#65039;</span>
          <div>
            <p className="text-lg font-bold text-amber-700">
              Destruct = Last Resort, Not Default
            </p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              Physical destruction permanently eliminates both the data and the
              device. Every drive destroyed is a drive that cannot be reused,
              resold, or responsibly recycled. Reserve Destruct for situations
              where Purge is genuinely not possible: broken drives, failed Purge
              verification, or obsolete media types.
            </p>
          </div>
        </div>
      </div>

      {/* Shredding Warning */}
      <div className="rounded-xl border-2 border-red-400 bg-red-50 p-6">
        <div className="flex items-start gap-3">
          <span className="text-3xl">&#128680;</span>
          <div>
            <p className="text-lg font-bold text-red-700">
              Critical: Shredding Is Increasingly Obsolete
            </p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              A <strong>2mm fragment</strong> of a modern HDD platter can hold
              massive amounts of data. As storage density increases, shredding
              and pulverizing produce fragments that are still large enough to
              contain recoverable information. Shredding is only acceptable as
              an <strong>interim step before melting</strong> -- never as a
              standalone destruction method.
            </p>
          </div>
        </div>
      </div>

      {/* Approved Technique Cards */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">
          Approved Destruction Techniques
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {approvedTechniques.map((tech) => (
            <div
              key={tech.title}
              className={cn(
                "rounded-xl border p-5 text-center",
                tech.color
              )}
            >
              <span className="text-3xl">{tech.icon}</span>
              <h4 className={cn("mt-3 text-lg font-bold", tech.accent)}>
                {tech.title}
              </h4>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* When to use Destruct */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h3 className="font-semibold text-gray-900 mb-4">
          When Is Destruct Appropriate?
        </h3>
        <div className="space-y-3">
          {[
            {
              scenario: "Drive is physically broken",
              reason:
                "Cannot execute Purge commands on non-functional hardware",
            },
            {
              scenario: "Purge verification failed",
              reason:
                "If sanitization cannot be verified, the drive must be destroyed",
            },
            {
              scenario: "Obsolete media type",
              reason:
                "No validated Purge tools available for the specific media",
            },
          ].map((item) => (
            <div
              key={item.scenario}
              className="flex items-start gap-3 rounded-lg bg-gray-50 p-4"
            >
              <span className="mt-0.5 text-red-500 font-bold text-sm">
                &#10005;
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {item.scenario}
                </p>
                <p className="text-sm text-gray-600 mt-0.5">{item.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key takeaway */}
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-sm font-semibold text-cdi-green mb-1">
          Key Takeaway
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Destruct is a permanent, irreversible action -- the drive is gone
          forever. The only approved techniques are Melt, Incinerate, and
          Disintegrate. Shredding alone is no longer sufficient due to modern
          storage densities. Always attempt Purge first; Destruct should only be
          used when reuse is genuinely impossible.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported Module4Content router                                     */
/* ------------------------------------------------------------------ */

export function Module4Content({ topicId }: { topicId: number }) {
  switch (topicId) {
    case 1:
      return <Topic1 />;
    case 2:
      return <Topic2 />;
    case 3:
      return <Topic3 />;
    default:
      return (
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center text-gray-500">
          Topic not found.
        </div>
      );
  }
}
