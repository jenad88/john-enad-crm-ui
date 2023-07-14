"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { useState } from "react";
import ApplicationShell from "./components/app-shell";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ApplicationShell>
          <main>
            <div>{children}</div>
          </main>
        </ApplicationShell>
      </body>
    </html>
  );
}
