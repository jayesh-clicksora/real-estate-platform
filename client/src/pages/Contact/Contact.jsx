import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-slate-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            CONTACT US
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Find Your
            <span className="text-blue-500"> Dream Property</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Have questions? Our expert real estate team is ready to help you
            buy, sell or invest in premium properties.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-bold text-xl">Office Address</h3>
                <p className="text-gray-600 mt-2">
                  Vijay Nagar, Indore,
                  <br />
                  Madhya Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-bold text-xl">Phone</h3>
                <p className="text-gray-600 mt-2">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p className="text-gray-600 mt-2">info@estatepro.com</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl">
                <FaClock />
              </div>

              <div>
                <h3 className="font-bold text-xl">Working Hours</h3>
                <p className="text-gray-600 mt-2">
                  Mon - Sat
                  <br />
                  9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-8">Send Message</h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
