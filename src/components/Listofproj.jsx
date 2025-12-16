import React from 'react'
import Projects from './Projects'
import { projects } from '../constants'
import { motion } from "framer-motion"

import arrow2 from '../assets/arrow02.png'
import proj from '../assets/projects.png'

export const Listofproj = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 mt-[100px] ">  

      <div className="flex justify-center gap-2">
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
      <span className="shadows-into-light-regular text-4xl lg:text-6xl font-bold">Personal Projects </span>
      </motion.div>
      <div className="mt-4">
      <img className="w-[50px] lg:w-[70px]" src={arrow2} alt='me'/>
      </div>
    </div>


        {projects.map((proj,index)=>(
            <div key={index}>
            <Projects proj={proj} index={index}/>
            </div>
        ))}
          
    </div>
  )
}


