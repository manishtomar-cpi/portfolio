import React, { useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  const scrollContainerRef = useRef(null);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: window.innerWidth, // Scroll by the width of the viewport
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <p className={styles.sectionSubText}>Array of skills</p>
      <h2 className={`${styles.sectionHeadText}`}>My Expertise.</h2>

      <div className="flex items-center">
        <div
          className="overflow-x-auto overflow-y-hidden flex space-x-8 snap-x snap-mandatory scrollbar-hide h-[60vh] w-screen"
          ref={scrollContainerRef}
        >
          {technologies.map((techCategory, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-full flex flex-col items-start"
              style={{ minWidth: "100%", maxHeight: "100%", marginBottom: "20px" }}
            >
              <h3 className="text-white text-[20px] font-bold mb-4 text-left">
                {techCategory.category}
              </h3>
              <div
                className="flex flex-wrap justify-start gap-4 overflow-y-auto"
                style={{ maxHeight: "60vh" }} // Set max height for items
              >
                {techCategory.skills.map((technology) => (
                  <div
                    className="w-28 h-28 flex flex-col items-center justify-center text-white"
                    key={technology.name}
                  >
                    <div
                      className="w-20 h-20 mb-2 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#1d1836" }}
                    >
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                    <p className="text-center text-sm font-medium">{technology.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
  onClick={handleScrollRight}
  className="text-white p-2 bg-gray-800 rounded-full ml-4 hover:animate-slide-right"
>
  &#8594; {/* Right arrow */}
</button>

      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
