"use client";
import Link from "next/link";

const A=({name,href})=>{
    return(
    <Link href={href} className="navbar-brand text-letter text-[1rem] hover:text-prime-50" >{name}</Link>
    );
};
export default A;