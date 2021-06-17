import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ItemRow from "./ItemRow";
import {useHistory, Link} from "react-router-dom"
export default function Cart() {
  const userId = localStorage.getItem("user_id");
  console.log(userId);
  const [Items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/cart/${userId}`)
      .then((data) => {
        setItems(data.data);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(Items.items)
  let cartContent = "";
  let cartEmpty = "";
  if (Items.items == undefined) {
    cartEmpty = "Your cart is empty you didn't add any products!"
  } else {
    cartContent = Items.items.map((item, i) => (
      <ItemRow item={item} i={i++} />
    ));
  }

  const onClickEmpty = () => {
    axios
      .delete(`http://localhost:4000/api/cart/${userId}`)
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    window.location.reload();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className="card user-detils">
        <div className="row">
          <div className="col-lg-4 col-sm-6" data-aos="fade-up">
            <ul className="user-list">
              <h3 className="user-title">My Cart</h3>
              <h5>
                <h4>Cart Total</h4>
                {Items.bill | 0} SR
              </h5>
              {(Items.items == undefined ?
           null :
          [ 
            <a href="/Checkout">
          <Button style={{ width: 260 }}>Checkout</Button> </a>,
           <Button onClick={onClickEmpty} style={{ width: 260 }}>Empty Cart</Button>
          ]
          )}
             
             
             
            
            </ul>
          </div>
          <div className="col-lg-8 col-sm-6" data-aos="fade-up">
            <div className="card-body">
              <h2 className="card-title">Product</h2>

              <div className="row">
                {cartEmpty}
                <Table striped bordered hover>
                {(Items.items == undefined ?
           null :
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>QTY</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                   )}
                  <tbody>
                    {cartContent}
                  </tbody>
                  
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
