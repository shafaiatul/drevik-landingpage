import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Coaching", href: "#coaching" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function FooterSection() {
  return (
    <footer className="bg-drevik-black text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:px-8 lg:px-12 lg:pt-20">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/drevik-logo.png"
                  alt="Drevik"
                  width={1803}
                  height={376}
                  className="h-8 w-auto md:h-9"
                />
              </Link>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-white/70">
                Personalized fitness coaching for smarter training, safer
                progression, and better recovery.
              </p>
            </div>

            {/* Links Sections */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
              {/* Product Links */}
              <div className="lg:col-start-2">
                <h3 className="text-lg font-medium text-white">Product</h3>
                <ul className="mt-5 space-y-4">
                  {productLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-lg font-medium text-white">Legal</h3>
                <ul className="mt-5 space-y-4">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 border-t border-white/10 pt-8 lg:mt-20">
            <p className="text-center text-sm text-white/50">
              © {new Date().getFullYear()} Drevik. All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
