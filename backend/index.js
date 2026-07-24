const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
require("dotenv").config();


const User = require("./User");
const Order = require("./Order");


const app = express();


app.use(cors());

app.use(express.json());



// Razorpay Setup

const razorpay = new Razorpay({

    key_id: process.env.RAZORPAY_KEY_ID,

    key_secret: process.env.RAZORPAY_SECRET

});





// MongoDB Connection

mongoose.connect(process.env.MONGO_URL)

.then(()=>{

    console.log("MongoDB Connected");

})

.catch((err)=>{

    console.log("MongoDB Error:",err);

});





// Home

app.get("/",(req,res)=>{

    res.send("ShopNest Backend Running");

});







// Signup API

app.post("/signup", async(req,res)=>{


    try{


        const {name,email,password}=req.body;


        const user = new User({

            name,
            email,
            password

        });



        await user.save();



        res.json({

            message:"User Registered Successfully"

        });



    }

    catch(error){


        console.log(error);


        res.status(500).json({

            message:"Signup Failed"

        });


    }


});



// Login API

app.post("/login", async(req,res)=>{


    try{


        const {email,password}=req.body;



        const user = await User.findOne({email});



        if(!user){

            return res.status(404).json({

                message:"User not found"

            });

        }



        if(password !== user.password){


            return res.status(400).json({

                message:"Invalid Password"

            });


        }




        res.json({

            message:"Login Successful",

            user:user

        });



    }


    catch(error){


        console.log(error);


        res.status(500).json({

            message:"Login Failed"

        });


    }


});



// Save Order API

app.post("/order", async(req,res)=>{


    try{


        const order = new Order(req.body);


        await order.save();



        res.json({

            message:"Order Saved Successfully"

        });



    }


    catch(error){


        console.log(error);


        res.status(500).json({

            message:"Order Failed"

        });


    }


});






// Razorpay Create Order API

app.post("/create-order", async(req,res)=>{


    try{


        const {amount}=req.body;



        const options={


            amount: amount * 100,

            currency:"INR",

            receipt:"shopnest_order_001"


        };



        const order = await razorpay.orders.create(options);



        res.json({

            orderId:order.id,

            amount:order.amount,

            currency:order.currency

        });



    }


    catch(error){


        console.log(error);


        res.status(500).json({

            message:"Payment Order Failed"

        });


    }


});







// Server

app.listen(process.env.PORT,()=>{


    console.log(

        `Server running on ${process.env.PORT}`

    );


});