import { useEffect, useState } from 'react';
import API from '../api/api';
import BuyerDonutCard from '../components/BuyerDonutCard';

export default function BuyerDonutPage() {
  const [donuts, setDonuts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  const fetchDonuts = async () => {
    try {
      const res = await API.get('/products');
      setDonuts(res.data.products || []);
    } catch (err) {
      console.error('❌ Failed to load donuts:', err);
      setError('Failed to load donuts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonuts();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    setError('');
    setMessage('');

    try {
      await API.post(
        '/cart',
        { product_id: productId, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(`Added ${quantity} item(s) to cart!`);
    } catch (err) {
      console.error('❌ Add to cart failed:', err);
      setError('Failed to add to cart.');
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          🍩 Browse All Donuts
        </h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {message && <p className="text-green-600 text-center mb-4">{message}</p>}

        {loading ? (
          <p className="text-center text-gray-600">Loading donuts...</p>
        ) : donuts.length === 0 ? (
          <p className="text-center text-gray-500">No donuts available.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {donuts.map(donut => (
              <BuyerDonutCard
                key={donut.id}
                donut={donut}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}