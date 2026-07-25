import React, { useState } from 'react';
import {
  Pill,
  ShoppingBag,
  Sparkles,
  Baby,
  Heart,
  Activity,
  Stethoscope,
  Cross,
  Scissors,
  Cpu,
  Shield,
  Home as HomeIcon,
  CheckCircle2,
  MessageCircle,
  Phone,
  Search,
  Filter
} from 'lucide-react';
import { servicesList, businessInfo } from '../data/pharmacyData';

interface ServicesPageProps {
  onOpenWhatsappOrder: () => void;
  onSelectServiceForOrder: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenWhatsappOrder,
  onSelectServiceForOrder
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = servicesList.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
            Dedicated Healthcare Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Our Medical & Pharmacy Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Kurtha Medical provides authentic prescription medicines, baby care products, health supplements, blood pressure monitors, and surgical dressings in Kurtha, Bihar.
          </p>

          {/* Search bar inside services */}
          <div className="max-w-xl pt-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search services e.g. diabetic care, baby care, surgical..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md">
                    {service.title}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                      Key Service Highlights:
                    </span>
                    {service.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onSelectServiceForOrder(service.title)}
                  className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" /> Order {service.title} via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Call Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold font-heading">Need Urgent Prescription Assistance?</h3>
            <p className="text-xs text-slate-400">Our pharmacists in Kurtha are available on call to confirm stock & dosage details.</p>
          </div>
          <a
            href={`tel:${businessInfo.phoneRaw}`}
            className="px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-lg flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call {businessInfo.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
};
