import settings from './settings';

interface IData {
  [key: string]: any;
}

// Some basic config
const defaultConfig: IData = {
  title: 'TypeScript Server',
};

// Environment config
const server: IData = {
  development: {
    HOST: '0.0.0.0',
    PORT: 8888,
    HTTPS: false,
    CLUSTER_MODE: false
  },
  test: {
    HOST: '0.0.0.0',
    PORT: 8888,
    HTTPS: true,
    CLUSTER_MODE: false
  },
  production: {
    HOST: '0.0.0.0',
    PORT: 8888,
    HTTPS: true,
    CLUSTER_MODE: true
  },
};

export default {
  server: { ...server[process.env.NODE_ENV || 'development'] },
  ...defaultConfig,
  ...settings,
};
