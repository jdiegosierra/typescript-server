const defaultConfig: Object = {};

const environments = {
    "development": {
        "HOST": "0.0.0.0",
        "PORT": 3000,
        "HTTPS": false
    },
    "test": {
        "HOST": "0.0.0.0",
        "PORT": 3000,
        "HTTPS": true
    },
    "production": {
        "HOST": "0.0.0.0",
        "PORT": 3000,
        "HTTPS": true
    }
}

export const config = () => {
    return {...defaultConfig, ...environments['development'] };
};
