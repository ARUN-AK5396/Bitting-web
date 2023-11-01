import React, { useState, useRef ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faEdit } from '@fortawesome/free-solid-svg-icons';
import emailjs from "@emailjs/browser";
import './ContactStyle.css'

function Contact() {
    const [showContainers, setShowContainers] = useState(false);
    const formRef = useRef(); // Rename the ref to formRef
    const [done, setDone] = useState(false);

    useEffect(() => {
   
        const delay = 500; 
        const timeoutId = setTimeout(() => {
          setShowContainers(true);
        }, delay);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
          "service_5m1jtch",
          "template_ombq4tc",
          formRef.current, 
          "m1vzWx1E8Vf9qJb2o"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            formRef.current.reset(); // Use formRef here to reset the form
          },
          (error) => {
            console.log(error.text);
          }

        );
    };
   

  return (
    <div className='main_container_contact'>
        <div >
            <form className="form-container" ref={formRef} onSubmit={sendEmail}>
                <h3 style={{textAlign:'center'}}>Contact US</h3> <br/>
                <div>
                    <label>
                        <FontAwesomeIcon className="icon" icon={faUser} /> Name
                    </label>
                    <input type="text" placeholder="Your Name" name="name" />
                </div>
                <div>
                    <label>
                        <FontAwesomeIcon className="icon" icon={faEdit} /> Subject
                    </label>
                    <input type="text" placeholder="Subject" name="subject" />
                </div>
                <div>
                    <label>
                        <FontAwesomeIcon className="icon" icon={faEnvelope} /> Email
                    </label>
                    <input type="email" placeholder="Enter your email" name="email" />
                </div>
                <div>
                    <label>
                        <FontAwesomeIcon className="icon" icon={faEdit} /> Message
                    </label>
                    <textarea
                        placeholder="Your Message"
                        name="message"
                    />
                </div>
                <button type="submit" value="send">Submit</button>
                <span>{done && "Thanks for Contacting us"}</span>
            </form>
        </div>
        <div className={`content_component_prediction ${showContainers ? 'show1' : ''}`}>
         <h3 className='content_prediction_text'>Are you looking to expand your business's reach and attract new customers? Uniq Bets offers advertising opportunities to help you achieve your goals. Contact us today to learn more about how you can post your ads and reach a wider audience.</h3>
      </div>

      <div  className={`body_prediction_text ${showContainers ? 'show2' : ''}`}>
        <div className="prediction_layers">
            <h2 className='layer_header'>WHY ADVERTISE WITH UNIQ BETS?</h2>
            <h4 className='layer_content'>Advertising with Uniq Bets can help your business reach a wider audience and attract new customers. Our platform has a large and engaged user base, making it an ideal place to showcase your products or services. Additionally, our advertising options are customizable to fit your specific needs and budget. Contact us today to learn more about how we can help your business grow.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>TYPES OF ADVERTISING OPTIONS AVAILABLE.</h2>
            <h4 className='layer_content'>At Uniq Bets, we offer a variety of advertising options to fit your business's needs and budget. Our options include banner ads, sponsored content, and social media promotions. Banner ads are a great way to increase brand awareness and drive traffic to your website. Sponsored content allows you to showcase your products or services in a more in-depth way, while social media promotions can help you reach a wider audience and engage with potential customers. Contact us today to learn more about which advertising option is right for your business.</h4>
        </div>

        <div className="prediction_layers">
            <h2 className='layer_header'>TARGET AUDIENCE AND REACH.</h2>
            <h4 className='layer_content'>At Uniq Bets, we understand the importance of reaching your target audience. That's why we offer a variety of advertising options to help you reach the right people. Our banner ads can be targeted based on demographics, interests, and location, ensuring that your message is seen by the right people. Sponsored content can also be tailored to your target audience, with the option to include specific keywords and topics. And with our social media promotions, we can help you reach a wider audience and engage with potential customers. Contact us today to learn more about how we can help you reach your target audience and expand your reach.</h4>
        </div>
      </div>
    </div>
  )
}

export default Contact;
