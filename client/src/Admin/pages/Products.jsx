import { BsFilterRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductRow from "../components/product/ProductRow";
import AddProductModal from "../components/modals/product/AddProductModal";
import Pagination from "../components/common/Pagination";
import { getAdminProducts } from "../../slices/admin/productSlice";
import { LIMIT } from "../../config";
import ProductFilter from "../components/product/ProductFilter";
import useDebounce from "../../Hooks/useDebounce";

const Products = ({ setModalChildren, setModalOpen }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState("all");
  const [category, setCategory] = useState("all");
  const [sortByPrice, setSetByPrice] = useState("default");

  const [searchTerm, handleChange] = useDebounce();

  const dispatch = useDispatch();

  const { products, total } = useSelector((state) => state.adminProducts);

  const handleFilterClick = () => {
    setShowFilter((prev) => !prev);
  };

  const handleAddProductClick = () => {
    setModalOpen(true);
    setModalChildren(<AddProductModal />);
  };

  const handleOnSortByPrice = () => {
    setSetByPrice((prev) => {
      if (prev === "default") return "asc";
      if (prev === "asc") return "desc";
      if (prev === "desc") return "default";
    });
  };

  useEffect(() => {
    const input = {
      page,
      limit: LIMIT,
      size,
      category,
      sortByPrice: sortByPrice,
      searchTerm,
    };
    dispatch(getAdminProducts(input));
  }, [page, sortByPrice, searchTerm]);

  return (
    <div
      className="my-10 mx-5 overflow-x-auto"
      id="admin-products-container"
    >
      <div className="top flex items-center">
        <h3 className="font-[600] ml-2 ">Products</h3>
      </div>
      <div className="table w-full px-4 bg-slate-50 rounded-md my-5 relative">
        <div className="top  py-5 flex items-center justify-between ">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-3 py-2 mr-5 w-96 outline-none"
            placeholder="Search by product name"
            required=""
            onChange={(e) => handleChange(e.target.value)}
          />
          <button
            className="flex items-center w-max gap-2 text-sm rounded-md bg-blue-500 text-white px-3 py-2 mx-2"
            onClick={handleAddProductClick}
          >
            <AiOutlinePlus className="" />
            Add Product
          </button>
          <button
            className="flex items-center gap-2 text-sm rounded-md bg-blue-500 text-white px-3 py-2"
            onClick={handleFilterClick}
          >
            <BsFilterRight /> Filters
          </button>

          {/* filter list */}
          {showFilter && <ProductFilter />}
        </div>

        <table className="w-full my-5 border-collapse border rounded-sm dark:text-dark">
          <thead className="bg-slate-100">
            <tr className="">
              <th className="text-sm py-2 text-left pl-2">PRODUCT NAME</th>
              <th className="text-sm py-2 text-left pl-2">CATEGORY</th>
              <th className="text-sm py-2 text-left pl-2">SIZE</th>
              <th
                className="text-sm py-2 text-left pl-2 cursor-pointer"
                title="Sort By Price"
                onClick={handleOnSortByPrice}
              >
                PRICE
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => {
                return (
                  <ProductRow
                    key={product._id}
                    product={product}
                    setModalChildren={setModalChildren}
                    setModalOpen={setModalOpen}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
      <Pagination
        totalPages={total}
        pageNo={page}
        setPageNo={setPage}
      />
    </div>
  );
};

export default Products;
