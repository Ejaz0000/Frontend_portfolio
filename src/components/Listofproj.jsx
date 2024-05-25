import React from 'react'
import Projects from './Projects'
import { projects } from '../constants'

export const Listofproj = () => {
  return (
    <div className="mt-[100px]">  
        {projects.map((proj,index)=>(
            <div key={index}>
            <Projects proj={proj} index={index}/>
            </div>
        ))}
          
    </div>
  )
}


