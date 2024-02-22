import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import {signInAdminStart,signInAdminSuccess,signInAdminFailure} from "../redux/admin/adminSlice"

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = "https://credotbackramees.onrender.com";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInAdminStart());

      const res = await fetch(`${BASE_URL}/api/admin/signin`, {
      // const res = await fetch(`/api/admin/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInAdminFailure(data.message));
        return;
      }
      dispatch(signInAdminSuccess(data));
      navigate("/dashboard");
    } catch (error) {
      dispatch(signInAdminFailure(error.message));
    }
  };
  return (
    <div className="flex justify-between items-center max-w-7xl  mx-auto  p-3">
      <div className="w-full h-screen bg-[#F4F4F4]  flex items-center justify-center">
        <div className=" h-[555px] w-[656px] flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl mb-5">ADMIN</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center  w-full"
          >
            <input
              className="md:w-96 w-full h-[60px]"
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
            <input
              className="md:w-96 w-full h-[60px]"
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
        
            <button className="w-[176px] h-[52px]  bg-[#1AA5C3] text-white uppercase font-semibold">
              Login
            </button>
        
            {error && <p className="text-red-500 mt-5">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
