import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASE_URL = "https://credotbackramees.onrender.com";
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch(`${BASE_URL}/api/auth/google`, {
      // const res = await fetch(`/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };
  return (
    <div>
      <div
        onClick={handleGoogleClick}
        className="w-96 h-[60px] bg-white flex items-center justify-center font-bold mt-5 border hover:cursor-pointer"
      >
        <FcGoogle className="mr-3" size={25} /> Login with Google
      </div>
      <div className="w-96 h-[60px] bg-white flex items-center justify-center font-bold mt-5 border hover:cursor-pointer">
        <FaApple className="mr-3" size={25} /> Login with Apple
      </div>
    </div>
  );
};

export default OAuth;
