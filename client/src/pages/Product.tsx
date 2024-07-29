import { useParams } from "react-router-dom";
import { config } from "../config";
import { useEffect, useState } from "react";
import { ProductProps } from "../type";
import { getData } from "../lib";

const Product = () => {
  const [productData, setProductData] = useState<ProductProps | null>(null);
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [color, setColor] = useState("");

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
          setAllProducts([]);
        } else {
          setAllProducts(data);
          setProductData(null);
        }
      } catch (error) {
        console.error("Failed to", error);
      } finally {
        setLoading(false);
      }
    };
    featchData();
  }, [id, endpoint]);

  useEffect(() => {
    if (productData) {
      setImgUrl(productData?.images[0]);
      setColor(productData?.colors[0]);
    }
  }, [productData]);

  return <div>Product</div>;
};

export default Product;
