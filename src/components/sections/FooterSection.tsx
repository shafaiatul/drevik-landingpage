import { Reveal } from "@/components/ui/Reveal";

export function FooterSection() {
  return (
    <footer className="bg-drevik-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-12">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-drevik-success-bg/80">
              Footer
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.02em]">
              Drevik
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Personalized fitness coaching for smarter training, safer
              progression, and better recovery.
            </p>
            <p className="mt-10 text-xs text-white/50">
              © {new Date().getFullYear()} Drevik. All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
