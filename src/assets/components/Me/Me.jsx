import React from 'react'
import './Me.scss'
import Me1 from '../../images/Me.png'
import {motion} from 'framer-motion'
function Me() {
    const variants={
        initial:{
            x:-500,
            opacity:0
        },

        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.1
            }
            
        }
    }
  return (
    <>
        <motion.div className='Division' style={{overflow:'hidden'}} initial="initial" animate="animate">
            <motion.div variants={variants} className="textContainer" >
               <motion.h2 variants={variants}>Anirudha Ta</motion.h2> 
               <motion.h1 variants={variants}>Backend developer </motion.h1>
               <motion.div className="extra" variants={variants}>
                    <motion.div className="latest_work">
                    <a href={`#Projects`}>See Latest Work</a>  
                    </motion.div>

                    <motion.div className="contact_me" variants={variants} onClick={()=>{}}>
                          <a href={`#Contact Me`}>Contact Me</a>  
                    </motion.div>
               </motion.div>
            </motion.div>
            <motion.div variants={variants} className="image_container">
                <motion.img src={Me1} style={{height:"120%",position:'relative',top:'-27vh'}}/>
            </motion.div>

        </motion.div>
    </>
  )
}

export default Me