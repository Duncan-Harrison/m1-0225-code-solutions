interface Order {
  orderDate: string;
  totalCost: number;
  shipTo: string;
  deliverDate: string;
  title: string;
  creator?: string;
  returnByDate: string;
  price: number;
  title2?: string;
  creator2?: string;
  returnByDate2?: string;
  price2?: number;
}

const orderHistory: Order[] = [
  {
    orderDate: 'August 4, 2020',
    totalCost: 34.0,
    shipTo: 'JS Masher',
    deliverDate: 'Aug 8, 2020',
    title: 'Javascript for impatient programmers',
    creator: 'Rauschmayer, Dr. Axel',
    returnByDate: 'Sep 7, 2020',
    price: 31.55,
  },
  {
    orderDate: 'July 19, 2020',
    totalCost: 44.53,
    shipTo: 'JS Masher',
    deliverDate: 'Jul 20, 2020',
    title: 'The Timeless Way of Building',
    creator: 'Alexander, Christopher',
    returnByDate: 'Aug 19, 2020',
    price: 41.33,
  },
  {
    orderDate: 'July 4, 2020',
    totalCost: 17.22,
    shipTo: 'JS Masher',
    deliverDate: 'Jul 7, 2020',
    title:
      'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    returnByDate: 'Aug 5, 2020',
    price: 15.98,
  },
  {
    orderDate: 'July 3, 2020',
    totalCost: 138.93,
    shipTo: 'JS Masher',
    deliverDate: 'Jul 5, 2020',
    title: 'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
    returnByDate: 'Aug 4, 2020',
    price: 94.95,
    title2: 'The Art of Sql',
    creator2: 'Faroult, Stephane',
    returnByDate2: 'Aug 4, 2020',
    price2: 33.99,
  },
];
