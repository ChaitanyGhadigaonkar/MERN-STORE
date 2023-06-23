import User from "../../models/user.js";
import expressAsyncHandler from "express-async-handler";

const update = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // TODO: if user want's to change email then first we have to check wether the sended email is available or not 
  // const user = await User.findOne({email})
  // if(user){
  //    res.status(400)
  //    throw new Error("Email is already taken please try with another email")
  // }
  const _id = req.user._id;
  let user = await User.findById(_id);
  if (user) {
    const changedFields = {
      name: name ,
      email: email,
      password: password ,
    };

    user = await user.save(changedFields);

    res.status(201).json({ success: true, msg: "Updated successfully" });
  }else{
    res.status(400)
    throw new Error("user not found")
  }
});

export default update;
