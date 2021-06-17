const express = require('express')
const app =express();
const PORT = process.env.PORT || 4000;
require('dotenv').config()
const cors = require ('cors'); // to connect with react
const mongoose = require('mongoose');

const path = require('path');
const config = require('config');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// var whitelist = ["http://localhost:3000", "https://dressify.herokuapp.com"];

// var corsOptions = {
//     origin: function (origin, callback) {
//       if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         var message =
//           "The CORS policy for this application does not allow access from origin " +
//           origin;
//         callback(new Error(message), false);
//       }
//     },
//   };
  
  app.use(cors());





 


mongoose.connect(process.env.MONGODB , {useUnifiedTopology: true  ,  useNewUrlParser: true, useFindAndModify: false },
    ()=> console.log('connect to MongoDB') )




const itemRoutes = require('./routes/item');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
const { use } = require('./routes/item');
 
app.use('/api',itemRoutes);
app.use('/api',cartRoutes);
app.use('/api',orderRoutes);



app.use("/api/v1/user", require("./routes/user.route"))

// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
//   });

app.listen(PORT , ()=>console.log('listening on port'+PORT));
