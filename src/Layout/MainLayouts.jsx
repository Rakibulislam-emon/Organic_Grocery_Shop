import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Navbar/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader/Loader";

export default function MainLayouts() {
    // loading state
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500)
        //    cleanup state
        return () => clearTimeout(timer)
    }, [])
    return (
       <>
       {
        loading ? <Loader/> :  <>
        <Navbar />
        <div className=' min-h-[calc(100vh-440px)]'>
            <Outlet />
        </div>
        <Footer />
    </>
       }
       </>
    )
}
