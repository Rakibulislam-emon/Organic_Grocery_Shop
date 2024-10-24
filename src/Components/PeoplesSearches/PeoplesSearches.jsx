import { Link } from "react-router-dom";

const products = [
  { name: "Blue Diamond Almonds" },
  { name: "Angie's Boomchickapop Corn" },
  { name: "Salty Kettle Corn" },
  { name: "Angie's Boomchickapop Corn" },
  { name: "Angie's Boomchickapop Corn" },
  { name: "Chobani Greek Yogurt Sweet Vanilla Yogurt" },
  { name: "Chao Cheese" },
  { name: "Chobani Greek Yogurt Sweet Vanilla Yogurt" },
  { name: "Creamy Chicken Meatballs" },
  { name: "Foster Farms Takeout Crispy Wings" },
  { name: "Creamy Chicken Meatballs" },
  { name: "Warrior Blend Organic" },
  { name: "Warrior Blend Organic" },
];

export default function PeoplesSearches() {
  return (
    <div className="p-4 md:p-6 lg:p-8 mx-auto max-w-screen-2xl">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">People are also looking for</h1>
      <div className="flex flex-wrap gap-2">
        {products.map((product, index) => (
          <Link
            to={'/'}
            key={index}
            className=" bg-[#fcf7eb] shadow rounded-lg p-4 flex-grow flex-shrink-0 w-auto hover:bg-[#ffecbe] hover:shadow-lg transition duration-200"
          >
            <p className="text-center text-sm md:text-base lg:text-lg">{product.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
