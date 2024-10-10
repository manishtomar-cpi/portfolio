import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-64">
      {" "}
      {/* Fixed width using Tailwind */}
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
  const initialParagraphsToShow = 1; // Initial number of paragraphs to display
  const [paragraphsToShow, setParagraphsToShow] = useState(
    initialParagraphsToShow
  );

  const content = [
    "I am a creative problem-solving software engineer, dedicated to developing impactful solutions in HealthTech, IoT, embedded systems, and full-stack development. I am currently pursuing an MSc in Software Engineering at Cardiff University with Placement and working as a Software Engineer - Placement Student at CPI UK. As a Placement Student, I contribute to the NHS 5G Test Bed project, integrating AWS IoT with embedded sensors and IoT devices, while developing cross-platform applications using .NET and C#, and modern web applications with Next.js 14.",

    "I am also working on the 'NetStick' project, where I work with embedded systems using the ESP32-S3 board, developing firmware to capture images with a camera module and transmit them to AWS S3. This project involves real-time IoT dashboards, end-to-end Wi-Fi to cloud integration, and AWS services such as IoT Core, Lambda, and DynamoDB, merging embedded technology with cloud infrastructure.",

    "Previously, I interned at ThinkEdi UK, where I developed MERN stack web applications. At Moondive India, I built and deployed real estate platforms on AWS EC2, integrating machine learning by creating a property recommendation model. My passion lies in utilizing embedded systems, cloud computing, full-stack development, and machine learning to develop impactful solutions in healthcare and IoT.",
  ];

  const showFullContent = paragraphsToShow >= content.length;

  const toggleContentDisplay = () => {
    if (showFullContent) {
      setParagraphsToShow(initialParagraphsToShow);
    } else {
      setParagraphsToShow(content.length);
    }
  };

  const displayedContent = content.slice(0, paragraphsToShow);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {displayedContent.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
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
              aria-expanded={showFullContent}
              className="text-secondary text-[16px] underline cursor-pointer"
              onClick={toggleContentDisplay}
            >
              {showFullContent ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </motion.div>

      {/* Services Section */}
      <div className="mt-20 flex space-x-10 overflow-x-auto pb-4 scrollbar-hide">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
