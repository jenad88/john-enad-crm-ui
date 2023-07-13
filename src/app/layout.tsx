"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalNav from "@/app/components/global-nav";
import SubModuleHeaderBar from "./components/sub-module-header-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Enad CRM",
  description: "John Enad CRM Portfolio Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalNav />

        <div className="lg:pl-72 bg-gray-100">
          <main className="pt-0 pb-10">
            <SubModuleHeaderBar />
            <div className="px-0">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
