"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/ui/CTAButton";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Coaching", href: "#coaching" },
  { label: "Progress", href: "#progress" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-drevik-border/60 bg-drevik-bg/90 shadow-drevik-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/drevik-logo.png"
            alt="Drevik"
            width={120}
            height={32}
            className="h-7 w-auto md:h-8"
            priority
          />
        </Link>

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

        <div className="hidden lg:block">
          <CTAButton href="#download" className="px-5 py-2.5 text-sm">
            Download App
          </CTAButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-drevik-border bg-white p-2 text-drevik-black lg:hidden"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          {isMobileOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-drevik-bg/95 backdrop-blur-md transition-all duration-300 lg:hidden",
          isMobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!isMobileOpen}
      >
        <div className="flex flex-col gap-6 px-6 py-8">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-lg font-medium text-drevik-black"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <CTAButton href="#download" className="w-full">
            Download App
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
