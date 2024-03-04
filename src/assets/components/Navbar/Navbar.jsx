import React from 'react'
import './Navbar.scss'
import {motion} from 'framer-motion'
import SideBar from '../SideBar/SideBar';

export default function Navbar() {
  return (
    <div className='Navbar' >
      <div className="wrapper">

          <motion.div className='Name' initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Anirudha Ta</motion.div>

              <SideBar/>
              <div className="links">
                  <div className="social github">
                        <i className="fa-brands fa-github"></i>
                  </div>
                  
                  <div className="social linked_in">
                        <i className="fa-brands fa-linkedin"></i>
                  </div>

                  <div className="social instagram">
                        <i className="fa-brands fa-instagram"></i>
                  </div>
              </div>

      </div>
        
    </div>
  )
}
