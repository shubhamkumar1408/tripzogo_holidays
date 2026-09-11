import React from 'react';
import { Clock, MapPin, Car, Bed, Utensils, Compass, MessageSquare, Eye, Star } from 'lucide-react';
import { TourPackage } from '../types';

interface PackageCardProps {
  pkg: TourPackage;
  onViewDetails: (pkg: TourPackage) => void;
  onQuickBook: (pkg: TourPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  onViewDetails,
  onQuickBook,
}) => {
  const discountAmount = pkg.originalPrice - pkg.pricePerPerson;
  const discountPercent = Math.round((discountAmount / pkg.originalPrice) * 100);

  const handleWhatsAppBooking = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello TRIPZOGO, I am interested in booking:\n` +
      `📦 Package: ${pkg.title}\n` +
      `⏳ Duration: ${pkg.durationDays} Days / ${pkg.durationNights} Nights\n` +
      `💰 Price: ₹${pkg.pricePerPerson.toLocaleString('en-IN')} per person\n` +
      `📍 Route: ${pkg.route.join(' - ')}\n` +
      `Please send me detailed itinerary and booking confirmation.`
    );
    window.open(`https://wa.me/918178187049?text=${text}`, '_blank');
  };

  return (
    <div
      id={`package-card-${pkg.id}`}
      className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
    >
      {/* Package Image & Badges */}
      <div>
        <div className="relative h-48 w-full bg-stone-100 overflow-hidden">
          <img
            src={pkg.featuredImage}
            alt={pkg.title}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Destination Badge & Duration */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-stone-900/85 text-white backdrop-blur-xs">
              {pkg.destinationName}
            </span>
            {pkg.badge && (
              <span className="px-2 py-1 rounded-md text-[11px] font-bold bg-amber-400 text-stone-900">
                {pkg.badge}
              </span>
            )}
          </div>

          <div className="absolute top-2.5 right-2.5">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 text-stone-900 shadow-xs flex items-center gap-1">
              <Clock className="w-3 h-3 text-emerald-600" />
              {pkg.durationDays}D / {pkg.durationNights}N
            </span>
          </div>

          {/* Rating tag on bottom left */}
          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-white text-xs bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="font-bold">{pkg.rating}</span>
            <span className="text-[10px] text-stone-300">({pkg.reviewsCount})</span>
          </div>

          <div className="absolute bottom-2.5 right-2.5 text-[11px] text-stone-200 font-medium drop-shadow">
            {pkg.pickupDrop}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <div>
            <h3
              onClick={() => onViewDetails(pkg)}
              className="font-serif text-base sm:text-lg font-bold text-stone-900 hover:text-emerald-700 cursor-pointer line-clamp-1 transition-colors"
            >
              {pkg.title}
            </h3>
            <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
              {pkg.subtitle}
            </p>
          </div>

          {/* Route */}
          <div className="bg-stone-50 p-2 rounded-lg border border-stone-100 flex items-center gap-1.5 text-xs text-stone-600">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate font-medium">{pkg.route.join(' → ')}</span>
          </div>

          {/* Key Inclusions Row */}
          <div className="grid grid-cols-4 gap-1 text-[11px] text-stone-600 text-center border-y border-stone-100 py-2">
            <div className="flex flex-col items-center">
              <Bed className="w-3.5 h-3.5 text-emerald-600 mb-0.5" />
              <span>Hotel</span>
            </div>
            <div className="flex flex-col items-center">
              <Car className="w-3.5 h-3.5 text-emerald-600 mb-0.5" />
              <span>Private Cab</span>
            </div>
            <div className="flex flex-col items-center">
              <Utensils className="w-3.5 h-3.5 text-emerald-600 mb-0.5" />
              <span>Meals</span>
            </div>
            <div className="flex flex-col items-center">
              <Compass className="w-3.5 h-3.5 text-emerald-600 mb-0.5" />
              <span>Sightseeing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Normal Action Buttons */}
      <div className="p-4 pt-0">
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <span className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider block">
              Starting Price
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                ₹{pkg.pricePerPerson.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-stone-400 line-through">
                ₹{pkg.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-[10px] text-stone-500">per person (twin sharing)</span>
          </div>

          {discountPercent > 0 && (
            <span className="px-2 py-0.5 rounded text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200">
              Save {discountPercent}%
            </span>
          )}
        </div>

        {/* Normal Simple Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onViewDetails(pkg)}
            className="w-full py-2 px-2.5 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-stone-600" />
            <span>Itinerary</span>
          </button>

          <button
            onClick={handleWhatsAppBooking}
            className="w-full py-2 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
