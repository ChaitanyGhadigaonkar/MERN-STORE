import expressAsyncHandler from "express-async-handler";
import MoreUserInfo from "../../models/moreUserInfo.js";

const getUserInfo = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;

  const userInfo = await MoreUserInfo.findOne({ user: userId });
  if (!userInfo) {
    res.status(200).json({
      success: false,
      userInfo: { firstname: "", lastname: "", phone: "" },
    });
  } else {
    res.status(200).json({ success: true, userInfo: userInfo });
  }
});
export default getUserInfo;
