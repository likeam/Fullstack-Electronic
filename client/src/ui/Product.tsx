import { useParams } from "react-router-dom";
import { config } from "../config";

const Product = () => {
  const { id } = useParams();
  const endpoint = id
    ? `${config?.baseUrl}/products/${id}`
    : `${config?.baseUrl}/products/`;
  console.log(id);
  return <div>Product</div>;
};

export default Product;
