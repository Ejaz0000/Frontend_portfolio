import React from "react";
import { motion } from "framer-motion";
import underline from "../assets/underline.png";
import VerticalBulletList from "./VerticalBulletList";

const Experience = () => {

  const experiences = [
    {
      company: "Microdeft",
      position: "Frontend Developer",
      years: "1+ Years",
      responsibilities: [
        "Built and maintained interactive, SEO-friendly eCommerce, blog, and chat-based websites using Next.js.",
        "Collaborated with designers and backend developers to create responsive, user-focused interfaces.",
        "Focused on technical SEO, optimized performance, and ensured cross-browser compatibility.",
        "Developed cross-platform desktop applications using Electron.js to deliver seamless offline and online functionality.",
      ],
    },
    {
      company: "Bird's Nest Cloud",
      position: "Full Stack Developer",
      years: "6-Month Contract",
      responsibilities: [
        "Developed and maintained a responsive, SEO-optimized eCommerce web application with secure user authentication using Next.js and Django.",
        "Implemented an admin panel to manage products, users, and orders efficiently.",
        "Ensured cross-device compatibility and optimized performance for an improved user experience.",
      ],
    },
  ]
  return (
    <section id="experience" className="container mx-auto px-4 lg:px-16 pt-[100px] pb-[150px]">
      <div className="mb-16">
        <motion.div
          className="-rotate-12 max-w-fit"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <span className="shadows-into-light-regular text-4xl lg:text-6xl font-bold mb-4">
            Experience{" "}
          </span>
        </motion.div>

        <img className="w-[350px]" src={underline} alt="contact" />
      </div>

      {experiences.map((exp, index) => (
        <div className="mb-12" key={index}>
        <motion.div
          initial={index % 2 !== 0 ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`flex ${index % 2 !== 0 ? "justify-end" : "justify-start"} `}
        >
          <VerticalBulletList
            title={exp.company}
            items={exp.responsibilities}
            poisition={exp.position}
            years={exp.years}
          />
        </motion.div>
      </div>
      ))}

      


    </section>
  );
};

export default Experience;
