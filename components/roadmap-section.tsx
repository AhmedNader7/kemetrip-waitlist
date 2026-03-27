import { CheckCircle2, Hourglass, Lock, Rocket } from "lucide-react";
import type { Language, ThemeMode } from "@/components/landing-page";

type RoadmapSectionProps = {
  language: Language;
  theme: ThemeMode;
};

const roadmapItemsEn = [
  {
    title: "Problem Validation & UI Design",
    status: "done" as const,
    icon: CheckCircle2,
  },
  {
    title: "Legal & Banking Setup (We are here!)",
    status: "inProgress" as const,
    icon: Hourglass,
  },
  {
    title: "Onboarding Travel Agencies in Dahab & Siwa",
    status: "upcoming" as const,
    icon: Lock,
  },
  {
    title: "Official Beta Launch & Opening Bookings",
    status: "upcoming" as const,
    icon: Rocket,
  },
];

const roadmapItemsAr = [
  {
    title: "التحقق من المشكلة وتصميم الواجهة",
    status: "done" as const,
    icon: CheckCircle2,
  },
  {
    title: "التجهيزات القانونية والبنكية (نحن هنا الآن!)",
    status: "inProgress" as const,
    icon: Hourglass,
  },
  {
    title: "ضم وكالات سفر في دهب وسيوة",
    status: "upcoming" as const,
    icon: Lock,
  },
  {
    title: "الإطلاق التجريبي الرسمي وفتح الحجوزات",
    status: "upcoming" as const,
    icon: Rocket,
  },
];

export function RoadmapSection({ language, theme }: RoadmapSectionProps) {
  const isArabic = language === "ar";
  const isLight = theme === "light";
  const roadmapItems = isArabic ? roadmapItemsAr : roadmapItemsEn;

  return (
    <section className="px-4 py-14 sm:px-6 md:py-20">
      <div
        className={[
          "mx-auto w-full max-w-4xl rounded-3xl border p-6 shadow-2xl backdrop-blur sm:p-8 md:p-10",
          isLight
            ? "border-slate-200 bg-white/85 shadow-slate-300/30"
            : "border-slate-700/50 bg-slate-900/60 shadow-black/30",
        ].join(" ")}
      >
        <h2
          className={[
            "text-2xl font-bold tracking-tight sm:text-3xl",
            isArabic ? "font-arabic" : "",
            isLight ? "text-slate-900" : "text-white",
          ].join(" ")}
        >
          {isArabic ? "📍 أين نحن الآن؟" : "📍 Where are we right now?"}
        </h2>

        <ol className="mt-8 space-y-6">
          {roadmapItems.map((item, index) => {
            const Icon = item.icon;
            const isDone = item.status === "done";
            const isInProgress = item.status === "inProgress";

            return (
              <li key={item.title} className="relative flex gap-4">
                {index < roadmapItems.length - 1 ? (
                  <span
                    className={[
                      "absolute top-8 left-[15px] h-[calc(100%+1rem)] w-px",
                      isLight ? "bg-slate-300" : "bg-slate-700",
                    ].join(" ")}
                  />
                ) : null}

                <span
                  className={[
                    "relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
                    isDone
                      ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-400"
                      : isInProgress
                        ? "border-amber-400/50 bg-amber-500/15 text-[#FFB703]"
                        : "border-slate-600 bg-slate-800 text-slate-400",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>

                <p
                  className={[
                    "pt-1 text-sm leading-6 sm:text-base",
                    isArabic ? "font-arabic" : "",
                    isDone
                      ? isLight
                        ? "text-slate-500 line-through"
                        : "text-slate-400 line-through"
                      : isInProgress
                        ? "font-semibold text-[#FFB703]"
                        : isLight
                          ? "text-slate-600"
                          : "text-slate-500",
                  ].join(" ")}
                >
                  {item.title}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
