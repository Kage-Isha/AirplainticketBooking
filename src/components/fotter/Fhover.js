import Link from "next/link";

const Fa=({name,href})=>{
    return(
    <Link href={href} className=" text-white bg-prime-50 rounded pl-[1rem] pr-[1rem] pu-[.7rem] pd-[.7rem] text-[1.6rem] m-[.3rem] hover:bg-prime-100 ">{name}</Link>
    );
};
export default Fa;