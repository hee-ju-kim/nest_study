let config = require('./config').config
switch (process.env.NODE_ENV) {
  case 'hj': 
    config = require('./config').config;
    break; 
  case 'dev': 
    config = require('./dev').config;
    break; 
}

export default () => {
  return config
};