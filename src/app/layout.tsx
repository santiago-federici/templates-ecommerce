import type { Metadata } from "next";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import localFont from "next/font/local";

import "./globals.css";

const onest = localFont({
  src: "../../public/fonts/onest/Onest-VariableFont_wght.woff2",
  display: "swap",
  variable: "--font-onest",
});

const thunder = localFont({
  src: "../../public/fonts/thunder/Thunder-BlackLC.woff2",
  display: "swap",
  variable: "--font-thunder",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} ${thunder.variable} space-y-20 antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
