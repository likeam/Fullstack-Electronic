import { useParams } from "react-router-dom";
import { config } from "../config";
import { useEffect, useState } from "react";
import { ProductProps } from "../type";

const Product = () => {
  const [productData, setProductData] = useState<ProductProps | null>(null);
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const endpoint = id
    ? `${config?.baseUrl}/products/${id}`
    : `${config?.baseUrl}/products/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetch(endpoint).then((response) => response.json());
      } catch (error) {
        console.error("Fetching data failed", error);
      } finally {
      }
    };

    fetchData();
  }, [id, endpoint]);

  console.log(id);
  return <div>Product</div>;
};

export default Product;
