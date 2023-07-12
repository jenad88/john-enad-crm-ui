import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalNav from '@/app/components/global-nav'

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

        <div className="lg:pl-72">
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
                {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
