// "use client";

// import React, { useState } from 'react';
// import { DateRange } from 'react-date-range';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
// import Image from 'next/image';
// import B from '../button';
// import { dt } from '@/assets/image/exportimg';

// function FlightDatePicker() {
//   const [tripType, setTripType] = useState('round');
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [dateRange, setDateRange] = useState([
//     { startDate: new Date(), endDate: new Date(), key: 'selection' },
//   ]);

//   const handleSelect = (ranges) => {
//     setDateRange([ranges.selection]);
//   };

//   const handleDone = () => {
//     setShowCalendar(false);
//   };

//   const { startDate, endDate } = dateRange[0];
//   const buttonLabel =
//     tripType === 'round'
//       ? `Depart: ${startDate.toLocaleDateString()}  -  Return: ${endDate.toLocaleDateString()}`
//       : `Depart: ${startDate.toLocaleDateString()}`;

//   return (
//     // The parent container is set to relative so that the absolute positioning below is relative to this container.
//     <div className="relative w-[220px]">
//       {/* The button remains static */}
//       <button
//         onClick={() => setShowCalendar(!showCalendar)}
//         className="w-full flex items-center h-[60px] lg:w-[220px] px-4 py-2 border border-gray-300 bg-white shadow-sm rounded hover:bg-gray-300"
//       >
//         <Image
//           width="1000"
//           height="1000"
//           src={dt}
//           className="w-6 h-6 pr-1 text-gray-400"
//           alt="Depart - Return"
//         />
//         <span className="text-gray-400">{buttonLabel}</span>
//       </button>

//       {/* The calendar is absolutely positioned relative to the parent */}
//       {showCalendar && (
//         <div className={`absolute left-0 top-full z-50 mt-2 bg-white border border-gray-400 ${tripType === 'round' ? 'custom-calendar-container' : ''}`}>
//           <div className="mb-4 flex items-center p-2 justify-between text-gray-400">
//             <div>
//               <label className="mr-4 text-gray-700">
//                 <input
//                   type="radio"
//                   value="round"
//                   checked={tripType === 'round'}
//                   onChange={() => setTripType('round')}
//                   className="mr-1"
//                 />
//                 Round Trip
//               </label>
//               <label className="text-gray-700">
//                 <input
//                   type="radio"
//                   value="one"
//                   checked={tripType === 'one'}
//                   onChange={() => setTripType('one')}
//                   className="mr-1"
//                 />
//                 One Way
//               </label>
//             </div>
//             <B onclick={handleDone} name="Done" />
//           </div>

//           <DateRange
//             ranges={dateRange}
//             onChange={handleSelect}
//             moveRangeOnFirstSelection={false}
//             months={tripType === 'round' ? 2 : 1}
//             direction={tripType === 'round' ? 'horizontal' : 'vertical'}
//             className="mr-1"
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default FlightDatePicker;
"use client";

import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Image from "next/image";
import B from "../button";
import { dt } from "@/assets/image/exportimg";

function FlightDatePicker() {
  const [tripType, setTripType] = useState("round");
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const handleDone = () => {
    setShowCalendar(false);
  };

  const { startDate, endDate } = dateRange[0];
  const buttonLabel =
    tripType === "round"
      ? `Depart: ${startDate.toLocaleDateString()} - Return: ${endDate.toLocaleDateString()}`
      : `Depart: ${startDate.toLocaleDateString()}`;

  return (
    <div className="relative w-full lg:w-[250px]">
      {/* Button with dynamic width and fixed height */}
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        className="w-full lg:w-full flex items-center h-[48px] px-4 py-2 border border-gray-300 bg-white shadow-sm rounded hover:bg-gray-100 transition"
      >
        <Image
          width={1000}
          height={1000}
          src={dt}
          className="w-6 h-6 pr-1 text-gray-400"
          alt="Depart - Return"
        />
        <span className="text-gray-600 truncate">{buttonLabel}</span>
      </button>

      {/* Calendar Dropdown */}
      {showCalendar && (
        <div className="absolute left-0 top-full z-50 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg w-[320px] lg:w-[450px] p-4">
          {/* Trip Type Selection */}
          <div className="mb-4 flex items-center justify-between text-gray-700">
            <div className="flex gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="round"
                  checked={tripType === "round"}
                  onChange={() => setTripType("round")}
                  className="mr-2"
                />
                Round Trip
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="one"
                  checked={tripType === "one"}
                  onChange={() => setTripType("one")}
                  className="mr-2"
                />
                One Way
              </label>
            </div>
            <B onclick={handleDone} name="Done" />
          </div>

          {/* Calendar Component */}
          <DateRange
            ranges={dateRange}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            months={tripType === "round" ? 2 : 1}
            direction={tripType === "round" ? "horizontal" : "vertical"}
            className="mr-1"
          />
        </div>
      )}
    </div>
  );
}

export default FlightDatePicker;
