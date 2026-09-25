```javascript
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Jyotish Shivalaya | Astrology, Vastu, Numerology & Palmistry",
  description:
    "Online consultations with Astrologer Pt. Nikunj Kr Sahal for Astrology, Vastu, Numerology and Palmistry.",
  keywords: [
    "Jyotish Shivalaya",
    "Pt. Nikunj Kr Sahal",
    "Astrology",
    "Vastu",
    "Numerology",
    "Palmistry",
    "online astrology consultation",
  ],
  openGraph: {
    title: "Jyotish Shivalaya",
    description:
      "Astrology, Vastu, Numerology & Palmistry consultations with Pt. Nikunj Kr Sahal",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Monetag Verification */}
        <meta
          name="monetag"
          content="c4b90cfe110bbc7a696149a5775eac8e"
        />

        {/* ProfitOn Verification */}
        <meta
          name="profiton-domain-verification"
          content="dd27800334e7fc7c7f7d8d7c22c8be7c3a256698a6f780b522110be06efb29ad"
        />

        {/* Monetag Ad */}
        <Script
          src="https://quge5.com/88/tag.min.js"
          data-zone="286158"
          strategy="afterInteractive"
          data-cfasync="false"
        />

        {/* ProfitOn Ad 154615 */}
        <Script
          src="https://gz.argufycopecks.com/sbzb4xodPjBc3/154615"
          strategy="afterInteractive"
          data-cfasync="false"
        />

        {/* ProfitOn Ad 154613 */}
        <Script
          src="https://qe.biddersaromal.com/raAWUn56Gy20hTg/154613"
          strategy="afterInteractive"
          data-cfasync="false"
        />

      </head>

      <body>{children}</body>
    </html>
  );
}
```
