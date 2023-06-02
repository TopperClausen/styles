import express from 'express';
import cors from 'cors';
import router from './routes';

const server = express();

server.use(cors({ origin: '*' }));
server.use(express.json());

server.use('/API', router);

server.listen(3000);

module.exports = server;
