import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function ItemRow(props) {
  const userId = localStorage.getItem("user_id");
  console.log(props.item._id);
  const handleDelete = () =>  {
    axios
      .delete(`http://localhost:4000/api/cart/${userId}/${props.item._id}`)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));  
       
      console.log("hey there");
  };
  return (
    <tr>
      <td>{props.i}</td>
      <td>{props.item.name}</td>
      <td>{props.item.price}</td>
      <td>{props.item.quantity}</td>
      <td>{props.item.quantity * props.item.price}</td>
      <td><Button onClick={handleDelete} variant="danger">x</Button></td>
    </tr>
  );
}
