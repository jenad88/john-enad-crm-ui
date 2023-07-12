import { Menu } from "@headlessui/react";
import Link from "next/link";

export type MenuItemDef = {
    name: string;
    href?: string;
}

const MenuItem = (props: any) => {
    const { item } = props;

    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    href={item.href}
                    className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                    } text-gray-800 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}
                    onClick={close}
                >
                    {item.name}
                </Link>
            )}
        </Menu.Item>
    )
}

export default MenuItem