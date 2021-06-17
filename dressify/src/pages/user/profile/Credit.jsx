import React, {useState, Component } from 'react'
import { useHistory , Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import "../../../assets/css/profile.css"
import { BsWindow } from 'react-icons/bs';
import ListGroup from 'react-bootstrap/ListGroup'


export default function Credit({ user, Login }) {

      const history = useHistory()
    
      const logOut = () => {
            localStorage.removeItem("token")
            Login()
            history.push("/")

      }


      const type = localStorage.getItem("type")



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
                                
                                 < Link to= "/MyAccount">
                               <li>My Profile</li></Link>
                                          <a href="/Credit"><li>Credit / Debit Cards</li></a>
                                    </ul>
                              </div>

                              <div className="col-lg-8 col-sm-6" data-aos="fade-up">
                                    <div className="card-body">
                                          <span className="card-title" >Credit / Debit Cards</span>
                        
                                          <ListGroup as="ul">
                                                <ListGroup.Item  style={{background: '#C1536B', color: '#fff'}}as="li">Card Number:</ListGroup.Item>
                                                <ListGroup.Item style={{fontWeight: 'bold'}} as="li"><h2 style={{ fontSize: 30, display: 'inline-block' }}><BsWindow /></h2> 4054********6822</ListGroup.Item>
                                          </ListGroup>
                                    </div>
                              </div>
                        </div>
                  </div>
            </Container>
      )

}
