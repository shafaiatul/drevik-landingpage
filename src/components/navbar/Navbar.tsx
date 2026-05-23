"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/ui/CTAButton";
import { useQRModal } from "@/components/providers/QRModalProvider";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Coaching", href: "#coaching" },
  { label: "Progress", href: "#progress" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { openModal } = useQRModal();

  // Hamburger line refs
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);

  // Menu element refs
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuLogoRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const menuCtaRef = useRef<HTMLDivElement>(null);

  const activeTlRef = useRef<gsap.core.Timeline | null>(null);

  // Hide overlay before first paint
  useEffect(() => {
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { yPercent: -100, autoAlpha: 0 });
    }
  }, []);

  // Scroll detection
  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 20);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Cleanup on unmount
  useEffect(
    () => () => {
      document.body.style.overflow = "";
      activeTlRef.current?.kill();
    },
    [],
  );

  const animateHamburger = useCallback((open: boolean) => {
    const dur = reducedMotion() ? 0 : 0.35;
    const ease = "power3.out";
    if (open) {
      gsap.to(line2Ref.current, { autoAlpha: 0, duration: dur * 0.4 });
      gsap.to(line1Ref.current, {
        y: 8,
        rotation: 45,
        duration: dur,
        ease,
        transformOrigin: "center center",
      });
      gsap.to(line3Ref.current, {
        y: -8,
        rotation: -45,
        duration: dur,
        ease,
        transformOrigin: "center center",
      });
    } else {
      gsap.to(line2Ref.current, {
        autoAlpha: 1,
        duration: dur * 0.4,
        delay: dur * 0.55,
      });
      gsap.to(line1Ref.current, { y: 0, rotation: 0, duration: dur, ease });
      gsap.to(line3Ref.current, { y: 0, rotation: 0, duration: dur, ease });
    }
  }, []);

  const openMenu = useCallback(() => {
    activeTlRef.current?.kill();
    setIsMobileOpen(true);
    document.body.style.overflow = "hidden";
    animateHamburger(true);

    const reduced = reducedMotion();
    const items = menuItemRefs.current.filter(Boolean) as HTMLElement[];

    // Reset child states so stagger is fresh on re-open
    gsap.set(items, { y: 28, autoAlpha: 0 });
    gsap.set(menuCtaRef.current, { y: 20, autoAlpha: 0 });
    gsap.set(menuLogoRef.current, { y: -10, autoAlpha: 0 });

    const tl = gsap.timeline();
    activeTlRef.current = tl;

    tl.to(overlayRef.current, {
      yPercent: 0,
      autoAlpha: 1,
      duration: reduced ? 0.01 : 0.5,
      ease: "expo.out",
    });

    if (!reduced) {
      tl.to(
        menuLogoRef.current,
        { y: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out" },
        "-=0.3",
      );
      tl.to(
        items,
        { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.07, ease: "power3.out" },
        "-=0.25",
      );
      tl.to(
        menuCtaRef.current,
        { y: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out" },
        "-=0.1",
      );
    } else {
      gsap.set([menuLogoRef.current, ...items, menuCtaRef.current], {
        y: 0,
        autoAlpha: 1,
      });
    }
  }, [animateHamburger]);

  const closeMenu = useCallback(() => {
    activeTlRef.current?.kill();
    animateHamburger(false);

    const reduced = reducedMotion();
    const items = menuItemRefs.current.filter(Boolean) as HTMLElement[];

    const tl = gsap.timeline({
      onComplete: () => {
        setIsMobileOpen(false);
        document.body.style.overflow = "";
      },
    });
    activeTlRef.current = tl;

    if (!reduced) {
      const targets = [...items, menuCtaRef.current].filter(Boolean);
      tl.to(targets, {
        y: -12,
        autoAlpha: 0,
        duration: 0.2,
        stagger: 0.03,
        ease: "power2.in",
      });
    }

    tl.to(
      overlayRef.current,
      { yPercent: -100, autoAlpha: 0, duration: reduced ? 0.01 : 0.45, ease: "expo.in" },
      reduced ? 0 : "-=0.05",
    );
  }, [animateHamburger]);

  // Escape key — only listen while menu is open
  useEffect(() => {
    if (!isMobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isMobileOpen, closeMenu]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled || isMobileOpen
            ? "border-b border-drevik-border/60 bg-drevik-bg/90 shadow-drevik-sm backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/images/drevik-logo.png"
              alt="Drevik"
              width={120}
              height={32}
              className="h-7 w-auto md:h-8"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-drevik-text-muted transition-colors hover:text-drevik-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <CTAButton onClick={openModal} className="px-5 py-2.5 text-sm">
              Get Started
            </CTAButton>
          </div>

          {/* Animated hamburger */}
          <button
            type="button"
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-xl border border-drevik-border/60 bg-white/80 p-2 backdrop-blur-sm transition-transform duration-150 active:scale-95 lg:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            onClick={() => (isMobileOpen ? closeMenu() : openMenu())}
          >
            <span
              ref={line1Ref}
              className="block h-[2px] w-5 origin-center rounded-full bg-drevik-primary"
            />
            <span
              ref={line2Ref}
              className="block h-[2px] w-5 rounded-full bg-drevik-primary"
            />
            <span
              ref={line3Ref}
              className="block h-[2px] w-5 origin-center rounded-full bg-drevik-primary"
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isMobileOpen}
        style={{ opacity: 0, visibility: "hidden" }}
        className="fixed inset-0 z-45 flex flex-col overflow-hidden lg:hidden"
      >
        {/* Deep green gradient background */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(160deg, #182c2e 0%, #1c3632 18%, #1f3e39 35%, #1d5240 55%, #1b4c3c 72%, #182e30 100%)",
          }}
        />
        {/* Soft radial glow accents */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 90% 5%, rgba(31,107,74,0.28) 0%, transparent 65%),
              radial-gradient(ellipse 55% 40% at 5% 85%, rgba(34,83,60,0.18) 0%, transparent 55%)
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col px-8 pt-20 pb-[max(2rem,env(safe-area-inset-bottom,2rem))] md:pt-24">
          {/* Invisible GSAP anchor — keeps stagger timing without rendering a second logo */}
          <div ref={menuLogoRef} className="h-0 overflow-hidden" aria-hidden="true" />

          {/* Nav links */}
          <nav className="flex-1" aria-label="Mobile navigation">
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  ref={(el) => {
                    menuItemRefs.current[i] = el;
                  }}
                  className="group border-b border-white/10 last:border-0"
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-[1.05rem] text-[1.75rem] font-medium leading-tight text-white/75 transition-colors duration-200 hover:text-white"
                    onClick={closeMenu}
                  >
                    {link.label}
                    <ChevronRight
                      className="size-5 shrink-0 text-white/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white/50"
                      strokeWidth={1.5}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div ref={menuCtaRef} className="mt-8 pb-2">
            <a
              href="https://drevik.app/download"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-xl font-semibold text-drevik-primary shadow-[0_4px_24px_rgba(0,0,0,0.22)] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
