// Some basic config
const defaultConfig: Object = {
  'title': 'TypeScript Server'
};

// Environment config
const server = {
  "development": {
      "HOST": "0.0.0.0",
      "PORT": 3000,
      "HTTPS": false
  },
  "test": {
      "HOST": "0.0.0.0",
      "PORT": 3001,
      "HTTPS": true
  },
  "production": {
      "HOST": "0.0.0.0",
      "PORT": 3002,
      "HTTPS": true
  }
}

export default {
  ...defaultConfig, 
  ...{
    server: server[process.env.NODE_ENV || 'development']
  } 
};
