import { cn } from "@/lib/utils";

type GradientCardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "success" | "warn" | "danger" | "alt";
};

const variantClasses = {
  default:
    "border-drevik-border bg-white bg-gradient-to-br from-white to-drevik-bg-alt/40 shadow-drevik-md",
  success:
    "border-drevik-success/30 bg-gradient-to-br from-drevik-success-bg to-white shadow-drevik-md",
  warn: "border-drevik-warn/30 bg-gradient-to-br from-drevik-warn-bg/30 to-white shadow-drevik-md",
  danger:
    "border-drevik-danger/20 bg-gradient-to-br from-drevik-danger-bg to-white shadow-drevik-md",
  alt: "border-drevik-border bg-gradient-to-br from-drevik-bg-alt/60 to-white shadow-drevik-md",
};

export function GradientCard({
  children,
  className,
  variant = "default",
}: GradientCardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-drevik-card)] border p-6 md:p-8",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
