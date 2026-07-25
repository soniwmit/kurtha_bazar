import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Send,
  CheckCircle2,
  Building,
  AlertCircle
} from 'lucide-react';
import { businessInfo } from '../data/pharmacyData';

interface ContactPageProps {
  onOpenWhatsappOrder: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenWhatsappOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please enter your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleSendViaWhatsapp = () => {
    const text = `Hello ${businessInfo.name} 👋
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Subject: ${formData.subject}
Message: ${formData.message}`;

    const url = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Contact Kurtha Medical
          </h1>
          <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
            Have questions about medicine availability or prescriptions? Call us or visit our store in Vidrohi Bajar, Kurtha.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
              Business Information
            </h3>

            <div className="space-y-5 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-sm font-bold text-slate-800 dark:text-slate-100 block">Store Location</strong>
                  <p>{businessInfo.location}</p>
                  <p className="text-emerald-600 font-semibold mt-0.5">Landmark: {businessInfo.landmark}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-sm font-bold text-slate-800 dark:text-slate-100 block">Phone Support</strong>
                  <p className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">{businessInfo.phoneDisplay}</p>
                  <p className="text-slate-400">Available during store operating hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-sm font-bold text-slate-800 dark:text-slate-100 block">WhatsApp Order Line</strong>
                  <p className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">{businessInfo.phoneDisplay}</p>
                  <p className="text-slate-400">Send prescription photos for quick verification</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-sm font-bold text-slate-800 dark:text-slate-100 block">Working Hours</strong>
                  <p className="font-semibold">{businessInfo.timingWeekdays}</p>
                  <p>{businessInfo.timingSunday}</p>
                  <p className="text-amber-600 dark:text-amber-400 font-semibold mt-1">
                    ⚡ {businessInfo.timingEmergency}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="w-full py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Click To Call Store ({businessInfo.phoneDisplay})
              </a>

              <button
                onClick={onOpenWhatsappOrder}
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" /> Open WhatsApp Order Form
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Send Us a Quick Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form below and our staff will respond to your query.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">
                  Inquiry Received!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. We have logged your request. You can also send this message directly to our WhatsApp for instant response!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleSendViaWhatsapp}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" /> Send to WhatsApp Now
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-300 mb-1">
                      Your Name <span className="text-emerald-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-300 mb-1">
                      Phone Number <span className="text-emerald-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 06378171368"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. user@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Medicine Stock Availability">Medicine Stock Availability</option>
                      <option value="Prescription Inquiry">Prescription Inquiry</option>
                      <option value="Surgical / Equipment Request">Surgical / Equipment Request</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-300 mb-1">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter details of required medicines, dosage, or query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Submit Contact Form
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Embedded Location Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 p-4 space-y-4">
          <div className="flex items-center justify-between px-2">
            <div>
              <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">Store Map Location</h3>
              <p className="text-xs text-slate-500">Balaji Mandir, Vidrohi Bajar, Kurtha, Bihar 804421</p>
            </div>
            <a
              href="https://maps.google.com/?q=Balaji+Mandir+Vidrohi+Bajar+Kurtha+Bihar+804421"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" /> Navigate
            </a>
          </div>

          <div className="h-96 rounded-2xl overflow-hidden bg-slate-100">
            <iframe
              title="Kurtha Medical Contact Map"
              src="https://maps.google.com/maps?q=Balaji+Mandir+Vidrohi+Bajar+Kurtha+Bihar+804421&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};
