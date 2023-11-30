import ProductLoader from "../components/Loading/Product";
import { useEffect, useState } from "react";
import { LIMIT } from "../config";
import FetchRequest from "../utils/fetch";
import PrevNext from "../components/Common/PrevNext";
import Product from "../components/Product/Product";

const Collections = ({
  head,
  paragraph,
  category,
  showFilter,
  setShowFilter,
}) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const [pageNo, setPageNo] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(true);
  const limit = LIMIT;

  const getData = async () => {
    setLoading(true);
    const { products, previous, next } = await FetchRequest(
      `product/products?page=${pageNo}&limit=${limit}&category=${category}`,
      "GET",
      null
    );
    setLoading(false);
    setHasPrev(previous !== null);
    setHasNext(next !== null);
    setProducts(products);
  };

  useEffect(() => {
    getData();
  }, [pageNo]);
  return (
    <div className="flex flex-col items-center gap-5 px-3 my-5">
      <h1 className="text-xl font-semibold ">{head}</h1>
      <p className="text-sm text-justify mx-3 md:text-base">{paragraph}</p>
      <div className="hoodies-container my-5 grid grid-cols-1 place-content-center gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-10 md:my-10 lg:grid-cols-3">
        {!loading ? (
          Object.keys(products).map((product) => {
            return (
              <Product
                key={products[product]._id}
                product={products[product]}
              />
            );
          })
        ) : (
          <>
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
          </>
        )}
      </div>

      <PrevNext
        pageNo={pageNo}
        setPageNo={setPageNo}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
    </div>
  );
};

export default Collections;
