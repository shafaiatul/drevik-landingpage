export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initial: string;
};

const CARD_GRADIENT =
  "linear-gradient(138.53deg, #f1f7f6 0%, #f4f9f8 20%, #f7fafa 40%, #f9fcfb 60%, #fcfdfd 80%, #ffffff 100%)";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      className="flex h-full flex-col rounded-3xl border border-drevik-border p-10 shadow-drevik-lg"
      style={{ backgroundImage: CARD_GRADIENT }}
    >
      <blockquote className="flex-1 text-xl leading-[32.5px] text-drevik-black">
        {testimonial.quote}
      </blockquote>

      <footer className="mt-10 flex items-center gap-4">
        <div
          className="gradient-primary flex size-14 shrink-0 items-center justify-center rounded-full shadow-drevik-lg"
          aria-hidden
        >
          <span className="text-lg text-white">{testimonial.initial}</span>
        </div>

        <div>
          <p className="text-lg text-drevik-black">{testimonial.name}</p>
          <p className="text-sm text-drevik-text-subtle">{testimonial.role}</p>
        </div>
      </footer>
    </article>
  );
}
