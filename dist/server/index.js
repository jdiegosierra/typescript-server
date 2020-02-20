"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const index_1 = __importDefault(require("@routes/index"));
class Server {
    constructor(config, logger) {
        this._config = config.get('server');
        this._logger = logger;
        this._app = express_1.default();
        this._setUp();
        this._routes();
    }
    static init(config, logger) {
        return new Server(config, logger);
    }
    start(callback) {
        this._server.listen(this._app.get('port'), this._app.get('host'), callback());
    }
    _setUp() {
        this._app.use(body_parser_1.default.json({ limit: '500kb' }));
        if ((process.env.NODE_ENV || 'development') === 'development') {
        }
        if (this._config.HTTPS) {
            this._logger.error('HTTPS not available');
        }
        else {
            this._server = http_1.default.createServer(() => { });
        }
        this._app.setMaxListeners(0);
        this._app.set('host', this.config.HOST || '0.0.0.0');
        this._logger.info('Domain: ' + this.config.HOST);
        this._app.set('port', this.config.PORT || 3000);
        this._logger.info('Server listening on port ' + this.config.PORT);
    }
    _routes() {
        let router = new index_1.default();
        this._app.use('/', router);
    }
}
exports.default = Server;
//# sourceMappingURL=index.js.map