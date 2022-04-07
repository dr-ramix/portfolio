import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Adrress from "../../img/address.png"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { useContext } from "react"
import { ThemeContext } from "../../context"

const Contact = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [text, setText] = useState();

    const handleSubmit = (e) => {
        // to avoid from refreshing the page after submiting
        e.preventDefault()

        emailjs.sendForm(
          'service_6n18suo', //service ID
          'template_sfqmdrr', // template ID
           formRef.current, 'CaprO0nwRFDacb8DN') //user ID
        .then((result) => {
            console.log(result.text);
            setDone(true)
            setText("")
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title"> Let's talk about your project!</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img
                         src={Phone}
                         alt="" 
                         className="c-icon"/>
                         +49 17664 960 118
                    </div>
                    <div className="c-info-item">
                        <img
                         src={Email}
                         alt="" 
                         className="c-icon"/>
                         ramtin.hosseini1382@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img
                         src={Adrress}
                         alt="" 
                         className="c-icon"/>
                         Alaskaweg20, Hamburg
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                <b>What`s your story?</b> Get in touch. Always available for
                freelancing if the right project comes along me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} >

                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user-name"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user-subject"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder="Email" name="user-email"/>

                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" value={text}/>

                    <button>Submit</button>

                    {done && <span className="c-thank">Thank you ...!</span>}

                </form>
            </div>
        </div>
    </div>
  )
}
export default Contact

