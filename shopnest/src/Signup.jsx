import { useState } from "react";
import axios from "axios";


function Signup(){


  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");





  const handleSignup = async(e)=>{


    e.preventDefault();


    try{


      const response = await axios.post(

        "http://localhost:5000/signup",

        {
          name,
          email,
          password
        }

      );



      alert(response.data.message);



    }

    catch(error){


      console.log(error);

      alert("Signup Failed");


    }


  };







  return (


    <div className="flex justify-center items-center min-h-screen bg-gray-100">


      <form

        onSubmit={handleSignup}

        className="bg-white shadow-lg rounded-lg p-8 w-96">


        <h1 className="text-3xl font-bold text-center mb-6">

          Signup

        </h1>





        <input type="text" placeholder="Name" value={name}

          onChange={(e)=>setName(e.target.value)}

          className="border w-full p-3 mb-4 rounded"/>





        <input type="email" placeholder="Email" value={email}

          onChange={(e)=>setEmail(e.target.value)}

          className="border w-full p-3 mb-4 rounded"/>





        <input type="password" placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          className="border w-full p-3 mb-4 rounded"/>




        <button type="submit"

          className="bg-purple-600 text-white w-full py-3 rounded hover:bg-purple-700" >

          Signup

        </button>




      </form>


    </div>


  );


}


export default Signup;