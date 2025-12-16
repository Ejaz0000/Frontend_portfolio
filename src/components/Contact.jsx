
import React, { useRef } from 'react'
import contact from '../assets/contact-arrow.png'
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5ste4zs', 'template_3pwwahc', form.current, {
        publicKey: '9ENnsc9dV0RQfeanC',
      })
      .then(
        () => {
          alert('Email is Successfully Sent!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='container mx-auto px-4 lg:px-0'>
      <div className='flex flex-col lg:flex-row justify-center items-center  lg:gap-[200px] mt-[250px] mb-[200px]'>
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
      <span className="shadows-into-light-regular text-4xl lg:text-8xl font-bold mb-4">Contact Me </span>
      </motion.div>
      <img className="w-[350px]" src={contact} alt='contact'/>
     </div>

     </div>
     <div>
      {/*  */}
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
         <div>
         <p className='text-[#EEEEEE] text-lg mb-2 font-semibold'>Your Name</p>
         <input type='text' className="px-4 py-3 rounded-lg bg-[#333841]  text-[16px] font-bold" name="user_name" placeholder='Name'/>
         </div>
         <div>
         <p className='text-[#EEEEEE] text-lg mb-2 font-semibold'>Your Email</p>
         <input type='email' className="px-4 py-3 rounded-lg bg-[#333841]  text-[16px] font-bold" name="user_email" placeholder='Email'/>
         </div>
        </div>
        <div className="mt-3">
        <p className='text-[#EEEEEE] text-lg mb-2 font-semibold'>Your Message</p>
        <textarea
        name="message"
        className="resize-none h-80 w-full px-4 py-3 rounded-lg bg-[#333841]  text-[16px] font-bold "
        placeholder='Write your message...'
        />
        
        </div>
        <button
          type="submit"
          className="bg-[#00ADB5] text-white w-full lg:w-1/3 font-bold py-2 px-4 rounded mt-3"
        >
          Send Messeage
        </button>
        </form>
       {/*  */}
     </div>
    </div>
    </div>
  )
}

export default Contact