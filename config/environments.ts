const defaultConfig: Object = {};

const environments = {
    "development": {
        "HOST": "0.0.0.0",
        "PORT": 3000,
    },
    "test": {
        "HOST": "0.0.0.0",
        "PORT": 3000,
    },
    "production": {
        "HOST": "0.0.0.0",
        "PORT": 3000,
    }
}

export const config = () => {
    return {...defaultConfig, ...environments['development'] };
};
