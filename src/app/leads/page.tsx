import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Leads`,
};

export default function LeadsPage() {
  return <div>Leads Page</div>;
}
