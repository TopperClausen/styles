import { Express } from 'express';

export default (server: Express) => {
    server.use('/api/styles', require('./controllers/styles.controller'))
}
