"use client";

import SubModuleHeader, { SubModuleDef } from "../components/sub-module-header";

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subModule: SubModuleDef = { moduleName: "CRM", name: "Calendar" };
  return (
    <>
      <section>
        <SubModuleHeader subModule={subModule} />
        {children}
      </section>
    </>
  );
}
