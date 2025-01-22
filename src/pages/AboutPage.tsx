import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import cctv from "../assets/cctv.png";
import fit from "../assets/fit.png";
import firewall from "../assets/firewall.png";

const AboutPage = () => {
  return (
    <div className="font-sans text-gray-900 mt-16 relative bg-gray-50">
      <Navbar />
      <div
        className="absolute top-0 left-0 w-full h-64"
        style={{ backgroundColor: "#0f6eb5" }}
      ></div>

      <section className="relative text-center py-20">
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Protecting What Matters Most
        </motion.h1>
        <motion.p
          className="text-xl font-medium mb-8 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          The next generation of cybersecurity solutions for critical assets.
        </motion.p>
      </section>

      <section className="container mx-auto my-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Who We Are</h2>
        <motion.p
          className="text-lg mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          At Terafence, we believe that cybersecurity should be simple and
          failsafe. We offer innovative solutions to keep malware at bay and
          protect even the most outdated assets, just as we protect vulnerable
          populations from viruses. Founded by Indian industry leaders,
          Terafence Pvt. Ltd. (iTF) focuses on providing next-generation
          cybersecurity protection for critical assets like CCTV, IT, and OT
          networks. With technology licensed from Terafence Ltd., Israel, our
          products are proudly "Made in India."
        </motion.p>
      </section>

      <section className="  py-12">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <motion.p
            className="text-xl mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our mission is to secure the ever-growing cyber-attack surface
            across industries by providing effective, reliable, and future-proof
            cybersecurity solutions.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto my-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Next-Generation Technology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
            <img
              src={firewall}
              alt="Technology Icon"
              className="h-36 w-46 mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Secure Networks</h3>
            <p className="text-center">
              Advanced protection for IT and OT networks, keeping your data
              safe.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
            <img src={cctv} alt="Technology Icon" className="h-36 w-46 mb-4" />
            <h3 className="font-semibold text-lg mb-2">CCTV Protection</h3>
            <p className="text-center">
              Protect critical surveillance systems from evolving cyber threats.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
            <img src={fit} alt="Technology Icon" className="h-36 w-46 mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              Future-Proof Solutions
            </h3>
            <p className="text-center">
              Innovative, scalable solutions for today and tomorrow’s
              cybersecurity needs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
