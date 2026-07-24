import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import products from "./pro";


function Products() {


  const { category } = useParams();


  const [searchParams] = useSearchParams();


  const navbarSearch = searchParams.get("search") || "";



  const [search, setSearch] = useState("");



  const [selectedCategory, setSelectedCategory] = useState("All");



  useEffect(()=>{


    setSelectedCategory(

      category

      ? category.charAt(0).toUpperCase() + category.slice(1)

      : "All"

    );


  },[category]);







  const filteredProducts = products.filter((item)=>{


    const matchCategory =

      selectedCategory === "All" ||

      item.category.toLowerCase() === selectedCategory.toLowerCase();




    const searchText = navbarSearch || search;



const matchSearch =

  item.name.toLowerCase().includes(searchText.toLowerCase()) ||

  item.category.toLowerCase().includes(searchText.toLowerCase());





    return matchCategory && matchSearch;


  });







  return (


    <div className="px-10 py-10">



      <h1 className="text-4xl font-bold text-center mb-10">

        Our Products

      </h1>






      {/* Search */}


      <div className="flex justify-center mb-8">


        <input

          type="text"

          placeholder="Search products..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          className="border px-5 py-3 rounded-full w-80"

        />


      </div>






      {/* Category Buttons */}



      <div className="flex justify-center gap-5 mb-10">


        {
          ["All","Dress","Kids","Toys","Books"].map((cat)=>(


            <button

              key={cat}

              onClick={()=>setSelectedCategory(cat)}

              className="px-5 py-2 bg-purple-600 text-white rounded-full"

            >

              {cat}

            </button>


          ))
        }


      </div>







      {/* Products Grid */}



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">



        {

          filteredProducts.length > 0 ? (


            filteredProducts.map((product)=>(


              <ProductCard

                key={product.id}

                product={product}

              />


            ))


          ) : (


            <p className="text-gray-500 text-xl col-span-4 text-center">

              No Products Found

            </p>


          )


        }



      </div>




    </div>


  );


}


export default Products;