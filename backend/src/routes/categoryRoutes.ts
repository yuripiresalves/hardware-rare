import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const categoryRoutes = Router();

const prisma = new PrismaClient({
  log: ['query'],
});

categoryRoutes.get('/categories', async (request, response) => {
  const categories = await prisma.category.findMany();

  return response.json(categories);
});

export { categoryRoutes };
