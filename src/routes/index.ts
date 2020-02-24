import { Request, Response, Router } from 'express';
import controller from '@controllers/index';
import auth from '@routes/auth';

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
    this.router.post('/login', auth.login);
  }
}
