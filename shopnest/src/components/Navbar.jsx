import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";


function Navbar() {


  const { cart } = useContext(CartContext);

  const navigate = useNavigate();



  const [open, setOpen] = useState(false);


  const [search, setSearch] = useState("");



  const [user,setUser] = useState(

    JSON.parse(localStorage.getItem("user"))

  );





  const handleSearch = (e)=>{


    if(e.key === "Enter" && search.trim() !== ""){


      navigate(`/products?search=${search}`);


    }


  };






  const handleLogout = ()=>{


    localStorage.removeItem("user");


    setUser(null);


    navigate("/");


  };







  return (



    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">

      <Link to="/" className="text-3xl font-bold text-purple-600"> ShopNest</Link>


      {/* Search */}



      <div className="flex items-center border rounded-full px-4 py-2 w-80">



        <input type="text" placeholder="Search products..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          onKeyDown={handleSearch}

          className="outline-none w-full text-sm"/>


        <button>🔍</button>


      </div>



      <div className="flex items-center gap-6 font-medium text-gray-700">



        <Link to="/" className="hover:text-purple-600"> Home</Link>

        <Link to="/about" className="hover:text-purple-600">About</Link>

        <Link to="/products" className="hover:text-purple-600" >Products</Link>



        {/* Categories */}



        <div className="relative">


          <button

            onClick={()=>setOpen(!open)}

            className="hover:text-purple-600">Categories ▾ </button>


          {

            open && (

              <div className="absolute top-8 left-0 bg-white shadow-xl rounded-lg w-48 z-20">


                <Link to="/products/dress" onClick={()=>setOpen(false)}

                  className="block px-5 py-3 hover:bg-purple-100" >

                  👗 Dress

                </Link>


                <Link to="/products/kids" onClick={()=>setOpen(false)}

className="block px-5 py-3 hover:bg-purple-100">
                
  
                  🧒 Kids

                </Link>


                <Link to="/products/toys" onClick={()=>setOpen(false)}

                  className="block px-5 py-3 hover:bg-purple-100">

                  🧸 Toys

                </Link>



                <Link to="/products/books" onClick={()=>setOpen(false)}

                  className="block px-5 py-3 hover:bg-purple-100">

                  📚 Books

                </Link>


              </div>


            )


          }


        </div>

        {

          user ? (


            <>


              <span className="text-purple-600">

                Hi {user.name}

              </span>




              <button onClick={handleLogout}

                className="hover:text-purple-600">Logout

              </button>


            </>


          ):


          (


            <>


              <Link to="/login" className="hover:text-purple-600"> Login</Link>

              <Link to="/signup" className="hover:text-purple-600">Signup</Link>



            </>


          )


        }


        <Link to="/contact" className="hover:text-purple-600">Contact</Link>


        <Link to="/cart" className="relative text-2xl hover:text-purple-600"> 🛒

          {


            cart.length > 0 && (



              <span

                className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"

              >

                {cart.length}


              </span>


            )


          }


        </Link>


      </div>

    </nav>

  );


}


export default Navbar;