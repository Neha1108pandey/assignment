import React, { useState } from 'react';
import './App.css';
import waffleThumbnail from "./assets/images/image-waffle-thumbnail.jpg";
import cremeBruleeThumbnail from "./assets/images/image-creme-brulee-thumbnail.jpg";
import macaronThumbnail from "./assets/images/image-macaron-thumbnail.jpg";
import tiramisuThumbnail from "./assets/images/image-tiramisu-thumbnail.jpg";
import baklavaThumbnail from "./assets/images/image-baklava-thumbnail.jpg";
import meringueThumbnail from "./assets/images/image-meringue-thumbnail.jpg";
import cakeThumbnail from "./assets/images/image-cake-thumbnail.jpg";
import brownieThumbnail from "./assets/images/image-brownie-thumbnail.jpg";
import pannaCottaThumbnail from "./assets/images/image-panna-cotta-thumbnail.jpg";
import AddToCart from './components/AddToCart.jsx';
import AddToCartButton from './components/CartButton.jsx';

const products = [
  {
    image: waffleThumbnail,
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.50
  },
  {
    image: cremeBruleeThumbnail,
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.00
  },
  {
    image: macaronThumbnail,
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.00
  },
  {
    image: tiramisuThumbnail,
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.50
  },
  {
    image: baklavaThumbnail,
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.00
  },
  {
    image: meringueThumbnail,
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.00
  },
  {
    image: cakeThumbnail,
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.50
  },
  {
    image: brownieThumbnail,
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.50
  },
  {
    image: pannaCottaThumbnail,
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.50
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    // <div className="flex">
    //   {/* Product List Section */}
    //   <div className="w-2/3 p-24 border-gray-200">
    //     <h1 className="text-5xl font-bold mb-4">Desserts</h1>
    //     <div className="grid grid-cols-3 gap-4">
    //       {products.map((product, index) => (
    //         <div key={index} className="p-4 rounded-lg">
    //           <img
    //             src={product.image}
    //             alt={product.name}
    //             className="w-full h-60 object-cover rounded"
    //           />
    //           <AddToCartButton product={product} addToCart={addToCart} className="mt-16"/>
    //           <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
    //           <p className="text-gray-500 text-sm">{product.category}</p>
    //           <p className="text-red-500 font-bold">${product.price.toFixed(2)}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Order Item Section */}
    //   <AddToCart cartItems={cartItems}/>

    <div className="flex flex-col lg:flex-row p-12">
    {/* Product List Section */}
    <div className="lg:w-2/3 w-full p-6 lg:p-24 border-gray-200">
      <h1 className="text-3xl lg:text-5xl font-bold mb-4">Desserts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-4 rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 lg:h-60 object-cover rounded"
            />
            <AddToCartButton product={product} addToCart={addToCart} className="mt-4 "/>
            <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <p className="text-red-500 font-bold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Order Item Section */}
    <div className="lg:w-1/3 w-full p-6  lg:mr-16 lg:-mt-4  mx-auto ">
      <AddToCart cartItems={cartItems}  className=''/>
    </div>

    </div>
  );
}

export default App;
