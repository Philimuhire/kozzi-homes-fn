import React from 'react';

const products = [
  { id: 1, name: 'PlayStation 5', price: '3,013,008 Rwf', image: '/path-to-image.jpg', category: 'Mobile Phones' },
  // Add more products here
];

const PopularProducts = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 text-center">
            <img src={product.image} alt={product.name} className="mb-4" />
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.category}</p>
            <p className="font-bold text-green-500">{product.price}</p>
            <button className="bg-green-500 px-4 py-2 text-white mt-4 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
