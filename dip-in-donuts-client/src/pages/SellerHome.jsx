import { ShoppingCart, Package, TrendingUp, Users, Settings, HelpCircle, Eye, Edit3, Plus, Star, BarChart3, Filter, Search } from 'lucide-react';
import { ChevronRight, Crown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SellerHome() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  


 useEffect(() => {
    setIsLoaded(true);
  }, []);
 

  const topSellingDonuts = [
    {
      id: 1,
      name: 'Classic Glazed',
      price: 'Rs. 100',
      originalPrice: 'Rs. 120',
      imageUrl: 'https://images.unsplash.com/photo-1685779923180-b78b6b8231b9?w=800&auto=format&fit=crop&q=60',
      rating: 4.8,
      reviews: 234,
      badge: 'Best Seller',
      sold: 156,
      revenue: 'Rs. 15,600',
      growth: '+12%'
    },
    {
      id: 2,
      name: 'Chocolate Sprinkle',
      price: 'Rs. 130',
      originalPrice: 'Rs. 150',
      imageUrl: 'https://images.unsplash.com/photo-1693167064408-6a2738932da1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG91Z2hudXQlMjA0ayUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.9,
      reviews: 189,
      badge: 'Hot Deal',
      sold: 98,
      revenue: 'Rs. 12,740',
      growth: '+8%'
    },
    {
      id: 3,
      name: 'Strawberry Sprinkle',
      price: 'Rs. 160',
      originalPrice: 'Rs. 180',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1679341705517-67f35920eec5?w=800&auto=format&fit=crop&q=60',
      rating: 4.7,
      reviews: 156,
      badge: 'Limited',
      sold: 67,
      revenue: 'Rs. 10,720',
      growth: '+5%'
    },
    {
      id: 4,
      name: 'Boston Cream',
      price: 'Rs. 180',
      originalPrice: 'Rs. 200',
      imageUrl: 'https://images.unsplash.com/photo-1613243556495-73691853bbf7?w=800&auto=format&fit=crop&q=60',
      rating: 4.6,
      reviews: 98,
      badge: 'Premium',
      sold: 45,
      revenue: 'Rs. 8,100',
      growth: '+3%'
    },
  ];

  const recentOrders = [
    { id: 1001, donut: 'Classic Glazed (x3)', customer: 'Alice Johnson', date: '2025-07-03', status: 'Shipped', amount: 'Rs.360' },
    { id: 1002, donut: 'Chocolate Sprinkle (x2)', customer: 'Bob Smith', date: '2025-07-03', status: 'Pending', amount: 'Rs.300' },
    { id: 1003, donut: 'Strawberry Dream (x1)', customer: 'Carol Davis', date: '2025-07-02', status: 'Delivered', amount: 'Rs.180' },
    { id: 1004, donut: 'Blueberry Delight (x4)', customer: 'David Wilson', date: '2025-07-02', status: 'Processing', amount: 'Rs.440' },
    { id: 1005, donut: 'Mixed Box (x1)', customer: 'Emma Brown', date: '2025-07-01', status: 'Delivered', amount: 'Rs.599' },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-pink-50 min-h-screen">
      {/* Header Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-3 mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Crown className="w-8 h-8 text-[#4b9b57]" style={{ animation: 'bounce 2s infinite' }} />
              <span className="text-[#6B4F3B] font-semibold tracking-wide">ADMIN DASHBOARD</span>
              <Sparkles className="w-6 h-6 text-[#F8BFC2]" style={{ animation: 'pulse 2s infinite' }} />
            </div>

            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black text-pink-500 mb-6 leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Manage
              <span className="text-[#4db45c]"> Donuts</span>
              <br />
              Grow <span className="text-[#57b765]">Business</span>
            </h1>

            <p className={`text-lg md:text-xl lg:text-2xl text-[#6B4F3B] mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Monitor orders, update inventory, and keep your delicious creations selling. Your control center for success.
            </p>

            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button
                onClick={() => navigate('/seller/donuts')}
                className="group relative overflow-hidden bg-gradient-to-r from-[#c674ac] to-[#6B4F3B] text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_20px_40px_rgba(62,94,67,0.3)] transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Manage Products
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#eb72bf] to-[#a7386f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => console.log('Navigate to /seller/orders')}
                className="group bg-white/80 backdrop-blur-sm text-[#3E5E43] px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-lg border-2 border-[#F8BFC2] hover:bg-[#F8BFC2]/20 hover:border-[#3E5E43] transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span className="flex items-center justify-center gap-3">
                  View Orders
                  <Package className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Top Selling Products</h2>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-pink-400 p-2 rounded-lg hover:bg-pink-50">
                  <Filter className="w-5 h-5" />
                </button>
                <button className="text-gray-500 hover:text-pink-400 p-2 rounded-lg hover:bg-pink-50">
                  <BarChart3 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topSellingDonuts.map((donut) => (
                <div key={donut.id} className="bg-pink-50 rounded-lg p-4 hover:shadow-md transition-shadow border border-pink-100">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-200">
                    <img 
                      src={donut.imageUrl} 
                      alt={donut.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{donut.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{donut.rating}</span>
                    <span className="text-sm text-green-600 ml-auto font-medium">{donut.growth}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">Sold: {donut.sold} units</div>
                  <div className="text-lg font-bold text-pink-600">{donut.revenue}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Orders */}
      <section className="py-8 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Orders</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search orders..." 
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                  View All
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left font-semibold text-gray-900">Order ID</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-900">Product</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-900">Customer</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-900">Date</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-900">Amount</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-900">Status</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map(({ id, donut, customer, date, status, amount }) => (
                    <tr key={id} className="border-b border-gray-100 hover:bg-pink-25 transition-colors">
                      <td className="py-4 px-4 font-mono text-gray-900">#{id}</td>
                      <td className="py-4 px-4 font-medium text-gray-900">{donut}</td>
                      <td className="py-4 px-4 text-gray-700">{customer}</td>
                      <td className="py-4 px-4 text-gray-700">{date}</td>
                      <td className="py-4 px-4 font-semibold text-pink-600">{amount}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                          status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                          status === 'Delivered' ? 'bg-green-100 text-green-800' : ''
                        }`}>
                          {status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <button className="text-gray-500 hover:text-pink-600 p-1 rounded transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-500 hover:text-pink-600 p-1 rounded transition-colors">
                            <Edit3 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <button
                 onClick={() => navigate('/buyer/donuts')}
                className="bg-pink-600 text-white p-6 rounded-lg hover:bg-pink-700 transition-colors flex items-center space-x-4"
              >
                <Package className="w-8 h-8" />
                <div className="text-left">
                  <div className="font-semibold">Manage Products</div>
                  <div className="text-sm opacity-90">Add, edit, or remove products</div>
                </div>
              </button>
              <button
                onClick={() => alert('Feature coming soon!')}
                className="bg-pink-500 text-white p-6 rounded-lg hover:bg-pink-600 transition-colors flex items-center space-x-4"
              >
                <TrendingUp className="w-8 h-8" />
                <div className="text-left">
                  <div className="font-semibold">Sales Analytics</div>
                  <div className="text-sm opacity-90">View detailed reports</div>
                </div>
              </button>
              <button
                onClick={() => alert('Feature coming soon!')}
                className="bg-pink-500 text-white p-6 rounded-lg hover:bg-pink-600 transition-colors flex items-center space-x-4"
              >
                <Settings className="w-8 h-8" />
                <div className="text-left">
                  <div className="font-semibold">Settings</div>
                  <div className="text-sm opacity-90">Configure your store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}