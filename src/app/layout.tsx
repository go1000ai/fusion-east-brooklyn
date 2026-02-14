import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fusion East | Caribbean & Soul Food | Brooklyn, NY",
  description:
    "The Difference You Can Taste. A fusion of Soul Food & Caribbean cuisine in East New York, Brooklyn. Dine-in, catering, food truck & live entertainment.",
  keywords: [
    "Fusion East",
    "Caribbean restaurant Brooklyn",
    "soul food Brooklyn",
    "East New York restaurant",
    "jerk chicken Brooklyn",
    "oxtail Brooklyn",
    "Caribbean catering NYC",
    "live music restaurant Brooklyn",
    "karaoke Brooklyn",
  ],
  openGraph: {
    title: "Fusion East | Caribbean & Soul Food | Brooklyn, NY",
    description:
      "The Difference You Can Taste. A fusion of Soul Food & Caribbean cuisine — modernist dining in Brooklyn.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans antialiased noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
