"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";

interface CompletionCertificateProps {
  onClose?: () => void;
}

export function CompletionCertificate({ onClose }: CompletionCertificateProps) {
  const certRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [showNameInput, setShowNameInput] = useState(true);
  const [downloading, setDownloading] = useState(false);

  const fireConfetti = useCallback(() => {
    const colors = ["#139C7A", "#3B7351", "#5C9279", "#3E6071", "#9298A6"];
    // Left burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x: 0.15, y: 0.6 },
      colors,
      ticks: 200,
    });
    // Right burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x: 0.85, y: 0.6 },
      colors,
      ticks: 200,
    });
    // Center shower
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { x: 0.5, y: 0.3 },
        colors,
        gravity: 0.8,
        ticks: 300,
      });
    }, 300);
  }, []);

  useEffect(() => {
    if (!showNameInput) {
      fireConfetti();
    }
  }, [showNameInput, fireConfetti]);

  const todayFormatted = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleDownload = async () => {
    if (!certRef.current) return;
    setDownloading(true);

    try {
      // Dynamic import to avoid SSR issues
      const html2canvas = (await import("html2canvas-pro")).default;
      const canvas = await html2canvas(certRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `CDI-Certificate-${name.replace(/\s+/g, "-") || "Completion"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch {
      // Fallback: open print dialog
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  // Name entry step
  if (showNameInput) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-fade-in-up">
          <div className="text-center mb-6">
            <div className="size-16 rounded-full bg-cdi-green/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="size-8 text-cdi-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-1">
              Congratulations!
            </h2>
            <p className="text-sm text-muted-foreground">
              Enter your name to generate your certificate of completion.
            </p>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-center text-lg focus:outline-none focus:ring-2 focus:ring-cdi-green/50 focus:border-cdi-green transition-all"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" && name.trim()) setShowNameInput(false);
            }}
          />
          <div className="flex gap-3 mt-6">
            {onClose && (
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2.5 rounded-lg border border-border text-sm text-muted-foreground hover:bg-accent transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              onClick={() => name.trim() && setShowNameInput(false)}
              disabled={!name.trim()}
              className={cn(
                "flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
                name.trim()
                  ? "bg-cdi-green text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cdi-green/20"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              )}
            >
              Generate Certificate
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Certificate display
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="max-w-3xl w-full mx-4 flex flex-col items-center gap-6 animate-fade-in-up">
        {/* Certificate card */}
        <div
          ref={certRef}
          className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Top accent bar */}
          <div className="h-2 bg-gradient-to-r from-[#139C7A] via-[#3B7351] to-[#3E6071]" />

          <div className="p-10 text-center">
            {/* Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cdi-logo.svg"
              alt="CDI"
              className="h-12 mx-auto mb-6"
            />

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#139C7A]/30" />
              <svg
                className="size-5 text-[#139C7A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#139C7A]/30" />
            </div>

            <p
              className="text-xs uppercase tracking-[0.3em] text-[#9298A6] mb-2"
              style={{ fontFamily: "monospace" }}
            >
              Certificate of Completion
            </p>

            <h2
              className="text-2xl font-bold text-[#111828] mb-1"
            >
              Media Sanitization Training
            </h2>
            <p className="text-sm text-[#9298A6] mb-8">
              Circular Drive Initiative Professional Training Program
            </p>

            {/* Name */}
            <p className="text-sm text-[#9298A6] mb-1">
              This certifies that
            </p>
            <p
              className="text-3xl font-bold mb-1"
              style={{
                background: "linear-gradient(135deg, #139C7A, #3B7351, #3E6071)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {name}
            </p>
            <p className="text-sm text-[#9298A6] mb-8">
              has successfully completed all training modules
            </p>

            {/* Modules completed */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                "The Circular Economy",
                "Data Sanitization Standards",
                "Sanitization Methods",
                "Drive Health & Grading",
                "Building a Trustworthy Program",
              ].map((mod) => (
                <span
                  key={mod}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#e8f5f0] text-[#139C7A]"
                  style={{ fontFamily: "monospace" }}
                >
                  <svg
                    className="size-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {mod}
                </span>
              ))}
            </div>

            {/* Footer details */}
            <div className="flex items-center justify-center gap-8 pt-6 border-t border-[#e8f5f0]">
              <div className="text-center">
                <p
                  className="text-xs text-[#9298A6] mb-1"
                  style={{ fontFamily: "monospace" }}
                >
                  Date
                </p>
                <p className="text-sm font-semibold text-[#111828]">
                  {todayFormatted}
                </p>
              </div>
              <div className="h-8 w-px bg-[#e8f5f0]" />
              <div className="text-center">
                <p
                  className="text-xs text-[#9298A6] mb-1"
                  style={{ fontFamily: "monospace" }}
                >
                  Standards
                </p>
                <p className="text-sm font-semibold text-[#111828]">
                  CDI Data Sanitization Best Practices
                </p>
              </div>
              <div className="h-8 w-px bg-[#e8f5f0]" />
              <div className="text-center">
                <p
                  className="text-xs text-[#9298A6] mb-1"
                  style={{ fontFamily: "monospace" }}
                >
                  Issued by
                </p>
                <p className="text-sm font-semibold text-[#139C7A]">
                  circulardrives.org
                </p>
              </div>
            </div>
          </div>

          {/* Bottom accent bar */}
          <div className="h-2 bg-gradient-to-r from-[#3E6071] via-[#3B7351] to-[#139C7A]" />
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cdi-green text-white font-semibold text-sm hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cdi-green/25 transition-all duration-200 disabled:opacity-50"
          >
            <svg
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            {downloading ? "Generating..." : "Download Certificate"}
          </button>
          <button
            onClick={() => fireConfetti()}
            className="px-4 py-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-cdi-green hover:border-cdi-green/30 hover:bg-cdi-green/5 transition-all duration-200"
            title="More confetti!"
          >
            🎉
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="px-4 py-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
