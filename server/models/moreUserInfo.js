import mongoose from "mongoose";

const moreUserInfoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: [true, "user is required"],
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

const MoreUserInfo = mongoose.model("moreUserInfos", moreUserInfoSchema);

export default MoreUserInfo;
