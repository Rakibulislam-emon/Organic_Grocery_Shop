/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
import { useRef, useEffect } from "react";

const CartSidebar = ({ closeCart }) => {
    const sidebarRef = useRef(); // Step 1: Create a ref for the sidebar

    // Step 2: Set up an effect to handle clicks outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                closeCart(); // Close the cart if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside); // Step 3: Add event listener
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Step 4: Cleanup
        };
    }, [closeCart]); // Add closeCart as a dependency

    return (
        <nav
            ref={sidebarRef} // Attach the ref here
            className="bg-[#f7f7f8] z-[1000] h-screen fixed top-0 right-0 min-w-[325px] lg:min-w-[400px] py-6 px-4 font-[sans-serif]"
        >
            <div>
                <button
                    onClick={closeCart}
                    className="absolute w-full top-2 right-2 p-[6px] cursor-pointer flex items-center justify-center rounded-full"
                >
                    <RxCross2 size={40} />
                </button>
            </div>

            <div className="overflow-auto py-6 h-full mt-4">
                <div className="flex justify-between">
                    <h1 className="text-3xl text-[#6bb252]">Your Cart</h1>
                    <p className="text-gray-600 text-3xl border rounded-full w-10 flex justify-center bg-[#6bb252]">5</p>
                </div>

                <ul className="space-y-4 px-6 mt-4">
                    <li className="flex justify-between items-center border-b py-2">
                        <span className="text-black">Growers cider
                            <br /> Brief description
                        </span>
                        <span className="text-black">$29.99</span>
                    </li>
                    <li className="flex justify-between items-center border-b py-2">
                        <span className="text-black">Fresh grapes
                            <br /> Brief description
                        </span>
                        <span className="text-black">$19.99</span>
                    </li>
                    <li className="flex justify-between items-center border-b py-2">
                        <span className="text-black">Heinz tomato ketchup
                            <br /> Brief description
                        </span>
                        <span className="text-black">$49.99</span>
                    </li>
                    <li className="flex justify-between items-center border-b py-2">
                        <span className="text-black">Total (USD)</span>
                        <span className="text-black">$149.99</span>
                    </li>
                    {/* Checkout button */}
                    <div className="w-full">
                        <button className="py-4 w-full text-white text-xl bg-[#6bb252] rounded-full hover:bg-[#f7a422]">Checkout</button>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default CartSidebar;
