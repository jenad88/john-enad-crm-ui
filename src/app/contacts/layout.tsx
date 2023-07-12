"use client";

import SubModuleHeader, { SubModuleDef } from "../components/sub-module-header";

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subModule: SubModuleDef = { moduleName: "CRM", name: "Contacts" };
  return (
    <>
      <section>
        <SubModuleHeader subModule={subModule} />
        {children}
      </section>
    </>
  );
}
