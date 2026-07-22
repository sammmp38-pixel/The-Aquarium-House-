import { Search, Star, ShoppingCart, ArrowUpRight, Play, ArrowRight, Plus, MapPin, Phone, Clock, MessageCircle, CheckCircle2, PawPrint, Fish, Bird, Cat, Dog, Rabbit } from 'lucide-react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import AnimalGallery from './components/AnimalGallery';
import AquaticAndNutrition from './components/AquaticAndNutrition';
import JoyOfPlay from './components/JoyOfPlay';
import OnlineServices from './components/OnlineServices';
import FAQ from './components/FAQ';
import Toast from './components/Toast';

const ASSETS = {
  logo: "https://polo-pecan-73837341.figma.site/_assets/v11/0ae29d6d9628bede667f90d57bebe81b8f1ec2bf.svg",
  avatar: "https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128",
  product: "https://polo-pecan-73837341.figma.site/_assets/v11/3e5158dad63d392ade022e81890edc9f54d750bc.png",
  video: "https://polo-pecan-73837341.figma.site/_assets/v11/76be6ec3a93a703b15e9cc01e764a4e3f9d7d2c0.png",
  bottomLeft: "https://polo-pecan-73837341.figma.site/_assets/v11/8d44b25186ef45a5789c74668fb781cea4e1ff49.png",
  bottomCenter: "https://polo-pecan-73837341.figma.site/_assets/v11/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024",
  bottomRight: "https://polo-pecan-73837341.figma.site/_assets/v11/81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png"
};

const CATEGORIES = [
  {
    title: "Dogs",
    icon: Dog,
    desc: "Explore a variety of dogs and everything they need for a happy and healthy life.",
    items: ["Dog food & treats", "Dog accessories", "Dog beds and homes", "Collars and leashes", "Bowls and feeders", "Grooming essentials", "Toys and accessories"]
  },
  {
    title: "Cats & Persian Cats",
    icon: Cat,
    desc: "Find cats and Persian cats along with essential products for their comfort and health.",
    items: ["Cat & Persian food", "Cat treats", "Cat litter & beds", "Feeding bowls", "Toys & accessories", "Grooming products", "Daily care essentials"]
  },
  {
    title: "Exotic Birds",
    icon: Bird,
    desc: "Discover beautiful exotic birds and essential supplies for their care.",
    items: ["Bird food", "Bird cages", "Bird feeders", "Water containers", "Bird accessories", "Bird toys", "Daily bird essentials"]
  },
  {
    title: "Rabbits",
    icon: Rabbit,
    desc: "Everything you need to provide a comfortable and healthy environment for your rabbit.",
    items: ["Rabbit food", "Cages and homes", "Feeding accessories", "Water bottles", "Rabbit care products", "Toys and accessories"]
  },
  {
    title: "Guinea Pigs",
    icon: PawPrint,
    desc: "Quality essentials and supplies for guinea pig owners.",
    items: ["Guinea pig food", "Cages and habitats", "Feeding bowls", "Water bottles", "Bedding", "Care essentials & accessories"]
  },
  {
    title: "Aquarium & Exotic Fish",
    icon: Fish,
    desc: "Explore a beautiful collection of aquarium and exotic fish for your home or office aquarium.",
    items: ["Aquarium & Exotic fish", "Fish food", "Aquariums & fish tanks", "Aquarium accessories", "Decorations", "Water care products", "Maintenance essentials"]
  }
];

const FOOD_CATEGORIES = [
  "Dog Food", "Cat Food", "Persian Cat Food", "Fish Food", "Bird Food", "Rabbit Food", "Guinea Pig Food", "Pet Treats", "Animal Nutrition Products", "Daily Pet Food Essentials"
];

const BRANDS = ["Pedigree", "Drools", "Royal Canin", "Himalaya Pet Care"];

const ESSENTIALS = [
  "Pet Beds & Dog/Cat Houses", "Pet Carriers", "Collars, Leashes & Harnesses", "Feeding & Water Bowls", "Pet Toys", "Grooming & Hygiene Products", 
  "Bird Cages & Habitats", "Aquarium Tanks & Fish Bowls", "Aquarium Filters & Air Pumps", "Aquarium Lights & Decorations", "Water Conditioners & Cleaning", "Pet Travel Accessories"
];

const SERVICES = [
  { title: "Pet Products & Accessories", desc: "Get quality products and daily essentials for dogs, cats, Persian cats, birds, rabbits, guinea pigs, fish, and other pets." },
  { title: "Pet Food", desc: "A wide selection of pet food and nutrition products for different animals and pets." },
  { title: "Aquarium & Fish Products", desc: "Complete aquarium solutions including fish, aquariums, fish food, equipment, accessories, decorations, and water care products." },
  { title: "In-Store Shopping", desc: "Visit our store and explore our collection of pets, pet food, aquarium products, accessories, and animal care essentials." },
  { title: "Pet Product Delivery", desc: "Offer delivery of available pet food, accessories, aquarium products, and other pet essentials to customers in the service area." },
  { title: "In-Store Pickup", desc: "Customers can place an order and collect their selected products directly from the store." },
  { title: "Pet Care Essentials", desc: "Find everyday products and supplies designed to support the comfort, nutrition, hygiene, and well-being of your pets." },
  { title: "Aquarium Support", desc: "Help customers choose suitable aquarium fish, tanks, fish food, accessories, and basic aquarium care products." },
  { title: "Pet Parent Guidance", desc: "Provide helpful guidance to customers when selecting suitable food, accessories, and basic care products for their pets." }
];

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#EFFDF0] text-[#1a3d1a] font-sans">
      
      {/* HERO SECTION - Original intact but limited to 100svh */}
      <section className="h-[100svh] w-full flex flex-col relative overflow-hidden shrink-0">
        <Header />

        {/* Desktop & Tablet Main Section */}
        <div className="hidden md:flex flex-1 flex-col overflow-hidden relative">
          {/* Title */}
          <div className="absolute inset-x-0 top-0 z-0 flex flex-col items-center pt-[5.4rem] px-4 md:px-12 pointer-events-none">
            <h1 className="font-serif-display text-center leading-[0.95] tracking-tight text-7xl lg:text-[clamp(60px,7.5vw,110px)] text-[#1a3d1a]">
              <div>
                  <span className="inline-block animate-word-pop delay-200">Everything</span>
              </div>
              <div>
                  <span className="inline-block animate-word-pop delay-300">Your</span>
                  {' '}
                  <span className="inline-block animate-word-pop delay-400">Pet</span>
                  {' '}
                  <span className="inline-block animate-word-pop delay-500">Needs</span>
              </div>
            </h1>
          </div>

          {/* Left Product Card */}
          <div className="absolute top-[80px] lg:top-[50px] left-4 lg:left-12 z-20 w-[160px] lg:w-[clamp(160px,14vw,260px)] animate-slide-in-left delay-600">
            <div className="relative rounded-2xl overflow-hidden aspect-[260/257] bg-white group cursor-pointer active:scale-95 shadow-sm">
                <img src={ASSETS.product} className="w-full h-full object-cover" alt="Cat House" />
                <div className="absolute bottom-2 right-2 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#1a3d1a] text-white flex items-center justify-center group-hover:bg-[#2a5a2a] transition-colors active:scale-95">
                  <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
            </div>
            <div className="mt-3 flex justify-between items-center px-1">
                <span className="text-gray-700 text-xs lg:text-sm font-medium">Cat House</span>
            </div>
          </div>

          {/* Right Video Card */}
          <div className="absolute top-[80px] lg:top-[50px] right-4 lg:right-12 z-20 w-[120px] lg:w-[clamp(120px,10vw,177px)] animate-slide-in-right delay-600">
            <div className="relative rounded-2xl overflow-hidden aspect-[177/287] bg-white cursor-pointer active:scale-95 shadow-sm group">
                <img src={ASSETS.video} className="w-full h-full object-cover" alt="Video Review" />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#1a3d1a] text-white flex items-center justify-center group-hover:bg-[#2a5a2a] transition-colors active:scale-95">
                  <Play className="w-3 h-3 lg:w-4 lg:h-4 fill-white ml-0.5" />
                </div>
            </div>
            <p className="mt-2 text-center text-[10px] lg:text-xs text-gray-600 px-1 leading-tight">
                Watch Product Reviews on TikTok and YouTube
            </p>
          </div>

          {/* Bottom Images (Desktop & Tablet) */}
          <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-center pointer-events-none">
            {/* Left Image */}
            <div className="flex-1 relative overflow-hidden flex items-end pointer-events-auto">
                <img src={ASSETS.bottomLeft} alt="Dog" className="w-full h-auto block max-h-[60vh] lg:max-h-[min(70vh,55vw)] object-cover object-bottom animate-photo-reveal delay-600" />
                
                {/* Overlay Left */}
                <div className="absolute bottom-[clamp(20px,4vh,50px)] left-[clamp(20px,4vw,50px)] animate-fade-up delay-1000 z-20 bg-white/40 backdrop-blur-md border border-white/40 p-2 lg:p-3 rounded-2xl flex items-center gap-3 shadow-sm">
                  <div className="flex -space-x-2 lg:-space-x-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white overflow-hidden">
                        <img src={ASSETS.avatar} className="w-full h-full object-cover" alt="User" />
                      </div>
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-[#1a3d1a] flex items-center justify-center text-white z-10">
                        <Plus className="w-4 h-4" />
                      </div>
                  </div>
                  <div className="flex flex-col pr-2">
                      <span className="font-bold text-[#1a3d1a] text-sm lg:text-lg leading-none">98K+</span>
                      <span className="text-gray-700 text-[10px] lg:text-xs">Happy Pets</span>
                  </div>
                </div>
            </div>

            {/* Center Image */}
            <div className="flex-[1.265] relative overflow-hidden flex items-end pointer-events-auto">
                <img src={ASSETS.bottomCenter} alt="Dog in Center" className="w-full h-auto block max-h-[75vh] lg:max-h-[min(85vh,70vw)] object-cover object-bottom animate-photo-reveal delay-700 origin-bottom" />
                
                {/* Overlay Center */}
                <div className="absolute bottom-[clamp(20px,4vh,50px)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 lg:gap-5 animate-fade-up delay-1100 z-20 w-full max-w-[85%] text-center">
                    <h2 className="font-serif-display text-white text-2xl lg:text-[clamp(24px,3vw,42px)] leading-tight drop-shadow-md">
                      Best Products for Your Pet
                    </h2>
                    <a href="#categories" className="active:scale-95 flex items-center gap-2 bg-[#E86A10] hover:bg-[#d45e0d] text-white px-5 lg:px-8 py-3 lg:py-4 rounded-full font-medium transition-colors active:scale-95 shadow-lg cursor-pointer active:scale-95 group pointer-events-auto">
                      Explore Products
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors active:scale-95">
                          <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
                      </div>
                    </a>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative overflow-hidden flex items-end pointer-events-auto">
                <img src={ASSETS.bottomRight} alt="Cat" className="w-full h-auto block max-h-[60vh] lg:max-h-[min(70vh,55vw)] object-cover object-bottom animate-photo-reveal delay-800 origin-bottom" />

                {/* Overlay Right */}
                <div className="absolute bottom-[clamp(20px,4vh,50px)] right-[clamp(20px,4vw,50px)] animate-fade-up delay-1200 z-20 bg-white/80 backdrop-blur-md p-3 lg:p-4 rounded-2xl flex items-center gap-2 lg:gap-3 shadow-sm">
                  <span className="font-bold text-[#1a3d1a] text-xl lg:text-3xl leading-none">4.6</span>
                  <div className="flex flex-col">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => (
                            <Star key={i} className={`w-3 h-3 lg:w-4 lg:h-4 ${i===5 ? 'text-gray-300 fill-gray-300' : 'text-[#E86A10] fill-[#E86A10]'}`} />
                        ))}
                      </div>
                      <span className="text-gray-600 text-[10px] lg:text-xs font-medium mt-0.5">Reviews</span>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-1 flex-col overflow-hidden relative px-4 pt-2 z-20">
          {/* Top section */}
          <div className="flex flex-col items-center text-center animate-fade-up delay-200 shrink-0 z-30">
            <h1 className="font-serif-display text-[36px] text-[#1a3d1a] leading-tight">Everything<br/>Your Pet Needs</h1>
            <p className="text-gray-600 text-xs mt-2 max-w-[280px]">Your Trusted Home for Pets, Aquariums, Food & Pet Essentials</p>
            <a href="#categories" className="active:scale-95 mt-4 flex items-center gap-2 bg-[#E86A10] text-white px-5 py-2.5 rounded-full font-medium text-sm transition-colors active:scale-95 shadow-md cursor-pointer active:scale-95">
                Explore Products
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3 h-3" />
                </div>
            </a>
          </div>

          {/* Cards section */}
          <div className="flex justify-center gap-3 mt-6 animate-fade-up delay-400 z-30 shrink-0">
            <div className="w-[120px]">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-white shadow-sm cursor-pointer active:scale-95">
                  <img src={ASSETS.product} className="w-full h-full object-cover" alt="Cat House" />
                  <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-[#1a3d1a] text-white flex items-center justify-center">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="mt-1.5 flex justify-between items-center px-1">
                  <span className="text-gray-700 text-[10px] font-medium">Cat House</span>
                </div>
            </div>
            <div className="w-[90px]">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-white shadow-sm cursor-pointer active:scale-95">
                  <img src={ASSETS.video} className="w-full h-full object-cover" alt="Video Review" />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#1a3d1a] text-white flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                  </div>
                </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-4 mt-6 animate-fade-up delay-600 z-30 shrink-0 bg-white/60 backdrop-blur-md mx-auto px-4 py-2 rounded-2xl border border-white/50 shadow-sm">
            <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                      <img src={ASSETS.avatar} className="w-full h-full object-cover" alt="User" />
                    </div>
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-[#1a3d1a] text-white flex items-center justify-center overflow-hidden z-10">
                      <Plus className="w-3 h-3" />
                    </div>
                </div>
                <span className="font-bold text-[#1a3d1a] text-sm leading-none">98K+</span>
            </div>
            <div className="w-[1px] h-6 bg-gray-300"></div>
            <div className="flex items-center gap-1">
                <span className="font-bold text-[#1a3d1a] text-sm leading-none">4.6</span>
                <Star className="w-3.5 h-3.5 text-[#E86A10] fill-[#E86A10]" />
            </div>
          </div>

          {/* Bottom Images */}
          <div className="flex items-end absolute bottom-0 left-0 right-0 -mx-4 z-10 pointer-events-none">
            <div className="flex-1 flex items-end">
                <img src={ASSETS.bottomLeft} alt="Dog" className="w-full h-auto object-cover object-bottom animate-photo-reveal delay-700" />
            </div>
            <div className="flex-[1.265] flex items-end">
                <img src={ASSETS.bottomCenter} alt="Dog Center" className="w-full h-auto object-cover object-bottom animate-photo-reveal delay-800" />
            </div>
            <div className="flex-1 flex items-end">
                <img src={ASSETS.bottomRight} alt="Cat" className="w-full h-auto object-cover object-bottom animate-photo-reveal delay-900" />
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTIONS BEGIN HERE --- */}

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 md:py-28 px-6 lg:px-12 max-w-7xl mx-auto text-center relative z-20">
        <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl mb-6 text-[#1a3d1a]">About Aquarium House Pet Shop</h2>
        <div className="w-24 h-1 bg-[#E86A10] mx-auto mb-8 rounded-full"></div>
        <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-6">
          Welcome to <strong className="text-[#1a3d1a] font-medium">Aquarium House Pet Shop</strong>, your one-stop destination for pets, aquarium fish, pet food, animal essentials, and pet care products. We offer a wide variety of pets and supplies for pet lovers, including dogs, Persian cats, cats, exotic birds, rabbits, guinea pigs, aquarium fish, and more.
        </p>
        <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Whether you are bringing home your first pet or are an experienced pet parent, we provide a wide range of quality pet food, accessories, appliances, aquarium products, and daily essentials to help you take the best care of your beloved animals.
        </p>
      </section>

      {/* CATEGORIES SECTION */}
      <section id="categories" className="py-20 bg-white/50 border-y border-[#1a3d1a]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3d1a] mb-4">Our Pet Categories</h2>
            <p className="text-gray-600 text-lg">Everything you need for your furry, feathery, or scaly friends.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#1a3d1a]/5 flex flex-col h-full group">
                <div className="w-14 h-14 rounded-2xl bg-[#EFFDF0] text-[#1a3d1a] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#E86A10] group-hover:text-white transition-all duration-300">
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif-display text-2xl text-[#1a3d1a] mb-3 group-hover:text-[#E86A10] transition-colors active:scale-95 duration-300">{category.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{category.desc}</p>
                
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#E86A10] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANIMAL GALLERY SECTION */}
      <AnimalGallery />

      {/* JOY OF PLAY */}
      <JoyOfPlay />

      {/* AQUATIC & NUTRITION */}
      <AquaticAndNutrition />

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-white/50 border-y border-[#1a3d1a]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a3d1a] mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">Dedicated to making pet care easier and more comfortable.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-[#1a3d1a]/5 hover:border-[#1a3d1a]/20 transition-colors active:scale-95">
                <div className="w-10 h-10 rounded-full bg-[#EFFDF0] text-[#1a3d1a] flex items-center justify-center mb-4">
                  <Star className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1a3d1a] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONLINE BOOKING & ORDERS */}
      <OnlineServices />

      {/* WHY CHOOSE US & CTA */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <h2 className="font-serif-display text-4xl md:text-6xl text-[#1a3d1a] mb-6">Everything Your Pet Needs Is Here!</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          Looking for the right food, accessories, aquarium products, or essentials for your beloved pet? Visit Aquarium House Pet Shop and explore our wide range of products for pets and animals. We are your one-stop destination for pet lovers.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#categories" className="active:scale-95 px-8 py-4 bg-[#1a3d1a] hover:bg-[#2a5a2a] text-white rounded-full font-medium transition-colors active:scale-95 shadow-lg">
            View Pet Categories
          </a>
          <a href="#contact" className="active:scale-95 px-8 py-4 bg-[#E86A10] hover:bg-[#d45e0d] text-white rounded-full font-medium transition-colors active:scale-95 shadow-lg">
            Shop for Your Pet
          </a>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQ />

      {/* CONTACT & HOURS */}
      <section id="contact" className="py-20 bg-[#1a3d1a] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="font-serif-display text-4xl mb-8 text-white">Visit Our Store</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#E86A10]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Address</h4>
                  <p className="text-white/80">Radharani Para, Balangir<br/>Odisha – 767001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#E86A10]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                  <p className="text-white/80">097765 42595</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="tel:09776542595" className="active:scale-95 flex items-center gap-2 bg-[#E86A10] hover:bg-[#d45e0d] text-white px-6 py-3 rounded-full font-medium transition-colors active:scale-95">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href="https://wa.me/919776542595" target="_blank" rel="noopener noreferrer" className="active:scale-95 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-3 rounded-full font-medium transition-colors active:scale-95">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <a href="https://maps.google.com/maps?q=Radharani%20Para,%20Balangir,%20Odisha" target="_blank" rel="noopener noreferrer" className="active:scale-95 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-colors active:scale-95 border border-white/20">
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
            </div>

            {/* Google Map */}
            <div className="w-full h-[250px] rounded-[1.5rem] overflow-hidden border border-white/10">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                src="https://maps.google.com/maps?q=Radharani%20Para,%20Balangir,%20Odisha&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-[#E86A10]" />
              <h2 className="font-serif-display text-3xl text-white">Business Hours</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { day: "Monday", hours: "8:00 AM – 9:00 PM" },
                { day: "Tuesday", hours: "8:00 AM – 8:00 PM" },
                { day: "Wednesday", hours: "8:00 AM – 9:00 PM" },
                { day: "Thursday", hours: "8:00 AM – 9:00 PM" },
                { day: "Friday", hours: "8:00 AM – 9:00 PM" },
                { day: "Saturday", hours: "8:00 AM – 2:00 PM" },
                { day: "Sunday", hours: "9:00 AM – 9:00 PM" },
              ].map((time, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/90 font-medium">{time.day}</span>
                  <span className="text-white/70">{time.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#112611] text-center py-8 px-6 text-white/70">
        <p className="max-w-4xl mx-auto">
          <strong className="text-white font-medium">Aquarium House Pet Shop</strong> – Your trusted destination for pets, aquarium fish, pet food, animal accessories, and everything your beloved pets need.
        </p>
      </footer>

      {/* AI CHATBOT */}
      <Chatbot />
      
      {/* GLOBAL TOAST */}
      <Toast />
    </div>
  );
}
