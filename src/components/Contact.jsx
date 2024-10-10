import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaFilePdf } from "react-icons/fa";

import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import resume from "../assets/resume.pdf"; // Import the resume file

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOkButtonClick = () => {
    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_kj8er7n",
        "template_7yjcrh",
        {
          from_name: form.name,
          to_name: "Manish",
          from_email: form.email,
          to_email: "manishtomar.uk@gmail.com",
          message: form.message,
        },
        "__VeVc5QpZxBesMFv"
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMessage("Message sent successfully!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setSuccessMessage("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="flex ">
          <div>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.linkedin.com/in/manishtomar1/"
                className="cursor-pointer"
                target="_blank"
              >
                <FaLinkedin size={35} color="#0077B5" />
              </a>
              <a
                href="https://github.com/manishtomarr1"
                className="cursor-pointer"
                target="_blank"
              >
                <FaGithub size={35} color="#333" />
              </a>
              <a
                href="https://www.instagram.com/_tomarmanish/"
                className="cursor-pointer"
                target="_blank"
              >
                <FaInstagram size={35} color="#E4405F" />
              </a>
              <a
                href={resume}
                download="Manish_Resume.pdf"
                className="cursor-pointer"
              >
                <FaFilePdf size={35} color="#FF5722" />
              </a>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {successMessage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-primary p-8 rounded-lg">
              <p className="text-center text-xl mb-4">{successMessage}</p>
              <button
                onClick={handleOkButtonClick}
                className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
