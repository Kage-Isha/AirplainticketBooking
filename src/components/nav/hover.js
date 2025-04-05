import Link from "next/link";

const A=({name})=>{
    return(
    <Link to="/"className="navbar-brand text-letter text-[1rem] hover:text-prime-50" href="#">{name}</Link>
    );
};
export default A;