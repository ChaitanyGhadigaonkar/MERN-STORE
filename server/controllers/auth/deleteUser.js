import expressAsyncHandler from "express-async-handler";
import User from "../../models/user.js";

const deleteUser = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId);
  if (user.role !== "admin") {
    res.status(400);
    throw new Error("Not authorized");
  }

  const { id } = req.params;

  const queriedUser = await User.findById(id);

  if (!queriedUser) {
    res.status(400);
    throw new Error("User does not exists");
  }

  //   update
  const deletedUser = await User.findByIdAndDelete(queriedUser._id);
  res.status(201).json({ success: true, user: deletedUser });
});

export default deleteUser;
