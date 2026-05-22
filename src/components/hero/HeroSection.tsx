"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

const headlineLines = [
  "Train smarter.",
  "Recover better.",
  "Build progress that lasts.",
];

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
      })
        .from(
          headlineRef.current?.querySelectorAll("[data-hero-line]") ?? [],
          {
            opacity: 0,
            y: 40,
            duration: 0.55,
            stagger: 0.12,
          },
          "-=0.2",
        )
        .from(
          subtextRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "-=0.25",
        )
        .from(
          ctaRef.current?.children ?? [],
          {
            opacity: 0,
            y: 24,
            duration: 0.45,
            stagger: 0.1,
          },
          "-=0.2",
        )
        .from(
          taglineRef.current,
          {
            opacity: 0,
            duration: 0.4,
          },
          "-=0.15",
        )
        .from(
          visualRef.current?.querySelectorAll("[data-hero-phone]") ?? [],
          {
            opacity: 0,
            y: 40,
            scale: 0.94,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.45",
        );

      const characters = visualRef.current?.querySelector(
        "[data-hero-characters]",
      );
      if (characters) {
        tl.from(
          characters,
          {
            opacity: 0,
            y: 30,
            scale: 0.96,
            duration: 0.75,
          },
          "-=0.45",
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      id="hero"
      background="hero"
      className="overflow-visible pt-28 md:pt-32 lg:pt-36"
      as="section"
    >
      <div
        ref={sectionRef}
        className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16"
      >
        <div className="flex flex-col gap-6 md:gap-8">
          <div ref={badgeRef}>
            <Badge>Personalized Fitness Coaching</Badge>
          </div>

          <h1
            ref={headlineRef}
            className="text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-drevik-black md:text-5xl lg:text-[3.25rem]"
          >
            {headlineLines.map((line) => (
              <span key={line} data-hero-line className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            ref={subtextRef}
            className="max-w-xl text-base leading-relaxed text-drevik-text-muted md:text-lg md:leading-8"
          >
            Drevik adapts your workouts around readiness, recovery, equipment,
            and clean progression — so every session has a purpose.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CTAButton href="#download">Download the App</CTAButton>
            <CTAButton
              href="#how-it-works"
              variant="secondary"
              icon={ArrowRight}
            >
              See how it works
            </CTAButton>
          </div>

          <p ref={taglineRef} className="text-sm text-drevik-text-subtle">
            Personalized coaching • Readiness-based training • Safer progression
          </p>
        </div>

        <div
          ref={visualRef}
          className="relative mx-auto w-full max-w-[820px] lg:mx-0 lg:max-w-none lg:justify-self-end"
        >
          {/* Static decorative gradient behind the phones */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(223,242,234,0.45) 0%, rgba(241,247,246,0.25) 50%, transparent 80%)",
            }}
          />

          {/* Phone mockups — back layer, large and bold */}
          <div className="relative flex min-h-[420px] items-end justify-center gap-1.5 sm:min-h-[480px] sm:gap-2 md:min-h-[540px] md:gap-3 lg:min-h-[600px] lg:gap-4 xl:min-h-[640px]">
            <div
              data-hero-phone
              className="relative z-10 w-[46%] max-w-[340px] shrink-0 sm:max-w-[360px] lg:max-w-[380px] xl:max-w-[400px]"
            >
              <Image
                src="/images/hero/section-1-image-2.png"
                alt="Drevik Today screen showing readiness check"
                width={360}
                height={720}
                className="h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(34,52,54,0.12)]"
                priority
              />
            </div>

            <div
              data-hero-phone
              className="relative z-10 w-[46%] max-w-[340px] shrink-0 translate-y-6 sm:max-w-[360px] sm:translate-y-8 lg:max-w-[380px] lg:translate-y-10 xl:max-w-[400px]"
            >
              <Image
                src="/images/hero/section-1-image-3.png"
                alt="Drevik Library screen showing exercise catalog"
                width={360}
                height={720}
                className="h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(34,52,54,0.12)]"
                priority
              />
            </div>

            {/* Characters — front layer, leaning against each phone */}
            <div
              data-hero-characters
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto w-[104%] max-w-[820px] sm:w-[102%] lg:w-[100%] xl:scale-[1.03] xl:origin-bottom"
            >
              <Image
                src="/images/hero/section-1-image-1.png"
                alt="Athletes using Drevik on their phones"
                width={760}
                height={680}
                className="h-auto w-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(34,52,54,0.08)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
