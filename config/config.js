
const dotenv = require('dotenv');

const envVars = dotenv.config().parsed;
module.exports = {
    env: process.env.NODE_ENV || envVars.NODE_ENV,
    port: process.env.SERVER_PORT || envVars.PORT,
    mongoose: {
      url: process.env.MONGO_URI || envVars.MONGO_URI + (envVars.NODE_ENV === 'test' ? '-test' : ''),
      options: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
    jwt: {
      secret: envVars.JWT_SECRET,
      accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
      refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS
    }
  };