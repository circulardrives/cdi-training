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

const steps = [
  {
    number: "01",
    title: "Identify & Classify",
    icon: "🔍",
    description:
      "Data owners classify all data assets by sensitivity (Low, Moderate, High) before media reaches end of use.",
    detail:
      "This is the foundation. Without proper classification, you cannot select the right sanitization method. Work with data owners early in the asset lifecycle.",
    color: "text-cdi-green",
    borderColor: "border-cdi-green/40",
    bgColor: "bg-cdi-green/10",
  },
  {
    number: "02",
    title: "Assess Risk",
    icon: "⚖️",
    description:
      "Evaluate probability and significance of potential consequences. Risk = Likelihood x Magnitude.",
    detail:
      "A quantitative risk assessment drives method selection. High-sensitivity data on drives destined for external resale demands the most rigorous sanitization.",
    color: "text-cdi-spruce",
    borderColor: "border-cdi-spruce/40",
    bgColor: "bg-cdi-spruce/10",
  },
  {
    number: "03",
    title: "Regulatory Requirements",
    icon: "📋",
    description:
      "Ensure compliance with applicable privacy laws: GDPR, HIPAA, PCI-DSS, and others.",
    detail:
      "Different regulations may mandate specific sanitization methods or documentation requirements. Always check jurisdictional requirements before proceeding.",
    color: "text-cdi-teal",
    borderColor: "border-cdi-teal/40",
    bgColor: "bg-cdi-teal/10",
  },
  {
    number: "04",
    title: "Select Method",
    icon: "🎯",
    description:
      "Based on sensitivity and next lifecycle phase (reuse, resale, recycle), choose Clear, Purge, or Destruct.",
    detail:
      'The method must match both the data sensitivity AND the drive\'s intended future. Internal reuse may allow "Clear," while external resale typically requires "Purge."',
    color: "text-cdi-green",
    borderColor: "border-cdi-green/40",
    bgColor: "bg-cdi-green/10",
  },
  {
    number: "05",
    title: "Execute Sanitization",
    icon: "⚡",
    description:
      "Use third-party validated software supporting IEEE 2883 methods to execute the chosen technique.",
    detail:
      "Never rely on unvalidated tools. The software must be independently tested and certified to properly execute the chosen sanitization technique per IEEE 2883.",
    color: "text-cdi-spruce",
    borderColor: "border-cdi-spruce/40",
    bgColor: "bg-cdi-spruce/10",
  },
  {
    number: "06",
    title: "Verify",
    icon: "✅",
    description:
      "Inspect results to determine whether the sanitization operation was effective.",
    detail:
      "Verification methods differ by technique. Clear uses sampling, Purge (overwrite) uses full verification, and Cryptographic Erase uses pattern-based verification.",
    color: "text-cdi-teal",
    borderColor: "border-cdi-teal/40",
    bgColor: "bg-cdi-teal/10",
  },
  {
    number: "07",
    title: "Document & Certify",
    icon: "📄",
    description:
      "Generate auditable evidence — the Certificate of Sanitization (CoS) — proving the process was performed correctly.",
    detail:
      "The CoS is your legal proof. Without it, the sanitization effectively never happened in the eyes of auditors and regulators. Follow ISO/IEC 27040.",
    color: "text-cdi-green",
    borderColor: "border-cdi-green/40",
    bgColor: "bg-cdi-green/10",
  },
  {
    number: "08",
    title: "Audit & Improve",
    icon: "🔄",
    description:
      "Review metrics and update processes as standards or laws change. Continuous improvement is essential.",
    detail:
      "A trustworthy program is never static. Regular audits catch drift, and process updates keep you aligned with evolving standards like IEEE 2883 revisions.",
    color: "text-cdi-spruce",
    borderColor: "border-cdi-spruce/40",
    bgColor: "bg-cdi-spruce/10",
  },
];

export function LifecycleStepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="size-8 rounded-md bg-cdi-green/20 flex items-center justify-center text-sm">
            🔄
          </span>
          The Data Sanitization Lifecycle
        </CardTitle>
        <CardDescription>
          Click each step to explore the CDI&apos;s comprehensive lifecycle for
          secure, compliant media disposal and reuse.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Step list */}
          <div className="flex flex-col gap-1 relative">
            {/* Connector line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-border" />

            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(i)}
                className={cn(
                  "relative flex items-start gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200",
                  "hover:-translate-y-0.5",
                  activeStep === i
                    ? `${step.bgColor} border ${step.borderColor}`
                    : "hover:bg-accent"
                )}
              >
                <div
                  className={cn(
                    "relative z-10 size-[22px] rounded-full flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 transition-all",
                    activeStep === i
                      ? "bg-cdi-green text-background scale-110"
                      : i < activeStep
                        ? "bg-cdi-green/30 text-cdi-green"
                        : "bg-muted text-muted-foreground"
                  )}
                >
                  {i < activeStep ? "✓" : step.number}
                </div>
                <div className="min-w-0">
                  <p
                    className={cn(
                      "text-sm font-medium truncate",
                      activeStep === i ? step.color : "text-foreground"
                    )}
                  >
                    {step.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            className={cn(
              "rounded-lg border p-6 transition-all duration-300",
              steps[activeStep].borderColor,
              steps[activeStep].bgColor
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{steps[activeStep].icon}</span>
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Step {steps[activeStep].number}
                </p>
                <h3
                  className={cn(
                    "text-lg font-semibold",
                    steps[activeStep].color
                  )}
                >
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              {steps[activeStep].description}
            </p>

            <div className="rounded-md bg-background/50 border border-border p-4">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                Key Insight
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {steps[activeStep].detail}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="px-3 py-1.5 rounded-md text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-accent transition-colors disabled:opacity-30"
              >
                ← Previous
              </button>
              <span className="text-xs font-mono text-muted-foreground">
                {activeStep + 1} / {steps.length}
              </span>
              <button
                onClick={() =>
                  setActiveStep(Math.min(steps.length - 1, activeStep + 1))
                }
                disabled={activeStep === steps.length - 1}
                className="px-3 py-1.5 rounded-md text-xs font-mono text-cdi-green hover:bg-cdi-green/10 transition-colors disabled:opacity-30"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
