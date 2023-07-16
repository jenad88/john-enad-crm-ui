export type IContact_Account = {
  id: number;
  name: string;
};

export type IContact_Owner = {
  firstName: string;
  lastName: string;
};

export type IContact = {
  id: number;
  name: string;
  account: IContact_Account;
  title: string;
  phone: string;
  email: string;
  owner: IContact_Owner;
};
