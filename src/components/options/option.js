// "use client";
// import Menu from "../home/selection";
// import { useState } from "react";
// import FlightCard from "./FlightCard";
// import { au } from "@/assets/image/exportimg";
// import PriceDetails from "./PriceDetails";
// import PriceGraph from "./PriceGraph";
// const Options = () => {

//     const [priceShown, setPriceShow] = useState(true);
//     return (
//         <section className="grid grid-cols-3">
//             <div className="col-span-2 flex flex-col">
//                 <Menu />
//                 {/* Select section */}

//           <div className="flex flex-wrap items-center  justify-start gap-3 mt-48 lg:mt-1 ">
//             <select
//               name="price"
//               id="max-price"
//               className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
//             >
//               <option value="max-price" className="">
//                 Max price
//               </option>
//               <option value="$100-300">$100-300</option>
//               <option value="$300-600">$300-600</option>
//               <option value="$600-1000">$600-1000</option>
//             </select>
//             <select
//               name="shops"
//               id="shops"
//               className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
//             >
//               <option value="shops" className="">
//                 Shops
//               </option>
//             </select>
//             <select
//               name="times"
//               id="times"
//               className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
//             >
//               <option value="times" className="">
//                 Times
//               </option>
//               <option value="7 AM - 4 PM">7 AM - 4 PM</option>
//               <option value="8 AM - 12 PM">8 AM - 12 PM</option>
//               <option value="6 PM - 10 PM">6 PM - 10 PM</option>
//             </select>
//             <select
//               name="airlines"
//               id="airlines"
//               className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
//             >
//               <option value="airlines" className="">
//                 Airlines
//               </option>
//               <option value="Japan">Japan</option>
//               <option value="Hawai">Hawai</option>
//               <option value="Dubai">Dubai</option>
//             </select>
//             <select
//               name="class"
//               id="class"
//               className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
//             >
//               <option value="class" className="">
//                 Select Class
//               </option>
//               <option value="A">A</option>
//               <option value="B">B</option>
//               <option value="C">C</option>
//             </select>
//             <select
//               name="price"
//               id="max-price"
//               className="border-[1px] border-[#CBD4E6] bg-white text-[#27273F] p-1 cursor-pointer"
//             >
//               <option value="max-price" className="">
//                 more
//               </option>
//             </select>
//           </div>
//                 <div className="flex items-start justify-start">
//                     <h1 className="text-[#6E7491]  text-lg leading-6 font-semibold">
//                         Choose a <span className="text-[#605DEC]">departing </span>/{" "}
//                         <span className="text-[#605DEC]">returning </span>flight
//                     </h1>
//                 </div>
//                 <div className="w-full flex flex-col items-start justify-start  border-[1px] border-[#E9E8FC] rounded-xl">
//                     <div
//                         className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC] hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
//                         onClick={() => setPriceShow(false)}
//                     >
//                         <FlightCard
//                             img={au}
//                             duration="16h 45m"
//                             name="Hawaiian Airlines"
//                             time="7:00AM - 4:15PM"
//                             stop="1 stop"
//                             hnl="2h 45m in HNL"
//                             price="$624"
//                             trip="round trip"
//                         />
//                     </div>
//                     <div
//                         className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC]  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
//                         onClick={() => setPriceShow(false)}
//                     >
//                         <FlightCard
//                             img={au}
//                             duration="18h 22m"
//                             name="Japan Airlines"
//                             time="7:35AM - 12:15PM"
//                             stop="1 stop"
//                             hnl="50m in HKG"
//                             price="$663"
//                             trip="round trip"
//                         />
//                     </div>
//                     <div
//                         className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC]  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
//                         onClick={() => setPriceShow(false)}
//                     >
//                         <FlightCard
//                             img={au}
//                             duration="18h 52m"
//                             name="Delta Airlines"
//                             time="9:47 AM - 4:15 PM"
//                             stop="1 stop"
//                             hnl="4h 05m in ICN"
//                             price="$756"
//                             trip="round trip"
//                         />
//                     </div>
//                     <div
//                         className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC]  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
//                         onClick={() => setPriceShow(false)}
//                     >
//                         <FlightCard
//                             img={au}
//                             duration="15h 45m"
//                             name="Qantas Airlines"
//                             time="10:55 AM - 8:15 PM"
//                             stop="Nonstop"
//                             price="$839"
//                             trip="round trip"
//                         />
//                     </div>
//                     <div
//                         className="w-full cursor-pointer  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
//                         onClick={() => setPriceShow(false)}
//                     >
//                         <FlightCard
//                             img={au}
//                             duration="16h 05m"
//                             name="United Airlines"
//                             time="11:15 AM - 7:45 PM"
//                             stop="Nonstop"
//                             price="$837"
//                             trip="round trip"
//                         />
//                     </div>
//                     <div
//                         className="w-full cursor-pointer  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
//                         onClick={() => setPriceShow(false)}
//                     >
//                         <FlightCard
//                             img={au}
//                             duration="18h 30m"
//                             name="France Airlines"
//                             time="10:15 AM - 8:45 PM"
//                             stop="Nonstop"
//                             price="$964"
//                             trip="round trip"
//                         />
//                     </div>
//                 </div>
//                 <div className="w-full lg:mt-12">
//                     <img src={au} alt="map" className="w-full h-full object-cover" />
//                 </div>
//             </div>
//             <div className="">

//                 <div className="flex lg:flex-row flex-col items-start justify-between gap-16 ">

//                 </div>

//                 {priceShown && (
//                     <PriceGraph />
//                 )}

//                 {!priceShown && (
//                     <div className="mt-10 flex flex-col gap-10 justify-end items-start lg:items-end">
//                         <PriceDetails />
//                         <Link to='/passenger-info' className="mt-5">
//                             <button className="text-[#605DEC] border-2 border-[#605DEC] py-2 px-3 rounded hover:bg-[#605DEC] hover:text-white transition-all duration-200">Save & Close</button>
//                         </Link>
//                     </div>
//                 )}
//             </div>


//         </section >
//     );
// };
// export default Options;