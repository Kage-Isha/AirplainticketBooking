"use client";
import { fb, ig, tw } from "@/assets/image/exportimg";
import Image from "next/image";
import Fa from "./Fhover";

const Fotter = () => {

    return (

        <footer className="  w-full flex flex-col items-center  p-4  bg-slate-200">
            <div className="flex items-center justify-evenly p-2">
                <Image width="1000" height="1000" className="h-[24px] w-[24px] m-2" src={fb} alt="fb" />
                <Image width="1000" height="1000" className="h-[24px] w-[24px] m-2" src={ig} alt="ig" />
                <Image width="1000" height="1000" className="h-[24px] w-[24px] m-2" src={tw} alt="tw" />
            </div>
            <div className="text-[1.6rem] text-letter">
                <Fa name="Home" href="/"/>
                <Fa name="About" href="/about"/>
                <Fa name="Contact" href="/contact"/>
            </div>
            <div className="text-[1rem] text-letter">2025 All rights reserverd, Airplane ticket booking site. Developed by- <span> Sujen Maharjan</span></div>
        </footer>
    );
};
export default Fotter;