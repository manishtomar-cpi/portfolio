import { motion } from "framer-motion";
// import { FaLinkedin, FaInstagram, FaGithub, FaFilePdf } from 'react-icons/fa';


import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] 
     max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Manish</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a <br className="sm:block hidden" />
            Software Engineer.
          </p>
          {/* <div className="flex space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/manishtomar1/" className="cursor-pointer" target="_blank">
              <FaLinkedin size={35} color="#0077B5" />
            </a>
            <a href="https://github.com/manishtomarr1"className="cursor-pointer"target="_blank" >
              <FaGithub size={35} color="#333" />
            </a>
            <a href="https://www.instagram.com/_tomarmanish/"className="cursor-pointer" target="_blank" >
              <FaInstagram size={35} color="#E4405F" />
            </a>
            <a href="/assets/resume.pdf"  download="Manish_Resume.pdf"className="cursor-pointer" target="_blank">
              <FaFilePdf size={35} color="#FF5722" />
            </a>
          </div> */}
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
