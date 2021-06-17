import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";

 
export default function OrderRow(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleDelete = () =>  {
    axios
      .delete(`http://localhost:4000/api/order/${props.order._id}`)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));  
      window.location.reload();  
  };

  return (
    <>
      <tr>
        <td>{props.order._id}</td>
        <td>{props.order.bill}</td>
        <td>
          <Button variant="primary" onClick={handleShow}>
            Details
          </Button>
        </td>
      </tr>

      <Modal show={show}  onHide={handleClose} animation={TextTrackCue}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="show-grid">
          <Row>
              <Col xs={12} md={4}>
                 Name
              </Col>
              <Col xs={12} md={4}>
                 Quantity
              </Col>
              <Col xs={12} md={4}>
                 Price
              </Col>
            </Row>
            <hr></hr>
          {props.order.items.map((item) =>
          <Row>
              <Col xs={12} md={4}>
               {item.name}
              </Col>
              <Col xs={12} md={4}>
               {item.quantity}
              </Col>
              <Col xs={12} md={4}>
               {item.price}
              </Col>
            </Row>)}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
