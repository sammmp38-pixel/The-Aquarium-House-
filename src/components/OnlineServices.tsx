import React, { useState } from 'react';
import { Calendar, ShoppingBag, Truck, Stethoscope, Scissors, Home, Bone, Pill, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { showToast } from './Toast';

const BOOKING_SERVICES = [
  { title: "Vet Consultation", icon: Stethoscope, desc: "Book expert veterinary care for your beloved pet." },
  { title: "Pet Grooming", icon: Scissors, desc: "Professional grooming services to keep them looking fresh." },
  { title: "Pet Boarding", icon: Home, desc: "Safe and comfortable stay while you're away." },
  { title: "Training Sessions", icon: Calendar, desc: "Expert trainers to guide and discipline your pet." }
];

const ORDER_CATEGORIES = [
  { title: "Pet Food & Treats", icon: Bone, desc: "Nutritious and delicious food for all breeds." },
  { title: "Toys & Accessories", icon: ShoppingBag, desc: "Fun toys and stylish accessories." },
  { title: "Pharmacy", icon: Pill, desc: "Essential medicines and supplements." },
  { title: "Home Delivery", icon: Truck, desc: "Fast and secure delivery to your doorstep." }
];

export default function OnlineServices() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const openBookingModal = (serviceTitle: string = '') => {
    setSelectedService(serviceTitle);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedService('');
  };

  return (
    <>
      <section id="online-services" className="py-20 px-6 lg:px-12 bg-white w-full">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1a3d1a] mb-6 font-serif">
              Online Booking & Orders
            </h2>
            <p className="text-base md:text-lg text-[#2d5a2d]/80 font-medium">
              Conveniently book services or order essentials from the comfort of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Online Booking */}
            <div className="bg-[#EFFDF0] rounded-3xl p-8 md:p-12 border border-[#90D26D]/30 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#90D26D]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#1a3d1a]">
                  <Calendar className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3d1a]">Book an Appointment</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {BOOKING_SERVICES.map((service, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => openBookingModal(service.title)}
                    className="bg-white p-5 rounded-2xl hover:shadow-md transition-shadow cursor-pointer active:scale-95 group/card border border-transparent hover:border-[#90D26D]/40"
                  >
                    <service.icon className="w-8 h-8 text-[#90D26D] mb-3 group-hover/card:scale-110 transition-transform" />
                    <h4 className="font-bold text-[#1a3d1a] mb-1">{service.title}</h4>
                    <p className="text-sm text-[#2d5a2d]/70 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => openBookingModal()}
                className="active:scale-95 mt-8 w-full bg-[#1a3d1a] hover:bg-[#2d5a2d] text-white py-4 rounded-xl font-bold transition-colors active:scale-95 flex items-center justify-center gap-2 group/btn relative z-10"
              >
                Book Now
                <Calendar className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
              </button>
            </div>

            {/* Online Order */}
            <div className="bg-[#FDF9F1] rounded-3xl p-8 md:p-12 border border-[#E8A540]/20 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8A540]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#E8A540]">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a3d1a]">Order Essentials</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {ORDER_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl hover:shadow-md transition-shadow cursor-pointer active:scale-95 group/card border border-transparent hover:border-[#E8A540]/40">
                    <cat.icon className="w-8 h-8 text-[#E8A540] mb-3 group-hover/card:scale-110 transition-transform" />
                    <h4 className="font-bold text-[#1a3d1a] mb-1">{cat.title}</h4>
                    <p className="text-sm text-[#2d5a2d]/70 leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => showToast("Opening shop...", "info")}
                className="active:scale-95 mt-8 w-full bg-[#E8A540] hover:bg-[#d69532] text-white py-4 rounded-xl font-bold transition-colors active:scale-95 flex items-center justify-center gap-2 group/btn relative z-10"
              >
                Start Shopping
                <ShoppingBag className="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBookingModal}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between bg-[#EFFDF0]/50">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif-display text-[#1a3d1a] mb-1">
                    Book an Appointment
                  </h2>
                  <p className="text-sm text-gray-600">Fill in the details below to schedule your visit.</p>
                </div>
                <button 
                  onClick={closeBookingModal} 
                  className="active:scale-95 p-2 hover:bg-white rounded-full transition-colors active:scale-95 self-start border border-transparent hover:border-gray-200"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto">
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); closeBookingModal(); showToast('Appointment requested successfully!'); }}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Pet Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Enter pet's name" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#90D26D] focus:ring-2 focus:ring-[#90D26D]/20 transition-all bg-gray-50 focus:bg-white" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label>
                      <select 
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#90D26D] focus:ring-2 focus:ring-[#90D26D]/20 transition-all bg-gray-50 focus:bg-white appearance-none"
                        defaultValue={selectedService}
                      >
                        <option value="" disabled>Select a service</option>
                        {BOOKING_SERVICES.map((s, i) => (
                          <option key={i} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                      <input 
                        type="date" 
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#90D26D] focus:ring-2 focus:ring-[#90D26D]/20 transition-all bg-gray-50 focus:bg-white" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
                      <input 
                        type="time" 
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#90D26D] focus:ring-2 focus:ring-[#90D26D]/20 transition-all bg-gray-50 focus:bg-white" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Owner's Contact Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="Enter phone number" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#90D26D] focus:ring-2 focus:ring-[#90D26D]/20 transition-all bg-gray-50 focus:bg-white" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes (Optional)</label>
                    <textarea 
                      rows={3}
                      placeholder="Any special instructions or concerns..." 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#90D26D] focus:ring-2 focus:ring-[#90D26D]/20 transition-all bg-gray-50 focus:bg-white resize-none" 
                    ></textarea>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                    <button 
                      type="button"
                      onClick={closeBookingModal}
                      className="active:scale-95 px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors active:scale-95"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="active:scale-95 px-8 py-3 bg-[#1a3d1a] hover:bg-[#2d5a2d] text-white rounded-xl font-bold transition-colors active:scale-95 shadow-lg shadow-[#1a3d1a]/20"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
