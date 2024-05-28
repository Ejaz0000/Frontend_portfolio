import React from 'react'
import arrow2 from '../assets/arrow02.png'
import proj from '../assets/projects.png'
import skill from '../assets/skills.png'
import { motion } from "framer-motion"
import { lang } from '../constants'
import { Framework } from '../constants'
import { tools } from '../constants'
import Skill from './skill'
import { Percent } from 'lucide-react'


const Skills = () => {
  return (
    <div className="mt-[180px]">
     <div className="flex justify-center gap-2">
      <motion.div
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{
        duration: 2, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }}
      >
      <img className="w-[140px] lg:w-[190px]" src={skill} alt='me'/>
      </motion.div>
      <div className="mt-4">
      <img className="w-[50px] lg:w-[70px]" src={arrow2} alt='me'/>
      </div>
    </div>
     <div className='my-[100px] w-[98%] lg:w-[70%] mx-auto'>

    
    
    <div className="mt-[50px] flex flex-wrap justify-center lg:justify-start  gap-4 lg:gap-16">
     {lang.map((l,index)=>(
        <div key={index}>
          <Skill title={l.title} percent={l.percent}/>
        </div>
     ))}
    </div>

    <div className="mt-[50px] flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-16">
     {Framework.map((f,index)=>(
        <div key={index}>
          <Skill title={f.title} percent={f.percent}/>
        </div>
     ))}
    </div>

    <div className="mt-[50px] flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-16">
     {tools.map((t,index)=>(
        <div key={index}>
          <Skill title={t.title} percent={t.percent}/>
        </div>
     ))}
    </div>
    </div>
    </div>
  )
}

export default Skills