import {useRef} from 'react';
import "./Contact.css"
import emailjs from '@emailjs/browser';

const ContactSection = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9g9bqd7', 'template_p4kphpu', form.current, 'xlcgSIP4oszZ7e_Lp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
     
    return ( 
        <html>
            <head>

            </head>
            <body>
                <section className='contactsection'>
                    <div className='contacttext'>
                        <h1>Contact:</h1>
                        <p>Let's build something!</p>
                    </div>
                    <div className='contactparent'>
                        <form ref = {form} onSubmit={sendEmail}>
                                <div className="contactchild">
                                    <p className='inputinfo'>Full Name</p>
                                    <input className='inputinfo box'type = "text" name = "user_name" required />                                
                                </div>
                                <div className= "contactchild" >
                                    <p className='inputinfo'> Email</p>
                                    <input className='inputinfo box' type = "email" name = "user_email" required />
                                </div>                                

                            <div className= "contactchild">
                                <p className='inputinfo'>Subject</p>
                                <input className='inputinfo box subjectbox' type = "text" name = "subject" required />
                            </div>
                            <div className= "contactchild">
                                <p className='inputinfo'>Message</p>
                                <textarea className='inputinfo box messagebox' name = "message" cols='30' rows= "10"></textarea> 
                            </div>
                            <button className= "contactchild button" type = "submit">Send Message</button>
                        </form>
                    </div>                    
                </section>

            </body>
        </html>
     );
}
 
export default ContactSection;