/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShoppingBag, Search, Heart, Menu, Truck, ShieldCheck, Sparkles, ArrowRight, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-pearl/90 backdrop-blur-md border-b border-cool-grey/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center">
          <button className="p-2 -ml-2 mr-2 md:hidden">
            <Menu className="w-6 h-6 text-midnight" />
          </button>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-medium hover:text-cool-grey transition-colors">New In</a>
            <a href="#" className="text-sm font-medium hover:text-cool-grey transition-colors">Earrings</a>
            <a href="#" className="text-sm font-medium hover:text-cool-grey transition-colors">Necklaces</a>
            <a href="#" className="text-sm font-medium hover:text-cool-grey transition-colors">Gifting</a>
          </div>
        </div>
        
        <div className="flex-shrink-0 flex items-center justify-center">
          <a href="#" className="font-serif text-3xl font-bold tracking-widest text-midnight">VENI</a>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="p-1 hover:text-cool-grey transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-1 hover:text-cool-grey transition-colors hidden md:block">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-1 hover:text-cool-grey transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-midnight text-pearl text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative bg-icy h-[80vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1599643478514-4a4e0f69a50f?q=80&w=2940&auto=format&fit=crop" 
        alt="Elegant woman wearing jewelry" 
        className="w-full h-full object-cover object-center opacity-80"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-pearl/80 to-transparent md:from-pearl/60"></div>
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl md:text-7xl font-serif text-midnight leading-tight mb-6">
          The Icy <br/><span className="italic font-light">Collection</span>
        </h1>
        <p className="text-lg text-midnight/80 mb-8 font-light max-w-md">
          Brilliance that speaks for itself. Discover jewelry designed for effortless everyday elegance.
        </p>
        <button className="bg-midnight text-pearl px-8 py-4 text-sm tracking-widest uppercase hover:bg-midnight/90 transition-colors flex items-center">
          Explore the Edit <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </motion.div>
    </div>
  </div>
);

const TrustBar = () => (
  <div className="bg-midnight text-pearl py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-pearl/20">
        <div className="flex items-center justify-center space-x-3 py-2 md:py-0">
          <Truck className="w-5 h-5 text-icy" />
          <span className="text-sm font-light tracking-wide">Free Express Shipping</span>
        </div>
        <div className="flex items-center justify-center space-x-3 py-2 md:py-0">
          <ShieldCheck className="w-5 h-5 text-icy" />
          <span className="text-sm font-light tracking-wide">Secure UPI & COD</span>
        </div>
        <div className="flex items-center justify-center space-x-3 py-2 md:py-0">
          <Sparkles className="w-5 h-5 text-icy" />
          <span className="text-sm font-light tracking-wide">6-Month Polish Guarantee</span>
        </div>
      </div>
    </div>
  </div>
);

const Categories = () => {
  const cats = [
    { name: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f66126e28?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Sets', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <section className="py-20 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-midnight mb-4">Shop by Category</h2>
          <div className="w-16 h-px bg-cool-grey mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {cats.map((cat, i) => (
            <a href="#" key={i} className="group flex flex-col items-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border border-cool-grey/20 p-1 transition-transform duration-300 group-hover:scale-105">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
              </div>
              <span className="text-sm uppercase tracking-widest text-midnight group-hover:text-cool-grey transition-colors">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewArrivals = () => {
  const products = [
    { name: 'The Icy Drop Pendant', price: '₹1,499', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop', badge: 'Just In' },
    { name: 'Midnight Pearl Studs', price: '₹999', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop', badge: 'Bestseller' },
    { name: 'Silver Cascade Choker', price: '₹2,499', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { name: 'Eternity Zirconia Ring', price: '₹1,299', img: 'https://images.unsplash.com/photo-1605100804763-247f66126e28?q=80&w=800&auto=format&fit=crop', badge: 'Low Stock' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-midnight mb-4">New Arrivals</h2>
            <div className="w-16 h-px bg-cool-grey"></div>
          </div>
          <a href="#" className="hidden md:flex items-center text-sm font-medium text-midnight hover:text-cool-grey transition-colors">
            View All <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-pearl mb-4">
                {p.badge && (
                  <div className="absolute top-3 left-3 z-10 bg-midnight text-pearl text-[10px] uppercase tracking-wider px-2 py-1 rounded-full">
                    {p.badge}
                  </div>
                )}
                <img src={p.img} alt={p.name} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                  <button className="bg-white/90 backdrop-blur text-midnight w-full py-3 text-sm font-medium hover:bg-midnight hover:text-white transition-colors shadow-sm">
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-medium text-midnight mb-1">{p.name}</h3>
                <p className="text-sm text-cool-grey">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <button className="border border-midnight text-midnight px-8 py-3 text-sm uppercase tracking-widest w-full">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

const OccasionEdit = () => (
  <section className="py-20 bg-pearl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[600px] group overflow-hidden cursor-pointer">
          <img src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1000&auto=format&fit=crop" alt="The Office Edit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
            <h3 className="text-4xl font-serif mb-4">The Office Edit</h3>
            <p className="text-sm font-light tracking-wide mb-6 max-w-xs">Minimalist pieces designed for the modern professional.</p>
            <span className="border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-icy transition-colors">Shop Daily Wear</span>
          </div>
        </div>
        <div className="relative h-[600px] group overflow-hidden cursor-pointer">
          <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" alt="The Evening Edit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
            <h3 className="text-4xl font-serif mb-4">The Evening Edit</h3>
            <p className="text-sm font-light tracking-wide mb-6 max-w-xs">Statement jewelry that catches the light and the room's attention.</p>
            <span className="border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-icy transition-colors">Shop Party Wear</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Gifting = () => (
  <section className="py-20 bg-lavender/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop" alt="Premium Gift Box" className="w-full h-auto rounded-sm shadow-sm" referrerPolicy="no-referrer" />
        </div>
        <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
          <h2 className="text-4xl font-serif text-midnight mb-6">The Art of Gifting</h2>
          <p className="text-lg text-midnight/80 font-light mb-8 leading-relaxed">
            Beautifully packaged in our signature midnight blue box with a silver ribbon. Ready to make her day, whether it's an anniversary, birthday, or just because.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-midnight text-pearl px-8 py-4 text-sm tracking-widest uppercase hover:bg-midnight/90 transition-colors">
              Gifts Under ₹999
            </button>
            <button className="border border-midnight text-midnight px-8 py-4 text-sm tracking-widest uppercase hover:bg-midnight/5 transition-colors">
              Premium Gifts
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-midnight text-pearl pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-serif text-3xl font-bold tracking-widest mb-6">VENI</h3>
          <p className="text-sm text-pearl/70 font-light leading-relaxed mb-6">
            Fine-jewelry craftsmanship, skin-friendly materials, and everyday elegance. Redefining accessible luxury for the modern Indian woman.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-pearl/70 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-pearl/70 font-light">
            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Earrings</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Necklaces</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Rings & Bracelets</a></li>
            <li><a href="#" className="hover:text-white transition-colors">The Bridal Edit</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Customer Care</h4>
          <ul className="space-y-4 text-sm text-pearl/70 font-light">
            <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Jewelry Care</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Join the Club</h4>
          <p className="text-sm text-pearl/70 font-light mb-4">Subscribe to receive 10% off your first order and exclusive access to new drops.</p>
          <form className="flex border-b border-pearl/30 pb-2">
            <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none text-sm w-full placeholder:text-pearl/50 text-white" />
            <button type="submit" className="text-sm uppercase tracking-widest hover:text-icy transition-colors">Join</button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-pearl/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-pearl/50 font-light">
        <p>&copy; 2026 VENI Jewelry. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-pearl font-sans text-midnight">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <NewArrivals />
        <OccasionEdit />
        <Gifting />
      </main>
      <Footer />
    </div>
  );
}
