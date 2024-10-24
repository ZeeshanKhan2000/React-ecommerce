import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import ProductDisplay from "../components/Productdisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionbox/DescriptionBox";
import RelatedProduct from "../components/relatedProduct/RelatedProduct";

const Product = () => {
  const { products } = useContext(ShopContext); // Use 'products' instead of 'all_product'
  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
