import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TheFooter } from "@/components/TheFooter";
import { TheHeader } from "@/components/TheHeader";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader />
        <main className="container">{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
