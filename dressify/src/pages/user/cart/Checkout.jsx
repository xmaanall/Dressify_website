import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import ItemRow from "./ItemRow";

export default function Checkout() {
  const userId = localStorage.getItem("user_id");
  console.log(userId);
  const [Items, setItems] = useState([]);
  console.log(Items.items);
  let cartContent = "";

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/cart/${userId}`)
      .then((data) => {
        setItems(data.data);
      })
      .catch((error) => console.error(error));
  }, []);
  if(Items.items == undefined) {
      cartContent = "Your cart is empty you didn't add any products!"
    } else {
      cartContent = Items.items.map((item, i) => (
        <ItemRow item={item} i={i++}/>
     ));
    }
      
  const onSubmitHandler = (e) => {
      axios
      .post(`http://localhost:4000/api/order/${userId}`)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
 
  return (
    <Container component="main" maxWidth="xs">
      <div className="card user-detils">
        <div className="row">
          <div className="col-lg-6 col-sm-6" data-aos="fade-up">
            <ul className="user-list">
              <h3 className="user-title">My Cart</h3>
              <p>Order Summary</p>
              <Table striped bordered hover>
                <thead style={{backgroundColor: '#a87a63'}}>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                {cartContent}
                </tbody>
              </Table>
              <hr></hr>
              <h5>
                <h4>Cart Total:</h4>
                {Items.bill}SR
              </h5>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-6" data-aos="fade-up">
            <div className="card-body">
              <h2 className="card-title">Select Payment Method</h2>
              <Tabs defaultActiveKey="Credit" id="uncontrolled-tab-example">
                <Tab eventKey="Credit" title="Credit Card">
                  <Form  onSubmit={(e) => onSubmitHandler(e)}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Name on Card *</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        placeholder="Enter Name on Card *"
                      />
                      <Form.Text className="text-muted">
                        We'll never share your Credits with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Card Number *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter Card Number *"
                      />
                    </Form.Group>

                    <Form.Row>
                      <Form.Group controlId="formGridCity">
                        <Form.Label>Expiration Date *</Form.Label>
                        <Form.Control required type="month" />
                      </Form.Group>

                      <Form.Group controlId="formGridZip" aria-required>
                        <Form.Label>Security Code *</Form.Label>
                        <Form.Control required maxlength="3"/>
                      </Form.Group>
                    </Form.Row>
                      <Button type="submit" style={{ width: 450 }}>Place Order</Button>
                  </Form>
                </Tab>
                <Tab eventKey="Cash" title="Cash on Delivery">
                <Form  onSubmit={(e) => onSubmitHandler(e)}>
                  <Card style={{ padding: 12 }}>
                    <Card.Text>
                      <p style={{color: "black"}}>Cash on Delivery</p>
                    </Card.Text>
                    <Card.Text>
                      Please note: In case of Returns, we will refund via an
                      online store credit.
                    </Card.Text>
                    <Button type="submit" style={{ width: 400 }}>Place Order</Button>
                  </Card>
                  </Form>
                </Tab>
              </Tabs>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
