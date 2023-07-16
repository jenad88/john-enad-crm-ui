"use client";

import SubModuleHeader, {
  SubModuleDef,
} from "@/app/components/sub-module-header";
import ContactsProvider from "@/app/contacts/components/contact-context";
import NewContactDialog from "@/app/contacts/components/new-contact-dialog";

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subModule: SubModuleDef = { moduleName: "CRM", name: "Contacts" };
  return (
    <>
      <ContactsProvider>
        <section className="m-3">
          <SubModuleHeader subModule={subModule} />
          <div className="px-4">{children}</div>
          <NewContactDialog />
        </section>
      </ContactsProvider>
    </>
  );
}
