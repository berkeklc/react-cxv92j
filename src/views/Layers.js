import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TransitionContext from '../context/TransitionContext';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Layers() {
  const main = useRef();
  const scrollTween = useRef();
  const [ctx] = useState(gsap.context(() => {}, main));
  const { completed } = useContext(TransitionContext);

  const goToSection = (i) => {
    // Remove the GSAP instance with the specific ID
    // to prevent memory leak
    ctx.data.forEach((e) => {
      if (e.vars && e.vars.id === 'scrollTween') {
        e.kill();
      }
    });
    ctx.add(() => {
      scrollTween.current = gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 1,
        id: 'scrollTween',
        onComplete: () => (scrollTween.current = null),
        overwrite: true,
      });
    });
  };

  useLayoutEffect(() => {
    if (!completed) return;
    ctx.add(() => {
      const panels = gsap.utils.toArray('.panel');
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top bottom',
          end: '+=200%',
          onToggle: (self) =>
            self.isActive && !scrollTween.current && goToSection(i),
        });
      });
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        snap: 1 / (panels.length - 1),
      });
    });
    
    return () => ctx.revert();
  }, [completed]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);

  return (
    <main ref={main}>
      <section className="description panel blue slider1">
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <h1 class="workstitle">WORKS <span>BRANDS</span></h1>
          <p className="slogan">The best <span> way of design. </span></p>
          </Grid>
          <Grid item xs={4} className='relative'>
          <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/gofrette.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
      </Swiper>
          </Grid>
          <Grid item xs={7}>
          <h1 className='brandname'>GOFRETTE</h1>
          <p className='branddetails'>As Kollekt media, we help you present the inside of your brand to your target audience in the most creative and bright way. From corporate identity design to brand development and maintenance, we stand by you and add strength to your brand. <br /> <br />

          The complex structure of the digital age, the power to influence people quickly and the ability to reach them easily; It has also turned social media into a market. In this complexity, we aim to provide effective solutions by producing simple content.</p>
          </Grid>
          </Grid>
        </Box>
          <div className="scroll-down">
        <span class="scrolltext">    Scroll  </span> <img src={`${process.env.PUBLIC_URL}/assets/scroll.png`} />
          </div>
      </section>
      <section className="description panel red slider1">
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <h1 class="workstitle">WORKS <span>BRANDS</span></h1>
          <p className="slogan">The best <span> way of development. </span></p>
          </Grid>
          <Grid item xs={4} className='relative'>
          <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper2 && !thumbsSwiper2.destroyed ? thumbsSwiper2 : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
      >
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/gofrette.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper2}
        spaceBetween={0}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper4"
      >
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/assets/product.png`} />
        </SwiperSlide>
      </Swiper>
          </Grid>
          <Grid item xs={7}>
          <h1 className='brandname'>1453 Osmanlı</h1>
          <p className='branddetails'>As Kollekt media, we help you present the inside of your brand to your target audience in the most creative and bright way. From corporate identity design to brand development and maintenance, we stand by you and add strength to your brand. <br />

The complex structure of the digital age, the power to influence people quickly and the ability to reach them easily; It has also turned social media into a market. In this complexity, we aim to provide effective solutions by producing simple content.</p>
          </Grid>
          </Grid>
        </Box>
          <div className="scroll-down">
           <span class="scrolltext">    Scroll  </span> <img src={`${process.env.PUBLIC_URL}/assets/scroll.png`} />
          </div>
      </section>      <section className="panel orange">TWO</section>
      <section className="panel purple">THREE</section>
      <section className="panel green">FOUR</section>
    </main>
  );
}
