import React from 'react';
import {
  ShieldCheck,
  Heart,
  Award,
  Users,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Building,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { businessInfo, galleryList } from '../data/pharmacyData';

interface AboutPageProps {
  onOpenWhatsappOrder: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenWhatsappOrder }) => {
  const timelineEvents = [
    {
      year: "2018",
      title: "Establishment at Vidrohi Bajar",
      desc: "Founded near Balaji Mandir, Kurtha with a promise to bring authentic, high-quality pharmaceutical medicines to local residents."
    },
    {
      year: "2020",
      title: "Cold Chain & Surgical Expansion",
      desc: "Upgraded with dedicated medical refrigeration for insulin/vaccines and launched complete surgical & first aid supplies."
    },
    {
      year: "2022",
      title: "WhatsApp Prescription Order Launch",
      desc: "Introduced quick WhatsApp ordering on 06378171368, enabling instant prescription confirmation and zero waiting time."
    },
    {
      year: "2026",
      title: "Modern Digital Medical Hub",
      desc: "Expanded digital healthcare equipment, baby care range, and emergency medicine dispatch serving Kurtha and neighboring areas."
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>Balaji Mandir, Vidrohi Bajar, Kurtha, Bihar 804421</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white max-w-3xl leading-tight">
            About <span className="text-emerald-400">Kurtha Medical</span> (Kurtha bazar)
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
            Your trusted local pharmacy dedicated to providing genuine medicines, medical devices, surgical supplies, and patient-centered healthcare advice.
          </p>
        </div>
      </section>

      {/* Business Story & Pharmacist Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full">
            Our Heritage & Story
          </span>
          <h2 className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            Serving Kurtha with Unwavering Quality & Genuine Medicines
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Kurtha Medical was established with a singular mission: to ensure that every family in Kurtha, Vidrohi Bajar, and surrounding rural communities has direct access to 100% genuine, unadulterated pharmaceutical drugs and medical supplies at fair prices.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Located right near Balaji Mandir on the main Vidrohi Bajar road, our store stocks over 5,000+ prescription formulations, health supplements, baby care essentials, and diagnostic tools like BP monitors and glucometers.
          </p>

          <div className="p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/50 space-y-3">
            <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-200 font-heading">
              💬 Message from the Store Lead
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
              "When it comes to healthcare and medicines, trust is everything. At Kurtha Medical, we inspect every strip of medicine, verify batch expiry, and store sensitive insulins in cold refrigeration. You can rely on us for accurate advice and genuine care."
            </p>
            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
              — Licensed Pharmacist, Kurtha Medical Store
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
              alt="Kurtha Medical Pharmacy Store Front"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Storefront Location
              </span>
              <p className="text-sm font-semibold">Balaji Mandir, Vidrohi Bajar, Kurtha</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Core Values */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 py-16 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                To safeguard community health in Kurtha by dispensing only authentic, WHO-GMP certified pharmaceuticals, ensuring affordability, correct dosage guidance, and fast service.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                To be the most trusted, accessible, and technologically modern healthcare & medical store in Kurtha, bridging the gap between specialty medicine access and rural healthcare needs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950 text-sky-600 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Our Core Values
              </h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% Product Authenticity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Patient Safety & Proper Cold Chain
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Transparent Pricing & Proper Billing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full">
            Our Journey
          </span>
          <h2 className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            Milestones of Kurtha Medical
          </h2>
        </div>

        <div className="space-y-6 relative border-l-2 border-emerald-500/40 ml-4 md:ml-32 pl-6 md:pl-10">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] md:-left-[47px] top-1 w-6 h-6 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900 shadow-md" />
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950 inline-block">
                  {evt.year}
                </span>
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                  {evt.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {evt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Store Photos Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
            Inside Kurtha Medical Store
          </h2>
          <p className="text-xs text-slate-500">
            Hygienic, organized, and temperature-regulated environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {galleryList.slice(0, 3).map((g) => (
            <div key={g.id} className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 bg-white dark:bg-slate-900 p-3">
              <img src={g.imageUrl} alt={g.title} className="w-full h-48 object-cover rounded-xl" />
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 px-1">{g.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
