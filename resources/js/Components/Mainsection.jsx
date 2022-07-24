import React, {useState, useEffect} from 'react';
// import TypeWriterEffect from 'react-typewriter-effect';
import Typed from "react-typed"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Mainsection() {
  
    // const [count, setCount] = useState(1);

    // useEffect(() => {
    //   // document.title = `You clicked ${count} times`;
    // //   console.log("Count: " + count);
    //   setCount(1);
    // }, [count]);
  
  
    return (
        <div className='mainupper'>
    <div className='mainsecmain'>
      
<div className='mainsecleft'>
   <div className='backblack'>

    <div>
<h2> WELCOME </h2>
</div>

<div className='mainsecleft_twe'>

<div className='iam'>
<h3 >I'am </h3>
</div>


<div>
<Typed
     style={{fontFamily: "Josefin Slab", color: "#37FD12", fontSize: "1.7rem"}}
      strings={[
            "Ameer Hamza",
            "Graphic Designer",
            "Web Developer",
            "2d Animator",
          ]}
          typeSpeed={80}
          backSpeed={60}
          loop
        />
        </div>
</div>



<div style={{ display: "flex", gap: "10px", marginTop: "5px"}}>
<a className='asocialicons' href ="https://www.facebook.com/LadiesFashionwearStore/" target = "_blank">
<FacebookTwoToneIcon fontSize='medium' style = {{color: "#37FD12"}}  />
</a>
<a className='asocialicons' href ="https://www.instagram.com/accounts/login/?next=/clothingshoponline/" target = "_blank">
<InstagramIcon fontSize='medium' style = {{color: "#37FD12"}}/>
</a>

<a className='asocialicons' href ="https://twitter.com/outfitfashionuk" target = "_blank">
<TwitterIcon fontSize='medium' style = {{color: "#37FD12"}}/>
</a>

<a className='asocialicons' href ="https://www.linkedin.com/company/clothing-shop-online" target = "_blank">
<LinkedInIcon fontSize='medium' style = {{color: "#37FD12"}}/>
</a>
</div>



</div>
</div>
<div className='mainsecright'>

</div>

    </div>
    </div>
  )
}
