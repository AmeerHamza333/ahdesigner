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
const [reactData, setReactData] = useState([]);
const [jsData, setJsData] = useState([]);

useEffect(() => {
   const getAllDatapsd = async ()=>{
    try {
      const portdata = await axios.get("http://127.0.0.1:8000/api/portfolio"); 
      const updatedpsddata = portdata.data.filter((val,index)=>{
        return val.category == 'psd'
      })
      setPortData(updatedpsddata);
    } catch (error) {
      console.log(error);
    }
  }
  getAllDatapsd();
}, []);


useEffect(() => {
  const getAllDatareact = async ()=>{
   try {
     const reactdata = await axios.get("http://127.0.0.1:8000/api/portfolio"); 
     const updatedreactdata = reactdata.data.filter((val,index)=>{
      return val.category == 'react'
    })
     setReactData(updatedreactdata);
   } catch (error) {
     console.log(error);
   }
 }
 getAllDatareact();
}, []);


useEffect(() => {
  const getAllDatajs = async ()=>{
   try {
     const portdatajs = await axios.get("http://127.0.0.1:8000/api/portfolio"); 
     const updatedjsdata = portdatajs.data.filter((val,index)=>{
      return val.category == 'js'
    })
     setJsData(updatedjsdata);
   } catch (error) {
     console.log(error);
   }
 }
 getAllDatajs();
}, []);


  return (
 <div className='portfoliowebsites_main'>

<div className='top_title_div1'>
<div className='top_title_div_back'>

<h2> WEBSITES PORTFOLIO </h2>

</div>

</div>
<div style = {{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "10px", backgroundColor: "rgba(245, 245, 245, 1.912)"}}>
<div className='videosection__line2'/>
<h2 className='websites_heading'> Websites PSD Designs </h2>
<div className='videosection__line2'/>
</div>
<div className='Portfoliowebsites_data'>

{
    portData.map((val, index)=>{
return <Card sx={{ maxWidth: 350, minWidth: 250 }} key={index} style = {{backgroundColor: "#01862d"}}>
      <CardMedia
        component="img"
        sx = {{maxHeight: 140}}
        image = {"/uploads/portfolios/" + val.image}
        alt="green iguana"
      />

      <CardContent style = {{position: "relative"}}>
        <div style = {{height: "auto", width: "100%", backgroundColor: "green", position: "absolute", top: "-10px", left: "0px", boxShadow: "1px 1px 1px 1px rgb(27, 147, 5)" }}> <p style = {{fontSize: "0.8rem", fontFamily: "Josefin Slab", color: "white", paddingLeft: "10px", letterSpacing: "3px"}}>{val.uploaddate}</p></div>
        <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Philosopher", color: "white"}}>
          {val.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style = {{color: "rgb(221, 221, 221)"}} >
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href = {"/uploads/portfolios/" + val.image} target = '_blank' style={{color: "#016d25", backgroundColor: "white", borderRadius: "3px", padding: "5px 10px 5px 10px"}} size="small">View</Button>
      </CardActions>
    </Card>
    })
}


</div>

<div style = {{display: "flex", justifyContent: "center", alignItems: "center",backgroundColor: "rgba(245, 245, 245, 1.912)", flexDirection: "column", marginBottom: "10px", marginTop: "50px"}}>
<div className='videosection__line2'/>
<h2 className='websites_heading'> React Websites </h2>
<div className='videosection__line2'/>
</div>
<div className='Portfoliowebsites_data'>

{
    reactData.map((val, index)=>{
return <Card sx={{ maxWidth: 350, minWidth: 250 }} key={index} style = {{backgroundColor: "#01862d"}}>
      <CardMedia
        component="img"
        sx = {{maxHeight: 140}}
        image = {"/uploads/portfolios/" + val.image}
        alt="green iguana"
      />

      <CardContent style = {{position: "relative"}}>
      <div style = {{height: "auto", width: "100%", backgroundColor: "green", position: "absolute", top: "-10px", left: "0px", boxShadow: "1px 1px 1px 1px rgb(27, 147, 5)" }}> <p style = {{fontSize: "0.8rem", fontFamily: "Josefin Slab", color: "white", paddingLeft: "10px", letterSpacing: "3px"}}>{val.uploaddate}</p></div>
        <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Philosopher", color: "white"}}>
          {val.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style = {{color: "rgb(221, 221, 221)"}} >
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href = {val.link} target = '_blank' style={{color: "#016d25", backgroundColor: "white", borderRadius: "3px", padding: "5px 10px 5px 10px"}} size="small">Demo</Button>
      </CardActions>
    </Card>
    })
}


</div>




<div style = {{display: "flex", justifyContent: "center",backgroundColor: "rgba(245, 245, 245, 1.912)", alignItems: "center", flexDirection: "column", marginBottom: "10px", marginTop: "50px"}}>
<div className='videosection__line2'/>
<h2 className='websites_heading'> Javascript Websites </h2>
<div className='videosection__line2'/>
</div>
<div className='Portfoliowebsites_data'>

{
    jsData.map((val, index)=>{
return <Card sx={{ maxWidth: 350, minWidth: 250 }} key={index} style = {{backgroundColor: "#01862d"}}>
      <CardMedia
        component="img"
        sx = {{maxHeight: 140}}
        image = {"/uploads/portfolios/" + val.image}
        alt="green iguana"
      />

      <CardContent style = {{position: "relative"}}>
      <div style = {{height: "auto", width: "100%", backgroundColor: "green", position: "absolute", top: "-10px", left: "0px", boxShadow: "1px 1px 1px 1px rgb(27, 147, 5)" }}> <p style = {{fontSize: "0.8rem", fontFamily: "Josefin Slab", color: "white", paddingLeft: "10px", letterSpacing: "3px"}}>{val.uploaddate}</p></div>
        <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Philosopher", color: "white"}}>
          {val.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style = {{color: "rgb(221, 221, 221)"}} >
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href = {val.link} target = '_blank' style={{color: "#016d25", backgroundColor: "white", borderRadius: "3px", padding: "5px 10px 5px 10px"}} size="small">Demo</Button>
      </CardActions>
    </Card>
    })
}


</div>




 </div>
  );
}

export default Portfoliowebsites;
