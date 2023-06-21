import Product from "../components/product"


const product ={
  name:"Code Mode On Hoodie",
  slug:"code-mode-on-hoodie",
    imageUrl:"https://m.media-amazon.com/images/I/616m5VorixL._UX522_.jpg",
    description:"The \"Code Mode On Hoodie\" is the perfect gift for any developer, programmer or computer science enthusiast. Made of high-quality materials, this comfortable and stylish hoodie features the phrase \"Code Mode On\" prominently on the front. This hoodie is a nod to the focus and dedication that goes into coding and developing. It's perfect for showing off your passion for coding and your dedication to the craft. Whether you're working on a project, attending a hackathon or just enjoying a casual coding session, this hoodie will keep you warm and remind you of the joy of coding. Perfect for wearing to work, school, or while working from home, and makes a great gift for any developer, programmer or computer science enthusiast. Show off your passion for coding and grab yours today!",
    category:"hoodie",
    quantity:10,
    price:799
}
const Tshirts = () => {

  return (
    <div className='flex flex-col items-center gap-5 px-3 my-5' >
        <h1 className='text-xl font-semibold '>Explore our Tshirts Collection</h1> 
        <p className='text-sm text-justify mx-3 md:text-base'>Welcome to our T-Shirts Collection! Discover effortless style, comfort, and versatility. Choose from a variety of necklines, colors, prints, and graphics. Our t-shirts are crafted from high-quality, breathable fabrics for a perfect fit. From casual to elevated looks, our collection has you covered. Experience durability and timeless style with our T-Shirts Collection today!</p>

        <div className="hoodies-container my-5 grid grid-cols-1 place-content-center gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-10 md:my-10 lg:grid-cols-3">
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
        </div>
    </div>
  )
}

export default Tshirts
