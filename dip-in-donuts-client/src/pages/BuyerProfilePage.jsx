import { useState, useEffect } from 'react';
import axios from 'axios';

export default function BuyerProfilePage() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      try {
     const res = await axios.get('http://localhost:5050/api/profile', {
  headers: { Authorization: `Bearer ${token}` }
});
        console.log('Profile data from API:', res.data);  // DEBUG LOG
        setProfile(res.data);
        setForm({ name: res.data.name, email: res.data.email });
        setError('');
      } catch (err) {
        console.error('Failed to load profile', err);
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Not authenticated');
      return;
    }

    try {
      const res = await axios.put('/api/profile', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProfile(res.data.user || res.data);
      setEditMode(false);
      setError('');
    } catch (err) {
      console.error('Failed to update profile', err);
      setError('Failed to update profile');
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Not authenticated');
      return;
    }
    if (!window.confirm('Are you sure you want to delete your account?')) return;

    try {
      await axios.delete('/api/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      localStorage.clear();
      window.location.href = '/';
    } catch (err) {
      console.error('Failed to delete account', err);
      setError('Failed to delete account');
    }
  };

  if (loading) return <div className="p-4">Loading profile...</div>;

  if (error) return <div className="p-4 text-red-600">{error}</div>;

  if (!profile) return <div className="p-4">No profile data found.</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>

      {editMode ? (
        <>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 mb-3 border rounded"
            placeholder="Name"
          />
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-2 mb-3 border rounded"
            placeholder="Email"
          />
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="bg-pink-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={() => {
                setEditMode(false);
                setForm({ name: profile.name, email: profile.email });
                setError('');
              }}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Role:</strong> {profile.role}</p>
          <p><strong>Joined:</strong> {profile.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'}</p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => setEditMode(true)}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete Account
            </button>
          </div>
        </>
      )}
    </div>
  );
}