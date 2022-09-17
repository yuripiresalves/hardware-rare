import { Router } from 'express';

const customoerRoutes = Router();

customoerRoutes.get('/customers', (request, response) => {
  return response.json({ id: 1, customerName: 'yuri' });
});

customoerRoutes.post('/customers', (request, response) => {
  // codigo
});

export { customoerRoutes };
