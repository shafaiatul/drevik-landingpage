"use client";

import { useEffect, useRef } from "react";
import { Activity, CalendarCheck, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

type Step = {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: 1,
    icon: Activity,
    title: "Check readiness",
    description: "Answer three quick questions before training.",
  },
  {
    number: 2,
    icon: CalendarCheck,
    title: "Start the right session",
    description:
      "Drevik builds the workout around your plan, equipment, and recovery state.",
  },
  {
    number: 3,
    icon: TrendingUp,
    title: "Progress with proof",
    description:
      "Your next target is based on clean logged history — not guesswork.",
  },
];

export function Section3() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-step-card]", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="how-it-works" background="alt">
      <div ref={sectionRef}>
        <h2 className="mx-auto mb-16 max-w-3xl text-center text-3xl font-medium leading-tight tracking-[-0.02em] text-drevik-black md:mb-20 md:text-4xl lg:text-[2.75rem]">
          How Drevik Works
        </h2>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {steps.map((step) => (
            <div key={step.number} data-step-card>
              <article className="flex h-full flex-col items-center gap-5 rounded-[var(--radius-drevik-card)] border border-drevik-border bg-white p-8 text-center shadow-drevik-md md:p-10">
                {/* Step number */}
                <div className="gradient-success flex size-12 items-center justify-center rounded-2xl shadow-drevik-md">
                  <span className="text-lg font-normal text-white">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex size-12 items-center justify-center rounded-[14px] bg-drevik-success-bg">
                  <step.icon
                    className="size-6 text-drevik-success"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium leading-snug text-drevik-black md:text-2xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="max-w-xs text-[15px] leading-relaxed text-drevik-text-muted">
                  {step.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
