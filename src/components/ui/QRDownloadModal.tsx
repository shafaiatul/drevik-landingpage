"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import QRCode from "qrcode";
import { Smartphone } from "lucide-react";

const DOWNLOAD_URL = "https://drevik.app/download";

const MODAL_GRADIENT =
  "linear-gradient(157deg, #223436 0%, #233c39 14%, #23433c 28%, #234f40 42%, #1f6b4a 50%, #234f40 58%, #23433c 72%, #233c39 86%, #223436 100%)";

type QRDownloadModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function QRDownloadModal({ open, onOpenChange }: QRDownloadModalProps) {
  const [qrSvg, setQrSvg] = useState("");

  useEffect(() => {
    let cancelled = false;

    QRCode.toString(DOWNLOAD_URL, {
      type: "svg",
      margin: 1,
      width: 240,
      color: {
        dark: "#0b0f10",
        light: "#ffffff",
      },
    })
      .then((svg) => {
        if (!cancelled) setQrSvg(svg);
      })
      .catch(() => {
        if (!cancelled) setQrSvg("");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="qr-dialog-overlay fixed inset-0 z-[100] bg-drevik-black/70 backdrop-blur-sm" />
        <Dialog.Content
          className="qr-dialog-content fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] outline-none md:p-10"
          style={{
            backgroundImage: MODAL_GRADIENT,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(223,242,234,0.15) 50%, transparent 100%)",
            }}
            aria-hidden
          />

          <div className="relative flex flex-col items-center gap-6 text-center">
            <div className="flex w-full flex-col items-center gap-2">
              <div className="flex items-center justify-center gap-3">
                <Dialog.Title className="text-center text-2xl font-medium leading-snug tracking-[-0.02em] text-white md:text-3xl">
                  Use your{' '}
                  <Smartphone className="inline-block size-8 md:size-9 -mt-0.5 text-white align-middle" aria-hidden="true" />
                  {' '}phone to <span className="block font-bold">scan the QR code</span> to download the App
                </Dialog.Title>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
              {qrSvg ? (
                <div
                  className="mx-auto size-[240px] [&_svg]:h-full [&_svg]:w-full"
                  dangerouslySetInnerHTML={{ __html: qrSvg }}
                  aria-label={`QR code for ${DOWNLOAD_URL}`}
                />
              ) : (
                <div
                  className="mx-auto size-[240px] animate-pulse rounded-xl bg-gray-100"
                  aria-hidden
                />
              )}
            </div>

            <p className="text-base text-white/80">
              Get started for free
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
