"use client";

import { useState } from "react";
import { TrainingProvider, useTraining } from "@/lib/training-context";
import { CompletionCertificate } from "@/components/completion-certificate";
import Link from "next/link";

function CompleteInner() {
  const { allComplete, overallProgress } = useTraining();
  const { done, total } = overallProgress();
  const [showCert, setShowCert] = useState(false);

  if (!allComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md text-center p-8">
          <div className="size-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <svg className="size-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold mb-2">Not quite there yet</h1>
          <p className="text-muted-foreground mb-6">
            You&apos;ve completed {done} of {total} topics. Finish all topics to earn your certificate.
          </p>
          <Link href="/module/1/topic/1" className="inline-block px-6 py-2.5 rounded-lg bg-cdi-green text-white font-semibold text-sm hover:-translate-y-0.5 transition-all">
            Continue Training
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {!showCert ? (
        <div className="max-w-md text-center p-8">
          <div className="size-20 rounded-full bg-cdi-green/10 flex items-center justify-center mx-auto mb-6">
            <svg className="size-10 text-cdi-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gradient-cdi mb-3">
            Congratulations!
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            You&apos;ve completed all {total} topics across 5 modules of the CDI Training Program. You now have the knowledge to support trustworthy, sustainable media sanitization.
          </p>
          <button
            onClick={() => setShowCert(true)}
            className="px-8 py-3 rounded-xl bg-cdi-green text-white font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-cdi-green/25 transition-all duration-200"
          >
            Generate Your Certificate
          </button>
          <div className="mt-6">
            <Link href="/module/1/topic/1" className="text-sm text-muted-foreground hover:text-cdi-green transition-colors">
              ← Back to training
            </Link>
          </div>
        </div>
      ) : (
        <CompletionCertificate onClose={() => setShowCert(false)} />
      )}
    </div>
  );
}

export default function CompletePage() {
  return (
    <TrainingProvider>
      <CompleteInner />
    </TrainingProvider>
  );
}
