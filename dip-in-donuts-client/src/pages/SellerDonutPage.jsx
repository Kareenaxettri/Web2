import { useEffect, useState } from 'react';
import API from '../api/api';
import SellerDonutCard from '../components/SellerDonutCard';

export default function SellerDonutPage() {
  const [donuts, setDonuts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
  });

  const token = localStorage.getItem('token');

  const fetchSellerDonuts = async () => {
    try {
      const res = await API.get('/products/my-products', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDonuts(res.data.products || []);
    } catch (err) {
      console.error('❌ Fetch error:', err);
      setError('Failed to load donuts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSellerDonuts();
  }, []);

  const openForm = (donut = null) => {
    if (donut) {
      setForm({
        name: donut.name,
        description: donut.description,
        price: donut.price,
        image_url: donut.image_url || '',
      });
      setEditingId(donut.id);
    } else {
      setForm({ name: '', description: '', price: '', image_url: '' });
      setEditingId(null);
    }
    setFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this donut?')) return;
    try {
      await API.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchSellerDonuts();
    } catch (error) {
      alert('Failed to delete');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await API.put(`/products/${editingId}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await API.post('/products', form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setFormOpen(false);
      setEditingId(null);
      setForm({ name: '', description: '', price: '', image_url: '' });
      fetchSellerDonuts();
    } catch (err) {
      alert('Operation failed');
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-pink-700">🍩 Your Donuts</h2>
          <button
            onClick={() => openForm()}
            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
          >
            + Add Donut
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : donuts.length === 0 ? (
          <p className="text-center text-gray-500">No donuts found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {donuts.map((donut) => (
              <SellerDonutCard
                key={donut.id}
                donut={donut}
                onEdit={() => openForm(donut)}
                onDelete={() => handleDelete(donut.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Overlay Form */}
      {formOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded shadow p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={() => setFormOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4 text-pink-700">
              {editingId ? 'Edit Donut' : 'Add Donut'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                name="price"
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                name="description"
                type="text"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <input
                name="image_url"
                type="text"
                placeholder="Image URL"
                value={form.image_url}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
              >
                {editingId ? 'Update Donut' : 'Add Donut'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

