import { useEffect, useState } from "react";
import { config } from "../config";
import { getData } from "../lib";
import ReactPaginate from "react-paginate";
import { ProductProps } from "../type";
import ProductCard from "./ProductCard";

interface ItemsProps {
  currentItems: ProductProps[];
}

const Items = ({ currentItems }: ItemsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {currentItems &&
        currentItems?.map((item: ProductProps) => (
          <ProductCard key={item?._id} />
        ))}
    </div>
  );
};

const Pagination = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/products`;
      try {
        const data = await getData(endpoint);
        setProducts(data);
      } catch (error) {
        console.log("Error fetching categories", error);
      }
    };
    fetchData();
  }, []);

  const itemsPerPage = 15;
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    const newStart = newOffset + 1;
    setItemOffset(newOffset);
    setItemStart(newStart);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div>
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          pageLinkClassName=" w-9 h-9 border[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center item-center"
          pageClassName="mr-6"
          containerClassName=" flex text-base font-semibold py-10"
          activeClassName="bg-black text-white rounded-lg"
        />
        <p>
          Products form {itemStart} to {Math.min(endOffset, products?.length)}{" "}
          of {products?.length}
        </p>
      </div>
    </>
  );
};

export default Pagination;
