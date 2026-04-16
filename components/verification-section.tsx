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

const methods = [
  {
    id: "clear",
    label: "Clear",
    badge: "Sampling",
    badgeColor: "bg-cdi-spruce/20 text-cdi-spruce border-cdi-spruce/30",
    verification: "Representative Sampling",
    coverage: "≥ 5% of user-addressable space",
    process: [
      "Select random locations across the drive",
      "Sample at least 5% of user-addressable space",
      "Read data from each sampled location",
      "Compare against expected sanitized value (e.g., all zeros)",
      "Pass if all samples match expected value",
    ],
    note: "Sampling is sufficient because Clear targets user-accessible areas using standard write commands. The statistical coverage provides reasonable assurance.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
      </svg>
    ),
  },
  {
    id: "purge-overwrite",
    label: "Purge (Overwrite / Block Erase)",
    badge: "Full",
    badgeColor: "bg-cdi-green/20 text-cdi-green border-cdi-green/30",
    verification: "Full Verification",
    coverage: "100% of all addressable storage space",
    process: [
      "Read ALL addressable storage areas",
      "Compare every block against expected sanitized value",
      "Full surface scan — no sampling allowed",
      "Confirm data matches expected value across entire drive",
      "Fail if any block deviates from expected value",
    ],
    note: "Full verification is required because Purge methods target all storage areas, including those not normally accessible. Complete coverage ensures no residual data remains.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "purge-ce",
    label: "Purge (Cryptographic Erase)",
    badge: "Pattern",
    badgeColor: "bg-cdi-teal/20 text-cdi-teal border-cdi-teal/30",
    verification: "Pattern-Based Verification",
    coverage: "≥ 5% LBA space (pre-written pattern)",
    process: [
      "BEFORE erase: Write a known data pattern to ≥ 5% of LBA space",
      "Record the exact pattern and locations written",
      "Execute the Cryptographic Erase (CE) command",
      "Read back the same locations after CE completes",
      "Verify data is DIFFERENT from the written pattern",
    ],
    note: 'Cryptographic Erase scrambles data using encryption key destruction. Since the result is random ciphertext (not zeros), you can\'t compare against a fixed value. Instead, you prove the data changed by using a "before and after" comparison.',
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export function VerificationSection() {
  const [activeMethod, setActiveMethod] = useState("clear");
  const current = methods.find((m) => m.id === activeMethod)!;

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="size-8 rounded-md bg-cdi-teal/20 flex items-center justify-center text-sm">
            ✅
          </span>
          Verification of Sanitization Outcomes
        </CardTitle>
        <CardDescription>
          Select a method to see how verification differs. Getting this right is
          what separates a trustworthy program from theater.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Method tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {methods.map((method) => (
            <button
              key={method.id}
              onClick={() => setActiveMethod(method.id)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border",
                "hover:-translate-y-0.5",
                activeMethod === method.id
                  ? "bg-cdi-green/10 border-cdi-green/30 text-cdi-green glow-green"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              <div className="flex items-center gap-2">
                {method.icon}
                {method.label}
              </div>
            </button>
          ))}
        </div>

        {/* Method detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: process steps */}
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-foreground">
                {current.verification}
              </h4>
              <Badge className={cn("font-mono text-xs", current.badgeColor)}>
                {current.badge}
              </Badge>
            </div>

            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-mono text-muted-foreground">
                Coverage:
              </span>
              <span className="text-xs font-mono text-cdi-green font-semibold">
                {current.coverage}
              </span>
            </div>

            <ol className="flex flex-col gap-3">
              {current.process.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="size-6 rounded-full bg-cdi-green/20 text-cdi-green flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: key insight */}
          <div className="flex flex-col gap-4">
            {/* Visual comparison chart */}
            <div className="rounded-lg border border-border bg-muted/30 p-6 flex-1">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Why this approach?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {current.note}
              </p>
            </div>

            {/* Quick comparison */}
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                Comparison at a glance
              </p>
              <div className="grid grid-cols-3 gap-3">
                {methods.map((m) => (
                  <div
                    key={m.id}
                    className={cn(
                      "rounded-md p-3 border transition-all text-center",
                      m.id === activeMethod
                        ? "border-cdi-green/30 bg-cdi-green/10"
                        : "border-border bg-muted/30"
                    )}
                  >
                    <p className="text-[11px] font-mono text-muted-foreground mb-1">
                      {m.id === "clear"
                        ? "Clear"
                        : m.id === "purge-overwrite"
                          ? "Purge OW"
                          : "Purge CE"}
                    </p>
                    <p
                      className={cn(
                        "text-sm font-bold font-mono",
                        m.id === activeMethod
                          ? "text-cdi-green"
                          : "text-foreground"
                      )}
                    >
                      {m.id === "clear"
                        ? "≥5%"
                        : m.id === "purge-overwrite"
                          ? "100%"
                          : "≥5%*"}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {m.badge}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
