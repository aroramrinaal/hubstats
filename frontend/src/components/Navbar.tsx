import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="border-gray-200 bg-hub-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/hub.svg" alt="MyLogo" width={30} height={30} />
                    <span className="font-ubuntu self-center text-3xl font-semibold whitespace-nowrap text-filthy">HubStats</span>
                </Link>
                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <Link href="/"
                                className="font-andika text-xl block py-2 px-3 md:p-0 text-filthy rounded md:hover:bg-transparent md:border-0 hover:underline underline-offset-4">Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about"
                                className="font-andika block py-2 px-3 md:p-0 text-xl text-filthy rounded md:hover:bg-transparent md:border-0 hover:underline underline-offset-4">About
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/aroramrinaal/HubStats" className="font-andika block py-2 px-3 md:p-0 text-xl text-filthy rounded md:hover:bg-transparent md:border-0 hover:underline underline-offset-4">
                                Github
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;