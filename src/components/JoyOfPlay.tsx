import React from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { showToast } from './Toast';

export default function JoyOfPlay() {
  const handleAddToCart = () => showToast("Added to Cart!");
  const handleViewDetails = () => showToast("Viewing Details...", "info");

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#fafaf4]" id="joy-of-play">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <h1 className="font-serif-display text-4xl md:text-5xl text-[#1a3d1a] mb-6">The Joy of Play</h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover our curated collection of engaging, durable, and fun toys designed to keep your furry friends happy and active. From tough chewers to gentle cuddlers, we have something for every personality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Tactical Adventure Harness */}
          <article className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row gap-8 relative group overflow-hidden border border-[#1a3d1a]/5 hover:shadow-md transition-shadow">
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto rounded-2xl overflow-hidden bg-gray-50">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuChuWipcHiVMzp3OT2w689E02iVXuL1eV0V5PfxgaHlnDaznZ5qcJCb3edrmQZuMuwR4btAJRt2eUCGpaakv-GEmBTAhmp9EojRvNqGMXoacdsyJ7Si6ErekSJ6tZDWK3Z5a6Z-Vt-dGFFO-dJDfiuQkhlykTC6UFwwHInvhb6L2HIxgVLCxxtirIvDwAIp91uWxtzP-cVEFVe6DbaqdsPoXWXNZ0CtD4gxF6tGyqYmzrqCcJ3JdjHEKTMLIMs1QF65vsMvqBEhlFM" alt="Tactical Adventure Harness" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block bg-[#EFFDF0] text-[#1a3d1a] text-xs font-bold px-4 py-1.5 rounded-full mb-3">Premium Gear</span>
                <h2 className="font-serif-display text-3xl text-[#1a3d1a] mb-3">Tactical Adventure Harness</h2>
                <p className="text-gray-600">Built for the outdoors. Durable, comfortable, and ready for any trail.</p>
              </div>
              <div className="flex items-center justify-end mt-auto">
                <button onClick={handleAddToCart} className="active:scale-95 bg-[#E86A10] text-white px-6 py-3 rounded-full font-bold hover:bg-[#c55a0d] transition-colors active:scale-95 flex items-center gap-2">
                  Add to Cart <ArrowRight className="active:scale-95 w-4 h-4" />
                </button>
              </div>
            </div>
          </article>

          {/* Plush & Interactive Collection */}
          <article className="bg-white rounded-3xl p-6 shadow-sm flex flex-col relative group overflow-hidden border border-[#1a3d1a]/5 hover:shadow-md transition-shadow">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-6">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFix9yuguyDrBUQxHGqFJxQkcHJ76Bzwbf_XY3QJCC2R3B7Q9P05nnS8aVQgQXlC3-mKTB3JIh2ad6ik9cWcDcT9zSrZItqcU_uOtAuMfOE5jS3A7e8bEcSQI4MPXHHUcdzDQHxXHXnhQ3Tg3xGiRqmU1Z41T9bwj6k-fPtu4u93iDGqxe6W8lDzF0MxE17Hi6gV84yMbWmS702pe7_nImvA7atADMSbqcl12j-AuOTjRq76dPn1Yog_2_qC1iM_VEfHmbuGGYzys" alt="Plush & Interactive Collection" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="font-bold text-lg text-[#1a3d1a] mb-2">Plush & Interactive Collection</h3>
            <div className="flex items-center justify-end mt-auto pt-2">
              <button onClick={handleAddToCart} className="active:scale-95 w-12 h-12 rounded-full bg-gray-50 hover:bg-[#EFFDF0] text-[#1a3d1a] flex items-center justify-center transition-colors active:scale-95">
                <ShoppingCart className="active:scale-95 w-5 h-5" />
              </button>
            </div>
          </article>

          {/* Durable Rope & Bone Set */}
          <article className="bg-white rounded-3xl p-6 shadow-sm flex flex-col relative group overflow-hidden border border-[#1a3d1a]/5 hover:shadow-md transition-shadow">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-6">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHbTLqPh-sI9KlkgJnR2Z0uMT0bv41yNfKtSk5wq2-vLML_Bw91dbJzCI0cUOzMKBrpHIoRAe3aiLxmRazgQc-xqkS5NeM3OvLRcCQ6NIBXMDRd42q7d5fF16EcbVDy98GHQEc42zS8LocC7XF2boThzMKnd4AhcweJ91cd-HL8cMF-8R-XZnUIxK7by-Pz9h6dLUrMHFtQMWWkDgFfzGhQGClXLUVfQVU9Jw5ZO_UF9QZhoUgxt3ZGdsQZs82w4akLr3d8LY4Be0" alt="Durable Rope & Bone Set" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="font-bold text-lg text-[#1a3d1a] mb-2">Durable Rope & Bone Set</h3>
            <div className="flex items-center justify-end mt-auto pt-2">
              <button onClick={handleAddToCart} className="active:scale-95 w-12 h-12 rounded-full bg-gray-50 hover:bg-[#EFFDF0] text-[#1a3d1a] flex items-center justify-center transition-colors active:scale-95">
                <ShoppingCart className="active:scale-95 w-5 h-5" />
              </button>
            </div>
          </article>

          {/* Colorful Play Assortment */}
          <article className="bg-white rounded-3xl p-6 shadow-sm flex flex-col relative group overflow-hidden border border-[#1a3d1a]/5 hover:shadow-md transition-shadow">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-6">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvoy0wJD2IV8kLFNtP2baZvtY15Qk0yxGhSG-npwexejlqDzy36Tmr8EFnkm0TyP8nMSh8fjkd-GPZWMg6V2RibEKWiyMUN-F1wfemecy2TN6v6LUa0ezFHKkzS717FU1pRgXWDwgeV3El18ZA_5ZgQTtMe4gc6NKoHSx9jxc4XOROlA6jtup-d8xgPMk13EOq2mqYVZKR0XZH0bonWSqv4hWRj9-XZOl2qHKEL4DUvyJsqrCNAuLI22G393BZMeZTCdo38csPJZE" alt="Colorful Play Assortment" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="font-bold text-lg text-[#1a3d1a] mb-2">Colorful Play Assortment</h3>
            <div className="flex items-center justify-end mt-auto pt-2">
              <button onClick={handleAddToCart} className="active:scale-95 w-12 h-12 rounded-full bg-gray-50 hover:bg-[#EFFDF0] text-[#1a3d1a] flex items-center justify-center transition-colors active:scale-95">
                <ShoppingCart className="active:scale-95 w-5 h-5" />
              </button>
            </div>
          </article>

          {/* Sporty Ball Collection */}
          <article className="bg-white rounded-3xl p-6 shadow-sm flex flex-col relative group overflow-hidden border border-[#1a3d1a]/5 hover:shadow-md transition-shadow">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-6">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmNBlFXC01LBGmOpYCrL1Z9ya_Klz8GU1ZATig-8emO7RN1V5KQexQ9BpAujQirU1Y35So-2t54H1AKGz2M5alugbPau3ysHkZyAKF_FvqfnHRgZewHnxSfLaC1K9RHWe4lVpmHRdgMbD618i-q40kBJz2fmH_CqfA4eMNCn2HzTt9V8iIRpsF5X0jVUBrh_DYDUKaPMgmbVt7nKk0Og86FcMU-7Dg51OXEOyo7C4_TXWiA52b4SmBVqXr0y5UmjnQW2aHWwimqPw" alt="Sporty Ball Collection" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="font-bold text-lg text-[#1a3d1a] mb-2">Sporty Ball Collection</h3>
            <div className="flex items-center justify-end mt-auto pt-2">
              <button onClick={handleAddToCart} className="active:scale-95 w-12 h-12 rounded-full bg-gray-50 hover:bg-[#EFFDF0] text-[#1a3d1a] flex items-center justify-center transition-colors active:scale-95">
                <ShoppingCart className="active:scale-95 w-5 h-5" />
              </button>
            </div>
          </article>

          {/* Ocean Blue Play Kit */}
          <article className="col-span-1 md:col-span-2 lg:col-span-1 row-span-2 bg-white rounded-3xl p-6 shadow-sm flex flex-col relative group overflow-hidden border border-[#1a3d1a]/5 hover:shadow-md transition-shadow">
            <div className="w-full h-64 md:h-full rounded-2xl overflow-hidden bg-gray-50 mb-6 relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXkfDEf8GSwPurZe1UogxoQcprzOCoXykiPt1_b9ILd8ayyzK555mPa5DXyYTX1qdLu8srYBBlZxbv8syw4K8y7PGxbCPAUcs_jO105eFy8ZSl6d16_VaHxHfgj2aINH2H7VmJMkXNia7rKEAoBuYqFjL9Ojxdgm9LTttyv_6_shuaGYUt2MMl5fUoqyaejQHNizWV5AeFZdgowvMTS5PPvgYL7GRJwN9P9pDi-pEH5fkCqDhJzXg54t5f0UlbDqBrRmuY8XYie7c" alt="Ocean Blue Play Kit" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-sm tracking-wider uppercase">Curated Set</span>
              </div>
            </div>
            <h3 className="font-serif-display text-2xl text-[#1a3d1a] mb-3 mt-2">Ocean Blue Play Kit</h3>
            <p className="text-gray-600 mb-6 text-sm">A complete set of toys, balls, and a storage basket.</p>
            <div className="flex items-center justify-end mt-auto">
              <button onClick={handleViewDetails} className="active:scale-95 bg-[#1a3d1a] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#2a5a2a] transition-colors active:scale-95 text-sm">
                View Details
              </button>
            </div>
          </article>

          {/* Eco-Friendly Green Collection */}
          <article className="active:scale-95 bg-white rounded-3xl p-6 shadow-sm flex flex-col relative group overflow-hidden border border-[#1a3d1a]/5 hover:shadow-md transition-shadow">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-6">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbHlZ9CCJcNv65t1Mdl5YJ6OGSORu-rFvHC3GxRLFbUlZiJNRUGsLXIJTThSYR-A2kbl6OWSz_rekB3ghw-1xg6h9p8TBKAzV90m4bDE_Uvar4JXJv_hfc-8HEcIPUuhI-4Ca_d8orpdvWeIndwFw55dP1bVui-GK74qp6bF8CfSHbQOUFoGt7vKHO21hOHD-x99Vb3QQGYZEtatNj8GIqTbgS1mYbtTVSImIurjtGqvA756YLjRRRYXQX9S7q5BysgqFb8Xwswfk" alt="Eco-Friendly Green Collection" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="font-bold text-lg text-[#1a3d1a] mb-2">Eco-Friendly Green Collection</h3>
            <div className="flex items-center justify-end mt-auto pt-2">
              <button onClick={handleAddToCart} className="active:scale-95 w-12 h-12 rounded-full bg-gray-50 hover:bg-[#EFFDF0] text-[#1a3d1a] flex items-center justify-center transition-colors active:scale-95">
                <ShoppingCart className="active:scale-95 w-5 h-5" />
              </button>
            </div>
          </article>

          {/* Squeaky Animal Friends */}
          <article className="bg-white rounded-3xl p-6 shadow-sm flex flex-col relative group overflow-hidden border border-[#1a3d1a]/5 hover:shadow-md transition-shadow">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-6">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2PhrVxpjZe6NoNw3dDag03xqN8P6PJ7YKWjHwWqiCfVBP84CaGrE8kXOTXoIExcOBac35Fpb7skLLA_0JWixEOU3mYwz9TzEwAgUdlAdhx2_6a54JZr2Wmt1SULx6PmbtKJUhkp5LnDYKUeQntaXiuk5D-jRUnc3aqQpewI7j-h93XYJO8xNsNCuzZhEQV3sNj8SGOY5N_Hp8EtLoLSDYbbw-BQjcChrUGqUC3sfINYcdZMv-qn8zECv6u8KI5wtRFG-n10Yz8Lg" alt="Squeaky Animal Friends" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="font-bold text-lg text-[#1a3d1a] mb-2">Squeaky Animal Friends</h3>
            <div className="flex items-center justify-end mt-auto pt-2">
              <button onClick={handleAddToCart} className="active:scale-95 w-12 h-12 rounded-full bg-gray-50 hover:bg-[#EFFDF0] text-[#1a3d1a] flex items-center justify-center transition-colors active:scale-95">
                <ShoppingCart className="active:scale-95 w-5 h-5" />
              </button>
            </div>
          </article>

          {/* No-Stuffing Plush Set */}
          <article className="bg-white rounded-3xl p-6 shadow-sm flex flex-col relative group overflow-hidden border border-[#1a3d1a]/5 hover:shadow-md transition-shadow">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-6">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0h9vy6GEHqoRHn2eKiL5pV-SXkIG6KMFGbDct302yxvmD51a8l3FgsNdzZijzGnfvu4cQ4XbZjBHcmooQo5urmemiivqjzMwjFwHWXha2bknCzQuaNKpPGz5B4s1jg_KrX6uqWUCpslo_bse8PPn59XHEvawuS_S8n4vw3f4UN3XJ_LWGt3XGjXfqJe8CXSBTOEhKxMhXEmXZs8gRqltcf3hp0QCtJ2I-z8gXweQekB9hqPg0DCrSqYnkx8zA3TV-25olOQ7SfLM" alt="No-Stuffing Plush Set" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="font-bold text-lg text-[#1a3d1a] mb-2">No-Stuffing Plush Set</h3>
            <div className="flex items-center justify-end mt-auto pt-2">
              <button onClick={handleAddToCart} className="active:scale-95 w-12 h-12 rounded-full bg-gray-50 hover:bg-[#EFFDF0] text-[#1a3d1a] flex items-center justify-center transition-colors active:scale-95">
                <ShoppingCart className="active:scale-95 w-5 h-5" />
              </button>
            </div>
          </article>

          {/* Elegant Treat Storage */}
          <article className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row gap-8 items-center relative group overflow-hidden border border-[#1a3d1a]/5 hover:shadow-md transition-shadow">
            <div className="w-full md:w-1/3 aspect-video md:aspect-auto md:h-56 rounded-2xl overflow-hidden bg-gray-50">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfnCCd1m5Mfqs3yTDe6YMn_EAwGy2L8b9RWqiv0QaNZhRg0r3jyYJpbFRkO8C0VjsnvuL5ytQBaAh0aD5Bxmwkf_6oIPoiPLBwMUiWzO_SYd0Crz1Wf5OpiXdOD3D8ffWS9jkEOLboBeRLhuLYHLq0PpNJRE28AkC_yIbPz2_ojhBbar369VvMRRqge5XYhGSvbFUUZw7eLMHyQ1hipL37JffjMBO0sEZa4mXF8_wY_4N0OMY5qQ-Qu28FwxIi4D4yys5BST-9uEM" alt="Treat & Snack Storage" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between items-start md:items-center p-2">
              <div className="mb-6 md:mb-0">
                <h2 className="font-serif-display text-3xl text-[#1a3d1a] mb-3">Elegant Treat Storage</h2>
                <p className="text-gray-600 max-w-md">Keep rewards fresh and beautifully displayed with our bone-shaped organizer and airtight jars.</p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <button onClick={handleAddToCart} className="active:scale-95 bg-[#E86A10] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#c55a0d] transition-colors active:scale-95 whitespace-nowrap flex items-center gap-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
