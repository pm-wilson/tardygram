const UserService = require('../services/user-service');

module.exports = (req, res, next) => {
  try {
    //reads the session cookie -> token
    const token = req.cookies.session;
    //verify token -> payload (user)
    const payload = UserService.verifyToken(token);
    //attaching the user to req.user
    req.user = {
      userId: payload.userId,
      email: payload.email,
      profilePhotoUrl: payload.profilePhotoUrl,
    };
    //next
    next();
  } catch(error) {
    next(error);
  }
};
