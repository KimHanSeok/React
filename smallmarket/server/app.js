import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { config } from './config.js';
import { sequelize } from './database/database.js'; // ORM
import userRouter from './router/userValidateRouter.js';
import itemRouter from './router/itemRouter.js';
import questionRouter from './router/questionRouter.js';

const app = express();
const corsOptions = {
    origin: config.host.client,
    // origin: "http://localhost:3000",
    credentials: true,
}

app.use(express.json()); // using json for http
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors(corsOptions));

// router
app.use('/user', userRouter);
app.use('/items', itemRouter);
app.use('/board', questionRouter);

app.use((error, request, response, next) => { // catch server error
    console.error(error);
    response.sendStatus(500);
});

// const server = app.listen(config.host.port);
sequelize.sync().then(() => {
    app.listen(config.host.port);
});