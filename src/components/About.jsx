import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-64"> {/* Fixed width using Tailwind */}
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
          <h3 className="text-white text-[20px] font-bold text-center whitespace-normal">
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
    "I am a dedicated and innovative software engineer with hands-on experience in full-stack development, IoT, and cloud technologies. Currently, I am contributing to the 5G Test Bed project for the NHS at CPI UK, where I focus on integrating IoT devices and sensors with AWS IoT, building robust web and mobile applications using C#, .NET MAUI, and Next.js, and managing data through Google Firebase and Amazon DynamoDB. My role also involves leveraging DevOps practices with tools like Docker and Jenkins to ensure seamless deployment and operations.";

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

      {/* Updated Section */}
      <div className="mt-20 flex space-x-10 overflow-x-auto pb-4 scrollbar-hide">
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
</div>

    </>
  );
};

export default SectionWrapper(About, "about");
