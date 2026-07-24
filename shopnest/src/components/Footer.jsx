import { Link } from "react-router-dom";


function Footer() {


  return (


    <footer className="bg-gray-900 text-white px-10 py-8 mt-10">


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">



        {/* Brand */}


        <div>


          <h2 className="text-2xl font-bold text-purple-400">

            ShopZone

          </h2>


          <p className="text-gray-400 mt-3">

            Your one stop shop for dresses, kids items,
            toys and books.

          </p>


        </div>





        {/* Quick Links */}


        <div>


          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>




          <Link to="/" className="block text-gray-400 hover:text-white mb-2">Home</Link>

          <Link to="/products" className="block text-gray-400 hover:text-white mb-2">Products</Link>

          <Link to="/cart" className="block text-gray-400 hover:text-white mb-2"> Cart </Link>

        </div>


        {/* Contact */}


        <div>


          <h3 className="text-xl font-semibold mb-3">

            Contact

          </h3>



          <p className="text-gray-400">

            Email: shopzone@gmail.com

          </p>



          <p className="text-gray-400">

            Phone: +91 9999999999
          </p>

        </div>



      </div>






      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-400">


        © 2026 ShopZone. All Rights Reserved.


      </div>




    </footer>


  );


}


export default Footer;