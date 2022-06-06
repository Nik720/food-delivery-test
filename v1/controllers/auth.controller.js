const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const { authService, userService, tokenService } = require('../../services');
const { successResponse } = require('../../utils/response');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(await successResponse("api.auth.register", user, req));
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  const userDetails = { user, tokens };
  res.status(httpStatus.OK).send(await successResponse("api.auth.login", userDetails, req));
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.OK).send(await successResponse("api.auth.logout", {}, req));
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.status(httpStatus.OK).send(await successResponse("api.auth.refreshtoken", { ...tokens }, req));
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens
};