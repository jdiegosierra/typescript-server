import express, { Express } from 'express';
// import helmet from 'helmet';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import errorHandler from 'errorhandler';
import * as http from "http";
import Routes from '@routes/index';
// TODO: Get config logger
import { logger } from '@utils/logger';
// import https from 'https';
// https://expressjs.com/es/advanced/best-practice-security.html

export default class Server {
  _app: Express;
  _server: any;
  _config: any;
  _logger: any;

  constructor(config: any) {
    this._config = config.get('server');
    this._logger = logger;
    this._app = express();
    this._setUp();
    this._routes();
  }

  static init(config: any): Server {
    return new Server(config);
  }

  start() {
    this._server.listen(this._app.get('port'), this._app.get('host'));
  }

  _setUp() {
    // this.app.use(helmet());
    // this._app.use(bodyParser.json({ limit: '500kb' }));

    // this.app.use(function(req, res) {
    //   // console.log(req.body.talks);

    // });
    // this._app.use(bodyParser.urlencoded({ limit: '500kb', extended: true }));
    // this.app.use(cors());
    // TODO: Add verbose flag
    if ((process.env.NODE_ENV || 'development') === 'development') {
      // const morgan = require('morgan');
      // this.app.use(morgan('combined'));
      // this.app.use(morgan('dev', { stream: this.logger }));
    }
    // this.app.use(errorHandler);

    // TODO: Add HTTPS
    if (this._config['HTTPS']) {
      this._logger.error('HTTPS not available');
      // this.server = https.createServer(settings().HTTPS, (req,res) => {
      //     this.app(req,res);
      // });
    } else {
      this._server = http.createServer((req: any,res: any) => {
            this._app(req,res);
        });
    }

    this._app.setMaxListeners(0);
    this._app.set('host', this._config['HOST'] || '0.0.0.0');
    this._logger.info('Domain: ' + this._config['HOST']);
    this._app.set('port', this._config['PORT'] || 3000);
    this._logger.info('Server listening on port ' + this._config['PORT']);
  }

  _routes() {
    // TODO: call as REST https://www.npmjs.com/package/http-typescript
    let router = new Routes();
    this._app.use('/api/v1', router.getV1Routes());
  }
}
