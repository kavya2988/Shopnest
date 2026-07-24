import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";


function Cart(){


  const {
    cart,
    removeFromCart,
    updateQuantity
  } = useContext(CartContext);




  const total = cart.reduce(

    (sum,item)=>sum + item.price * item.quantity, 0);





  return (


    <div className="min-h-screen bg-gray-100 p-10">



      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>


      {

        cart.length === 0 ?


        (

          <p className="text-xl"> Cart is Empty</p>

        ):


        (


          <>


          {

            cart.map((item)=>(

              <div

                key={item.id}

                className="bg-white shadow rounded-lg p-5 mb-5 flex items-center justify-between">



                <div>


                  <h2 className="text-xl font-bold"> {item.name}</h2>


                  <p>₹{item.price}</p>


                </div>






                <div className="flex items-center gap-4">


                  <button

                    onClick={()=>updateQuantity(item.id,"minus")}

                    className="bg-gray-200 px-4 py-2 rounded text-xl">-

                  </button>





                  <span className="text-xl font-bold">{item.quantity}

                  </span>





                  <button

                    onClick={()=>updateQuantity(item.id,"plus")}

                    className="bg-gray-200 px-4 py-2 rounded text-xl">+

                  </button>



                </div>



                <button

                  onClick={()=>removeFromCart(item.id)}

                  className="bg-red-500 text-white px-4 py-2 rounded" >

                  Remove

                </button>




              </div>


            ))

          }



          <div className="bg-white shadow rounded-lg p-6 mt-8 text-center">



            <h2 className="text-2xl font-bold mb-5">Total : ₹{total}

            </h2>




            <Link to="/checkout" className="bg-purple-600 text-white px-8 py-3 rounded">

              Place Order

            </Link>



          </div>


          </>


        )

      }




    </div>


  );


}


export default Cart;