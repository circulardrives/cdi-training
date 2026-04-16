"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technologies = [
  {
    id: "caliptra",
    name: "Caliptra",
    tagline: "Silicon Root of Trust",
    org: "Open Compute Project (OCP)",
    color: "cdi-green",
    borderColor: "border-cdi-green/30",
    bgColor: "bg-cdi-green/5",
    glowClass: "glow-green",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    features: [
      {
        label: "Firmware Integrity",
        description:
          "Enforces cryptographic verification of all firmware before execution, preventing tampered code from running on the device.",
      },
      {
        label: "Device Identity",
        description:
          "Authenticates the identity of each device using unique cryptographic keys baked into silicon at manufacturing time.",
      },
      {
        label: "Secure Launch",
        description:
          "Provides a secure boot environment that establishes trust from the first instruction executed on the chip.",
      },
      {
        label: "Open Source",
        description:
          "Fully open-source framework allowing community audit and verification of the trust mechanisms.",
      },
    ],
    summary:
      "Caliptra is baked directly into the silicon chip. It creates a foundational layer of trust that cannot be bypassed by software or firmware attacks. Think of it as the bedrock on which all other security features are built.",
  },
  {
    id: "lock",
    name: "OCP L.O.C.K.",
    tagline: "Cryptographic Key Management for Storage",
    org: "Open Compute Project (OCP)",
    color: "cdi-teal",
    borderColor: "border-cdi-teal/30",
    bgColor: "bg-cdi-teal/5",
    glowClass: "glow-teal",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    features: [
      {
        label: "Key Binding",
        description:
          "Tightly binds encryption keys to secure external access keys, preventing extraction from disassembled hardware.",
      },
      {
        label: "Leak Prevention",
        description:
          "Ensures keys cannot be leaked through compromised firmware, protecting against software-level attack vectors.",
      },
      {
        label: "Fuse-Based Purge",
        description:
          "Enables completely secure cryptographic erasure via hardware fuses — the key is physically destroyed, not just deleted.",
      },
      {
        label: "Circularity Enabled",
        description:
          "Provides audited, hardened key management that enables secure CE while maintaining the device for secondary use.",
      },
    ],
    summary:
      "OCP L.O.C.K. (Layered Open-Source Cryptographic Key Management) is designed specifically for HDD and SSD controllers. Building on Caliptra, it makes cryptographic erasure trustworthy at the hardware level — the key to enabling safe drive reuse at scale.",
  },
];

export function HardwareTrustSection() {
  const [activeTech, setActiveTech] = useState("caliptra");
  const current = technologies.find((t) => t.id === activeTech)!;

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="size-8 rounded-md bg-cdi-teal/20 flex items-center justify-center text-sm">
            🔐
          </span>
          The Future of Trust: Hardware Security
        </CardTitle>
        <CardDescription>
          New technologies embed trust directly into silicon, enabling
          verifiable cryptographic erasure for circular drive reuse.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Tech selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(tech.id)}
              className={cn(
                "relative rounded-lg border p-5 text-left transition-all duration-200",
                "hover:-translate-y-1",
                activeTech === tech.id
                  ? `${tech.borderColor} ${tech.bgColor} ${tech.glowClass}`
                  : "border-border bg-card hover:bg-accent"
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "size-10 rounded-lg flex items-center justify-center transition-colors",
                    activeTech === tech.id
                      ? `bg-${tech.color}/20 text-${tech.color}`
                      : "bg-muted text-muted-foreground"
                  )}
                  style={{
                    backgroundColor:
                      activeTech === tech.id
                        ? tech.id === "caliptra"
                          ? "rgba(19,156,122,0.2)"
                          : "rgba(62,96,113,0.2)"
                        : undefined,
                    color:
                      activeTech === tech.id
                        ? tech.id === "caliptra"
                          ? "#139C7A"
                          : "#3E6071"
                        : undefined,
                  }}
                >
                  {tech.icon}
                </div>
                <div>
                  <p
                    className={cn(
                      "font-bold text-base",
                      activeTech === tech.id
                        ? tech.id === "caliptra"
                          ? "text-cdi-green"
                          : "text-cdi-teal"
                        : "text-foreground"
                    )}
                  >
                    {tech.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {tech.tagline}
                  </p>
                  <Badge
                    variant="secondary"
                    className="font-mono text-[10px] mt-2"
                  >
                    {tech.org}
                  </Badge>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Detail area */}
        <div className="rounded-lg border border-border bg-muted/20 p-6">
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {current.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {current.features.map((feature, i) => (
              <div
                key={feature.label}
                className="rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-cdi-green/20 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-2 rounded-full bg-cdi-green" />
                  <p className="text-sm font-semibold text-foreground">
                    {feature.label}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Relationship diagram */}
          <div className="mt-6 rounded-md bg-background/50 border border-border p-4">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              Trust Stack
            </p>
            <div className="flex flex-col gap-2">
              <div
                className={cn(
                  "rounded-md border p-3 text-center text-sm font-mono transition-all",
                  activeTech === "lock"
                    ? "border-cdi-teal/30 bg-cdi-teal/10 text-cdi-teal"
                    : "border-border bg-muted/30 text-muted-foreground"
                )}
              >
                OCP L.O.C.K. — Key Management Layer
              </div>
              <div className="flex justify-center">
                <svg
                  className="size-4 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              <div
                className={cn(
                  "rounded-md border p-3 text-center text-sm font-mono transition-all",
                  activeTech === "caliptra"
                    ? "border-cdi-green/30 bg-cdi-green/10 text-cdi-green"
                    : "border-border bg-muted/30 text-muted-foreground"
                )}
              >
                Caliptra — Silicon Root of Trust
              </div>
              <div className="flex justify-center">
                <svg
                  className="size-4 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              <div className="rounded-md border border-border bg-muted/50 p-3 text-center text-sm font-mono text-muted-foreground">
                Silicon Hardware
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
