import React from 'react'
import './Home.css';
import HeroSection from '../HeroSection';
import Card from '../Card';
import Footer from '../Footer/Footer';
import tonkotsu from "../../assets/pictures/tonkotsu.jpg";
import miso from "../../assets/pictures/miso.jpg";
import shoyu from "../../assets/pictures/shoyu.jpg";


function Home() {
  return (
    <div className='container'>
      <div className='top'>
        <HeroSection />
      </div>
      
      <div className='cards-container'>
        <h1>Delicious Choices of Ramen</h1>
        <div className='cards'>
          <Card 
            picture={tonkotsu} 
            name="Tonkatsu Ramen" 
            summary="Tonkotsu ramen is a deliciously creamy pork bone broth traditionally served up with long thin noodles and topped with a variety of ingredients"
          />

          <Card 
            picture={miso}
            name="Miso Ramen"
            summary="Miso ramen gets its name from the generous amount of miso that gives the broth a strong, pleasantly sharp umami flavor. The broth is sometimes mixed with tonkotsu, lard, oily chicken, or fish broth, giving miso ramen a robust flavor."
          />

          <Card 
            picture={shoyu}
            name="Shoyu Ramen"
            summary="Shoyu ramen is a ramen dish with a broth made of soy sauce. Shoyu means soy sauce in Japanese. It has high umami flavors along with a tangy strong taste too."
          />
        </div>
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Home