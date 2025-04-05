"use client";
import Image from "next/image";
import React, { useState } from "react";
import Select from "react-select";
const customDropdownIndicator = () => {
    return null; 
};
const options = [
    { value: 'Kathmandu', label: 'Kathmandu' },
    { value: 'India', label: 'India' },
    { value: "China", label: 'China' },
    { value: "USA", label: 'USA' },
    { value: "Australia", label: 'Australia' }
];

// Custom Single Value Component (To keep the airplane when selecting)
// const SingleValue = ({ data }) => (
//   <div className="flex items-center">
//     <img src={airplaneImage} alt="Airplane" className="w-4 h-4 mr-2" />
//     {data.label}
//   </div>
// );

// Custom Placeholder Component (To show the airplane inside the placeholder)
const Placeholder = ({lable,src}) => (
  <div className="flex items-center text-gray-400">
    <Image width="1000" height="1000" src={src} alt="Airplane" className=" w-6 h-6 pr-1" />
    {lable}
  </div>
);

const AirportSelect = ( {lable,src})=> {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="w-full lg:w-[250px]">

      {/* Select Dropdown */}
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        components={{ DropdownIndicator: customDropdownIndicator }}
        placeholder={<Placeholder lable={lable} src={src} />}
        // components={{ SingleValue }} // Keep image after selecting
        getOptionLabel={(e) => (
          <div className="flex items-center">
            {e.label}
          </div>
        )}
        classNamePrefix="w-full lg:select "
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: "white",
            borderColor: "gray",
            height:"48px",
            padding: "8px 12px",
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }),
          option: (provided, { isFocused }) => ({
            ...provided,
            backgroundColor: isFocused ? "#6366F1" : "white",
            color: isFocused ? "white" : "black",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }),
        }}
      />
    </div>
  );
}
export default AirportSelect;
