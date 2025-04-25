import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12">
        {/* About Us Section */}
        <div className="flex flex-col md:flex-row mb-16">
          <div className="md:w-1/2 relative h-64 md:h-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/ghumgham-about.jpg"
              alt="Airline ticket booking"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">About GhumGham</h1>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              <strong>GhumGham</strong> is your trusted companion for hassle-free airline ticket booking across Nepal and beyond. We’re committed to bringing you fast, reliable, and affordable travel options at your fingertips.
            </p>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Our mission is to simplify the way you travel — whether you're booking a spontaneous getaway or planning a business trip, GhumGham helps you find the best flights in just a few clicks.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With real-time flight data, secure payments, and responsive customer support, we aim to redefine your travel experience.
            </p>
            <p className="mt-6 text-blue-600 font-semibold">Fly smart. Fly easy. Fly with GhumGham.</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-blue-50 p-6 rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold text-blue-800 text-center mb-6">What Our Travelers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
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
