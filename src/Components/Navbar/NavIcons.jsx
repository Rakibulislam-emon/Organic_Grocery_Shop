import { IoBagHandle } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { useState } from "react";
import CartSidebar from "./CartSidebar";
export default function NavIcons() {
    // state for cartNavbar Open
      const [cartOpen, setCartOpen] = useState(false);
      const openCart = () => setCartOpen(true);
      const closeCart = () => setCartOpen(false);
    return (
        <>
            <button>
                <MdOutlineAccountCircle className="text-3xl text-gray-600 cursor-pointer hover:text-green-700 transition duration-300" />
            </button>
            <button>
                <BsBookmark className="text-2xl text-gray-600 cursor-pointer hover:text-green-700 transition duration-300" />
            </button>
            <button 
            onClick={openCart}>
                <IoBagHandle className="text-2xl text-gray-600 cursor-pointer hover:text-green-700 transition duration-300" />
            </button>
            {
                cartOpen && <CartSidebar closeCart={closeCart}/>
            }
        </>
    )
}
