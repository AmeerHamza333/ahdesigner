import React, {useRef} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { ListItemIcon } from '@mui/material';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import Drawer from '@mui/material/Drawer';
import InfoIcon from '@mui/icons-material/Info';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ReportIcon from '@mui/icons-material/Report';
import ListItemText from '@mui/material/ListItemText';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


import Aboutsection from './Aboutsection'
import Mainsection from './Mainsection'
import Skills from './Skills'
import Offers from './Offers'
import Projectscompleted from './Projectscompleted'
import Myportfolio from './Myportfolio'
import Videosection from './Videosection'
import Testimonials from './Testimonials'
import Myfooter from './Myfooter';



export default function Navbar() {
  const aboutSection = useRef(null);
const serviceSection = useRef(null);
const portfolioSection = useRef(null);
const contactSection = useRef(null);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };




    const [left, setleft] = React.useState(false);
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }    
        setleft({ ...left, [anchor]: open });
      };



      const list = (anchor) => (
        <Box
        style={{backgroundColor: "#000000", height: "100vh"}}
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >

          <List >
          <div style={{margin: "15px 5px 20px 15px",  width: "180px", height: "60px", backgroundImage: `url('weblogo.png')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}} />

            {['About', 'Services', "Portfolio", 'Contact'].map((text, index) => (
                <>
              <ListItem  key={index} disablePadding>
                <ListItemButton onClick = {()=>{index == 0 ? scrollDown(aboutSection) : index == 1 ? scrollDown(serviceSection)  : index == 2 ? scrollDown(portfolioSection) : scrollDown(contactSection) }}>
                  <ListItemIcon>
                    {index == 0 ? <ReportIcon style={{color: "#37FD12"}}/> : index == 1 ? <DesignServicesIcon style={{color: "#37FD12"}}/> :   index == 2 ?  <FolderSharedIcon style={{color: "#37FD12"}}/> : <PermContactCalendarIcon style={{color: "#37FD12"}}/> }
                  
                  </ListItemIcon>
                  <ListItemText style={{color: "white"}}  primary={text} />
                  
                </ListItemButton>
               
              </ListItem>
               <div style={{height: "1px", width: "100%", backgroundColor: "#f8f6f656", marginTop: "7px", marginBottom: "7px"}}></div>
               </>
            ))}
          
          </List>




       
             
<Box gap={2.5} sx={{display: { xs: 'flex', sm: 'none' }}} style={{margin: "5px 10px 0px 20px"}}>
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
</Box>
       
     
          
        </Box>
      );


    
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar  style={{backgroundColor: "#000000"}}>
     
      <Toolbar position = "sticky">

      <div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button sx = {{display: { xs: 'block', sm: 'none', marginTop: "0.5rem", }}}><MenuIcon className='menuicon'/></Button> */}
         
          <IconButton
          onClick={toggleDrawer(anchor, true)} 
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 , display:{xs:"flex", sm: "none"} }}
        >
          <MenuIcon />
        </IconButton>
          <Drawer
            anchor={anchor}
            open={left[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>

        <Typography variant="h6" component="div" >
          <div className='weblogo'>

          </div>
          {/* <img src = 'logo.png'/>  */}
        </Typography>
        <Box sx={{ml:2,  display:{xs:"none", sm: "flex"} }}>
        <Button onClick={()=>scrollDown(aboutSection)} color="inherit"><p style={{marginRight: "3px",fontFamily: "Righteous", letterSpacing: "2px", fontSize: "0.9rem", color: "#37FD12"}}>About</p></Button>
        <Button onClick={()=>scrollDown(serviceSection)} color="inherit"><p style={{marginRight: "3px", fontFamily: "Righteous", letterSpacing: "2px", fontSize: "0.9rem", color: "#37FD12"}}>Services</p></Button>
        <Button onClick={()=>scrollDown(portfolioSection)} color="inherit"><p style={{marginRight: "3px", fontFamily: "Righteous", letterSpacing: "2px", fontSize: "0.9rem", color: "#37FD12"}}>Portfolio</p></Button>
        <Button onClick={()=>scrollDown(contactSection)} color="inherit"><p style={{marginRight: "3px", fontFamily: "Righteous", letterSpacing: "2px", fontSize: "0.9rem", color: "#37FD12"}}>Contact</p></Button>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>


<Mainsection/>
    <Aboutsection aboutsection={aboutSection}/>
    <Skills />
    <Offers servicesection = {serviceSection}/>
    <Projectscompleted/>
    <Myportfolio portfoliosection = {portfolioSection}/>
    <Videosection/>
    <Testimonials/>
    <Myfooter contactsection = {contactSection}/>

    </>

  )
}
