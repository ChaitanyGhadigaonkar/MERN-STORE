import { MdSpaceDashboard } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="h-full w-full py-5 px-1 md:px-4 md:py-10">
      <div className="routes flex flex-col gap-4">
        <Link
          className="flex items-center px-2 py-2 cursor-pointer"
          to={"/"}
        >
          <MdSpaceDashboard className={`text-3xl`} />

          <h2
            className={`text-lg font-medium transition-all ml-2 duration-150 lg:ml-6 hidden md:block ${
              showSidebar
                ? "translate-x-0 visible "
                : "-translate-x-10 invisible"
            }`}
          >
            Dashboard
          </h2>
        </Link>
        <Link
          className="flex items-center px-2 py-2 cursor-pointer"
          to={"/products"}
        >
          <HiShoppingBag className={`text-3xl`} />
          <h2
            className={`text-lg font-medium transition-all ml-2 duration-150 lg:ml-6 hidden md:block ${
              showSidebar
                ? "translate-x-0 visible "
                : "-translate-x-10 invisible"
            }`}
          >
            Products
          </h2>
        </Link>
        <Link
          className="flex items-center px-2 py-2 cursor-pointer"
          to={"/orders"}
        >
          <IoMdCart className="text-3xl " />
          <h2
            className={`text-lg font-medium transition-all ml-2 duration-150 lg:ml-6 hidden md:block ${
              showSidebar
                ? "translate-x-0 visible "
                : "-translate-x-10 invisible"
            }`}
          >
            Orders
          </h2>
        </Link>
        <Link
          className="flex items-center px-2 py-2 cursor-pointer"
          to={"/users"}
        >
          <IoPeopleSharp className="text-3xl " />
          <h2
            className={`text-lg font-medium transition-all ml-2 duration-150 lg:ml-6 hidden md:block ${
              showSidebar
                ? "translate-x-0 visible "
                : "-translate-x-10 invisible"
            }`}
          >
            Customers
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
