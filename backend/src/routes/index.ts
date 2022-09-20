import express from 'express';
import { categoryRoutes } from './categoryRoutes';
import { customerRoutes } from './customerRoutes';
import { productRoutes } from './productRoutes';

export const routes = express.Router();
routes.use(customerRoutes);
routes.use(productRoutes);
routes.use(categoryRoutes);
