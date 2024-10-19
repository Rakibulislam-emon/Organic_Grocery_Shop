import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Navbar/Footer/Footer";

export default function MainLayouts() {
    return (
        <>
            <Navbar/>
            <div className=' min-h-[calc(100vh-440px)]'>
                <Outlet />
            </div>
           <Footer/>
        </>
    )
}
