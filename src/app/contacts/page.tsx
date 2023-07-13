import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Contacts`,
};

export default function ContactsPage() {
  return <div>Contacts Page</div>;
}
