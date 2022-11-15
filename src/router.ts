import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategories';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProducts';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(request, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(request, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// CATEGORIES
router.get('/categories', listCategories);

router.post('/categories', createCategory);

// PRODUCTS
router.get('/products', listProducts);

router.post('/products', upload.single('image'), createProduct);

router.get('/categories/:categoryId/products', listProductsByCategory);

// ORDERS
router.post('/orders', (request, response) => {
  response.send('Ok');
});

router.patch('/orders/:orderId', (request, response) => {
  response.send('Ok');
});

router.delete('/orders/:orderId', (request, response) => {
  response.send('Ok');
});
