import { useState } from "react";
import { categoryOptions } from "../../../constants";

const ProductFilter = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (option === "All") {
      setSelectedOptions(categoryOptions);
    } else {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };

  const isAllSelected = selectedOptions.length === categoryOptions.length;
  return (
    <div className="absolute right-2 top-16 px-4 py-4 bg-white z-30 flex flex-col">
      <p className="text-sm font-semibold my-2">Choose Category</p>
      <label>
        <input
          className="mr-2"
          type="checkbox"
          checked={isAllSelected}
          onChange={() => handleOptionChange("All")}
        />
        All
      </label>
      {categoryOptions.map((option) => (
        <label
          key={option}
          className="flex gap-2"
        >
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionChange(option)}
          />
          <p>{option}</p>
        </label>
      ))}
    </div>
  );
};

export default ProductFilter;
