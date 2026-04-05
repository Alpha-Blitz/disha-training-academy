import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Disha Training Academy | Co-operative Training & Certification",
  description:
    "Disha Training Academy provides specialised training and certification programs for co-operative societies in Karnataka — board members, secretaries, staff, and auditors. A unit of Bhoomika Consultancy Services.",
  keywords:
    "co-operative training, Karnataka co-operative, society governance training, audit training, co-operative certification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
