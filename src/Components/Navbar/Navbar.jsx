import { useState, useRef, useEffect } from 'react';
import MenuIcon from '../../assets/icons/menu.png';
import Plant from '../../assets/icons/plant.png';
import NavIcons from './NavIcons';
import NavSearch from './NavSearch';
import NavSidebar from './NavSidebar';

export default function Navbar() {
  // state for open sidebar menu
  const [openMenu, setOpenMenu] = useState(false);
  
  const sidebarRef = useRef(null); // Create a ref for the sidebar
  // sidebar
  const openSidebar = () => setOpenMenu(true);
  const closeSidebar = () => setOpenMenu(false);
 
  // Function to handle clicks outside the sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 border-b border-gray-200">
      {/* Logo Section */}
      <div className="flex items-center gap-x-4 max-w-xs mb-4 sm:mb-0">
        <img src={Plant} alt="Plant logo" className="w-10 h-10" />
        <h1 className="text-5xl font-bold text-green-700">Organic</h1>
        <button onClick={openSidebar}>
          <img src={MenuIcon} alt="Menu Icon" className="w-6 h-6 lg:ml-4" />
        </button>
      </div>

      {/* Search and Pages Section */}
      <div className="flex flex-col sm:flex-row w-full sm:w-7/12 justify-between items-center mb-4 sm:mb-0">
        {/* Search Bar */}
        <div className="w-full sm:w-8/12 ">
          <NavSearch />
        </div>
        {/* Pages */}
        <div className="flex gap-x-8 lg:w-96 lg:justify-center sm:flex-row gap-y-2 sm:gap-x-8 text-xl text-gray-600 sm:items-start mt-4 sm:mt-0">
          <p className="cursor-pointer hover:text-green-700 transition duration-300">HOME</p>
          <p className="cursor-pointer hover:text-green-700 transition duration-300">PAGES</p>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex lg:pr-6 gap-x-6 items-center max-w-xs mb-4 sm:mb-0">
        <NavIcons />
      </div>

      {/* Sidebar */}
      {openMenu && (
        <NavSidebar ref={sidebarRef} closeSidebar={closeSidebar} />
      )}
     
    </nav>
  );
}
