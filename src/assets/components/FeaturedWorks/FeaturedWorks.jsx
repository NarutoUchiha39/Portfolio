import React from 'react'
import './FeaturedWork.scss'
import {motion,useScroll,useSpring} from 'framer-motion'
import { useRef } from 'react'
import KisanSevak from "../../images/kisanSevak.png"
import EliteSolution from "../../images/gg.png"
import QuizPortal from "../../images/QuizPortal.png"
import AutomatedPeopleCounter from "../../images/AutomatedPeopleCounter.png"
const Projects = [
    
     {   
            id:1,
            Name:"Kisan Sevak",
            img:KisanSevak,
            TechStack:"Next.js, React, Tensorflow, MongoDB, ReactNative",
            Description:"An integrated System consisting of a Mobile App, Website and a robust machine learning model to provide farmers with complete ecosystem to provide cure to various plant diseases. The robust Machine Learning model helps in accurate prediction of plant diseases while the website, written Nextjs, is for the experts to provide prescription in case the model fails, ensuring that the farmers get solution"
        
        
     },
    {   
            id:2,
            Name:"Elite Solutions",
            img:EliteSolution,
            TechStack:"Laravel , MySQL",
            Description:" A Website made for the students by the students using Laravel framework. The Website helps aspiring candidates to prepare for coding interviews by providing them solutions to leetcode problems . Skills like markdown manipulation, using leetcode api to fetch problems and  using file system to store solutions to problems were  explored"
        
    },
    
    {   
        id:3,
        Name:"Automated System Of People Tracking",
        img:AutomatedPeopleCounter,
        TechStack:"React , MongoDB, Torch, Express",
        Description:"An automated system for counting the total number of people entering and exiting a room using OpenCV and Torch. The robust YOLO model is used to track and count people as they enter and exit room. A website written in react provides a dashboard that provides real time display of count of people. "
    
},

{   
    id:4,
    Name:"Space Invader",
    img:EliteSolution,
    TechStack:"Python",
    Description:"A  game written in python using  pygame . The players has a  ship  that have  to dodge bullets from the enemy ships. As the time increases the speed of bullets and number of enemy ships increases thus increasing the difficulty of the game. The game fosters the use of databases and files along with object oriented concepts in python  "

},

{   
    id:5,
    Name:"Quiz Portal",
    img:QuizPortal,
    TechStack:"Java",
    Description:"An automated system for counting the total number of people entering and exiting a room using OpenCV and Torch. The robust YOLO model is used to track and count people as they enter and exit room. A website written in react provides a dashboard that provides real time display of count of people. "

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