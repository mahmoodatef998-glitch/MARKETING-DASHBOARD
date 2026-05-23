import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "مطعم العناني للمشويات | ALANANI Restaurant & Grill — عجمان",
  description:
    "مطعم العناني للمشويات في عجمان الراشدية — تجربة مشويات عربية فاخرة. قائمة طعام رقمية. ALANANI Restaurant Ajman — Premium Arabic Grill.",
  keywords: [
    "مطعم العناني",
    "ALANANI restaurant",
    "مشويات عجمان",
    "مطعم عجمان",
    "Arabic grill Ajman",
    "مشويات فاخرة",
    "شاورما عجمان",
    "كباب عجمان",
    "مندي عجمان",
    "الراشدية عجمان",
  ],
  authors: [{ name: "مطعم العناني للمشويات" }],
  openGraph: {
    type: "website",
    locale: "ar_AE",
    alternateLocale: "en_AE",
    title: "مطعم العناني للمشويات | ALANANI Grill — عجمان",
    description: "مطعم مشويات فاخر في عجمان — قائمة طعام رقمية",
    siteName: "مطعم العناني للمشويات",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AL ANANI Restaurant & Grill",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AL ANANI Restaurant & Grill",
    description: "Premium Arabic grill restaurant — digital menu",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0C14",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy min-h-screen antialiased">{children}</body>
    </html>
  );
}
