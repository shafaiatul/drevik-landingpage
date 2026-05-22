import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GSAPProvider } from "@/components/providers/GSAPProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drevik — Train Smarter, Recover Better",
  description:
    "Drevik adapts your workouts around readiness, recovery, equipment, and clean progression — personalized coaching for lifters who want direction, not confusion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-drevik-bg font-sans text-drevik-black antialiased">
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
