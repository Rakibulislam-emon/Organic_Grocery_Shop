import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons

const NavSearch = () => {
    return (
        <div className="flex items-center justify-between h-12 rounded-md shadow-md max-w-xl mx-auto bg-[#f8f8f8]">
            {/* Category Dropdown */}
            <select className="p-2 px-4 rounded-md border  outline-none bg-[#f8f8f8]">
                <option value="">All Categories</option>
                <option value="laptops">Laptops</option>
                <option value="mobiles">Mobiles</option>
                <option value="monitors">Monitors</option>
                <option value="headphones">Headphones</option>
            </select>

            {/* Search Input */}
            <div className="flex w-full items-center px-2 border  rounded-md overflow-hidden ">
                <input

                    type="text"
                    placeholder="Search products..."
                    className="p-2  w-full outline-none bg-[#f8f8f8]"
                />
                <span className=" p-2">
                    <FaSearch size={22} className="text-gray-400" />
                </span>
            </div>
        </div>
    );
};

export default NavSearch;
