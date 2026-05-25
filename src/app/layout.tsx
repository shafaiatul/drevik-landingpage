import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GSAPProvider } from "@/components/providers/GSAPProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteDescription =
  "Drevik adapts your workouts around readiness, recovery, equipment, and clean progression — personalized coaching for lifters who want direction, not confusion.";

export const metadata: Metadata = {
  metadataBase: new URL("https://drevik.app"),
  title: {
    default: "Drevik — Train Smarter, Recover Better",
    template: "%s | Drevik",
  },
  description: siteDescription,
  keywords: [
    "Drevik",
    "fitness coaching app",
    "strength training",
    "workout planner",
    "readiness training",
    "recovery tracking",
    "progressive overload",
    "personalized workouts",
    "gym app",
    "lifting app",
  ],
  authors: [{ name: "Drevik" }],
  creator: "Drevik",
  publisher: "Drevik",
  applicationName: "Drevik",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drevik.app",
    siteName: "Drevik",
    title: "Drevik — Train Smarter, Recover Better",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Drevik — Train Smarter, Recover Better",
    description: siteDescription,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Drevik",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android",
  description: siteDescription,
  url: "https://drevik.app",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-drevik-bg font-sans text-drevik-black antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
