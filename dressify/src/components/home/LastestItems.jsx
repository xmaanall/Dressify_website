import React from 'react'
import "../../assets/css/ItemList.css"
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Banner1 from "../../assets/imges/bg-1.jpeg";
import Banner2 from "../../assets/imges/bg-2.webp";


export default function LastestItems() {
      return (
            <div className="container b-widget--background">
                  <div className="row">
                        <a href="/items">
                        <Carousel fade data-aos="fade-up">
                              <Carousel.Item interval={1000}>
                                    <img
                                          className="d-block w-100"
                                          src={Banner1}
                                          alt="First slide"/>

                              </Carousel.Item>
                              <Carousel.Item interval={500}>
                                    <img
                                          className="d-block w-100"
                                          src={Banner2}
                                          alt="Second slide"/>
                              </Carousel.Item>
                        </Carousel>
                        </a>
                  </div>
            </div>


      )
}