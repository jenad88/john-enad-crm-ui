import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";
import LeadView from "@/app/leads/components/lead-view";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Leads`,
};

export default function LeadsPage() {
  return (
    <>
      <div>Leads Page</div>
      <LeadView />
    </>
  );
}
