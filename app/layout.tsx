import type { Metadata } from "next";
import localFont from "next/font/local";
import {GeistSans} from "geist/font/sans"
import {GeistMono} from "geist/font/mono"
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import cn from "classnames";

// Charger les polices au niveau du module
const anekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mukhtar Masooma . Software Engineer",
  description: "Software engineer specialized in JAVA, C++/Qt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className = "h-full">
      <body
        className={cn(anekTelugu.variable, geistSans.variable, geistMono.variable, "font-sans h-full bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
