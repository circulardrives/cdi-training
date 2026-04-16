import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function ModuleHeader() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card p-8">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cdi-green-light via-transparent to-cdi-teal-light pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-cdi-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="secondary" className="font-mono text-xs uppercase tracking-wider">
            Module 5 of 5
          </Badge>
          <Badge className="bg-cdi-green/20 text-cdi-green border-cdi-green/30 font-mono text-xs">
            In Progress
          </Badge>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-gradient-cdi mb-3">
          Building a Trustworthy Media Sanitization Program
        </h1>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Learn how to operationalize a complete data sanitization program with
          proper verification, documentation, and hardware-level trust
          guarantees for secure drive circularity.
        </p>

        {/* Key concepts strip */}
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            "Data Sanitization Lifecycle",
            "Verification Methods",
            "Certificate of Sanitization",
            "Hardware Root of Trust",
          ].map((concept) => (
            <span
              key={concept}
              className="px-3 py-1 rounded-md bg-muted/80 border border-border text-xs font-mono text-muted-foreground"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
