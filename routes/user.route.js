const express = require("express");
const router = express.Router();
const User = require('../models/user.models')
const bcrypt = require('bcryptjs');
const crypto = require('crypto')
const jwt = require("jsonwebtoken")
require('dotenv').config()
const protectRoute = require("../util/protectRoute")

// const multer = require('multer');
// const { v4: uuidv4 } = require('uuid');
let path = require('path');
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')


const transport = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: "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"

    }


}))




router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        let hash = bcrypt.hashSync(req.body.password, 10);
        // console.log(hash);

        newUser.password = hash;
        await newUser.save()
            .then(newUser => {
                transport.sendMail({
                    to: newUser.email,
                    from: "dressify.sei@gmail.com",
                    subject: "signup Succees",
                    html: "<h1>Welcome to dressify website </h1>"

                })
             
                res.json({
                    message: "thank you for creating new user"
                    , user: newUser,
                    success: true
                })
            })

    } catch (err) {
        res.status(401).json({
            name: err.name,
            message: err.message,
            url: req.originalUrl
        })

    }
})


router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {

        let user = await User.findOne({ email: email })

        if (user == null) throw new Error("this email i not in your db")
        if (!bcrypt.compareSync(password, user.password)) throw Error('password is wrong')
        user.password = undefined
        let token = jwt.sign({ user },
            process.env.SECRETKEY, {
            expiresIn: 60 * 60 * 1000
        })
        res.json({
            message: 'login success', token
            , userID: user._id
            , type: user.type,
            name: user.name
            , email: user.email
            , address: user.address
        })
        console.log(user.name)
        console.log(user.email)
    } catch (err) {
        console.log("error ! login failed")
        res.status(401).json({
            name: err.name,
            message: "error , login failed",
            url: req.originalUrl
        })
    }


})





router.post('/reset-password', (req, res) => {
    //create random token
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    return res.status(422).json({ error: "User does not exist with that email" })
                }

                user.resetToken = token
                //reset their password until one hour
                //valid for one hour
                user.expireToken = Date.now() + 3600000
                user.save().then((result) => {
                    transport.sendMail({
                        to: user.email,
                        from: "dressify.sei@gmail.com",
                        subject: "Password Reset",
                        html: `
   <p> You requested for password reset </p>
   <h5> click in this <a href="http://localhost:3000/reset/${token}">link</a> to reset password </h5>
   `
                    })
                    res.json({ message: "check your email",  success: true })
                })


            })
    })

})




router.post('/reset/:tokenid', (req, res) => {
    console.log("reset password");
  
    const tokenID = req.params.tokenid;
    const newPassword = req.body.password //grab the password from the frontend
    const sentToken = req.params.tokenid // to save the token in the db


    let hash = bcrypt.hashSync(newPassword, 10);

    // user.password = hash;
    console.log(newPassword)
    console.log(hash)
    
    const filter = { resetToken: sentToken };
    const update = { password: hash };



    User.findOneAndUpdate(filter, update)
        .then((response) => {
            res.json({ message: "password updated",  success: true })
        })
        .catch((err) => {
            console.log(err);
            res.status(422).json({ error: "failed" })
        })

})

router.post("/getUserDetails/:id", async (req, res) => {
    
    const userId = req.params.id;
    const user = await User.findById(userId);
    console.log(user)
    if (user) {
        user.name = req.body.name || user.name;
        console.log(user.name)
        user.email = req.body.email || user.email;
        console.log(user.email)
        user.address = req.body.address || user.address;
        console.log(user.address)
        const updatedUser = await user.save()
        //   {name : user.name,email : user.email, address : user.address}
        console.log("hahaha")
        res.send({
            message: "updated",
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            address: updatedUser.address,
         
            success: true

        });
    } else {
        res.status(404).send({ message: 'User Not Found',
        success: false
    
    });
    }
});




// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, '/Users/manal/Desktop/SEI/projects/Project-4-AUTH/routes/images');
//     },
//     filename: function(req, file, cb) {   
//         cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }


// let upload = multer({ storage, fileFilter }).single('Image');


router.post("/updateRetailer/:id", async (req, res) => {
// const {file} = req
    const userId = req.params.id;
    const user = await User.findById(userId);
    console.log(user)
    if (user) {
        user.name = req.body.name || user.name;
        console.log(user.name)
        user.email = req.body.email || user.email;
        console.log(user.email)
        user.address = req.body.address || user.address;
        console.log(user.address)
        user.Image = req.body.Image || user.Image
        // user.Image = file.filename || user.Image;
        // user.Image = file.path || user.Image;
        console.log(user.Image)
    
        // const name = req.body.name;
        // const address = req.body.address;
        // const Image = req.file.Image;
        // const email = req.body.email;
  
        const updatedUser = await user.save()
        //   {name : user.name,email : user.email, address : user.address}
        console.log("hahaha")
        res.send({
            
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            address: updatedUser.address,
            Image : updatedUser.Image,
            message: "updated",
            success: true
            // file: file.originalname,
            // path: file.path

        });
    } else {
        res.status(404).send({ message: 'User Not Found' });
    }
});








router.get('/updateRetailer/:id', (req, res) => {

    const userId = req.params.id;
    const user = User.findById(userId)
    
        .then((user) => {
          
            res.json({
                userID: user._id
                , type: user.type,
                name: user.name
                , email: user.email
                , address: user.address
                , Image : user.Image,
              
            
            })
        }
        )
});


router.get('/UserDetails/:id', (req, res) => {

    const userId = req.params.id;
try {
    const user = User.findById(userId)
   
        .then((user) => {
          
            res.json({
                userID: user._id
                , type: user.type,
                name: user.name
                , email: user.email
                , address: user.address
                , message: "updated",
                success: true
            })
        }
        )
    }catch (err) {
        res.status(401).json({
            name: err.name,
            message: err.message,
            url: req.originalUrl
        })
    }



});






module.exports = router
