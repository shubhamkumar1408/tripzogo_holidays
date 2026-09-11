import React, { useState } from 'react';
import { X, Sparkles, MapPin, CheckCircle2, MessageSquare, Send, Calendar, Users, IndianRupee } from 'lucide-react';
import { DestinationId } from '../types';

interface CustomTripModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomTripModal: React.FC<CustomTripModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedDestinations, setSelectedDestinations] = useState<DestinationId[]>(['spiti']);
  const [duration, setDuration] = useState<string>('5-7 days');
  const [travelers, setTravelers] = useState<string>('2 Adults (Couple)');
  const [budgetTier, setBudgetTier] = useState<string>('Comfortable (₹15k - ₹25k / person)');
  const [month, setMonth] = useState<string>('Upcoming Months');
  const [tripTheme, setTripTheme] = useState<string>('Holiday / Adventure');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const destinationOptions: { id: DestinationId; label: string }[] = [
    { id: 'spiti', label: 'Spiti Valley' },
    { id: 'ladakh', label: 'Leh Ladakh' },
    { id: 'uttarakhand', label: 'Uttarakhand' },
    { id: 'himachal', label: 'Himachal Pradesh' },
  ];

  const toggleDestination = (id: DestinationId) => {
    if (selectedDestinations.includes(id)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter((d) => d !== id));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, id]);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const destString = selectedDestinations.map(d => d.toUpperCase()).join(', ');
    const text = encodeURIComponent(
      `Hello TRIPZOGO, I need a Custom Tour Itinerary!\n` +
      `Destinations: ${destString}\n` +
      `Duration: ${duration}\n` +
      `Travelers: ${travelers}\n` +
      `Estimated Budget: ${budgetTier}\n` +
      `Month: ${month}\n` +
      `Theme: ${tripTheme}\n` +
      `Name: ${name || 'Traveler'}\n` +
      `Notes: ${notes || 'Standard recommendations'}`
    );
    window.open(`https://wa.me/918178187049?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        id="custom-trip-modal-box"
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="bg-stone-900 text-white p-5 sm:p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tailor-Made Tour Planner</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
            Design Your Custom Domestic Holiday
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm mt-1">
            Choose your destinations, dates, and preferences. Our travel designer will craft an optimized itinerary within 1 hour.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-stone-900">
                  Custom Request Received!
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-md mx-auto">
                  Thank you <strong className="text-stone-900">{name}</strong>. We are compiling your personalized itinerary for <strong className="text-stone-900">{selectedDestinations.join(', ')}</strong>. A trip specialist will connect on WhatsApp ({phone}) shortly.
                </p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Direct via WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleCustomSubmit} className="space-y-4">
              {/* Step 1: Select destinations */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  1. Which destination(s) do you want to explore?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {destinationOptions.map((d) => {
                    const isChecked = selectedDestinations.includes(d.id);
                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => toggleDestination(d.id)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border flex items-center justify-between transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <MapPin className={`w-3.5 h-3.5 ${isChecked ? 'text-emerald-600' : 'text-stone-400'}`} />
                          <span>{d.label}</span>
                        </div>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Trip Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="3-4 days (Weekend)">3 - 4 Days (Short Getaway)</option>
                    <option value="5-7 days (Classic)">5 - 7 Days (Most Popular)</option>
                    <option value="8-10 days (Grand)">8 - 10 Days (Complete Circuit)</option>
                    <option value="11+ days (In-depth)">11+ Days (Multi-state)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Travelers Composition
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="2 Adults (Couple / Honeymoon)">2 Adults (Couple / Honeymoon)</option>
                    <option value="Family with Kids (3-4 Persons)">Family with Kids (3-4 Persons)</option>
                    <option value="Small Group of Friends (4-6 Persons)">Small Group of Friends (4-6 Persons)</option>
                    <option value="Large Group (7+ Persons)">Large Group (7+ Persons)</option>
                    <option value="Solo Traveler">Solo Traveler</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Preferred Travel Month
                  </label>
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="September 2026">September 2026</option>
                    <option value="October 2026">October 2026 (Festive / Autumn)</option>
                    <option value="November 2026">November 2026</option>
                    <option value="December 2026">December 2026 (Snow Season)</option>
                    <option value="January - March 2027">January - March 2027</option>
                    <option value="Summer 2027">Summer 2027</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Trip Style
                  </label>
                  <select
                    value={tripTheme}
                    onChange={(e) => setTripTheme(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="Honeymoon / Romantic">Honeymoon & Romantic Retreat</option>
                    <option value="Family Holiday (Relaxed)">Family Holiday (Relaxed Pace)</option>
                    <option value="High Altitude Road Trip / 4x4">High Altitude Road Trip / 4x4</option>
                    <option value="Spiritual / Pilgrimage">Spiritual & Temple Yatra</option>
                    <option value="Luxury Heritage Experience">Luxury & Heritage Stays</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Contact details */}
              <div className="pt-2 border-t border-stone-200">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  2. Where should we send your custom plan?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anjali Gupta"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="mt-2.5">
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Special Wishes or Specific Spots (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Want houseboat stay in Srinagar + Gulmarg Gondola Phase 2, or Chandratal camping in Spiti..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
                  />
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  id="custom-plan-submit-btn"
                  className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 active:scale-98 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Request My Custom Itinerary</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
