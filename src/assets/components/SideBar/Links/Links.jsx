import React from 'react'
import {motion} from 'framer-motion'
function Links() {
  const items = ["Homepage","Projects","Contact Me","About Me"]
  const variants = {

    normal:{
      scale:1
    },

    Onhover:{
      scale:1.1,
      transition:{
        type:"smooth",
      }
    }

  }
  return (
    <div className='links'>
      {
          items.map((item)=>(
          <motion.a href={`#${item}`} key={item} variants={variants} initial="normal" whileHover="Onhover">{item}</motion.a>
          ))
       }
    </div>
  )
}

export default Links