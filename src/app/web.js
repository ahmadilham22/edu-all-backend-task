import express from 'express';
import { publicApi } from '../routers/public-api.js';
import cors from 'cors';

export const web = express();

web.use(express.json());
web.use(cors());

web.use(publicApi);
