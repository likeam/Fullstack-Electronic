import { useEffect, useState } from "react";
import { config } from "../config";
import { getData } from "../lib";

interface Props {
  id: number;
}

const CategoryFilters = ({ id }: Props) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        setLoading(true);
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error(" Error fetching Data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" hidden md:inline-flex flex-col gap-6">
      <p className=" text-3xl font-bold">Filters</p>
    </div>
  );
};

export default CategoryFilters;
