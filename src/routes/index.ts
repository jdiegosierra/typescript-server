import { Router } from 'express';
import auth from './auth';

export default class Routes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.use(auth);
    }
}