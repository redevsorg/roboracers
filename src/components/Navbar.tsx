"use client";
import Image from "next/image";
import Link from "next/link";

interface navProps {
    activePage: string;
}
export default function Navbar({activePage}: navProps) {
    const classProp = (page: string) => {
        if (page==activePage) 
            return "text-white";
        else
            return "hover:text-white";
    }

  return (
    <div className="w-full justify-center lg:flex md:flex items-center  justify-between">
        <div className="flex items-center">
            <Image alt='logo' src='/roboracers.png' width={100} height={100}/>
            <div className='flex-col'>
                <p className='text-2xl font-semibold'>RoboRacers</p>
                <p>#16481</p>
            </div>
        </div>
        <div className="border-2 md:fixed md:right-10 z-10 mx-5 md:text-lg bg-black justify-center text-neutral-700 font-mono border-neutral-800 rounded-xl flex gap-4 px-3 py-2">
            <Link href='/' className={classProp("home")}>home</Link>
            <div className='group h-1 w-[54px]'>
                <Link href='/about' id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className={classProp("about")}>about</Link>
                <div id="dropdownHover" className="z-10 invisible group-hover:visible  rounded-xl shadow w-[120px] border-2 border-neutral-800 bg-black">
                    <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    <li>
                        <a href="/team" className="block px-4 rounded-lg py-2 text-neutral-700 hover:bg-neutral-800 hover:text-white">the team</a>
                    </li>
                    </ul>
                </div>
            </div>
            <Link href='/awards' className={classProp("awards")}>awards</Link>
            <Link href='/contact' className={classProp("contact")}>contact</Link>
        </div>
    </div>
  );
}
