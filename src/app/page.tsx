"use client";
import Image from "next/image";
import Spline from '@splinetool/react-spline';
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between px-5 md:px-10 pt-5">
      <Navbar activePage="home"></Navbar>
      <div className=" justify-between w-full px-10">
        <div className="">
          <h1 className="text-5xl md:text-7xl font-semibold pt-20">RoboRacers</h1>
          <div className="flex items-center gap-5 pt-5">
            <Image src='/ftc.svg' alt='ftc' width={70} height={70}></Image>
            <p className="text-4xl font-light">#16481</p>
          </div>
          <p className='italic text-2xl pt-5 font-light'>It&apos;s about the race, not the finish line.</p>
        </div>
      </div>
      <div className=" h-screen w-screen w-full -translate-y-[100px] md:-translate-y-[400px] md:translate-x-[400px]">
          <Spline className='' scene="https://prod.spline.design/hkqzD0IwUKxA-Goo/scene.splinecode" />
        </div>
    </main>
  );
}
