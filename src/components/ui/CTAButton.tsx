"use client";

import { useRef } from "react";
import gsap from "gsap";
import { Download, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
};

export function CTAButton({
  children,
  href = "#",
  variant = "primary",
  icon: Icon = Download,
  className,
  onClick,
}: CTAButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      scale: 1.02,
      y: -1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      scale: 1,
      y: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-drevik-button)] px-6 py-3.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-drevik-primary/30 focus-visible:ring-offset-2";

  const variantClasses = {
    primary:
      "gradient-primary text-white shadow-drevik-md hover:shadow-drevik-lg",
    secondary:
      "border border-drevik-border bg-white text-drevik-black shadow-drevik-sm hover:border-drevik-primary/20 hover:bg-drevik-bg-alt",
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {Icon && <Icon className="size-4 shrink-0" aria-hidden="true" />}
      {children}
    </a>
  );
}
