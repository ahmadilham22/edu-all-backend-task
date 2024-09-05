import express from 'express';
import productController from '../controllers/product-controller.js';

const publicApi = express.Router();

publicApi.get('/api/product', productController.get);

export { publicApi };
