"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const index_1 = __importDefault(require("@routes/index"));
const logger_1 = require("@utils/logger");
class Server {
    constructor(config) {
        this._config = config.get('server');
        this._logger = logger_1.logger;
        this._app = express_1.default();
        this._setUp();
        this._routes();
    }
    static init(config) {
        return new Server(config);
    }
    start() {
        this._server.listen(this._app.get('port'), this._app.get('host'));
    }
    _setUp() {
        if ((process.env.NODE_ENV || 'development') === 'development') {
        }
        if (this._config['HTTPS']) {
            this._logger.error('HTTPS not available');
        }
        else {
            this._server = http.createServer((req, res) => {
                this._app(req, res);
            });
        }
        this._app.setMaxListeners(0);
        this._app.set('host', this._config['HOST'] || '0.0.0.0');
        this._logger.info('Domain: ' + this._config['HOST']);
        this._app.set('port', this._config['PORT'] || 3000);
        this._logger.info('Server listening on port ' + this._config['PORT']);
    }
    _routes() {
        let router = new index_1.default();
        this._app.use('/api/v1', router.getV1Routes());
    }
}
exports.default = Server;
//# sourceMappingURL=index.js.map