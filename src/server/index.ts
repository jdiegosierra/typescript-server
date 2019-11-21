import { config } from '../../config/environments';
import express from 'express';
// import routes from '../routes';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import errorHandler from 'errorhandler';
import { stream } from '../utils/logger';
import http from 'http';
// import https from 'https';
import logger from '../../.history/src/utils/logger_20191121003611';
// BUENAS PRACTICAS https://expressjs.com/es/advanced/best-practice-security.html

export default class Server {
    public app: express.Application;
    server: any;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    // Load middlewares & config from file
    config() {
        this.app.use(helmet());
        this.app.use(bodyParser.json({limit: '500kb'}));
        this.app.use(bodyParser.urlencoded({limit: '500kb', extended: true}));
        this.app.use(cors());
        // TODO: Add verbose flag
        if ((process.env.NODE_ENV || 'development') === 'development'){
            const morgan = require('morgan');
            this.app.use(morgan('combined'));
            this.app.use(morgan('dev', { 'stream': stream }));
        }
        this.app.use(errorHandler);

        // HTTPS AÑDIR HTTPS EN EXPRESS
        if (config().HTTPS) {
            logger.error('HTTPS not available');
            // this.server = https.createServer(settings().HTTPS, (req,res) => {
            //     this.app(req,res);
            // });
        } else {
            this.server = http.createServer((req, res) => {
                this.app(req, res);
            });
        }

        this.app.setMaxListeners(0);
        this.app.set('port', config().PORT || 3000);
    }

    routes() {
        this.app.use(express.static(__dirname + '/docs'));
        // TODO: Importar routes
        // this.app.use(routes);
    }

    start(callback: Function) {
        this.server.listen(this.app.get('port'), callback());
    }

    static init(): Server{
        return new Server();
    }
}