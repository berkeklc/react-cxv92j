import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Router from './router/Router';
import Header from './components/Header';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
