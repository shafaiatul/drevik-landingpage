import { Apple } from "lucide-react";
import { cn } from "@/lib/utils";

type StoreButtonProps = {
  store: "app-store" | "google-play";
  href?: string;
  className?: string;
};

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M3.6 1.8c-.3.2-.6.6-.6 1.1v18.2c0 .5.3.9.6 1.1l.1.1 10.2-10.2v-.2L3.7 1.7l-.1.1zm11.8 7.8-2.5-2.5-7.8 7.8 2.2 2.2 8.1-7.5zm2.9-2.5-2.2-1.3-3 3 3 3 2.2-1.3 2.5-1.5c.7-.4.7-1.2 0-1.6zM5.3 3.3l7.8 7.8 2.5-2.5L7.8 2 5.3 3.3z" />
    </svg>
  );
}

export function StoreButton({
  store,
  href = "#",
  className,
}: StoreButtonProps) {
  const label = store === "app-store" ? "App Store" : "Google Play";

  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-[68px] items-center gap-3 rounded-2xl bg-white px-10 text-lg font-medium text-drevik-primary shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_25px_30px_-5px_rgba(0,0,0,0.15)]",
        className,
      )}
    >
      {store === "app-store" ? (
        <Apple className="size-7 shrink-0" strokeWidth={1.5} />
      ) : (
        <GooglePlayIcon className="size-7 shrink-0" />
      )}
      {label}
    </a>
  );
}
