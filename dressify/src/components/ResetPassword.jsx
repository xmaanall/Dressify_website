import React , {useState} from 'react';
import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import FormGroup from 'react-bootstrap/FormGroup';
// import FormLabel from 'react-bootstrap/FormLabel';
// import InputGroup from 'react-bootstrap/InputGroup';

import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import axios from "axios"
import {useHistory} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Swal1 from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')
export default function ResetPassword() {
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
  




  const [user , setUser] = useState({})

  const changeUserHandler = ({target : {name , value}}) => setUser({...user , [name] : value})

  const OnsubmitHandler = (e)=>{
    e.preventDefault()
    console.log("click")
    console.log("user email: "+user.email )
    axios.post('http://localhost:4000/api/v1/user/reset-password',{ "email" : user.email })
    .then( data =>{
      Toast.fire({
        icon: 'success',
        title: data?.data.message,
     
      })
    
     history.push('/signIn')
    }).catch(err =>{
      Toast.fire({
        icon: 'error',
        title: err.response?.data.message,
       
      })
    })
       }
    return (

      <Container component="main" maxWidth="xs" >
         <div className="card card-auth">
      <Form  onSubmit ={(e) =>OnsubmitHandler(e)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <FormControl type="email" placeholder="Enter email" 
         variant="outlined"
         margin="normal"
         required
         fullWidth

         onChange = {(e)=>changeUserHandler(e)}
         
         label="Email Address"
         name="email"
         autoComplete="email"
         autoFocus
         />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
    
      <Button variant="primary" type="submit" >
        Submit
      </Button>
     
    </Form>
    </div>
    </Container>
);
}
