"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Activity, Brain, ShieldAlert, TrendingUp, Play } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  media:
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string; poster?: string };
};

const features: FeatureCard[] = [
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

function FeatureCardComponent({ card }: { card: FeatureCard }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <article
      className="flex h-full flex-col gap-6 overflow-hidden rounded-[var(--radius-drevik-card)] border border-drevik-border p-6 shadow-drevik-md md:p-7"
      style={{ backgroundImage: card.gradient }}
    >
      <div className="flex flex-col gap-5">
        <div className="gradient-primary flex size-14 items-center justify-center rounded-2xl shadow-drevik-lg">
          <card.icon className="size-7 text-white" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl font-medium leading-snug text-drevik-black md:text-2xl">
          {card.title}
        </h3>

        <p className="text-[15px] leading-relaxed text-drevik-text-muted">
          {card.description}
        </p>
      </div>

      <div className="relative mt-auto overflow-hidden rounded-2xl">
        {card.media.type === "image" ? (
          <Image
            src={card.media.src}
            alt={card.media.alt}
            width={360}
            height={720}
            className="h-auto w-full object-contain"
          />
        ) : (
          <div className="relative mx-auto w-full">
            {/* Phone frame shell */}
            <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#d1d5db] bg-[#f9fafb] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              {/* Dynamic island notch */}
              <div className="relative flex justify-center bg-[#f9fafb] pb-2 pt-3">
                <div className="h-[7px] w-[72px] rounded-full bg-[#1a1a1a]" />
              </div>

              {/* Video content area */}
              <div className="relative bg-white">
                <video
                  ref={videoRef}
                  src={card.media.src}
                  className="h-auto w-full object-contain"
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={handlePlayToggle}
                    aria-label="Play demo video"
                    className="absolute inset-0 flex items-center justify-center bg-drevik-black/5 transition-colors hover:bg-drevik-black/15"
                  >
                    <span className="flex size-12 items-center justify-center rounded-full bg-white/90 shadow-drevik-lg backdrop-blur-sm">
                      <Play
                        className="ml-0.5 size-5 text-drevik-primary"
                        fill="currentColor"
                      />
                    </span>
                  </button>
                )}
              </div>

              {/* Bottom chin */}
              <div className="flex justify-center bg-[#f9fafb] pb-2 pt-1.5">
                <div className="h-[4px] w-[36px] rounded-full bg-[#d1d5db]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

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
              <FeatureCardComponent card={card} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
