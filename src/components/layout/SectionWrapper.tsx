import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: "default" | "alt" | "white" | "hero";
  as?: "section" | "div";
};

const backgroundClasses = {
  default: "bg-drevik-bg",
  alt: "gradient-section-alt",
  white: "bg-white",
  hero: "gradient-hero-bg",
};

export function SectionWrapper({
  id,
  children,
  className,
  background = "default",
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        backgroundClasses[background],
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:px-12">
        {children}
      </div>
    </Tag>
  );
}
