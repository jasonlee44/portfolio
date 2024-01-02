import React from "react"

export default function Navbar() {
    return (
        <>
        <nav class="bg-[#1f1f1f] fixed w-full z-20 top-0 start-0 border-none shadow-[0_4px_4px_rgba(146,161,176,0.15)]">
            <div class="max-w-screen-xl flex flex-wrap h-[64px] items-center justify-between mx-auto p-4">
                {/* <div class="flex ml-auto md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div> */}
                <div class="items-center justify-between ml-auto w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-semibold rounded-lg md:space-x-16 md:flex-row md:mt-0 md:border-0">
                    <li>
                        <a href="" class="block py-2 text-white transition duration-150 border-b-4 border-transparent hover:border-blue-700" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="" class="block py-2 text-white transition duration-150 border-b-4 border-transparent hover:border-blue-700">About</a>
                    </li>
                    <li>
                        <a href="" class="block py-2 text-white transition duration-150 border-b-4 border-transparent hover:border-blue-700">Projects</a>
                    </li>
                    <li>
                        <a href="" class="block py-2 text-white transition duration-150 border-b-4 border-transparent hover:border-blue-700">Resume</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
