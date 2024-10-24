/* eslint-disable react/prop-types */
import  { useState } from "react";
import { FaCartPlus, FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

export default function ProductCard({products}) {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
      setQuantity(quantity + 1);
    };
  
    const decrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  return (
    <div className="grid p grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
      {products?.map((product, index) => (
        <div
          key={index}
          className="group  w-full hover:shadow-2xl  max-w-[290px] rounded-2xl font-[sans-serif] overflow-hidden mx-auto">
          
          {/* Product image */}
          <div className="px-4  h-96">
            <div className="max-w-[260px] flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-52 h-52 rounded-2xl"
              />
            </div>
            {/* Product info */}
            <div className="p-6">
              <h3 className="text- text-gray-800 font-medium">{product.name}</h3>
              <div className="mt-1 flex items-center gap-x-2">
                {/* Rating Stars */}
                <ReactStars
                  count={5}
                  value={Math.round((product.ratings / 50) * 5) / 5}
                  size={24}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="text-sm text-gray-600">({product.ratings} ratings)</p>
              </div>

              <div className="mt-1 flex justify-center items-center">
                {/* Original price */}
                <span className="line-through text-gray-500 text-sm">${product.originalPrice.toFixed(2)}</span>
                {/* Discounted price */}
                <p className="text-2xl font-bold mx-2 text-gray-900">${product.discountedPrice.toFixed(2)}</p>
                {/* Discount label */}
                <p className="text-sm border p-1 text-gray-600">{product.discount}</p>
              </div>
            </div>
          </div>

          {/* Functionalities section, initially hidden */}
          <div className="flex mb-4   px-3 w-full justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300  ">
            {/* Increment/Decrement buttons */}
            <div className="flex items-center space-x-1 border border-[#212529] ">
              <button
                onClick={decrement}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              >
                <FaMinus />
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increment}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              >
                <FaPlus />
              </button>
            </div>
            
            {/* Add to Cart button */}
            <div >
              <button className="flex items-center gap-x-2 bg-[#6bb252] hover:bg-[#ffc107] text-white p-2 rounded-md ">
                <FaCartPlus />
                Add to Cart
              </button>
            </div>

            {/* Wishlist button */}
            <div className="border   flex border-[#212529]">
              <button className="justify-center items-center px-2">
                <FaRegHeart size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
