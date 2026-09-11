import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DestinationShowcase } from './components/DestinationShowcase';
import { PackageCard } from './components/PackageCard';
import { PackageDetailModal } from './components/PackageDetailModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';

import { tourPackagesData } from './data/packagesData';
import { DestinationId, FilterState, TourPackage } from './types';
import { MessageSquare, MapPin, RotateCcw } from 'lucide-react';

export default function App() {
  // Main Filter State
  const [filterState, setFilterState] = useState<FilterState>({
    destination: 'all',
    duration: 'all',
    category: 'all',
    maxBudget: 100000,
    searchQuery: '',
  });

  // Sort State
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'duration'>('featured');

  // Package Detail Modal State
  const [activePackage, setActivePackage] = useState<TourPackage | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);

  const handleFilterUpdate = (updates: Partial<FilterState>) => {
    setFilterState((prev) => ({ ...prev, ...updates }));
  };

  const handleDestinationSelect = (dest: 'all' | DestinationId) => {
    setFilterState((prev) => ({ ...prev, destination: dest }));
  };

  const handleResetFilters = () => {
    setFilterState({
      destination: 'all',
      duration: 'all',
      category: 'all',
      maxBudget: 100000,
      searchQuery: '',
    });
  };

  const handleOpenDetails = (pkg: TourPackage) => {
    setActivePackage(pkg);
    setIsDetailModalOpen(true);
  };

  // Filtered & Sorted Packages
  const filteredPackages = useMemo(() => {
    return tourPackagesData
      .filter((pkg) => {
        if (filterState.destination !== 'all' && pkg.destination !== filterState.destination) {
          return false;
        }

        if (filterState.searchQuery.trim() !== '') {
          const q = filterState.searchQuery.toLowerCase().trim();
          const matchTitle = pkg.title.toLowerCase().includes(q);
          const matchSubtitle = pkg.subtitle.toLowerCase().includes(q);
          const matchDest = pkg.destinationName.toLowerCase().includes(q);
          const matchRoute = pkg.route.some((r) => r.toLowerCase().includes(q));
          if (!matchTitle && !matchSubtitle && !matchDest && !matchRoute) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.pricePerPerson - b.pricePerPerson;
        if (sortBy === 'price-desc') return b.pricePerPerson - a.pricePerPerson;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'duration') return b.durationDays - a.durationDays;
        return 0;
      });
  }, [filterState, sortBy]);

  // Destination Counts
  const destinationCounts = useMemo(() => {
    const counts: Record<string, number> = { all: tourPackagesData.length };
    tourPackagesData.forEach((p) => {
      counts[p.destination] = (counts[p.destination] || 0) + 1;
    });
    return counts;
  }, []);

  const destinationTabs: { id: 'all' | DestinationId; label: string }[] = [
    { id: 'all', label: 'All Packages' },
    { id: 'spiti', label: 'Spiti Valley' },
    { id: 'ladakh', label: 'Leh Ladakh' },
    { id: 'uttarakhand', label: 'Uttarakhand' },
    { id: 'himachal', label: 'Himachal' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900">
      {/* 1. Header Navigation */}
      <Navbar
        selectedDestination={filterState.destination}
        onSelectDestination={handleDestinationSelect}
      />

      {/* 2. Hero Banner with Quick Search */}
      <HeroSection
        filterState={filterState}
        onFilterChange={handleFilterUpdate}
        onSelectDestination={handleDestinationSelect}
        totalPackagesCount={filteredPackages.length}
      />

      {/* 3. Destination Showcase */}
      <DestinationShowcase
        selectedDestination={filterState.destination}
        onSelectDestination={handleDestinationSelect}
      />

      {/* 4. Packages Section */}
      <main id="packages-section" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-stone-200">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              {filterState.destination === 'all'
                ? 'All Tour Packages'
                : `${destinationTabs.find((d) => d.id === filterState.destination)?.label} Tour Packages`}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              Showing {filteredPackages.length} handcrafted itineraries with private cab & verified hotels
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-stone-800 focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured / Best</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>

        {/* Destination Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6">
          {destinationTabs.map((tab) => {
            const isSelected = filterState.destination === tab.id;
            const count = destinationCounts[tab.id] || 0;
            return (
              <button
                key={tab.id}
                onClick={() => handleDestinationSelect(tab.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-emerald-500 text-stone-950 font-bold' : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Query Active Reset Bar */}
        {filterState.searchQuery && (
          <div className="mb-4 flex items-center justify-between bg-white border border-stone-200 rounded-lg p-2.5 text-xs">
            <span className="text-stone-600">
              Results for: <strong className="text-stone-900">"{filterState.searchQuery}"</strong>
            </span>
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1 text-rose-600 font-semibold hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear Search</span>
            </button>
          </div>
        )}

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onViewDetails={handleOpenDetails}
                onQuickBook={handleOpenDetails}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-stone-200 p-8 text-center max-w-md mx-auto my-8">
            <MapPin className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <h3 className="font-serif text-base font-bold text-stone-900">
              No packages found
            </h3>
            <p className="text-xs text-stone-500 mt-1 mb-4">
              We couldn't find any packages matching your search. Try another destination.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold cursor-pointer"
            >
              Show All Packages
            </button>
          </div>
        )}
      </main>

      {/* 5. Why Choose Us (Simple 4 pillars) */}
      <WhyChooseUs />

      {/* 6. Footer */}
      <Footer
        onSelectDestination={handleDestinationSelect}
      />

      {/* Package Detail Modal (Day-wise Itinerary & Inclusions) */}
      <PackageDetailModal
        pkg={activePackage}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
      />

      {/* Floating Bottom Quick Contact Pill for Mobile */}
      <div className="sm:hidden fixed bottom-4 right-4 z-30 flex items-center gap-2">
        <a
          href="tel:8178187049"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-900 text-white font-bold text-xs shadow-lg active:scale-95 border border-stone-700"
          aria-label="Call TRIPZOGO"
        >
          📞
        </a>
        <a
          href="https://wa.me/918178187049?text=Hi%20TRIPZOGO%2C%20I%20am%20looking%20for%20a%20tour%20package."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs shadow-lg active:scale-95"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
