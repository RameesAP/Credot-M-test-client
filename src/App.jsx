import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Privateroute from "./components/Privateroute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/product" element={<ProductDetails />} />
        <Route element={<Privateroute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
