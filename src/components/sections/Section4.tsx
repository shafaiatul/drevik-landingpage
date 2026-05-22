"use client";

import { useEffect, useRef } from "react";
import { Check, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const bulletPoints = [
  "Push harder when recovery is strong",
  "Hold weight when form breaks",
  "Protect joints when pain appears",
  "Swap exercises based on equipment and stress",
  "Track clean progress over time",
];

export function Section4() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-s4-left]", {
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from("[data-s4-card]", {
        opacity: 0,
        y: 30,
        duration: 0.55,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="coaching"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(159deg, rgba(223,242,234,0.2) 0%, #fff 50%, rgba(241,247,246,0.4) 100%)",
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Left column */}
        <div data-s4-left className="flex flex-col gap-6 md:gap-8">
          <h2 className="max-w-md text-3xl font-medium leading-tight tracking-[-0.02em] text-drevik-black md:text-4xl lg:text-[2.75rem]">
            Coaching that changes with you.
          </h2>

          <p className="max-w-lg text-lg leading-8 text-drevik-text-muted">
            Drevik does not throw random workouts at you. It reads your
            readiness, logged sets, pain flags, equipment, and progression
            history to guide the next smart move.
          </p>

          <ul className="flex flex-col gap-4 pt-2">
            {bulletPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-drevik-success">
                  <Check className="size-3.5 text-white" strokeWidth={2.5} />
                </span>
                <span className="text-[17px] leading-7 text-drevik-primary">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — coaching signal cards */}
        <div className="flex flex-col gap-4 md:gap-5">
          {/* Readiness Signal — green accent */}
          <div
            data-s4-card
            className="rounded-2xl border-2 border-drevik-success/30 p-6 shadow-drevik-lg md:p-7"
            style={{
              background:
                "linear-gradient(168deg, #DFF2EA 0%, #E5F4EE 25%, #EBF7F2 50%, #F3FAF7 75%, #FFF 100%)",
            }}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-drevik-text-muted">
                Readiness Signal
              </span>
              <span className="rounded-full bg-drevik-success px-4 py-1 text-xs font-normal tracking-wider text-white">
                GREEN
              </span>
            </div>
            <p className="text-lg font-normal text-drevik-black">
              You&apos;re feeling great — GO HARD
            </p>
          </div>

          {/* Coach Target — white with progress bar */}
          <div
            data-s4-card
            className="rounded-2xl border border-drevik-border bg-white p-6 shadow-drevik-md md:p-7"
          >
            <span className="mb-2 block text-sm text-drevik-text-muted">
              Coach Target
            </span>
            <p className="mb-4 text-lg font-normal text-drevik-black">
              Clean 185 lb × 10 — aim for 11 reps
            </p>
            <div className="h-3 w-full overflow-hidden rounded-full bg-drevik-border">
              <div
                className="h-full rounded-full"
                style={{
                  width: "83%",
                  background:
                    "linear-gradient(90deg, #1F6B4A 0%, #235742 50%, #223436 100%)",
                }}
              />
            </div>
          </div>

          {/* Protected Workout — danger/pink accent */}
          <div
            data-s4-card
            className="rounded-2xl border border-drevik-danger/20 p-6 shadow-drevik-md md:p-7"
            style={{
              background:
                "linear-gradient(168deg, #F5DCDC 0%, #F7E3E3 20%, #FAE9E9 40%, #FCEFEF 60%, #FEF5F5 80%, #FFF 100%)",
            }}
          >
            <span className="mb-2 block text-sm text-drevik-text-muted">
              Protected Workout
            </span>
            <p className="text-lg font-normal text-drevik-black">
              Shoulder-stress exercises excluded today
            </p>
          </div>

          {/* Progress Trend — soft green accent */}
          <div
            data-s4-card
            className="rounded-2xl border border-drevik-border p-6 shadow-drevik-md md:p-7"
            style={{
              background:
                "linear-gradient(167deg, #FFF 0%, #FCFDFD 20%, #F9FCFB 40%, #F7FAFA 60%, #F4F9F8 80%, #F1F7F6 100%)",
            }}
          >
            <span className="mb-3 block text-sm text-drevik-text-muted">
              Progress Trend
            </span>
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-[14px] bg-drevik-success-bg">
                <TrendingUp
                  className="size-5 text-drevik-success"
                  strokeWidth={1.5}
                />
              </span>
              <p className="text-lg font-normal text-drevik-black">
                Estimated strength up 15 lb this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
