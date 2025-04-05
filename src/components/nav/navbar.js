"use client";
import A from "@/components/nav/hover";
import Image from "next/image";
import B from "../button";
import { logo } from "@/assets/image/exportimg";
import { useState } from "react";
import { MdOutlineClose } from 'react-icons/md';
import { BiMenuAltLeft } from 'react-icons/bi';
import Signin from "./sign";
const Navbar = () => {
    // const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const [signin, setSignin] = useState(false);

    const loactionPath = (route) => {
        if (route === location.pathname) {
            return true
        }
    }

    return (
        <nav className="sticky top-[0px] bg-background  w-full flex flex-row items-center justify-between px-4 py-2 ">
            <div className="flex justify-between items-center p-4 lg:items-center">
                <div className="relative lg:hidden flex items-center">
                    {toggle ? (
                        <MdOutlineClose src={close} alt="close" className="w-7 h-7 text-letter cursor-pointer" onClick={() => setToggle(false)} />
                    ) : (
                        <BiMenuAltLeft className="w-7 h-7 text-letter cursor-pointer" onClick={() => setToggle(true)} />
                    )}
                    {toggle && (
                        <ul className="absolute w-32 z-10 h-fit bg-[#FFFFFF] shadow-xl top-14 left-0 text-[#7C8DB0] flex flex-col gap-2 items-start p-4 scaleUp">
                            <A name="Flights" >
                                <li>Flights</li>
                            </A>
                            <A name="About us" >
                                <li>About us</li>
                            </A>
                            <A name="Contact us" >
                                <li>Contact us</li>
                            </A>
                            <A name="Sign in" >
                                <li>Sign in </li>
                            </A>

                            <B name="Sign up" >
                                <li>Sign up</li>
                            </B>
                        </ul>
                    )}
                </div>
                <Image
                    width="1000"
                    height="1000"
                    className="w-[134px] h-[54px] p-2 lg:items-center "
                    src={logo}
                    alt="Logo"
                />
            </div>
            <div className=" md:flex items-center space-x-8">
                <ul className="hidden md:flex items-center space-x-8 text-[#7C8DB0]">
                    <A name="Flights" >
                        <li>Flights</li>
                    </A>
                    <A name="About us" >
                        <li>About us</li>
                    </A>
                    <A name="Contact us" >
                        <li>Contact us</li>
                    </A>
                    <A name="Sign in" >
                        <li>Sign in </li>
                    </A>
                </ul>
                <div className="">
                    <B name="Sign up" onclick={() => setSignin(!signin)} />
                    {signin && (
                        <Signin  signin={signin} setSignin={setSignin}/>
                    )}
                </div>
            </div>
        </nav>

    );
};
export default Navbar;
