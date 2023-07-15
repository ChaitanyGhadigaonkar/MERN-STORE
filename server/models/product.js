import mongoose from 'mongoose';

// Product Schema
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: [true, 'name is required']
    },
    slug: {
      type: String,
      trim: true,
      unique: [true, 'Slug should be unique']
    },
    imageUrl: [{type:String}],
    description: {
      type: String,
      trim: true
    },
    category: {
      type: String,
      trim: true,
      require: true
    },
    size:{
      type: String,
      require:true,
      enum: ["S", "M", "L", "XL", "XXL"]
    },
    quantity: {
      type: Number,
      require: true,
      default: 0
    },
    price: {
      type: Number
    }
    // brand: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Brand',
    //   default: null
    // }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', ProductSchema, 'products');
export default Product;


// {
//   "_id": {
//     "$oid": "64931a7e1f36ceddda500b31"
//   },
//   "name": "DUDEME Developer",
//   "slug": "dudeme-developer-s",
//   "imageUrl": [
//     "https://m.media-amazon.com/images/I/519tzhwc9aL._UX522_.jpg",
//     "https://m.media-amazon.com/images/I/51+04pSkqFL._UX425_.jpg",
//     "https://m.media-amazon.com/images/I/61skyMwcmhL._UX522_.jpg",
//     "https://m.media-amazon.com/images/I/51o3JyFB19L._UX425_.jpg"
//   ],
//   "description": "DudeMe's combed cotton t-shirts are softer and stronger than regular cotton t-shirts. The cottons we use are made by further treating it after it's been picked, then spun into yarn to remove short fibers, which are prone to breakage. This process helps us deliver the best quality t-shirts without impurities or short protruding threads. \n All our t-shirts are tailored to be regular fit for men and women. We always want to make you feel wearing dudeme's creations to be an awesome feel & we work towards tailoring the perfect stitch that never let's you down.",
//   "category": "tshirt",
//   "quantity": 10,
//   "size": "S",
//   "price": 599,
//   "createdAt": {
//     "$date": "2023-06-21T15:42:54.909Z"
//   },
//   "updatedAt": {
//     "$date": "2023-06-21T15:42:54.909Z"
//   },
//   "__v": 0
// }