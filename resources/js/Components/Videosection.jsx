import React, {useEffect} from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';


function myFunction() {
  const video = document.getElementById("myVideo");
  if(video.paused){  
  video.play(); 
  }
  else{
    video.pause();
  }
 }


export default function Videosection() {

  useEffect(()=>{
    Aos.init({duration: 2000});
    }, []);


  return (

        <div className='videosection__main' data-aos="fade-up" data-aos-once="true">
    

<div className='video__div'>
    <video className='mainvideo'  id="myVideo" type="video/mp4" autoPlay muted loop>
  <source  src="https://assets.mixkit.co/videos/preview/mixkit-scientist-looks-at-dna-info-on-holographic-screens-5485-large.mp4"  />
</video>
</div>

<div className='videosection__upper'>
<div className='videosection__video__main'>
<div className='videosection__video__icon__1'>
<div className='videosection__video__icon__2'>    
<div className='videosection__video__icon' > <Button onClick={myFunction}> <PlayArrowIcon fontSize='large' style={{color: "white"}}/> </Button> </div>
</div>
</div>
</div>


<h4 > WE GIVE YOU BEST QUALITY WORK </h4>
<div className='videosection__line'/>

</div>





    </div>
  )
}
