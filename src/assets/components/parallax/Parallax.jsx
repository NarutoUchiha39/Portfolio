import React, { useRef } from 'react'
import {motion,useTransform,useScroll} from 'framer-motion'

import './Parallax.scss'
function Parallax() {
    const ref = useRef()
    const {scrollYProgress}= useScroll({
        target:ref,
        offset:["start start","end start"]
    })

    const yBg  = useTransform(scrollYProgress,[0,1],["0%","100%"])
    const yText  = useTransform(scrollYProgress,[1,0],["0%","100%"])
  return (
    <div className='parallax'
    ref={ref}
    >
        <h1 style={{y:yText}}>Projects</h1>
        <motion.div className="mountains" ></motion.div>

        <motion.div className="stars" style={{x:yBg}}></motion.div>

        <motion.div className="planets" style={{y:yBg}}></motion.div>
    </div>
  )
}

export default Parallax