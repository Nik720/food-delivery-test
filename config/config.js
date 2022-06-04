
const dotenv = require('dotenv');

const envVars = dotenv.config().parsed;
module.exports = {
    api_host: "http://localhost:5001/api/v1/" ,
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongoose: {
      url: envVars.MONGO_URI + (envVars.NODE_ENV === 'test' ? '-test' : ''),
      options: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }
  };