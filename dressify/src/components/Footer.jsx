import React from 'react'
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom'
import '../assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'


export default function Footer () {

            return (
              <FooterContainer className="main-footer">
                    <div className="footer-middle">
                    <div className="container">
                     <div className="row">
                      <div className="col-md-4 col-sm-6">
                       <h4>Top Brands</h4>
                       <ul className="list-unstyled">
                         <li>Gucci</li>
                         <li>Dolce & Gabbana</li>
                         <li>Fendi</li>
                         <li>Valentino</li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-sm-6">
                      <h4>Top Categories</h4>
                       <ul className="list-unstyled">
                         <li>Clothing</li>
                         <li>Shoes</li>
                         <li>Bags</li>
                         <li>Jewellery</li>
                       </ul>
                      </div>
                      <div className="col-md-4 col-sm-6">
                       <h4>About Us</h4>
                       <ul className="list-unstyled">
                         <li>Terms & Conditions</li>
                         <li>Shipping & Delivery</li>
                       </ul>
                      </div>
                     </div>
                     {/* Footer Bottom */}
                     <div className="footer-bottom">
                       <p className="text-xs-center">
                      &copy;{new Date().getFullYear()}
    <a class="text-reset fw-bold" href="#"> Made with <FontAwesomeIcon icon="heart" style={{'color': `#ad0000`}} />  By fullstackers</a>
                       </p>
                     </div>
                    </div>
                    </div>
                    
              </FooterContainer>
            )

}


const FooterContainer = styled.footer`
   .footer-middle {
         background: #2f2f2f;
         padding-top: 3rem;
         color: #fff;
   }

   .footer-bottom {
       padding-top: 3rem;
       padding-bottom: 2rem;
       text-align: left;
   }

   .list-unstyled {
      line-height: 2.8rem;
      text-align: -webkit-left;
   }

 h4 {
      font-weight: bold;
      text-align: -webkit-left;
   }

   .text-xs-center {
    text-align: center;
   }



`;

