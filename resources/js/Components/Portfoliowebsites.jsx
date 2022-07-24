// import logo from './logo.svg';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Portfoliowebsites() {
const [portData, setPortData] = useState([]);

useEffect(() => {
   const getAllData = async ()=>{
    try {
      const portdata = await axios.get("http://127.0.0.1:8000/api/portfolio"); 
      console.log(portdata.data);
      setPortData(portdata.data);
    } catch (error) {
      console.log(error);
    }
  }
  getAllData();
}, []);

  return (
 <div className='portfoliowebsites_main'>

<div className='top_title_div'>
<div className='top_title_div_back'>

<h2> WEBSITES PORTFOLIO </h2>

</div>

</div>

<div className='Portfoliowebsites_data'>

{
    portData.map((val, index)=>{
return <Card sx={{ maxWidth: 345, minWidth: 300 }} key={index} style = {{backgroundColor: "#01862d"}}>
      <CardMedia
        component="img"
        height="140"
        image = "uploads/portfolios/1657988119.jpg"
        alt="green iguana"
      />

{/* <img style = "width: 200px; height: 200px;  border: 2px solid black" src = "asset('uploads/portfolios/')${val.image}" /> */}

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
  );
}

export default Portfoliowebsites;
