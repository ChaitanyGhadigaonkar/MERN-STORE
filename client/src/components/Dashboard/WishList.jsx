
import Product from '../Product/product'

const product ={
  "_id": "64931a7e1f36ceddda500b31",
  "name": "DUDEME Developer",
  "slug": "dudeme-developer-s",
  "imageUrl": [
    "https://m.media-amazon.com/images/I/519tzhwc9aL._UX522_.jpg",
    "https://m.media-amazon.com/images/I/51+04pSkqFL._UX425_.jpg",
    "https://m.media-amazon.com/images/I/61skyMwcmhL._UX522_.jpg",
    "https://m.media-amazon.com/images/I/51o3JyFB19L._UX425_.jpg"
  ],
  "description": "DudeMe's combed cotton t-shirts are softer and stronger than regular cotton t-shirts. The cottons we use are made by further treating it after it's been picked, then spun into yarn to remove short fibers, which are prone to breakage. This process helps us deliver the best quality t-shirts without impurities or short protruding threads. \n All our t-shirts are tailored to be regular fit for men and women. We always want to make you feel wearing dudeme's creations to be an awesome feel & we work towards tailoring the perfect stitch that never let's you down.",
  "category": "tshirt",
  "quantity": 10,
  "size": [
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "price": 599,
  "createdAt": "2023-06-21T15:42:54.909Z",
  "updatedAt": "2023-06-21T15:42:54.909Z",
  "__v": 0
}
const WishList = () => {
  return (
    <div className='flex-[3]'>
      <h1>Your Wishlist</h1>
      <div className="hoodies-container my-5 grid grid-cols-1 place-content-center gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-10 md:my-10 lg:grid-cols-3">
        <Product product={product}/>
        <Product product={product}/>
      </div>
    </div>
  )
}

export default WishList
