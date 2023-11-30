import { useState, useEffect } from "react";

const useDebounce = (delay = 2000) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, delay);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchTerm, delay]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return [debouncedSearchTerm, handleSearch];
};

export default useDebounce;
