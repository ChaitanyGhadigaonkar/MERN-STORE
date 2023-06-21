import Carousel from "../components/Carousel";
import CollectionBox from "../components/CollectionBox";
import tshirtImage from "../assets/tshirts.jpg";
import hoodiesImage from "../assets/hoodies.jpg";
import capsImage from "../assets/caps.jpg";
import { FaTshirt, FaRupeeSign } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from "react-router-dom";


const Home = () => {

  return (
    <div className="flex y-2 flex-col items-center gap-5 md:my-10">
      <div className="div flex items-center justify-center">
        <Carousel />
      </div>
      <div className="collection my-5 flex flex-col gap-5 items-center justify-around">
        <h1 className="text-2xl my-5 font-bold md:my-10">COLLECTIONS</h1>
        <div className="grid grid-cols-1 place-items-center gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20">
          <CollectionBox title={"Tshirts"} route={"tshirts"} image={tshirtImage} />
          <CollectionBox title={"Hoodies"} route={"/hoodies"} image={hoodiesImage} />
          <CollectionBox title={"Caps"} route={"/caps"} image={capsImage} />
        </div>
      </div>
      <div className="services my-5 grid grid-cols-1 place-items-center gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="service w-56 h-56 flex flex-col items-center justify-center gap-2 shadow-sm rounded-lg px-6 py-6 md:w-72" >
          <div className="p-2 bg-pink-200 rounded-full">
            <FaTshirt className="w-8 h-8 text-pink-500" />
          </div>
          <h1 className="text-lg font-semibold text-justify">
            Premium Tshirts
          </h1>
          <p className="text-center">Our T-Shirts are 100% made of cotton.</p>
        </div>
        <div className="service w-56 h-56 flex flex-col items-center justify-center gap-2 shadow-sm rounded-lg px-6 py-6 md:w-72" >
          <div className="p-2 bg-pink-200 rounded-full">
            <TbTruckDelivery className="w-8 h-8 text-pink-500" />
          </div>
          <h1 className="text-lg font-semibold text-justify">Free Shipping</h1>
          <p className="text-center">We ship all over India for FREE.</p>
        </div>
        <div className="service w-56 h-56 flex flex-col items-center justify-center gap-2 shadow-sm rounded-lg px-6 py-6 md:w-72" >
          <div className="p-2 bg-pink-200 rounded-full">
            <FaRupeeSign className="w-7 h-7 text-pink-500" />
          </div>
          <h1 className="text-lg font-semibold text-justify">
            Exciting Offers
          </h1>
          <p className="text-center">
            We provide amazing offers & discounts on our products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
