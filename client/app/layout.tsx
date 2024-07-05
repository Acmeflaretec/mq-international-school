import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MQ International",
  description: "MQ International Schooling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      <NextThemesProvider attribute="class" forcedTheme="light">
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </NextThemesProvider>
      </body>
    </html>
  );
}
