import React from 'react'
import contact from '../assets/contact-arrow.png'
import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <div className='container mx-auto px-4'>
    <div className='flex flex-col lg:flex-row justify-center   lg:gap-[200px] mt-[250px] mb-[200px]'>
     <div className='hidden lg:block'>
     <div>
      <motion.div
      className='-rotate-12'
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{
        duration: 2, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }}
      >
      <span className="shadows-into-light-regular text-4xl lg:text-6xl font-bold mb-4">About Me </span>
      </motion.div>
      <img className="w-[250px]" src={contact} alt='contact'/>
     </div>

     </div>
     <div className='max-w-[800px] text-justify text-base lg:text-2xl text-[#CCCCCC] flex flex-col gap-6 p-6 border-8 border-[#00ADB5] rounded-xl'>
        <span className="shadows-into-light-regular text-4xl font-bold mb-4 lg:hidden">About Me </span>
        <p>
            I am a <strong>dedicated software engineer</strong> with a strong passion for building 
            <strong> innovative</strong> and <strong>interactive software solutions</strong>. I bring
            <strong> hands-on experience</strong> in <strong>mobile</strong>, <strong>desktop</strong>,
            and <strong>web application development</strong>, supported by
            <strong> 1 year of professional experience</strong> and over
            <strong> 3 years of practical full-stack web development</strong>.
            </p>

            <p>
            Throughout my journey, I have worked with a diverse set of
            <strong> modern frameworks and technologies</strong>, including
            <strong> Next.js</strong>, <strong> Flutter</strong>, <strong> Express</strong>,
            <strong> Electron.js</strong>, and <strong> Django</strong>. I am actively seeking
            <strong> opportunities</strong> where I can contribute my skills to
            <strong> impactful projects</strong>, while continuously learning from the industry
            to further <strong> enhance my technical expertise</strong>.
            </p>

     </div>
    </div>
    </div>
  )
}

export default AboutSection