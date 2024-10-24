import { useContext } from "react"; // Add this line at the top
import { ShopContext } from "../../context/ShopContext"; // Add this line at the top
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalItemsInCart } = useContext(ShopContext); // Access the function here

  return (
    <div className="navbar-section">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SwiftMart</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/mens">Men</Link>
          {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women</Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalItemsInCart()}</div> {/* Display total items */}
      </div>
    </div>
  );
};

export default Navbar;
