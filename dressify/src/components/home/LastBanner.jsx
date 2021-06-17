import React from 'react'
import "../../assets/css/ItemList.css"
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Banner3 from "../../assets/imges/bg-3.webp";


export default function LastestItems() {
      return (
            <div className="container b-widget--background" style={{paddingBottom: 60}}>
                  <div className="row">
                        <Carousel fade data-aos="fade-up">
                              <Carousel.Item interval={1000}>
                                    <a href="/items">
                                    <img
                                          className="d-block w-100"
                                          src={Banner3}
                                          alt="First slide"/>
                                    </a>

                              </Carousel.Item>
                        </Carousel>
                  </div>
            </div>


      )
}