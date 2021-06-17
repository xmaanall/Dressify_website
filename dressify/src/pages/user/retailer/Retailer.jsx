import React , {useState , useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import '../../../assets/css/auth.css'
import { AiOutlineTags } from 'react-icons/ai';
import {useHistory,Link} from "react-router-dom";
import axios from "axios";
import {useParams} from 'react-router-dom'
import ItemCard4 from "../../../components/itemCards/itemCard4";

export default function Retailer ({user ,loginFunction , test }) {

      const history = useHistory()
  
      
   
     const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [Image, setImage] = useState('');

    const [Items, setItems] = useState([]);

    
      const {userid} = useParams()
  
     const [flage , setFlage]= useState(false)
    
      const [success ,setSuccess] = useState(false)
      // const [show, setShow] = useState(false);
      const [message ,setMessage] = useState("")
      
    
  
      // localStorage.getItem("type", data.data.type);
   
 
  
  const id = localStorage.getItem("user_id")
  console.log(id)



 


//   const userOnsubmitHandler = (e)=>{
//       console.log("data")
   

//      e.preventDefault()

//      axios.post('http://localhost:4000/api/v1/user/getUserDetails/' + data,
//      {name  , email  , address })
//      .then( data =>{
//      console.log(data)
//      // localStorage.setItem("token",data.data.token)
//    }).catch(err=>{
// console.log(err)


//    })
    
//  }

useEffect(() => {
      console.log(id)
      
    axios.get(`http://localhost:4000/api/v1/user/updateRetailer/${id}`)

      .then((data) => {
       setName(data.data.name);
     setImage(data.data.Image)
     console.log(data.data.Image)
       setAddress(data.data.address);
       setEmail(data.data.email);
      //  userDetail(data.data);
      })
      .catch((error) => console.error(error));


      axios
      .get(`http://localhost:4000/api/items/seller/${id}`)
      .then((data) => {
        setItems(data.data);
      })
      .catch((error) => console.error(error))
  }, []);

    


    return (
        <Container component="main" maxWidth="xs" >
        
            <div className="card card-auth">
                <div className="row">
             
                    <div className="col-lg-3 col-sm-6" data-aos="fade-up-left">
                
                        <img class="retailer-logo" src={Image} 
                     
                        />
                        
                    </div>
                  
                    <div className="col-lg-8 col-sm-6" data-aos="fade-up">
                        <div className="post-details">
                
                      
                            <h2 className="post-title">{name}</h2>
                            <p style={{ color: '#2d2d2d', fontWeight: 200, fontSize: 15 }}><span>@{name}</span></p>
                            {/* <p style={{ color: '#2d2d2d', fontWeight: 800, fontSize: 15 }} ><AiOutlineTags/> <span>3</span> Sold</p> */}
                            <p>Vintage & Hype | Bundle deals available | 💨 Fast shipping 💨</p>
                            <Link to="/ItemPost"  style ={{color: '#a87a63' , paddingLeft: 12, fontSize:18}} >
                {"Add Items"}
              </Link>
              &nbsp;
                |
                &nbsp;
              <Link to="/ItemsBySeller"  style ={{color: '#a87a63'}} >
                {"Edit Items"}
              </Link>
                            <ListGroup variant="flush">
                                <ListGroup.Item><h5>Selling</h5></ListGroup.Item>                     
                            </ListGroup>
                     </div>
                    </div>
                </div>

              
                <div className="row" >
                {Items.map((item) => (
          <ItemCard4 item={item} />
        ))}

                       
                  </div>
                
            </div>
        </Container>
    )
}