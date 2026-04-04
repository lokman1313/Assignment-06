import { Suspense } from 'react';
import './App.css';
import About from './component/abutUs/About';
import Banner from './component/banner/Banner';
import Challange from './component/challenge/Challange';
import Footer from './component/footer/Footer';
import GetStarted from './component/getStarted/GetStarted';
import Navbar from './component/navbar/Navbar';
import SimplePricing from './component/simplePricing/SimplePricing';
import ProductCards from './component/productCards/ProductCards';

const productDeteils= fetch('/products.json').then(res =>res.json())

function App() {

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <About></About>

     <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
     <ProductCards productDeteils={productDeteils}></ProductCards>
     </Suspense>

     <GetStarted></GetStarted>
     <SimplePricing></SimplePricing>
     <Challange></Challange>
     <Footer></Footer>
    </>
  )
}

export default App
