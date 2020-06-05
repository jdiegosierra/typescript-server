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
    CLUSTER_MODE: false,
    DB_PORT:54321,
    DB_USERNAME: 'postgres',
    DB_PASSWORD: 'p@ssw0rd',
    DB_DATABASE: 'postgres',
    DB_HOST: 'localhost'
  },
  test: {
    HOST: '0.0.0.0',
    PORT: 8888,
    HTTPS: true,
    CLUSTER_MODE: false,
    DB_PORT:54321,
    DB_USERNAME: 'postgres',
    DB_PASSWORD: 'p@ssw0rd',
    DB_DATABASE: 'postgres',
    DB_HOST: 'localhost'
  },
  production: {
    HOST: '0.0.0.0',
    PORT: 8888,
    HTTPS: true,
    CLUSTER_MODE: true,
    DB_PORT:54321,
    DB_USERNAME: 'postgres',
    DB_PASSWORD: 'p@ssw0rd',
    DB_DATABASE: 'postgres',
    DB_HOST: 'localhost'
  },
};

export default {
  server: { ...server[process.env.NODE_ENV || 'development'] },
  ...defaultConfig,
  ...settings,
};
