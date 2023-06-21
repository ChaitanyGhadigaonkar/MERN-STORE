import expressAsyncHandler from 'express-async-handler';

const logout = expressAsyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  });
  res.status(200).json({ success: true, msg: 'Logout successfully' });
});

export default logout;
