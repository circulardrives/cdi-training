"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Topic 1 – What is Sanitization?                                   */
/* ------------------------------------------------------------------ */

function Topic1() {
  return (
    <div className="space-y-8">
      <p className="text-base leading-relaxed text-foreground">
        Media sanitization is the rigorous, standards-driven process of rendering
        access to target data on storage media infeasible for a given level of
        recovery effort. Simply pressing &ldquo;delete&rdquo; is not
        sanitization &mdash; it merely removes the file-system pointer while
        leaving the underlying data intact and recoverable.
      </p>

      {/* Clear definition callout */}
      <div className="rounded-lg border border-cdi-green/30 bg-cdi-green/10 p-5">
        <p className="text-xs font-mono uppercase tracking-wider text-cdi-green mb-2">
          Formal Definition
        </p>
        <p className="text-sm leading-relaxed text-foreground">
          <span className="font-semibold text-cdi-green">Sanitization</span> is
          the process used to render access to target data on the media
          infeasible for a given level of effort.{" "}
          <span className="text-muted-foreground">
            &ldquo;Infeasible&rdquo; means the task cannot be accomplished with
            any known techniques or state-of-the-art tools available today.
          </span>
        </p>
      </div>

      {/* Deletion vs Sanitization comparison */}
      <div>
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
          Deletion vs. Sanitization
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Deletion */}
          <div className="rounded-lg border border-red-200 bg-red-50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="size-8 rounded-md bg-red-100 flex items-center justify-center">
                <svg className="size-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <h4 className="font-semibold text-red-700">Simple Deletion</h4>
            </div>
            <ul className="space-y-2 text-sm text-red-800">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1 shrink-0">&bull;</span>
                Removes file system pointer only
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1 shrink-0">&bull;</span>
                Underlying data remains on disk
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1 shrink-0">&bull;</span>
                Recoverable with basic forensic tools
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1 shrink-0">&bull;</span>
                No audit trail or verification
              </li>
            </ul>
          </div>

          {/* Sanitization */}
          <div className="rounded-lg border border-cdi-green/30 bg-cdi-green/10 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="size-8 rounded-md bg-cdi-green/20 flex items-center justify-center">
                <svg className="size-4 text-cdi-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h4 className="font-semibold text-cdi-green">Sanitization</h4>
            </div>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-cdi-green mt-1 shrink-0">&bull;</span>
                Renders target data infeasible to recover
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cdi-green mt-1 shrink-0">&bull;</span>
                Covers ALL addressable storage areas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cdi-green mt-1 shrink-0">&bull;</span>
                Standards-based (IEEE 2883, NIST 800-88)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cdi-green mt-1 shrink-0">&bull;</span>
                Verified and documented with audit trail
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-xs font-mono uppercase tracking-wider text-cdi-green mb-2">
          Key Takeaway
        </p>
        <p className="text-sm leading-relaxed text-foreground">
          Deletion creates the <em>illusion</em> of data removal.
          Sanitization provides <em>assurance</em> of data removal. Any serious
          data protection program must employ standardized sanitization
          techniques &mdash; not just file deletion &mdash; to ensure that
          sensitive information cannot be recovered.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Topic 2 – The Target of Sanitization                              */
/* ------------------------------------------------------------------ */

const targetCategories = [
  {
    id: "user-data",
    title: "User Data",
    subtitle: "Host-Readable Storage",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    description:
      "The data that users and the operating system can directly read and write. This is the visible, addressable portion of storage that standard file operations interact with.",
    examples: ["Files and folders", "Application data", "OS system files", "User documents"],
    color: "text-cdi-green",
    bgColor: "bg-cdi-green/10",
    borderColor: "border-cdi-green/30",
  },
  {
    id: "previous-target",
    title: "Previous Target Data",
    subtitle: "Reallocated & Bad Blocks",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
    description:
      "Blocks that the drive's firmware has remapped because they were flagged as potentially unreliable. The original data in these blocks is no longer host-accessible but still physically present on the media.",
    examples: ["Bad blocks with stale data", "Reallocated sectors", "Remapped flash pages", "Wear-leveled blocks"],
    color: "text-cdi-teal",
    bgColor: "bg-cdi-teal/10",
    borderColor: "border-cdi-teal/30",
  },
  {
    id: "potential-target",
    title: "Potential Target Data",
    subtitle: "Overprovisioned Areas",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
      </svg>
    ),
    description:
      "Extra storage capacity reserved by the drive manufacturer for performance and reliability management. This space is invisible to the host but may contain fragments of user data from internal operations.",
    examples: ["SSD overprovisioning (7-28%)", "Spare flash blocks", "Drive cache/buffer", "Internal swap areas"],
    color: "text-cdi-spruce",
    bgColor: "bg-cdi-spruce/10",
    borderColor: "border-cdi-spruce/30",
  },
  {
    id: "metadata",
    title: "Metadata",
    subtitle: "File Allocation Tables",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M10.875 12h-1.5m0 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m0-3.75h7.5c.621 0 1.125.504 1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125M13.125 12h7.5" />
      </svg>
    ),
    description:
      "Structural information about how data is organized on the media. File allocation tables, directory entries, and partition information can reveal file names, sizes, timestamps, and locations even after data deletion.",
    examples: ["File allocation tables (FAT/NTFS)", "Directory entries", "Partition tables", "Journal/log files"],
    color: "text-cdi-lilac",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
];

function Topic2() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <p className="text-base leading-relaxed text-foreground">
        Effective sanitization must target <em>every</em> location where data
        resides or has previously resided on the storage media. This extends far
        beyond the user-visible file system &mdash; drives contain hidden areas
        that standard tools cannot reach.
      </p>

      {/* Four target categories as expandable cards */}
      <div>
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
          Four Categories of Sanitization Targets
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targetCategories.map((cat) => {
            const isExpanded = expandedCard === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setExpandedCard(isExpanded ? null : cat.id)}
                className={cn(
                  "rounded-lg border p-5 text-left transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-sm",
                  isExpanded
                    ? `${cat.bgColor} ${cat.borderColor}`
                    : "bg-white border-gray-200 hover:border-gray-300"
                )}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className={cn(
                      "size-9 rounded-md flex items-center justify-center shrink-0",
                      isExpanded ? cat.bgColor : "bg-gray-100",
                      cat.color
                    )}
                  >
                    {cat.icon}
                  </span>
                  <div className="min-w-0">
                    <h4 className={cn("font-semibold text-sm", isExpanded ? cat.color : "text-foreground")}>
                      {cat.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cat.subtitle}</p>
                  </div>
                  <svg
                    className={cn(
                      "size-4 text-muted-foreground shrink-0 ml-auto transition-transform",
                      isExpanded && "rotate-180"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-current/10">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                      Examples
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.examples.map((ex) => (
                        <span
                          key={ex}
                          className={cn(
                            "px-2.5 py-1 rounded-md text-xs font-medium",
                            cat.bgColor,
                            cat.color
                          )}
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual: hidden areas of a drive */}
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
          What the Host Sees vs. What Exists
        </p>
        <div className="space-y-3">
          {/* Host-visible bar */}
          <div>
            <p className="text-xs font-medium text-foreground mb-1.5">
              Host-Visible Storage
            </p>
            <div className="h-8 rounded-md bg-cdi-green/20 border border-cdi-green/30 flex items-center px-3">
              <span className="text-xs font-mono text-cdi-green">User Data + Metadata</span>
            </div>
          </div>
          {/* Full drive bar */}
          <div>
            <p className="text-xs font-medium text-foreground mb-1.5">
              Actual Physical Media
            </p>
            <div className="h-8 rounded-md flex overflow-hidden border border-gray-300">
              <div className="flex-[3] bg-cdi-green/20 flex items-center px-2 border-r border-gray-300">
                <span className="text-[10px] font-mono text-cdi-green truncate">User Data</span>
              </div>
              <div className="flex-1 bg-cdi-teal/15 flex items-center px-2 border-r border-gray-300">
                <span className="text-[10px] font-mono text-cdi-teal truncate">Reallocated</span>
              </div>
              <div className="flex-[1.5] bg-cdi-spruce/15 flex items-center px-2 border-r border-gray-300">
                <span className="text-[10px] font-mono text-cdi-spruce truncate">Overprovisioned</span>
              </div>
              <div className="flex-1 bg-purple-100 flex items-center px-2">
                <span className="text-[10px] font-mono text-cdi-lilac truncate">Metadata</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground italic mt-2">
            If selective sanitization of individual areas is not possible, the
            entire user-data portion of the media must be sanitized.
          </p>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-xs font-mono uppercase tracking-wider text-cdi-green mb-2">
          Key Takeaway
        </p>
        <p className="text-sm leading-relaxed text-foreground">
          Sanitization must address all four categories of data &mdash; not just
          user-visible files. Hidden areas like overprovisioned storage and
          reallocated blocks can harbor sensitive data that standard tools never
          touch. When selective sanitization of individual target areas is not
          possible, the entire media must be sanitized.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Topic 3 – Risk Assessment & Threat Agents                         */
/* ------------------------------------------------------------------ */

const threatAgents = [
  {
    level: "Novice",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    tools: "Basic freely available tools",
    examples: "Undelete utilities, file-recovery freeware, hex editors",
    risk: "Low",
    riskColor: "text-cdi-green",
    riskBg: "bg-cdi-green/10",
    description:
      "An individual with limited technical knowledge using readily available data-recovery software. Can recover data from simple deletion but not from overwritten media.",
    color: "text-cdi-green",
    bgColor: "bg-cdi-green/10",
    borderColor: "border-cdi-green/30",
  },
  {
    level: "Expert",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    tools: "Commercial recovery software & hardware",
    examples: "Professional recovery suites, chip-off readers, JTAG interfaces",
    risk: "Medium",
    riskColor: "text-amber-600",
    riskBg: "bg-amber-50",
    description:
      "A professional data-recovery specialist with access to commercial-grade tools and techniques. Can bypass basic sanitization and access firmware-level data, but cannot perform lab-level analysis.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    level: "State-of-the-Art / Virtuoso",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    tools: "Lab-grade techniques, nation-state resources",
    examples: "Electron microscopy, magnetic force imaging, advanced signal processing",
    risk: "High",
    riskColor: "text-red-600",
    riskBg: "bg-red-50",
    description:
      "Nation-state actors or advanced labs with virtually unlimited resources. Can employ electron microscopy, signal analysis, and advanced physical techniques. Drives physical destruction requirements for the highest-sensitivity data.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
];

const threatVectors = [
  { name: "Insider Threats", desc: "Employees or contractors with physical or logical access to media" },
  { name: "External Hackers", desc: "Remote attackers exploiting access to improperly sanitized media" },
  { name: "Supply Chain", desc: "Data exposure during transport, repair, or ITAD processing" },
  { name: "Physical Theft", desc: "Stolen drives from offices, data centers, or transit" },
];

function Topic3() {
  const [selectedAgent, setSelectedAgent] = useState(0);

  return (
    <div className="space-y-8">
      <p className="text-base leading-relaxed text-foreground">
        Before selecting a sanitization method, organizations must assess the
        risk associated with the data on the media. Risk assessment drives every
        downstream decision &mdash; the method, the verification level, and the
        documentation requirements.
      </p>

      {/* Risk formula callout */}
      <div className="rounded-lg border border-cdi-teal/30 bg-cdi-teal/10 p-5">
        <p className="text-xs font-mono uppercase tracking-wider text-cdi-teal mb-3">
          Risk Assessment Formula
        </p>
        <div className="flex items-center justify-center gap-4 py-3">
          <div className="text-center">
            <p className="text-2xl font-bold text-cdi-teal">Risk</p>
          </div>
          <p className="text-2xl text-muted-foreground">=</p>
          <div className="text-center rounded-lg border border-cdi-green/30 bg-white/60 px-4 py-2">
            <p className="text-lg font-bold text-cdi-green">Likelihood</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              Vulnerabilities, physical security, data sensitivity
            </p>
          </div>
          <p className="text-2xl text-muted-foreground">x</p>
          <div className="text-center rounded-lg border border-cdi-spruce/30 bg-white/60 px-4 py-2">
            <p className="text-lg font-bold text-cdi-spruce">Magnitude</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              Financial loss, reputation, legal penalties
            </p>
          </div>
        </div>
      </div>

      {/* Threat agent level cards */}
      <div>
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
          Threat Agent Levels
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {threatAgents.map((agent, i) => (
            <button
              key={agent.level}
              onClick={() => setSelectedAgent(i)}
              className={cn(
                "rounded-lg border p-4 text-left transition-all duration-200",
                "hover:-translate-y-0.5",
                selectedAgent === i
                  ? `${agent.bgColor} ${agent.borderColor}`
                  : "bg-white border-gray-200 hover:border-gray-300"
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={cn("size-8 rounded-md flex items-center justify-center", agent.bgColor, agent.color)}>
                  {agent.icon}
                </span>
                <div>
                  <h4 className={cn("font-semibold text-sm", selectedAgent === i ? agent.color : "text-foreground")}>
                    {agent.level}
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-xs font-mono text-muted-foreground">Risk:</span>
                <span className={cn("text-xs font-mono font-semibold px-2 py-0.5 rounded-md", agent.riskBg, agent.riskColor)}>
                  {agent.risk}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected agent detail */}
        <div className={cn(
          "rounded-lg border p-5 transition-all duration-200",
          threatAgents[selectedAgent].bgColor,
          threatAgents[selectedAgent].borderColor
        )}>
          <p className="text-sm leading-relaxed text-foreground mb-3">
            {threatAgents[selectedAgent].description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-md bg-white/60 border border-current/10 p-3">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Tools</p>
              <p className="text-xs text-foreground">{threatAgents[selectedAgent].tools}</p>
            </div>
            <div className="rounded-md bg-white/60 border border-current/10 p-3">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Examples</p>
              <p className="text-xs text-foreground">{threatAgents[selectedAgent].examples}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Threat vectors */}
      <div>
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
          Common Threat Vectors
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {threatVectors.map((v) => (
            <div key={v.name} className="rounded-lg border border-gray-200 bg-white p-4">
              <h4 className="font-semibold text-sm text-foreground mb-1">{v.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-xs font-mono uppercase tracking-wider text-cdi-green mb-2">
          Key Takeaway
        </p>
        <p className="text-sm leading-relaxed text-foreground">
          Risk assessment is not optional &mdash; it is the foundation of every
          sanitization decision. The combination of threat agent capability and
          threat vector determines the minimum acceptable sanitization method.
          Higher risk demands more rigorous techniques, stronger verification,
          and more detailed documentation.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Topic 4 – Regulatory & Compliance Landscape                       */
/* ------------------------------------------------------------------ */

const regulations = [
  {
    name: "IEEE 2883-2022",
    jurisdiction: "International",
    type: "Standard",
    tagColor: "text-cdi-green",
    tagBg: "bg-cdi-green/10",
    requirement:
      "Gold standard for sanitization methods. Defines Clear, Purge, and Destruct techniques for all modern media types with specific commands per interface (SATA, NVMe, SCSI, etc.).",
    highlight: "Prescriptive method definitions per media type",
  },
  {
    name: "NIST SP 800-88 Rev. 2",
    jurisdiction: "United States (Federal)",
    type: "Guidance",
    tagColor: "text-cdi-teal",
    tagBg: "bg-cdi-teal/10",
    requirement:
      "US federal guidance for media sanitization. Provides a decision framework and risk-based approach. Rev. 2 aligns with IEEE 2883 and adds lifecycle considerations.",
    highlight: "Risk-based decision framework for federal agencies",
  },
  {
    name: "ISO/IEC 27040:2024",
    jurisdiction: "International",
    type: "Standard",
    tagColor: "text-cdi-spruce",
    tagBg: "bg-cdi-spruce/10",
    requirement:
      "Storage security standard that includes Certificate of Sanitization (CoS) requirements. Mandates documentation of sanitization activities for audit and compliance purposes.",
    highlight: "Certificate of Sanitization (CoS) requirements",
  },
  {
    name: "GDPR Article 17",
    jurisdiction: "European Union",
    type: "Regulation",
    tagColor: "text-cdi-lilac",
    tagBg: "bg-purple-50",
    requirement:
      "The Right to Erasure places the burden on data controllers to prove data has been irreversibly deleted when requested by data subjects. Fines of up to 4% of annual global turnover for non-compliance.",
    highlight: "Right to Erasure with burden on data controller",
  },
  {
    name: "PCI-DSS v4.0",
    jurisdiction: "Global (Payment Industry)",
    type: "Standard",
    tagColor: "text-amber-600",
    tagBg: "bg-amber-50",
    requirement:
      "Requires secure disposal of cardholder data when no longer needed for business or legal reasons. Mandates that media containing cardholder data is rendered unrecoverable.",
    highlight: "Secure disposal of cardholder data on media",
  },
];

function Topic4() {
  return (
    <div className="space-y-8">
      <p className="text-base leading-relaxed text-foreground">
        Media sanitization does not exist in a regulatory vacuum. Multiple
        overlapping frameworks govern how organizations must handle data
        disposal. Understanding this landscape is essential to building a
        compliant sanitization program.
      </p>

      {/* Regulation cards grid */}
      <div>
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
          Key Frameworks & Regulations
        </p>
        <div className="grid grid-cols-1 gap-4">
          {regulations.map((reg) => (
            <div
              key={reg.name}
              className="rounded-lg border border-gray-200 bg-white p-5 hover:border-gray-300 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h4 className="font-semibold text-foreground">{reg.name}</h4>
                <span className={cn("px-2 py-0.5 rounded-md text-[10px] font-mono font-medium", reg.tagBg, reg.tagColor)}>
                  {reg.type}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-gray-100 text-[10px] font-mono text-muted-foreground">
                  {reg.jurisdiction}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {reg.requirement}
              </p>
              <div className="flex items-center gap-2">
                <svg className="size-3.5 text-cdi-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="text-xs font-medium text-cdi-green">
                  {reg.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlap callout */}
      <div className="rounded-lg border border-cdi-teal/30 bg-cdi-teal/10 p-5">
        <p className="text-xs font-mono uppercase tracking-wider text-cdi-teal mb-2">
          How These Frameworks Overlap
        </p>
        <p className="text-sm leading-relaxed text-foreground mb-3">
          These standards and regulations are not competing &mdash; they
          reinforce each other. IEEE 2883 defines the technical &ldquo;how,&rdquo;
          NIST provides the risk-based &ldquo;when and why,&rdquo; ISO/IEC 27040
          governs the documentation, and regulations like GDPR and PCI-DSS
          create the legal obligation.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { label: "Technical Methods", source: "IEEE 2883", color: "text-cdi-green", bg: "bg-white/60" },
            { label: "Risk Framework", source: "NIST 800-88", color: "text-cdi-teal", bg: "bg-white/60" },
            { label: "Documentation", source: "ISO 27040", color: "text-cdi-spruce", bg: "bg-white/60" },
            { label: "Legal Mandate", source: "GDPR / PCI-DSS", color: "text-cdi-lilac", bg: "bg-white/60" },
          ].map((item) => (
            <div key={item.label} className={cn("rounded-md border border-current/10 p-3 text-center", item.bg)}>
              <p className={cn("text-xs font-semibold", item.color)}>{item.label}</p>
              <p className="text-[10px] font-mono text-muted-foreground mt-0.5">{item.source}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-xs font-mono uppercase tracking-wider text-cdi-green mb-2">
          Key Takeaway
        </p>
        <p className="text-sm leading-relaxed text-foreground">
          A well-designed sanitization program does not pick a single standard to
          follow &mdash; it maps its practices to the full compliance landscape.
          By aligning with IEEE 2883 for methods, NIST for risk assessment, and
          ISO 27040 for documentation, organizations can satisfy multiple
          regulatory requirements simultaneously.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported Module 3 Content Router                                   */
/* ------------------------------------------------------------------ */

export function Module3Content({ topicId }: { topicId: number }) {
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
        <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-sm text-red-700">
          Topic {topicId} not found in Module 3.
        </div>
      );
  }
}
