let config = require('./config').config
switch (process.env.NODE_ENV) {
  case 'hj': 
    config = require('./config').config;
    break; 
}

export default () => {
  return config
};