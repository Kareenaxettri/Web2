import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SellerOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5050/api/orders/seller/orders', {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log('Orders response:', res.data);
        setOrders(res.data); // data is an array of orders
      } catch (err) {
        console.error('Failed to fetch orders', err);
        setError('Failed to fetch orders');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map(order => (
          <div key={order.order_id} className="mb-6 border rounded p-4 shadow-sm">
            <h3 className="font-bold mb-1">Order #{order.order_id}</h3>
            <p className="text-sm text-gray-700 mb-2">Buyer: {order.buyer_name}</p>
            <p className="text-sm text-gray-700 mb-2">Total: Rs. {order.total}</p>
            <p className="text-sm text-gray-700 mb-2">
              Date: {new Date(order.created_at).toLocaleString()}
            </p>

            <table className="w-full text-sm mt-2 border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-2 py-1">Product</th>
                  <th className="border px-2 py-1">Quantity</th>
                  <th className="border px-2 py-1">Price (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, i) => (
                  <tr key={i}>
                    <td className="border px-2 py-1">{item.product_name}</td>
                    <td className="border px-2 py-1">{item.quantity}</td>
                    <td className="border px-2 py-1">Rs. {item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}