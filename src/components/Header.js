import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerElement = headerRef.current;

    gsap.to(headerElement, {
      duration: 1,
      color: '#363636',
      yoyo: true,
      repeat: 21,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    
    <header className="header" >
      <a
        className="brand"
        href="/"
        rel="noreferrer"
      >
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/Klogo.png`}
       
        />
      </a>
      <div>
        <h3>
         <span class="weare">weare</span> 
         <span class="perfect" ref={headerRef}>perfecttogether</span>
        </h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Us</Link>
          </li>
          <li>
            <Link to="/scroll">Works</Link>
          </li>
          
        </ul>
      </nav>
      <svg class="socials" xmlns="http://www.w3.org/2000/svg" width="43.241" height="200.829" viewBox="0 0 43.241 200.829">
  <g id="Group_14083" data-name="Group 14083" transform="translate(-1654.119 -201.879)">
    <g id="instagram" transform="translate(1654.115 201.879)">
      <g id="Group_14051" data-name="Group 14051" transform="translate(0.005)">
        <g id="Group_14050" data-name="Group 14050">
          <path id="Path_81501" data-name="Path 81501" d="M32.435,0H10.815A10.842,10.842,0,0,0,0,10.81V32.431a10.843,10.843,0,0,0,10.81,10.81h21.62a10.843,10.843,0,0,0,10.81-10.81V10.81A10.842,10.842,0,0,0,32.435,0Zm7.206,32.431a7.214,7.214,0,0,1-7.206,7.206H10.815a7.216,7.216,0,0,1-7.206-7.206V10.81A7.215,7.215,0,0,1,10.815,3.6h21.62a7.214,7.214,0,0,1,7.206,7.206V32.431Z" transform="translate(-0.005)" fill="#363636"/>
        </g>
      </g>
      <g id="Group_14053" data-name="Group 14053" transform="translate(30.635 7.206)">
        <g id="Group_14052" data-name="Group 14052">
          <circle id="Ellipse_77" data-name="Ellipse 77" cx="2.702" cy="2.702" r="2.702" fill="#363636"/>
        </g>
      </g>
      <g id="Group_14055" data-name="Group 14055" transform="translate(10.815 10.81)">
        <g id="Group_14054" data-name="Group 14054">
          <path id="Path_81502" data-name="Path 81502" d="M113.215,102.4a10.81,10.81,0,1,0,10.81,10.81A10.809,10.809,0,0,0,113.215,102.4Zm0,18.017a7.207,7.207,0,1,1,7.206-7.208A7.207,7.207,0,0,1,113.215,120.417Z" transform="translate(-102.405 -102.4)" fill="#363636"/>
        </g>
      </g>
    </g>
    <path id="dribbble-logo" d="M21.62,0a21.62,21.62,0,1,0,21.62,21.62A21.645,21.645,0,0,0,21.62,0ZM35.709,10.2a18.057,18.057,0,0,1,4.046,10.869,30.518,30.518,0,0,0-12.161-.117c-.651-1.522-1.324-2.972-2-4.342A35.8,35.8,0,0,0,35.709,10.2ZM33.274,7.722a32.236,32.236,0,0,1-9.293,5.8,83.31,83.31,0,0,0-6.144-9.649,18.1,18.1,0,0,1,15.437,3.85ZM14.331,5.006a79.462,79.462,0,0,1,6.325,9.75A58.025,58.025,0,0,1,3.973,17.4,18.217,18.217,0,0,1,14.331,5.006ZM3.49,20.877h.1A62.779,62.779,0,0,0,14.6,19.861a53.478,53.478,0,0,0,7.7-1.987c.629,1.253,1.254,2.575,1.86,3.961a32.711,32.711,0,0,0-8.493,4.211,38.246,38.246,0,0,0-7.892,7.293A18.062,18.062,0,0,1,3.471,21.621C3.471,21.372,3.48,21.124,3.49,20.877Zm6.789,14.9a34.906,34.906,0,0,1,7.46-6.939,29.107,29.107,0,0,1,7.738-3.8A67.535,67.535,0,0,1,29.122,38.14a18.09,18.09,0,0,1-18.843-2.365Zm22.037.5A71.955,71.955,0,0,0,28.9,24.209a27.351,27.351,0,0,1,10.622.359A18.168,18.168,0,0,1,32.316,36.271Z" transform="translate(1654.119 281.879)" fill="#363636"/>
    <g id="_x31_0.Linkedin" transform="translate(1645.326 351.88)">
      <path id="Path_81503" data-name="Path 81503" d="M64.685,63.216V48.263c0-7.349-1.582-12.963-10.156-12.963a8.862,8.862,0,0,0-8.013,4.389h-.1V35.963H38.3V63.216h8.472V49.692c0-3.572.663-6.992,5.052-6.992,4.338,0,4.389,4.032,4.389,7.2V63.165h8.472Z" transform="translate(-13.857 -12.388)" fill="#363636"/>
      <path id="Path_81504" data-name="Path 81504" d="M11.3,36.6h8.472V63.853H11.3Z" transform="translate(-0.637 -13.025)" fill="#363636"/>
      <path id="Path_81505" data-name="Path 81505" d="M14.9,10a4.925,4.925,0,1,0,4.9,4.9A4.9,4.9,0,0,0,14.9,10Z" transform="translate(0)" fill="#363636"/>
    </g>
  </g>
</svg>

    </header>
    
  );
}
