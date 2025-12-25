import React from 'react'
import { motion } from "framer-motion"
import me from '../assets/me.png'
import arrow1 from '../assets/arrow01.png'

import { Download} from 'lucide-react'
import CV from '../assets/Ejaz Ahmed Resume.pdf'



const HeroSec = () => {
  return (
    <div className='container mx-auto px-4'>
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-[100px] my-[120px] lg:my-[200px]">
        <div className="flex justify-start items-center">
            <div className="mt-6 lg:block"><img className='h-[100px] lg:h-full w-8 lg:w-full' src={arrow1} alt='arrow1'/></div>
            <div>
            <h1 className="text-[#EEEEEE] text-4xl lg:text-8xl font-bold">EJAZ AHMED</h1>
            <h2 className="text-[#EEEEEE] text-lg lg:text-4xl"><span className="text-[#00ADB5] text-2xl lg:text-6xl font-bold">SOFTWARE</span> Engineer</h2>
            <div className="mt-10 flex justify-start">
            <a href={CV} download="Resume" className="bg-[#333841] py-2 lg:py-3 px-3 lg:px-4 text-[18px] lg:text-[22px] font-bold rounded-xl flex flex-shrink-1 items-center gap-2">
              <span>Download CV</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              </a>
            </div>
            </div>
        </div>


        <div className="flex justify-center items-center">
          <div className="relative h-[168px] lg:h-[288px] w-[280px] lg:w-[450px] p-[40px]">
        <motion.div
         animate={{ scale: [1.1, 1, 1.1] }}
          transition={{
            duration: 2, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
         className="absolute h-[40px] lg:h-[60px] w-[50px] lg:w-[80px] border-4 border-[#00ADB5] bg-transparent top-[20px] lg:top-[10px] left-[20px] lg:left-[0]">
          </motion.div>


            <div className="relative overflow-y-visible w-full h-full  border-8 border-[#00ADB5] bg-transparent">
            <img className="absolute bottom-0 h-[185px] lg:h-[355px] object-contain" src={me} alt='me'/>
            </div>


        <motion.div
         animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 2, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
         className="absolute h-[20px] lg:h-[40px] w-[25px] lg:w-[50px] bg-[#00ADB5] bottom-[20px] lg:bottom-[30px] right-[20px] lg:right-[10px]">
         </motion.div>

        </div>
        </div>
    </div>
  
    </div>
  )
}

export default HeroSec



 