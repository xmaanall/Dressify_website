import React from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
export default function itemCard4(props) {
    return (
      
            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                <Card >
                    <Card.Img variant="top" src={props.item.image} />
                    <Card.Body>
                        <Card.Title>{props.item.title}</Card.Title>
                        <Card.Text>
                        {props.item.description}
                                               </Card.Text>

                        <Card.Text className="item-price">
                        {props.item.price} SR
                                               </Card.Text>
                      
                    </Card.Body>
                </Card>
            </div>

         

      
    )
}
