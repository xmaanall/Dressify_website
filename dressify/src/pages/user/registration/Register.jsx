import React, { useState } from 'react';
// import { Col, Row, Button, Form, FormGroup, Label, Input } ;
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import FormControl from 'react-bootstrap/FormControl'
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import { useHistory } from "react-router-dom";

import Swal1 from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')



const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})

export default function Register() {

  const history = useHistory()

  //state 
  const [user, setUser] = useState({});






  const userChangeHandler = (e) => {
    let name = e.target.name
    let value = e.target.value
    
    setUser({ ...user, [name]: value })
  }


  const CheckBoxHandler = (e) => {
  
    let name = e.target.name
    let value = e.target.value
    
    setUser({ ...user, [name]: value })
  }




  const userOnsubmitHandler = (e) => {
    console.log("hhhii")
 
    e.preventDefault()
    axios.post('http://localhost:4000/api/v1/user/', {
      name: user.name, email: user.email, password: user.password, address: user.address, 
      type: user.type
    }).then(data => {
      console.log(data)
       Toast.fire({
        icon: 'success',
        title: data?.data.message,
     
      })
      history.push('/login')
      // setTimeout(() => , 2000)
    }).catch(error => {
      Toast.fire({
        icon: 'error',
        title: error.response?.data.message,
       
      })
   
      
    })
  }
  console.log(user.type)


  
  return (

    
    <Container component="main" maxWidth="xs">
      
    

    <div className="card card-auth">
      <div className="row">
        <div className="col-lg-6 col-sm-6" data-aos="fade-up">
        <Form onSubmit={(e) => userOnsubmitHandler(e)}>
        <h3 className="auth-title" data-aos="fade-up">Join us<br></br>
         <span>Sign up to become a Member!</span></h3>

        <Form.Group className="form-group" controlId="formBasicName1" >
          <Form.Label data-aos="zoom-out-up">Name</Form.Label>
          <FormControl
            autoComplete="fname"
            name="name"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label=" Name"
            autoFocus
            onChange={(e) => userChangeHandler(e)} />
        </Form.Group>

        <Form.Group>
          <Form.Label data-aos="zoom-out-up" >Email address</Form.Label>
          <FormControl  variant="outlined"
         required
         fullWidth
         id = "emailAddress"
         label="Email Address"
         name="email"
         autoComplete="email"
         onChange={(e)=>userChangeHandler(e)} />
          <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label data-aos="zoom-out-up" >Password</Form.Label>
          <FormControl variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>userChangeHandler(e)} type="password" className="form-control" placeholder="Enter password" />
        </Form.Group>

        <Form.Group className="form-group" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <FormControl placeholder="1234 Main St"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="address"
            label="address"
            type="address"
            id="address"
            autoComplete="current-address"
            onChange={(e) => userChangeHandler(e)} />
        </Form.Group>

        <Form.Group className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    name="type"
                    value="retailer"
                    onClick={(e) => CheckBoxHandler(e)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                   Are you Retailer?
                  </label>
                </div>
              </Form.Group>

        <Button variant="primary" type="submit" className="btn btn-primary btn-block">Sign Up</Button>
        <p className="forgot-password text-right">
          Already a member?! <a href="/login">Login</a>
        </p>
        <p className="text-left">
        <a href="/">Back</a>
        </p>
      </Form>
        </div>
          
        <div className="col-lg-6 col-sm-6" data-aos="fade-up-left">
           <img class="auth-img" src="https://media.gucci.com/content/DiaryArticleSingle_Standard_1536x2150/1622218503/DiaryArticleSingle_Gaok-Interior-2021-03_001_Default.jpg"/>
          </div>
          </div>
      </div>
    </Container>
  )
}
