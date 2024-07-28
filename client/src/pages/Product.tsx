import { useParams } from "react-router-dom";
import { config } from "../config";
import { useEffect, useState } from "react";
import { ProductProps } from "../type";
import { getData } from "../lib";

const Product = () => {
  const [productData, setProductData] = useState<ProductProps | null>(null);
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const endpoint = id
    ? `${config?.baseUrl}/products/${id}`
    : `${config?.baseUrl}/products/`;

  useEffect(() => {
    const featchData = async () => {
      try {
        setLoading(true);
        const data = await getData(endpoint);
        if (id) {
          setProductData(data);
          setAllProducts(([])
        } else {
          setProductData(data);
          setAllProducts(null);
        }
      } catch (error) {
        console.error("Failed to", error);
      } finally {
        setLoading(false);
      }
    };
    featchData();
  }, [id, endpoint]);

  return <div>Product</div>;
};

export default Product;
