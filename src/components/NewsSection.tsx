import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, AlertTriangle, Shield, Zap, ShieldAlert, BadgeAlert  } from "lucide-react";
import mumbai from "../assets/mumbai.png";
import hyderabad from "../assets/hyderabad.png";
import haldiram from "../assets/haldiram.png";
import govt from "../assets/govt.jpg";
import modi from "../assets/modi.jpg";
import bigbasket from "../assets/bigbasket.jpg";
import truecaller from "../assets/truecaller.png";
import serum from "../assets/serum.png";

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const newsItems = [
    {
      title:
        "Serum Institute Pune and Bharat Biotech Hyderabad facilities in Feb 2021",
      description:
        "Chinese hackers target Indian vaccine makers SII, Bharat Biotech, says security firm. Goldman Sachs-backed Cyfirma identified critical vulnerabilities in the IT infrastructure and supply chain software of major vaccine manufacturers.",
      date: "Mar 01, 2021",
      image: serum,
      category: "Vulnerability Exploitation",
      readTime: "5 min read",
    },
    {
      title: "Hyderabad Power Distribution in Feb 2021",
      description:
        "A China-based hacking group has tried to attack the Telangana State Load Dispatch Centre (SLDC) of Transmission Corporation of Telangana Limited (TSTRANSCO). Swift response from CERT-in helped prevent potential infrastructure damage.",
      date: "Mar 02, 2021",
      image: hyderabad,
      category: "Malware",
      readTime: "4 min read",
    },
    {
      title: "Mumbai Power Distribution in Q4 2020",
      description:
        "Mumbai Cyber Police investigation reveals potential cyber attack behind the October 12, 2020 power outage. Analysis shows sophisticated Trojan deployment targeting critical infrastructure.",
      date: "Mar 21, 2021",
      image: mumbai,
      category: "Trojan Horse",
      readTime: "3 min read",
    },
    {
      title:
        "Bigbasket platform in Q3-2020 with user data of 20 million users compromised",
      description:
        "Bigbasket's user data of 20 million users was compromised in a massive data breach during Q3-2020. The leak exposed sensitive information including phone numbers, email IDs, passwords, and delivery addresses.",
      date: "Mar 01, 2021",
      image: bigbasket,
      category: "Vulnerability Exploitation",
      readTime: "6 min read",
    },
    {
      title:
        "PM Modi website hacked !!",
      description:
        "Prime Minister Narendra Modi's personal website was hacked in mid-2020, impacting approximately 500,000 users. The breach raised concerns about the vulnerability of high-profile targets.",
      date: "Mar 01, 2021",
      image: modi,
      category: "Unauthorized Access",
      readTime: "2 min read",
    },
    {
      title:
        "Haldiram’s faced a ransomware attack on its servers with a demand of USD 750,000",
      description:
        "Haldiram's faced a ransomware attack on its servers, with hackers demanding USD 750,000 for decryption. The attackers encrypted all files, data, applications, and systems..",
      date: "Mar 01, 2021",
      image: haldiram,
      category: "Ransomware",
      readTime: "3 min read",
    },
    {
      title:
        "Truecaller India database hacked in May 2020",
      description:
        "Truecaller India's database was hacked in May 2020, exposing details of 47 million subscribers. The stolen data became available for sale on the dark web.",
      date: "Mar 01, 2021",
      image: truecaller,
      category: "Unauthorized Access",
      readTime: "5 min read",
    },
    {
      title: "336 government websites hacked between 2017 and 2019",
      description:
        "Between 2017 and 2019, 336 government websites were hacked, highlighting vulnerabilities in public sector cybersecurity. The incidents underscored the need for improved digital security measures..",
      date: "Mar 01, 2021",
      image: govt,
      category: "Vulnerability Exploitation",
      readTime: "7 min read",
    },
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, newsItems.length]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Vulnerability Exploitation":
        return <Shield className="w-5 h-5" />;
      case "Malware":
        return <AlertTriangle className="w-5 h-5" />;
      case "Trojan Horse":
        return <Zap className="w-5 h-5" />;
      case "Unauthorized Access":
        return <ShieldAlert className="w-5 h-5" />;
      case "Ransomware":
        return <BadgeAlert className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen  ">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Security Alert Hub</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Critical Security
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Updates
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Stay informed about high-priority security incidents and cyber
            threats affecting critical infrastructure
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[450px] overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full"
              >
                <div className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="flex flex-col lg:flex-row h-full">
                    <div className="relative w-full lg:w-1/2 h-72 lg:h-full overflow-hidden">
                      <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"
                      />
                      <motion.img
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 10 }}
                        src={newsItems[currentIndex].image}
                        alt={newsItems[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-6 left-6 z-20">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-full shadow-lg"
                        >
                          {getCategoryIcon(newsItems[currentIndex].category)}
                          <span className="font-semibold text-sm">
                            {newsItems[currentIndex].category}
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    <div className="relative flex-1 p-8 lg:p-12">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-6 mb-6"
                      >
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium">
                            {newsItems[currentIndex].date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium">
                            {newsItems[currentIndex].readTime}
                          </span>
                        </div>
                      </motion.div>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                      >
                        {newsItems[currentIndex].title}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-600 text-lg leading-relaxed mb-8"
                      >
                        {newsItems[currentIndex].description}
                      </motion.p>

                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="w-60 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 group transition-all duration-300 shadow-md hover:shadow-xl"
                      >
                        <span>Read Full Coverage</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-6 left-1/4 -translate-x-1/2 flex items-center gap-4 z-20">
            {newsItems.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-400 ${
                  index === currentIndex ? "bg-sky-300 w-8" : "bg-teal-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
