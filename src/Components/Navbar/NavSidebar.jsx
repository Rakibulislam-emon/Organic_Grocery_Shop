/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { sidebarLinks } from './SidebarLinks'; // Import the configured sidebar links

const NavSidebar = forwardRef(({ closeSidebar }, ref) => {
  return (
    <nav ref={ref} className="bg-[#f7f7f8] z-[1000] h-screen fixed top-0 left-0 min-w-[325px] lg:min-w-[400px] py-6 px-4 font-[sans-serif]">
      <div className="relative">
        <h1 className="text-3xl">Menu</h1>
        <div
          onClick={closeSidebar}
          className="absolute -right-2 top-2 p-[6px] cursor-pointer flex items-center justify-center rounded-full"
        >
          <RxCross2 size={30} />
        </div>
      </div>

      <div className="overflow-auto py-6 h-full mt-4">
        <ul className="space-y-1">
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="text-black hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-4 py-3 transition-all border-b-2 border-dotted border-gray-400"
              >
                {/* Render the icon as a React component */}
                {link.icon && <link.icon className="mr-4 w-5 h-5" />}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
});

export default NavSidebar;
