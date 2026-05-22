"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

const screens = [
  {
    src: "/images/section-5/image-1.png",
    alt: "Assisted Pull Up screen — select assistance weight with body weight calculation",
  },
  {
    src: "/images/section-5/image-2.png",
    alt: "Barbell Bench Press screen — live bar preview with plate loading and weight display",
  },
  {
    src: "/images/section-5/image-3.png",
    alt: "Barbell Bench Press — interactive live bar preview showing plate configuration",
  },
  {
    src: "/images/section-5/image-4.png",
    alt: "Replace Exercise screen — smart swap suggestions filtered by equipment and muscle group",
  },
];

export function Section5() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-s5-phone]", {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.6,
        stagger: 0.1,
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
    <SectionWrapper id="logging" background="white">
      <div ref={sectionRef}>
        <h2 className="mx-auto mb-16 max-w-3xl text-center text-3xl font-medium leading-tight tracking-[-0.02em] text-drevik-black md:mb-20 md:text-4xl lg:text-[2.75rem]">
          Fun and Practical way to Log Exercises
        </h2>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-4 md:gap-8 lg:gap-12">
          {screens.map((screen) => (
            <div key={screen.src} data-s5-phone>
              <Image
                src={screen.src}
                alt={screen.alt}
                width={280}
                height={560}
                className="h-auto w-full object-contain drop-shadow-[0_12px_32px_rgba(34,52,54,0.1)]"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
