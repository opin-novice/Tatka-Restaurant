import React, { useState, useEffect } from 'react';
import { fetchMenuItems } from '../api/menu';

const MenuDisplay = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['hot', 'cold', 'fastfood', 'thai-chinese', 'grilled', 'special'];
  
  useEffect(() => {
    const loadMenu = async () => {
      const items = await fetchMenuItems(activeCategory);
      setMenuItems(items);
    };
    loadMenu();
  }, [activeCategory]);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">টাটকা রেস্টুরেন্ট মেন্যু</h1>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center mb-6">
        <button 
          className={`px-4 py-2 m-1 rounded ${activeCategory === 'all' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveCategory('all')}
        >
          সব
        </button>
        {categories.map(category => (
          <button 
            key={category}
            className={`px-4 py-2 m-1 rounded ${activeCategory === category ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category === 'hot' && 'গরম'}
            {category === 'cold' && 'ঠান্ডা'}
            {category === 'fastfood' && 'ফাস্টফুড'}
            {category === 'thai-chinese' && 'থাই-চাইনিজ'}
            {category === 'grilled' && 'গ্রীলড'}
            {category === 'special' && 'টাটকা স্পেশাল'}
          </button>
        ))}
      </div>
      
      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map(item => (
          <div key={item._id} className="border rounded-lg p-4 hover:shadow-lg transition">
            {item.image && <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded mb-3" />}
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-red-500 font-bold mt-2">৳{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDisplay;