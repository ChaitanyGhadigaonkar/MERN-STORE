import { useEffect, useState } from "react";

const useDarkTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.getElementsByTagName("html")[0];
    if (theme === "dark") {
      root.setAttribute("class", "dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return [theme, setTheme];
};
export default useDarkTheme;
