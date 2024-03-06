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
                        <a href="https://github.com/NarutoUchiha39/"><i className="fa-brands fa-github"></i></a> 
                  </div>
                  
                  <div className="social linked_in">
                      <a href="https://www.linkedin.com/in/anirudh-ta-a57107263"><i className="fa-brands fa-linkedin"></i></a>  
                  </div>

                  <div className="social instagram">
                        
                          <a href="https://www.instagram.com/narutouchiha392">
                          <i className="fa-brands fa-instagram"></i>
                          </a>
                        
                  </div>
              </div>

      </div>
        
    </div>
  )
}
