import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { OrbitalProjectCarousel } from "@/components/project-Orbital";
import BlurFadeRoles from "@/components/role-carousel";
import Link from "next/link";
import { ProjectSection } from "@/components/projectSelection";
import { ResumePreviewCard } from "@/components/ResumePreview";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-2xl mx-auto px-6 pt-24 pb-12 sm:py-24">
      <section id="hero" className="pt-4 pb-8 sm:pb-12">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-col flex flex-1 space-y-3">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="font-heading text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
                text={`Hello, I'm ${DATA.name.split(" ")[0]}`}
              />
              <div className="text-lg md:text-2xl font-medium text-black dark:text-white flex items-baseline gap-1 leading-none">
                <BlurFadeText text="Inspiring" delay={BLUR_FADE_DELAY} />
                <BlurFadeRoles delay={BLUR_FADE_DELAY} />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link href="#projects" className={buttonVariants({ size: "lg" })}>
                    View Projects
                  </Link>
                  <Link
                    href="/Resume/Nguyen_Ethan_Resume_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "bg-white/90 dark:bg-black/60 backdrop-blur border-black/20 dark:border-white/20"
                    )}
                  >
                    Download Resume
                  </Link>
                </div>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-32 sm:size-40 border-2 shadow-lg">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="font-heading tracking-tight text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="max-w-full text-pretty font-sans text-sm text-muted-foreground">
            {DATA.summary}
          </p>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="font-heading tracking-tight text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="font-heading tracking-tight text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`Graduated ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">

        <div className="flex flex-col gap-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="font-heading tracking-tight text-xl font-bold">Skills</h2>
          </BlurFade>
          {DATA.skills.map((group, idx) => (
            <BlurFade key={group.category} delay={BLUR_FADE_DELAY * 10 + idx * 0.05}>
              
              <div className="flex flex-col gap-2">
                {/* Category Title */}
                <h3 className="text-sm font-semibold text-muted-foreground">
                  {group.category}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {group.items.map((skill, i) => (
                    <Badge
                      key={skill}
                      style={{ animationDelay: `${i * 40}ms` }}
                      className="animate-in fade-in zoom-in-75 fill-mode-backwards duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

            </BlurFade>
          ))}
        </div>
      </section>


        <section
          id="projects"
          className="py-16 space-y-8"
        >
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
            <div className="mx-auto max-w-2xl lg:max-w-4xl xl:max-w-6xl px-6">
              <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <div className="flex flex-col items-center text-center space-y-2">
                  <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-5xl">
                    Projects worked on
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    I&apos;ve worked on a variety of projects, from iPhone shortcuts to remote controlled cars.
                  </p>
                </div>
              

              <div className="relative isolate">
                <div
                  className="relative w-full"
                  style={{
                    perspective: "1200px",
                  }}
                >
                  <ProjectSection />
                
                </div>
              </div>
            </BlurFade>
            </div>
          </div>
        </section>

      {/* Latest Resume */}

      <section id="resume" className="py-16 space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
  <h2 className="font-heading text-3xl font-bold text-center">Resume</h2>
    <div className="flex justify-center"></div>
  <ResumePreviewCard />
  </BlurFade>
</section>


      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I reply fastest on my {" "}
              <Link
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:underline"
              >
                LinkedIn
              </Link>{" "}
              and I&apos;ll respond whenever I can. No
              soliciting.
            </p>
            
          </BlurFade>
        </div>
      </section>
    </main>
  );
}