export default function SellerDonutCard({ donut, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col hover:shadow-lg transition">
      {donut.image_url ? (
        <img
          src={donut.image_url}
          alt={donut.name}
          className="w-full aspect-square object-cover rounded-lg mb-4 border"
        />
      ) : (
        <div className="w-full aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}

      <h3 className="text-xl font-bold text-pink-700 mb-1">{donut.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{donut.description || 'No description.'}</p>
      <p className="text-lg font-semibold text-gray-800 mb-4">Rs. {donut.price}</p>

      <div className="mt-auto flex justify-between items-center">
        <button
          onClick={onEdit}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium transition"
        >
          ✏️ Edit
        </button>
        <button
          onClick={onDelete}
          className="text-sm text-red-600 hover:text-red-800 font-medium transition"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

