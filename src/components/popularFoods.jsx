import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

const foodItems = [
  {
    title: "VEGETABLES BURGER",
    description: "Barbecue Italian cuisine pizza",
    image: "/classic-burger-with-beef-cutlet-vegetables-onions-isolated-white-background 1.png",
  },
  {
    title: "SPACIAL PIZZA",
    description: "Barbecue Italian cuisine pizza",
    image: "/pizza 1.png",
  },
  {
    title: "SPACIAL FRENCH FRIES",
    description: "Barbecue Italian cuisine",
    image: "/Frame 1707478074.png",
  },
  {
    title: "CUISINE CHICKEN",
    description: "Japanese Cuisine Chicken",
    image: "/Frame 1707478074 (1).png",
  },
  {
    title: "VEGETABLES BURGER",
    description: "Barbecue Italian cuisine pizza",
    image: "/classic-burger-with-beef-cutlet-vegetables-onions-isolated-white-background 1.png",
  },
  {
    title: "SPACIAL PIZZA",
    description: "Barbecue Italian cuisine pizza",
    image: "/pizza 1.png",
  },
  {
    title: "SPACIAL FRENCH FRIES",
    description: "Barbecue Italian cuisine",
    image: "/Frame 1707478074.png",
  },
  {
    title: "CUISINE CHICKEN",
    description: "Japanese Cuisine Chicken",
    image: "/Frame 1707478074 (1).png",
  },
];

export default function FoodCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);
  
    const updateTranslateValue = () => {
      const screenWidth = window.innerWidth;
  
      if (screenWidth < 576) {
        setTranslateValue(currentIndex * 100); // Mobile view (100% per slide)
      } else if (screenWidth < 768) {
        setTranslateValue(currentIndex * 50); // Tablet view (50% per slide)
      } else if (screenWidth < 1024) {
        setTranslateValue(currentIndex * 33.33); // Small desktop view (33.33% per slide)
      } else {
        setTranslateValue(currentIndex * 25); // Large desktop view (25% per slide)
      }
    };
  
    useEffect(() => {
      updateTranslateValue();
      window.addEventListener('resize', updateTranslateValue);
  
      return () => window.removeEventListener('resize', updateTranslateValue);
    }, [currentIndex]); // Add currentIndex as a dependency
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + foodItems.length) % foodItems.length
      );
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }, []);
  

  return (
    <section className="bg-[#FBF7F2]">
        <div className="w-full max-w-7xl mx-auto px-4 py-10 md:py-20 relative">
      <div className="text-start mb-8">
        <p className="text-[#B52B1D] font-semibold text-xl mb-2">Crispy, Every Bite Taste</p>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#181818]">POPULAR FOOD ITEMS</h2>
      </div>

      <div className="overflow-hidden mb-20 md:mb-0 md:my-20 w-full">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${translateValue}%)` }}
        >
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 px-2 flex-shrink-0"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden py-10">
                <div className="w-full flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-40 h-40"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-1/3 md:left-[40%] lg:left-[87%] bottom-4 md:-bottom-4 lg:bottom-0 lg:-top-80 flex gap-6 items-center">
          <button
            onClick={prevSlide}
            className=" transform -translate-y-1/2 bg-white rounded-full p-4 shadow-md"
            aria-label="Previous slide"
          >
            <FaAngleLeft className="text-2xl  " />
          </button>
          <button
            onClick={nextSlide}
            className=" border transform -translate-y-1/2 bg-white rounded-full p-4 shadow-md"
            aria-label="Next slide"
          >
            <FaAngleRight className="text-2xl text-[#B52B1D]" />
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}
