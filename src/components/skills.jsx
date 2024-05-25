import React from 'react'
import arrow2 from '../assets/arrow02.png'
import proj from '../assets/projects.png'
import skill from '../assets/skills.png'
import { motion } from "framer-motion"
import { lang } from '../constants'
import { Framework } from '../constants'
import { tools } from '../constants'


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
     <div className='my-[100px]'>
    <div className="mt-[50px] flex flex-wrap lg:flex-nowrap px-[10px] lg:px-[150px] justify-center gap-2 lg:justify-between">
     {lang.map((l,index)=>(
        <div className='flex flex-col items-center justify-center gap-2 text-slate-400'>
          {l.image}
          <p className="font-semibold text-xl">{l.title}</p>
        </div>
     ))}
    </div>

    <div className="mt-[50px] flex flex-wrap lg:flex-nowrap px-[10px] lg:px-[150px] justify-center gap-2 lg:justify-between">
     {Framework.map((f,index)=>(
        <div className='flex flex-col items-center justify-between gap-3 h-[130px] mb-10 text-slate-400'>
          {f.image}
          <p className="font-semibold text-xl">{f.title}</p>
        </div>
     ))}
    </div>

    <div className="mt-[50px] flex flex-wrap lg:flex-nowrap px-[10px] lg:px-[150px] justify-center gap-2 lg:gap-20">
     {tools.map((t,index)=>(
        <div className='flex flex-col items-center justify-center gap-2 text-slate-400'>
          {t.image}
          <p className="font-semibold text-xl">{t.title}</p>
        </div>
     ))}
    </div>
    </div>
    </div>
  )
}

export default Skills