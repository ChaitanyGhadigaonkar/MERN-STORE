import currencyFormatter from "../../utils/currencyFormatter"

const order = {
  _id: "64b56f8d928db5d2f813fe5c",
  user: "64a2e63a8271417a2ea2f152",
  products: [
    {
      name: "Wear the code premium tshirt",
      category: "tshirt",
      imageUrl: "https://m.media-amazon.com/images/I/519tzhwc9aL._UX522_.jpg",
      size: "xl",
      price: 499,
      quantity: 2,
    },
    {
      name: "Wear the code premium tshirt2",
      category: "tshirt",
      size: "xl",
      price: 499,
      quantity: 2,
    },
  ],
  total: 1996,
  status: "pending",
  __v: 0,
};

const Order = () => {
  return (
    <div className="w-full justify-center flex gap-8 px-5 my-5">
      <div className="product flex items-center">
        <img className="w-32 h-32" src={order.products[0].imageUrl} />
      </div>
      <div className="flex flex-col justify-center mr-3">
          <div className="">
            <h1 className="text-xl font-semibold">{order.products[0].name}</h1>
            <h3 className="font-semibold text-base capitalize">{order.products[0].category}</h3>
          </div>
          <div className="flex justify-between gap-2 my-3">
            <h3 className="font-medium">Size : <span className="font-semibold uppercase">{order.products[0].size}</span></h3>
            <h3 className="font-medium">Quantity : <span className="font-semibold">{order.products[0].quantity}</span></h3>
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
