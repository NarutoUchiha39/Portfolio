import React, { useState } from 'react'
import ToggleBar from './ToggleButton/ToggleBar'
import Links from './Links/Links'
import {motion} from 'framer-motion'
import './SideBar.scss'
function SideBar() {
    const [open,setOpened] = useState({
        Opened:false
    })
    const variants = {
        open:{

            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20
            }
        },
        closed:{
            
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                
                type:"spring",
                stiffness:400,
                damping:40
            }
        }
    }
  return (
    <motion.div className="sideBar" animate={open.Opened ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleBar setOpened={setOpened}/>
    </motion.div>
  )
}

export default SideBar