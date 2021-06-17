import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Profile from "./pages/user/profile/Profile";

import UpdateProfile from "../src/pages/user/profile/UpdateProfile";

import Order from "./pages/user/profile/Order";
import Credit from "./pages/user/profile/Credit";
import ItemPost from "./pages/user/Item/ItemPost";
import ItemDetails from "./pages/user/Item/ItemDetails";
import Retailer from "./pages/user/retailer/Retailer";
import Items from "./pages/user/Item/Items";
import "./components/FontAwesomeIcon";
import Protect from "./components/Protect";
import ResetPassword from "./components/ResetPassword";
import NewPassword from "./components/NewPassword";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import updateRetailer from "./pages/user/retailer/updateRetailer.jsx"
import ItemsSeller from "./pages/user/Item/ItemsSeller"
import Login from "./pages/user/registration/Login";

import Register from ".//pages/user/registration/Register";
import { isExpired, decodeToken } from "react-jwt";
import { useEffect, useState } from "react";
import EditItem from "./pages/user/Item/EditItem";
import Cart from './pages/user/cart/Cart';
import Checkout from './pages/user/cart/Checkout';

function App() {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    loginFunction();
    Aos.init({});
  }, []); // its empty and will run one time

  const loginFunction = () => {
    let token = localStorage.getItem("token");
    let decodeuser = decodeToken(token);
    console.log(decodeuser)
    if (decodeuser?.user && !isExpired(token)) {
      console.log(decodeuser.user)
      setUser(decodeuser.user);
      setIsLogin(true);
    } else {
      setUser({});
      setIsLogin(false);
      console.log("Not loged in")
    }
  };

  console.log(user);

  return (
    <BrowserRouter>
      
        <Navigation isLogin={isLogin} loginFunction={loginFunction}/>
        
            <Switch>
            <Route exact path="/" component={Home} />
              <Route
                exact
                path="/login"
                render={() => <Login loginFunction={loginFunction} />}
              />
              <Route component={Register} path="/signIn"  />
              <Route component={Profile} path={"/MyAccount"} />
              <Route component={UpdateProfile} path={"/update/:id"} isLogin ={isLogin} user={user} loginFunction={loginFunction}/>
              <Route component={Order} path={"/Order"} />
              <Route component={Credit} path={"/Credit"} />
              <Route component={ItemPost} path={"/ItemPost"} />
              <Route component={ItemDetails}  path={"/Items/:id"} />
              <Route component={Items} excat path={"/Items"} />
              <Route component={Retailer} path={"/Retailer"}  />
              <Route component={EditItem} path={"/EditItem/:id"} />
              <Route component={ItemsSeller} path={"/ItemsBySeller"} />
              <Route component={updateRetailer} path={"/updateRetailer"} />
              <Route component={Cart} path={"/Cart"}/>
              <Route component={Checkout} path={"/Checkout"}/>
              
      

              <Route path="/ResetPassword" component={ResetPassword} />
              <Route exact path="/reset/:token">
              <NewPassword />
              </Route>
              <Route exact path="/Allitems/:id" component={ItemDetails} />
            </Switch>
            <Footer />
    </BrowserRouter>
  );
}
export default App;
