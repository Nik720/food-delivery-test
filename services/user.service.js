const { User } = require('../v1/models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  try {
    const user = await User.create(userBody);
    return user;
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
};


module.exports = {
  createUser
};