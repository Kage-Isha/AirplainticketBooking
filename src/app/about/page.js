'use client';

import { ab } from '@/assets/image/exportimg';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto relative rounded-xl overflow-hidden shadow-lg">
          <Image
  src={ab}
  alt="Airline ticket booking"
  fill
  className="object-contain"
  sizes="(max-width: 1024px) 100vw, 50vw"
  style={{ height: '100%', width:"100%" }} // Ensure the height is 100%
  priority
/>

          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
              About GhumGham
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
              <strong>GhumGham</strong> is your trusted companion for hassle-free airline ticket booking across Nepal and beyond. We’re committed to bringing you fast, reliable, and affordable travel options at your fingertips.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
              Our mission is to simplify the way you travel — whether you're booking a spontaneous getaway or planning a business trip, GhumGham helps you find the best flights in just a few clicks.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              With real-time flight data, secure payments, and responsive customer support, we aim to redefine your travel experience.
            </p>
            <p className="mt-6 text-blue-600 font-semibold">
              Fly smart. Fly easy. Fly with GhumGham.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-blue-50 p-6 sm:p-8 rounded-xl shadow-inner">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 text-center mb-8">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Anisha R.", comment: "Booked my Kathmandu flight in 2 minutes. So easy!" },
              { name: "Kiran S.", comment: "The price alerts saved me a lot — love this app!" },
              { name: "Laxmi D.", comment: "Super quick customer support. Will book again!" },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              >
                <p className="text-gray-600 italic">“{review.comment}”</p>
                <p className="mt-2 text-sm font-semibold text-blue-700 text-right">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
}
