import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Award,
  Zap,
  Clock,
  Heart,
  ChevronRight,
  Search,
  CheckCircle2,
  FileText,
  UserCheck,
  Tag,
  Activity,
  HeartHandshake,
  MessageSquare,
  ChevronDown,
  Star,
  Store,
  FileUp,
  PackageCheck,
  CreditCard,
  Pill,
  Sparkles,
  Baby,
  Stethoscope,
  Scissors,
  Home as HomeIcon,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import {
  businessInfo,
  whyChooseUsList,
  servicesList,
  categoriesList,
  trustFactors,
  workingProcessSteps,
  testimonialsList,
  faqList
} from '../data/pharmacyData';
import { NavPage } from '../types';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onOpenWhatsappOrder: () => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenWhatsappOrder,
  onOpenSearch
}) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-emerald-600" />;
      case 'Tag': return <Tag className="w-6 h-6 text-emerald-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-emerald-600" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-emerald-600" />;
      case 'Pill': return <Pill className="w-5 h-5 text-emerald-600" />;
      case 'Baby': return <Baby className="w-5 h-5 text-emerald-600" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-emerald-600" />;
      case 'Scissors': return <Scissors className="w-5 h-5 text-emerald-600" />;
      default: return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  const faqCategories = ['All', 'General', 'Prescription', 'Orders', 'Store'];

  const filteredFaqs = activeFaqCategory === 'All'
    ? faqList
    : faqList.filter(f => f.category === activeFaqCategory);

  return (
    <div className="space-y-12 pb-16">
      {/* ---------------- SECTION 1: BENTO GRID HERO & ACTION HUB ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Bento Hero Card (Span 8) */}
          <div className="md:col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 rounded-[32px] p-8 sm:p-10 relative overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-center min-h-[360px]">
            {/* Background Radial Glow Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/60 dark:bg-emerald-950/40 rounded-full blur-3xl -mr-20 -mt-20 opacity-70 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/60 dark:bg-blue-950/40 rounded-full blur-3xl -ml-10 -mb-10 opacity-70 pointer-events-none" />

            <div className="relative z-10 max-w-xl space-y-4">
              <span className="inline-block py-1 px-3.5 bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-300 rounded-full text-[11px] font-bold uppercase tracking-wider">
                Verified Healthcare Partner
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-[1.1] font-heading">
                Your Trusted Pharmacy <span className="text-[#0A8F6A]">in Kurtha</span>
              </h1>

              <p className="text-slate-500 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Providing 100% genuine medicines, healthcare products, baby care, and surgical supplies at affordable prices for your entire family in Kurtha, Bihar.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={onOpenWhatsappOrder}
                  className="bg-[#0A8F6A] hover:bg-emerald-700 text-white px-7 py-3.5 rounded-2xl font-bold shadow-lg shadow-emerald-200 dark:shadow-none hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span>WhatsApp Order</span>
                  <MessageCircle className="w-4 h-4" />
                </button>

                <a
                  href="https://maps.google.com/?q=Balaji+Mandir+Vidrohi+Bajar+Kurtha+Bihar+804421"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-6 py-3.5 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-sm text-center flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#0A8F6A]" /> Store Location
                </a>
              </div>
            </div>
          </div>

          {/* Instant Prescription Bento Card (Span 4) */}
          <div
            onClick={onOpenWhatsappOrder}
            className="md:col-span-6 lg:col-span-4 bg-[#0A8F6A] rounded-[32px] p-6 text-white flex flex-col justify-between shadow-xl shadow-emerald-900/10 cursor-pointer group hover:bg-[#087b5b] transition-colors min-h-[220px]"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                <FileUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-[10px] font-bold bg-white/10 px-3 py-1 rounded-full uppercase tracking-tighter">
                Fast Track
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold font-heading">Instant Prescription Upload</h3>
              <p className="text-emerald-50/80 text-xs leading-relaxed">
                Send your doctor prescription via WhatsApp for quick medicine matching & express pickup.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-bold text-white/90 group-hover:translate-x-1 transition-transform">
              <span>Click to Upload Prescription</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Our Categories Bento Card (Span 4) */}
          <div className="md:col-span-6 lg:col-span-4 bg-white dark:bg-slate-900 rounded-[32px] p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Our Categories</h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5 flex-1">
              <div onClick={onOpenSearch} className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-3 flex flex-col gap-0.5 cursor-pointer hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors">
                <span className="text-[10px] text-slate-400 font-bold uppercase">01</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">Medicines</span>
              </div>
              <div onClick={onOpenSearch} className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-3 flex flex-col gap-0.5 cursor-pointer hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors">
                <span className="text-[10px] text-slate-400 font-bold uppercase">02</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">Baby Care</span>
              </div>
              <div onClick={onOpenSearch} className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-3 flex flex-col gap-0.5 cursor-pointer hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors">
                <span className="text-[10px] text-slate-400 font-bold uppercase">03</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">Surgicals</span>
              </div>
              <div onClick={onOpenSearch} className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-3 flex flex-col gap-0.5 cursor-pointer hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors">
                <span className="text-[10px] text-slate-400 font-bold uppercase">04</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">Skincare</span>
              </div>
            </div>
          </div>

          {/* 100% Genuine Ribbon Bento Card (Span 4) */}
          <div className="md:col-span-6 lg:col-span-4 bg-blue-600 rounded-[32px] px-6 py-4 flex items-center justify-between text-white shadow-lg shadow-blue-200/50 dark:shadow-none">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-sm">100% Genuine Medicines</span>
            </div>
            <ShieldCheck className="w-5 h-5 text-blue-200" />
          </div>

          {/* Why Choose Us Bento Block (Span 4) */}
          <div className="md:col-span-6 lg:col-span-4 bg-white dark:bg-slate-900 rounded-[32px] p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Why Choose Us?</h3>
            <div className="space-y-2.5 flex-1">
              <div className="flex gap-2.5 items-center">
                <div className="text-[#0A8F6A]"><CheckCircle2 className="w-4 h-4" /></div>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-300">Certified Pharmacy Staff</p>
              </div>
              <div className="flex gap-2.5 items-center">
                <div className="text-[#0A8F6A]"><CheckCircle2 className="w-4 h-4" /></div>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-300">Competitive Local Pricing</p>
              </div>
              <div className="flex gap-2.5 items-center">
                <div className="text-[#0A8F6A]"><CheckCircle2 className="w-4 h-4" /></div>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-300">Fast Store Counter Service</p>
              </div>
              <div className="flex gap-2.5 items-center">
                <div className="text-[#0A8F6A]"><CheckCircle2 className="w-4 h-4" /></div>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-300">Trusted Local Partner</p>
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Quality Assurance</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>

          {/* Location & Hours Dark Bento Card (Span 8) */}
          <div className="md:col-span-12 lg:col-span-8 bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[220px]">
            <div className="relative z-10 space-y-4">
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em] mb-1 block">
                  Location & Hours
                </span>
                <h3 className="text-2xl font-bold mb-3 font-heading">Visit Our Store</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <div className="mt-0.5 text-emerald-400"><MapPin className="w-5 h-5" /></div>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      Balaji Mandir, Vidrohi Bajar,<br />Kurtha, Bihar 804421
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-0.5 text-emerald-400"><Clock className="w-5 h-5" /></div>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      Everyday: 8:00 AM - 10:00 PM<br />
                      <span className="text-amber-300 font-bold">⚡ Emergency call support available</span>
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Balaji+Mandir+Vidrohi+Bajar+Kurtha+Bihar+804421"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#0A8F6A] hover:bg-emerald-500 py-3.5 rounded-2xl font-bold text-white transition-colors flex items-center justify-center gap-2 text-xs shadow-md"
              >
                <span>Get Directions on Google Maps</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 2: WHY CHOOSE US ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400 bg-emerald-100/60 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Your Healthcare Is Our Highest Priority
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            We combine authentic high-grade pharmaceutical standards with dedicated customer care in Kurtha.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyChooseUsList.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-[32px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-[#0A8F6A]/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 flex items-center justify-center mb-4 group-hover:bg-[#0A8F6A] group-hover:text-white transition-colors">
                {getIconComponent(item.icon)}
              </div>
              <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SECTION 3: OUR SERVICES ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400 bg-emerald-50 dark:bg-slate-800 px-3 py-1 rounded-full">
                Complete Healthcare Range
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                Our Pharmacy Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                From chronic prescription medicine refills to baby essentials and surgical instruments.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0A8F6A] hover:text-emerald-700 dark:text-emerald-400 cursor-pointer"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-[28px] overflow-hidden border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="relative h-44 overflow-hidden bg-slate-200">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 backdrop-blur-md">
                    {service.title}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    {service.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8F6A] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenWhatsappOrder}
                    className="w-full py-2.5 rounded-xl bg-white dark:bg-slate-700 hover:bg-[#0A8F6A] hover:text-white text-[#0A8F6A] dark:text-emerald-300 font-bold text-xs transition-colors border border-slate-200 dark:border-slate-600 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Order This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: FEATURED CATEGORIES ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full">
            Browse By Category
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            Featured Medical Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categoriesList.map((cat) => (
            <div
              key={cat.id}
              onClick={onOpenSearch}
              className="p-4 rounded-[28px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-[#0A8F6A]/40 transition-all text-center space-y-2 cursor-pointer group"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl overflow-hidden bg-slate-100 relative">
                <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#0A8F6A] transition-colors">
                  {cat.name}
                </h3>
                <span className="text-[10px] text-slate-400 font-medium">
                  {cat.itemCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SECTION 5: WHY CUSTOMERS TRUST US ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="bg-[#0A8F6A] rounded-[32px] p-8 sm:p-12 text-white shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-100 bg-white/10 px-3 py-1 rounded-full">
              Local Commitment
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              Why Customers Trust Kurtha Medical
            </h2>
            <p className="text-xs text-emerald-100">
              Balaji Mandir, Vidrohi Bajar, Kurtha, Bihar 804421
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustFactors.map((factor, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-white/20 text-white flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-base font-bold font-heading text-white">
                  {factor.title}
                </h3>
                <p className="text-xs text-emerald-50/90 leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6: WORKING PROCESS ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            How To Get Your Medicines
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workingProcessSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[32px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold font-heading text-[#0A8F6A] dark:text-emerald-400">
                  {step.step}
                </span>
                <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-[#0A8F6A] flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SECTION 7: TESTIMONIALS ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400 bg-emerald-50 dark:bg-slate-800 px-3 py-1 rounded-full">
              Verified Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              What Our Customers Say
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Trusted by families across Vidrohi Bajar, Kurtha & neighboring villages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonialsList.map((review) => (
              <div
                key={review.id}
                className="p-5 rounded-[24px] bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    {review.verifiedBadge && (
                      <span className="text-[9px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Verified Customer
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-8 h-8 rounded-full object-cover border border-[#0A8F6A]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {review.name}
                    </h4>
                    <p className="text-[10px] text-slate-400">
                      {review.role} • {review.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 8: FAQ SECTION ---------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-4">
        <div className="text-center space-y-2 mb-8">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full">
            Have Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-4">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFaqCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeFaqCategory === cat
                  ? 'bg-[#0A8F6A] text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              {cat} FAQs
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-2.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 hover:text-[#0A8F6A] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#0A8F6A] flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#0A8F6A]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/60 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- SECTION 9: GOOGLE MAP & LOCATION ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A8F6A] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Find Us In Kurtha
            </span>
            <h2 className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
              Visit Kurtha Medical Store
            </h2>

            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A8F6A] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-100 block text-xs">Store Address:</strong>
                  <p>{businessInfo.location}</p>
                  <p className="text-[#0A8F6A] font-medium">Landmark: {businessInfo.landmark}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#0A8F6A] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-100 block text-xs">Direct Phone / WhatsApp:</strong>
                  <p className="text-slate-800 dark:text-slate-100 font-bold">{businessInfo.phoneDisplay}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#0A8F6A] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-100 block text-xs">Working Hours:</strong>
                  <p>{businessInfo.timingWeekdays}</p>
                  <p>{businessInfo.timingSunday}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Balaji+Mandir+Vidrohi+Bajar+Kurtha+Bihar+804421"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#0A8F6A] hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm"
              >
                <MapPin className="w-4 h-4" /> Open Directions on Google Maps
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-72 rounded-[24px] overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner bg-slate-100 dark:bg-slate-800">
            <iframe
              title="Kurtha Medical Location Map"
              src="https://maps.google.com/maps?q=Balaji+Mandir+Vidrohi+Bajar+Kurtha+Bihar+804421&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 10: CONTACT CTA BANNER ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="rounded-[32px] bg-[#0A8F6A] text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Need Genuine Medicines Urgently?
            </h2>
            <p className="text-xs text-emerald-100 max-w-xl">
              Call us directly or send your doctor prescription on WhatsApp for quick confirmation & express store pickup!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-900 hover:bg-emerald-50 font-bold text-xs shadow-md transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#0A8F6A]" /> Call {businessInfo.phoneDisplay}
            </a>

            <button
              onClick={onOpenWhatsappOrder}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-transform hover:scale-105 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp Order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
