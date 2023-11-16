import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { home } from './controller/home.js';

const webserver = express();
dotenv.config();

webserver.get('/', home);


const PORT = process.env.PORT || 3000;
webserver.listen(PORT, () => {
  console.log('Server started on port 3000');
});