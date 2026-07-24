import { useParams } from "react-router-dom";
import products from "./pro";
import { useContext } from "react";
import { CartContext } from "./CartContext";


function ProductDetails() {


  const { id } = useParams();


  const { addToCart } = useContext(CartContext);



  const product = products.find(

    (item) => item.id === Number(id)

  );



  if (!product) {

    return (

      <h1 className="text-3xl font-bold p-10">
        Product Not Found
      </h1>

    );

  }




  return (


    <div className="p-10">



      <img src={product.images[0]} alt={product.name}

        className="w-80 h-96 object-cover rounded-lg"/>




      <h1 className="text-4xl font-bold mt-5">

        {product.name}

      </h1>




      <p className="mt-2 text-gray-600">

        Category: {product.category}

      </p>




      <p className="text-purple-600 text-2xl font-bold mt-3">

        ₹{product.price}

      </p>





      <button

        onClick={() => addToCart(product)}

        className="mt-5 bg-purple-600 text-white px-6 py-3 rounded-lg"

      >

        Add To Cart 🛒

      </button>




    </div>


  );

}


export default ProductDetails;