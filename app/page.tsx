import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CorFutures | Futures Trading Community & Education",
  description: "The modern home for serious futures traders. Free Trader Hub • Orbit Membership • The Edge Program.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${exo2.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0a0a12] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
