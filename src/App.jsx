import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import { Privateroute, AdminPrivateRoute } from "./components/Privateroute";
import { useSelector } from "react-redux";
import Order from "./pages/Order";
import CatProducts from "./pages/CatProducts";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const { currentAdmin } = useSelector((state) => state.admin);

  const excludedRoutes = ["/admin", "/dashboard"];
  const isInAdminSection = excludedRoutes.some((path) =>
    window.location.pathname.startsWith(path)
  );

  return (
    <BrowserRouter>
      {!isInAdminSection && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-in"
          element={currentUser ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="/sign-up"
          element={currentUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/catproducts" element={<CatProducts />} />
        <Route element={<Privateroute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/order" element={<Order />} />
        </Route>


      {/* admin side */}
        <Route
          path="/admin"
          element={currentAdmin ? <Navigate to="/dashboard" /> : <Admin />}
        />
        <Route element={<AdminPrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      {!isInAdminSection && <Footer />}
    </BrowserRouter>
  );
}

export default App;
