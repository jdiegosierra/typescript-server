import express from 'express';
import routes from '../routes';
import morgan from 'morgan';

export default class Server {
    public app: express.Application;

    constructor(private port: number) {
        this.app = express();
        this.config();
        this.app.use(routes);
        this.app.use(morgan('dev'));
    }

    // Load middlewares
    config() {
        // cambiar process.env a configuracion
        this.app.set('port', process.env.PORT || 3000);
        this.app.use
    }

    routes() {
        
    }

    start(callback: Function) {
        this.app.listen(this.app.get('port'), callback());
    }

    static init(port: number): Server{
        return new Server(port);
    }
}