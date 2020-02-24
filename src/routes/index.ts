import { Request, Response, Router } from 'express';

// TODO: import as controller
/*import auth from './auth';
import test from './test';
import talks from './talks';*/

export default class Routes {
  router: Router;

  constructor() {
    this.router = Router();
    this._routes();
  };

  getV1Routes() {
    return this.router;
  };

  _routes() {
    this.router.get('/ping', (_req: Request, res: Response) => {
      res.send('pong');
    });
/*    this.router.post('/login', auth.login);
    this.router.get('/test', auth.verifyToken, test.test);
    this.router.post('/talks', talks.add);
    this.router.get('/talks', talks.get);*/
  }
}
