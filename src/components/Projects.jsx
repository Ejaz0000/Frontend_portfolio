import React, { useState } from 'react'
import { motion } from "framer-motion"


const Projects = ({proj,index}) => {
    const [focus,setFocus]= useState(false);
    console.log(index)
  return (
    <div className='my-[200px] px-[10px] lg:px-[200px]'>
        <div className={`flex ${index % 2 === 0 ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'} items-center lg:justify-start my-10 gap-24`} onMouseEnter={()=>setFocus(true)} onMouseLeave={()=>setFocus(false)} onTouchStart={()=>setFocus(true)}>

            <div className="relative">
            <motion.div
                animate={{ scale: focus ? 0.8 : 1}}
                transition={{
                duration: 1, 
                ease: "easeInOut"
                 }}
                className="absolute -z-10 h-[30px] w-[40px] lg:h-[80px] lg:w-[100px] bg-[#00ADB5] top-[-20px] left-[-35px] lg:top-[-40px] lg:left-[-65px]">
            </motion.div>

            <motion.div
            animate={{ scale: focus ? 1.2 : 1}}
            transition={{
            duration: 1, 
            ease: "easeInOut"
             }}
             className="h-[150px] lg:h-[250px] w-[280px] lg:w-[480px] border-2 border-[#00ADB5] bg-transparent">
              <img className='h-full w-full' src={proj.image} alt='arrow1'/>
            </motion.div>

            <motion.div
             animate={{ scale: focus ? 0.8 : 1}}
             transition={{
             duration: 1, 
             ease: "easeInOut"
              }}
            className="absolute h-[30px] w-[40px] lg:h-[60px] lg:w-[80px] border-8 border-[#00ADB5] bg-transparent bottom-[-20px] right-[-35px] lg:bottom-[-30px] lg:right-[-55px]">
            </motion.div>
            </div>
            <div>
            <h1 className="text-[#00ADB5] text-4xl font-bold">{proj.title}</h1>
            <p className="text-[#EEEEEE] text-md lg:text-lg mt-8 mb-6 font-medium lg:font-semibold">{proj.description}</p>
            <div className='flex justify-start'>
            <div  className="flex relative border-4 border-[#00ADB5] bg-transparent pt-3 pb-2 px-3 rounded-lg gap-2">
            <div className="text-[#00ADB5] bg-[#222831] text-lg font-semibold absolute top-[-15px] left-[5px]  w-[100px]">Tools used</div>
            
            {proj.tools.map((tool,index)=>(
                <div key={index} className="bg-[#333841] py-2 px-3 text-[14px] font-bold rounded-xl">{tool}</div>
            )
            )}
            </div>
            </div>

            <div className='flex justify-start mt-6 gap-3'>
            <div className="flex">
            <a href={proj.visit} className="bg-[#00ADB5] py-3 px-4 text-[16px] font-bold rounded-xl flex flex-shrink-1 items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
              <span>Click to visit</span> 
              </a>
            </div>
            <div className="flex">
            <a href={proj.code} className="bg-[#EEEEEE] py-3 px-4 text-[#222831] text-[16px] font-bold rounded-xl flex flex-shrink-1 items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span>Source code</span> 
              </a>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Projects