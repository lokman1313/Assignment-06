import './App.css'
import About from './component/abutUs/About'
import Banner from './component/banner/Banner'
import Challange from './component/challenge/Challange'
import Footer from './component/footer/Footer'
import GetStarted from './component/getStarted/GetStarted'
import Navbar from './component/navbar/Navbar'
import SimplePricing from './component/simplePricing/SimplePricing'

function App() {

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <About></About>

     <GetStarted></GetStarted>
     <SimplePricing></SimplePricing>
     <Challange></Challange>
     <Footer></Footer>
    </>
  )
}

export default App
