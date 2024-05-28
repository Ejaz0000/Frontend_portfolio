
import React, { useState } from 'react'
import { motion } from "framer-motion"


const Skill = ({title,percent}) => {
    const [count, setCount] = useState(0);
    var wid = percent.toString() + "%";
  return (
    <>
    <div className='w-[160px] lg:w-[250px]'>
        <div className='flex w-full justify-between text-[#EEEEEE] text-md lg:text-lg font-medium'>
          <p>
            {title}
          </p>
          <motion.div
          whileInView={{
          count:percent,
          }}
          transition={{
           duration: 1.2, 
           ease: "easeInOut"
            }}    
         onUpdate={(latest) => setCount(Math.floor(latest.count))}
          >  
            {count}%
          </motion.div>
        </div>
        <div className='h-[30px] w-full border-4 border-[#00ADB5] bg-transparent rounded-md flex justify-start'>
          <motion.div
             initial={{ width: 0 }}
             whileInView={{ width: wid }}
           transition={{
           duration: 1.2, 
           ease: "easeInOut"
            }}
           className='bg-[#00ADB5] h-full'>
           </motion.div>
        </div>

      </div>
    </>
  )
}

export default Skill