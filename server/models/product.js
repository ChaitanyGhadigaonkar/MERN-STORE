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
    imageUrl: {
      type: String
    },
    description: {
      type: String,
      trim: true
    },
    category: {
      type: String,
      trim: true,
      require: true
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
