type Adress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: number;
  lng: number;
};

export type User = {
  filter: string;
  id: number;
  name: string;
  username: string;
  email: string;
  address: Adress;
};
