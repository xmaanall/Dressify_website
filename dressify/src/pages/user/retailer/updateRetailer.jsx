import React, { useState, useEffect } from 'react';


import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import axios from "axios";
import FormControl from 'react-bootstrap/FormControl'

import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import { useHistory } from "react-router-dom";



import { useParams } from 'react-router-dom'
import style from './style.css'

import Swal1 from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')


export default function UpdateRetailer(props) {

  const history = useHistory()



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
  


 


  const [User, setUser] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [Image, setImage] = useState([]);
  const [bio, setBio] = useState('');










  const Userid = localStorage.getItem("user_id")
  console.log(Userid)



  const [items, setItems] = useState([]);

  const userOnsubmitHandler = (e) => {

    e.preventDefault()

    axios.post('http://localhost:4000/api/v1/user/updateRetailer/' + Userid,
      { name, email, address, Image })

      .then(data => {

        Toast.fire({
          icon: 'success',
          title: data?.data.message,
       
        })

     
        history.push('/MyAccount')
       

      }).catch(err => {
        Toast.fire({
          icon: 'error',
          title: err.response?.data.message,
         
        })

      })

  }




  const id = localStorage.getItem("user_id")


  useEffect(() => {
    console.log(id)
    console.log("manal saud alotaibi")

    axios.get(`http://localhost:4000/api/v1/user/updateRetailer/${id}`)

      .then((data) => {
        setName(data.data.name);

        setImage(data.data.Image)
        console.log(data.data.Image)
        setAddress(data.data.address);
        setEmail(data.data.email);

        //  userDetail(data.data);
      })

  }, [])



  return (


    <Container component="main" maxWidth="xs">
     

      <div className="card card-post" data-aos="fade-up">

        <Form onSubmit={(e) => userOnsubmitHandler(e)} >



          <Form.Group>
          <Form.Label>Profile Image:</Form.Label>
            <Form.Control type="text" name="image" placeholder="Enter Profile Image" onChange={(e) => setImage(e.target.value)} />
            {/* onChange={(e) => itemChangeHandler(e)} */}
          </Form.Group>

          <Form.Group controlId="formBasicName1" >
            <Form.Label>Name:</Form.Label>
            <FormControl
              autoComplete="fname"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label=" Name"
              autoFocus

              value={name}
              onChange={(e) => setName(e.target.value)}
            >

            </FormControl>

          </Form.Group>

          <Form.Group controlId="formBasicEmail1" >
            <Form.Label>Email:</Form.Label>
            <FormControl
              variant="outlined"
              required
              fullWidth
              id="emailAddress"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            >

            </FormControl>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
     </Form.Text>
          </Form.Group>


          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address:</Form.Label>
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

          </Form.Group>

          <Button variant="primary" type="submit"  >
            update
   </Button>
          {/* <Button 
        onClick={()=> logOut()}
      variant="outlined">log Out </Button> */}
        </Form>
      </div>
    </Container>

  )


}

