"use client";

import { ResumeCard } from "@/components/resume-card";

export function ResumePreviewCard() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl space-y-6">
        {/* PDF Preview */}
        <a
          href="/Resume/Nguyen_Ethan_Resume_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="
              relative 
              mx-auto 
              w-full 
              max-w-3xl
              overflow-hidden 
              rounded-xl 
              border 
              bg-white 
              shadow-md 
              transition 
              hover:shadow-lg
            ">

            <iframe
              src="/Resume/Nguyen_Ethan_Resume_2026.pdf#view=FitV&toolbar=0&navpanes=0"
              className="w-full h-[85vh] rounded-xl border shadow-md"
            />
          </div>
        </a>

        {/* Metadata Card */}
        <ResumeCard
          variant="resume"
          title="Latest Resume"
          subtitle="Click here for online LaTeX editor (Via Overleaf)"
          logoUrl="/me.jpg"
          altText="Resume"
          href="https://www.overleaf.com/read/khftbfqdwpsg#681339"
          description="Click to view or download the full resume"
          period=""
        />
      </div>
    </div>
  );
}
