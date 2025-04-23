// import { ad, au } from "@/assets/image/exportimg";
// import AirportSelect from "./select";
// import FlightDatePicker from "./calander";
// import NumberPicker from "./increaseAM";
// import Link from "next/link";
// const Menu = () => {
//     return (
//         <div className="flex-col w-full lg:flex items-center justify-center ">
//             <AirportSelect lable="From where?" src={au} />
//             <AirportSelect lable="Where to?" src={ad} />
//             <FlightDatePicker />
//             <NumberPicker />
//             {/* <Link to="/option"> */}
//             <button className="w-full text-white  lg:text-white text-xl bg-prime-50 p-2 h-[60px]  rounded hover:bg-prime-100 " >Search</button>
//             {/* </Link> */}
//         </div>
//     );
// };
// export default Menu;
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
            {/* <Link to="/option"> */}
            <button className="w-full lg:w-auto text-white text-xl bg-prime-50 p-2 h-[48px] rounded hover:bg-prime-100">
                Search
            </button>
            {/* </Link> */}
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

