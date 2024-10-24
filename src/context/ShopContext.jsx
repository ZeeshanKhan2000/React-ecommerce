import { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  let cart = {};
  products.forEach((product) => {
    cart[product.id] = 0; // Initialize cart with product IDs as keys
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [products] = useState(all_product);
  const [cartItems, setCartItems] = useState(getDefaultCart(products)); // Pass products to getDefaultCart

  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1, // Increment quantity
    }));

    const product = products.find((prod) => prod.id === productId);
    console.log("Added Product:", product); // Log the added product for debugging
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCount = prev[itemId] > 0 ? prev[itemId] - 1 : 0;
      return { ...prev, [itemId]: updatedCount };
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    Object.keys(cartItems).forEach((key) => {
      const product = products.find((prod) => prod.id === Number(key));
      if (product && typeof product.new_price === "number") { // Use new_price for calculations
        totalAmount += product.new_price * cartItems[key];
      } else {
        console.warn(`Price for product with ID ${key} is missing or invalid.`);
      }
    });

    return totalAmount.toFixed(2); // Return total as a formatted string with 2 decimal places
  };

  const getTotalItemsInCart = () => {
    let totalItems = 0;

    Object.values(cartItems).forEach((quantity) => {
      totalItems += quantity;
    });

    return totalItems; // Return the total count of items in the cart
  };

  const contextValue = {
    getTotalItemsInCart,
    getTotalCartAmount,
    products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
