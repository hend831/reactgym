import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/header/Header'
import Banner from './Components/banner/Banner'
import About from './Components/about/About'
import Cta from './Components/cta/Cta'
import Programs from './Components/programs/Programs'
import Traner from './Components/traner/Traner'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
const App = () => {
    return (
    
      <>
      <Header/>
      <Banner/>
      <About/>
      <Cta/>

      <Programs/>
      
      <Traner/>
      <Contact/>
      <Footer/>
      </>
      
      
      )
    }
    
    export default App