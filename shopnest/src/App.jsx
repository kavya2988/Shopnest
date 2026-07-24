import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

import Login from "./Login";
import Signup from "./Signup";

import Cart from "./Cart";
import Checkout from "./Checkout";
import OrderSuccess from "./OrderSuccess";

import About from "./About";
import Contact from "./Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import CartProvider from "./CartContext";



function App() {


  return (


    <CartProvider>


      <BrowserRouter>


        <Navbar />


        <Routes>


          <Route
            path="/"
            element={<Home />}
          />



          <Route
            path="/about"
            element={<About />}
          />



          <Route
            path="/contact"
            element={<Contact />}
          />



          <Route
            path="/products"
            element={<Products />}
          />



          <Route
            path="/products/:category"
            element={<Products />}
          />



          <Route
            path="/productdetails/:id"
            element={<ProductDetails />}
          />



          <Route
            path="/login"
            element={<Login />}
          />



          <Route
            path="/signup"
            element={<Signup />}
          />



          <Route
            path="/cart"
            element={<Cart />}
          />



          <Route
            path="/checkout"
            element={<Checkout />}
          />



          <Route
            path="/success"
            element={<OrderSuccess />}
          />



        </Routes>



        <Footer />


      </BrowserRouter>


    </CartProvider>


  );


}


export default App;