import React, { useRef } from 'react'
import './Contact.scss'
import {motion,useInView} from 'framer-motion'
import emailjs, { send } from '@emailjs/browser';


const variants = {
    initial:{
        y:100,
        opacity:0
    },

    animate:{
        y:0,
        opacity:1,
        transition:
        {
            duration:1,
            staggerChildren:0.5
        }
    }

}
function Contact() {
    const ref = useRef()
    const inView = useInView(ref,{margin:"-100px"})
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_y9kqi55', 'template_i2evzkq', form.current, {
            publicKey: 'GuvKiSrJ1d50AilQ4',
          })
          .then(
            () => {
              alert("Mail sent successfully !!");
            },
            (error) => {
              alert(`Error occured :'( ${error.text}`)
            },
          );
      };

  return (
    <>

           
            <motion.div className='Contact' ref={ref}>
                <motion.div className="textContainer" variants={variants} initial="initial" whileInView="animate">
                    <motion.div className="title" variants={variants}>
                    <h1 >Lets Work Together</h1> 
                    </motion.div>
                    <motion.div variants={variants} className="details email">
                        <div className="icon" sr>
                            <i className="fa-solid fa-envelope" style={{color:'orange' }}></i>
                        </div>
                    
                    <div  className="id">anirudhata123@gmal.com</div> 
                    </motion.div>
                    <motion.div variants={variants} className="details phone">
                            <div className="details phone">
                                <div  className="icon">
                                        <i className="fa-solid fa-phone" style={{color:'orange'}}></i>
                                </div>
                            
                            <div variants={variants} className="id">+91 8591524565</div> 
                            </div>
                    </motion.div>
                </motion.div>

                <motion.div className="formContainer" >
                <motion.div className="wrapper" variants={variants} initial={{opacity:1}} animate={{opacity:0}} transition={{delay:3,duration:1}}>

                <svg className='svg' width="203px" height="203px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M6.00745 3.40686C7.68752 1.72679 10.5227 1.85451 11.6925 3.95063L12.3415 5.11356C13.1054 6.48238 12.7799 8.20946 11.6616 9.34143C11.6467 9.36184 11.5677 9.47677 11.5579 9.67758C11.5454 9.93391 11.6364 10.5267 12.5548 11.4451C13.4729 12.3632 14.0656 12.4545 14.3221 12.442C14.5231 12.4322 14.6381 12.3533 14.6585 12.3383C15.7905 11.2201 17.5176 10.8945 18.8864 11.6584L20.0493 12.3075C22.1454 13.4773 22.2731 16.3124 20.5931 17.9925C19.6944 18.8911 18.4995 19.6896 17.0953 19.7429C15.0144 19.8218 11.5591 19.2844 8.13735 15.8626C4.71556 12.4408 4.17818 8.98556 4.25706 6.90463C4.3103 5.50044 5.10879 4.30552 6.00745 3.40686ZM10.3827 4.68163C9.78363 3.60828 8.17394 3.36169 7.06811 4.46752C6.29276 5.24287 5.7887 6.09868 5.75599 6.96146C5.6902 8.6968 6.11864 11.7226 9.19801 14.8019C12.2774 17.8813 15.3031 18.3097 17.0385 18.2439C17.9013 18.2112 18.7571 17.7072 19.5324 16.9318C20.6382 15.826 20.3916 14.2163 19.3183 13.6173L18.1554 12.9683C17.432 12.5645 16.4158 12.7023 15.7025 13.4156L15.7023 13.4158C15.6322 13.4858 15.1864 13.9018 14.395 13.9403C13.5847 13.9797 12.604 13.6156 11.4942 12.5058C10.384 11.3956 10.02 10.4146 10.0597 9.60423C10.0985 8.81271 10.5147 8.36711 10.5843 8.29746L10.5844 8.29743C11.2977 7.58411 11.4354 6.56797 11.0317 5.84456L10.3827 4.68163Z" fill="#ff8040"
                initial={{pathLength:0}} animate={ inView && {pathLength:1}} transition={{duration:3}}
                
                ></motion.path> </g></svg>
                   
            </motion.div>

                            <motion.form onSubmit={sendEmail} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:4,duration:1}} ref={form}>

                            <div className="inputs email">
                                        <input type="email" name="from_name" id="email" placeholder='Email' />
                                </div>

                                <div className="inputs name">
                                        <input type="text" name="to_name" id="name" placeholder='Name' />
                                </div>

                                <div className="inputs message">
                                    <textarea name="message" id="" cols="40" rows="5" placeholder='Message'></textarea>
                                </div>

                                <div className="submit">
                                    <button type='submit'>
                                        Submit
                                    </button>
                                </div>
                            </motion.form>
                </motion.div>

            </motion.div>
    </>
  )
}

export default Contact