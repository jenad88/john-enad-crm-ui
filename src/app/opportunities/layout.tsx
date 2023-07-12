"use client";

import SectionHeader, { SectionDef } from "../components/section-header";

export default function OpportunitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const section: SectionDef = { moduleName: "CRM", name: "Opportunities" };
  return (
    <>
      <section>
        <SectionHeader section={section} />
        {children}
      </section>
    </>
  );
}
