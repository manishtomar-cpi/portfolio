import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
const Tech = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [displayedSkills, setDisplayedSkills] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobileOrTablet(screenWidth < 768); // Assuming < 768px is mobile/tablet
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSkillsDisplay = () => {
    console.log("clicked")
    setDisplayedSkills((prevSkills) =>
      prevSkills === 4 ? technologies.length : 4
    );
  };

  const visibleTechnologies = technologies.slice(0, displayedSkills);

  return (
    <>
      <p className={styles.sectionSubText}>Array of skills</p>
      <h2 className={`${styles.sectionHeadText} mb-5`}>My Expertise.</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {visibleTechnologies.map((technology, index) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      {isMobileOrTablet && (
        <div className="flex justify-center mt-3" onClick={toggleSkillsDisplay}>
          <button className="text-secondary text-[16px] underline cursor-pointer mt-4" onClick={toggleSkillsDisplay}>
            {displayedSkills === 4 ? "View More" : "View Less"}
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");
