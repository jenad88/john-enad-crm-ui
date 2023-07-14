import { classNames } from "../_util/utils";
import { MenuDef } from "./sub-module-menu-item";

type DesktopNavProps = {
  items: MenuDef[];
  sideBarOpen: boolean;
  setSideBarOpen: (open: boolean) => void;
  sideOver: string | null;
  setSideOver: (value: string | null) => void;
};

const DesktopNav: React.FunctionComponent<DesktopNavProps> = (props) => {
  const { items, sideBarOpen, setSideBarOpen, sideOver, setSideOver } = props;

  const handleButtonClick = (name: string) => {
    if (sideOver === name) {
      setSideBarOpen(false);
      setSideOver(null);
    } else {
      setSideOver(name);
    }
  };

  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
        <div className="flex h-16 shrink-0 items-center justify-center text-white">
          LOGO
        </div>
        <nav className="mt-8">
          <ul role="list" className="flex flex-col items-center space-y-1">
            {items.map((item) => (
              <li key={item.name}>
                <button
                  type="button"
                  className={classNames(
                    item.current
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                    "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold",
                  )}
                  onClick={() => handleButtonClick(item.name)}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* <a
                            href={item.href}
                            className={classNames(
                                item.current
                                ? "bg-gray-800 text-white"
                                : "text-gray-400 hover:text-white hover:bg-gray-800",
                                "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold",
                            )}
                            >
                            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            <span className="sr-only">{item.name}</span>
                            </a> */}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DesktopNav;