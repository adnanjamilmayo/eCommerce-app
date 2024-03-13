import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  // Changed variable name to be more descriptive
  const [menuOpen, setMenuOpen] = useState(false);

  // Renamed function to be more descriptive
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-white border-b border-gray-200 relative">
        <div className="container mx-auto flex justify-between p-5 items-center">
          <div>
            <Link to="/">
              <h3 className="font-bold text-2xl">
                <span className="text-red-400">E-Shop</span>
              </h3>
            </Link>
          </div>

          <div className="hidden md:block">
              <ul className="flex items-center text-lg justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    Home
                  </li>
                </Link>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">
                  All Products
                </li>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">
                  Mens
                </li>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">
                  Kids
                </li>
              </ul>
            </div>

          {menuOpen ? (
            // Simplified rendering condition for the menu
            <div className="flex flex-col gap-10 text-2xl absolute top-[73px] right-0 h-screen w-full z-10 bg-red-500 text-white items-center justify-center font-semibold">
              <Link to="/">
                <li className="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
              </Link>
              <li className="mr-5 hover:text-gray-900 cursor-pointer">All Products</li>
              <li className="mr-5 hover:text-gray-900 cursor-pointer">Mens</li>
              <li className="mr-5 hover:text-gray-900 cursor-pointer">Kids</li>
              {/* Added button to close the menu */}
              <button
                className="absolute top-[5px] z-10 right-0 text-white py-2 px-4 cursor-pointer"
                onClick={toggleMenu}
              >
                <RxCross1 size={30} />
              </button>
            </div>
          ): null}

          <div className="flex justify-center items-center gap-3">
           <Link to='/login'>
           <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold">
              Login
            </button>
           </Link>
            <Link to="/cart">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none">
                <FaCartShopping size={22} />
              </button>
            </Link>
            {
              menuOpen?"":<button className="md:hidden" onClick={toggleMenu}>
              <GiHamburgerMenu size={22} />
            </button> 
            }
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
