import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../assets/css/ItemList.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function ItemCard3(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
    setShow(false);
  }
    const handleShow = () => setShow(true);
    const history = useHistory();

  const onClickEdit = () => {
    history.push(`/EditItem/${props.item._id}`);
  };
  const onClickDelete = (e) =>  {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/api/items/${props.item._id}`)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));  
      window.location.reload();  
  };
  return (
    <div className="col-lg-4 col-sm-6" data-aos="fade-up">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.item.image} />
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>
          {props.item.description}
          </Card.Text>
          <Button variant="primary" onClick= {onClickEdit}>Edit</Button>
          <Button variant="primary" onClick={handleShow}>Delete</Button>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this item?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={(e)=>{onClickDelete(e); handleClose();}}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
