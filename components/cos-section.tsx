"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const cosCategories = [
  {
    id: "hardware",
    title: "Hardware Details",
    icon: "🖥️",
    color: "text-cdi-green",
    borderColor: "border-l-cdi-green",
    fields: [
      {
        name: "Manufacturer",
        example: "Seagate, Western Digital, Samsung...",
      },
      { name: "Model", example: "ST4000NM000A, WD40EFAX..." },
      { name: "Serial Number", example: "Unique device identifier" },
      {
        name: "Media Type",
        example: "Magnetic (HDD), Flash (SSD), NVMe...",
      },
      { name: "Media Source", example: "Datacenter, Office, Returned inventory..." },
    ],
  },
  {
    id: "process",
    title: "Process Details",
    icon: "⚙️",
    color: "text-cdi-spruce",
    borderColor: "border-l-cdi-spruce",
    fields: [
      {
        name: "Sanitization Method",
        example: "Clear, Purge, or Destruct",
      },
      {
        name: "Specific Technique",
        example: "Overwrite, Block Erase, Cryptographic Erase...",
      },
    ],
  },
  {
    id: "outcome",
    title: "Outcome & Verification",
    icon: "✅",
    color: "text-cdi-teal",
    borderColor: "border-l-cdi-teal",
    fields: [
      {
        name: "Outcome",
        example: "Success or Failure (explicit determination)",
      },
      {
        name: "Verification Tool",
        example: "Tool name and version number",
      },
      {
        name: "Verification Method",
        example: "Full verification or representative sampling",
      },
    ],
  },
  {
    id: "operator",
    title: "Operator Accountability",
    icon: "👤",
    color: "text-cdi-lilac",
    borderColor: "border-l-cdi-lilac",
    fields: [
      { name: "Name & Title", example: "Full legal name, job title" },
      {
        name: "Contact Information",
        example: "Email, phone, organization",
      },
      {
        name: "Physical Signature",
        example: "Wet or qualified electronic signature",
      },
      { name: "Date & Time", example: "Timestamp of sanitization event" },
      {
        name: "Location",
        example: "Facility where sanitization was performed",
      },
    ],
  },
];

export function CosSection() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="size-8 rounded-md bg-cdi-spruce/20 flex items-center justify-center text-sm">
            📄
          </span>
          Certificate of Sanitization (CoS)
        </CardTitle>
        <CardDescription>
          The CoS is your legal proof of sanitization, compliant with ISO/IEC
          27040. Without it, the sanitization effectively never happened.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Callout */}
        <div className="rounded-lg border border-cdi-green/20 bg-cdi-green/5 p-4 mb-6 flex items-start gap-3">
          <span className="text-cdi-green text-lg mt-0.5">⚠️</span>
          <div>
            <p className="text-sm font-semibold text-cdi-green mb-1">
              Critical Compliance Requirement
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Without auditable documentation, a sanitization event essentially
              did not happen in the eyes of auditors and regulators. Every
              field below is required for full compliance.
            </p>
          </div>
        </div>

        {/* CoS Fields as interactive accordion */}
        <Accordion multiple className="flex flex-col gap-3">
          {cosCategories.map((category) => (
            <AccordionItem
              key={category.id}
              value={category.id}
              className={cn(
                "rounded-lg border border-border overflow-hidden border-l-4",
                category.borderColor
              )}
            >
              <AccordionTrigger className="px-5 py-4 hover:bg-accent hover:no-underline transition-colors [&[data-state=open]]:bg-accent/50">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{category.icon}</span>
                  <div className="text-left">
                    <p className={cn("font-semibold text-sm", category.color)}>
                      {category.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {category.fields.length} required fields
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 pt-0">
                <div className="flex flex-col gap-2 mt-2">
                  {category.fields.map((field, i) => (
                    <div
                      key={field.name}
                      className="flex items-start gap-3 p-3 rounded-md bg-muted/30 border border-border animate-fade-in-up"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <Badge
                        variant="secondary"
                        className="shrink-0 font-mono text-[10px] mt-0.5"
                      >
                        REQ
                      </Badge>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {field.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {field.example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Standard reference */}
        <div className="mt-6 rounded-md bg-muted/30 border border-border p-4 flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
            Standard:
          </span>
          <Badge variant="secondary" className="font-mono text-xs">
            ISO/IEC 27040
          </Badge>
          <span className="text-xs text-muted-foreground">
            Information technology — Storage security
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
