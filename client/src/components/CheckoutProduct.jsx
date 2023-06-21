import currencyFormatter from "../utils/currencyFormatter"

const product ={
    name:"Code Mode On Hoodie",
    slug:"code-mode-on-hoodie",
      imageUrl:"https://m.media-amazon.com/images/I/616m5VorixL._UX522_.jpg",
      description:"The \"Code Mode On Hoodie\" is the perfect gift for any developer, programmer or computer science enthusiast. Made of high-quality materials, this comfortable and stylish hoodie features the phrase \"Code Mode On\" prominently on the front. This hoodie is a nod to the focus and dedication that goes into coding and developing. It's perfect for showing off your passion for coding and your dedication to the craft. Whether you're working on a project, attending a hackathon or just enjoying a casual coding session, this hoodie will keep you warm and remind you of the joy of coding. Perfect for wearing to work, school, or while working from home, and makes a great gift for any developer, programmer or computer science enthusiast. Show off your passion for coding and grab yours today!",
      category:"hoodie",
      quantity:10,
      price:799
  }
const CheckoutProduct = () => {
  return (
    <div className='w-full flex flex-row items-center gap-1 rounded-md shadow-lg'>
        <div className="top mt-2">
            <img className="h-40 w-44 px-2 py-6" src={product.imageUrl} alt="Hoodie image" srcSet="" />
        </div>
        <div className="bottom px-8 my-2">
            <h3 className='text-base font-semibold '>{product.name}</h3>
            <p className='category text-sm text-slate-600'>{product.category}</p>
            <div className="price">
                <p className='text-sm font-semibold '>{currencyFormatter.format(product.price)}</p>
            </div>
            <div className="buttons my-2 ">
                <button className="remove text-sm font-semibold rounded-lg border-slate-800 border-[1px] outline-0 px-1 py-1 text-black my-1 lg:text-lg">Remove</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct
