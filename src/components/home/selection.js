"use client";
import { ad, au } from "@/assets/image/exportimg";
import AirportSelect from "./select";
import FlightDatePicker from "./calander";
import NumberPicker from "./increaseAM";
import Link from "next/link";

const Menu = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center lg:flex-row">
            <AirportSelect lable="From where?" src={au} />
            <AirportSelect lable="Where to?" src={ad} />
            <FlightDatePicker />
            <NumberPicker />
            <Link href="/option" className="block w-full lg:w-[70px]">
                <button className="w-full text-white text-xl bg-prime-50 p-2 h-[48px] rounded hover:bg-prime-100 lg:w-full hover:text-prime-50 hover:bg-white hover:border-2 hover:border-prime-50 transition-all duration-200">
                    Search
                </button>
            </Link>

        </div>
    );
};

export default Menu;
// const Menu = ({ signin }) => {
//     return (
//         <div className={`w-full flex flex-col items-center justify-center lg:flex-row ${signin ? "z-10 opacity-50 pointer-events-none" : "z-[999999]"}`}>
//             <AirportSelect lable="From where?" src={au} />
//             <AirportSelect lable="Where to?" src={ad} />
//             <FlightDatePicker />
//             <NumberPicker />
//             <button className="w-full lg:w-auto text-white text-xl bg-prime-50 p-2 h-[48px] rounded hover:bg-prime-100">
//                 Search
//             </button>
//         </div>
//     );
// };
// export default Menu;

