// sidebarLinks.js
import { GiChicken, GiFruitBowl, GiMilkCarton } from "react-icons/gi";
import { FaBabyCarriage, FaBoxOpen, FaBreadSlice, FaBroom, FaCookieBite, FaDog, FaFishFins, FaIceCream, FaPepperHot, FaSoap, FaUtensils } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";

export const sidebarLinks = [
  { label: "Fruits and Vegetables", path: "/fruits-vegetables", icon: GiFruitBowl },
  { label: "Dairy and Eggs", path: "/dairy-eggs", icon: GiMilkCarton
   },
  { label: "Meat and Poultry", path: "/meat-poultry", icon: GiChicken },
  { label: "Seafood", path: "/seafood", icon: FaFishFins },
  { label: "Bakery and Bread", path: "/bakery-bread", icon: FaBreadSlice },
  { label: "Canned Goods", path: "/canned-goods", icon: FaBoxOpen }, // Icon for Canned Goods
  { label: "Frozen Foods", path: "/frozen-foods", icon: FaIceCream }, // Icon representing frozen items
  { label: "Pasta and Rice", path: "/pasta-rice", icon: FaUtensils }, // Icon representing food
//   { label: "Breakfast Foods", path: "/breakfast-foods", icon: FaEgg }, // FaEgg can also be used if you want it
  { label: "Snacks and Chips", path: "/snacks-chips", icon: FaCookieBite },
  { label: "Spices and Seasonings", path: "/spices-seasonings", icon: FaPepperHot },
  { label: "Baby Food and Formula", path: "/baby-food", icon: FaBabyCarriage },
  { label: "Health and Wellness", path: "/health-wellness", icon: FaHeartbeat },
  { label: "Household Supplies", path: "/household-supplies", icon: FaBroom }, // Icon for household
  { label: "Personal Care", path: "/personal-care", icon: FaSoap },
  { label: "Pet Food and Supplies", path: "/pet-food-supplies", icon: FaDog }
];
