const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const { userService } = require('../../services');
const { successResponse } = require('../../utils/response');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(await successResponse("api.auth.register", user, req));
});

module.exports = {
  register
};