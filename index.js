import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import helmet from 'helmet'; 
import { home } from './controller/home.js';

const webserver = express();
dotenv.config();
webserver.use(express.json());
webserver.use(helmet());
webserver.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin'} ));
webserver.use(morgan("common"));
webserver.use(bodyParser.json({ limit: "50mb", extended: true }));
webserver.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
webserver.use(cors());

webserver.get('/', home);

const PORT = process.env.PORT || 3000;
webserver.listen(PORT, () => {
  console.log('Server started on port 3000');
});