import { useNavigate } from "react-router-dom";
import currencyFormatter from "../../../utils/currencyFormatter"


const Order = ({order}) => {

  const navigate = useNavigate()


  return (
    <div className="w-full justify-center flex gap-8 px-1 my-5">
      <div className="product flex flex-col items-center justify-center cursor-pointer" onClick={()=> navigate("/dashboard/order", {state : {order}})}>
          {
            order && order.products.map((product) =>(
              <>
                <img className="w-28 h-16 my-2" src={product.imageUrl} alt="" srcSet="" />
              </>
              ))
          }
      </div>
      <div className="flex flex-col justify-center mr-3">
          <div className="">
              {
                order && order.products.map((product) =>(
                  <>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  </>
                ))
              }
            <h3 className="font-semibold text-base capitalize">{order.products[0].category}</h3>
          </div>
          <div className="flex justify-between gap-2 my-3">
            <h3 className="font-medium">Total : <span className="font-semibold">{currencyFormatter.format(order.total)}</span></h3>
          </div>
        </div>
      <div className="status flex items-center flex-col justify-center my-3">
            <p className="text-lg font-medium">status</p>
            <h3 className="text-lg font-semibold text-green-600 uppercase">{order.status}</h3>
      </div>
      <div className="cancel flex items-center justify-center">
        <button className="text-base text-red-600 font-semibold rounded-lg ml-2 border-[1px] border-red-400 outline-0 px-3 py-1 lg:text-lg">cancel</button>
      </div>
    </div> 
  );
};

export default Order;
