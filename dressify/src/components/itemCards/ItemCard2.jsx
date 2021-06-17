import Button from "react-bootstrap/Button";
import "../../assets/css/ItemList.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import axios from "axios";
import React from "react";

export default function ItemCard2(props) {
    const userId = localStorage.getItem("user_id")
    const history = useHistory();

    const detailsHandler = () =>{
        history.push(`/Items/${props.item._id}`);
    }
    const addToCart = () => {
      axios
      .post(`http://localhost:4000/api/cart/${userId}`, {
        productId: props.item._id,
        quantity: 1
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    }
  return (
    <div className="col-lg-4 col-sm-6" data-aos="fade-up">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.item.image}
        />
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>
            {props.item.description}
          </Card.Text>
          <Card.Text className="item-price">{props.item.price}SR</Card.Text>
          <Button variant="primary" onClick= {detailsHandler}>Details</Button>
          <Button variant="primary" onClick= {addToCart}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
