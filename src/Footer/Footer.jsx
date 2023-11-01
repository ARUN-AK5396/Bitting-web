import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram,  FaYoutube } from 'react-icons/fa'; 
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {

  const iconColors = {
    facebook: '#1877f2',
    twitter: '#1da1f2',
    instagram: '#c32aa3',
    youtube: '#ff0000',
  };

  return (
    <>
    <div className='footer_container'>
       <div className="top_container">
            <div className="left_container">
                <h2 className='header_text'>Social Links</h2> <br/>
                <div className="social-icons">
                  <a target='_blank' href="https://www.facebook.com/" className='social-link' style={{ color: iconColors.facebook }}><FaFacebook /></a>
                  <a target='_blank' href="https://twitter.com/home" className='social-link' style={{ color: iconColors.twitter }}><FaTwitter /></a>
                  <a target='_blank' href="https://www.instagram.com/" className='social-link' style={{ color: iconColors.instagram }}><FaInstagram /></a>
                  <a target='_blank' href="https://www.youtube.com/" className='social-link' style={{ color: iconColors.youtube }}><FaYoutube /></a>
                </div>
            </div>
            <div className="right_container">
                <h2 className='header_text'>Important Links</h2> <br/>
                <div className="links">
                    <Link to="/privacy" className='imp_link'>Privacy Policy</Link> <br/><br/> <br/>
                    <Link to="/terms" className='imp_link'> Terms & Conditions</Link>
                </div>
            </div>
        </div>
       <div className="bottom_container">
         <hr style={{width:"50%",marginLeft:'25%',marginRight:'25%',marginTop:50}}></hr>
         <h4 className='footer_text'> 
            Skull Betting aims to promote responsibility in gambling. They provide information to help you make informed decisions about your gambling<br/><br/><br/>
            Call the National Gambling Helpline 00000 00000 8am to midnight, 7 days a week.<br/><br/><br/>
            We are committed to responsible gambling and have a number of ways to help you stay in control and keep gambling fun.<br/> <br/><br/>
            You must be 18 years old or over to use this site. Please bet responsibly.<br/> <br/><br/>
            © 2021 All rights reserved | Designed by <span><a target='_blank' style={{textDecoration:"underline"}} href="https://akindustries-master-arun.netlify.app">AK</a> </span> <br/> <br/><br/>
         </h4>
         
       </div>
    </div>
        <div className="final_container_footer">
            <h3>Privacy Policy</h3>
            <h3>Copyright © Skullbetting</h3>
            <h3>Created by SKULL BETTING</h3>
        </div>
    </>
  )
}

export default Footer