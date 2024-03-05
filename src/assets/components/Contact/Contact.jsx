import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <div className='Contact'>

        <div className="textContainer">
            <div className="title">
               <h1>Lets Work Together</h1> 
            </div>
            <div className="details email">
                <div className="icon" sr>
                    <i className="fa-solid fa-envelope" style={{color:'orange' }}></i>
                </div>
            
            <div className="id">anirudhata123@gmal.com</div> 
            </div>
            <div className="details phone">
                    <div className="details phone">
                        <div className="icon">
                                <i className="fa-solid fa-phone" style={{color:'orange'}}></i>
                        </div>
                    
                    <div className="id">+91 8591524565</div> 
                    </div>
            </div>
        </div>

        <div className="formContainer">

                    <form action="">

                    <div className="inputs email">
                                <input type="text" name="email" id="email" placeholder='Email' />
                        </div>

                        <div className="inputs name">
                                <input type="text" name="name" id="name" placeholder='Name' />
                        </div>

                        <div className="inputs message">
                            <textarea name="message" id="" cols="40" rows="5" placeholder='Message'></textarea>
                        </div>

                        <div className="submit">
                            <button>
                                Submit
                            </button>
                        </div>
                    </form>
        </div>

    </div>
  )
}

export default Contact