
import Button from '@mui/material/Button';
import { useRef, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {

  useEffect(()=>{
    Aos.init({duration: 2000});
    }, []);

  return (
<div className='skills_main_upper' >

<div className='skills_title' data-aos="fade-up" data-aos-once="true">
    <h2>Skills & Info</h2>
</div>

    <div className='skillsmain'>
        <div className='skills_left' data-aos="fade-up" data-aos-once="true">
      <p className='headings'>HTML</p>

<div className="container">
  <div className="skills html">95%</div>
</div>

<p className='headings'>CSS</p>

<div className="container">
  <div className="skills css">85%</div>
</div>

<p className='headings'>JavaScript</p>

<div className="container">
  <div className="skills js">75%</div>
</div>

<p className='headings'>React JS</p>

<div className="container">
  <div className="skills react">70%</div>
</div>

<p className='headings'>Adobe After Effect</p>

<div className="container">
  <div className="skills ae">85%</div>
</div>

<p className='headings'>Adobe Photoshop</p>

<div className="container">
  <div className="skills ap">80%</div>
</div>

<p className='headings'>Adobe Illustrator</p>

<div className="container">
  <div className="skills ai">90%</div>
</div>

</div>


<div className='skills_right' data-aos="fade-up" data-aos-once="true">
<div className='skills_info_line'>
  <h2>Age</h2>
  <p>21 Years</p>
</div>

<div className='skills_info_line'>
  <h2>Address</h2>
  <p>St.3, H-22, Green Town, Gujarat, Pakistan</p>
</div>

<div className='skills_info_line'>
  <h2>Email</h2>
  <p>hamzamirza857 @gmail.com</p>
</div>

{/* <div className='skills_info_line'>
  <h2>Site</h2>
  <p><a style={{color: "red", fontFamily: "Philosopher", textDecoration: "none"}} href='https://ameerhamza55.blogspot.com/' target='_blank'> Click Here </a></p>
</div>

<div className='skills_info_line'>
  <h2>Github</h2>
  <p><a style={{color: "red", fontFamily: "Philosopher", textDecoration: "none"}} href='https://github.com/AmeerHamza333' target='_blank'> Click Here </a></p>
</div> */}


<div className='skills_info_line'>
  <h2>Phone</h2>
  <p>(+92)-345-6311702</p>
</div>

<div className='skills_info_line'>
  <h2>Freelance</h2>
  <p>till April 15, 2017</p>
</div>

<div className='skills_info_line'>
  <h2>Education</h2>
  <p>BS (Software Engineering)</p>
</div>


<div className='skills_info_line2'>
<Button href='https://ameerhamza55.blogspot.com/' target='_blank' style={{width: "100%", backgroundColor: "#00aa39"}} variant="contained">Site</Button>
<Button href='https://github.com/AmeerHamza333' target='_blank' style={{width: "100%", backgroundColor: "#188d04"}} variant="contained">Github</Button>
</div>


</div>

   
    </div>
  </div>
  )
}
