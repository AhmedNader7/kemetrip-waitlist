import Image from "next/image";
import type { Language, ThemeMode } from "@/components/landing-page";

type HeroSectionProps = {
  language: Language;
  theme: ThemeMode;
};

export function HeroSection({ language, theme }: HeroSectionProps) {
  const isArabic = language === "ar";
  const isLight = theme === "light";

  const headline = isArabic
    ? "عصر جروبات الواتساب العشوائية انتهى."
    : "The era of chaotic WhatsApp travel groups is over.";

  const subheadline = isArabic
    ? "الجيل الجديد للسفر المحلي في مصر. بدون رسوم مخفية، وحجز فوري عبر InstaPay وVodafone Cash."
    : "The new generation of local travel in Egypt. No hidden fees, instant booking with InstaPay & Vodafone Cash.";

  const travelerCta = isArabic
    ? "المسافرون: انضم لقائمة الانتظار"
    : "Travelers: Join Waitlist";

  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-16 sm:px-6 md:pt-14 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute top-32 -left-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <Image
          src="/KEMET TRIP-logo.jpg"
          alt="KemeTrip Logo"
          width={196}
          height={196}
          priority
          className={[
            "h-20 w-auto rounded-2xl border object-cover shadow-xl sm:h-24",
            isLight
              ? "border-slate-200 shadow-slate-300/30"
              : "border-slate-700/70 shadow-black/40",
          ].join(" ")}
        />

        <h1
          dir={isArabic ? "rtl" : "ltr"}
          lang={isArabic ? "ar" : "en"}
          className={[
            "mt-8 max-w-3xl text-balance text-3xl leading-tight font-bold sm:text-4xl md:text-5xl",
            isArabic ? "font-arabic" : "",
            isLight ? "text-slate-900" : "text-white",
          ].join(" ")}
        >
          {headline}
        </h1>

        <p
          dir={isArabic ? "rtl" : "ltr"}
          className={[
            "mt-6 max-w-2xl text-pretty text-sm leading-7 sm:text-base",
            isArabic ? "font-arabic" : "",
            isLight ? "text-slate-700" : "text-slate-300",
          ].join(" ")}
        >
          {subheadline}
        </p>

        <div className="mt-9 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://forms.gle/UbjvDsXapjRrx1ax8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-yellow-500 px-6 py-3 text-center text-base font-bold text-slate-900 transition-colors duration-300 hover:bg-yellow-400 sm:w-auto"
          >
            {travelerCta}
          </a>
        </div>
      </div>
    </section>
  );
}
