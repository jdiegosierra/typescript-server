"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const _routes_1 = __importDefault(require("@routes"));
class Server {
    constructor(config, logger) {
        this.config = config.get('server');
        this.logger = logger;
        this.app = express_1.default();
        this._setUp();
        this._routes();
    }
    static init(config, logger) {
        return new Server(config, logger);
    }
    _setUp() {
        this.app.use(helmet_1.default());
        this.app.use(body_parser_1.default.json({ limit: '500kb' }));
        this.app.use(body_parser_1.default.urlencoded({ limit: '500kb', extended: true }));
        this.app.use(cors_1.default());
        if ((process.env.NODE_ENV || 'development') === 'development') {
        }
        if (this.config.HTTPS) {
            this.logger.error('HTTPS not available');
        }
        else {
            this.server = http_1.default.createServer((req, res) => {
                this.app(req, res);
            });
        }
        this.app.setMaxListeners(0);
        this.app.set('host', this.config.HOST || '0.0.0.0');
        this.logger.info('Domain: ' + this.config.HOST);
        this.app.set('port', this.config.PORT || 3000);
        this.logger.info('Server listening on port ' + this.config.PORT);
    }
    _routes() {
        this.app.use('/api/v1', new _routes_1.default());
    }
    start(callback) {
        this.server.listen(this.app.get('port'), this.app.get('host'), callback());
    }
}
exports.default = Server;
//# sourceMappingURL=index.js.map