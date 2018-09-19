import { Router } from 'express';

import { create, userAddresses } from './address.controller';
import { customerAuth } from '../customer';

const routes = Router();

routes.post('/', customerAuth, create);
routes.get('/', customerAuth, userAddresses);

export default routes;
