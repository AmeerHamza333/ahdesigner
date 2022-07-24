import React, {useState, useRef, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from './OfferData';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Offers(props) {
  const [offersdata, setOffersData] = useState(data);

  useEffect(()=>{
    Aos.init({duration: 2000});
    }, []);

    return (
    <div className='offers_main' ref={props.servicesection}>      
      <div className='skills_title' data-aos="fade-up" data-aos-once="true">
    <h2>What Do I Offer</h2>
</div>


<div className='Offer_cards'>

{
    offersdata.map((val, index)=>{
return <Card data-aos="fade-up" data-aos-once="true" sx={{ maxWidth: 345 }} key={index} style = {{backgroundColor: "#01862d"}}>
      <CardMedia
        component="img"
        height="140"
        image={val.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Philosopher", color: "white"}}>
          {val.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style = {{color: "rgb(221, 221, 221)"}} >
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{color: "#016d25", backgroundColor: "white", borderRadius: "3px", padding: "5px 10px 5px 10px"}} size="small">Read More</Button>
      </CardActions>
    </Card>
    })
}


</div>

    </div>
  )
}
