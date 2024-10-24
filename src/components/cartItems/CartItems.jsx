import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./CartItems.css";
import remove_icon from "../../assets/cart_cross_icon.png";

const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {Object.keys(cartItems).map((key) => {
        if (cartItems[key] > 0) {
          const product = products.find((prod) => prod.id === Number(key));
          if (product) {
            const price = parseFloat(product.new_price); // Use new_price
            const quantity = cartItems[key];
            const totalPrice = (price * quantity).toFixed(2); // Calculate total price

            return (
              <div key={key}>
                <div className="cartitems-format cartitems-format-main">
                  <img
                    src={product.image}
                    className="cartitem-product-icon"
                    alt={product.name}
                  />
                  <p>{product.name}</p>
                  <p>${price.toFixed(2)}</p> {/* Display price with two decimal places */}
                  <button className="cartitems-quantity">{quantity}</button>
                  <p>${totalPrice}</p> {/* Display total price */}
                  <img
                    src={remove_icon}
                    onClick={() => removeFromCart(Number(key))}
                    alt="Remove"
                  />
                </div>
                <hr />
              </div>
            );
          }
        }
        return null;
      })}

      <div className="cartitem-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-tatal-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-tatal-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-tatal-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="checkout-btn">PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
