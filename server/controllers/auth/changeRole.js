import expressAsyncHandler from "express-async-handler";
import User from "../../models/user.js";

const changeRole = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId);
  if (user.role !== "admin") {
    res.status(400);
    throw new Error("Not authorized");
  }

  const { email, role } = req.body;

  const queriedUser = await User.findOne({ email });

  if (!queriedUser) {
    res.status(400);
    throw new Error("User does not exists");
  }

  //   update
  const updatedUser = await User.findByIdAndUpdate(
    queriedUser._id,
    {
      $set: { role },
    },
    { new: true }
  );
  res.status(201).json({ success: true, user: updatedUser });
});

export default changeRole;
