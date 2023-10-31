import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Array of skills</p>
      <h2 className={`${styles.sectionHeadText} mb-5`}>My Expertise.</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-28 h-28 rounded-lg text-white flex items-center justify-center" style={{ backgroundColor: "#1d1836" }} key={technology.name}>
            <img src={technology.icon} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
