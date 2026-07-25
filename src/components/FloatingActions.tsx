import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronUp, AlertCircle } from 'lucide-react';
import { businessInfo } from '../data/pharmacyData';

interface FloatingActionsProps {
  onOpenWhatsappOrder: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsappOrder }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-slate-800/90 hover:bg-slate-900 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 border border-slate-700/50 cursor-pointer"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Call Now Button */}
        <a
          href={`tel:${businessInfo.phoneRaw}`}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-600/30 transition-all duration-300 hover:scale-105 border border-sky-400/30"
          title="Call Kurtha Medical"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="hidden sm:inline text-xs font-semibold whitespace-nowrap">
            Call: {businessInfo.phoneDisplay}
          </span>
        </a>

        {/* WhatsApp Order Button */}
        <button
          onClick={onOpenWhatsappOrder}
          className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/35 transition-all duration-300 hover:scale-105 border border-emerald-400/30 cursor-pointer"
          title="WhatsApp Medicine Order"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-bold whitespace-nowrap">
            WhatsApp Order
          </span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Emergency Contact Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-slate-900/95 backdrop-blur-md text-white border-t border-slate-800 p-2 px-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-emerald-400 font-medium">
          <AlertCircle className="w-4 h-4 flex-shrink-0 animate-pulse" />
          <span className="truncate">Kurtha Medical Store - 06378171368</span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={`tel:${businessInfo.phoneRaw}`}
            className="px-3 py-1.5 rounded-lg bg-sky-600 text-white font-bold flex items-center gap-1 text-[11px]"
          >
            <Phone className="w-3 h-3" /> Call
          </a>
          <button
            onClick={onOpenWhatsappOrder}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold flex items-center gap-1 text-[11px]"
          >
            <MessageCircle className="w-3 h-3" /> Order
          </button>
        </div>
      </div>
    </>
  );
};
