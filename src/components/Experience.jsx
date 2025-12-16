import React from "react";
import { motion } from "framer-motion";
import underline from "../assets/underline.png";

const Experience = () => {
  return (
    <div className="container mx-auto px-4 lg:px-16 pt-[100px] pb-[200px]">
      <div>
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

      <div className="mt-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-lg p-8 mb-6"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#00ADB5]">
              Microdeft
            </h3>
            <span className="text-lg font-semibold text-[#00ADB5]">Present (1+ Year)</span>
          </div>

          <ul className="space-y-3 text-gray-200 text-base lg:text-lg">
            <li className="flex gap-3">
              <span className="text-[#00ADB5] font-bold">•</span>
              <span>Built and maintained interactive, SEO-friendly eCommerce, blog, and chat-based websites using Next.js.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#00ADB5] font-bold">•</span>
              <span>Collaborated with designers and backend developers to create responsive, user-focused interfaces.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#00ADB5] font-bold">•</span>
              <span>Focused on technical SEO, optimized performance, and ensured cross-browser compatibility.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#00ADB5] font-bold">•</span>
              <span>Developed cross-platform desktop applications using Electron.js to deliver seamless offline and online functionality.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
