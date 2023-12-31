import { useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { categoryOptions } from "../../../../constants";
import { sizeOptions } from "../../../../constants";

const ProductModal = ({ product }) => {
  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
    size: "",
    description: "",
    imageUrl: [],
  });

  const handleOnChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setProductData({
      name: product.name,
      slug: product.slug,
      brand: "",
      price: product.price,
      category: product.category,
      size: product.size,
      description: product.description,
    });
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Update Product</h1>
      <form
        className="flex flex-col"
        action=""
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-medium py-1"
          >
            Product Name
          </label>
          <input
            type="text"
            name="name"
            className="outline-0 border border-slate-400 rounded-md px-2 py-1 text-sm"
            value={productData.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="slug"
            className="text-sm font-medium py-1"
          >
            Product Slug
          </label>
          <input
            type="text"
            name="slug"
            className="outline-0 border border-slate-400 rounded-md px-2 py-1 text-sm"
            placeholder="Please note that the slug should be unique"
            value={productData.slug}
            readOnly={true}
          />
        </div>
        <div className="flex gap-2">
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor="brand"
              className="text-sm font-medium py-1"
            >
              Brand
            </label>
            <input
              type="text"
              name="brand"
              className="outline-0 border border-slate-400 rounded-md px-2 py-1 text-sm"
              placeholder="Brand name"
              value={productData.brand}
              onChange={handleOnChange}
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor="brand"
              className="text-sm font-medium py-1"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              className="outline-0 border border-slate-400 rounded-md px-2 py-1 text-sm"
              placeholder="price"
              value={productData.price}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor="category"
              className="text-sm font-medium py-1"
            >
              Category
            </label>
            <select
              type="text"
              name="category"
              className="outline-0 border border-slate-400 rounded-md px-2 py-1 text-sm capitalize"
              placeholder="Category"
              value={productData.category}
              onChange={handleOnChange}
            >
              {categoryOptions.map((opt) => (
                <option
                  className="capitalize"
                  key={opt}
                  value={opt}
                >
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor="size"
              className="text-sm font-medium py-1"
            >
              Size
            </label>
            <select
              type="text"
              name="size"
              className="outline-0 border border-slate-400 rounded-md px-2 py-1 text-sm"
              placeholder="price"
              value={productData.size}
              onChange={handleOnChange}
            >
              {sizeOptions.map((opt) => (
                <option
                  className="capitalize"
                  key={opt}
                  value={opt}
                >
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-sm font-medium py-1"
          >
            Description
          </label>
          <textarea
            name="description"
            rows={5}
            className="outline-0 border border-slate-400 rounded-md px-2 py-1 text-sm"
            value={productData.description}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col my-2">
          {/* images */}
          <div className="flex py-2">
            {productData &&
              product.imageUrl.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="image"
                  className="w-20 h-20 object-cover my-2 mx-1"
                />
              ))}
          </div>
        </div>
        <div>
          <button className="flex items-center gap-2 text-sm rounded-md bg-blue-500 text-white px-3 py-2 mx-2 my-2 m-auto">
            <AiOutlinePlus />
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductModal;
