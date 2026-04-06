import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"

import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
    </main>
  )
}
export default App
