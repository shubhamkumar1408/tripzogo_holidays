import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const TravelTipsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are all packages customizable as per our dates and budget?',
      a: 'Yes, 100%! All our domestic packages are fully customizable. You can adjust travel dates, number of days, hotel category (3-star, 4-star, or luxury heritage stays), and add specific sightseeing spots.',
    },
    {
      q: 'Is the vehicle private or shared?',
      a: 'All our packages include exclusive private vehicles (Sedan / SUV / Tempo Traveller) with dedicated drivers for your family or group only. No shared cabs.',
    },
    {
      q: 'What is included in the package price?',
      a: 'Quoted prices include comfortable hotel accommodations, daily breakfast and dinner, private cab with fuel, state road taxes, parking fees, driver allowance, and sightseeing as per itinerary.',
    },
    {
      q: 'How do I book and what is the payment procedure?',
      a: 'You can confirm your booking with an initial token advance (25% to 30%). The remaining balance is payable prior to trip start or upon arrival. We provide official tax invoices and hotel vouchers immediately.',
    },
  ];

  return (
    <section className="py-12 bg-stone-50 border-b border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-1">
            Everything you need to know about booking with SkyWander Holidays
          </p>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-sm font-bold text-stone-900">
                    {faq.q}
                  </span>
                  <span className="text-stone-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
