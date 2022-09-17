import { Router } from 'express';

const productRoutes = Router();

productRoutes.get('/products', (request, response) => {
  return response.json({ id: 1, productName: 'teclado' });
});

productRoutes.post('/products', (request, response) => {
  // codigo
});

export { productRoutes };
