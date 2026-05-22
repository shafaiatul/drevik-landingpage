"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeatureShowcaseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  media:
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string };
};

export function FeatureShowcaseCard({ card }: { card: FeatureShowcaseItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <article
      className="flex h-full flex-col gap-6 overflow-hidden rounded-[var(--radius-drevik-card)] border border-drevik-border p-6 shadow-drevik-md md:p-7"
      style={{ backgroundImage: card.gradient }}
    >
      <div className="flex flex-col gap-5">
        <div className="gradient-primary flex size-14 items-center justify-center rounded-2xl shadow-drevik-lg">
          <card.icon className="size-7 text-white" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl font-medium leading-snug text-drevik-black md:text-2xl">
          {card.title}
        </h3>

        <p className="text-[15px] leading-relaxed text-drevik-text-muted">
          {card.description}
        </p>
      </div>

      <div className="relative mt-auto overflow-hidden rounded-2xl">
        {card.media.type === "image" ? (
          <Image
            src={card.media.src}
            alt={card.media.alt}
            width={360}
            height={720}
            className="h-auto w-full object-contain"
          />
        ) : (
          <div className="relative mx-auto w-full">
            <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#d1d5db] bg-[#f9fafb] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <div className="relative flex justify-center bg-[#f9fafb] pb-2 pt-3">
                <div className="h-[7px] w-[72px] rounded-full bg-[#1a1a1a]" />
              </div>

              <div className="relative bg-white">
                <video
                  ref={videoRef}
                  src={card.media.src}
                  className="h-auto w-full object-contain"
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={handlePlayToggle}
                    aria-label="Play demo video"
                    className="absolute inset-0 flex items-center justify-center bg-drevik-black/5 transition-colors hover:bg-drevik-black/15"
                  >
                    <span className="flex size-12 items-center justify-center rounded-full bg-white/90 shadow-drevik-lg backdrop-blur-sm">
                      <Play
                        className="ml-0.5 size-5 text-drevik-primary"
                        fill="currentColor"
                      />
                    </span>
                  </button>
                )}
              </div>

              <div className="flex justify-center bg-[#f9fafb] pb-2 pt-1.5">
                <div className="h-[4px] w-[36px] rounded-full bg-[#d1d5db]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
