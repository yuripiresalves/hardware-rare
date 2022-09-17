import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const customoerRoutes = Router();
const prisma = new PrismaClient({
  log: ['query'],
});

customoerRoutes.get('/customers', async (request, response) => {
  const customers = await prisma.customer.findMany();

  return response.json(customers);
});

customoerRoutes.post('/customers', (request, response) => {
  // codigo
});

export { customoerRoutes };
