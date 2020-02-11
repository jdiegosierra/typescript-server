import express from 'express';
// import routes from '../routes';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import errorHandler from 'errorhandler';
import http from 'http';
import Routes from '@routes';
// import https from 'https';
import router from '../routes/auth';
// https://expressjs.com/es/advanced/best-practice-security.html

export default class Server {
    public app: express.Application;
    server: Any;
    config: Any;
    logger: Any;

    constructor(config: Any, logger: Any) {
        this.config = config.get('server');
        this.logger = logger;
        this.app = express();
        this.setUp();
        this.routes();
    }

    static init(config: Any, logger: Any): Server {
        return new Server(config, logger);
    }

    setUp() {
        this.app.use(helmet());
        this.app.use(bodyParser.json({limit: '500kb'}));
        this.app.use(bodyParser.urlencoded({limit: '500kb', extended: true}));
        this.app.use(cors());
        // TODO: Add verbose flag
        if ((process.env.NODE_ENV || 'development') === 'development'){
            const morgan = require('morgan');
            this.app.use(morgan('combined'));
            this.app.use(morgan('dev', { 'stream': this.logger }));
        }
        // this.app.use(errorHandler);

        // TODO: Add HTTPS
        if (this.config.HTTPS) {
            this.logger.error('HTTPS not available');
            // this.server = https.createServer(settings().HTTPS, (req,res) => {
            //     this.app(req,res);
            // });
        } else {
            this.server = http.createServer((req, res) => {
                this.app(req, res);
            });
        }

        this.app.setMaxListeners(0);
        this.app.set('host', this.config.HOST || '0.0.0.0');
        this.logger.info('Domain: ' + this.config.HOST);
        this.app.set('port', this.config.PORT || 3000);
        this.logger.info('Server listening on port ' + this.config.PORT);
    }

    routes() {
        // this.app.use(express.static(__dirname + '/docs'));
        // this.app.use('/login', function (_req, res, _next) {
        //     res.send('holita');
        // });
        let routes = new Routes();
        this.app.use(routes);
        // this.app.use('/login', router);
    }

    start(callback: Function) {
        this.server.listen(this.app.get('port'), this.app.get('host'), callback());
    }
}