import React, { useState, useEffect, Component } from 'react';
import { useHistory, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import "../../../assets/css/profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useParams} from 'react-router-dom'
import updadeProfile from "./UpdateProfile";

import axios from "axios";





export default function Profile(props) {

      const history = useHistory()
      // const [Detail, userDetail] = useState([]);


      const [name, setName] = useState('');
      const [address, setAddress] = useState('');
      const [email, setEmail] = useState('');
      const [type, setType] = useState('');

      // const {token} = useParams()
      // console.log(token)




      const id = localStorage.getItem("user_id")

      useEffect(() => {
            console.log(id)

            axios.get(`http://localhost:4000/api/v1/user/UserDetails/${id}`)
     
                  .then((data) => {
                        console.log("dressify")
                        setName(data.data.name);
                        setAddress(data.data.address);
                        setEmail(data.data.email);
                        setType(data.data.type);
                        //  userDetail(data.data);
                  })
                  .catch((error) => console.error(error));
      }, []);





      // const logOut = () => {
      //       localStorage.removeItem("token")
      //       // Login()
      //       loginFunction()
      //       history.push("/")

      // }
      return (
            <Container component="main" maxWidth="xs">
                  <div className="card user-detils">
                        <div className="row">
                              <div className="col-lg-4 col-sm-6" data-aos="fade-up">
                                    <ul className="user-list">
                                          <h3 className="user-title">My Account</h3>
                                          {(type == "retailer" ? 
                                                < Link to="/ItemPost"><li>Post Item</li></Link> :
                                                <Link to="/Order"><li> My Orders</li></Link>
                                                )}
                                           {/* {(type == "customer" ? 
                                           <Link href="/Order"><li> My Orders</li></Link>
                                                :
                                                < Link href="/ItemPost"><li>Post Item</li></Link>
                                                )} */}
                                          < Link to="/MyAccount"><li>My Profile</li></Link>
                                          <a href="/Credit"><li>Credit / Debit Cards</li></a>
                                    </ul>
                              </div>
                              <div className="col-lg-8 col-sm-6" data-aos="fade-up">
                                   
                                    <div className="card-body">
                                          <span className="card-title" >Your Details</span>
                                          <div className="row">
                                                <div className="col-lg-12 col-sm-6" ><span>Name: </span> {name} </div>
                                                <div className="col-lg-12 col-sm-6" ><span>Email Address:  </span> {email}</div>
                                                <div className="col-lg-12 col-sm-6" ><span> Address:  </span>{address}</div>
                                          </div>
                                          {(type == "retailer" ? 
                                               <Button variant="primary" type="submit" onClick={() => history.push(`/updateRetailer`)}>Update</Button> :
                                                <Button variant="primary" type="submit" onClick={() => history.push(`/update/${id}`)}>Update</Button>
                                                )}
                                          
                                          




                                    </div>
                              </div>
                        </div>
                  </div>
            </Container>
      )

}
