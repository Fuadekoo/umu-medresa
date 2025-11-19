"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle, useLanguage } from "@/components/language-toggle";
import { translations, TranslationKey } from "@/lib/translations";

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  const [active, setActive] = useState("");

  // track current hash/path for active link styling
  useEffect(() => {
    const getActive = () =>
      typeof window !== "undefined"
        ? window.location.hash || window.location.pathname
        : "";
    setActive(getActive());
    const onChange = () => setActive(getActive());
    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("hashchange", onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);

  // prevent background scroll while sidebar is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // blur main content and fix header while sidebar is open
  useEffect(() => {
    if (typeof document === "undefined") return;

    const main = document.querySelector("main") as HTMLElement | null;
    const header = document.querySelector("header") as HTMLElement | null;

    const originalMainFilter = main ? main.style.filter || "" : "";
    const originalMainPointer = main ? main.style.pointerEvents || "" : "";

    const originalHeaderStyle = header
      ? {
          position: header.style.position || "",
          top: header.style.top || "",
          left: header.style.left || "",
          right: header.style.right || "",
          zIndex: header.style.zIndex || "",
        }
      : null;

    if (isOpen) {
      if (main) {
        main.style.filter = "blur(6px)";
        main.style.pointerEvents = "none";
      }
      if (header) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.left = "0";
        header.style.right = "0";
        header.style.zIndex = "80";
      }
    } else {
      if (main) {
        main.style.filter = originalMainFilter;
        main.style.pointerEvents = originalMainPointer;
      }
      if (header && originalHeaderStyle) {
        header.style.position = originalHeaderStyle.position;
        header.style.top = originalHeaderStyle.top;
        header.style.left = originalHeaderStyle.left;
        header.style.right = originalHeaderStyle.right;
        header.style.zIndex = originalHeaderStyle.zIndex;
      }
    }

    return () => {
      if (main) {
        main.style.filter = originalMainFilter;
        main.style.pointerEvents = originalMainPointer;
      }
      if (header && originalHeaderStyle) {
        header.style.position = originalHeaderStyle.position;
        header.style.top = originalHeaderStyle.top;
        header.style.left = originalHeaderStyle.left;
        header.style.right = originalHeaderStyle.right;
        header.style.zIndex = originalHeaderStyle.zIndex;
      }
    };
  }, [isOpen]);

  const navItems = [
    { href: "#about", label: t("about") },
    { href: "#courses", label: t("courses") },
    { href: "#gallery", label: t("gallery") },
    { href: "#testimonials", label: t("testimonials") },
    { href: "#contact", label: t("contact") },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* menu toggle button (mobile) */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* sidebar panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 h-screen w-3/5 bg-card border-l shadow-2xl z-60 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* header */}
          <div
            className="flex items-center justify-between p-4"
            style={{
              background:
                "linear-gradient(180deg,#e8f0ff, rgba(232,240,255,0.6))",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md overflow-hidden bg-white flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-medium text-sm text-sky-600">FUAD</div>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg transition-colors text-sky-700"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* nav links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3 mt-4">
              {navItems.map((item) => {
                const isActive = active === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 text-sm font-medium rounded-xl border border-gray-100 bg-white/70 shadow-sm transition duration-150 ${
                      isActive
                        ? "ring-1 ring-emerald-500 bg-emerald-50 text-emerald-700"
                        : "text-left text-gray-700 hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                    style={{ backdropFilter: "blur(6px)" }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* footer controls: theme / telegram icon / language */}
            <div className="mt-6 pt-6 border-t px-4">
              <div className="flex items-center justify-between gap-3">
                <div className="shrink-0">
                  <ThemeToggle />
                </div>

                <div className="shrink-0">
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </nav>

          {/* fallback enroll button for small screens */}
          <div className="p-4 border-t md:hidden">
            <a
              href={`https://t.me/nei23m?text=${encodeURIComponent(
                "I come from the website and I want to start education"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block"
            >
              <Button className="w-full" size="lg">
                {t("enrollNow")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
