// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "credot-6abf1.firebaseapp.com",
  projectId: "credot-6abf1",
  storageBucket: "credot-6abf1.appspot.com",
  messagingSenderId: "866509286479",
  appId: "1:866509286479:web:d338bded9bab8f32984e3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);