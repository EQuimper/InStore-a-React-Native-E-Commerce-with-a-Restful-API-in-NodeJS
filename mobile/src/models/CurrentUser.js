import { types } from 'mobx-state-tree';

import { UserAddressModel } from './UserAddresses';

export const CurrentUserModel = types
  .model('CurrentUserModel', {
    _id: types.identifier,
    firstName: types.string,
    lastName: types.string,
    avatarUrl: types.maybe(types.string),
    addresses: types.optional(types.array(UserAddressModel), []),
  })
  .views(self => ({
    get addressesIsEmpty() {
      return self.addresses.length === 0;
    },
  }));
