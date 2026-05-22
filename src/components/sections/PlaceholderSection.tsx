import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

type PlaceholderSectionProps = {
  id: string;
  title: string;
  background?: "default" | "alt" | "white" | "hero";
};

export function PlaceholderSection({
  id,
  title,
  background = "default",
}: PlaceholderSectionProps) {
  return (
    <SectionWrapper id={id} background={background}>
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-drevik-success">
            Coming next
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-drevik-black md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-drevik-text-muted">
            This section will be implemented in the next pass.
          </p>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
