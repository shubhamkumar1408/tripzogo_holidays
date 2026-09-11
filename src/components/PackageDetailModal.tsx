import React, { useState } from 'react';
import { X, Clock, MapPin, Check, Bed, Car, Utensils, Send, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';
import { TourPackage } from '../types';

interface PackageDetailModalProps {
  pkg: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'details' | 'book';
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !pkg) return null;

  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'hotels'>('itinerary');
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [travelDate, setTravelDate] = useState<string>('');
  const [adultsCount, setAdultsCount] = useState<number>(2);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello TRIPZOGO, I want to book/inquire about:\n` +
      `Package: ${pkg.title} (${pkg.durationDays}D/${pkg.durationNights}N)\n` +
      `Price: ₹${pkg.pricePerPerson.toLocaleString('en-IN')} per person\n` +
      `Travelers: ${adultsCount} Adults\n` +
      `Date of Travel: ${travelDate || 'Flexible'}\n` +
      `Name: ${customerName || 'Traveler'}\n` +
      `Phone: ${phone || 'Not specified'}\n` +
      `Please provide the best discounted quote and hotel details.`
    );
    window.open(`https://wa.me/918178187049?text=${text}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150">
      <div className="relative bg-white w-full max-w-3xl rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-stone-900 text-white p-4 sm:p-5 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider">
                {pkg.destinationName}
              </span>
              <span className="text-stone-300 text-xs flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                {pkg.durationDays} Days / {pkg.durationNights} Nights
              </span>
            </div>
            <h2 className="font-serif text-lg sm:text-2xl font-bold text-white">
              {pkg.title}
            </h2>
            <p className="text-stone-400 text-xs mt-0.5">
              Pickup/Drop: {pkg.pickupDrop}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Route Bar */}
        <div className="bg-stone-100 border-b border-stone-200 px-4 py-2 text-xs text-stone-700 flex items-center gap-1.5 overflow-x-auto">
          <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-semibold text-stone-900 shrink-0">Route:</span>
          <span className="font-medium text-stone-600">{pkg.route.join(' → ')}</span>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-stone-200 bg-stone-50 px-4">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-2.5 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'itinerary'
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            Day-by-Day Itinerary ({pkg.itinerary.length} Days)
          </button>
          <button
            onClick={() => setActiveTab('inclusions')}
            className={`py-2.5 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'inclusions'
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            Inclusions & Exclusions
          </button>
          <button
            onClick={() => setActiveTab('hotels')}
            className={`py-2.5 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'hotels'
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            Hotels
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* Tab 1: Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              {pkg.itinerary.map((day) => (
                <div
                  key={day.day}
                  className="bg-stone-50 rounded-xl p-3.5 sm:p-4 border border-stone-200/80"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded bg-stone-900 text-white text-xs font-bold">
                      Day {day.day}
                    </span>
                    <span className="text-xs font-semibold text-stone-700">
                      Stay: <strong className="text-stone-900">{day.stayCity}</strong> | Meals: {day.mealsIncluded}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-stone-900 mb-1">
                    {day.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {day.description}
                  </p>

                  {day.highlights && day.highlights.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {day.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-white border border-stone-200 px-2 py-0.5 rounded text-stone-700"
                        >
                          • {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-200">
                <h4 className="text-sm font-bold text-emerald-900 mb-3 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-700" />
                  What is Included
                </h4>
                <ul className="space-y-2 text-xs text-stone-700">
                  {pkg.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-200">
                <h4 className="text-sm font-bold text-rose-900 mb-3 flex items-center gap-1.5">
                  <X className="w-4 h-4 text-rose-600" />
                  What is Excluded
                </h4>
                <ul className="space-y-2 text-xs text-stone-700">
                  {pkg.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Hotel options */}
          {activeTab === 'hotels' && (
            <div className="space-y-3">
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-xs font-bold text-stone-900 block mb-1">
                  ⭐ Standard 3-Star Hotels
                </span>
                <p className="text-xs text-stone-600">
                  {pkg.hotelOptions.standard}
                </p>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-xs font-bold text-stone-900 block mb-1">
                  ⭐⭐ Deluxe 4-Star Hotels / Premium Resorts
                </span>
                <p className="text-xs text-stone-600">
                  {pkg.hotelOptions.deluxe}
                </p>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-xs font-bold text-stone-900 block mb-1">
                  ⭐⭐⭐ Luxury Heritage / Boutique Mountain Stays
                </span>
                <p className="text-xs text-stone-600">
                  {pkg.hotelOptions.luxury}
                </p>
              </div>
            </div>
          )}

          {/* Simple Booking & Inquiry Section */}
          <div className="mt-6 pt-4 border-t border-stone-200 bg-stone-50 p-4 rounded-xl">
            <h4 className="font-serif text-base font-bold text-stone-900 mb-1">
              Book or Request a Free Quote
            </h4>
            <p className="text-xs text-stone-600 mb-3">
              Starting from <strong className="text-stone-900 text-sm">₹{pkg.pricePerPerson.toLocaleString('en-IN')}</strong> per person. Fill your details or click WhatsApp for immediate quotation.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-100 text-emerald-900 p-4 rounded-lg text-center space-y-2">
                <div className="flex items-center justify-center gap-1.5 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <span>Enquiry Received!</span>
                </div>
                <p className="text-xs text-stone-700">
                  Thank you <strong>{customerName}</strong>. Our tour specialist will contact you on <strong>{phone}</strong> shortly with your customized itinerary.
                </p>
                <button
                  onClick={handleWhatsAppSend}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Connect Directly on WhatsApp</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      WhatsApp / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Travel Date / Month
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 15 Oct or Diwali"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 py-2.5 px-4 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Send Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-1/2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-100 border-t border-stone-200 px-4 py-3 flex items-center justify-between">
          <div className="text-xs text-stone-600">
            Need help? Call us at <strong className="text-stone-900">8178187049</strong> (TRIPZOGO, Noida Sec 15)
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
