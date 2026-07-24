const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({


    userId:{
        type:String,
        required:true
    },


    name:{
        type:String,
        required:true
    },


    email:{
        type:String,
        required:true
    },


    address:{
        type:String,
        required:true
    },


    phone:{
        type:String,
        required:true
    },


    products:[

        {

            productId:String,

            name:String,

            price:Number,

            quantity:Number

        }

    ],



    totalAmount:{
        type:Number,
        required:true
    },


    status:{
        type:String,
        default:"Pending"
    }


});


const Order = mongoose.model(
    "Order",
    orderSchema
);


module.exports = Order;