import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";
import LeadListView from "@/app/leads/components/lead-list-view";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Leads`,
};

export default function LeadsPage() {
  return (
    <>
      <div className="w-full bg-white mt-5">
        <div>Leads Page</div>
        <LeadListView />
      </div>
    </>
  );
}
