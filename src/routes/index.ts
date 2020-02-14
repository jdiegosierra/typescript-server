import { Router } from 'express';
// TODO: import as controller
import auth from './auth';
import test from './test';

export default class Routes {
  router: Router;

  constructor() {
    this.router = Router();
    this._routes();

    return this.router;
  }

  _routes() {
    this.router.post('/login', auth.login);
    this.router.get('/test', auth.verifyToken, test.test);
  }
}
