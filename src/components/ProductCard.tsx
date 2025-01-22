import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  videoUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  videoUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-64 w-full rounded-xl overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30 animate-gradient-x" />

      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <motion.video
          animate={{ opacity: isHovered ? 0.3 : 1 }}
          transition={{ duration: 0.5 }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </motion.video>

        <div className="relative h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.h2
                key="title"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-white text-2xl font-bold text-center px-4 drop-shadow-lg"
              >
                {title}
              </motion.h2>
            ) : (
              <motion.div
                key="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="max-w-md p-6"
              >
                <p className="text-white text-center text-lg">{description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const ProductCardGrid: React.FC<{ cards: ProductCardProps[] }> = ({
  cards,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="w-full">
            <ProductCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

const style = document.createElement("style");
style.textContent = `
  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 3s linear infinite;
  }
`;
document.head.appendChild(style);

export { ProductCard, ProductCardGrid };
