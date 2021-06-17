import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


export default function Carousels () {
      return (
        <Carousel fade >
        <Carousel.Item >
        {/* {slideImages.map(ele => <div className="d-block w-100">
            <div style={{'backgroundImage': `url(${ele})`}}>
            </div>
          </div> )} */}

          <img 
            className="d-block w-100" 
            src="https://media.gucci.com/content/HeroBigStandard_3200x1520/1621243804/HeroBigStandard_OUVERTURE-21-044_001_Default.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            
            <h3 data-aos="fade-up">DISCOVER UNIQUE FASHION</h3>
            <p data-aos="fade-up">Designer. Preloved. Vintage. Streetwear. Sneakers.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src="https://media.gucci.com/content/HeroRegularStandard_3200x1350/1619622907/HeroRegularStandard_OUVERTURE-21-006_001_Default.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
          <h3 data-aos="fade-up">BUY. SELL.</h3>
            <p data-aos="fade-up">Discover independent brands making waves and the creators behind them. </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
       
      )
  }