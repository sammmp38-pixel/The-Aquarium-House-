import React, { useState } from 'react';
import { Search, Star, ShoppingCart, User, X, Mail, Lock, Shield, UserCircle, Fish, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { showToast } from './Toast';

const ASSETS = {
  avatar: "https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128",
};

export default function Header() {
  const [activeModal, setActiveModal] = useState<'cart' | 'favorites' | 'profile' | 'search' | 'menu' | null>(null);
  const [authMode, setAuthMode] = useState<'customer' | 'owner'>('customer');

  const closeModal = () => setActiveModal(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
    showToast("Searching for products...");
  };

  return (
    <>
      <header className="flex items-center justify-between px-6 lg:px-12 py-4 shrink-0 relative z-30 animate-fade-in delay-100">
        <motion.div 
          className="flex items-center gap-2 cursor-pointer active:scale-95 group perspective-1000"
          whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-[#90D26D] to-[#1a3d1a] p-2 rounded-xl shadow-[0_4px_10px_rgba(26,61,26,0.3)]"
            animate={{ 
              rotateZ: [0, 5, -5, 0],
              y: [0, -3, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Fish className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-md" strokeWidth={2.5} />
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-xl"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <div className="flex flex-col leading-none ml-1">
            <motion.span 
              className="font-serif text-2xl md:text-3xl font-extrabold text-[#1a3d1a] tracking-tight drop-shadow-sm"
              style={{ textShadow: "1px 1px 0px rgba(0,0,0,0.1), 2px 2px 4px rgba(144,210,109,0.3)" }}
            >
              Aquarium
            </motion.span>
            <span className="text-[10px] md:text-xs font-bold text-[#90D26D] tracking-[0.2em] uppercase ml-[2px]">
              House
            </span>
          </div>
        </motion.div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="active:scale-95 text-gray-900 text-sm font-medium">Home</a>
          <a href="#about" className="active:scale-95 text-gray-600 text-sm font-medium hover:text-[#1a3d1a] transition-colors active:scale-95">About Us</a>
          <a href="#categories" className="active:scale-95 text-gray-600 text-sm font-medium hover:text-[#1a3d1a] transition-colors active:scale-95">Pet Categories</a>
          <a href="#services" className="active:scale-95 text-gray-600 text-sm font-medium hover:text-[#1a3d1a] transition-colors active:scale-95">Services</a>
          <a href="#contact" className="active:scale-95 text-gray-600 text-sm font-medium hover:text-[#1a3d1a] transition-colors active:scale-95">Contact</a>
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-3 lg:gap-4">
          <button 
            onClick={() => setActiveModal('search')}
            className="active:scale-95 flex w-10 h-10 rounded-full border border-gray-300 items-center justify-center hover:bg-white transition-colors active:scale-95 cursor-pointer active:scale-95"
          >
            <Search className="w-4 h-4 text-gray-700" />
          </button>
          
          <button 
            onClick={() => setActiveModal('favorites')}
            className="active:scale-95 relative hidden sm:flex w-10 h-10 rounded-full bg-[#E86A10] items-center justify-center hover:bg-[#d45e0d] transition-colors active:scale-95 cursor-pointer active:scale-95"
          >
            <Star className="w-4 h-4 text-white fill-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#E86A10] border-2 border-[#EFFDF0] text-white text-[10px] font-bold flex items-center justify-center">4</span>
          </button>
          
          <button 
            onClick={() => setActiveModal('cart')}
            className="active:scale-95 relative flex w-10 h-10 rounded-full border border-gray-300 items-center justify-center hover:bg-white transition-colors active:scale-95 cursor-pointer active:scale-95"
          >
            <ShoppingCart className="w-4 h-4 text-gray-700" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#E86A10] border-2 border-[#EFFDF0] text-white text-[10px] font-bold flex items-center justify-center">1</span>
          </button>
          
          <div 
            onClick={() => setActiveModal('profile')}
            className="hidden sm:block w-10 h-10 rounded-full overflow-hidden border-2 border-white cursor-pointer active:scale-95 hover:border-[#1a3d1a] transition-colors active:scale-95"
          >
            <img src={ASSETS.avatar} alt="User avatar" className="w-full h-full object-cover" />
          </div>

          <button 
            onClick={() => setActiveModal('menu')}
            className="active:scale-95 flex sm:hidden w-10 h-10 rounded-full border border-gray-300 items-center justify-center hover:bg-white transition-colors active:scale-95 cursor-pointer active:scale-95"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Modals */}
      <AnimatePresence>
        {activeModal === 'search' && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            <motion.form
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex items-center"
              onSubmit={handleSearch}
            >
              <div className="pl-6 text-gray-400">
                <Search className="w-6 h-6" />
              </div>
              <input 
                type="text" 
                placeholder="Search for pets, toys, aquariums..." 
                className="w-full px-4 py-6 text-lg outline-none font-medium text-gray-800 placeholder-gray-400"
                autoFocus
              />
              <div className="pr-6 flex gap-2">
                <button 
                  type="submit"
                  className="active:scale-95 bg-[#1a3d1a] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#2a5a2a] transition-colors active:scale-95"
                >
                  Search
                </button>
                <button 
                  type="button"
                  onClick={closeModal}
                  className="active:scale-95 p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors active:scale-95"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </motion.form>
          </div>
        )}

        {activeModal && activeModal !== 'search' && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b flex items-center justify-between bg-white">
                <h2 className="text-xl font-bold text-[#1a3d1a] flex items-center gap-2">
                  {activeModal === 'cart' && <><ShoppingCart className="w-5 h-5"/> Your Cart</>}
                  {activeModal === 'favorites' && <><Star className="w-5 h-5 text-[#E86A10] fill-[#E86A10]"/> Favorites</>}
                  {activeModal === 'profile' && <><User className="w-5 h-5"/> Account Login</>}
                  {activeModal === 'menu' && <><Menu className="w-5 h-5"/> Menu</>}
                </h2>
                <button onClick={closeModal} className="active:scale-95 p-2 hover:bg-gray-100 rounded-full transition-colors active:scale-95">
                  <X className="active:scale-95 w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 bg-white">
                {activeModal === 'menu' && (
                  <div className="flex flex-col gap-6">
                    <nav className="flex flex-col gap-4">
                      <a href="#" onClick={closeModal} className="active:scale-95 text-gray-900 text-lg font-bold border-b pb-2">Home</a>
                      <a href="#about" onClick={closeModal} className="active:scale-95 text-gray-600 text-lg font-medium hover:text-[#1a3d1a] transition-colors active:scale-95 border-b pb-2">About Us</a>
                      <a href="#categories" onClick={closeModal} className="active:scale-95 text-gray-600 text-lg font-medium hover:text-[#1a3d1a] transition-colors active:scale-95 border-b pb-2">Pet Categories</a>
                      <a href="#services" onClick={closeModal} className="active:scale-95 text-gray-600 text-lg font-medium hover:text-[#1a3d1a] transition-colors active:scale-95 border-b pb-2">Services</a>
                      <a href="#contact" onClick={closeModal} className="active:scale-95 text-gray-600 text-lg font-medium hover:text-[#1a3d1a] transition-colors active:scale-95 border-b pb-2">Contact</a>
                    </nav>
                    <div className="mt-8">
                      <button 
                        onClick={() => setActiveModal('profile')}
                        className="active:scale-95 w-full flex items-center justify-center gap-2 py-4 bg-[#1a3d1a] text-white rounded-xl font-bold"
                      >
                        <User className="w-5 h-5" /> Sign In
                      </button>
                    </div>
                  </div>
                )}

                {activeModal === 'cart' && (
                  <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                      <ShoppingCart className="w-10 h-10 text-gray-300" />
                    </div>
                    <p className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</p>
                    <p className="text-sm text-gray-500 mb-8 max-w-[250px]">Looks like you haven't added any pet essentials to your cart yet.</p>
                    <button onClick={closeModal} className="active:scale-95 w-full py-4 bg-[#1a3d1a] text-white rounded-xl font-bold hover:bg-[#2a5a2a] transition-colors active:scale-95">
                      Start Shopping
                    </button>
                  </div>
                )}

                {activeModal === 'favorites' && (
                  <div className="active:scale-95 flex flex-col items-center justify-center h-full text-center text-gray-500">
                    <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                      <Star className="w-10 h-10 text-[#E86A10] fill-[#E86A10]/20" />
                    </div>
                    <p className="text-xl font-bold text-gray-900 mb-2">No favorites yet</p>
                    <p className="text-sm text-gray-500 mb-8 max-w-[250px]">Save your favorite pets, accessories, and products here for quick access.</p>
                    <button onClick={closeModal} className="active:scale-95 w-full py-4 bg-[#E86A10] text-white rounded-xl font-bold hover:bg-[#d45e0d] transition-colors active:scale-95">
                      Explore Products
                    </button>
                  </div>
                )}

                {activeModal === 'profile' && (
                  <div className="active:scale-95 flex flex-col h-full">
                    <div className="flex p-1 bg-gray-100 rounded-xl mb-8">
                      <button 
                        onClick={() => setAuthMode('customer')}
                        className={`flex-1 py-2.5 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${authMode === 'customer' ? 'bg-white shadow-sm text-[#1a3d1a]' : 'text-gray-500 hover:text-gray-900'}`}
                      >
                        <UserCircle className="w-4 h-4" /> Customer
                      </button>
                      <button 
                        onClick={() => setAuthMode('owner')}
                        className={`flex-1 py-2.5 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${authMode === 'owner' ? 'bg-white shadow-sm text-[#1a3d1a]' : 'text-gray-500 hover:text-gray-900'}`}
                      >
                        <Shield className="w-4 h-4" /> Store Owner
                      </button>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="email" placeholder={`Enter ${authMode} email`} className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#90D26D] focus:ring-2 focus:ring-[#90D26D]/20 transition-all font-medium" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="password" placeholder="Enter password" className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#90D26D] focus:ring-2 focus:ring-[#90D26D]/20 transition-all font-medium" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <label className="flex items-center gap-2 cursor-pointer active:scale-95 group">
                          <div className="relative flex items-center justify-center w-5 h-5">
                            <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded cursor-pointer active:scale-95 checked:border-[#1a3d1a] checked:bg-[#1a3d1a] transition-all" />
                            <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none">
                              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors active:scale-95">Remember me</span>
                        </label>
                        <a href="#" className="active:scale-95 text-sm font-semibold text-[#1a3d1a] hover:text-[#90D26D] transition-colors active:scale-95">Forgot password?</a>
                      </div>
                    </div>

                    <div className="mt-auto pt-8 pb-4">
                      <button className="active:scale-95 w-full bg-[#1a3d1a] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#2a5a2a] transition-colors active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-[#1a3d1a]/20">
                        Sign In as {authMode === 'customer' ? 'Customer' : 'Owner'}
                      </button>
                      
                      <p className="active:scale-95 text-center mt-6 text-sm font-medium text-gray-500">
                        Don't have an account? <a href="#" className="active:scale-95 font-bold text-[#1a3d1a] hover:text-[#90D26D] transition-colors active:scale-95 ml-1">Sign up</a>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
