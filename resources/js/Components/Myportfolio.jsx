import React, {useRef, useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const images = [
    {
      url: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?t=st=1657739713~exp=1657740313~hmac=a5a64cf5e35f138cec5519a9a3defe317da0237bf5e6942f4217690cf0a33070&w=740',
      title: 'Websites',
      width: '30%',
    },
    {
      url: 'https://img.freepik.com/free-vector/designer-girl-concept-illustration_114360-4455.jpg?t=st=1657739783~exp=1657740383~hmac=7a32df75ffeaad27c62a7f6cba573a72d80f74bf6765cf5a884444da5b48df30&w=740',
      title: 'Graphic Designs',
      width: '30%',
    },
    {
      url: 'https://img.freepik.com/free-vector/media-player-concept-illustration_114360-3331.jpg?t=st=1657739809~exp=1657740409~hmac=38bff981e7fad8bc6ab8886132cf873f1a6ffdb83d77734aba00ff264b7070a8&w=740',
      title: 'Animations',
      width: '30%',
    },
  ];
  


  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
  

export default function Myportfolio(props) {
// const Navigation = useNavigate();

// const websitedBtn = ()=>{
//   Navigation('/portfolio/websites');
// }

// const designsBtn = ()=>{
//   Navigation('/portfolio/designs');
// }

// const animationsBtn = ()=>{
//   Navigation('/portfolio/animations');
// }

  useEffect(()=>{
    Aos.init({duration: 2000});
    }, []);

  return (
    <div className='myportfolio_main' ref = {props.portfoliosection}>

        <div className='skills_title' data-aos="fade-up" data-aos-once="true">
    <h2>Portfolio</h2>
</div>




<Box gap={5} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center", minWidth: 150, width: '100%' , marginTop: "20px"}}>
      {images.map((image, index) => (
        <ImageButton
        href = {index==0 ? '/portfolio/websites' : index == 1 ? '/portfolio/designs' : '/portfolio/animations'}
        // onClick={index==0 ? websitedBtn : index == 1 ? designsBtn : animationsBtn}
          focusRipple
          key={index}
          style={{
            width: image.width,
          }}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              style = {{color: "white", fontFamily: "Righteous"}}
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>



    </div>
  )
}
