

// Dependencies
import path from 'path';
import server from '@libs/server';
import getEnv from '@root/env';
import config from '../config';

server.init({
  env: getEnv(path),
  config,
})
.then(() => {
  console.log('Server started, DB running...');
})
.catch(err => {
  console.log(err);
});
