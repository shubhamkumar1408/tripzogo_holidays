import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { destinationsData } from '../data/destinationsData';
import { DestinationId } from '../types';

interface DestinationShowcaseProps {
  selectedDestination: 'all' | DestinationId;
  onSelectDestination: (dest: DestinationId | 'all') => void;
}

export const DestinationShowcase: React.FC<DestinationShowcaseProps> = ({
  selectedDestination,
  onSelectDestination,
}) => {
  const handleCardClick = (destId: DestinationId) => {
    onSelectDestination(destId);
    const target = document.getElementById('packages-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Popular Destinations
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              Choose your favorite region to see tailored packages
            </p>
          </div>

          <button
            onClick={() => onSelectDestination('all')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              selectedDestination === 'all'
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
            }`}
          >
            Show All
          </button>
        </div>

        {/* 5 Destination Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {destinationsData.map((dest) => {
            const isCurrent = selectedDestination === dest.id;
            return (
              <div
                key={dest.id}
                onClick={() => handleCardClick(dest.id)}
                className={`group rounded-xl overflow-hidden cursor-pointer transition-all border ${
                  isCurrent
                    ? 'ring-2 ring-emerald-600 border-emerald-500 shadow-sm'
                    : 'border-stone-200 hover:border-stone-400 bg-white hover:shadow-xs'
                }`}
              >
                <div className="relative h-28 sm:h-32 w-full bg-stone-100 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-white">
                    <h3 className="font-serif text-sm font-bold truncate">
                      {dest.name}
                    </h3>
                    <p className="text-[10px] text-emerald-300 font-medium">
                      From ₹{dest.startingPrice.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 bg-white text-xs">
                  <p className="text-[11px] text-stone-500 line-clamp-1">
                    {dest.popularSpots.slice(0, 2).join(', ')}
                  </p>
                  <div className="mt-1.5 flex items-center justify-between text-[11px] font-semibold text-emerald-700">
                    <span>View Tours</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
