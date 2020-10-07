import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import { middleware } from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const server = express() // You can also use Express
  .use(compression({ threshold: 0 }), sirv('static', { dev }), middleware())
  .listen(Number.parseInt(PORT ?? '8000', 10));

server.on('error', (error) => {
  console.log('error', error);
});
