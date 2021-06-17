import React , {useState , useEffect} from 'react';


import withReactContent from 'sweetalert2-react-content'

import Card from 'react-bootstrap/Card'


import "../../../assets/css/auth.css";
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import axios from "axios";
import FormControl from 'react-bootstrap/FormControl'

import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import {useHistory} from "react-router-dom";
import Swal1 from 'sweetalert2'

// CommonJS

import {useParams} from 'react-router-dom'


export default function UpdateProfile({user ,loginFunction , test }) {

  const Swal = require('sweetalert2')
  console.log(user)
  
  
  const logOut = () => {
    localStorage.removeItem("token")
    loginFunction()
    history.push("/")

}
  
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
    
    const {token} = useParams()

      console.log(token)
   const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
   
    const {userid} = useParams()

  
    
  


 
console.log(user)

const data = localStorage.getItem("user_id")
console.log(data)

  
     const userOnsubmitHandler = (e)=>{
   
    

      e.preventDefault()

      axios.post('http://localhost:4000/api/v1/user/getUserDetails/' + data,
      {name  , email  , address })
      .then( data =>{
      console.log(data)
      Toast.fire({
        icon: 'success',
        title: data?.data.message,
     
      })
   
 
    
      // history.push('')
    }).catch(err=>{
      Toast.fire({
        icon: 'error',
        title: err.response?.data.message,
       
      })
console.log(err)


    })
     
  }

  useEffect(() => {
    console.log(data)
    
  axios.get(`http://localhost:4000/api/v1/user/UserDetails/${data}`)

    .then((data) => {
     setName(data.data.name);
   
     setAddress(data.data.address);
     setEmail(data.data.email);
    //  userDetail(data.data);
    })
    .catch((error) => console.error(error));
}, []);
   
localStorage.setItem("name", name);
    return (
  
        


      <Container component="main" maxWidth="xs">
      
    
    
            <div className="card card-post" data-aos="fade-up">
            <span class="card-title">Update Profile details:</span>

   <Form   onSubmit={(e) => userOnsubmitHandler(e)}>
     <Form.Group controlId="formBasicName1" >
     <Form.Label>  </Form.Label>
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
     <Form.Label> </Form.Label>
     <FormControl 
      variant="outlined"
      required
      fullWidth
      id = "emailAddress"
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
 <Form.Label> </Form.Label>
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

<Button className="btn-update" type="submit">Update Profile</Button>
   {/* <Button 
        onClick={()=> logOut()}
      variant="outlined">log Out </Button> */}
 </Form>
 </div>
 </Container> 

    )


    }
