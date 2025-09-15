import React from 'react'
import Banner from '../Banner';
import Footer from '../Footer/Footer';
import Card from '../Card';
import './Menu.css';
import tonkotsu from "../../assets/pictures/tonkotsu.jpg";
import miso from "../../assets/pictures/miso.jpg";
import shoyu from "../../assets/pictures/shoyu.jpg";
import gyoza from '../../assets/pictures/gyoza.jpg'
import tempura from '../../assets/pictures/tempura.jpg'
import edamame from '../../assets/pictures/edamame.jpg'
import tea from '../../assets/pictures/tea.jpeg'
import ramune from '../../assets/pictures/ramune.jpeg'
import bubble from '../../assets/pictures/bubble.jpeg'

function Menu() {
  return (
    
    <div className='menu-container'>
      <Banner title="Menu"/>

      <div className='item-container'>
        <h1>Ramens</h1>
        <div className='food-container'>
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
        <h1>Appetizers</h1>
        <div className='food-container'>
          <Card 
            picture={gyoza}
            name="Gyoza"
            summary="Gyoza are dumplings filled with ground meat and vegetables and wrapped in a thin dough."
          />
          <Card 
            picture={tempura}
            name="Tempura"
            summary="Tempura is a Japanese dish of lightly battered and deep-fried seafood, vegetables, or meats that creates a light and crispy coating."
          />
          <Card 
            picture={edamame}
            name="Edamame"
            summary="Edamame are young green soybeans that are native to East Asia and have been a part of Japanese cuisine for centuries."
          />
        </div>
        <h1>Beverages</h1>
        <div className='food-container'>
          <Card 
            picture={tea}
            name="Green Tea"
            summary="Green tea is a type of tea made from the leaves of the Camellia sinensis plant that are unfermented, steamed, pan-fried, and dried."
          />
          <Card 
            picture={ramune}
            name="Ramune"
            summary="Ramune is a Japanese carbonated soft drink."
          />
          <Card 
            picture={bubble}
            name="Bubble Tea"
            summary="Bubble Tea, also known as boba milk tea, is a cold, frothy drink made with a tea base shaken with flavors, sweeteners and/or milk with tapioca pearls at the base of the drink."
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Menu