import type { Language, ThemeMode } from "@/components/landing-page";

type SiteFooterProps = {
  language: Language;
  theme: ThemeMode;
};

export function SiteFooter({ language, theme }: SiteFooterProps) {
  const isArabic = language === "ar";
  const isLight = theme === "light";

  return (
    <footer className="px-4 pb-8 sm:px-6 sm:pb-10">
      <div
        className={[
          "mx-auto w-full max-w-5xl border-t pt-6 text-center text-xs sm:text-sm",
          isArabic ? "font-arabic" : "",
          isLight
            ? "border-slate-300 text-slate-600"
            : "border-slate-800/80 text-slate-400",
        ].join(" ")}
      >
        {isArabic
          ? "© 2026 KemeTrip. بُنِيَت في الإسكندرية."
          : "© 2026 KemeTrip. Built in Alexandria."}
      </div>
    </footer>
  );
}
