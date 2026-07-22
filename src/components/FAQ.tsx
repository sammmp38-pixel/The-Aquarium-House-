import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS = [
  {
    question: "Do you offer in-store pickup for online orders?",
    answer: "Yes! You can choose 'In-Store Pickup' at checkout. Orders are typically ready within 2 hours during regular business hours. We'll send you an email when your order is ready."
  },
  {
    question: "What is your shipping policy?",
    answer: "We offer free standard shipping on all orders over $49. For orders under $49, a flat rate of $5.99 applies. Expedited shipping options are also available at checkout. Most standard orders are delivered within 3-5 business days."
  },
  {
    question: "Can I bring my pet into the store?",
    answer: "Absolutely! We are a pet-friendly store. We just ask that all pets be kept on a leash or in a secure carrier for the safety and comfort of all our customers and animal friends."
  },
  {
    question: "What should I feed my new puppy/kitten?",
    answer: "Puppies and kittens require specialized diets rich in protein and essential nutrients for growth. We recommend choosing a high-quality food specifically formulated for their life stage. Our in-store nutrition experts can help you select the perfect brand based on breed and specific needs."
  },
  {
    question: "Do you sell live animals?",
    answer: "Yes, we have a specialized aquatic section with a variety of freshwater fish, as well as reptiles, amphibians, and small birds. We do not sell cats or dogs, but we frequently partner with local rescues for adoption events."
  },
  {
    question: "What is your return policy?",
    answer: "We want you and your pet to be completely satisfied. You can return most unopened, unused items in their original packaging within 30 days of purchase for a full refund. Live animals and prescription items have a modified return policy—please speak to our team for details."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#fafaf4]" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1a3d1a] mb-6 font-serif-display">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-[#2d5a2d]/80 font-medium">
            Everything you need to know about our products, policies, and pet care.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#1a3d1a]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="active:scale-95 w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-lg text-[#1a3d1a] pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-[#E86A10] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
