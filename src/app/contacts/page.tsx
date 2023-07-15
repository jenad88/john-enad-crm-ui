import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";
import ContactListView from "@/app/contacts/components/contact-list-view";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Contacts`,
};

export default function ContactsPage() {
  return (
    <>
      <div className="w-full bg-white mt-5">
        <div>Contacts Page</div>
        <ContactListView />
      </div>
    </>
  );
}
