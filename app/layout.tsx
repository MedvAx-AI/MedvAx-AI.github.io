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
  metadataBase: new URL("https://medvax-ai.github.io"),
  title: "Aleksandr Medvedev — LLM Research / AI Engineering",
  description:
    "Applied Artificial Intelligence student researching LLM evaluation and building auditable AI services, RAG systems, and reproducible ML pipelines.",
  openGraph: {
    title: "Aleksandr Medvedev — LLM Research / AI Engineering",
    description:
      "Applied AI student working on LLM evaluation, RAG, and reproducible ML systems.",
    type: "website",
    url: "https://medvax-ai.github.io",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleksandr Medvedev — LLM Research / AI Engineering",
    description:
      "Applied AI student working on LLM evaluation, RAG, and reproducible ML systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
