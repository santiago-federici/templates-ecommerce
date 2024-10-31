import type { Metadata } from "next";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { Onest } from "next/font/google";

import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
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
        className={`${onest.className} relative flex flex-col bg-primary antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
