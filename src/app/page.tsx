"use client";
import Image from "next/image";
import Spline from '@splinetool/react-spline';
import Navbar from "@/components/Navbar";
import { FiYoutube } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col pt-5 mb-20">
      <div className="px-5 md:px-10 ">
      <Navbar activePage="home"></Navbar>
      <div className="justify-between w-full px-5 md:px-20">
        <div className=" lg:flex">
          <div className=" w-full">
            <h1 className="text-5xl md:text-7xl font-semibold pt-10 md:pt-20 z-5">RoboRacers</h1>
            <div className="flex items-center gap-5 pt-5">
              <Image src='/ftc.svg' alt='ftc' width={70} height={70}></Image>
              <p className="text-4xl font-light">#16481</p>
            </div>
            <p className='italic text-2xl pt-5 font-light'>It&apos;s about the race, not the finish line.</p>
          </div>
          <Image src='/robot.png' width={900} height={800} alt="robot" className="hover:scale-105 pt-3 lg:pt-10 transform transition duration-1000"></Image>
        </div>
      </div>
      </div>
      <div>
        <div className="bg-neutral-800 w-full h-[3px] mt-10"></div>
        <div className="w-[90px] md:ml-20 ml-10">
          <div className="bg-neutral-800 text-center font-mono text-white rounded-b-xl text-xl pb-1 px-3 flex-grow-0">about</div>
        </div>
        <div className="pt-5 lg:grid grid-cols-2 px-20">
          <div>
            <p className="lg:text-lg">
FTC Team 16481 RoboRacers is an  FTC team in Dublin, California.  Our mission is to provide kids with a free, fun, and accessible way to get into learning about robotics and technology.  We strive to promote STEM education to K-12 students across the nation and around the world.  </p>
<p className="lg:text-lg py-10">
Every year, we build and program a custom robot to tackle unique challenges in the FIRST TECH CHALLENGE game.  Our team applies scientific thinking, as well as knowledge in STEM. Our goal to continually improve and creatively solve problems give us the opportunity to always keep learning</p>
            <Link href='/about' className="border-neutral-800 border-[3px] p-3 px-5 rounded-full flex w-[160px] items-center gap-3 text-center">
              Learn More <FaArrowRight />
            </Link>
          </div>
          <Link href='https://www.youtube.com/@roboracers3071' className="mt-10 lg:mt-0 p-5 lg:border-[3px] rounded-2xl border-neutral-800 lg:ml-20 justify-between ">
            <div className="flex items-center gap-3 text-neutral-800 font-semibold text-lg">
              <FiYoutube className="text-neutral-800" size={50}/>Check out our YouTube.
            </div>
            <div className="w-full lg:flex items-center justify-center gap-20 px-5 hidden lg:block">
              <Image src='/youtubelogo.png' width={100} height={100} alt='youtube logo' className="rounded-full border-neutral-800 border-[3px]"></Image>
              <iframe width="500" height="300" src="https://www.youtube.com/embed/CfxtT5tBlec?si=iqkX-Kgos1mhzHwc" title="YouTube video player" className="rounded-2xl hidden lg:block" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-neutral-800 w-full h-[3px] mt-10"></div>
        <div className="w-[125px] md:ml-[200px] ml-10">
          <div className="bg-neutral-800 text-center font-mono text-white rounded-b-xl text-xl pb-1 px-3 flex-grow-0">sponsors</div>
        </div>
      <div className="pt-5 px-20 ">
        <div className="lg:grid grid-cols-3 gap-10  items-center border-[3px] border-neutral-800 rounded-2xl">
          <Image src='/eclatprime.png' alt='eclatprime' width={500} height={100} className="h-full bg-white rounded-t-2xl lg:rounded-l-2xl"/>
          <Image src='/saiosec.png' alt='eclatprime' width={500} height={100}/>
          <Image src='/solarbill.png' alt='eclatprime' width={500} height={100} className="rounded-b-2xl lg:rounded-r-2xl"/>
        </div>
      </div>
    </main>
  );
}
