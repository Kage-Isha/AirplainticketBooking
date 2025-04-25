// app/contact/page.tsx
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center mb-12">
          <span className="text-gray-800">Contact</span> Us
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Google Map */}
          <div className="lg:w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.445276308881!2d85.29985731210554!3d27.694966154074873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18518d4e8021%3A0x92981cbf20e7d934!2sTeku%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1725708482530!5m2!1sen!2snp"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form
            className=" lg:w-full bg-white p-6 sm:p-8 rounded-xl shadow-md space-y-6"
            action="/api/contact"
            method="POST"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">Get in Touch</h3>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1" htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                required
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
