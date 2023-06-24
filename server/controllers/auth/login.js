import expressAsyncHandler from 'express-async-handler';
import User from "../../models/user.js";
import generateToken from '../../utils/generateToken.js';

const login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password is required');
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error('User does not exists');
  }
  const isCorrect = await user.comparePassword(password);
  if (!isCorrect) {
    res.status(400);
    throw new Error('Email or password is wrong');
  } else {
    generateToken(res, user._id);
    res.status(200).json({ success: true, 
        msg: 'Login successfully',
        userInfo:{
          _id:user._id,
          name:user.name,
          email:user.email
        } });
  }
});

export default login;
