type Geo = {
  lat: number;
  lng: number;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
}

export type UserFromAPI = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type UsersStore = {
  /* Store for count */
  userCount: number;
  setUserCount: (userCount: number) => void;
  /* Store for photos */
  users: UserFromAPI[] | [];
  isUsersLoading: boolean;
  usersErrorMessage: string;
  getUsers: (count: number) => void;
  resetUsers: () => void;
  getUserById: (users: UserFromAPI[], id: string) => UserFromAPI | undefined;
};

export type SetterCallback = (store: UsersStore) => UsersStore;

export type UsersStoreCreator = (set: Function) => UsersStore;
