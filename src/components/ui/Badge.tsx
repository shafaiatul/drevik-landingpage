import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-drevik-success/20 bg-drevik-success-bg px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-drevik-success",
        className,
      )}
    >
      {children}
    </span>
  );
}
