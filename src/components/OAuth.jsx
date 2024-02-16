import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const OAuth = () => {
  return (
    <div>
      <div className="w-96 h-[60px] bg-white flex items-center justify-center font-bold mt-5 border hover:cursor-pointer">
        <FcGoogle className="mr-3" size={25} /> Login with Google
      </div>
      <div className="w-96 h-[60px] bg-white flex items-center justify-center font-bold mt-5 border hover:cursor-pointer">
        <FaApple className="mr-3" size={25} /> Login with Apple
      </div>
    </div>
  );
};

export default OAuth;
