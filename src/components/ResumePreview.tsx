"use client";

import Image from "next/image";
import { ResumeCard } from "@/components/resume-card";

export function ResumePreviewCard() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl space-y-8">
        
        {/* Resume Preview Image */}
        <a
          href="/Resume/Nguyen_Ethan_Resume_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative overflow-visible rounded-xl border bg-white shadow-sm transition-all duration-300 group-hover:shadow-lg">
            
            <Image
              src="/Resume/Nguyen_Ethan_Resume_2026.png"
              alt="Ethan Nguyen Resume Preview"
              width={1200}
              height={1550}
              className="w-full h-auto object-contain"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />

          </div>
        </a>

        {/* Metadata Card */}
        <ResumeCard
          variant="resume"
          title="Latest Resume"
          subtitle="PDF Version — Updated 2026"
          logoUrl="/me.jpg"
          altText="Resume"
          href="/Resume/Nguyen_Ethan_Resume_2026.pdf"
          description="Download full PDF resume"
          period=""
        />

      </div>
    </div>
  );
}
