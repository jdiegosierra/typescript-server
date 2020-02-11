import { Router } from 'express';
import auth from './auth';

export default class Routes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();

        return this.router;
    }

    routes() {
        this.router.use(auth);
    }
}