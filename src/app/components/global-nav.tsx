'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function GlobalNav() {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);

    return (
        <>
            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                    <Link
                        href="/"
                        className="group flex w-full items-center gap-x-2.5"
                        onClick={close}
                    >
                        <h2>LOGO</h2>
                        </Link>
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <a 
                                    href="/accounts" 
                                    className="text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                >
                                    Accounts
                                </a>
                                <a 
                                    href="/contacts" 
                                    className="text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                >
                                    Contacts
                                </a>
                                <a 
                                    href="/leads" 
                                    className="text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                >
                                    Leads
                                </a>
                                <a 
                                    href="/opportunities" 
                                    className="text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                >
                                    Opportunities
                                </a>
                               <a 
                                    href="/tasks" 
                                    className="text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                >
                                    Tasks
                                </a>
                                <a 
                                    href="/calendar" 
                                    className="text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                >
                                    Calendar
                                </a>
                                <a 
                                    href="/dashboard" 
                                    className="text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                >
                                    Dashboard
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}