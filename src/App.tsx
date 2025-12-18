import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SideBar from './components/Sidebar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import About from './components/About'
import Powered from './components/Powered'
import Sabi from './components/Sabi'
import FAQs from './components/FAQs'
import CTA from './components/CTA'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
    const [ navClicked,setNavClicked ] = useState(false)


  return (
    <>
    <Navbar navClicked={navClicked} setNavClicked={setNavClicked}/>
    <SideBar navClicked={navClicked} setNavClicked={setNavClicked} />
    <Hero/>
    <div id="metrics" className="pt-20"><Metrics/></div>
    <div id="about" className="pt-20"><About/></div>
    <div id="powered" className="pt-20"><Powered/></div>
    <div id="sabi" className="pt-20"><Sabi/></div>
    <Pricing/>
    <div id="faqs" className="pt-20"><FAQs/></div>
    <div id="cta" className="pt-20"><CTA/></div>
    <div id="footer" className="pt-20"><Footer/></div>
    </>
  )
}

export default App
