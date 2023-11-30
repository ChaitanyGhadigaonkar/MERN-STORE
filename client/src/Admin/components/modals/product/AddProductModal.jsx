import { useEffect, useRef, useState } from "react";
import { AiOutlinePlus, AiOutlineUpload } from "react-icons/ai";
import { categoryOptions } from "../../../../constants";
import { sizeOptions } from "../../../../constants";
import { VITE_API_URL } from "../../../../config";
import { toast } from "react-hot-toast";

const AddProductModal = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    description: "",
    size: "S",
  });
  const [selectedFiles, setSelectedFiles] = useState([]);

  const inputRef = useRef();
  const slugRef = useRef();

  const handleOnChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let file in selectedFiles) {
      data.append("image", selectedFiles[file]);
    }
    data.append("name", productData.name);
    data.append("slug", slugRef.current.value);
    data.append("category", productData.category);
    data.append("description", productData.description);
    data.append("quantity", productData.quantity);
    data.append("price", productData.price);
    data.append("size", productData.size);

    try {
      const res = await fetch(`${VITE_API_URL}/product`, {
        method: "POST",
        headers: {
          authToken: localStorage.getItem("userInfo").authToken,
        },
        body: data,
      });
      const { product, success } = await res.json();
      if (success) {
        toast.success("Product added successfully");
      }
      console.log(product, success);
    } catch (err) {
      console.log(err);
    }
  };
  const handleFileChange = (e) => {
    const imageFiles = Array.from(e.target.files).filter((file) =>
      file.type.startsWith("image/")
    );

    setSelectedFiles([...selectedFiles, ...imageFiles]);
  };

  useEffect(() => {
    const name = productData.name.split(" ").join("-").toLowerCase();
    slugRef.current.value = name + "-" + productData.size.toLowerCase();
  }, [productData.size, productData.name]);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Add Product</h1>
      <form
        className="flex flex-col"
        onSubmit={handleFileUpload}
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
            ref={slugRef}
            readOnly={true}
          />
        </div>
        <div className="flex gap-2">
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor="brand"
              className="text-sm font-medium py-1"
            >
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              className="outline-0 border border-slate-400 rounded-md px-2 py-1 text-sm"
              placeholder="Quantity"
              value={productData.quantity}
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

        {/* image upload */}
        <div className="flex flex-col my-2">
          {/* images */}
          <div className="flex py-2">
            {selectedFiles &&
              selectedFiles.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt="image"
                  className="w-20 h-20 object-cover my-2 mx-1"
                />
              ))}
          </div>
          <input
            type="file"
            name="image"
            id="files"
            className="hidden"
            accept="image/png, image/gif, image/jpeg"
            ref={inputRef}
            onChange={handleFileChange}
          />
          <div
            className="file-upload flex flex-col items-center justify-center h-22 border-dashed border-[2px] border-black rounded-md cursor-pointer py-2"
            onClick={() => inputRef.current.click()}
          >
            <AiOutlineUpload className="text-2xl " />
            <p className="text-sm py-1">Upload files</p>
            <p className="text-sm font-semibold">PNG, JPG up to 5MB</p>
          </div>
        </div>

        <div>
          <button
            className="flex items-center gap-2 text-sm rounded-md bg-blue-500 text-white px-3 py-2 mx-2 my-2 m-auto"
            type="submit"
          >
            <AiOutlinePlus />
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductModal;
