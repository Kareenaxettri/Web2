import { useState } from 'react';

export default function BuyerDonutCard({ donut, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = e => {
    const val = Number(e.target.value);
    if (val > 0) setQuantity(val);
  };

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition flex flex-col">
      {donut.image_url && (
        <img
          src={donut.image_url}
          alt={donut.name}
          className="w-full h-48 object-cover rounded mb-3"
        />
      )}
      <h3 className="text-xl font-bold text-pink-700">{donut.name}</h3>
      <p className="text-gray-600 text-sm flex-grow">{donut.description}</p>
      <p className="text-pink-800 font-semibold mt-1 mb-2">Rs. {donut.price}</p>

      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={`qty-${donut.id}`} className="font-semibold">Qty:</label>
        <input
          id={`qty-${donut.id}`}
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 p-1 border rounded text-center"
        />
      </div>

      <button
        onClick={() => onAddToCart(donut.id, quantity)}
        className="bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}