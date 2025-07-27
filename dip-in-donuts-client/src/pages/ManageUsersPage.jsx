import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  // Fetch all users and filter buyers only
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:5050/api/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Filter users with role buyer only
      const buyersOnly = res.data.filter(user => user.role === 'buyer');
      setUsers(buyersOnly);
    } catch (err) {
      toast.error('Failed to fetch users');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Start editing a user
  const startEdit = (user) => {
    setEditingUserId(user.id);
    setFormData({ name: user.name, email: user.email, role: user.role });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingUserId(null);
    setFormData({ name: '', email: '', role: '' });
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fd) => ({ ...fd, [name]: value }));
  };

  // Submit edit form
  const submitEdit = async () => {
    try {
      await axios.put(
        `http://localhost:5050/api/users/${editingUserId}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success('User updated');
      setEditingUserId(null);
      fetchUsers();
    } catch (err) {
      toast.error('Failed to update user');
      console.error(err);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      await axios.delete(`http://localhost:5050/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('User deleted');
      fetchUsers();
    } catch (err) {
      toast.error('Failed to delete user');
      console.error(err);
    }
  };

  if (loading) return <p className="p-6 text-center">Loading users...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-6">Manage Users</h2>

      {users.length === 0 ? (
        <p>No buyers found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-3 py-2">Name</th>
              <th className="border border-gray-300 px-3 py-2">Email</th>
              <th className="border border-gray-300 px-3 py-2">Role</th>
              <th className="border border-gray-300 px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border border-gray-300 px-3 py-2">
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  {editingUserId === user.id ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  {editingUserId === user.id ? (
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full"
                    >
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                    </select>
                  ) : (
                    user.role
                  )}
                </td>
                <td className="border border-gray-300 px-3 py-2 space-x-2">
                  {editingUserId === user.id ? (
                    <>
                      <button
                        onClick={submitEdit}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEdit(user)}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}