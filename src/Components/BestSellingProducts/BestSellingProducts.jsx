// import BestSellingProductsCard from "./BestSellingProductsCard";

import ProductCard from "../../Shared/ProductCard";

export default function BestSellingProducts() {
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
        <main className="max-w-screen-2xl px-4 mx-auto  mb-10">
          <div className="lg:flex  lg:justify-between mb-16">
                <h1 className="text-4xl font-bold mb-4">
                    Best Selling Products
                </h1>
                <button className="border px-4 py-2 text-white bg-[#6bb252] hover:bg-[#ffc107] rounded-lg font-semibold">
                    View All
                </button>
          </div>
          <div>
            <ProductCard products={products}/>
            {/* <BestSellingProductsCard/> */}
          </div>
        </main>
    )
}
