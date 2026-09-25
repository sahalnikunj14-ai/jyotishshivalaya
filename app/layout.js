import "./globals.css";
export const metadata={title:"Jyotish Shivalaya | Astrology, Vastu, Numerology & Palmistry",description:"Online consultations with Astrologer Pt. Nikunj Kr Sahal for Astrology, Vastu, Numerology and Palmistry.",keywords:["Jyotish Shivalaya","Pt. Nikunj Kr Sahal","Astrology","Vastu","Numerology","Palmistry","online astrology consultation"],openGraph:{title:"Jyotish Shivalaya",description:"Astrology, Vastu, Numerology & Palmistry consultations with Pt. Nikunj Kr Sahal",type:"website"}};
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <meta name="monetag" content="c4b90cfe110bbc7a696149a5775eac8e" />
        <meta
          name="profiton-domain-verification"
          content="dd27800334e7fc7c7f7d8d7c22c8be7c3a256698a6f780b522110be06efb29ad"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
