import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 45,
          }}
          className="bg-tertiary rounded-[20px] 
        py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const initialCharLimit = 200; // Initial character limit to display
  const [charLimit, setCharLimit] = useState(initialCharLimit);
  const content =
    "Experienced Software Development Engineer with a proven track record at MoonDive, India, and currently pursuing a Master's in Software Engineering at Cardiff University, UK. Adept at leveraging the MERN stack, including Next.js, Tailwind CSS, Material UI and Cloud Computing, to craft efficient and visually appealing web applications. Proficient in data science, Strong proficiency in Data Structures and Algorithms (DSA) alongside expertise in C++, enhancing software development capabilities. Possesses a solid educational background with a Master's in Computer Applications and a Bachelor's in Computer Applications, providing a robust foundation for software engineering and development. Committed to delivering high-quality, scalable solutions to meet diverse business needs.";

  const showFullContent = charLimit === content.length;

  const toggleContentDisplay = () => {
    if (showFullContent) {
      setCharLimit(initialCharLimit);
    } else {
      setCharLimit(content.length);
    }
  };

  const displayContent = content.slice(0, charLimit);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {displayContent}
        {!showFullContent && (
          <div className="mt-2">
            <button
              className="text-secondary text-[16px] underline cursor-pointer"
              onClick={toggleContentDisplay}
            >
              View More
            </button>
          </div>
        )}
        {showFullContent && (
          <div className="mt-2">
            <button
              className="text-secondary text-[16px] underline cursor-pointer"
              onClick={toggleContentDisplay}
            >
              View Less
            </button>
          </div>
        )}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
