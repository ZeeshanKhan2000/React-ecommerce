import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Items from "../components/Items/Items";

const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt="category banner"
      />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of {products.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-loadmorebtn">
        <span>Exolore more</span>
      </div>
    </div>
  );
};

export default ShopCategory;
