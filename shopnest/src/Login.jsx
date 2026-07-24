import { useState } from "react";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";


function Login(){


  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");




  const handleLogin = async(e)=>{


    e.preventDefault();


    try{


      const response = await axios.post(

        "http://localhost:5000/login",

        {
          email,
          password
        }

      );



      localStorage.setItem("user", JSON.stringify(response.data.user));



      alert(response.data.message);


      window.location.href="/";



    }


    catch(error){


      console.log(error);

      alert("Login Failed");


    }


  };


const handleGoogleLogin = async()=>{

  try{

    const result = await signInWithPopup(
      auth,
      provider
    );

    const user = {

      name: result.user.displayName,

      email: result.user.email
    };

    localStorage.setItem( "user",JSON.stringify(user) );

    alert("Google Login Successful");

    window.location.href="/";

  }

  catch(error){

    console.log(error);

    alert("Google Login Failed");

  }

};





  return (


    <div className="flex justify-center items-center min-h-screen bg-gray-100">


      <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-lg p-8 w-96">

      


        <h1 className="text-3xl font-bold text-center mb-6"> Login </h1>

        <div className="text-center my-4"> OR </div>




        <input  type="email" placeholder="Email" value={email}

          onChange={(e)=>setEmail(e.target.value)}

          className="border w-full p-3 mb-4 rounded"/>





        <input type="password" placeholder="Password" value={password}

          onChange={(e)=>setPassword(e.target.value)}

          className="border w-full p-3 mb-4 rounded"/>





        <button type="submit" className="bg-purple-600 text-white w-full py-3 rounded">

          Login

        </button>




<button type="button" onClick={(e)=>{
    e.preventDefault();
    handleGoogleLogin();
  }}
  className="bg-red-500 text-white w-full py-3 rounded">Continue with Google
</button>



      </form>


    </div>


  );


}


export default Login;