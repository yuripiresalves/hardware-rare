import express from 'express';
import { customoerRoutes } from './customerRoutes';
import { productRoutes } from './productRoutes';

export const routes = express.Router();
routes.use(customoerRoutes);
routes.use(productRoutes);
