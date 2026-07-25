import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Search,
  Moon,
  Sun,
  Menu,
  X,
  MapPin,
  Clock,
  Cross,
  ChevronRight,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { businessInfo } from '../data/pharmacyData';
import { NavPage } from '../types';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenSearch: () => void;
  onOpenWhatsappOrder: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenWhatsappOrder,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#0A8F6A] dark:text-emerald-400 font-bold">
              <MapPin className="w-3.5 h-3.5" />
              {businessInfo.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {businessInfo.timingWeekdays}
            </span>
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Genuine Medicines Guaranteed
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-emerald-400"
            >
              <Phone className="w-3.5 h-3.5" /> Call: {businessInfo.phoneDisplay}
            </a>
            <span className="text-slate-700">|</span>
            <button
              onClick={onOpenWhatsappOrder}
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 font-medium text-emerald-400 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Order
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar - Bento Style */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-3 pb-2">
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 border border-white/80 dark:border-slate-800 shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-800/80 flex items-center justify-between gap-4">
          {/* Logo & Brand Name */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-[#0A8F6A] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#0A8F6A]/20 group-hover:scale-105 transition-transform">
              <Cross className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                Kurtha Bazar
              </h1>
              <p className="text-[10px] font-bold text-[#0A8F6A] dark:text-emerald-400 uppercase tracking-widest mt-1">
                Kurtha Medical Store
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-xl text-sm transition-all cursor-pointer ${
                  currentPage === item.id
                    ? 'text-[#0A8F6A] font-bold underline underline-offset-8 decoration-2'
                    : 'text-slate-500 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-emerald-400 font-medium'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 hover:text-[#0A8F6A] dark:hover:bg-emerald-950/60 transition-colors flex items-center gap-2 text-xs font-semibold cursor-pointer"
              title="Search Medicines"
              aria-label="Search Medicines"
            >
              <Search className="w-4 h-4 text-[#0A8F6A]" />
              <span className="hidden xl:inline">Search</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              title="Toggle Dark Mode"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            <div className="hidden sm:flex flex-col items-end mr-1 text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400">Emergency Call</span>
              <a href={`tel:${businessInfo.phoneRaw}`} className="text-xs font-bold text-slate-900 dark:text-white hover:text-[#0A8F6A]">
                {businessInfo.phoneDisplay}
              </a>
            </div>

            {/* Order Now Button */}
            <button
              onClick={onOpenWhatsappOrder}
              className="bg-slate-900 hover:bg-slate-800 dark:bg-[#0A8F6A] dark:hover:bg-emerald-600 text-white px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" /> Order Now
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xl p-6 space-y-4 animate-fade-in z-50">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-sm transition-colors ${
                  currentPage === item.id
                    ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
            <button
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm"
            >
              <Search className="w-4 h-4" /> Search Medicine Inventory
            </button>

            <button
              onClick={() => {
                onOpenWhatsappOrder();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Prescription Order
            </button>

            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 text-white font-semibold text-sm shadow-md"
            >
              <Phone className="w-4 h-4" /> Call Store ({businessInfo.phoneDisplay})
            </a>
          </div>

          <div className="text-center text-xs text-slate-400 pt-2">
            📍 {businessInfo.location}
          </div>
        </div>
      )}
    </header>
  );
};
