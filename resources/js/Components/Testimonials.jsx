import { Avatar } from '@mui/material';
import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';


const colors = [{
  name: "John Lucas",
  position: "Project Manager",
  image: "https://static.vecteezy.com/system/resources/thumbnails/002/000/510/small_2x/friendly-man-in-dress-shirt-character-icon-free-vector.jpg",
  des: "Outstanding and super quick service. My issue was fixed in a matter of minutes! Would absolutely recommend ……….., he’s truly a star! Thankyou again for your patience & cooperation."
},

{
  name: "Rammy Sharp",
  position: "Graphic Designer",
  image: "https://cdn2.vectorstock.com/i/1000x1000/31/56/young-man-vector-553156.jpg",
  des: "Amazing seller, after finding a seller for weeks to do my job, only this seller could pull this off. Purely talented, and he even helped me to set it up till the very end step."
},

{
  name: "Elita William",
  position: "Web Developer",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-km6iq3XJexHyKwaOBbtKnvamGuhqLEXjoUsegMIKv56jU9ZZkfaluGi9mPA6IJBTac&usqp=CAU",
  des: "Very Good Communication, Excellent Work, Knows his stuff. I recommend it to everyone. Rapide and Professional. Fast accurate and fair priced. we got the job done quickly."
},



];
const delay = 3500;

function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  useEffect(()=>{
    Aos.init({duration: 2000});
    }, []);

  return (
      <div className='testimonials_main' data-aos="fade-up"
      data-aos-once="true">
    <div className="slideshow"  >



      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((val, index) => (
          <div
            className="slide"
            key={index}
          
          >

     
<div className='innertesi'>

<Avatar
        alt="Remy Sharp"
        src={val.image}
        sx={{ width: 56, height: 56 }}
      />

      <h5 style={{marginTop: "7px", marginBottom: "0px", fontFamily: "Righteous", fontSize: "1rem", letterSpacing: "2px", color: "white"}}> {val.name} </h5>
      <p style={{marginTop: "4px", marginBottom: "0px", fontFamily: "Philosopher", fontSize: "0.7rem", letterSpacing: "1px", color:"#37FD12"}}> {val.position}</p>


<p style={{ fontSize: "0.9rem", fontFamily: "Josefin Slab", lineHeight: "18px", textAlign: "center", width: "80%", color: "white", marginTop: "10px"}}> {val.des}  </p>
</div>

          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Testimonials;