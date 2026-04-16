"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

function Topic1() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { n: "01", title: "Identify & Classify Data", icon: "🔍", color: "text-cdi-green", bg: "bg-cdi-green/10", border: "border-cdi-green/30", desc: "Data owners must classify all data assets by sensitivity (Low, Moderate, High) before media reaches end of use.", insight: "This is the foundation. Without proper classification, you cannot select the right sanitization method. Work with data owners early — classification should happen before decommissioning." },
    { n: "02", title: "Assess Risk", icon: "⚖️", color: "text-cdi-spruce", bg: "bg-cdi-spruce/10", border: "border-cdi-spruce/30", desc: "Evaluate probability and significance of potential consequences. Risk = Likelihood × Magnitude.", insight: "A drive containing PII destined for external resale has a very different risk profile than an internal-reuse drive with non-sensitive logs. Quantify before choosing a method." },
    { n: "03", title: "Regulatory Requirements", icon: "📋", color: "text-cdi-teal", bg: "bg-cdi-teal/10", border: "border-cdi-teal/30", desc: "Ensure compliance with applicable privacy laws and regulations (GDPR, HIPAA, PCI-DSS).", insight: "Different jurisdictions impose different requirements. GDPR requires demonstrable deletion. HIPAA mandates specific disposal methods. Always check before proceeding." },
    { n: "04", title: "Select Method", icon: "🎯", color: "text-cdi-green", bg: "bg-cdi-green/10", border: "border-cdi-green/30", desc: "Based on data sensitivity and next lifecycle phase (reuse, resale, recycle), choose Clear, Purge, or Destruct.", insight: "The method must match both data sensitivity AND the drive's intended future. Internal reuse may allow Clear, external resale typically requires Purge." },
    { n: "05", title: "Execute Sanitization", icon: "⚡", color: "text-cdi-spruce", bg: "bg-cdi-spruce/10", border: "border-cdi-spruce/30", desc: "Use third-party validated software supporting IEEE 2883 methods to execute the chosen technique.", insight: "Never rely on unvalidated tools. The software must be independently tested per IEEE 2883. This is your first line of audit defense." },
    { n: "06", title: "Verify", icon: "✅", color: "text-cdi-teal", bg: "bg-cdi-teal/10", border: "border-cdi-teal/30", desc: "Inspect results to determine whether the sanitization was effective.", insight: "Verification methods differ by technique — Clear uses sampling, Purge (overwrite) uses full verification, and Cryptographic Erase uses pattern-based verification." },
    { n: "07", title: "Document & Certify", icon: "📄", color: "text-cdi-green", bg: "bg-cdi-green/10", border: "border-cdi-green/30", desc: "Generate auditable evidence — the Certificate of Sanitization (CoS) — proving the process was performed correctly.", insight: "Without a CoS, the sanitization effectively never happened in the eyes of auditors and regulators. Must comply with ISO/IEC 27040." },
    { n: "08", title: "Audit & Improve", icon: "🔄", color: "text-cdi-spruce", bg: "bg-cdi-spruce/10", border: "border-cdi-spruce/30", desc: "Review metrics and update processes as standards or laws change.", insight: "Regular audits catch process drift. Track success rates and turnaround times. Update when IEEE 2883 revisions are published." },
  ];
  const s = steps[activeStep];

  return (
    <>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Operationalizing a media sanitization program requires moving beyond ad-hoc wiping to a <strong className="text-foreground">standardized, programmatic approach</strong>. The CDI defines a comprehensive 8-step lifecycle.
      </p>
      <div className="rounded-xl border border-border bg-card p-6 mb-8">
        <h3 className="font-semibold mb-1">The 8-Step Lifecycle</h3>
        <p className="text-sm text-muted-foreground mb-4">Click each step to explore.</p>
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
          <div className="flex flex-col gap-1 relative">
            <div className="absolute left-[14px] top-5 bottom-5 w-px bg-border" />
            {steps.map((step, i) => (
              <button key={step.n} onClick={() => setActiveStep(i)} className={cn("relative flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left text-sm transition-all hover:-translate-y-0.5", activeStep === i ? `${step.bg} border ${step.border}` : "hover:bg-accent")}>
                <div className={cn("relative z-10 size-5 rounded-full flex items-center justify-center text-[9px] font-mono font-bold shrink-0", activeStep === i ? "bg-cdi-green text-white scale-110" : i < activeStep ? "bg-cdi-green/30 text-cdi-green" : "bg-muted text-muted-foreground")}>{i < activeStep ? "✓" : step.n}</div>
                <span className={cn("font-medium truncate", activeStep === i ? step.color : "text-foreground")}>{step.title}</span>
              </button>
            ))}
          </div>
          <div className={cn("rounded-lg border p-6", s.border, s.bg)}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Step {s.n}</p>
                <h3 className={cn("text-lg font-semibold", s.color)}>{s.title}</h3>
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-4">{s.desc}</p>
            <div className="rounded-md bg-white/50 border border-border p-4">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Key Insight</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.insight}</p>
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={() => setActiveStep(Math.max(0, activeStep - 1))} disabled={activeStep === 0} className="text-xs font-mono text-muted-foreground disabled:opacity-30">← Prev</button>
              <span className="text-[10px] font-mono text-muted-foreground">{activeStep + 1}/{steps.length}</span>
              <button onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))} disabled={activeStep === steps.length - 1} className="text-xs font-mono text-cdi-green disabled:opacity-30">Next →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-xs font-mono uppercase tracking-wider text-cdi-green mb-2">Key Takeaway</p>
        <p className="text-sm text-muted-foreground leading-relaxed">A trustworthy sanitization program is a <strong className="text-foreground">repeatable, auditable lifecycle</strong> that starts with understanding your data and ends with continuous improvement.</p>
      </div>
    </>
  );
}

function Topic2() {
  const [active, setActive] = useState("clear");
  const methods = [
    { id: "clear", label: "Clear", badge: "Sampling", coverage: "≥ 5%", steps: ["Select random locations across the drive", "Sample at least 5% of user-addressable space", "Read data from each sampled location", "Compare against expected sanitized value (e.g., all zeros)", "Pass if all samples match expected value"], note: "Sampling is sufficient because Clear targets user-accessible areas using standard write commands." },
    { id: "purge-ow", label: "Purge (Overwrite / Block Erase)", badge: "Full", coverage: "100%", steps: ["Read ALL addressable storage areas", "Compare every block against expected sanitized value", "Full surface scan — no sampling allowed", "Confirm data matches across entire drive", "Fail if any block deviates"], note: "Full verification is required because Purge targets all storage areas, including hidden ones." },
    { id: "purge-ce", label: "Purge (Cryptographic Erase)", badge: "Pattern", coverage: "≥ 5%*", steps: ["BEFORE erase: Write known pattern to ≥ 5% of LBA space", "Record exact pattern and locations", "Execute Cryptographic Erase command", "Read back same locations after CE", "Verify data is DIFFERENT from written pattern"], note: "CE produces random ciphertext, not zeros. Prove the data changed with a before-and-after approach." },
  ];
  const m = methods.find((x) => x.id === active)!;

  return (
    <>
      <p className="text-muted-foreground leading-relaxed mb-8">Verifying that data is actually gone is <strong className="text-foreground">critical</strong>. The verification process differs significantly depending on the method used.</p>
      <div className="rounded-xl border border-border bg-card p-6 mb-8">
        <h3 className="font-semibold mb-4">Verification by Method</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {methods.map((method) => (
            <button key={method.id} onClick={() => setActive(method.id)} className={cn("px-4 py-2.5 rounded-lg text-sm font-medium border transition-all hover:-translate-y-0.5", active === method.id ? "bg-cdi-green/10 border-cdi-green/30 text-cdi-green" : "border-border text-muted-foreground hover:text-foreground")}>{method.label}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">{m.badge} Verification</h4>
              <span className="text-xs font-mono bg-cdi-green/10 text-cdi-green px-2 py-1 rounded">{m.coverage}</span>
            </div>
            <ol className="flex flex-col gap-3">
              {m.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3"><span className="size-5 rounded-full bg-cdi-green/20 text-cdi-green flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">{i + 1}</span><span className="text-sm leading-relaxed">{step}</span></li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-border bg-muted/30 p-6 flex-1">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">Why this approach?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.note}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {methods.map((x) => (
                <div key={x.id} className={cn("rounded-md p-3 border text-center", x.id === active ? "border-cdi-green/30 bg-cdi-green/10" : "border-border bg-muted/30")}>
                  <p className="text-[10px] font-mono text-muted-foreground">{x.id === "clear" ? "Clear" : x.id === "purge-ow" ? "Purge OW" : "Purge CE"}</p>
                  <p className={cn("text-lg font-bold font-mono", x.id === active ? "text-cdi-green" : "text-foreground")}>{x.coverage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-cdi-teal/20 bg-cdi-teal/5 p-5">
        <p className="text-xs font-mono uppercase tracking-wider text-cdi-teal mb-2">Critical Distinction</p>
        <p className="text-sm text-muted-foreground leading-relaxed">Cryptographic Erase produces <strong className="text-foreground">random ciphertext</strong>, not zeros. You must prove the data <strong className="text-foreground">changed</strong> rather than matching a known value.</p>
      </div>
    </>
  );
}

function Topic3() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const categories = [
    { id: "hardware", title: "Hardware Details", icon: "🖥️", color: "border-l-cdi-green", fields: ["Manufacturer", "Model", "Serial Number", "Media Type (magnetic, flash)", "Media Source"] },
    { id: "process", title: "Process Details", icon: "⚙️", color: "border-l-cdi-spruce", fields: ["Sanitization Method (Clear/Purge/Destruct)", "Specific Technique (overwrite, block erase, CE)"] },
    { id: "outcome", title: "Outcome & Verification", icon: "✅", color: "border-l-cdi-teal", fields: ["Outcome (success/failure)", "Verification Tool (name + version)", "Verification Method (full/sampling)"] },
    { id: "operator", title: "Operator Accountability", icon: "👤", color: "border-l-cdi-lilac", fields: ["Name & Title", "Contact Information", "Physical Signature", "Date & Time", "Location"] },
  ];

  return (
    <>
      <p className="text-muted-foreground leading-relaxed mb-8">Without proof, a sanitization event <strong className="text-foreground">essentially did not happen</strong> in the eyes of auditors and regulators.</p>
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5 mb-8 flex items-start gap-3">
        <span className="text-lg mt-0.5">⚠️</span>
        <div>
          <p className="text-sm font-semibold text-cdi-green mb-1">Compliance is non-negotiable</p>
          <p className="text-sm text-muted-foreground">The CoS must comply with <strong className="text-foreground">ISO/IEC 27040</strong>. Every field below is required.</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-8">
        {categories.map((cat) => (
          <button key={cat.id} onClick={() => setExpanded(expanded === cat.id ? null : cat.id)} className={cn("rounded-lg border border-border border-l-4 text-left transition-all", cat.color, expanded === cat.id ? "bg-accent/50" : "hover:bg-accent/30")}>
            <div className="px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg">{cat.icon}</span>
                <div><p className="font-semibold text-sm">{cat.title}</p><p className="text-xs text-muted-foreground">{cat.fields.length} required fields</p></div>
              </div>
              <svg className={cn("size-4 text-muted-foreground transition-transform", expanded === cat.id && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>
            {expanded === cat.id && (
              <div className="px-5 pb-4 flex flex-col gap-2">
                {cat.fields.map((f) => (
                  <div key={f} className="flex items-center gap-3 p-3 rounded-md bg-muted/30 border border-border">
                    <span className="text-[10px] font-mono bg-muted px-1.5 py-0.5 rounded text-muted-foreground">REQ</span>
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            )}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="rounded-lg border border-border bg-card p-4 text-center"><p className="text-2xl font-bold font-mono text-cdi-green">15</p><p className="text-xs text-muted-foreground mt-1">Required Fields</p></div>
        <div className="rounded-lg border border-border bg-card p-4 text-center"><p className="text-2xl font-bold font-mono text-cdi-green">4</p><p className="text-xs text-muted-foreground mt-1">Categories</p></div>
        <div className="rounded-lg border border-border bg-card p-4 text-center"><p className="text-2xl font-bold font-mono text-cdi-green">1</p><p className="text-xs text-muted-foreground mt-1">Standard</p></div>
      </div>
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-xs font-mono uppercase tracking-wider text-cdi-green mb-2">Key Takeaway</p>
        <p className="text-sm text-muted-foreground leading-relaxed">The CoS creates an <strong className="text-foreground">unbroken chain of accountability</strong> from the physical drive, through the process, to the person who performed it.</p>
      </div>
    </>
  );
}

function Topic4() {
  const [active, setActive] = useState("caliptra");
  const techs = [
    { id: "caliptra", name: "Caliptra", tagline: "Silicon Root of Trust", features: [{ l: "Firmware Integrity", d: "Cryptographic verification of all firmware before execution." }, { l: "Device Identity", d: "Unique keys baked into silicon at manufacturing." }, { l: "Secure Launch", d: "Trust from the first instruction on the chip." }, { l: "Open Source", d: "Community-auditable framework." }], summary: "Caliptra is baked into silicon. It creates trust that cannot be bypassed by software or firmware attacks — the bedrock for all other security." },
    { id: "lock", name: "OCP L.O.C.K.", tagline: "Cryptographic Key Management", features: [{ l: "Key Binding", d: "Keys bound to secure access keys — no extraction from disassembled hardware." }, { l: "Leak Prevention", d: "Keys can't leak through compromised firmware." }, { l: "Fuse-Based Purge", d: "Secure CE via hardware fuses — key is physically destroyed." }, { l: "Circularity Enabled", d: "Secure CE while maintaining the device for secondary use." }], summary: "OCP L.O.C.K. is designed for HDD/SSD controllers. Building on Caliptra, it makes cryptographic erasure trustworthy at the hardware level." },
  ];
  const t = techs.find((x) => x.id === active)!;

  return (
    <>
      <p className="text-muted-foreground leading-relaxed mb-8">As organizations adopt Purge methods for circularity, proving integrity at the <strong className="text-foreground">hardware level</strong> is paramount. New technologies embed trust directly into silicon.</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {techs.map((tech) => (
          <button key={tech.id} onClick={() => setActive(tech.id)} className={cn("rounded-lg border p-5 text-left transition-all hover:-translate-y-1", active === tech.id ? "border-cdi-green/30 bg-cdi-green/5" : "border-border hover:bg-accent")} >
            <p className={cn("font-bold", active === tech.id ? "text-cdi-green" : "text-foreground")}>{tech.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{tech.tagline}</p>
            <span className="inline-block mt-2 text-[10px] font-mono bg-muted px-2 py-0.5 rounded text-muted-foreground">Open Compute Project</span>
          </button>
        ))}
      </div>
      <div className="rounded-lg border border-border bg-muted/20 p-6 mb-8">
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.summary}</p>
        <div className="grid grid-cols-2 gap-3">
          {t.features.map((f) => (
            <div key={f.l} className="rounded-lg border border-border bg-card p-4 hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-2 mb-2"><div className="size-2 rounded-full bg-cdi-green" /><p className="text-sm font-semibold">{f.l}</p></div>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Trust stack */}
      <div className="flex flex-col gap-2 mb-8">
        {[{ id: "lock", label: "OCP L.O.C.K.", sub: "Key management & secure CE" }, { id: "caliptra", label: "Caliptra", sub: "Silicon root of trust" }].map((layer) => (
          <div key={layer.id}>
            <div onClick={() => setActive(layer.id)} className={cn("rounded-md border p-3 text-center cursor-pointer transition-all", active === layer.id ? "border-cdi-green/30 bg-cdi-green/10" : "border-border bg-muted/30 hover:bg-accent")}>
              <p className={cn("text-sm font-mono font-semibold", active === layer.id ? "text-cdi-green" : "text-muted-foreground")}>{layer.label}</p>
              <p className="text-xs text-muted-foreground">{layer.sub}</p>
            </div>
            {layer.id === "lock" && <div className="flex justify-center text-muted-foreground"><svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>}
          </div>
        ))}
        <div className="flex justify-center text-muted-foreground"><svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>
        <div className="rounded-md border border-border bg-muted/50 p-3 text-center"><p className="text-sm font-mono text-muted-foreground">Silicon Hardware</p></div>
      </div>
      <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-5">
        <p className="text-xs font-mono uppercase tracking-wider text-cdi-green mb-2">Why This Matters</p>
        <p className="text-sm text-muted-foreground leading-relaxed">OCP L.O.C.K.&apos;s fuse-based purge enables <strong className="text-foreground">completely secure cryptographic erasure</strong> while keeping the drive intact for secondary use — making large-scale trustworthy reuse possible.</p>
      </div>
    </>
  );
}

export function Module5Content({ topicId }: { topicId: number }) {
  switch (topicId) {
    case 1: return <Topic1 />;
    case 2: return <Topic2 />;
    case 3: return <Topic3 />;
    case 4: return <Topic4 />;
    default: return null;
  }
}
