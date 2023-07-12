"use client";

import SectionHeader, { SectionDef } from "../components/section-header";

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const section: SectionDef = { moduleName: "CRM", name: "Contacts" };
  return (
    <>
      <section>
        <SectionHeader section={section} />
        {children}
      </section>
    </>
  );
}
