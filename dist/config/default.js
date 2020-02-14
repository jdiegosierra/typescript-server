"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultConfig = {
    'title': 'TypeScript Server'
};
const server = {
    "development": {
        "HOST": "0.0.0.0",
        "PORT": 3000,
        "HTTPS": false
    },
    "test": {
        "HOST": "0.0.0.0",
        "PORT": 3001,
        "HTTPS": true
    },
    "production": {
        "HOST": "0.0.0.0",
        "PORT": 3002,
        "HTTPS": true
    }
};
exports.default = Object.assign(Object.assign({}, defaultConfig), {
    server: server[process.env.NODE_ENV || 'development']
});
//# sourceMappingURL=default.js.map