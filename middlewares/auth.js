const passport = require('passport');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { roleRights } = require('../config/roles');
const logger = require('../config/logger');

const verifyCallback = (req, resolve, reject, requiredRights) => async (err, user, info) => {
  if (err || info || !user) {
    logger.error(`AUTH :: Failed Please authenticate`);
    return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
  }
  req.user = user;

  if (requiredRights.length) {
    const userRights = roleRights.get(user.role);
    const hasRequiredRights = requiredRights.every((requiredRight) => userRights.includes(requiredRight));
    if (!hasRequiredRights && req.params.userId !== user.id) {
      logger.error(`AUTH :: ROLE :: Validation failed`);
      return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
    }
  }
  logger.info(`AUTH :: token validation passed`);
  resolve();
};

const auth = (...requiredRights) => async (req, res, next) => {
  logger.info(`AUTH :: Validating user token`);
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', { session: false }, 
    verifyCallback(req, resolve, reject, requiredRights))(req, res, next);
  })
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = auth;