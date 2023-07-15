import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";
import OpportunityListView from "@/app/opportunities/components/opportunity-list-view";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Opportunities`,
};

export default function OpportunitiesPage() {
  return (
    <>
      <div className="w-full bg-white mt-5">
        <div>Opportunities Page</div>
        <OpportunityListView />
      </div>
    </>
  );
}
