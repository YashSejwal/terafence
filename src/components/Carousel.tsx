import { useState } from "react";
import { motion } from "framer-motion";

const carouselItems = [
  { id: 1, image: "/src/assets/carousel/banner1.png", title: "Slide 1" },
  { id: 2, image: "/src/assets/carousel/banner2.png", title: "Slide 2" },
  { id: 3, image: "/src/assets/carousel/banner3.png", title: "Slide 3" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);

  const prevSlide = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <motion.div
        className="flex"
        style={{
          width: `${carouselItems.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / carouselItems.length)}%)`,
        }}
        animate={{ x: -currentIndex * 100 }}
        transition={{ duration: 0.5 }}
      >
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className="flex-none w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-40 text-white text-4xl">
              {item.title}
            </div>
          </div>
        ))}
      </motion.div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#9664;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;