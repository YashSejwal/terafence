import React from "react";
import { motion } from "framer-motion";

const StatCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
}> = ({ icon, title, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4"
  >
    {icon}
    <div>
      <p className="text-xs text-gray-500 uppercase">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </motion.div>
);

export default StatCard;