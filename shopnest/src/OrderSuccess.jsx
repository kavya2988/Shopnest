import { Link } from "react-router-dom";


function OrderSuccess(){

  return(

    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white shadow-lg p-10 rounded-lg text-center">

        <h1 className="text-4xl font-bold text-green-600 mb-4">

          Order Successful 🎉

        </h1>


        <p className="text-gray-600">

          Thank you for shopping with ShopNest

        </p>


      </div>

    </div>

  );

}


export default OrderSuccess;