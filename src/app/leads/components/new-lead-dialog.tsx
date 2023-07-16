import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  LeadsContext,
  LeadsContextProps,
} from "@/app/leads/components/lead-context";
import NewLeadForm from "@/app/leads/components/new-lead-form";

export default function NewLeadDialog(props: any) {
  const {
    saveLead,
    showNewLeadModal: [showNewLead, setShowNewLead],
  } = React.useContext(LeadsContext) as LeadsContextProps;

  return (
    <Transition.Root show={showNewLead} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setShowNewLead(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-none">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left 
                shadow-xl transition-all sm:my-8 sm:w-[50%] sm:p-6 md:h-[500px] md:max-h-[500px] lg:h-[800px] lg:max-h-[800px] overflow-y-auto"
              >
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      New Lead
                    </Dialog.Title>
                    <div className="mt-2">
                      <NewLeadForm />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
