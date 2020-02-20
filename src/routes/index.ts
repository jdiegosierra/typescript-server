import { Router } from 'express';
// TODO: import as controller
/*import auth from './auth';
import test from './test';
import talks from './talks';*/

export default class Routes {
  router: Router;

  constructor() {
    this.router = Router();
    this._routes();

    return this.router;
  }

  _routes() {
    this.router.get('/test', () => {
      console.log("elelelelele");
    });
/*    this.router.post('/login', auth.login);
    this.router.get('/test', auth.verifyToken, test.test);
    this.router.post('/talks', talks.add);
    this.router.get('/talks', talks.get);*/
  }
}
