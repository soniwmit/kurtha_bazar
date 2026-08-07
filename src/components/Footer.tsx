import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Cross,
  ChevronRight,
  ShieldCheck,
  Heart,
  FileText,
  AlertCircle
} from 'lucide-react';
import { businessInfo } from '../data/pharmacyData';
import { NavPage } from '../types';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenWhatsappOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWhatsappOrder }) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Business Identity & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <Cross className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Kurtha Medical
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  {businessInfo.subtitle} • Pharmacy Store
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {businessInfo.tagline}. Sourcing 100% genuine pharmaceuticals, baby care essentials, surgical equipment, and health supplements at affordable prices in Vidrohi Bajar, Kurtha.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="flex items-center gap-2 text-slate-200 hover:text-emerald-400 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                Phone: {businessInfo.phoneDisplay}
              </a>
              <button
                onClick={onOpenWhatsappOrder}
                className="flex items-center gap-2 text-slate-200 hover:text-emerald-400 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                WhatsApp: {businessInfo.phoneDisplay}
              </button>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-emerald-500" />
                Email: {businessInfo.email}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Our Pharmacy' },
                { id: 'services', label: 'Medical Services' },
                { id: 'gallery', label: 'Store Photo Gallery' },
                { id: 'testimonials', label: 'Customer Reviews' },
                { id: 'faq', label: 'Pharmacy FAQs' },
                { id: 'contact', label: 'Contact & Directions' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id as NavPage)}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-500" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-2.5">
              Featured Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Prescription Medicines',
                'General & OTC Medicines',
                'Health & Vitamin Supplements',
                'Baby Care & Diaper Essentials',
                'Diabetic & BP Monitoring Devices',
                'Surgical Items & Bandages',
                'Orthopedic Supports & Belts'
              ].map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-500" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Store Timing */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-2.5">
              Store Location & Hours
            </h4>

            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{businessInfo.location}</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{businessInfo.timingWeekdays}</p>
                  <p>{businessInfo.timingSunday}</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Balaji+Mandir+Vidrohi+Bajar+Kurtha+Bihar+804421"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-md"
            >
              <MapPin className="w-3.5 h-3.5" /> Open in Google Maps
            </a>
          </div>
        </div>

        {/* Footer Bottom Legal & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Kurtha Medical (Kurtha bazar). All rights reserved. |{' '}
           <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => setActiveModal('privacy')} className="hover:text-slate-300 underline cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => setActiveModal('terms')} className="hover:text-slate-300 underline cursor-pointer">
              Terms & Conditions
            </button>
            <button onClick={() => setActiveModal('disclaimer')} className="hover:text-slate-300 underline cursor-pointer">
              Medical Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-800 text-slate-100 p-6 md:p-8 rounded-3xl max-w-xl w-full border border-slate-700 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <h3 className="text-lg font-bold font-heading capitalize text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                {activeModal === 'privacy' && 'Privacy Policy'}
                {activeModal === 'terms' && 'Terms & Conditions'}
                {activeModal === 'disclaimer' && 'Medical Disclaimer'}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-white text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="text-xs leading-relaxed space-y-2 text-slate-300 max-h-60 overflow-y-auto pr-2">
              {activeModal === 'privacy' && (
                <p>
                  At Kurtha Medical, we value your privacy. Prescription images and contact details submitted via WhatsApp or our order forms are strictly used to fulfill your specific medicine orders and provide healthcare support. We never share or sell personal information to third parties.
                </p>
              )}
              {activeModal === 'terms' && (
                <p>
                  All prescription medicine sales at Kurtha Medical are subject to valid prescription verification by our licensed pharmacist in accordance with Drugs & Cosmetics Act regulations. Stock availability and prices are subject to physical store verification at Balaji Mandir, Vidrohi Bajar, Kurtha.
                </p>
              )}
              {activeModal === 'disclaimer' && (
                <p>
                  Information provided on this website is for informational purposes only and does not constitute medical advice or doctor consultation. Always consult a qualified physician or healthcare provider for medical diagnosis and prescription guidance before consuming any pharmaceutical drug.
                </p>
              )}
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
