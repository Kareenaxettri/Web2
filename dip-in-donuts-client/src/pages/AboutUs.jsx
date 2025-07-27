import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#fff0f6] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#ff9ebb] rounded-full"></div>
        <div className="absolute bottom-40 right-16 w-16 h-16 bg-[#ff6b9d] rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-[#ff8cad] rounded-full"></div>
      </div>

      {/* Sprinkle pattern */}
      <div className="absolute inset-0 bg-repeat opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjEiIGZpbGw9IiNmZjY5YjQiLz48L3N2Zz4=")' }}></div>

      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden relative z-10">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Text content */}
          <div className="p-12 md:p-16">
            <div className="flex items-center mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#d23369] font-['Poppins']">
                About Dip in Donuts <span className="text-4xl">🍩</span>
              </h1>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Welcome to <span className="font-bold text-[#ff69b4]">Dip in Donuts</span>, your one-stop online shop for the most delicious, handcrafted donuts that will make your taste buds dance with joy!
            </p>

            <div className="flex items-start mb-6">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Buyer" className="w-12 h-12 mr-4" />
              <p className="text-gray-600 flex-1">
                Whether you're a <span className="font-semibold text-[#ff69b4]">buyer</span> looking to satisfy your sweet tooth or a <span className="font-semibold text-[#ff69b4]">seller</span> wanting to showcase your unique donut creations, we've built this platform just for you.
              </p>
            </div>

            <div className="flex items-start mb-8">
              <img src="https://cdn-icons-png.flaticon.com/128/6402/6402298.png" alt="Community" className="w-12 h-12 mr-4" />
              <p className="text-gray-600 flex-1">
                Our mission is to connect passionate donut artisans with donut lovers worldwide. From classic glazed to adventurous artisanal toppings, there's something magical here for everyone.
              </p>
            </div>

            <div className="bg-[#fff0f6] p-4 rounded-lg inline-flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/3578/3578464.png" alt="Nepal" className="w-8 h-8 mr-2" />
              <span className="text-sm font-medium text-[#ff69b4]">Made with ❤️ in Nepal</span>
              <img src="https://cdn-icons-png.flaticon.com/512/210/210545.png" alt="Heart" className="w-5 h-5 ml-2" />
            </div>
          </div>

          {/* Image collage */}
          <div className="relative bg-[#fff0f6] flex items-center justify-center p-8">
            <div className="relative w-full h-full max-w-md">
              <img 
                src="https://i.pinimg.com/736x/7e/56/c5/7e56c514a6b9bc6331ab92cda87e51b9.jpg" 
                alt="Colorful donuts" 
                className="w-full h-auto rounded-2xl shadow-lg z-10 relative"
              />
              <img 
                src="https://i.pinimg.com/736x/46/11/d9/4611d9776a540b524067fd608df3fec8.jpg" 
                alt="Donut"
                className="absolute -bottom-6 -left-6 w-40 h-40 rounded-xl border-4 border-white shadow-lg z-20"
              />
              <img 
                src="https://i.pinimg.com/736x/37/0d/1c/370d1c3412100a0bdb8d5e1f21157c0e.jpg" 
                alt="Donut box"
                className="absolute -top-6 -right-6 w-32 h-32 rounded-xl border-4 border-white shadow-lg z-20"
              />
              {/* Sparkle elements */}
              <div className="absolute top-8 right-8 text-3xl">✨</div>
              <div className="absolute bottom-12 left-12 text-2xl">⭐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}