const httpStatus = require('http-status');
const { User } = require('../v1/models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  try {
    if (await User.isEmailTaken(userBody.email)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    const user = await User.create(userBody);
    return user;
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
};


module.exports = {
  createUser
};