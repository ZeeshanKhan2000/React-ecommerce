import PropTypes from "prop-types";
import "./Breadcrums.css";
import arrow_icon from "../../assets/breadcrum_arrow.png"; // Ensure this path is correct

const Breadcrums = (props) => {
  const { product } = props;

  return (
    <div className="breadcrums">
      Home <img src={arrow_icon} alt="arrow" /> Shop
      <img src={arrow_icon} alt="arrow" />
      {product.category}
      <img src={arrow_icon} alt="arrow" />
      {product.name}
    </div>
  );
};

// Adding PropTypes validation
Breadcrums.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default Breadcrums;
