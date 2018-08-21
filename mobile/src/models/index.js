import { CurrentUser } from './CurrentUser';

const currentUser = CurrentUser.create();

export const store = {
  currentUser,
};

window.MobxStore = store;
