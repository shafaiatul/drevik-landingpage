"use client";

import { useRef } from "react";
import gsap from "gsap";
import { Download, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  icon?: LucideIcon | false;
  className?: string;
  onClick?: () => void;
};

export function CTAButton({
  children,
  href,
  variant = "primary",
  size = "default",
  icon: Icon = Download,
  className,
  onClick,
}: CTAButtonProps) {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const useButton = href === undefined;

  const handleMouseEnter = () => {
    const element = useButton ? buttonRef.current : anchorRef.current;
    if (!element) return;
    gsap.to(element, {
      scale: 1.02,
      y: -1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const element = useButton ? buttonRef.current : anchorRef.current;
    if (!element) return;
    gsap.to(element, {
      scale: 1,
      y: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const baseClasses =
    "inline-flex items-center justify-center rounded-[var(--radius-drevik-button)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-drevik-primary/30 focus-visible:ring-offset-2";

  const sizeClasses = {
    default: "gap-2 px-6 py-3.5 text-sm font-medium",
    lg: "gap-2.5 px-8 py-4 text-base font-semibold",
  };

  const iconSizeClasses = {
    default: "size-4",
    lg: "size-5",
  };

  const variantClasses = {
    primary:
      "gradient-primary text-white shadow-drevik-md hover:shadow-drevik-lg",
    secondary:
      "border border-drevik-border bg-white text-drevik-black shadow-drevik-sm hover:border-drevik-primary/20 hover:bg-drevik-bg-alt",
  };

  const sharedClassName = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  if (useButton) {
    return (
      <button
        ref={buttonRef}
        type="button"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={sharedClassName}
      >
        {Icon && (
          <Icon
            className={cn("shrink-0", iconSizeClasses[size])}
            aria-hidden="true"
          />
        )}
        {children}
      </button>
    );
  }

  return (
    <a
      ref={anchorRef}
      href={href}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={sharedClassName}
    >
      {Icon && (
        <Icon
          className={cn("shrink-0", iconSizeClasses[size])}
          aria-hidden="true"
        />
      )}
      {children}
    </a>
  );
}
