import { useEffect, useState } from 'react';
import API from '../api/api'; // your configured axios instance
import { toast } from 'react-toastify';

export default function MyOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await API.get('/orders/my');
      setOrders(res.data.orders || []);
    } catch (error) {
      toast.error('Failed to fetch orders.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading your orders...</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No orders found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-yellow-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">🛒 Your Orders</h2>

        <div className="space-y-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-6 rounded shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <p className="font-semibold">Order ID: #{order.id}</p>
                <p className="text-gray-600">
                  {new Date(order.created_at).toLocaleString()}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    {item.image_url && (
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                    )}
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p>Qty: {item.quantity}</p>
                      <p>Price: Rs. {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-bold text-lg text-pink-700">
                Total: Rs. {order.total}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}