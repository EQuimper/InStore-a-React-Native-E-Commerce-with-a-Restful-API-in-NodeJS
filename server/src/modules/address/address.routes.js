import { Router } from 'express';

import { create } from './address.controller';
import { customerAuth } from '../customer';

const routes = Router();

routes.post('/', customerAuth, create);

export default routes;
