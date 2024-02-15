import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl  mx-auto  p-3 border">
      <div className="flex flex-col w-full">
        <div className=" md:h-[350px] w-full border">
          <div className="grid grid-cols-2 gap-7 sm:gap-5 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                Important Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-3">
                  <a href="" className="hover:underline">
                    Help & FAQs
                  </a>
                </li>
                <li className="mb-3">
                  <a href="" className="hover:underline">
                    Rhoncus
                  </a>
                </li>
                <li className="mb-3">
                  <a href="" className="hover:underline">
                    Shipping & Delivery
                  </a>
                </li>
                <li className="mb-3">
                  <a href="" className="hover:underline">
                    Orders History
                  </a>
                </li>
                <li className="mb-3">
                  <a href="" className="hover:underline">
                    Rhoncus
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900  dark:text-white uppercase">
                About us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Our Stores
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Sales
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Rhoncus
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                More Information
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" className="hover:underline">
                    Affiliates
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" className="hover:underline">
                    My Accounts
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" className="hover:underline">
                    Offerzone
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" className="hover:underline">
                    Gift Vouchers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                Social Media
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  {/* <a href="#" className="hover:underline">Privacy Policy</a> */}
                  <div className="flex gap-2">
                    <div className="p-3 bg-slate-100 rounded-full w-fit"><FaFacebookF /></div>
                    <div className="p-3 bg-slate-100 rounded-full w-fit"><FaTwitter /></div>
                    <div className="p-3 bg-slate-100 rounded-full w-fit"><FaLinkedinIn /></div>
                    <div className="p-3 bg-slate-100 rounded-full w-fit"><FaYoutube /></div>
                  </div>
                </li>
              </ul>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                payment methods
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  {/* <a href="#" className="hover:underline">
                    Privacy Policy
                  </a> */}
                   <div className="flex gap-2">
                    <div className=""><FaCcVisa size={30}/></div>
                    <div className=""><FaCcPaypal size={30}/></div>
                    <div className=""><FaCcStripe size={30}/></div>
                    
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[350px] w-full border bg-[#F4F4F4]">footer</div>
      </div>
    </div>
  );
};

export default Footer;
