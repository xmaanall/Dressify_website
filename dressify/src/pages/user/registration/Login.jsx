import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../../../assets/css/auth.css";
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
  timer: 2000,
  timerProgressBar: true
})

export default function Login(props) {


  const history = useHistory();

  const [user, setUser] = useState({});

  const userChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const OnsubmitHandler = (e) => {
    e.preventDefault();
    console.log("click");
    axios.post("http://localhost:4000/api/v1/user/login", {
        email: user.email,
        password: user.password,
      })
      .then((data) => {
       
        
        localStorage.setItem("user_id", data.data.userID);
        localStorage.setItem("token" ,data.data.token);
        localStorage.setItem("type" ,data.data.type );
        localStorage.setItem("user_id",data.data.userID);
        localStorage.setItem("name", data.data.name);
        localStorage.setItem( "email",data.data.email);
        localStorage.setItem("address",data.data.address);

        
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log(localStorage.getItem("user_id"))
        console.log(localStorage.getItem("name"))
        props.loginFunction();

     Toast.fire({
      icon: 'success',
      title: data?.data.message,
   
    })
        history.push("/");
        // localStorage.setItem("token",data.data.token)
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: err.response?.data.message,
         
        })
      });
  };
   console.log("user" , user)
  return (
    <Container component="main" maxWidth="xs">
      <div className="card card-auth">
        <div className="row">
          <div className="col-lg-6 col-sm-6" data-aos="fade-up">
            <Form onSubmit={(e) => OnsubmitHandler(e)}>
              <h3 className="auth-title" data-aos="fade-up">
                Welcome<br></br>
                <span>Log in to continue</span>
              </h3>
              <Form.Group
                className="form-group"
                onSubmit={(e) => OnsubmitHandler(e)}
              >
                <Form.Label data-aos="zoom-out-up">Email address</Form.Label>
                <FormControl
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => userChangeHandler(e)}
                />
                <Form.Text className="text-muted">
                  {" "}
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label data-aos="zoom-out-up">Password</Form.Label>
                <FormControl
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => userChangeHandler(e)}
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </Form.Group>

              <Form.Group className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary btn-block"
                
              >
                Login
              </Button>
              <p className="forgot-password text-right">
              <a href="/ResetPassword">  Forgot password?</a>
              </p>
              <p className="text-left">
                <a href="/">Back</a>
              </p>
            </Form>
          </div>

          <div className="col-lg-6 col-sm-6" data-aos="fade-up-left">
            <img
              class="auth-img"
              src="https://media.gucci.com/content/DiaryArticleSingle_Standard_1536x2150/1622218505/DiaryArticleSingle_Gucci-Gaok-Interior-2021-Still-01_001_Default.jpg"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
