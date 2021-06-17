import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "../../../assets/css/auth.css";
import ItemCard2 from "../../../components/itemCards/ItemCard2";

export default function ItemDetails(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/items")
      .then((data) => {
        setItems(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container b-widget--background">
      <div
        className="items-title"
        data-aos="zoom-out"
        style={{ paddingTop: 42.8, paddingBottom: 40.9 }}
      >
        {" "}
        Clothing{" "}
      </div>
      <div className="container b-widget--background">
        <div className="row">
          {items.map((item) => (
            <ItemCard2 item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
