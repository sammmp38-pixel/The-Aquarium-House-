import React from 'react';
import { Star, ShoppingCart, Filter, ArrowRight, CheckCircle2 } from 'lucide-react';
import { showToast } from './Toast';

export default function AquaticAndNutrition() {
  const handleAddToCart = () => showToast("Added to Cart!");
  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    showToast("Viewing Details...", "info");
  };

  return (
    <>
      {/* Product Grid Section */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50" id="products">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-serif-display text-4xl text-[#1a3d1a] mb-2">Premium Aquariums & Habitats</h2>
              <p className="text-gray-600">Expertly curated systems for every level of enthusiast.</p>
            </div>
            <div className="flex gap-2">
              <button className="active:scale-95 p-3 rounded-full border border-gray-200 hover:border-[#E86A10] transition-all">
                <Filter className="active:scale-95 w-5 h-5" />
              </button>
              <button className="active:scale-95 px-6 py-2 rounded-full border border-gray-200 hover:bg-white transition-all font-bold text-[#1a3d1a]">View All</button>
            </div>
          </div>

          <div className="active:scale-95 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Feature Card */}
            <div className="md:col-span-7 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/9]">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH6f0Jzw5TY0i66EZdcYNgV1Az1K-Dpl4r4Teac71fdafjZaaG1_CNLrAEguYTDwYJlLqCfkDkbwN9JoFexwnvrQaZ3Cfsg__h5xeASsy_Ow0OXQEVX23rtbEFDJvi9AwFcu0389DAa3RjbvRxtCuCFQqJDyfbJLlnnhq-MovDMQ1MuEiKMtFOE8kqZjQ_V9Qu26LItfeTxwrhWZVzQ2IKEKierJT9e3YVGDfbVcxzjOCY2gNLjCpAcXLocIlwi29AsHElFs9ttMc" alt="Horizon Pro 200L" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#E86A10] text-white px-3 py-1 rounded-full text-xs font-bold">BEST SELLER</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif-display text-2xl text-[#1a3d1a] mb-1">Horizon Pro 200L</h3>
                  <p className="text-gray-600 mb-4">Complete rimless setup with integrated filtration</p>
                </div>
                <button onClick={handleAddToCart} className="active:scale-95 bg-[#1a3d1a] text-white p-3 rounded-2xl hover:bg-[#E86A10] transition-all">
                  <ShoppingCart className="active:scale-95 w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Side Card 1 */}
            <div className="md:col-span-5 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="relative overflow-hidden rounded-2xl mb-4 flex-grow aspect-square md:aspect-auto">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7XqJIHqO_oVEBAqrkMpsDvJ-Uc7vX2vnDHgDKJIqzwPzgnysWEGdkiMjaCKixGuO3bZSgV0OdM4Ao4jztG6ScRqBQ_wOPl1XcWQ-f5o32YetkUknX0GwtD85zEX67C3B8n61bSN4ZOUv6KmQsxuYwHaLpJNKsB0V6tnjh-AxN_BIFs9VXjT-HftrVUyUlj2tWCsi9Yw52jh9veOJJMOxCMDHoDwkbPqnG2J68gXTXAugK8rWM9r_ToyKgEQ6nNJtlIVKDMeV-J_E" alt="Nano Moss Cube" />
              </div>
              <h3 className="font-bold text-lg text-[#1a3d1a]">Nano Moss Cube</h3>
              <div className="flex justify-start items-center mt-2">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Star className="text-[#E86A10] w-3 h-3 fill-current" /> 4.9 (124 reviews)
                </span>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="md:col-span-4 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWQVN3mK_e4mrbUqOd4r9xiD40W_2bx5usSA3_2S5aP3J6TDv13ExZ27HrdNNfjtmkJ4mToXh4yFjDNN-vsUbgyRDzc4cGWl1fA4knJDGjeFWFRlD3iwccGKCfFjOtA6sNoJLtZzZDvsHGjOFSaufzdtrwVPP3kMBe8aYMdTS3VFmcw2mZ45ht3GOrorObSDrwzF-IlBNtViMF-4o9ctF7i3_FugUxsuTfe8xe6jqBTO3AIJjttznQ_biEkQmR6cR7yeJ8dvx-Nes" alt="Serenity Bedside Tank" />
              </div>
              <h3 className="font-bold text-[#1a3d1a]">Serenity Bedside Tank</h3>
            </div>
            
            <div className="md:col-span-4 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzWBsM2O3A_1zQ4puthUR9Jodh5XTlKhGlz5uHYoh3irnAuJElOufIsuNUVkfcn6h9AWl4Q4wi2LAS3cA3H8dxpf97MzsEd4Rv42TE4bs7svABTNfCTwV9-H2sc1kXzWQyTe13ww3MPeMFGDCpTdkSmBOAP3q0I9hd7Bp3lVv2NSSHBxZgLiEZlyLlj-5OyGxZQ_WzM2ZW3SRZtYQnKdWh4Dmjfwlj_zP4QV010noCVRu8MINIA28Z2ithbj8_ltJkY_DAOq9GH5Q" alt="Driftwood Reef Master" />
              </div>
              <h3 className="font-bold text-[#1a3d1a]">Driftwood Reef Master</h3>
            </div>
            
            <div className="md:col-span-4 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1009lrRTcar2XGAuigG8z4TKc7VE8MySs9whcZGbc3NWFBf2qKTYIkqzHd8yhkE2rsVPsAxNQA1xjSo3eXFcKahzsne_PngGqMYgChRnxkJqTWNJ8RijffPHWASGnM7xN3oUQ-SERg2j3aXg8l3QKEeCRv8SAMC3AbMqWRVTzkpjVL4WjDuiTHvI6-_6SGnKjsA38WT8GDPuNCC_xVE926LuEZcy93Pd_iIAio9wu7oucUP4WCWK4FbbEgcVl7tB8nbDCkSLfPic" alt="Zen Goldfish Pavilion" />
              </div>
              <h3 className="font-bold text-[#1a3d1a]">Zen Goldfish Pavilion</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Pet Nutrition Section */}
      <section className="py-20 px-6 lg:px-12 bg-white" id="pet-nutrition">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif-display text-4xl text-[#1a3d1a] mb-2">Premium Pet Nutrition</h2>
            <p className="text-gray-600">Quality fuel for your loyal companions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Pedigree Adult Nutrition", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6HO4O_WNrxCVQz9f_0vdoWukEzKv_Ox0R3SVoO-W90cbI1Z79VAdfMlfKB8s7JKqURkhEaOx5AzBEHBDUvjx6KtxT-pDhx6aAa0I4r5qnRUMxpNEmN9mZ_1_YFIuY0BNJe6LxUUvJXsmzNS9RgLELRMT54BI8S9znz62E4soAS-nrLm7UgyE6dq9nENqCMZ8wCkYwGn1GQarT2juGkZWGWtxI58jyyvaRzJVZQIXOMbeg-yuk8G0al5RPz04xl4SPJED1zqv1_j8" },
              { title: "Royal Canin Puppy Nutrition", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmqSzZNCGy6GESLje9qRFZMiQWknevxFDhjVVXBFbrPxd-nmjji-U1v5ndhOB1VJ7FcCWVoPXO5z4cAFPunNcb1mukOK8JkbIhpXOlaUb0j47N_gfdnJHD1Skd_F84q7b8LBQ-eUx1bvyoqz-z-K7SjXMJ_6Mc1ggE9VxvEIDTjjMmUFoKRNLvTShCzD_sPkG3AeGDYtvx3Zn81_Shj0yBv-oJxlsCJac0rfeZLpySpgr7RKKuy5Ki4NGI3-2prhDPUumH4e9Bb7w" },
              { title: "Drools Adult Chunks in Gravy", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZwbFVT9HdgbwqHQTFTryCuTe8cdOSzTDGfKTqSUG8AphSiozfPaWZ7B1uHz2OGDtm3nVEWh_6xj98XvZ4DOr_yvt4VQO995IIjDhHIzkjVC4tfckzm7fqp1FIJd1cXmh8QbEacB47cs5-6n9KMv2y-PDnq_QxejSV_NqCAqsKfuWwRN7yrKE8YEzm-2YpJs8rXTxSW2uTgMGEkbZQ6ydZvHIBjj3xBXEKiUi8tkmjilEg25eiAUjf_T4jjW5BxQv9IXUSBpx8rHI" },
              { title: "Drools Adult Nutrition", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGZcQApbAQE7cZu8FS95qgUvPh0TqG7n_Lu0wwlITh14NAhPytQ-cgQiNSs_xIgOONqOpsqBup5OOTsTPcRc1AeTkRZktVknjY_tMbdt8d_pnMSbPNHVlVXKTXTPGKs4iiCnQrh1TsN6wHdMZSVM8ds7dB7-tGhezec7vZcVur7KSWeWfGckkSS10g075SXPPu0lInLIAC_o5NK8OgS7Na9cKkT4YmB8fry01Ok9QAv7z3Ivrl63Gbn2_9RQLRl1OhXi6skvoBeWs" },
              { title: "Royal Canin Feline Nutrition", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkNwufBK3S7CQTscqYNYJo693PTExi3XofP5ENqkLvBWuXdJOMbWYSbhJRuZs2fDp7Yewp_kfDGYKKvXNoZa4WsHzhVRgUHfgd3wvQdHF_eMwf0NcOJN77v6meag3-vvmBywncos-WiCtSOliieB3rJHydOXe_Lb_RqjoYAQSGupRuZp-dkofeDiHzOTTyAUJI64v2V6lP0qdBiqnOg4kUjjNp9lnWEn0cn4_s1KCvQH4BqS4AW81gG0Z1Z24Ctvn8OTbt-0O3Dgk" },
              { title: "Pedigree Shelf Display", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHoYxfk0F_gPYHAKHJuU3Ggm-rdlJfPWMilUC0iTKmJG3kyJtm8cQwngxTCgm4T6SIgh6Q7P7eUOj-WLUDAv0qtVMCB_xz2BnIDfBh1zmxA8Wiwh3_ZffYW2WhEtAaNwM_J9aECbXXH1LWzRI1IuLNbcZbAnl5oono2otnvC2uqT8ENUOu4scHHjRHLRdg1n2zkabddJN4kI8cI91IEIzbsw7nls7v9esqpUorHoHJ3w2Px9RK73lPhDEL_de8MnqzgYqW5DqdEKE" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-bold text-[#1a3d1a]">{item.title}</h3>
                <a href="#" onClick={handleViewDetails} className="active:scale-95 inline-block mt-2 text-sm font-bold text-[#E86A10] hover:text-[#c55a0d] transition-colors active:scale-95">View Details</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animal Essentials Section */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50" id="animal-essentials">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif-display text-4xl text-[#1a3d1a] mb-2">Animal Essentials</h2>
            <p className="text-gray-600">Curated quality for every member of your family.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Luxury Pet Bed", desc: "Ultimate comfort for restful sleep.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgv2b6qW4kdpW5XxH7thuVz7ewSCj4pVm_7bnSNfBHEmbETC_qxrQE73_fATXy6uk9dUxgul2K7rqO4anHWTGT-qaAUeUvVwN0gj0K2LJBxaC-vPquAapnOQU82okypgEXZkvhB-MSyKxq-60w1mKFHKf3oLesBd5MiF8ccEB9c4YsJclfzLuktpfhIGzXg7t2JI0fLN55O56ferAO9StVYV54849a2U-JEzdbyYsZ2Fw1mfj4o9wselKmdfLfjXTSRPkl3etBtmw" },
              { title: "Adventure Harness", desc: "Durable gear for every journey.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkGAzwwmc9ACamQjF8F4G1rK1Is_aFXR-aCFg1KJkjBLnETJjFBZYKH-nJzM47lxZXgdjin2JrsV0UDW7hCfSXXRxiWfnMF_tIxGdqwbZpdE0gqCar9Wj0Mec1ItA7_U3ONpNjWstbMNX4mp62sysIx3AKdz3NtZX1ptvTb4usiZCKAmBa1LaIhAb-74ldNdfbVCNysVdSsavUWm9sSAP0r4HCuZAbS7ub_xL_IEtQXci0ENOm1Pp1S2Th1A-YpWFzK0bt_hyoXQo" },
              { title: "Tough Play Toys", desc: "Built to withstand the strongest play.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjr2ubZE_6Gz7oyjMktCMvLMcn0U8X6GGNtgGN-zjC4FJ_feISGuaAQF9aJJ12MWWdpVFemahLIcqIu9fh8HGDVAUFh67Z2tc-Aa7Rd-QquNssmVPaSKzDH4K6HWoD2WRGXQqfbOkPCvMV4PANqsi157mA1NQu7aQ0Wbslq6Y5VFS8mfaSgeFIipAk-CTfeKX0ylWUJabuSaDRqYaIcBjIN71hnLQUoAQCKGmlSollFUHPOVQbwMAWjDPkBaYdm_phC1du08LZ18" },
              { title: "Grooming & Care Kit", desc: "Professional care at your fingertips.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmsCfWJLqIMLyVcN3mirwin_lzB7E6ewbnRcv-spl04u-F406b6EmIne9hDjxOOaeVFKsli8VQxY6lCwzSwJLq8p-Ch0gLR8f2ANvNA-aq3FIGKypzHgeq6151FAgC4vBg_9-5YHsRY4W4LBRx4Ynr7mal06pr4-QN8J2ceTRiZ3qUjErIUhUrqFCch7iCRl0FsZz3gQ6aEieKc2Q8pfievsvU1A6LLbobOts-vdddGQPw4_PTXprnzmjyyxqhX-woxDQimlYm55o" },
              { title: "Premium Ceramic Bowls", desc: "Elegant and hygienic dining solutions.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzku9_DT-yEk05upP4BoZ-laMy5C_V5nhG_0k_HaBqPx2ZL45_FcXC9LCe225D3x53UtbMSmz4EBrfsxg3u7b1WOPGGZYB9iBh3kqRX2CEeoWiMkWCDS1qYUtwBm6su8wg2VjxFm9zatXmMJbE6IbGoHZ8BFSiJSKhU1mK-_gZLGK9cc73mTDc6jhQXAa8OoLHqO9uDF_IDsltrRsD6lVEThit_vdbM87XdfAI7rkDO77BGQXYidvZbiY6hFU_J3dCb6tBZsOASZI" },
              { title: "Eco-Friendly Toys", desc: "Sustainable fun for happy pets.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYfmNcN-H9YcC77EVFfrr8qLZ3yr69rPsHbLDLaaZopO3Z4zEoo2OWGKIy0fbf3X14aN9ssDN2FCTFn5wqfSVl9I5VOdR6mO4J1rvwo_BUOgrPhsdNDnj_6gOtIDrrXTIpkyV1T7ujoncbAXkcGSHH1RTXleJX6J1LJ_KN8k8XlKOJg7JCSXoqveuqBD8aqomO7GOu5y6qJe5HqYqnGUj4pnvBGrFaIJtfVNDmTo04m3MtCdKwjLJ8jnWKZ8HlF0IESfgJbnvkjSA" },
              { title: "Natural Treat Box", desc: "Healthy rewards they will love.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjbg-lsHbYYutxdIAe5hQFAP3rtEQt5_2pAuV_Oj3QO2QB10U3UWCJPtRPvM8cIHZkF3Pj5BMG1HQ4_1sxdOla7I3PEqd4fnVPOXz1qhsPC_VfqW-j443UBFXWMhZ3_aFXh1h36oPH2Bi2vfuiX1riV7MYWLnnTgVY2FsncYwFPZkBOqXWoKz-aTw61dt_yksbRCRhDCRio8U5amDIK9qva5HvAKEF7iUoP0VoPf7l7S1HuxSfbjrVp_11mLk6tQh2-tdUiGsvWoc" },
              { title: "Outdoor Essentials", desc: "Everything needed for the great outdoors.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQFqJ2babo6GtiiJEGPx00nBNdH0gjlmxJuLq0YHORhL2wLU5glPMmcDLxDydzliWOhDwkmCNvQRFhtrreooWeOdC9-S59OS-5r8TW-AOe5KAx2mbtXP6kIotbt2crRuLuvQxQTVazla_3QT4eoEgFP7fzuTKEyMBIZrQ3ZUFLQapPtlX5Ap2-3WexTwGfBd2vum4mgiBXM44cQz4LkiTGK9F2lfKfQVOucdL88t1KObtF-Db24vD9ZzsY_JqZjibuLo9qR1AhxZs" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-bold text-[#1a3d1a]">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                <a href="#" onClick={handleViewDetails} className="active:scale-95 inline-block mt-2 text-sm font-bold text-[#E86A10] hover:text-[#c55a0d] transition-colors active:scale-95">View Details</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Aquatic Friends */}
      <section className="py-20 px-6 lg:px-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto bg-[#1a3d1a] rounded-[2.5rem] p-8 md:p-16 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="order-2 md:order-1">
              <div className="aspect-video rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKmYvBfidSm7Q3thQphz7mrnxSgtl8WpKAvFdD4a_e3l2iqgvfeoH5zPVtRKwRLVDoSwCUrs1oomYGbxO688hXl8-FWAcUB2MW_Q6w53rEetPftG4oKMxWsP94p0FvYJX9uPj31WFVgRen21pAR-VcDlepk8PPzLFBY9aZ-htOgz7Zu7EiVG9B1s7ZQd2a8u-YNdoivUCjPSF91oPxgl1RV9iQqHyIMwgq_QnaK1n4jf2sqAs20u8nq9DzOZuHbfIRZOgmlvxidO4" alt="Aquatic setup" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif-display text-4xl text-white mb-6">Our Special Aquatic Friends</h2>
              <p className="text-lg text-white/80 mb-8">
                Beyond fish, we specialize in sophisticated semi-aquatic habitats. Our turtle and amphibian setups are designed for health, longevity, and natural beauty.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-[#E86A10]" />
                  UVB Lighting Integration
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-[#E86A10]" />
                  Custom Basking Platforms
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-[#E86A10]" />
                  Heavy-Duty Filtration Systems
                </li>
              </ul>
              <button className="active:scale-95 bg-[#E86A10] text-white px-8 py-3 rounded-full font-bold hover:bg-[#c55a0d] transition-all">Shop Turtle Supplies</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
