import React from 'react'
import './About.css'
import Footer from '../Footer/Footer';
import Banner from '../Banner';
import Ramen from '../../assets/pictures/tonkotsu.jpg'

function About() {
  return (
    <div className='about-container'> 
      <div className='about-content'>
        <div className='about-banner'>
          <Banner title="About Us"/>
        </div>
        
        <div className='legacy-content'>
          <div className='legacy'>
            <h1>Vision</h1>
            <p>We proudly deliver moments of joy to our customers, team members and the communities we serve. We are determined to provide the most authentic Japanese dining experience outside of Japan through quality, service and value.</p>
          </div>
          <div className='legacy'>
            <h1>Philosophy</h1>
            <p>Ichiman Ramen’s philosophy is to serve the most traditional, authentic and delicious Japanese ramen that you can possibly have without actually flying to Japan.</p>
          </div>
        </div>

        <div className='history-content'>
          <div className='history-pic'>
            <img src={Ramen}/>
          </div>
          <div className='history'>
            <h1>Our History</h1>
            <p>Our food is still prepared the same way as it is in Japan; utilizing a unique method of roasting bones 
              before boiling, which is similar to the French style of making consommé. We were the first in the Japanese 
              ramen industry to employ this method, which results in a rich, flavorful broth that is fragrant, and full of 
              depth. We are devoted to replicating the incredible flavor of traditional Japanese ramen, and if equal substitutes 
              for ingredients are not found within the US, we import the ingredients directly from Japan.<br/><br/>
              To provide a full Japanese experience, we fly our designer in from Japan to create every one of our American outlets. 
              We pay attention to every detail of the customer experience– from an open kitchen concept that evokes the atmosphere of 
              a time-honored Japanese ramen shop, caring service reminiscent of Japanese hospitality, to even small details like 
              mouthwash in the restrooms, we go the extra mile to ensure our customers are well taken care of in their dining experience 
              from start to finish.</p>
          </div>
        </div>
      </div>

      <div className='about-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default About