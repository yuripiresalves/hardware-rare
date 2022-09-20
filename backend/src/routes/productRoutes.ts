import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const productRoutes = Router();

const prisma = new PrismaClient({
  log: ['query'],
});

productRoutes.get('/products', async (request, response) => {
  const products = await prisma.product.findMany();

  return response.json(products);
});

productRoutes.post('/products', async (request, response) => {
  const body = request.body;

  const product = await prisma.product.create({
    data: {
      categoryId: body.categoryId,
      imageUrl: body.imageUrl,
      title: body.title,
      price: body.price,
      description: body.description,
      quantity: body.quantity,
    },
  });

  return response.status(201).json(product);
});

export { productRoutes };
