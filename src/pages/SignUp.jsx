import React, { useState } from "react";
import OAuth from "../components/OAuth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
      setLoading(true);
      const res = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-between items-center max-w-7xl  mx-auto  p-3">
      <div className="w-full h-[787px] bg-[#F4F4F4]  flex items-center justify-center">
        <div className=" h-[555px] w-[656px] flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl mb-5">Register to your account</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center"
          >
            <input
              className="w-96 h-[60px]"
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
            />
            <input
              className="w-96 h-[60px]"
              type="email"
              placeholder="email"
              id="email"
              onChange={handleChange}
            />
            <input
              className="w-96 h-[60px]"
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
            <div className=" flex items-center justify-center">
              <div className=" uppercase w-14 h-14 rounded-full flex items-center justify-center bg-white font-semibold mt-5">
                or
              </div>
            </div>
            <OAuth />

            <button
              disabled={loading}
              className="w-[176px] h-[52px] border bg-[#1AA5C3] text-white uppercase font-semibold"
            >
              Register
            </button>
            <div className="">
              <div className="flex">
                <p className="mr-2 font-light">Have an account?</p>
                <Link to={"/sign-in"}>
                  <span className="text-[#1AA5C3] ">Sign In</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
