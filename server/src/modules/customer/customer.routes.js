import { Router } from 'express';

import { create, getUserInfo } from './customer.controller';
import { customerAuth } from './customer';

const routes = Router();

routes.post('/', create);
routes.get('/me', customerAuth, getUserInfo);

export default routes;
