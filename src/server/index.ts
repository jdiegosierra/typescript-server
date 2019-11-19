import express from 'express';
// import routes from '../routes';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
// BUENAS PRACTICAS https://expressjs.com/es/advanced/best-practice-security.html
export default class Server {
    public app: express.Application;

    constructor(private port: number) {
        this.app = express();
        this.config();
        // this.app.use(routes);
        this.app.use(morgan('dev'));
    }

    // Load middlewares & config from file
    config() {
        this.app.use(helmet());
        this.app.use(bodyParser.json({limit: '500kb'}));
        this.app.use(bodyParser.urlencoded({limit: '500kb', extended: true}));
        this.app.use(cors());

        // // TODO: Add verbose flag
        // if ((process.env.NODE_ENV || 'development') === 'development'){
        //     const morgan = require('morgan');
        //     const morganBody = require('morgan-body');
        //     //app.use(morgan('combined'));
        //     //app.use(morgan('dev', { 'stream': logger.stream }));
        //     morganBody(app);
        // }
        // this.app.use(errorhandler());

        // To server static files
        this.app.use(express.static(__dirname + '/docs'));

        // HTTPS AÑDIR HTTPS EN EXPRESS
        // if (config.HTTPS) {
        //     server = https.createServer(settings.https,function(req,res) {app(req,res);});
        // } else {
        //     server = http.createServer(function(req,res) {app(req,res);});
        // }

        this.app.setMaxListeners(0);
        this.app.set('port', this.port || 3000);
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