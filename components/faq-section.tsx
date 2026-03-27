import type { Language, ThemeMode } from "@/components/landing-page";

type FaqSectionProps = {
  language: Language;
  theme: ThemeMode;
};

const faqsEn = [
  {
    question: "What is KemeTrip?",
    answer:
      "A platform connecting you directly to verified travel agencies. Zero ghosting, 100% transparent pricing.",
  },
  {
    question: "How do I pay?",
    answer: "InstaPay, Vodafone Cash, or standard Visa/Mastercard.",
  },
  {
    question: "Why join the waitlist?",
    answer:
      "Waitlist members get priority access to book the best trips during high seasons (like Eid) before they sell out.",
  },
  {
    question: "Are the travel agencies on KemeTrip verified?",
    answer:
      "Yes. We do not allow random Facebook groups or anonymous organizers. Every agency on our platform is legally verified and reviewed so your trip and money are 100% safe.",
  },
  {
    question: "Does booking through KemeTrip cost more?",
    answer:
      "No. You pay the exact same price as booking directly with the agency. Zero hidden fees, just a much safer and faster way to pay.",
  },
];

const faqsAr = [
  {
    question: "ما هي KemeTrip؟",
    answer:
      "منصة بتوصلك مباشرة بوكالات سفر موثوقة. بدون اختفاء مفاجئ، وبأسعار واضحة 100%.",
  },
  {
    question: "كيف أدفع؟",
    answer: "InstaPay أو Vodafone Cash أو بطاقات Visa/Mastercard.",
  },
  {
    question: "ليه أنضم لقائمة الانتظار؟",
    answer:
      "أعضاء قائمة الانتظار يحصلون على أولوية لحجز أفضل الرحلات في المواسم العالية مثل العيد قبل نفادها.",
  },
  {
    question: "هل شركات السفر على KemeTrip مضمونة؟",
    answer:
      "أيوه، إحنا بنمنع الجروبات العشوائية والمنظمين المجهولين. كل شركة على المنصة متراجعة قانونياً ومضمونة عشان رحلتك وفلوسك يكونوا في أمان 100%.",
  },
  {
    question: "هل الحجز عن طريق KemeTrip أغلى؟",
    answer:
      "لأ، بتدفع نفس السعر كأنك حجزت مباشرة مع الشركة. مفيش أي مصاريف مخفية، بس بطريقة أسرع وأأمن بكتير.",
  },
];

export function FaqSection({ language, theme }: FaqSectionProps) {
  const isArabic = language === "ar";
  const isLight = theme === "light";
  const faqs = isArabic ? faqsAr : faqsEn;

  return (
    <section className="px-4 py-14 sm:px-6 md:py-20">
      <div
        className={[
          "mx-auto w-full max-w-4xl rounded-3xl border p-6 shadow-xl backdrop-blur sm:p-8 md:p-10",
          isLight
            ? "border-slate-200 bg-white/85 shadow-slate-300/30"
            : "border-slate-700/50 bg-slate-900/60 shadow-black/25",
        ].join(" ")}
      >
        <h2
          className={[
            "text-2xl font-bold tracking-tight sm:text-3xl",
            isArabic ? "font-arabic" : "",
            isLight ? "text-slate-900" : "text-white",
          ].join(" ")}
        >
          {isArabic ? "❓ الأسئلة الشائعة" : "❓ FAQ"}
        </h2>

        <div
          className={[
            "mt-7 divide-y rounded-2xl border",
            isLight
              ? "divide-slate-200 border-slate-200 bg-slate-50"
              : "divide-slate-700/70 border-slate-700/60 bg-slate-950/70",
          ].join(" ")}
        >
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5" name="faq">
              <summary
                className={[
                  "relative cursor-pointer list-none pr-8 text-sm font-semibold transition-colors marker:content-none group-open:text-[#FFB703] sm:text-base",
                  isArabic ? "font-arabic" : "",
                  isLight ? "text-slate-800" : "text-slate-100",
                ].join(" ")}
              >
                {faq.question}
                <span
                  className={[
                    "absolute right-5 transition-transform duration-300 group-open:rotate-45 group-open:text-[#FFB703]",
                    isLight ? "text-slate-500" : "text-slate-400",
                  ].join(" ")}
                >
                  +
                </span>
              </summary>
              <p
                className={[
                  "mt-3 text-sm leading-7 sm:text-base",
                  isArabic ? "font-arabic" : "",
                  isLight ? "text-slate-700" : "text-slate-300",
                ].join(" ")}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
