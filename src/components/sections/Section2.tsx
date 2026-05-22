"use client";

import { useEffect, useRef } from "react";
import { Activity, Brain, ShieldAlert, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import {
  FeatureShowcaseCard,
  type FeatureShowcaseItem,
} from "@/components/sections/FeatureShowcaseCard";

const features: FeatureShowcaseItem[] = [
  {
    icon: Activity,
    title: "Daily Readiness",
    description:
      "Check sleep, soreness, and joint pain. Drevik turns it into a clear green, yellow, or red training signal.",
    gradient:
      "linear-gradient(110deg, rgba(223,242,234,0.4) 0%, rgb(255,255,255) 100%)",
    media: {
      type: "image",
      src: "/images/section-2/readiness.png",
      alt: "Today screen showing readiness check with sleep, soreness, and joint pain inputs",
    },
  },
  {
    icon: Brain,
    title: "Adaptive Workout Brain",
    description:
      "Your workout adjusts around your goal, schedule, equipment, recovery, and joints to protect.",
    gradient:
      "linear-gradient(109deg, rgba(241,247,246,0.6) 0%, rgb(255,255,255) 100%)",
    media: {
      type: "image",
      src: "/images/section-2/train.png",
      alt: "Train screen showing session selection with exercises, duration, and target muscles",
    },
  },
  {
    icon: ShieldAlert,
    title: "Injury Firewall",
    description:
      "Form breaks and joint pain change the plan immediately — reducing load, blocking risky progression, or suggesting safer swaps.",
    gradient:
      "linear-gradient(109deg, rgba(245,220,220,0.3) 0%, rgb(255,255,255) 100%)",
    media: {
      type: "image",
      src: "/images/section-2/logging.png",
      alt: "Exercise logging screen with form broke and joint pain safety flags",
    },
  },
  {
    icon: TrendingUp,
    title: "Clean Progression Engine",
    description:
      "Build reps first, increase weight only when the set is clean, and keep PRs honest.",
    gradient:
      "linear-gradient(110deg, rgba(247,239,208,0.3) 0%, rgb(255,255,255) 100%)",
    media: {
      type: "video",
      src: "/images/section-2/progression-demo.mp4",
    },
  },
];

export function Section2() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-feature-card]", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.12,
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
    <SectionWrapper id="features" background="white">
      <div ref={sectionRef}>
        <h2 className="mx-auto mb-16 max-w-3xl text-center text-3xl font-medium leading-tight tracking-[-0.02em] text-drevik-black md:mb-20 md:text-4xl lg:text-[2.75rem]">
          Built for lifters who want direction, not confusion.
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((card) => (
            <div key={card.title} data-feature-card>
              <FeatureShowcaseCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
