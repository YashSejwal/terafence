import React from "react";
import { motion } from "framer-motion";
import pg from "../assets/pg.png";
import tg from "../assets/tg.png";
import tp from "../assets/tp.png";
import cdac from "../assets/cdac.png";
import dmrc from "../assets/dmrc.png";
import ncr from "../assets/ncr.png";
import mp from "../assets/mp.png";

const Partner: React.FC = () => {
  return (
    <div className="overflow-hidden w-screen m-0 p-0 relative left-1/2 transform -translate-x-1/2">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Partners</h2>
        <p className="text-lg text-gray-600 mt-2">
          We are proud to collaborate with leading organizations
        </p>
      </div>
      <motion.div
        className="flex gap-12 whitespace-nowrap" 
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        initial={{ x: "100%" }}
      >
        {[...Array(2)].flatMap(() => [
          <div className="relative flex-shrink-0" key="1">
            <img
              src={pg}
              alt="Partner 1"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>,
          <div className="relative flex-shrink-0" key="2">
            <img
              src={tp}
              alt="Partner 2"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>,
          <div className="relative flex-shrink-0" key="3">
            <img
              src={tg}
              alt="Partner 3"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>,
          <div className="relative flex-shrink-0" key="4">
            <img
              src={ncr}
              alt="Partner 4"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>,
          <div className="relative flex-shrink-0" key="5">
            <img
              src={dmrc}
              alt="Partner 5"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>,
          <div className="relative flex-shrink-0" key="6">
            <img
              src={cdac}
              alt="Partner 6"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>,
          <div className="relative flex-shrink-0" key="7">
            <img
              src={mp}
              alt="Partner 7"
              className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>,
        ])}
      </motion.div>
    </div>
  );
};

export default Partner;
