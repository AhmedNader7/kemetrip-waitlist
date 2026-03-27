import type { Metadata } from "next";
import { Cairo, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KemeTrip",
  description: "KemeTrip landing page",
  icons: {
    icon: [{ url: "/kemetrip-logo.jpg", type: "image/jpeg" }],
    shortcut: "/kemetrip-logo.jpg",
    apple: "/kemetrip-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
