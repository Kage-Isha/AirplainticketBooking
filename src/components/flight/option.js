"use client";
import {dl, fl, hl, jl,map, ql, ul } from "@/assets/image/exportimg";

import { useState } from "react";
import FlightCard from "./flightcard";
import PriceDetails from "./pricedetail";
import PriceGraph from "./pricegraph";
import Opop from "./select";
import Menu from "../home/selection";
import Image from "next/image";
import Link from "next/link";

const FlightChoose = () => {
  const [priceShown, setPriceShow] = useState(true);

  return (
    <>
      <div className="flex lg:flex-row flex-col items-start justify-between gap-16 ">
        <div className="w-full lg:w-[872px] h-full flex flex-col gap-5">
          <Menu />
          <Opop />
          <div className="flex items-start justify-start">
            <h1 className="text-[#6E7491]  text-lg leading-6 font-semibold">
              Choose a <span className="text-[#605DEC]">departing </span>/{" "}
              <span className="text-[#605DEC]">returning </span>flight
            </h1>
          </div>
          <div className="w-full flex flex-col items-start justify-start  border-[1px] border-[#E9E8FC] rounded-xl">
            <div
              className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC] hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
              onClick={() => setPriceShow(false)}
            >
              <FlightCard
                img={hl}
                duration="16h 45m"
                name="Hawaiian Airlines"
                time="7:00AM - 4:15PM"
                stop="1 stop"
                hnl="2h 45m in HNL"
                price="$624"
                trip="round trip"
              />
            </div>
            <div
              className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC]  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
              onClick={() => setPriceShow(false)}
            >
              <FlightCard
                img={jl}
                duration="18h 22m"
                name="Japan Airlines"
                time="7:35AM - 12:15PM"
                stop="1 stop"
                hnl="50m in HKG"
                price="$663"
                trip="round trip"
              />
            </div>
            <div
              className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC]  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
              onClick={() => setPriceShow(false)}
            >
              <FlightCard
                img={dl}
                duration="18h 52m"
                name="Delta Airlines"
                time="9:47 AM - 4:15 PM"
                stop="1 stop"
                hnl="4h 05m in ICN"
                price="$756"
                trip="round trip"
              />
            </div>
            <div
              className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC]  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
              onClick={() => setPriceShow(false)}
            >
              <FlightCard
                img={ql}
                duration="15h 45m"
                name="Qantas Airlines"
                time="10:55 AM - 8:15 PM"
                stop="Nonstop"
                price="$839"
                trip="round trip"
              />
            </div>
            <div
              className="w-full cursor-pointer  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
              onClick={() => setPriceShow(false)}
            >
              <FlightCard
                img={ul}
                duration="16h 05m"
                name="United Airlines"
                time="11:15 AM - 7:45 PM"
                stop="Nonstop"
                price="$837"
                trip="round trip"
              />
            </div>
            <div
              className="w-full cursor-pointer  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
              onClick={() => setPriceShow(false)}
            >
              <FlightCard
                img={fl}
                duration="18h 30m"
                name="France Airlines"
                time="10:15 AM - 8:45 PM"
                stop="Nonstop"
                price="$964"
                trip="round trip"
              />
            </div>
          </div>
          <div className="w-full lg:mt-12">
            <Image src={map} alt="map" className="w-full h-full object-cover" />
          </div>
        </div>

        {priceShown && (
          <PriceGraph />
        )}

        {!priceShown && (
          <div className="mt-10 flex flex-col gap-10 justify-end items-start lg:items-end">
            <PriceDetails />

            <Link href="/passengerinfo">
              <button className="text-[#605DEC] border-2 border-[#605DEC] py-2 px-3 rounded hover:bg-[#605DEC] hover:text-white transition-all duration-200">
                Save & Close
              </button>
            </Link>



            {/* 
            <Link to='/passengerinfo' className="mt-5">
           <button className="text-[#605DEC] border-2 border-[#605DEC] py-2 px-3 rounded hover:bg-[#605DEC] hover:text-white transition-all duration-200">Save & Close</button>
        </Link> */}
          </div>
        )}
      </div>
    </>
  );
};

export default FlightChoose;
