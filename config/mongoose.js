import mongoose from 'mongoose';
import config from './config.js';

export default (app) => {
    const uri = config.DB_CONNECTION;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connecton error:'));
    db.once('open', console.log.bind(console, 'Db Connected'));
};