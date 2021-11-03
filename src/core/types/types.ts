export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  website: string;
}

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string
}
