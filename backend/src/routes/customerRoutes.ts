import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const customerRoutes = Router();
const prisma = new PrismaClient({
  log: ['query'],
});

customerRoutes.get('/customers', async (request, response) => {
  const customers = await prisma.customer.findMany();

  return response.json(customers);
});

customerRoutes.post('/customers', async (request, response) => {
  const body = request.body;

  if (body.password !== body.confirmPassword) {
    return response.status(400).json({ message: 'Senhas não coincidem!' });
  }
  const password = await bcrypt.hash(body.password, 10);

  const customerData = await prisma.customer.create({
    data: {
      name: body.name,
      email: body.email,
      phone: body.phone,
      cpf: body.cpf,
      password,
    },
  });

  const customer = {
    name: customerData.name,
    email: customerData.email,
    phone: customerData.phone,
    cpf: customerData.cpf,
  };

  response.status(201).json(customer);
});

export { customerRoutes };
