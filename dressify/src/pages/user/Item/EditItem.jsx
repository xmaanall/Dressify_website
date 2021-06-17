import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";

export default function EditItem(props) {
    const itemId = props.match.params.id;
    const [item, setItem] = useState([]);
    const [validated, setValidated] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios
          .get(`http://localhost:4000/api/items/${itemId}`)
          .then((data) => {
            setItem(data.data);
          })
          .catch((error) => console.error(error));
      }, []);

      const itemChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setItem({ ...item, [name]: value });
      };
    const onSubmitHandler = (e) => {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      else{
      e.preventDefault();
        axios
          .put(`http://localhost:4000/api/items/${itemId}`, {
            title: item.title,
            description: item.description,
            style: item.style,
            category: item.category,
            brand: item.brand,
            size: item.size,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      history.push('/ItemsBySeller');
      window.location.reload();  
      }
      setValidated(true);
    };
    return (
      <Container component="main" maxWidth="xs">
      <div className="card card-post" data-aos="fade-up">
        <h3 class="auth-title" data-aos="fade-up">
          Update Item
        </h3>
        <Form
          className="container"
          noValidate
          validated={validated}
          onSubmit={(e) => onSubmitHandler(e)}
          encType='multipart/form-data'
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              value={item.title}
              placeholder="Enter your item title"
              onChange={(e) => itemChangeHandler(e)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              name="description"
              value={item.description}
              placeholder="Describe your item to us"
              onChange={(e) => itemChangeHandler(e)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control
              required
              as="select"
              name="category"
              value={item.category}
              placeholder="Select item Category"
              onChange={(e) => itemChangeHandler(e)}
            >
              <option disabled selected="selected">
                Select item Category{" "}
              </option>
              <option>Clothes</option>
              <option>Shoes</option>
              <option>Bags</option>
              <option>Jewellery</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Style</Form.Label>
            <Form.Control
              required
              as="select"
              name="style"
              value={item.style}
              placeholder="Select item Style"
              onChange={(e) => itemChangeHandler(e)}
            >
              <option disabled selected="selected">
                Select item Style{" "}
              </option>
          <option>Vintage</option>
          <option>Streetwear</option>
          <option>Designer</option>
          <option>Trendy</option>
          <option>Sporty</option>
          <option>Grunge</option>
          <option>Bohemian</option>
          <option>Casual</option>
            </Form.Control>
          </Form.Group>
          <Form.Group required controlId="exampleForm.ControlInput1">
            <Form.Label>Brand</Form.Label>
            <Form.Control required name="brand"  value={item.brand} type="text" placeholder="Enter item Brand" onChange={(e) => itemChangeHandler(e)}/>
          </Form.Group>
          <Form.Group required controlId="exampleForm.ControlInput1">
            <Form.Label>Size</Form.Label>
            <Form.Control required name="size"  value={item.size} type="text" placeholder="Enter item Size" onChange={(e) => itemChangeHandler(e)}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" name="price"  value={item.price} placeholder="Enter item price in S.R" onChange={(e) => itemChangeHandler(e)}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              required
              type="number"
              name="quantity"
              value={item.quantity}
              placeholder="Enter item Quantity"
              onChange={(e) => itemChangeHandler(e)}
            />
          </Form.Group>
          <Form.Group>
          <Form.Control type="text" name="image"  value={item.image} placeholder="Enter image link" onChange={(e) => itemChangeHandler(e)}/>
          </Form.Group>
          <Button className="btn btn-primary btn-block" type="submit">
            Submit Changes
          </Button>
        </Form>
      </div>
    </Container>
    )
}
