import { types, flow, getParent } from 'mobx-state-tree';
import get from 'lodash.get';

import { UserAddressModel } from './UserAddresses';
import { baseApi } from '../api/Api';

export const CurrentUserModel = types
  .model('CurrentUserModel', {
    _id: types.identifier,
    firstName: types.string,
    lastName: types.string,
    avatarUrl: types.maybe(types.string),
    addresses: types.optional(types.array(UserAddressModel), []),
  })
  .views(self => ({
    get auth() {
      return getParent(self);
    },
    get addressesIsEmpty() {
      return self.addresses.length === 0;
    },
  }))
  .actions(self => ({
    createAddress: flow(function*(data) {
      try {
        const res = yield baseApi
          .url('/addresses')
          .auth(`Bearer ${self.auth.authToken}`)
          .post({ data })
          .json();

        if (typeof res.address === 'object') {
          const address = UserAddressModel.create({
            ...res.address,
            geo: {
              lng: get(res.address, ['geo', 'coords', 0]),
              lat: get(res.address, ['geo', 'coords', 1]),
            },
          });

          self.addresses.push(address);
        }
      } catch (error) {
        throw error;
      }
    }),
  }));
