import { Router } from 'express';

import { create } from './customer.controller';

const routes = Router();

routes.post('/', create);

export default routes;
