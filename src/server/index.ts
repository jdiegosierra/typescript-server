import express from 'express';
// import routes from '../routes';
// import helmet from 'helmet';
import bodyParser from 'body-parser';
// import cors from 'cors';
// import errorHandler from 'errorhandler';
import http from 'http';
import Routes from '@routes/index';
/*// TODO: Get config logger
import { logger } from '@utils/logger';*/
// import https from 'https';
// https://expressjs.com/es/advanced/best-practice-security.html

export default class Server {
  _app: Express.Application;
  _server: any;
  _config: any;
  _logger: any;

  constructor(config: any, logger: logger) {
    this._config = config.get('server');
    this._logger = logger;
    this._app = express();
    this._setUp();
    this._routes();
  }

  static init(config: any, logger: logger): Server {
    return new Server(config, logger);
  }

  start(callback: Function) {
    this._server.listen(this._app.get('port'), this._app.get('host'), callback());
  }

  _setUp() {
    // this.app.use(helmet());
    this._app.use(bodyParser.json({ limit: '500kb' }));

    // this.app.use(function(req, res) {
    //   // console.log(req.body.talks);

    // });
    // this.app.use(bodyParser.urlencoded({ limit: '500kb', extended: true }));
    // this.app.use(cors());
    // TODO: Add verbose flag
    if ((process.env.NODE_ENV || 'development') === 'development') {
      // const morgan = require('morgan');
      // this.app.use(morgan('combined'));
      // this.app.use(morgan('dev', { stream: this.logger }));
    }
    // this.app.use(errorHandler);

    // TODO: Add HTTPS
    if (this._config.HTTPS) {
      this._logger.error('HTTPS not available');
      // this.server = https.createServer(settings().HTTPS, (req,res) => {
      //     this.app(req,res);
      // });
    } else {
      this._server = http.createServer(() => {});
    }

    this._app.setMaxListeners(0);
    this._app.set('host', this.config.HOST || '0.0.0.0');
    this._logger.info('Domain: ' + this.config.HOST);
    this._app.set('port', this.config.PORT || 3000);
    this._logger.info('Server listening on port ' + this.config.PORT);
  }

  _routes() {
    // this.app.use(express.static(__dirname + '/docs'));
    // this.app.use('/login', function (_req, res, _next) {
    //     res.send('holita');
    // });
    let router = new Routes();
    this._app.use('/', router);
    // this.app.use('/login', router);
  }
}
