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
      <section className="m-3">
        <SubModuleHeader subModule={subModule} />
        <div className="px-4">{children}</div>
      </section>
    </>
  );
}
