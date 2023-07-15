import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";
import TaskListView from "@/app/tasks/components/task-list-view";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Accounts`,
};

export default function TasksPage() {
  return (
    <>
      <div className="w-full bg-white mt-5">
        <div>Tasks Page</div>
        <TaskListView />
      </div>
    </>
  );
}
