import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

type OrderDetailsType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: string;
  items: { name: string; price: number; quantity: number }[];
};

const OrderDetails: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<OrderDetailsType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating an API call
    const fetchOrderDetails = async () => {
      setLoading(true);
      try {
        // Replace this mock data with your API call
        const mockData: OrderDetailsType = {
          _id: orderId || "N/A",
          amount: 10000,
          quantity: 25,
          discount: 1020,
          status: "Processing",
          items: [
            { name: "Mobile Phone", price: 15000, quantity: 1 },
            { name: "Headphones", price: 3000, quantity: 2 },
          ],
        };
        setOrder(mockData);
      } catch (error) {
        console.error("Error fetching order details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return <div>Loading order details...</div>;
  }

  if (!order) {
    return <div>Order not found!</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Order Details</h1>
      <p><strong>Order ID:</strong> {order._id}</p>
      <p><strong>Amount:</strong> ₹{order.amount}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>
      <p><strong>Discount:</strong> ₹{order.discount}</p>
      <p><strong>Status:</strong> {order.status}</p>

      <h2>Items</h2>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>
            <p><strong>Product:</strong> {item.name}</p>
            <p><strong>Price:</strong> ₹{item.price}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
          </li>
        ))}
      </ul>

      <Link to="/orders" style={{ textDecoration: "none", color: "blue" }}>
        Back to Orders
      </Link>
    </div>
  );
};

export default OrderDetails;
