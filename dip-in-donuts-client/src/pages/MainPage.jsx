import React, { useState, useLayoutEffect } from 'react';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom'; // ✅ Single import here
import { toast } from 'react-toastify'; // ✅ Toast import

const MainPage = () => {
  const [selectedFilling, setSelectedFilling] = useState('DARK CHOCOLATE');
  const [selectedGlaze, setSelectedGlaze] = useState('CHOCOLATE');
  const [selectedToppings, setSelectedToppings] = useState('SPRINKLES');
  const [selectedSize, setSelectedSize] = useState('XS (10CM)');

  const location = useLocation();
    const navigate = useNavigate(); // ✅ Navigation hook
  const user = localStorage.getItem('user'); // ✅ Get user


useLayoutEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      // Delay to wait for DOM painting
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}, [location]);


  const featuredDonuts = [
    {
      name: 'CHOCOLATE BOOM',
      price: 'Rs.120',
      description: 'FILLED WITH DARK CHOCOLATE',
      image: 'https://media.istockphoto.com/id/1090119030/photo/close-up-of-homemade-deep-fried-doughnuts-covered-with-chocolate-and-sprinkles.webp?a=1&b=1&s=612x612&w=0&k=20&c=jSEh7KOyqyX2N72YLlKiW8AGcdfP2vPGdwdgVDySJow='
    },
    {
      name: 'BLUEBERRY',
      price: 'Rs.110',
      description: 'FILLED WITH BLUEBERRY JAM',
      image: 'https://media.istockphoto.com/id/505822952/photo/freshly-baked-baked-doughnuts-with-blueberries-and-lemon-glaze.webp?a=1&b=1&s=612x612&w=0&k=20&c=h16BQAd_bA2Ixk7qPYH32wPuzBEXeEvsB5dELhSvtrU='
    },
    {
      name: 'Rasberry Dounut',
      price: 'Rs.150',
      description: 'FILLED WITH RASPBERRY JAM',
      image: 'https://media.istockphoto.com/id/538533195/photo/jelly-donuts-with-jelly.webp?a=1&b=1&s=612x612&w=0&k=20&c=JIURWs-3eH7FHkYU0fzwXVO9SC92Yh6SS1AWOo4xpJI='
    }
  ];

  const combos = [
    {
      name: 'CHOCOLATE DONUTS',
      description: 'Sweet and soft chocolate donuts',
      price: 'Rs.199',
      image: 'https://i.pinimg.com/736x/60/90/0b/60900b8c879200f87f77840c115b3bc0.jpg'
    },
    {
      name: 'HOMER DONUTS',
      description: 'Fluffy, soft and full of pink frosting',
      price: 'Rs.499',
      image: 'https://i.pinimg.com/736x/2f/f4/5c/2ff45c08df87dfbacdd8c192add247a7.jpg'
    },
    {
      name: 'CARAMEL DONUTS',
      description: 'Delicious caramel glazed donuts',
      price: 'Rs.199',
      image: 'https://i.pinimg.com/736x/07/16/0b/07160b94e9f82d9ccbc4b7f4e07b72a5.jpg'
    }
  ];


  const reviews = [
    {
      name: 'YALE',
      rating: 5,
      text: 'These donuts are absolutely delicious! The texture is so mouth, perfectly spiced and not overly sweet. I love how they make them fresh every morning.',
      avatar: 'https://media.istockphoto.com/id/2192499195/photo/studio-portrait-of-happy-multiracial-mid-adult-man-wearing-brown-shirt-toothy-smile.jpg?s=612x612&w=0&k=20&c=QO9XdwXJdi9xyqsKWnamn41hPTOMFEHx3P9v4zDvbOk='
    },
    {
      name: 'KAYLA',
      rating: 5,
      text: 'Incredible donuts and amazing customer service! The Honey donut is not just cute - it\'s delicious! The pink glaze and sprinkles make it extra special, and the childhood memories.',
      avatar: 'https://media.istockphoto.com/id/2099403180/photo/laughing-yougn-businesswoman-standing-with-her-arms-crossed-against-an-office-wall.jpg?s=612x612&w=0&k=20&c=kn6TM5y-26ohkuoAU9FiWn4pYoyVPS7xfWLVyBGj_TA='
    },
    {
      name: 'WILLIAM',
      rating: 5,
      text: 'Best donuts in town! Fresh, flavorful, and they were great in-demand Everyone here eating where they went from. The donuts are so soft and tasty, highly recommend!',
      avatar: 'https://media.istockphoto.com/id/2167277232/photo/cheerful-man-using-technology-at-home-smiling-and-relaxing-on-the-couch.jpg?s=612x612&w=0&k=20&c=PGR0DBoGQlJR8Be4r_6V5OmSqF5BUGEnlKDRTkmL7Ow='
    }
  ];

  const handleProtectedAction = () => {
  if (!user) {
    toast.info('Please log in to continue.', {
      position: 'top-center',
      autoClose: 3000,
    });
    navigate('/login');
  } else {
    // Perform your protected action here (e.g., add to cart, redirect to order page, etc.)
    console.log('User is logged in. Continue with the action.');
  }
};


  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
  <section className="w-full bg-white">
      <div className="flex flex-col lg:flex-row w-full h-[650px]"> 
        {/* Left Side */}
        <div className="w-full lg:w-[60%] h-full bg-[#f8dfdf] flex flex-col items-start justify-center px-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
            Welcome to <span className="text-pink-500">Dip in Donuts</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-md">
            🍩 Crafted with love. Delivered fresh. Taste happiness in every bite.
          </p>
          <button
          onClick={handleProtectedAction} // ✅ Updated
          className="flex items-center gap-2 bg-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-500 transition">
            Order Now <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Side - Styled Donut Image */}
        <div className="w-full lg:w-[40%] h-full">
          <img
            src="https://images.unsplash.com/photo-1706616999454-91cbfd264e32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Donuts beautifully stacked"
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>


      {/* Try Them Today Section */}
     <section id="menu" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Heading + Burst Badge */}
    <div className="relative mb-12 flex items-start gap-6">
      <div className="text-green-500 font-extrabold text-4xl leading-tight">
        <div>TRY THEM</div>
        <div>TODAY!</div>
      </div>
      <div
      className="clip-burst mt-4 bg-yellow-400 text-black px-6 py-3 text-xs font-bold transform rotate-6 shadow-md"
    >
      FREE DELIVERY<br />FROM RS.2999
    </div>

    </div>

    {/* Donut Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredDonuts.map((donut, index) => (
        <div key={index} className="bg-pink-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-pink-200">
          <div className="w-32 h-32 mx-auto mb-4 bg-pink-100 rounded-full overflow-hidden">
            <img src={donut.image} alt={donut.name} className="w-full h-full object-cover" />
          </div>
          <h3 className="font-bold text-lg mb-2">{donut.name}</h3>
          <p className="text-pink-500 font-bold text-xl mb-2">{donut.price}</p>
          <p className="text-gray-600 text-sm mb-4">{donut.description}</p>
          <button              
           onClick={handleProtectedAction} // ✅ Updated

          className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition-colors">
            <ShoppingCart className="w-4 h-4 inline mr-2" />
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Create Your Special Taste Section */}
<section id="special-order" className="py-16 bg-pink-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold text-green-500 mb-8">CREATE YOUR SPECIAL TASTE!</h2>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <label className="w-20 text-sm font-semibold">SIZE</label>
            <select 
              className="flex-1 bg-white border border-pink-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option>XS (10CM)</option>
              <option>S (15CM)</option>
              <option>M (20CM)</option>
              <option>L (25CM)</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <label className="w-20 text-sm font-semibold">FILLING</label>
            <select 
              className="flex-1 bg-white border border-pink-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={selectedFilling}
              onChange={(e) => setSelectedFilling(e.target.value)}
            >
              <option>DARK CHOCOLATE</option>
              <option>MILK CHOCOLATE</option>
              <option>VANILLA</option>
              <option>STRAWBERRY</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <label className="w-20 text-sm font-semibold">GLAZE</label>
            <select 
              className="flex-1 bg-white border border-pink-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={selectedGlaze}
              onChange={(e) => setSelectedGlaze(e.target.value)}
            >
              <option>CHOCOLATE</option>
              <option>STRAWBERRY</option>
              <option>VANILLA</option>
              <option>CARAMEL</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <label className="w-20 text-sm font-semibold">TOPPINGS</label>
            <select 
              className="flex-1 bg-white border border-pink-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={selectedToppings}
              onChange={(e) => setSelectedToppings(e.target.value)}
            >
              <option>SPRINKLES</option>
              <option>CHOCOLATE CHIPS</option>
              <option>NUTS</option>
              <option>COCONUT</option>
            </select>
          </div>

          {/* Create Button below the selects */}
          <div className="pt-4">
            <button
              onClick={handleProtectedAction}
              className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              Create My Donut
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-pink-100 p-4 rounded-lg mb-4 border border-pink-200">
          <h3 className="font-bold text-pink-700 mb-2">IMPORTANT NOTE:</h3>
          <p className="text-sm text-gray-700">
            All donuts are freshly made with no preservatives. Order before 5 PM for same-day delivery in Kathmandu. Free delivery on orders over Rs.500. We require 2-3 hour notice. We accept orders, Khalti, and Cash on Delivery. Closed on public holidays.
          </p>
        </div>
        
        <div className="w-64 h-64 mx-auto bg-pink-100 rounded-full overflow-hidden border border-pink-200">
          <img 
            src="https://i.pinimg.com/736x/f7/2a/8c/f72a8c63e645894643d31c02e594e498.jpg" 
            alt="Custom donut preview" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Combo Set Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-500 mb-12">COMBO SET</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {combos.map((combo, index) => (
              <div key={index} className="bg-pink-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-pink-200">
                <div className="h-48 bg-pink-100 overflow-hidden">
                  <img src={combo.image} alt={combo.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{combo.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{combo.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-500 font-bold text-xl">{combo.price}</span>
                    <button 
                    onClick={handleProtectedAction} // ✅ Updated
                    className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition-colors">
                      <ShoppingCart className="w-4 h-4 inline mr-2" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
       <section className="py-16 bg-gradient-to-r from-pink-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">OUR MISSION</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our mission is to bring joy and sweetness to every bite by crafting delicious, high-quality donuts made with love and the freshest ingredients. We strive to create a warm, welcoming atmosphere where every customer feels special and leaves with a smile.
              </p>
              <button className="bg-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-500 transition-colors">
                MORE
              </button>
            </div>
            <div className="w-full h-96 bg-pink-100 rounded-lg overflow-hidden border border-pink-200">
              <img 
                src="https://i.pinimg.com/736x/b1/a2/14/b1a2147e1bda9d4bec51149b8738198e.jpg" 
                alt="Donut with caramel drizzle" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Customer Reviews Section */}
      <section  id="reviews" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">CUSTOMER REVIEWS</h2>
          <p className="text-center text-gray-600 mb-12">
            "Thousands of donuts served, countless smiles made. Here's what people are saying about their journey with us."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-pink-50 rounded-lg p-6 text-center border border-pink-200">
                <div className="w-20 h-20 mx-auto mb-4 bg-pink-100 rounded-full overflow-hidden">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-3">{review.name}</h3>
                <p className="text-gray-600 text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      
    </div>
  );
};

export default MainPage;
