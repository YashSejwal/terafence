import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="w-full min-h-screen bg-gray-50 py-12">

        <div className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg font-medium max-w-2xl mx-auto">
            Have questions or concerns? Reach out to us, and we'll get back to
            you promptly.
          </p>
        </div>

        <div className="container mx-auto px-6 sm:px-12 md:px-16 mt-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    className="block text-lg font-medium text-gray-700 mb-2"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    className="block text-lg font-medium text-gray-700 mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label
                    className="block text-lg font-medium text-gray-700 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    rows={2}
                    placeholder="Type your message here"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white shadow-lg rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Contact Details
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> info@terafence.in
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> +91 98111 12533
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> 209, Suncity Success Tower,
                  Sector-65, Gurgaon-122 018, Haryana, India
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/terafence-private-limited/"
                    className="text-blue-500 hover:text-blue-700 transition"
                    target="_blank"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/terafence-private-limited/"
                    className="text-blue-500 hover:text-blue-700 transition"
                    target="_blank"
                  >
                    <FaTwitter className="text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/terafence-private-limited/"
                    className="text-blue-500 hover:text-blue-700 transition"
                    target="_blank"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Locate Us
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.367678373596!2d77.06765957549263!3d28.408160475788016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23d44fbfa2cf%3A0x7ca41bccd7a459b7!2sTerafence%20Private%20Limited!5e0!3m2!1sen!2sin!4v1737451700131!5m2!1sen!2sin"
              width="100%"
              height="550"
              style={{ border: 0, borderRadius: "18px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
