import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => {
  const [showAllHighlights, setShowAllHighlights] = useState(false);

  const toggleHighlightsDisplay = () => {
    setShowAllHighlights(!showAllHighlights);
  };

  const displayHighlights = showAllHighlights
    ? education.highlights
    : education.highlights.slice(0, 1);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.institution_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.degree}</h3>
        <p className="text-secondary text-[16px] font-semibold">
          {education.institution_name}
        </p>
        <p className="text-secondary text-[16px] font-semibold">
          {education.date}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {displayHighlights.map((highlight, index) => (
          <li
            key={`education-highlight-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {highlight}
          </li>
        ))}
      </ul>
      {education.highlights.length > 1 && (
        <button
          className="text-secondary text-[16px] underline cursor-pointer mt-4"
          onClick={toggleHighlightsDisplay}
        >
          {showAllHighlights ? "View Less" : "View More"}
        </button>
      )}
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have achieved academically</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <div className="'mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
