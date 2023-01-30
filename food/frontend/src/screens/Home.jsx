import React from 'react'
import Card from '../components/Card/Card'
import Carousal from '../components/Carousal/Carousal'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'


const Home = () => {
   return (
      <>
         <Header />
         <Carousal />
         <div className='m-3'>
            <Card />
         </div>
         <Footer />
      </>
   )
}

export default Home