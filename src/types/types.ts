// Type of User , user ka data post ke liye
export type User = {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  dob: string;
  _id: string;
};

// Type of Product ,product get krne ke liye
export type Product = {
  name: string;
  price: number;
  stock: number;
  category: string;
  photo: string;
  _id: string;
};

// Type of ShippingInfo
export type ShippingInfo = {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
  phoneNo: string;
};

// Type of CartItem
export type CartItem = {
  name: string;
  price: number;
  quantity: number;
  productId: string;
  photo: string;
  stock: number;
};

// Type of OrderItems
export type OrderItem = {
  name: string;
  price: number;
  quantity: number;
  productId: string;
  photo: string;
  _id: string;
}
// ----- OR , in second way of writing this --------
// export type OrderItem = Omit<CartItem, "stock"> & { _id: string };

// Type of Order
export type Order = {
  orderItems: OrderItem[];
  shippingInfo: ShippingInfo;
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  status: string;
  user: {
    name: string;
    _id: string;
  };
  _id: string;
};

// ------------- Dashboard non-api related types -------------------

// Type of Count And Change from Stats
type CountAndChange = {
  revenue: number;
  product: number;
  user: number;
  order: number;
};

// Type of Latest Transaction
type LatestTransaction = {
  _id: string;
  amount: number;
  discount: number;
  quantity: number;
  status: string;
};

// Type of Stats of dashboard
export type Stats = {
  categoryCount: Record<string, number>[];
  changePercent: CountAndChange;
  counts: CountAndChange;
  chart: {
    order: number[];
    revenue: number[];
  };
  userRatio: {
    male: number;
    female: number;
  };
  latestTransactions: LatestTransaction[];
};

type OrderFullfillment = {
  processing: number;
  shipped: number;
  delivered: number;
};

type RevenueDistribution = {
  netMargin: number;
  discount: number;
  productionCost: number;
  burnt: number;
  marketingCost: number;
};

type UsersAgeGroup = {
  teen: number;
  adult: number;
  old: number;
};

// Type of Pie Charts
export type Pie = {
  orderFullfillment: OrderFullfillment;
  productCategories: Record<string, number>[];
  stockAvailablity: {
    inStock: number;
    outOfStock: number;
  };
  revenueDistribution: RevenueDistribution;
  usersAgeGroup: UsersAgeGroup;
  adminCustomer: {
    admin: number;
    customer: number;
  };
};

// Type of Bar Charts
export type Bar = {
  users: number[];
  products: number[];
  orders: number[];
};

// Type of Line Charts
export type Line = {
  users: number[];
  products: number[];
  discount: number[];
  revenue: number[];
};