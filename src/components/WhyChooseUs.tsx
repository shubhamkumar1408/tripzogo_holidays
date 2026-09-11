import React from 'react';
import { ShieldCheck, UserCheck, HeartHandshake, PhoneCall } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Private Sanitized Cabs',
      description: 'Clean vehicles with verified, polite mountain and desert drivers. No shared cabs.',
    },
    {
      icon: HeartHandshake,
      title: 'Handpicked Hotels',
      description: 'Carefully vetted 3★, 4★, boutique resorts and houseboats with clean linen and hot water.',
    },
    {
      icon: ShieldCheck,
      title: 'No Hidden Costs',
      description: 'Clear itemized quotes including tolls, driver allowances, state permits, and taxes.',
    },
    {
      icon: PhoneCall,
      title: '24x7 Trip Support',
      description: 'Direct WhatsApp and call support throughout your travel for any on-road assistance.',
    },
  ];

  return (
    <section className="py-12 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Why Book with TRIPZOGO?
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-1">
            Over 5,000+ happy travelers trust TRIPZOGO for domestic & Himalayan holidays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-stone-200 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-stone-900 mb-0.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
