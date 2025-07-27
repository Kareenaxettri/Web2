import { useEffect, useState } from 'react';
import API from '../api/api';
import { toast } from 'react-toastify';

export default function BuyerCartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const token = localStorage.getItem('token');

  const fetchCartItems = async () => {
    try {
      const res = await API.get('/cart', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(res.data.cartItems || []);
    } catch (err) {
      console.error('❌ Failed to fetch cart:', err);
      toast.error('Failed to load cart');
    } finally {
      setLoading(false);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const handleCheckout = async () => {
    try {
      const res = await API.post('/orders/checkout', {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success('✅ Order placed!');
      toast.info(
        `🧾 Order #${res.data.order_id} • Total: Rs. ${res.data.total}`,
        { autoClose: 5000 }
      );
      setCartItems([]);
      setShowConfirmModal(false);
    } catch (err) {
      console.error('❌ Checkout error:', err);
      toast.error(err.response?.data?.message || 'Checkout failed');
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">🛒 Your Cart</h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading cart...</p>
        ) : cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-6">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-bold text-pink-700">{item.name}</h3>
                      <p className="text-gray-600 text-sm">
                        Rs. {item.price} × {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-800">
                    Rs. {parseFloat(item.price) * item.quantity}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center border-t pt-4">
              <h3 className="text-xl font-bold text-gray-800">Total: Rs. {total}</h3>
              <button
                onClick={() => setShowConfirmModal(true)}
                className="bg-pink-600 text-white px-5 py-2 rounded hover:bg-pink-700 transition"
              >
                ✅ Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-2xl font-bold text-center text-pink-700 mb-4">
              🧾 Confirm Your Order
            </h3>

            <ul className="text-sm mb-4 max-h-64 overflow-y-auto">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between py-1 border-b text-gray-800">
                  <span>{item.name} × {item.quantity}</span>
                  <span>Rs. {parseFloat(item.price) * item.quantity}</span>
                </li>
              ))}
            </ul>

            <p className="text-right font-bold text-lg text-gray-800 mb-4">
              Total: Rs. {total}
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCheckout}
                className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}