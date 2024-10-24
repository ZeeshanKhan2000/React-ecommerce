import PropTypes from "prop-types";
import "./Items.css";
import { Link } from "react-router-dom";

const Items = (props) => {
  // Convert to number if necessary
  const newPrice = typeof props.new_price === "string" ? parseFloat(props.new_price) : props.new_price;
  const oldPrice = typeof props.old_price === "string" ? parseFloat(props.old_price) : props.old_price;

  // Log the values to see what you're working with
  console.log('New Price:', newPrice);
  console.log('Old Price:', oldPrice);

  return (
    <div className="items">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
        />
      </Link>
      <p>{props.name}</p>
      <div className="items-prices">
        <div className="items-price-new">${newPrice.toFixed(2)}</div>
        <div className="items-price-old">${oldPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};


export default Items;
