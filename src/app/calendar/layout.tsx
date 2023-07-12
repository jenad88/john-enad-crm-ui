"use client";

import SectionHeader, { SectionDef } from "../components/section-header";

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const section: SectionDef = { moduleName: "CRM", name: "Calendar" };
  return (
    <>
      <section>
        <SectionHeader section={section} />
        {children}
      </section>
    </>
  );
}
