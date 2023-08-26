import jwt from "jsonwebtoken";

const generate = (res, id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRETE, {
    expiresIn: "30d",
  });

  return token;

  // res.cookie("jwt", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV !== "dev",
  //   sameSite: "strict",
  //   maxAge: 30 * 24 * 60 * 60 * 1000,
  // });
};
export default generate;
