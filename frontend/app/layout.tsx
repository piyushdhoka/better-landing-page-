import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

export const metadata: Metadata = {
  title: "Better Logs — Identify & Fix AI Agent Issues, Fast",
  description:
    "Better Logs is the modern observability platform for AI agents. Trace, debug, and optimize your AI workflows with precision logging, real-time insights, and actionable diagnostics.",
  keywords: [
    "AI logs",
    "AI agent debugging",
    "observability",
    "AI monitoring",
    "LLM tracing",
    "agent logs",
  ],
  openGraph: {
    title: "Better Logs — Identify & Fix AI Agent Issues, Fast",
    description:
      "The modern observability platform for AI agents. Trace, debug, and optimize your AI workflows.",
    type: "website",
    locale: "en_US",
    siteName: "Better Logs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Logs — AI Agent Observability",
    description:
      "Trace, debug, and optimize your AI workflows with precision logging and actionable diagnostics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
