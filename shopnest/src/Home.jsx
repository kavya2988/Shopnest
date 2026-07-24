import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-purple-100 min-h-[500px] flex items-center justify-between px-16">

        <div className="max-w-lg">

          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Discover Your 
            <span className="text-purple-600"> Favorite </span>
            Products
          </h1>


          <p className="mt-5 text-gray-600 text-lg">
            Shop trendy dresses, kids collections, toys and books 
            all in one place.
          </p>


          <Link
            to="/products"
            className="inline-block mt-8 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700"
          >
            Shop Now
          </Link>

        </div>



        {/* Image */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="shopping"
            className="w-[500px] rounded-xl shadow-lg"
          />

        </div>


      </section>



      {/* Categories Section */}

      <section className="py-12 px-16">

        <h2 className="text-3xl font-bold text-center mb-8">
          Shop By Category
        </h2>


        <div className="grid grid-cols-4 gap-6">


          <div className="bg-purple-100 p-8 rounded-xl text-center hover:shadow-lg">
            <h3 className="text-xl font-semibold">
              👗 Dress
            </h3>
          </div>


          <div className="bg-pink-100 p-8 rounded-xl text-center hover:shadow-lg">
            <h3 className="text-xl font-semibold">
              🧒 Kids
            </h3>
          </div>


          <div className="bg-yellow-100 p-8 rounded-xl text-center hover:shadow-lg">
            <h3 className="text-xl font-semibold">
              🧸 Toys
            </h3>
          </div>


          <div className="bg-blue-100 p-8 rounded-xl text-center hover:shadow-lg">
            <h3 className="text-xl font-semibold">
              📚 Books
            </h3>
          </div>


        </div>

      </section>


    </div>
  );
}

export default Home;