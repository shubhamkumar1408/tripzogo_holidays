import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, MapPin, Mail } from 'lucide-react';
import { DestinationId } from '../types';
import { TripzogoLogo } from './TripzogoLogo';

interface NavbarProps {
  selectedDestination: 'all' | DestinationId;
  onSelectDestination: (dest: 'all' | DestinationId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedDestination,
  onSelectDestination,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const destinations: { id: 'all' | DestinationId; label: string }[] = [
    { id: 'all', label: 'All Packages' },
    { id: 'spiti', label: 'Spiti Valley' },
    { id: 'ladakh', label: 'Leh Ladakh' },
    { id: 'uttarakhand', label: 'Uttarakhand' },
    { id: 'himachal', label: 'Himachal' },
  ];

  const handleNavClick = (dest: 'all' | DestinationId) => {
    onSelectDestination(dest);
    setIsMobileMenuOpen(false);
    const elem = document.getElementById('packages-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200 shadow-xs">
      {/* Simple Top Bar with direct contact & address */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Office: Noida Sector 15</span>
            </span>
            <a
              href="mailto:support@tripzogo.com"
              className="hidden md:flex items-center gap-1 text-stone-300 hover:text-emerald-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>support@tripzogo.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:8178187049"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 8178187049</span>
            </a>
            <a
              href="https://wa.me/918178187049?text=Hi%20TRIPZOGO%2C%20I%20want%20to%20inquire%20about%20tour%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Official Brand Logo */}
        <div
          onClick={() => handleNavClick('all')}
          className="flex items-center cursor-pointer select-none py-1 hover:opacity-95 transition-opacity"
          aria-label="TRIPZOGO Home"
        >
          <TripzogoLogo size="md" variant="light" showTagline={true} />
        </div>

        {/* Desktop Destination Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {destinations.map((d) => {
            const isActive = selectedDestination === d.id;
            return (
              <button
                key={d.id}
                onClick={() => handleNavClick(d.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href="tel:8178187049"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors cursor-pointer border border-stone-200"
          >
            <Phone className="w-3.5 h-3.5 text-stone-600" />
            <span>8178187049</span>
          </a>

          <a
            href="https://wa.me/918178187049?text=Hi%20TRIPZOGO%2C%20please%20send%20me%20tour%20package%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">WhatsApp Us</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-3 space-y-2 shadow-md animate-in fade-in duration-150">
          <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider px-2">
            Explore Destinations
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {destinations.map((d) => (
              <button
                key={d.id}
                onClick={() => handleNavClick(d.id)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-semibold ${
                  selectedDestination === d.id
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <a
              href="https://wa.me/918178187049?text=Hi%20TRIPZOGO%2C%20please%20send%20me%20tour%20package%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-emerald-600 text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: 8178187049</span>
            </a>
            <a
              href="tel:8178187049"
              className="w-full py-2 px-3 rounded-lg bg-stone-900 text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call: 8178187049</span>
            </a>
            <div className="text-center text-[11px] text-stone-500 pt-1">
              📍 Noida Sector 15 | ✉️ support@tripzogo.com
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
