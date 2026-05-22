"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import {
  TestimonialCard,
  type Testimonial,
} from "@/components/testimonials/TestimonialCard";

const testimonials: Testimonial[] = [
  {
    quote:
      "I finally know when to push and when to back off. Drevik makes training feel clear instead of random.",
    name: "Marcus Chen",
    role: "Software Engineer",
    initial: "M",
  },
  {
    quote:
      "The coach target makes progression simple. I know exactly what I'm trying to beat every session.",
    name: "Sarah Mitchell",
    role: "Physical Therapist",
    initial: "S",
  },
  {
    quote:
      "It feels like the app understands recovery, not just volume. That's what makes it different.",
    name: "Alex Rivera",
    role: "Product Manager",
    initial: "A",
  },
];

export function Section7() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-testimonial-card]", {
        opacity: 0,
        y: 40,
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
    <SectionWrapper id="testimonials" background="white">
      <div ref={sectionRef}>
        <h2 className="mx-auto mb-20 max-w-3xl text-center text-5xl font-medium leading-none tracking-[-1.2px] text-drevik-black">
          Designed for serious, busy lifters.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} data-testimonial-card>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
