import  { useState } from "react";
import { FaCartPlus, FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

function BestSellingProductsCard() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const products =[
    {
        "name": "Product 11",
        "ratings": 150,
        "originalPrice": 25.0,
        "discountedPrice": 20.0,
        "discount": "20% OFF",
        "image": "https://i.ibb.co/7kgx0Pc/product-thumb-11.png"
    },
    {
        "name": "Product 12",
        "ratings": 200,
        "originalPrice": 30.0,
        "discountedPrice": 27.0,
        "discount": "10% OFF",
        "image": "https://i.ibb.co/vB70Nqk/product-thumb-12.png"
    },
    {
        "name": "Product 16",
        "ratings": 180,
        "originalPrice": 15.0,
        "discountedPrice": 13.5,
        "discount": "10% OFF",
        "image": "https://i.ibb.co/GRsX83J/product-thumb-16.png"
    },
    {
        "name": "Product 17",
        "ratings": 120,
        "originalPrice": 40.0,
        "discountedPrice": 30.0,
        "discount": "25% OFF",
        "image": "https://i.ibb.co/5TKcPrH/product-thumb-17.png"
    },
    {
        "name": "Product 18",
        "ratings": 250,
        "originalPrice": 10.0,
        "discountedPrice": 9.0,
        "discount": "10% OFF",
        "image": "https://i.ibb.co/PYmKhsP/product-thumb-18.png"
    },
    {
        "name": "Product 19",
        "ratings": 140,
        "originalPrice": 22.0,
        "discountedPrice": 19.0,
        "discount": "15% OFF",
        "image": "https://i.ibb.co/Lnhgfvr/product-thumb-19.png"
    },
    {
        "name": "Product 20",
        "ratings": 130,
        "originalPrice": 50.0,
        "discountedPrice": 45.0,
        "discount": "10% OFF",
        "image": "https://i.ibb.co/TTYKZ6L/product-thumb-20.png"
    },
    {
        "name": "Product 21",
        "ratings": 160,
        "originalPrice": 35.0,
        "discountedPrice": 30.0,
        "discount": "15% OFF",
        "image": "https://i.ibb.co/qn962Rw/product-thumb-21.png"
    },
    {
        "name": "Product 22",
        "ratings": 190,
        "originalPrice": 18.0,
        "discountedPrice": 16.0,
        "discount": "10% OFF",
        "image": "https://i.ibb.co/2kq7Dqs/product-thumb-22.png"
    },
    {
        "name": "Product 23",
        "ratings": 170,
        "originalPrice": 12.0,
        "discountedPrice": 10.0,
        "discount": "17% OFF",
        "image": "https://i.ibb.co/rdLxcnZ/product-thumb-23.png"
    }
]


  return (
    <div className="grid p grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
      {products.map((product, index) => (
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
  );
}

export default BestSellingProductsCard;
