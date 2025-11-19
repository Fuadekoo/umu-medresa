"use client";

import { Send } from "lucide-react";

export function TelegramButton() {
  // Always visible and fixed; keep ping animation but show immediately
  const username = "nei34m";
  const message = encodeURIComponent(
    "I come from the website and I want to start education"
  );
  const telegramUrl = `https://t.me/${username}?text=${message}`;

  return (
    <a
      href={telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#229ED9] focus:ring-offset-2"
      }
      aria-label="Contact on Telegram"
      style={{ zIndex: 9999 }}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#229ED9] opacity-20"></span>
      <Send className="relative h-6 w-6 -ml-1 mt-1" />
    </a>
  );
}
