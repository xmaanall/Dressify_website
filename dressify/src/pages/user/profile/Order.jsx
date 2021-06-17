import React, { useEffect, useState } from "react";
import { useHistory , Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../../../assets/css/profile.css";
import { BsBag } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import axios from "axios";
import OrderRow from './OrderRow';
 

export default function Order({ user, Login }) {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const [modalShow, setModalShow] = useState(false);
 
  // user/seller id
  const id = localStorage.getItem("user_id");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/order/${id}`)
      .then((data) => {
        setOrders(data.data);
      })
      .catch((error) => console.error(error));
  }, []);
 
  let orderContent = "";
  let orderEmpty = "";
  if(orders == undefined) {
     orderEmpty = "You haven't placed any orders yet."
  } else {
      orderContent = orders.map((order) =><OrderRow order={order}/>);
  }
  const logOut = () => {
    localStorage.removeItem("token");
    Login();
    history.push("/");
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className="card user-detils">
        <div className="row">
          <div className="col-lg-4 col-sm-6" data-aos="fade-up">
            <ul className="user-list">
              <h3 className="user-title">My Account</h3>
              < Link to= "/Order">
                <li> My Orders</li></Link>
              {/* <a href="/Order">
                <li>My Orders</li>
              </a> */}
              < Link to= "/MyAccount">
                
                <li>My Profile</li></Link>
                < Link to= "/Credit">
                <li> Credit / Debit Cards</li></Link>
              
            </ul>
          </div>
          <div className="col-lg-8 col-sm-6" data-aos="fade-up">
            <div className="card-body">
              <span className="card-title">My Orders</span>
              <h2 style={{ fontSize: 70 }}>
                <BsBag />
              </h2>
              <p>{orderEmpty}</p>
              <Button href="/">Shop Now</Button>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Order Number</th>
                    <th>Total Price</th>
                    <th>Order Details</th>
                  </tr>
                </thead>
                <tbody>
                    {orderContent}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
 
}
