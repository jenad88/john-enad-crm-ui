import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type SubModuleMenuSlideOverProps = {
  sideOver: string | null;
  setSideOver: (value: string | null) => void;
};

const SubModuleMenuSlideOver: React.FunctionComponent<
  SubModuleMenuSlideOverProps
> = (props) => {
  const { sideOver, setSideOver } = props;
  const close = (value: boolean) => {
    setSideOver(null);
  };

  return (
    <Transition.Root show={sideOver != null} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={close}>
        <div className="fixed inset-0" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden w-full bg-red-5">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex w-[30%] left-0 overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-20 left-32"
                leave="transform transition ease-in duration-500 sm:duration-700"
                leaveFrom="translate-x-32"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-gray-900 text-gray-200 py-6 shadow-xl w-[90%]">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-200">
                          {sideOver}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => close(true)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      content here
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SubModuleMenuSlideOver;
