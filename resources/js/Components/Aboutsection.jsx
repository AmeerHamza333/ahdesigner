import { Button } from '@mui/material'
import React, {useRef, useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Aboutsection(props) {

useEffect(()=>{
Aos.init({duration: 2000});
}, []);

  return (
   <div className='aboutsecmain' ref = {props.aboutsection}>

<div data-aos="fade-up" data-aos-once="true" className='aboutsecleft' style={{backgroundImage: `url('aboutpic.png')`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "top", borderRadius: "4px"}}>
<div >
    <img src='hello.png' style={{width: "80px", height: "50px", opacity: "0"}} />
</div>

<div className='aboutsecmyname1'>
    <h2>I'm <span style={{fontWeight: "bold"}}> Ameer Hamza</span></h2>
    <h4>Graphic Designer & Web Developer</h4>
    <p>I am a student of Software Engineering in University of Gujarat, Pakistan. I am an expert in Graphic designing (UI/UX, social media post, banners, flyer designing etc). I am an expert in Web front-end development with Html, Css, JS, Bootstrap, SAAS and React(MUI). I am an expert in 2d modeling and 2d animated explainer video ads.</p>
    <p>I had work in a Software Company as a Graphic Designer and Web front-end Developer. But before on my own, I have done this for five years as a professional freelancer in Fiverr, People per Hour and many others freelancing platforms. I am a top rated saller in fiverr</p>
    <Button  style={{width: "100%", backgroundColor: "rgb(11, 202, 11)", opacity: "0"}} variant="contained">Read More</Button>
</div>

</div>

<div className='aboutsecright' >
<div data-aos="fade-up" data-aos-once="true">
    <img src='hello.png' style={{width: "80px", height: "50px"}} />
</div>

<div className='aboutsecmyname' data-aos="fade-up" data-aos-once="true">
    <h2>I'm <span style={{fontWeight: "bold"}}> Ameer Hamza</span></h2>
    <h4>Graphic Designer & Web Developer</h4>
    <p>I am a student of Software Engineering in University of Gujarat, Pakistan. I am an expert in Graphic designing (UI/UX, social media post, banners, flyer designing etc), Web front-end development with Html, Css, JS, Bootstrap, SAAS and React(MUI) & 2d modeling and 2d animated explainer video ads.</p>
    <p>I had work in a Software Company as a Graphic Designer and Web front-end Developer. But before on my own, I have done this for five years as a professional freelancer in Fiverr, People per Hour and many others freelancing platforms.</p>
    <Button href='CV-Hamza.pdf' target = '_blank'  style={{width: "100%", backgroundColor: "rgb(11, 202, 11)", marginTop: "5px"}} variant="contained">Read More</Button>
</div>

</div>

   </div>
  )
}
