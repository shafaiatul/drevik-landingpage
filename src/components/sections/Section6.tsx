"use client";

import { useEffect, useRef } from "react";
import { LayoutGrid, SlidersHorizontal, Users, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import {
  FeatureShowcaseCard,
  type FeatureShowcaseItem,
} from "@/components/sections/FeatureShowcaseCard";

const features: FeatureShowcaseItem[] = [
  {
    icon: LayoutGrid,
    title: "Explore or create your perfect split",
    description:
      "Explore Drevik's specialized splits — or create your own custom split for advanced training.",
    gradient:
      "linear-gradient(110deg, rgba(223,242,234,0.35) 0%, rgb(255,255,255) 100%)",
    media: {
      type: "image",
      src: "/images/section-6/image-1.png",
      alt: "Library screen showing Drevik splits and custom split creation",
    },
  },
  {
    icon: Zap,
    title: "Proven splits that deliver",
    description:
      "Choose from 8+ highly effective split sessions built to maximize results.",
    gradient:
      "linear-gradient(109deg, rgba(241,247,246,0.55) 0%, rgb(255,255,255) 100%)",
    media: {
      type: "image",
      src: "/images/section-6/image-2.png",
      alt: "All Splits screen showing proven workout split options",
    },
  },
  {
    icon: Users,
    title: "Personalized recommendations",
    description:
      "Get personalized exercise recommendations based on your goals and selections.",
    gradient:
      "linear-gradient(109deg, rgba(245,220,220,0.25) 0%, rgb(255,255,255) 100%)",
    media: {
      type: "image",
      src: "/images/section-6/image-3.png",
      alt: "Select Muscle Group screen with anatomical muscle group tiles",
    },
  },
  {
    icon: SlidersHorizontal,
    title: "Customize with expert guidance",
    description:
      "Customize your own split sessions and exercises with clear, expert guidance.",
    gradient:
      "linear-gradient(110deg, rgba(247,239,208,0.25) 0%, rgb(255,255,255) 100%)",
    media: {
      type: "video",
      src: "/images/section-6/split-demo.mp4",
    },
  },
];

export function Section6() {
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
    <SectionWrapper id="progress" background="white">
      <div ref={sectionRef}>
        <h2 className="mx-auto mb-16 max-w-3xl text-center text-3xl font-medium leading-tight tracking-[-0.02em] text-drevik-black md:mb-20 md:text-4xl lg:text-[2.75rem]">
          Drevik Makes Split Sessions Easy to Understand
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
