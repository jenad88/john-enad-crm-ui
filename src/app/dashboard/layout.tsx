"use client";

import SectionHeader, { SectionDef } from "../components/section-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const section: SectionDef = { moduleName: "CRM", name: "Dashboard" };
  return (
    <>
      <section>
        <SectionHeader section={section} />
        {children}
      </section>
    </>
  );
}
