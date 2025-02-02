import {
    MONGO_USER,
    MONGO_PASS,
    SALT_ROUNDS_DEV,
    SALT_ROUNDS_PROD,
    SECRET_DEV,
    SECRET_PROD,
    COOKIE_NAME_DEV,
    COOKIE_NAME_PROD,
    PROJECT_NAME
} from './constants.js';

const config = {
    development: {
        PORT: process.env.PORT || 5000,
        DB_CONNECTION: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@shtekatacluster.0dh5a.mongodb.net/${PROJECT_NAME}?retryWrites=true&w=majority`,
        SALT_ROUNDS: SALT_ROUNDS_DEV,
        SECRET: SECRET_DEV,
        COOKIE_NAME: COOKIE_NAME_DEV,
    },
    production: {
        PORT: process.env.PORT || 80,
        DB_CONNECTION: `mongodb://localhost:27017/${PROJECT_NAME}`,
        SALT_ROUNDS: SALT_ROUNDS_PROD,
        SECRET: SECRET_PROD,
        COOKIE_NAME: COOKIE_NAME_PROD,
    }
};

console.log(`Environtment: ${process.env.NODE_ENV}`);
export default config[process.env.NODE_ENV?.trim()||'development'];