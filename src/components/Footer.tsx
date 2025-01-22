// import logo from "../assets/terafence.png";
import tera from "../assets/terafenceW.png";
import phoneIcon from "../assets/phone.png"; 
import emailIcon from "../assets/email.png";
import locationIcon from "../assets/location.png"; 

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={tera} alt="Terafence Logo" className="h-30 w-40" />
            </div>
            <p className="text-gray-200 mt-4">
              Securing your digital infrastructure with next-generation
              solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <img src={phoneIcon} alt="Phone" className="h-5 w-5" />
                <span>+91 98111 12533</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={emailIcon} alt="Email" className="h-5 w-5" />
                <span>info@terafence.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={locationIcon} alt="Location" className="h-5 w-5" />
                <span>
                  209, Suncity Success Tower,
                  Sector-65, Gurgaon-122 018, Haryana, India
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-200 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-200 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-200 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-200 transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-200 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-200 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-200 transition-colors">
                  Glossary
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-200 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-200 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-200 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-200 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="w-full px-4 py-2 bg-white text-blue-600 rounded font-semibold hover:bg-blue-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {new Date().getFullYear()} Terafence™. All Rights Reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-200 transition-colors">
                {/* Social icons */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
