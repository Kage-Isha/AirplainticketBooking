"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { peop } from '@/assets/image/exportimg';
import B from '../button';

function NumberPicker() {
    const [isOpen, setIsOpen] = useState(false);
    const [adultCount, setAdultCount] = useState(1);
    const [minorCount, setMinorCount] = useState(0);

    // References to handle outside clicks
    const popupRef = useRef(null);
    const buttonRef = useRef(null);

    // Toggle the popup
    const togglePopup = () => setIsOpen((prev) => !prev);

    // Close the popup when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            // If the popup is open and click target is outside the popup & the toggle button
            if (
                isOpen &&
                popupRef.current &&
                !popupRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Handlers for inputs
    const handleAdultsChange = (e) => {
        setAdultCount(parseInt(e.target.value, 10) || 0);
    };
    const handleMinorsChange = (e) => {
        setMinorCount(parseInt(e.target.value, 10) || 0);
    };

    // Increment/Decrement
    const incrementAdults = () => setAdultCount((prev) => prev + 1);
    const decrementAdults = () => setAdultCount((prev) => Math.max(prev - 1, 0));
    const incrementMinors = () => setMinorCount((prev) => prev + 1);
    const decrementMinors = () => setMinorCount((prev) => Math.max(prev - 1, 0));

    // Update button label & close popup
    const handleApply = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-full lg:w-[200px]">
            {/* Toggle button */}
            <button
                ref={buttonRef}
                onClick={togglePopup}
                className="bg-white w-full lg:w-[200px] h-[48px] flex items-center text-gray-400 border border-gray-300 px-4 py-2 rounded hover:bg-gray-300"
            >
                <Image width="1000" height="1000" src={peop} alt="no image" className=" w-6 h-6 pr-1"/>
                {adultCount} Adult{adultCount !== 1 ? 's' : ''}
                {minorCount > 0 && `, ${minorCount} Minor${minorCount !== 1 ? 's' : ''}`}
            </button>

            {/* Popup */}
            {isOpen && (
                <div
                    ref={popupRef}
                    className="absolute left-0 mt-2 w-70 rounded border border-gray-400 bg-white shadow-lg z-10"
                >
                    <div className="p-4 ">
                        {/* Adult row */}
                        <div className="flex items-center mb-4">
                            <label htmlFor="adultCount" className="mr-2 w-20">
                                Adults:
                            </label>
                            <B
                                onclick={decrementAdults}
                                name="-"
                            />
                            <input
                                id="adultCount"
                                type="number"
                                value={adultCount}
                                onChange={handleAdultsChange}
                                min="0"
                                className="mx-2 w-16 text-center border border-gray-300 rounded"
                            />
                            <B
                                onclick={incrementAdults}
                                name="+"
                            />
                        </div>

                        {/* Minor row */}
                        <div className="flex items-center mb-4">
                            <label htmlFor="minorCount" className="mr-2 w-20">
                                Minors:
                            </label>
                            <B
                                onclick={decrementMinors}
                                name="-"
                            />
                            <input
                                id="minorCount"
                                type="number"
                                value={minorCount}
                                onChange={handleMinorsChange}
                                min="0"
                                className="mx-2 w-16 text-center border border-gray-300 rounded"
                            />
                            <B
                                onclick={incrementMinors}
                                name="+"
                            />
                        </div>

                        {/* Apply button */}
                        <B
                            onclick={handleApply}
                            name="Apply"
                        />

                    </div>
                </div>
            )}
        </div>
    );
}

export default NumberPicker;
