import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Traveler Reviews
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-1">
            Real feedback from our guests who explored India with us
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviewsData.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-50 rounded-xl p-4 border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">{rev.date}</span>
                </div>

                <span className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded mb-2">
                  {rev.tripTitle}
                </span>

                <p className="text-xs text-stone-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200 flex items-center gap-2.5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-8 h-8 rounded-full object-cover border border-stone-300"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{rev.name}</h4>
                  <p className="text-[10px] text-stone-500 flex items-center gap-0.5">
                    <MapPin className="w-2.5 h-2.5 text-stone-400" />
                    {rev.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
