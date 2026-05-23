"use client";

import { useEffect, useRef } from "react";
import { Download, QrCode } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useQRModal } from "@/components/providers/QRModalProvider";
import { cn } from "@/lib/utils";

const CTA_GRADIENT =
  "linear-gradient(157deg, #223436 0%, #233c39 14%, #23433c 28%, #234f40 42%, #1f6b4a 50%, #234f40 58%, #23433c 72%, #233c39 86%, #223436 100%)";

export function Section9() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { openModal } = useQRModal();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-cta-content]", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="download" background="alt">
      <div ref={sectionRef}>
        <div
          data-cta-content
          className="relative overflow-hidden rounded-[3rem] px-8 py-16 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] md:px-16 md:py-20 lg:rounded-[3rem]"
          style={{ backgroundImage: CTA_GRADIENT }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(223,242,234,0.1) 50%, transparent 100%)",
            }}
            aria-hidden
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
            <h2 className="text-4xl font-medium leading-tight tracking-[-1.5px] text-white md:text-5xl lg:text-[3.75rem] lg:leading-[60px]">
              Start training with more clarity.
            </h2>

            <p className="max-w-2xl text-lg leading-8 text-white/90 md:text-2xl md:leading-[39px]">
              Download Drevik and let your workouts adapt to your recovery,
              equipment, and progress.
            </p>

            <a
              href="https://drevik.app/download"
              className={cn(
                "mt-2 inline-flex h-[68px] items-center gap-3 rounded-2xl bg-white px-10 text-lg font-medium text-drevik-primary shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_25px_30px_-5px_rgba(0,0,0,0.15)] lg:hidden",
              )}
            >
              <Download className="size-6 shrink-0" strokeWidth={1.5} />
              Download App
            </a>
            <button
              type="button"
              onClick={openModal}
              className={cn(
                "mt-2 hidden h-[68px] items-center gap-3 rounded-2xl bg-white px-10 text-lg font-medium text-drevik-primary shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_25px_30px_-5px_rgba(0,0,0,0.15)] lg:inline-flex",
              )}
            >
              <QrCode className="size-6 shrink-0" strokeWidth={1.5} />
              Get Started
            </button>

            <p className="mt-2 text-sm text-white/70">
              Built for smarter training, safer progression, and long-term
              consistency.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
