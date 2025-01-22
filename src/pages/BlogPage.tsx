import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cosmos from "../assets/cosmos.png";
import zomato from "../assets/zomato.png";
import power from "../assets/power.png";
import aiims from "../assets/aiims.png";
import aadhar from "../assets/aadhar.png";
import cyberthreat from "../assets/cyberthreat.png";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "The Cosmos Bank Cyber Heist",
      description:
        "In 2018, hackers siphoned off ₹94 crores through malware and ATM withdrawals across 28 countries.",
      image: cosmos,
      category: "Banking",
    },
    {
      id: 2,
      title: "Ransomware Attack on AIIMS",
      description:
        "In 2022, AIIMS suffered a major ransomware attack, disrupting healthcare services for weeks.",
      image: aiims,
      category: "Healthcare",
    },
    {
      id: 3,
      title: "The Zomato Data Breach",
      description:
        "In 2017, personal data of 17 million Zomato users was stolen and put up for sale on the dark web.",
      image: zomato,
      category: "E-commerce",
    },
    {
      id: 4,
      title: "Indian Power Grid Cyberattack",
      description:
        "In 2021, Chinese hackers targeted India's power grid infrastructure in a suspected espionage attempt.",
      image: power,
      category: "Infrastructure",
    },
    {
      id: 5,
      title: "The UIDAI Aadhaar Breach",
      description:
        "In 2018, sensitive Aadhaar data of millions of Indians was leaked, raising questions about data security.",
      image: aadhar,
      category: "Government",
    },
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="pt-16 bg-gray-50 pb-16">
        {/* Hero Section */}
        <div className="relative bg-blue-100 py-12">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
            <div className="md:w-1/2 text-center md:text-left">
              <motion.h1
                className="text-4xl font-bold text-blue-700 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Cyber Threats in India
              </motion.h1>
              <p className="text-lg text-blue-600">
                Discover how real-world cyberattacks unfolded in India and learn about their
                implications.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src={cyberthreat}
                alt="Cyber Security"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="container mx-auto px-4 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              {["All", "Banking", "Healthcare", "E-commerce", "Infrastructure", "Government"].map(
                (category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    } shadow-md hover:bg-blue-500 hover:text-white`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-blue-700">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
