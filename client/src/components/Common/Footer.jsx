import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section flex flex-col items-center">
      <div className="flex flex-col items-center w-[100%] md:flex-row">
        <div className="customer flex flex-col items-center font-sans w-[100%] p-8 border-t-2">
          <h1 className="text-lg font-semibold ">CUSTOMER SERVICE</h1>
          <p className="text-sm opacity-70 py-1 cursor-pointer hover:font-[600] ">
            Contact Us
          </p>
          <p className="text-sm opacity-70 py-1 cursor-pointer hover:font-[600] ">
            Sell With Us
          </p>
          <p className="text-sm opacity-70 py-1 cursor-pointer hover:font-[600] ">
            Shipping
          </p>
        </div>
        <div className="customer flex flex-col items-center font-sans w-[100%] p-8 border-t-2">
          <h1 className="text-lg font-semibold ">LINKS</h1>
          <p className="text-sm opacity-70 py-1 cursor-pointer hover:font-[600] ">
            Contact Us
          </p>
          <p className="text-sm opacity-70 py-1 cursor-pointer hover:font-[600] ">
            Sell With Us
          </p>
          <p className="text-sm opacity-70 py-1 cursor-pointer hover:font-[600] ">
            Shipping
          </p>
        </div>
      </div>

      <div className="footer flex flex-col items-center font-sans w-[100%] px-8 py-8 border-t-2 gap-3 md:flex-row md:justify-between md:px-8">
        <div className="left">
          <p className="text-base opacity-70 font-semibold">© 2023 E commerce</p>
        </div>
        <div className="links flex items-center gap-3">
          <div className="p-2 bg-pink-200 rounded-full">
            <FaFacebookF className=" text-xl cursor-pointer text-pink-500" />
          </div>
          <div className="p-2 bg-pink-200 rounded-full">
            <FaInstagram className=" text-xl cursor-pointer text-pink-500" />
          </div>
          <div className="p-2 bg-pink-200 rounded-full">
            <FaTwitter className=" text-xl cursor-pointer text-pink-500" />
          </div>
          <div className="p-2 bg-pink-200 rounded-full">
            <FaPinterestP className=" text-xl cursor-pointer text-pink-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
