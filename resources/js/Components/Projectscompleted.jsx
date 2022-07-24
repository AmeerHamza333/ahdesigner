import React, {useEffect} from 'react'
import FactCheckIcon from '@mui/icons-material/FactCheck';
import WebIcon from '@mui/icons-material/Web';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Projectscompleted() {
    const [focus, setFocus] = React.useState(false);

    useEffect(()=>{
      Aos.init({duration: 2000});
      }, []);

  return (
    <div className="projects_main">
      
<div className='project_inner'>

<div className='projects_sec' data-aos="fade-right" data-aos-once="true">   
<FactCheckIcon fontSize='large' style = {{color: "#37FD12"}}/>
    <CountUp   start={focus ? 0 : null} end={214} duration={4} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span style={{color: "white", fontSize: "2rem", fontFamily: "Righteous", letterSpacing: "2px", marginTop: "10px"}} ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                    <a style={{color: "white", fontSize: "2rem", fontFamily: "Righteous", letterSpacing: "2px", marginTop: "10px"}}>+</a>
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
    <p>PROJECTS COMPLETED</p>
</div>

<div className='projects_sec' data-aos="fade-right" data-aos-once="true">   
<WebIcon fontSize='large' style = {{color: "#37FD12"}}/>
<CountUp   start={focus ? 0 : null} end={102} duration={4} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span style={{color: "white", fontSize: "2rem", fontFamily: "Righteous", letterSpacing: "2px", marginTop: "10px"}} ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                    <a style={{color: "white", fontSize: "2rem", fontFamily: "Righteous", letterSpacing: "2px", marginTop: "10px"}}>+</a>
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
    <p>CREATIVE WEBSITES</p>
</div>

<div className='projects_sec' data-aos="fade-right" data-aos-once="true">   
<DesignServicesIcon fontSize='large' style = {{color: "#37FD12"}}/>
<CountUp   start={focus ? 0 : null} end={112} duration={4} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span style={{color: "white", fontSize: "2rem", fontFamily: "Righteous", letterSpacing: "2px", marginTop: "10px"}} ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                    <a style={{color: "white", fontSize: "2rem", fontFamily: "Righteous", letterSpacing: "2px", marginTop: "10px"}}>+</a>
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
    <p>CREATIVE DESIGNS</p>
</div>

<div className='projects_sec' data-aos="fade-right" data-aos-once="true">   
<EmojiEmotionsIcon fontSize='large' style = {{color: "#37FD12"}}/>
<CountUp   start={focus ? 0 : null} end={167} duration={4} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span style={{color: "white", fontSize: "2rem", fontFamily: "Righteous", letterSpacing: "2px", marginTop: "10px"}} ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                    <a style={{color: "white", fontSize: "2rem", fontFamily: "Righteous", letterSpacing: "2px", marginTop: "10px"}}>+</a>
                </VisibilitySensor>
              </div>
            )}
          </CountUp>
    <p>HAPPY CLIENTS</p>
</div>

</div>

    </div>
  )
}
