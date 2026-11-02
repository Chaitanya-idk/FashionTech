import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Shield } from 'lucide-react';

export default function CustomFitModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'New York',
    fittingType: 'Private Atelier Consultation',
    preferredBase: 'The Sovereign Column Dress',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-[#E8E2D8] p-6 sm:p-10 shadow-2xl z-10 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#FAF8F5] text-[#666057] hover:text-[#1A1815] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF8F5] border border-[#B89047] flex items-center justify-center text-[#B89047]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B89047] font-bold">
                Atelier Appointment Confirmed
              </span>
              <h3 className="font-serif text-3xl text-[#1A1815] font-bold">
                Welcome to ConvertElle Private Service
              </h3>
              <p className="text-sm text-[#4A453F] font-light max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our Senior Stylist in <strong>{formData.city}</strong> will contact you within 24 hours to schedule your bespoke 3D fitting session.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] max-w-sm mx-auto text-left space-y-1 text-xs font-mono text-[#4A453F]">
              <div>Appointment: <span className="text-[#1A1815] font-bold">{formData.fittingType}</span></div>
              <div>Foundation: <span className="text-[#B89047] font-bold">{formData.preferredBase}</span></div>
              <div>Protocol: <span className="text-emerald-700 font-bold">VIP Priority</span></div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 rounded-full bg-[#1A1815] text-white font-semibold text-xs uppercase tracking-widest hover:bg-[#33302B] transition-colors"
            >
              Return to Collection
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#DDD6CA] bg-[#FAF8F5] text-[10px] uppercase font-mono tracking-widest text-[#B89047] font-bold">
                <Sparkles className="w-3 h-3" />
                <span>Custom Fit Concierge</span>
              </div>
              <h3 className="font-serif text-3xl text-[#1A1815] font-bold">
                Book a Bespoke Fitting Consultation
              </h3>
              <p className="text-xs text-[#666057] font-light leading-relaxed">
                Experience precision millimeter pattern engineering tailored to your posture and proportions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1815] font-semibold block mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Evelyn Montgomery"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD6CA] text-[#1A1815] text-sm focus:border-[#1A1815] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1815] font-semibold block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="evelyn@montgomery.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD6CA] text-[#1A1815] text-sm focus:border-[#1A1815] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1815] font-semibold block mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 234-5678"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD6CA] text-[#1A1815] text-sm focus:border-[#1A1815] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1815] font-semibold block mb-1">
                    Atelier Hub *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD6CA] text-[#1A1815] text-sm focus:border-[#1A1815] focus:outline-none"
                  >
                    <option value="New York">New York — Manhattan Atelier</option>
                    <option value="Paris">Paris — Rue du Faubourg Saint-Honoré</option>
                    <option value="London">London — Mayfair Salon</option>
                    <option value="Milan">Milan — Via Montenapoleone</option>
                    <option value="Dubai">Dubai — DIFC Private Suite</option>
                    <option value="Tokyo">Tokyo — Ginza Atelier</option>
                    <option value="Remote 3D Scan">Remote VIP — Digital LiDAR 3D Fitting</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#1A1815] font-semibold block mb-1">
                  Preferred Base Garment
                </label>
                <select
                  value={formData.preferredBase}
                  onChange={(e) => setFormData({ ...formData, preferredBase: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD6CA] text-[#1A1815] text-sm focus:border-[#1A1815] focus:outline-none"
                >
                  <option value="The Sovereign Column Dress">The Sovereign Column Dress</option>
                  <option value="The Metamorph Jumpsuit">The Metamorph Jumpsuit</option>
                  <option value="The Power Contour Duo">The Power Contour Duo</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#1A1815] hover:bg-[#33302B] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all shadow-md"
            >
              Confirm Atelier Consultation
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#666057] font-mono text-center">
              <Shield className="w-3.5 h-3.5 text-[#B89047]" />
              <span>Complimentary Initial Consultation • Dedicated Stylist Assigned</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
