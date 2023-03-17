import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Boxes() {
  const container = useRef();
  const tl = useRef();


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
          <img
          className="kletter"
          src={`${process.env.PUBLIC_URL}/assets/kletter.png`}
       
        />
      <section className="boxes-container" ref={container}>
        <div className="left-section">
          <div className="text-container">
            <h1>The <span className="spirit"> spirit</span> of <br /> <span className='design'>design</span> </h1>
          </div>
          <p>
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
    </main>
  );
}
