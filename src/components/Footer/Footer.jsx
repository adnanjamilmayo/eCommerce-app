import React from "react";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white">
        <div
          className="container px-5 py-24 mx-auto md:items-center lg:items-start
      md:flex-row md:flex-nowrap flex-col"
        >
          <div className="w-64 md:mx-0 py-24 mx-auto text-center md:text-left">
            <h3 className="font-bold text-2xl">
               <span className="text-red-400">E-Shop</span>
            </h3>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:h-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                Mens
              </h2>
              <ul className="list-none mb-10">
                <li className="mt-1">Features</li>
                <li className="mt-1">Info Center</li>
                <li className="mt-1">News Blog</li>
                <li className="mt-1">Login</li>
              </ul>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                Company
              </h2>
              <ul className="list-none mb-10">
                <li className="mt-1">About us</li>
                <li className="mt-1">Privicy Policy</li>
                <li className="mt-1">Term & Conditions</li>
                <li className="mt-1">Login</li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                Contact
              </h2>
              <ul className="list-none mb-10">
                <li className="mt-1">Contact sale</li>
                <li className="mt-1">+123456789</li>
                <li className="mt-1">News Blog</li>
                <li className="mt-1">+7634723786</li>
              </ul>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                Tech Support
              </h2>
              <ul className="list-none mb-10">
                <li className="mt-1">Contact Support</li>
                <li className="mt-1">Info Center</li>
                <li className="mt-1">Activate</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-500 text-white">
          <div className="conatiner mx-auto py-4 px-5 flx flex-wrap flex-col sm:flex-row">
            <p className="text-sm text-center sm:text-left">
              2024 E-Shop -<span>@copyright</span>
            </p>
            <p className="inline-flex gap-6 sm:ml-auto sm:mt-2 justify-center sm:justify-start">
              <span>
                <FaFacebook />
              </span>
              <span>
                <CiInstagram />
              </span>
              <span>
                <FaXTwitter />
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
