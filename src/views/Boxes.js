import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Container from '@mui/material/Container';
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation]);
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import BackToTopButton from '../components/BackToTopButton';

import 'leaflet/dist/leaflet.css'; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { Autoplay, EffectCoverflow } from "swiper";

export default function Boxes() { 
  const container = useRef();
  const tl = useRef();
  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{children}</button>;
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const position = L.latLng(38.45230208978023, 27.09748456244518); // Harita merkezi
  const customMarkerIcon = L.icon({
    iconUrl: 'assets/marker.png',
    iconSize: [150, 150],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
  });
  const markers = [
    {
      position: L.latLng(38.45230208978023, 27.09748456244518),
      content: 'Turkey Office'
    },
    {
      position: [51.51, -0.1],
      content: 'London Office'
    },
   
  ];
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.box');
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, '<')
        .to(boxes[2], { y: -166 })
        .reverse();
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <main>
            <BackToTopButton />

          <img
          className="kletter"
          src={`${process.env.PUBLIC_URL}/assets/kletter.png`}
       
        />
      <section className="boxes-container" ref={container}>
        <div className="left-section">
          <div className="text-container">
          <img
          className="bghome"
          src={`${process.env.PUBLIC_URL}/assets/bghome.png`}
       
        />
            <h1>The <span className="spirit"> spirit</span> of <br /> <span className='design'>design</span> </h1>
          </div>
          <p className='texthome'>
            Kollekt design everything even your dreams.
          </p>
        </div>
        <div className="right-section">
          <p className="posabs"> <span className="askollekt">As Kollekt media,</span> we help you 
              present the inside of your brand 
              to your target audience in the 
              most creative and bright way. 
              From corporate identity design to 
              brand development 
              and maintenance, we stand by you 
              and add strength to your brand.
          </p>  <br />
          <p>The complex structure of the 
              digital age, the power to influence 
              people quickly and the ability to 
              reach them easily; It has also 
              turned social media into a market. 
              In this complexity, 
              we aim to provide effective 
              solutions by producing simple 
              content.
          </p> <br />
          <p> 
          Our purpose is to help 
          organizations reflect their own 
          core values in every 
          communication aspect possible. In 
          a deep and simple way.
          </p> <br />
          <p>
          We provide your mass 
          communication with creative 
          works, and take on the 
          management and regular 
          reporting of the communication 
          process.
          </p>
                    
        </div>
      
      </section>
      <section className='services'>
        <div className='titlearea'>
          <h1>Be <span className='better'>Better &</span> <br /> <span className='built'>Built</span> Different. </h1>
        </div>
        <div className='servicesarea'>
          <h3>    <img
          className="serviceicon"
          src={`${process.env.PUBLIC_URL}/assets/icons.png`}
       
        /> Services</h3>
          <div className='servicesitem'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                </Grid>
                <Grid  item xs={3}>
                  <Item className='servicesgrid'>Advertising</Item>
                  <Item className='servicesgrid'>Animation</Item>
                  <Item className='servicesgrid'>Branding</Item>
                  <Item className='servicesgrid'>Design</Item>
                  <Item className='servicesgrid'>Film & Video</Item>
                </Grid>
                <Grid item xs={3}>
                  <Item className='servicesgrid'>Advertising</Item>
                  <Item className='servicesgrid'>Animation</Item>
                  <Item className='servicesgrid'>Branding</Item>
                  <Item className='servicesgrid'>Design</Item>
                  <Item className='servicesgrid'>Film & Video</Item>
                </Grid>
              </Grid>
            </Box>
        </div>
        </div>
       
      </section>
      <section className='products'>
      <Container  maxWidth="lg">
      <div className="swiper-container">

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="mySwiper"
        autoHeight={true}
      >
  
<SwiperSlide>
<div className="slide-content">
      <div className="slide-image">
        <img src={`${process.env.PUBLIC_URL}/assets/product.png`} alt="Nature 1" />
      </div>
      <div className="slide-text">
        <h2>Slide Title 1</h2>
        <p>Slide Description 1</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="slide-content">
      <div className="slide-image">
        <img src={`${process.env.PUBLIC_URL}/assets/product.png`} alt="Nature 1" />
      </div>
      <div className="slide-text">
        <h2>Slide Title 1</h2>
        <p>Slide Description 1</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="slide-content">
      <div className="slide-image">
        <img src={`${process.env.PUBLIC_URL}/assets/product.png`} alt="Nature 1" />
      </div>
      <div className="slide-text">
        <h2>Slide Title 1</h2>
        <p>Slide Description 1</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="slide-content">
      <div className="slide-image">
        <img src={`${process.env.PUBLIC_URL}/assets/product.png`} alt="Nature 1" />
      </div>
      <div className="slide-text">
        <h2>Slide Title 1</h2>
        <p>Slide Description 1</p>
      </div>
    </div>
  </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
</div>
      </Container>

      </section>

      <section className='contacts'> 
        <Container maxWidth='xl'>
          <Box sx={{flexGrow : 1}}>
            <Grid container spacing={2}>
            <Grid item xs={6}>
            <h3 className='locationtext'>    <img
            className="serviceicon"
            src={`${process.env.PUBLIC_URL}/assets/location.png`}
        
          /> Locations</h3>
          <h4>
          We have one and only location in İzmir. 
          </h4>
          <p>
            Bostanlı, İzmir / TURKEY
          </p>
            </Grid>
            <Grid item xs={6}>
            <h3 className='locationtext'>    <img
            className="serviceicon"
            src={`${process.env.PUBLIC_URL}/assets/mail.png`}
        
          /> Contact</h3>
           <h4>
           If you think you need design, we ready for the help.
          </h4>
          <p>
           info@kollektmedia.com
          </p>
            </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <section className='mapsarea'>
      <Box sx={{flexGrow : 1}}>
      <MapContainer center={position} zoom={18} style={{ height: '579px' }}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"      attribution=""
 filter="grayscale(100%)"  />
      {markers.map(marker => (
        <Marker key={marker.position.toString()} icon={customMarkerIcon} position={marker.position}>
          <Popup>{marker.content}</Popup>
        </Marker>
      ))}
    </MapContainer>
      </Box>
      </section>
   
    </main>
  );
}
