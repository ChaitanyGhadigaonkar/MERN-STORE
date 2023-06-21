import mongoose from 'mongoose';
import { MONGODB_URI } from '../config/index.js';

const connectDB = () => {
  mongoose
    .connect(MONGODB_URI, {})
    .then(() => {
      console.log('connected to mongoDB atlas');
    })
    .catch(err => {
      console.log(err);
    });
};

export default connectDB;
