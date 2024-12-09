import { Bar, CartItem, Line, Order, Pie, Product, ShippingInfo, Stats, User } from "./types";

// Custom Error Type
export type CustomError = {
  status: number;
  data: {
    message: string;
    success: boolean;
  };
};

// Message Response Type
export type MessageResponse = {
  success: boolean;
  message: string;
};

// -------------------------------- Users ki Chijen -------------------------

// All Users Response Type
export type AllUsersResponse = {
  success: boolean;
  users: User[];
};

// Single User Response Type
export type UserResponse = {
  success: boolean;
  user: User;
};

// Delete User Request type
export type DeleteUserRequest = {
  userId: string;
  adminUserId: string;
};

// ---------------------------- Products ki chijen ----------------------------

// All Products Response Type
export type AllProductsResponse = {
  success: boolean;
  products: Product[];
};

// Categories Response Type
export type CategoriesResponse = {
  success: boolean;
  categories: string[];
};

// Search Products Response Type
export type SearchProductsResponse = {
  success: boolean;
  products: Product[];
  totalPage: number;
};

// Get product details Response type
export type productResponse = {
  success: boolean;
  product: Product;
};

// Search Products Request Type according to queries
export type SearchProductsRequest = {
  price: number;
  page: number;
  category: string;
  search: string;
  sort: string;
};

// Add New Product Request type
export type NewProductRequest = {
  id: string;
  formData: FormData;
};

// Update Product Request type
export type UpdateProductRequest = {
  userId: string;
  productId: string;
  formData: FormData;
};

// Delete Product Request type
export type DeleteProductRequest = {
  userId: string;
  productId: string;
};

// --------------------------- Orders ki chijen ---------------------------

// All Orders Response Type
export type AllOrdersResponse = {
  success: boolean;
  orders: Order[];
};

// Order Details Response Type
export type OrderDetailsResponse = {
  success: boolean;
  order: Order;
};

// Place New Order Request type
export type NewOrderPlaceRequest = {
  shippingInfo: ShippingInfo;
  orderItems: CartItem[];
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  user: string;
};

// Update Order Request type
export type UpdateOrderRequest = {
  userId: string;
  orderId: string;
};

// Delete Order Request type
export type DeleteOrderRequest = {
  userId: string;
  orderId: string;
};

// --------------------------- Dashboard ki chijen -----------------------------------

// Stats Response Type
export type StatsResponse = {
  success: boolean;
  stats: Stats;
};

export type PieChartResponse = {
  success: boolean;
  charts: Pie;
};

export type BarChartResponse = {
  success: boolean;
  charts: Bar;
};

export type LineChartResponse = {
  success: boolean;
  charts: Line;
};


