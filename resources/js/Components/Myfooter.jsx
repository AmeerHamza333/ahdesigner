import React, {useRef, useEffect} from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MailIcon from '@mui/icons-material/Mail';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Myfooter(props) {
  
  useEffect(()=>{
    Aos.init({duration: 2000});
    }, []);
  
  return (

    <div className='main_footer' ref = {props.contactsection} data-aos="fade-up" data-aos-once="true">

    <div className ='footer_main'>
      
      <div className='footer_inner'   data-aos="fade-up" data-aos-once="true">
      <PhoneIcon fontSize='large' style = {{color: "#37FD12"}}/>
    <h2>Phone</h2>
    <p>(+92)3456311702</p>
      </div>

      <div className='footer_inner'   data-aos="fade-up" data-aos-once="true">
      <FmdGoodIcon fontSize='large' style = {{color: "#37FD12"}}/>
    <h2>Address</h2>
    <p>St.3, H-22, Green Town, Gujarat, Pakistan</p>
      </div>
      
      <div className='footer_inner'   data-aos="fade-up" data-aos-once="true">
      <MailIcon fontSize='large' style = {{color: "#37FD12"}}/>
    <h2>Email</h2>
    <p>hamzamirza857@gmail.com</p>
          </div> 

    </div>

    <div className="footer-copyright">
<p>Copyright AMEER HAMZA © 2022. All rights reserved.</p>
</div>

</div>
  )
}
