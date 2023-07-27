import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import { Providers } from "./providers";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: 'ОДО "Атмосфера"',
  description: "TODO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={robotoSlab.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
