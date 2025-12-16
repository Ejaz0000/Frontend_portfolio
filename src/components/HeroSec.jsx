import React from 'react'
import { motion } from "framer-motion"
import me from '../assets/me.png'
import arrow1 from '../assets/arrow01.png'

import { Download} from 'lucide-react'
import CV from '../assets/Ejaz Ahmed Resume.pdf'



const HeroSec = () => {
  return (
    <div className='container mx-auto px-4 lg:px-0'>
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-[100px] lg:gap-[200px] my-[120px] lg:my-[200px]">
        <div className="flex justify-start items-center">
            <div className="mt-6 lg:block"><img className='h-[100px] lg:h-full w-8 lg:w-full' src={arrow1} alt='arrow1'/></div>
            <div>
            <h1 className="text-[#EEEEEE] text-4xl lg:text-8xl font-bold">EJAZ AHMED</h1>
            <h1 className="text-[#EEEEEE] text-lg lg:text-4xl"><span className="text-[#00ADB5] text-2xl lg:text-6xl font-bold">SOFTWARE</span> Engineer</h1>
            <div className="mt-10 flex justify-start">
            <a href={CV} download="Resume" className="bg-[#333841] py-2 lg:py-3 px-3 lg:px-4 text-[18px] lg:text-[22px] font-bold rounded-xl flex flex-shrink-1 items-center gap-2">
              <span>Download CV</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              </a>
            </div>
            </div>
        </div>
        <div className="relative">
        <motion.div
         animate={{ scale: [1.1, 1, 1.1] }}
          transition={{
            duration: 2, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
         className="absolute h-[40px] lg:h-[80px] w-[50px] lg:w-[110px] border-4 border-[#00ADB5] bg-transparent top-[-20px] lg:top-[-40px] left-[-20px] lg:left-[-60px]">
          </motion.div>


            <div className="relative overflow-y-visible h-[168px] lg:h-[288px] w-[280px] lg:w-[450px] border-8 border-[#00ADB5] bg-transparent">
            <img className="h-[290px] lg:h-[480px] mt-[-138px] lg:mt-[-208px] ml-[30px] lg:ml-[48px]" src={me} alt='me'/>
            </div>


        <motion.div
         animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 2, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
         className="absolute h-[20px] lg:h-[50px] w-[25px] lg:w-[60px] bg-[#00ADB5] bottom-[-10px] lg:bottom-[-30px] right-[-10px] lg:right-[-40px]">
         </motion.div>

        </div>
    </div>
  
    </div>
  )
}

export default HeroSec



 