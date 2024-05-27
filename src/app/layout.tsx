import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "macOS Compliant Icon Generator",
  description: "macOS Compliant Icon Generator 是一个用于生成符合 Human Interface Guidelines (HIG)、App Icons and Images 和 Apple Design Resources 的图标生成器。该工具将根据规范将填满尺寸的图像转换为 13/16 的图片。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
