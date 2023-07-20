import expressAsyncHandler from "express-async-handler";
import MoreUserInfo from "../../models/moreUserInfo.js";

const addMoreUserInfo = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;

  const { firstname, lastname, phone } = req.body;

  let userInfo = await MoreUserInfo.findOne({ user: userId });

  if (userInfo) {
    userInfo = await MoreUserInfo.findByIdAndUpdate(
      userInfo._id,
      { firstname, lastname, phone },
      { new: true }
    );
    res.status(200).json({ success: true, userInfo });
  } else {
    userInfo = await MoreUserInfo.create({
      user: userId,
      firstname,
      lastname,
      phone,
    });
  }
});

export default addMoreUserInfo;
