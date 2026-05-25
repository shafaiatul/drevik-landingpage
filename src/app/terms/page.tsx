import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Drevik.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-drevik-bg px-6 py-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-medium text-drevik-text-muted transition-colors hover:text-drevik-black"
        >
          ← Back to home
        </Link>
        <h1 className="mt-8 text-4xl font-medium tracking-[-0.02em] text-drevik-black">
          Terms of Service
        </h1>
        <p className="mt-6 text-base leading-relaxed text-drevik-text-muted">
          This is a draft placeholder. Full terms of service for Drevik will be
          published here before the app launches publicly.
        </p>
        <p className="mt-4 text-base leading-relaxed text-drevik-text-muted">
          For questions, contact us at{" "}
          <a
            href="mailto:hello@drevik.app"
            className="font-medium text-drevik-primary underline-offset-2 hover:underline"
          >
            hello@drevik.app
          </a>
          .
        </p>
      </div>
    </main>
  );
}
