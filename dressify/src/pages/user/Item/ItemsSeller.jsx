import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard3 from "../../../components/itemCards/ItemCard3";
export default function ItemsSeller() {
  const [items, setItems] = useState([]);
  // user/seller id
  const id = localStorage.getItem("user_id")
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/items/seller/${id}`)
      .then((data) => {
        setItems(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container b-widget--background">
      <div className="row">
        {items.map((item) => (
          <ItemCard3 item={item} />
        ))}
      </div>
    </div>
  );
}
