import { types } from 'mobx-state-tree';

export const UserAddressModel = types.model({
  id: types.identifier,
  street: types.string,
  aptNum: types.maybe(types.string),
  postalCode: types.string,
  city: types.string,
  province: types.string,
  instructions: types.maybe(types.string),
});
