import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl  mx-auto  p-3">
        <Link to="/">
          <img
            className="invert w-20 "
            src="https://s3-alpha-sig.figma.com/img/dca4/1b9d/e7b024162a81fe308d256f9ca5b15227?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cfVeuzZecHGMTgUhqMRY~MBmwkVvQk9ZWTqrYB0rObHD1booDoRB8sfGctODvE93lHjb0dlaMThl-zupNBZDJH7HlZHNunEc4HufZkqgRyiHIfbCuy42Vc31zqeUwTJl67KPisT8~yUQ-PRy9hFIMWxHOZ5ok9oHjWOGtkRPpSfy~-2nN0XKLLOF~tnZGCGRtmmUepSrdN8DTEXsM~WlWerKtXUZJNFy0q4~lTpCI~hMuHU2FIQIpIm53zQRneuGQbSi0-8y6zp9KsE33l~9K4bI8J5ujiSq7d3fG3UeLatp-I-D659JnnLDrbOvBIQ0Fq8ASFPNiAeZVeMgx~JSoQ__"
            alt="logo"
          />
        </Link>

        <ul className="flex items-center gap-4">
          <div className="hidden md:block">
            <div className="flex mr-7 ">
              <form className="border bg-white p-3 flex items-center">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-transparent focus:outline-none w-24 sm:w-54 md:w-64"
                />
              </form>
              <div className="p-3 w-16 border flex items-center justify-center bg-black">
                <IoIosSearch size={24} className="bg-black text-white " />
              </div>
            </div>
          </div>
          {currentUser ? (
        <Link to="/">
          <li className="p-3 bg-slate-100 rounded-full">
            <IoMdPerson size={20} />
          </li>
        </Link>
      ) : (
        <Link to="/sign-in">
          {/* Redirect to login page if user doesn't exist */}
          <li className="p-3 bg-slate-100 rounded-full">
            <IoMdPerson size={20} />
          </li>
        </Link>
      )}
          <Link to="/wishlist">
            <li className=" p-3 bg-slate-100 rounded-full">
              <MdFavorite size={20} />
            </li>
          </Link>
          <Link to="/cart">
            <li className=" p-3 bg-slate-100 rounded-full">
              <IoBagHandleSharp size={20} />
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
