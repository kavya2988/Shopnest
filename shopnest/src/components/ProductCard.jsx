import { Link } from "react-router-dom";


function ProductCard({ product }) {


  return (

    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">


      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-60 object-cover"
      />


      <div className="p-5">


        <h2 className="text-xl font-bold">
          {product.name}
        </h2>


        <p className="text-gray-500 mt-2">
          {product.category}
        </p>


        <p className="text-purple-600 font-bold text-lg mt-2">
          ₹{product.price}
        </p>



        <Link

          to={`/productdetails/${product.id}`}

          className="block text-center bg-purple-600 text-white mt-4 py-2 rounded-lg"

        >

          View Details

        </Link>



      </div>


    </div>

  );

}


export default ProductCard;