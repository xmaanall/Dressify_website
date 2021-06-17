import React from 'react'
import "../../assets/css/ItemList.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


export default function ItemCard() {
      return (
            <div className="container b-widget--background">
                  <div className="items-title"  data-aos="zoom-out" style={{ paddingTop: 42.8, paddingBottom: 40.9}}> Recommended For You</div>
                  <div className="row">
                        <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                              <Card>
                                    <Card.Img variant="top" src="
                                   https://ounass-prod3.atgcdn.ae/small_light(dw=350,of=webp)/pub/media/catalog/product/2/1/214217820_black_in.jpg?1610642647.2564" />
                                    <Card.Body>
                                          <Card.Title>FENDI ROMA</Card.Title>
                                          <Card.Text>
                                               Elevate the casual wardrobe the Italian way with Fendi's Logo Sweatshirt. Made in Italy from cotton jersey,
                                               </Card.Text>
                                               <Card.Text className="item-price">
                                               4,250 SAR
                                               </Card.Text>
                                          <Button variant="primary" href="/items">More Info</Button>
                                    </Card.Body>
                              </Card>
                        </div>

                        <div className="col-md-4 col-sm-6" data-aos="fade-up">
                              <Card>
                                    <Card.Img variant="top" src="
                                   https://ounass-prod1.atgcdn.ae/small_light(p=zoom,of=webp,q=65)/pub/media/catalog/product/2/1/213451834_beige_in.jpg?1620489929.5265" />
                                    <Card.Body>
                                          <Card.Title>GUCCI</Card.Title>
                                          <Card.Text>
                                          This classic polo by Gucci will be a statement-making addition  gent's wardrobe.
                                            The design reworks the House's signature GG.
                                               </Card.Text>
                                               <Card.Text className="item-price">
                                                3.900 SAR
                                               </Card.Text>
                                               <Button variant="primary" href="/items">More Info</Button>
                                    </Card.Body>
                              </Card>
                        </div>

                        <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                              <Card>
                                    <Card.Img variant="top" src="
                                    https://ounass-prod4.atgcdn.ae/small_light(dw=350,of=webp)/pub/media/catalog/product/2/1/214189659_lbl_in.jpg?1611161634.5771" />
                                    <Card.Body>
                                          <Card.Title>DOLCE & GABBANA</Card.Title>
                                          <Card.Text>
                                          Feminine and playful, this top by Dolce & Gabbana is a perfect example of the Italian label's spirit.Crafted in Italy from pure cotton with a camellia print,
                                               </Card.Text>
                                               <Card.Text className="item-price">
                                                2.800 SAR
                                               </Card.Text>
                                               <Button variant="primary" href="/items">More Info</Button>
                                    </Card.Body>
                              </Card>
                        </div>

                  </div>
            </div>


      )
}