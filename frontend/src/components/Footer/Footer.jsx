import { Typography } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css";
import{ BsGithub, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return <div className="footer">
    <div>
        <Typography variant='h5'>About Me</Typography>
        <Typography>
            Hey! I am Vikas Kumar Chandravanshi(Vikash Zaigger). I am a Full-Stack Developer and Video Editor
        </Typography>

        <Link to="Contact" className='footerContactBtn'>
        <Typography>Contact Us</Typography>
        </Link>
    </div>
    <div>
      <Typography variant='h6'>Social Media</Typography>
      <a href='https://github.com/zaigger' target="black" > 
        <BsGithub /> 
      </a>

      <a href='https://www.linkedin.com/mwlite/in/vikash-chandravanshi-5a692813a' target="black">
        <BsLinkedin/>
      </a>

      <a href='https://www.instagram.com/vikash_zaigger/' target="black">
        <BsInstagram/>
      </a>

      <a href='https://m.facebook.com/profile.php?id=100004265045429' target="black">
        <BsFacebook/>
      </a>
    </div>

  </div>
};

export default Footer;