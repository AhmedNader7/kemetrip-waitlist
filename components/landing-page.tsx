"use client";

import { Languages, Moon, Sun } from "lucide-react";
import { useMemo, useState, useSyncExternalStore } from "react";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { SiteFooter } from "@/components/site-footer";

export type ThemeMode = "dark" | "light";
export type Language = "en" | "ar";

export function LandingPage() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [language, setLanguage] = useState<Language>("ar");

  // Hydration-safe mounted flag without effect-driven setState.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const isLight = theme === "light";
  const isArabic = language === "ar";

  const labels = useMemo(
    () => ({
      theme: isArabic ? "الوضع" : "Theme",
      language: isArabic ? "اللغة" : "Language",
      dark: isArabic ? "داكن" : "Dark",
      light: isArabic ? "فاتح" : "Light",
      ar: "العربية",
      en: "English",
    }),
    [isArabic],
  );

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className={[
        "relative min-h-screen overflow-hidden transition-colors duration-300",
        isLight ? "bg-slate-100 text-slate-900" : "bg-slate-950 text-slate-100",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute inset-x-0 top-0 z-0 h-64",
          isLight
            ? "bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.24),transparent_55%)]"
            : "bg-[radial-gradient(circle_at_top,_rgba(255,183,3,0.14),transparent_55%)]",
        ].join(" ")}
      />

      <header className="relative z-50 px-4 pt-5 sm:px-6">
        <nav
          className={[
            "relative z-50 pointer-events-auto mx-auto w-full max-w-6xl rounded-2xl border px-3 py-3 backdrop-blur",
            isLight
              ? "border-slate-200 bg-white/85"
              : "border-slate-700/70 bg-slate-900/70",
          ].join(" ")}
        >
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div
              className={[
                "rounded-xl p-1",
                isLight ? "bg-slate-100" : "bg-slate-800/60",
              ].join(" ")}
            >
              <p
                className={[
                  "px-2 pb-1 text-xs font-medium sm:text-sm",
                  isLight ? "text-slate-600" : "text-slate-300",
                ].join(" ")}
              >
                {labels.theme}
              </p>
              <div
                className="relative z-[9999] pointer-events-auto grid grid-cols-2 gap-2"
                role="group"
                aria-label="Theme toggle"
              >
                <button
                  type="button"
                  disabled={!mounted}
                  onClick={() => setTheme("dark")}
                  aria-pressed={theme === "dark"}
                  aria-disabled={!mounted}
                  className={[
                    "relative z-[9999] pointer-events-auto inline-flex min-h-[44px] min-w-[44px] cursor-pointer touch-manipulation select-none items-center justify-center gap-1 rounded-full px-3 py-2 text-xs font-semibold transition active:scale-95 disabled:cursor-not-allowed",
                    theme === "dark"
                      ? "bg-slate-900 text-white"
                      : isLight
                        ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700",
                  ].join(" ")}
                >
                  <Moon className="h-3.5 w-3.5" />
                  {labels.dark}
                </button>
                <button
                  type="button"
                  disabled={!mounted}
                  onClick={() => setTheme("light")}
                  aria-pressed={theme === "light"}
                  aria-disabled={!mounted}
                  className={[
                    "relative z-[9999] pointer-events-auto inline-flex min-h-[44px] min-w-[44px] cursor-pointer touch-manipulation select-none items-center justify-center gap-1 rounded-full px-3 py-2 text-xs font-semibold transition active:scale-95 disabled:cursor-not-allowed",
                    theme === "light"
                      ? "bg-amber-400 text-slate-900"
                      : isLight
                        ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700",
                  ].join(" ")}
                >
                  <Sun className="h-3.5 w-3.5" />
                  {labels.light}
                </button>
              </div>
            </div>

            <div
              className={[
                "rounded-xl p-1",
                isLight ? "bg-slate-100" : "bg-slate-800/60",
              ].join(" ")}
            >
              <p
                className={[
                  "px-2 pb-1 text-xs font-medium sm:text-sm",
                  isLight ? "text-slate-600" : "text-slate-300",
                ].join(" ")}
              >
                {labels.language}
              </p>
              <div
                className="relative z-[9999] pointer-events-auto grid grid-cols-2 gap-2"
                role="group"
                aria-label="Language toggle"
              >
                <button
                  type="button"
                  disabled={!mounted}
                  onClick={() => setLanguage("ar")}
                  aria-pressed={language === "ar"}
                  aria-disabled={!mounted}
                  className={[
                    "relative z-[9999] pointer-events-auto inline-flex min-h-[44px] min-w-[44px] cursor-pointer touch-manipulation select-none items-center justify-center gap-1 rounded-full px-3 py-2 text-xs font-semibold transition active:scale-95 disabled:cursor-not-allowed",
                    language === "ar"
                      ? "bg-[#FFB703] text-slate-950"
                      : isLight
                        ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700",
                  ].join(" ")}
                >
                  <Languages className="h-3.5 w-3.5" />
                  {labels.ar}
                </button>
                <button
                  type="button"
                  disabled={!mounted}
                  onClick={() => setLanguage("en")}
                  aria-pressed={language === "en"}
                  aria-disabled={!mounted}
                  className={[
                    "relative z-[9999] pointer-events-auto inline-flex min-h-[44px] min-w-[44px] cursor-pointer touch-manipulation select-none items-center justify-center gap-1 rounded-full px-3 py-2 text-xs font-semibold transition active:scale-95 disabled:cursor-not-allowed",
                    language === "en"
                      ? "bg-[#FFB703] text-slate-950"
                      : isLight
                        ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700",
                  ].join(" ")}
                >
                  <Languages className="h-3.5 w-3.5" />
                  {labels.en}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col">
        <HeroSection language={language} theme={theme} />
        <RoadmapSection language={language} theme={theme} />
        <FaqSection language={language} theme={theme} />
      </main>
      <SiteFooter language={language} theme={theme} />
    </div>
  );
}
