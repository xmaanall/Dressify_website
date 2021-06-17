import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormFile from "react-bootstrap/FormFile";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../../../assets/css/auth.css";

export default function ItemPost() {
  const history = useHistory();
  const [item, setItem] = useState({});
  const [validated, setValidated] = useState(false);

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
      .post("http://localhost:4000/api/additem", {
        title: item.title,
        description: item.description,
        style: item.style,
        category: item.category,
        brand: item.brand,
        size: item.size,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
        sellerID: localStorage.getItem("user_id")
      })
      .then((data) => console.log("data posted"))
      
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
          Offer Item
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
            <Form.Control required name="brand" type="text" placeholder="Enter item Brand" onChange={(e) => itemChangeHandler(e)}/>
          </Form.Group>
          <Form.Group required controlId="exampleForm.ControlInput1">
            <Form.Label>Size</Form.Label>
            <Form.Control required name="size" type="text" placeholder="Enter item Size" onChange={(e) => itemChangeHandler(e)}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" name="price" placeholder="Enter item price in S.R" onChange={(e) => itemChangeHandler(e)}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              required
              type="number"
              name="quantity"
              placeholder="Enter item Quantity"
              onChange={(e) => itemChangeHandler(e)}
            />
          </Form.Group>

          <Form.Group>
          <Form.Control type="text" name="image" placeholder="Enter image link" onChange={(e) => itemChangeHandler(e)}/>

          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              id="validationFormik0"
            />
          </Form.Group>
          <Button className="btn btn-primary btn-block" type="submit">
            Post Item
          </Button>
        </Form>
      </div>
    </Container>
  );
}
