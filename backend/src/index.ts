import * as express from 'express';
import * as cors from 'cors';
import createRoutes from './routes';
import { AppDataSource } from "./data-source"
import router from './routes';

const server = express();

server.use(cors({ origin: '*' }));
server.use(express.json());

server.listen(3000);

createRoutes(server);

module.exports = server;

AppDataSource.initialize().then(async () => {

}).catch(error => console.log(error))
