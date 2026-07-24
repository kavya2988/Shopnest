import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "./CartContext";


function Checkout(){


  const navigate = useNavigate();


  const {cart,setCart} = useContext(CartContext);



  const user = JSON.parse(
    localStorage.getItem("user")
  );



  const [name,setName] = useState(
    user ? user.name : ""
  );


  const [email,setEmail] = useState(
    user ? user.email : ""
  );


  const [address,setAddress] = useState("");

  const [phone,setPhone] = useState("");






  const totalAmount = cart.reduce(

    (sum,item)=>

    sum + item.price * item.quantity,

    0

  );








  const saveOrder = async()=>{


    const orderData = {


      userId:user._id,


      name,

      email,

      address,

      phone,



      products:cart.map(item=>(

        {

          productId:item.id,

          name:item.name,

          price:item.price,

          quantity:item.quantity

        }

      )),


      totalAmount



    };




    await axios.post(

      "http://localhost:5000/order",

      orderData

    );



    setCart([]);


    navigate("/success");


  };







  const handlePayment = async()=>{


    try{


      const response = await axios.post(

        "http://localhost:5000/create-order",

        {

          amount:totalAmount

        }

      );





      const options = {

        key:"rzp_test_TGzeptBsIfWRTH",
        amount:response.data.amount,
        currency:response.data.currency,
        name:"ShopNest",
        description:"Shopping Payment",
        order_id:response.data.orderId,
        handler:function(response){

          alert("Payment Successful");

          saveOrder();

          console.log(response);
        },





        prefill:{
        name:name,
          email:email,
          contact:phone

        },



        theme:{ color:"#7c3aed"}

      };


      const razor = new window.Razorpay(options);

      razor.open();

    }


    catch(error){


      console.log(error);


      alert("Payment Failed");


    }


  };



  return (


    <div className="min-h-screen bg-gray-100 flex justify-center items-center">



      <div className="bg-white p-8 rounded-lg shadow-lg w-96">



        <h1 className="text-3xl font-bold mb-6 text-center">Checkout </h1>






        <input value={name}

          onChange={(e)=>setName(e.target.value)}

          placeholder="Name"

          className="border w-full p-3 mb-4 rounded"/>





        <input value={email}

          onChange={(e)=>setEmail(e.target.value)}

          placeholder="Email"

          className="border w-full p-3 mb-4 rounded"/>





        <input value={address}

          onChange={(e)=>setAddress(e.target.value)}

          placeholder="Address"

          className="border w-full p-3 mb-4 rounded"/>





        <input value={phone}

          onChange={(e)=>setPhone(e.target.value)}

          placeholder="Phone"

          className="border w-full p-3 mb-4 rounded"/>





        <h2 className="text-xl font-bold mb-4">Total : ₹{totalAmount}</h2>





        <button onClick={handlePayment}

          className="bg-purple-600 text-white w-full py-3 rounded"> Pay Now

        </button>

      </div>


    </div>


  );


}


export default Checkout;