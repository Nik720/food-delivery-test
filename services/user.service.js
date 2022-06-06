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

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  try {
    const user = User.findById(id);
    return user;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  try {
    const user = User.findOne({ email });
    return user;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};


module.exports = {
  createUser,
  getUserById,
  getUserByEmail
};