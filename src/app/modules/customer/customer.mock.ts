import { Customer } from './customer';

export const DUMMY_CUSTOMERS: Customer[] = [
  {
    id: '1',
    name: 'Jhonny Bambam',
    address: 'Avenida dos marombas',
    phone: '777777',
    cars: [
      {
        id: '12',
        model: 'uno sem escada',
        year: 1998,
        color: 'cinza'
      },
      {
        id: '11',
        model: 'uno com escada',
        year: 1998,
        color: 'cinza escuro'
      },
      {
        id: '11',
        model: 'uno com escada',
        year: 1998,
        color: 'cinza escuro'
      }
    ],
  },
  {
    id: '2',
    name: 'Tarcizio Bambam',
    address: 'Alameda dos marombas',
    phone: '777777',
    cars: [],
  },
  {
    id: '3',
    name: 'Alfredo Bambam',
    address: 'Travessa dos marombas',
    phone: '777777',
    cars: [],
  },
  {
    id: '4',
    name: 'Lucius Bambam',
    address: 'Cruzamento dos marombas',
    phone: '777777',
    cars: [],
  },
];

export const EMPTY_CUSTOMER: Customer = {
  id: '',
  name: '',
  address: '',
  phone: '',
  cars: [],
};
