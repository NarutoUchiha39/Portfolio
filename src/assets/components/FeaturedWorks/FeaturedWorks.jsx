import React from 'react'
import './FeaturedWork.scss'
import {motion,useScroll,useSpring} from 'framer-motion'
import { useRef } from 'react'
import KisanSevak from "../../images/kisanSevak.png"
const Projects = [
    
     {   
            id:1,
            Name:"Kisan Sevak",
            img:KisanSevak,
            TechStack:"Next.js, React, Tensorflow, MongoDB, ReactNative",
            Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores ducimus, et minus ipsam beatae repellendus adipisci sit ex dolor error. Error, animi? Accusamus eos harum magnam tempora. Sapiente, illum!"
        
        
     },
    {   
            id:2,
            Name:"Elite Solutions",
            img:KisanSevak,
            TechStack:"Laravel , MySQL",
            Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores ducimus, et minus ipsam beatae repellendus adipisci sit ex dolor error. Error, animi? Accusamus eos harum magnam tempora. Sapiente, illum!"
        
    }
    
    ]

function Works({item}){
    return<section className='container'>
        <div className="imageConainer">
            <img src={item.img} />
        </div>

        <div className="textConainer">
            <ul>
                <li>
                    <div className="details name">Name of Project: {item.Name}</div>
                </li>

                <li>
                    <div className="details techStack">
                       Tech Stack: {item.TechStack}
                    </div>
                </li>

                
                    <div className="details description">
                      {item.Description}
                    </div>
                

                    <div className="button">
                        <div className="github">
                        <i className="fa-brands fa-github"></i>
                        </div>
                        <button>
                            View Source Code
                        </button>
                    </div>
            </ul>
        </div>

        
        
    </section>
}

function FeaturedWorks() {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref,
        offset:["end end","start start"]
    })

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })
    
  return (
    <div className='Portfolio'
    
    ref={ref}
    >
            <motion.div className="Progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{scaleX}}></motion.div>
            </motion.div>
            {
                Projects.map(element=>(
                  <Works item={element} key={element.id}/>
                ))
            }
            
    </div>
    
  )
}



export default FeaturedWorks