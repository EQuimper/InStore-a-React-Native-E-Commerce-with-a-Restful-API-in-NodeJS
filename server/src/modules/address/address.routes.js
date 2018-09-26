import { Router } from 'express';

import {
  create,
  userAddresses,
  update,
  deleteAddress,
} from './address.controller';
import { customerAuth } from '../customer';

const routes = Router();

routes.post('/', customerAuth, create);
routes.get('/', customerAuth, userAddresses);
routes.put('/:id', customerAuth, update);
routes.delete('/:id', customerAuth, deleteAddress);

export default routes;
