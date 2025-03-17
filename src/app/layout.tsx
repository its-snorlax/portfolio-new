import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "A beautiful portfolio showcasing my work and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 via-violet-50 to-fuchsia-50 dark:from-blue-950 dark:via-violet-950 dark:to-fuchsia-950 text-gray-900 dark:text-gray-100 min-h-screen`}>
        <Nav />
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
