import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export type MenuItemDef = {
  name: string;
  href: string;
};

export type MenuDef = {
  name: string;
  href: string;
  menuItems: MenuItemDef[];
};

type SubModuleMenuItemProps = {
  menu: MenuDef;
};

const SubModuleMenuItem: React.FunctionComponent<SubModuleMenuItemProps> = (
  props,
) => {
  const { menu } = props;

  return (
    <Menu as="div" className="relative text-left">
      <div>
        <Menu.Button
          className="inline-flex w-full rounded-md px-2 py-2 text-sm group gap-x-1 leading-6 
                font-medium font-semi-bold text-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white 
                focus-visible:ring-opacity-100 hover:text-white hover:bg-indigo-700"
        >
          {menu.name}
          <ChevronDownIcon
            className="ml-0 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100 mt-1"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="px-1 py-1">
            {menu.menuItems.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } text-gray-800 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SubModuleMenuItem;
