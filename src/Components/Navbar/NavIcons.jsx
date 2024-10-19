import { IoBagHandle } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
export default function NavIcons() {
    return (
        <>
            <button>
                <MdOutlineAccountCircle className="text-3xl text-gray-600 cursor-pointer hover:text-green-700 transition duration-300" />
            </button>
            <button>
                <BsBookmark className="text-2xl text-gray-600 cursor-pointer hover:text-green-700 transition duration-300" />
            </button>
            <button>
                <IoBagHandle className="text-2xl text-gray-600 cursor-pointer hover:text-green-700 transition duration-300" />
            </button>
        </>
    )
}
