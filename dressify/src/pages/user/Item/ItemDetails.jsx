import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "../../../assets/css/auth.css";
import Form from "react-bootstrap/Form";

export default function ItemDetails(props) {
  console.log(props.match.params.id);
  const userId = localStorage.getItem("user_id")
  const itemId = props.match.params.id;
  const [item, setItem] = useState([]);
  const [qty, setQty] = useState({});

  const qtyChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setQty({ ...qty, [name]: value });
  };
  
  const addToCart = () => {
    axios
    .post(`http://localhost:4000/api/cart/${userId}`, {
      productId: itemId,
      quantity: qty.quantity
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/items/${itemId}`)
      .then((data) => {
        setItem(data.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      <div className="card card-auth">
        <div className="row">
          <div className="col-lg-5 col-sm-6" data-aos="fade-up-left">
            <img class="post-img" src={item.image} />
          </div>
          <div className="col-lg-6 col-sm-6" data-aos="fade-up">
            <div className="post-details">
              <h2 className="post-title">{item.title}</h2>
              <a href="#">
                <p style={{ color: "#2d2d2d", fontWeight: 200, fontSize: 15 }}>
                  <span>@</span>
                  {item.brand}
                </p>
              </a>
              <p class="item-price card-text">
                {item.price}SR
                <span
                  style={{
                    padding: 12,
                    color: "#2d2d2d",
                    fontWeight: 200,
                    fontSize: 15,
                  }}
                >
                  Including VAT
                </span>
              </p>
              <p>{item.description}</p>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h5>
                    Size: <span style={{ color: "#7d7d7d" }}>{item.size}</span>
                  </h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>
                    Quantity:
                    <span style={{ color: "#7d7d7d" }}>
                      <Form.Control
                        required
                        type="number"
                        name="quantity"
                        style={{ width: 120 }}
                        onChange={(e) => qtyChangeHandler(e)}
                      />
                    </span>
                  </h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>
                    Style:{" "}
                    <span style={{ color: "#7d7d7d" }}>{item.style} </span>
                  </h5>
                </ListGroup.Item>
                {/* <ListGroup.Item><h5>Date Added:  <span style={{ color: '#7d7d7d' }}>{item.date_added}</span></h5></ListGroup.Item> */}
                <ListGroup.Item>
                  <p>All deliveries are offered based on availability</p>
                </ListGroup.Item>
              </ListGroup>
              <Button
                className="btn btn-primary btn-block"
                type="submit"
                style={{ margin: 20 }}
                onClick= {addToCart}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
