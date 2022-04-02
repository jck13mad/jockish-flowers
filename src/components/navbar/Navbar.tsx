import * as React from "react";

import flower from '../../pics/flower.png'

function Navbar(){
    return(
         <nav className="px-2 sm:px-4 py-2.5 rounded backdrop-blur bg-[#0c331f]/[.7] w-screen h-36">
            <div className="container flex flex-wrap justify-between items-center mx-auto">

                {/*logo*/}
                <div className="flex flex-col w-auto h-auto top-10 relative">
                    {/** Jockish Flowers */}
                    <a href="/"><span className="self-center whitespace-nowrap dark:text-white text-white font-thin text-4xl md:text-[3.75vw]">Jockish Flowers</span></a>
                    {/** Lotus */}
                    <a href="/" className="w-10 h-7 self-center"><img className="-rotate-45" alt="flower" src={flower} /></a>
                </div>

                {/*mobile menu button*/}
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center 3xs:backdrop-blur-sm sm:blur-none p-2 ml-3 text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>

                {/*nav links and expanded mobile menu*/}
                <div className="hidden w-fit rounded-lg place-items-end md:block md:w-fit relative 3xs:top[8.6vh] sm:top-[5vh]" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-[6vw] md:mt-0 md:text-base md:font-medium sm/md:bg-white/0 3xs:bg-[#0c331f]/[.7] 3xs:backdrop-blur-sm sm/md:backdrop-blur-none">

                        {/*About Us*/}
                        <li className="2xs:pl-64 xs:ml-20 sm:pl-96 sm:ml-32 md:pl-0 md:ml-0  group flex flex-col relative">
                            <a href="/about" className="text-[1.25vw] 3xs:text-base block py-2 pr-4 pl-3 text-white  hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-medium self-center">About Us</a>
                            <a href="/about" className="opacity-0 w-7 h-5 self-center md:group-hover:opacity-100 transition ease-in-out duration-700"><img className="-rotate-45" alt="flower" src={flower} /></a>
                        </li>

                        {/*Services*/}
                        <li className="2xs:pl-64 xs:ml-20 sm:pl-96 sm:ml-32 md:pl-0 md:ml-0  group flex flex-col relative">
                            <a href="/services" className="text-[1.25vw] 3xs:text-base block py-2 pr-4 pl-3 text-white hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-medium self-center">Services</a>
                            <a href="/services" className="opacity-0 w-7 h-5 self-center md:group-hover:opacity-100 transition ease-in-out duration-700"><img className="-rotate-45" alt="flower" src={flower} /></a>
                        </li>

                        {/*Contact Us*/}
                        <li className="2xs:pl-64 xs:ml-20 sm:pl-96 sm:ml-32 md:pl-0 md:ml-0  group flex flex-col relative">
                            <a href="/#contact" className="text-[1.25vw] 3xs:text-base block py-2 pr-4 pl-3 text-white hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-medium self-center">Contact Us</a>
                            <a href="/#contact" className="opacity-0 w-7 h-5 self-center md:group-hover:opacity-100 transition ease-in-out duration-700"><img className="-rotate-45" alt="flower" src={flower} /></a>
                        </li>

                        {/*image for light/dark*/}
                        {/*<li className="invisible md:visible">
                            <a href='#'><img className="w-8 h-8" alt="light mode" src={sun} /></a>
                        </li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar