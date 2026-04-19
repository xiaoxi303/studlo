import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "STUDIO",
  description: "A high-end scroll-driven storytelling experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-[#050505] text-white antialiased selection:bg-white selection:text-black`}>
        <SmoothScroll>
          <Loader />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
