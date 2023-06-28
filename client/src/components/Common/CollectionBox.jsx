import { useNavigate } from "react-router-dom";

const CollectionBox = ({ title, route, image }) => {
  const navigate = useNavigate();
  return (
    <div
      className="collection-box w-60 h-60 relative bg-no-repeat bg-cover bg-center rounded-lg shadow-md transition-transform duration-300 hover:scale-75 cursor-pointer"
      style={{ backgroundImage: `url(${image})` }}
      onClick={()=>navigate(route)}
    >
      <div className="absolute w-full bottom-5 flex items-center justify-center">
        <p className="text-xl text-center text-white font-semibold shadow-nd opacity-90 ">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CollectionBox;
