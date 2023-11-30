import expressAsyncHandler from "express-async-handler";
import User from "../../models/user.js";

const getAllUsers = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId);

  if (user.role !== "admin") {
    res.status(400);
    throw new Error("Not authorized");
  }

  let { page, limit, type, searchTerm } = req.query;

  page = parseInt(page);
  limit = parseInt(limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  let filter = {};

  if (type === "admin" || type === "customer") {
    filter.role = type;
  }
  const regex = new RegExp(searchTerm, "i");

  if (searchTerm !== "") {
    filter.name = regex;
  }

  const users = await User.find(filter).limit(limit).skip(startIndex).exec();

  const totalDocuments = await User.find(filter).countDocuments().exec();
  const prev = startIndex > 0 ? page - 1 : null;
  const next = totalDocuments > endIndex ? page + 1 : null;
  res.status(201).json({
    users,
    success: true,
    total: Math.ceil(totalDocuments / limit),
    prev,
    next,
  });
});

export default getAllUsers;
