import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { useHistory , Link } from 'react-router-dom'
import '../assets/css/navbar.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import NavbarScroll from '../assets/js/NavbarScroll'
import { FiLogOut } from "react-icons/fi";





export default function Navigation(props, loginFunction) {
   const history = useHistory()

   const logOut = () => {
      localStorage.removeItem("token")
      props.loginFunction()
      history.push("/")

   }

   const type = localStorage.getItem("type")
   const [navbar, setNavbar] = useState(false);

   const ChangeBackground = () => {
      console.log(window.scrollY);
   };

   window.addEventListener('scroll', ChangeBackground);

   return (
      <div>
         {/* <NavbarScroll/> */}
         <Navbar className="navbar navbar-expand-lg" collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <div className="container ">
               <Navbar.Collapse className="navbar-collapse w-100 order-1 order-lg-0 collapse" id="navbarNav">
                  <Nav className="navbar-nav">
                     <NavDropdown title="Women" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/items">Clothing</NavDropdown.Item>
                        <NavDropdown.Item href="/items">Shoes</NavDropdown.Item>
                        <NavDropdown.Item href="/items">Bags</NavDropdown.Item>
                        <NavDropdown.Item href="/items">Jewellery</NavDropdown.Item>
                     </NavDropdown>

                     <Nav.Item>
                        <Nav.Link href="/items">Men</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link href="/items">Kids</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Navbar.Collapse>
               <div class="d-flex w-100 order-0">
                  <div class="w-100">
                     <a class="navbar-brand text-center w-100" href="/"><Navbar.Brand className="navbar-brand text-center w-100" classhref="/home"><img className="logo" style={{ width: 171, height: 90 }} src={logo} alt="Logo" /></Navbar.Brand>
                        <span class="w-100"></span></a>
                  </div>
               </div>
               <span class="w-100"></span>
               {!props.isLogin ? <Button variant="dark" onClick={() => history.push('/signIn')}>SignUp</Button> :
               [(type == "retailer" ?  <Button id="profile-btn" label="Profile" style = {{width : 400 }}variant="outline-light" onClick={() => history.push('/Retailer')}>View Page</Button> :

                  <Button style={{ fontSize: 26, border: 0 }} label="Profile" variant="outline-light" onClick={() => history.push('/Cart')}><AiOutlineShoppingCart /></Button>

                )]}



               {(!props.isLogin ? <Button variant="outline-light" onClick={() => history.push('/login')} label="login" >Login</Button> :

                  [
                     <Button id="profile-btn" label="Profile" variant="outline-light" onClick={() => history.push('/MyAccount')}>Profile</Button>,
                     <Button style={{ fontSize: 26, border: 0 }} label="Profile" variant="outline-light" onClick={() => logOut()}><FiLogOut /></Button>
                  ]
               )}
            </div>

          
         </Navbar>
      </div>

   );
} 