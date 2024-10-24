import { GrDeliver } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { GiCheckMark } from "react-icons/gi";
import { FaGift } from "react-icons/fa6";

export default function Services() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4 mx-auto max-w-screen-2xl">
            <div className="bg-white rounded-md shadow-md p-4 text-center">
                <GrDeliver size={30} />
                <h3 className="text-lg font-bold mt-4">Free delivery</h3>
                <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
            <div className="bg-white rounded-md shadow-md p-4 text-center">
                <MdOutlinePayment size={30} />
                <h3 className="text-lg font-bold mt-4">100% secure payment</h3>
                <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
            <div className="bg-white rounded-md shadow-md p-4 text-center">
                <HiMiniCheckBadge size={30} />
                <h3 className="text-lg font-bold mt-4">Quality guarantee</h3>
                <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
            <div className="bg-white rounded-md shadow-md p-4 text-center">
                <GiCheckMark size={30} />
                <h3 className="text-lg font-bold mt-4">Guaranteed savings</h3>
                <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
            <div className="bg-white rounded-md shadow-md p-4 text-center">
                <FaGift size={30} />
                <h3 className="text-lg font-bold mt-4">Daily offers</h3>
                <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
        </div>
    );
}
