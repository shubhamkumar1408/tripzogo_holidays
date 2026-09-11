import React from 'react';
import { Search, Car, Bed, Utensils, PhoneCall } from 'lucide-react';
import { DestinationId, FilterState } from '../types';

interface HeroSectionProps {
  filterState: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  onSelectDestination: (dest: DestinationId | 'all') => void;
  totalPackagesCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  filterState,
  onFilterChange,
  onSelectDestination,
}) => {
  const destinations: { id: DestinationId; name: string }[] = [
    { id: 'spiti', name: 'Spiti Valley' },
    { id: 'ladakh', name: 'Leh Ladakh' },
    { id: 'uttarakhand', name: 'Uttarakhand & Char Dham' },
    { id: 'himachal', name: 'Himachal & Manali' },
  ];

  return (
    <section className="bg-stone-950 text-white relative overflow-hidden">
      {/* Background Image with stunning visible mountain peaks */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85"
          alt="Majestic Himalayan Mountains"
          className="w-full h-full object-cover object-center brightness-95 contrast-105"
        />
        {/* Refined gradient overlay so the majestic mountain remains clearly visible while text is crisp */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
        {/* Simple brand pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/25 text-emerald-200 text-xs font-semibold mb-4 border border-emerald-400/40 backdrop-blur-xs">
          <span>TRIPZOGO • travel smart. go easy. • Domestic Tour Operator • Noida Sector 15</span>
        </div>

        {/* Normal, clear heading */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 drop-shadow-md">
          Handcrafted Domestic & Himalayan Holiday Packages
        </h1>
        <p className="text-stone-200 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-sm font-normal">
          Verified holiday tours for <strong className="text-white font-semibold">Spiti Valley</strong>, <strong className="text-white font-semibold">Leh Ladakh</strong>, <strong className="text-white font-semibold">Char Dham & Kedarnath</strong>, and <strong className="text-white font-semibold">Himachal & Manali</strong>.
        </p>

        {/* Clean, Simple Search Bar */}
        <div className="max-w-2xl mx-auto bg-white p-2 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-2 border border-stone-200 text-stone-800">
          <div className="flex-1 w-full flex items-center gap-2 px-3 py-1.5">
            <Search className="w-5 h-5 text-stone-400 shrink-0" />
            <input
              type="text"
              value={filterState.searchQuery}
              onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
              placeholder="Search package (e.g. Spiti, Ladakh, Kedarnath, Manali, Kasol, Jibhi...)"
              className="w-full text-xs sm:text-sm bg-transparent outline-none text-stone-900 placeholder:text-stone-400"
            />
          </div>

          <button
            onClick={() => {
              const elem = document.getElementById('packages-section');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shrink-0"
          >
            Find Packages
          </button>
        </div>

        {/* Simple Quick Destination Tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-stone-400 font-medium">Quick Explore:</span>
          <button
            onClick={() => onSelectDestination('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
              filterState.destination === 'all'
                ? 'bg-white text-stone-900 font-bold'
                : 'bg-stone-800/80 hover:bg-stone-800 text-stone-300'
            }`}
          >
            All 15 Packages
          </button>
          {destinations.map((d) => (
            <button
              key={d.id}
              onClick={() => {
                onSelectDestination(d.id);
                const elem = document.getElementById('packages-section');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                filterState.destination === d.id
                  ? 'bg-emerald-500 text-stone-950 font-bold'
                  : 'bg-stone-800/80 hover:bg-stone-800 text-stone-300'
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>

        {/* 4 Simple Key Feature Badges */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-stone-800 text-left">
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
            <Car className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Private Cab</p>
              <p className="text-[11px] text-stone-400">Dedicated vehicle & driver</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
            <Bed className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Verified Stays</p>
              <p className="text-[11px] text-stone-400">Clean 3★, 4★ & camps</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
            <Utensils className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Meals Included</p>
              <p className="text-[11px] text-stone-400">Daily breakfast & dinner</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
            <PhoneCall className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">24/7 Support</p>
              <p className="text-[11px] text-stone-400">Call: 8178187049</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
