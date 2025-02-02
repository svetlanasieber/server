import express from 'express';
import config from './config/config.js';
import expressConfig from './config/express.js';
import mongooseConfig from './config/mongoose.js';
import routes from './router.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
expressConfig(app);
mongooseConfig(app);
app.use(routes);
app.use(errorHandler);

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}... http://localhost:5000/`));


