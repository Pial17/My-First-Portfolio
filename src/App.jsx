import React from "react"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Mywork from "./Components/Mywork/Mywork"
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Services/Services"


function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
