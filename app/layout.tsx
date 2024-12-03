import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { Header } from "./header";
import { Toaster } from "../components/ui/toaster";
import { Footer } from "./footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hồ sơ cố vấn học tập",
  description: "Hồ sơ cố vấn học tập khoa Kỹ thuật và Công nghệ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}