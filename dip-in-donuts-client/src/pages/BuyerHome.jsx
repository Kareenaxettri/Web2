import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Coffee, Heart, ShoppingCart, Package, Eye, Sparkles, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const navigationCards = [
  {
    path: '/buyer/donuts',
    icon: Eye,
    title: 'Explore All Donuts',
    description: 'Browse our delicious, freshly-made donuts and find your new favorite treat.',
    gradient: 'from-[#F8BFC2] to-[#3E5E43]',
    iconBg: 'bg-[#3E5E43]'
  },
  {
    path: '/buyer/orders',
    icon: Package,
    title: 'View My Orders',
    description: 'Track your current orders, view your order history, and manage your purchases.',
    gradient: 'from-[#3E5E43] to-[#6B4F3B]',
    iconBg: 'bg-[#F8BFC2]'
  },
  {
    path: '/buyer/cart',
    icon: ShoppingCart,
    title: 'View Cart',
    description: 'Check your shopping cart, make changes, and proceed to checkout.',
    gradient: 'from-[#6B4F3B] to-[#F8BFC2]',
    iconBg: 'bg-[#3E5E43]'
  },
];

const donutVarieties = [
  {
    name: "Classic Glazed",
    description: "A timeless classic with a perfect glaze coating.",
    imageUrl: "https://images.unsplash.com/photo-1685779923180-b78b6b8231b9?w=800&auto=format&fit=crop&q=60",
    price: "Rs. 120",
    popular: true
  },
  {
    name: "Chocolate Frosted",
    description: "Rich chocolate icing topped with colorful sprinkles.",
    imageUrl: "https://images.unsplash.com/photo-1693167064408-6a2738932da1?w=800&auto=format&fit=crop&q=60",
    price: "Rs. 150",
    popular: false
  },
  {
    name: "Strawberry Sprinkle",
    description: "Sweet strawberry glaze with vibrant sprinkles.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1679341705517-67f35920eec5?w=800&auto=format&fit=crop&q=60",
    price: "Rs. 180",
    popular: true
  },
  {
    name: "Boston Cream",
    description: "Custard-filled delight with chocolate topping.",
    imageUrl: "https://images.unsplash.com/photo-1613243556495-73691853bbf7?w=800&auto=format&fit=crop&q=60",
    price: "Rs. 200",
    popular: false
  },
];

const topSellingDonuts = [
  {
    id: 1,
    name: 'Classic Glazed',
    price: 'Rs. 100',
    originalPrice: 'Rs. 120',
    imageUrl: 'https://images.unsplash.com/photo-1685779923180-b78b6b8231b9?w=800&auto=format&fit=crop&q=60',
    rating: 4.8,
    reviews: 234,
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Chocolate Sprinkle',
    price: 'Rs. 130',
    originalPrice: 'Rs. 150',
    imageUrl: 'https://images.unsplash.com/photo-1693167064408-6a2738932da1?w=800&auto=format&fit=crop&q=60',
    rating: 4.9,
    reviews: 189,
    badge: 'Hot Deal'
  },
  {
    id: 3,
    name: 'Strawberry Sprinkle',
    price: 'Rs. 160',
    originalPrice: 'Rs. 180',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1679341705517-67f35920eec5?w=800&auto=format&fit=crop&q=60',
    rating: 4.7,
    reviews: 156,
    badge: 'Limited'
  },
  {
    id: 4,
    name: 'Boston Cream',
    price: 'Rs. 180',
    originalPrice: 'Rs. 200',
    imageUrl: 'https://images.unsplash.com/photo-1613243556495-73691853bbf7?w=800&auto=format&fit=crop&q=60',
    rating: 4.6,
    reviews: 98,
    badge: 'Premium'
  },
];

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Food Blogger",
    content: "These donuts are absolutely divine! The perfect balance of sweetness and texture. I come here every weekend for my sugar fix.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c446?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "James Wilson",
    role: "Coffee Shop Owner",
    content: "We've been serving these donuts for years. The quality is consistently amazing and our customers absolutely love them.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emma Thompson",
    role: "Event Planner",
    content: "Their custom donut orders for events are spectacular. Beautiful presentation and incredible taste every single time!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
];

export default function BuyerHome() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();


 

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  

  const handleAddToCart = (donut) => {
    alert(`Added ${donut.name} to cart!`);
  };

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF3E8] font-sans overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF3E8] via-[#FAFAFA] to-[#F8BFC2]/20"></div>
        <div 
          className="absolute top-0 left-0 w-96 h-96 bg-[#F8BFC2]/30 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x / 10}px, ${mousePosition.y / 10}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#3E5E43]/20 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(-${mousePosition.x / 15}px, -${mousePosition.y / 15}px)`,
            transition: 'transform 0.5s ease-out',
            animationDelay: '1s'
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className={`inline-flex items-center gap-3 mb-8 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}>
                <Coffee className="w-8 h-8 text-[#3E5E43] animate-bounce" />
                <span className="text-[#6B4F3B] font-semibold tracking-wide">FRESHLY BAKED DAILY</span>
                <Sparkles className="w-6 h-6 text-[#F8BFC2] animate-pulse" />
              </div>
              
              <h1 className={`text-6xl md:text-8xl font-black text-[#1F1F1F] mb-6 leading-tight opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                Donut
                <span className="text-[#F8BFC2]"> Dreams</span>
                <br />
                Come <span className="text-[#3E5E43]">True</span>
              </h1>
              
              <p className={`text-xl md:text-2xl text-[#6B4F3B] mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                Indulge in our handcrafted donuts, made with premium ingredients and endless love. 
                Every bite is a journey to sweetness paradise.
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-6 justify-center opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
                <button
                  onClick={() => navigate('/buyer/donuts')}
                  className="group relative overflow-hidden bg-gradient-to-r from-[#3E5E43] to-[#6B4F3B] text-white px-12 py-6 rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_20px_40px_rgba(62,94,67,0.3)] transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Explore Donuts
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6B4F3B] to-[#3E5E43] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button
                  onClick={() => navigate('/buyer/orders')}
                  className="group bg-white/80 backdrop-blur-sm text-[#3E5E43] px-12 py-6 rounded-full font-bold text-lg border-2 border-[#F8BFC2] hover:bg-[#F8BFC2]/20 hover:border-[#3E5E43] transform hover:scale-105 transition-all duration-300 shadow-lg"
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

        {/* Navigation Cards */}
        <section className="px-6 py-20 bg-gradient-to-r from-[#FAFAFA] to-[#FFF3E8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-[#1F1F1F] mb-6">Quick Access</h2>
              <p className="text-xl text-[#6B4F3B]">Everything you need, just one click away</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {navigationCards.map(({ path, icon: Icon, title, description, gradient, iconBg }, index) => (
                <div
                  key={path}
                  onClick={() => navigate(path)}
                  className={`group relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-3xl p-8 cursor-pointer transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 shadow-lg hover:shadow-2xl opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4 group-hover:text-[#3E5E43] transition-colors">{title}</h3>
                  <p className="text-[#6B4F3B] leading-relaxed">{description}</p>
                  
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#F8BFC2]/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-6 h-6 text-[#3E5E43]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donut Varieties */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-[#1F1F1F] mb-6">Our Signature Collection</h2>
              <p className="text-xl text-[#6B4F3B]">Crafted with passion, served with love</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {donutVarieties.map(({ name, description, imageUrl, price, popular }, index) => (
                <div
                  key={name}
                  className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                  onClick={() => navigate('/buyer/donuts')}
                >
                  {popular && (
                    <div className="absolute top-4 left-4 z-10 bg-[#3E5E43] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Crown className="w-4 h-4" />
                      Popular
                    </div>
                  )}
                  
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="w-6 h-6 text-[#F8BFC2]" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">{name}</h3>
                    <p className="text-[#6B4F3B] text-sm mb-4 leading-relaxed">{description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-[#3E5E43]">{price}</span>
                      <button className="bg-[#F8BFC2] text-[#3E5E43] px-4 py-2 rounded-full font-semibold hover:bg-[#3E5E43] hover:text-white transition-all duration-300">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Selling Donuts */}
        <section className="px-6 py-20 bg-gradient-to-r from-[#F8BFC2]/10 to-[#3E5E43]/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-[#1F1F1F] mb-6">Today's Bestsellers</h2>
              <p className="text-xl text-[#6B4F3B]">Limited quantities, unlimited flavor</p>
            </div>
            
            <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
              {topSellingDonuts.map(({ id, name, price, originalPrice, imageUrl, rating, reviews, badge }) => (
                <div
                  key={id}
                  className="group min-w-[320px] bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 flex-shrink-0"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-4 left-4 bg-[#3E5E43] text-white px-3 py-1 rounded-full text-sm font-bold">
                      {badge}
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#F8BFC2] fill-current" />
                      <span className="text-sm font-semibold text-[#1F1F1F]">{rating}</span>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">{name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-[#3E5E43]">{price}</span>
                      <span className="text-sm text-[#6B4F3B] line-through">{originalPrice}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#F8BFC2] fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-[#6B4F3B]">({reviews} reviews)</span>
                    </div>
                    <button
                      onClick={() => handleAddToCart({ name })}
                      className="w-full bg-gradient-to-r from-[#3E5E43] to-[#6B4F3B] text-white py-3 rounded-full font-bold hover:from-[#6B4F3B] hover:to-[#3E5E43] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="sweetstories" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-[#1F1F1F] mb-6">Sweet Stories</h2>
              <p className="text-xl text-[#6B4F3B]">What our donut lovers say</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(({ name, role, content, rating, image }, index) => (
                <div
                  key={index}
                  className={`group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${2 + index * 0.2}s` }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#F8BFC2] fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-[#6B4F3B] italic mb-6 leading-relaxed text-lg">"{content}"</p>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={image}
                      alt={name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-[#F8BFC2]/30 group-hover:ring-[#3E5E43]/30 transition-all duration-300"
                    />
                    <div>
                      <h4 className="font-bold text-[#1F1F1F] text-lg">{name}</h4>
                      <p className="text-[#6B4F3B]">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}