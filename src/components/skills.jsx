import React from "react";
import arrow2 from "../assets/arrow02.png";
import proj from "../assets/projects.png";
import skill from "../assets/skills.png";
import { motion } from "framer-motion";
import { lang } from "../constants";
import { Framework } from "../constants";
import { tools } from "../constants";
import Skill from "./skill";
import underline from "../assets/underline.png";
import { Code, Figma, Server, TabletSmartphone } from "lucide-react";

const Skills = () => {

  const skills = [
  {
    category: "UI/UX",
    icon: Figma,
    items: [
      "Hands-on experience using Figma to design user-focused, creative, and modern interfaces",
      "Created wireframes, high-fidelity designs, and reusable UI components in Figma",
      "Built responsive designs optimized for desktop, tablet, and mobile devices",
    ] 
  },
  {
    category: "Web Development",
    icon: Code,
    items: [
      "Developed SEO-friendly, high-performance web applications using Next.js, React.js, and TypeScript",
      "Built full-stack web solutions using Next.js with Django, Node.js, and Express.js",
      "Implemented secure authentication systems, admin dashboards, and role-based access control",
      "Integrated RESTful APIs and third-party services for payments and dynamic features",
      "Optimized applications for performance, scalability, and cross-browser compatibility",
      "Worked with MongoDB and MySQL for efficient data management"
    ]
  },
  {
    category: "App Development",
    icon: TabletSmartphone,
    items: [
      "Developed cross-platform desktop applications using Electron.js with offline and online support",
      "Built cross-platform and mobile applications using Flutter and Dart",
      "Ensured consistent UI and performance across Windows, macOS, and mobile platforms",
      "Integrated APIs and local storage for real-world application use cases"
    ]
  },
  {
    category: "DevOps",
    icon: Server,
    items: [
      "Used Git and GitHub for version control, collaboration, and code reviews",
      "Implemented basic CI/CD pipelines for automated build and deployment",
      "Worked with Docker for containerized development environments",
      "Familiar with cloud services and application deployment workflows",
      "Leveraged AI-powered development tools like GitHub Copilot to accelerate development"
    ]
  }
]
  return (
    <div className="container mx-auto px-4 lg:px-16 mt-[180px]">
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
          <span className="shadows-into-light-regular text-4xl lg:text-6xl font-bold mb-2">
            Skills{" "}
          </span>
        </motion.div>

        <img className="w-[250px]" src={underline} alt="contact" />
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="2xl:col-span-8 xl:col-span-7 lg:col-span-6 col-span-12">

          {
            skills.map((skillCategory, index) => (
              <div key={index} className="mb-8">
                <div className=" border-[#333841] pb-2 border-b-4 mb-4 w-fit flex gap-2">
                  <skillCategory.icon color="#078086"/>
                  
                  <p className="text-lg lg:text-xl font-bold text-[#00ADB5]">{skillCategory.category}</p>

                </div>

                <ul className="list-disc list-inside text-[#EEEEEE] mb-6 space-y-2">
                    {
                      skillCategory.items.map((item, index) => (
                        <li key={index} className="text-base lg:text-lg">
                          {item}
                        </li>
                      ))
                    }
                  </ul>
              </div>
            ))
          }
          
        </div>

        <div className="2xl:col-span-4 xl:col-span-5 lg:col-span-6 col-span-12">
          <div className="px-2 py-4 border-8 border-[#333841] rounded-xl">

            <div className=" border-[#333841] pb-2 border-b-4 mb-4">
              <p className="text-base lg:text-lg font-bold text-[#00ADB5]">Programming Languages</p>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {lang.map((l, index) => (
                <div className="col-span-6" key={index}>
                  <Skill title={l.title} percent={l.percent} />
                </div>
              ))}
            </div>

            <div className=" border-[#333841] pb-2 border-b-4 mt-6 mb-4">
              <p className="text-base lg:text-lg font-bold text-[#00ADB5]">Tools & Libraries</p>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {Framework.map((f, index) => (
                <div className="col-span-6" key={index}>
                  <Skill title={f.title} percent={f.percent} />
                </div>
              ))}
            </div>

            <div className=" border-[#333841] pb-2 border-b-4 mt-6 mb-4">
              <p className="text-base lg:text-lg font-bold text-[#00ADB5]">Frameworks</p>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {tools.map((t, index) => (
                <div className="col-span-6" key={index}>
                  <Skill title={t.title} percent={t.percent} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
