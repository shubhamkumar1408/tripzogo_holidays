import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { DestinationId } from '../types';
import { TripzogoLogo } from './TripzogoLogo';

interface FooterProps {
  onSelectDestination: (dest: DestinationId | 'all') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectDestination }) => {
  const destinations: { id: DestinationId; name: string }[] = [
    { id: 'spiti', name: 'Spiti Valley Tour Packages' },
    { id: 'ladakh', name: 'Leh Ladakh Expeditions' },
    { id: 'uttarakhand', name: 'Char Dham & Kedarnath Yatra' },
    { id: 'himachal', name: 'Himachal & Manali Packages' },
  ];

  const handleDestinationClick = (dest: DestinationId) => {
    onSelectDestination(dest);
    const target = document.getElementById('packages-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-stone-800">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="pb-1">
              <TripzogoLogo size="md" variant="dark" showTagline={true} />
            </div>
            <p className="text-stone-400 leading-relaxed">
              Your premier holiday planner for unforgettable domestic treks, sacred pilgrimages, high-altitude road trips, and scenic holiday vacations with transparent pricing and round-the-clock on-road support.
            </p>
            <div className="text-stone-300 flex items-center gap-1.5 pt-1">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold text-white">Office Address: Noida Sector 15, Uttar Pradesh</span>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3">
              Popular Destinations
            </h4>
            <ul className="space-y-2 text-stone-400">
              {destinations.map((d) => (
                <li key={d.id}>
                  <button
                    onClick={() => handleDestinationClick(d.id)}
                    className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    {d.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3">
              Featured Tours
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  onClick={() => {
                    const target = document.getElementById('packages-section');
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-400 cursor-pointer font-semibold text-emerald-400"
                >
                  View All 15 Tour Packages →
                </button>
              </li>
              <li>Spiti Valley (6N/7D) - ₹20,000</li>
              <li>Leh Ladakh (9N/10D) - ₹35,000</li>
              <li>Char Dham Yatra (10N/11D) - ₹23,500</li>
              <li>Kedarnath Holy Yatra (3N/4D) - ₹8,000</li>
              <li>Himachal Manali & Kasol (4N/5D) - ₹8,500</li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-2.5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3">
              Official Contact
            </h4>
            <a
              href="tel:8178187049"
              className="flex items-center gap-2 text-stone-200 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-bold text-sm text-white">8178187049</span>
            </a>
            <a
              href="mailto:support@tripzogo.com"
              className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="break-all font-medium text-emerald-300">support@tripzogo.com</span>
            </a>
            <a
              href="https://wa.me/918178187049?text=Hello%20TRIPZOGO%2C%20I%20am%20interested%20in%20your%20tour%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>WhatsApp Us: +91 8178187049</span>
            </a>
            <p className="flex items-start gap-2 text-stone-400 pt-1">
              <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <span>Registered Office: Noida Sector 15, UP, India</span>
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-stone-500 gap-2">
          <p>© {new Date().getFullYear()} TRIPZOGO. All rights reserved.</p>
          <p className="text-stone-400">Domestic & Himalayan Holiday Packages | Noida Sector 15</p>
        </div>
      </div>
    </footer>
  );
};
