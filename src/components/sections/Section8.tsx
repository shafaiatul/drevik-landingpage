"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FAQAccordion, FilterPills } from "@/components/faq/FAQAccordion";
import type { FAQCategoryFilter } from "@/components/faq/faqData";

export function Section8() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] =
    useState<FAQCategoryFilter>("all");
  const [openItem, setOpenItem] = useState("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-faq-item]", {
        opacity: 0,
        y: 24,
        duration: 0.55,
        stagger: 0.08,
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

  const handleCategoryChange = (category: FAQCategoryFilter) => {
    setActiveCategory(category);
    setOpenItem("");
  };

  return (
    <SectionWrapper id="faq" background="alt">
      <div ref={sectionRef} className="mx-auto flex max-w-4xl flex-col gap-16">
        <h2 className="text-center text-5xl font-medium leading-none tracking-[-1.2px] text-drevik-black">
          Frequently Asked Questions
        </h2>

        <FilterPills
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <FAQAccordion
          activeCategory={activeCategory}
          openItem={openItem}
          onOpenChange={setOpenItem}
        />
      </div>
    </SectionWrapper>
  );
}
