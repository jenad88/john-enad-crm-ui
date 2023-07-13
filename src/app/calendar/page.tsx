import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Calendar`,
};

export default function CalendarPage() {
  return <div>Calendar Page</div>;
}
