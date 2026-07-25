import React, { useState } from 'react';
import { X, Send, Phone, Upload, CheckCircle2, FileText, Clock, AlertCircle } from 'lucide-react';
import { businessInfo } from '../data/pharmacyData';

interface WhatsappOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsappOrderModal: React.FC<WhatsappOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(prefilledMedicine || '');
  const [hasPrescription, setHasPrescription] = useState(false);
  const [prescriptionFileName, setPrescriptionFileName] = useState('');
  const [message, setMessage] = useState('');
  const [preferredDeliveryTime, setPreferredDeliveryTime] = useState('Immediate');
  const [uploadedPreview, setUploadedPreview] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescriptionFileName(file.name);
      setHasPrescription(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !mobileNumber.trim() || !medicineName.trim()) {
      alert('Please fill in Customer Name, Mobile Number, and Medicine Required.');
      return;
    }

    const formattedMessage = `Hello ${businessInfo.name} (${businessInfo.subtitle}) 👋
I would like to place a medicine order:

👤 *Customer Name:* ${customerName.trim()}
📞 *Phone Number:* ${mobileNumber.trim()}
${email.trim() ? `📧 *Email:* ${email.trim()}\n` : ''}📍 *Address:* ${address.trim() || 'Kurtha / Local Pickup'}
💊 *Medicine Required:* ${medicineName.trim()}
📄 *Prescription Available:* ${hasPrescription ? `Yes (${prescriptionFileName || 'Image Attached'})` : 'No / OTC Item'}
⏰ *Preferred Delivery Time:* ${preferredDeliveryTime}
${message.trim() ? `💬 *Additional Message:* ${message.trim()}` : ''}

Please confirm stock availability and bill total. Thank you!`;

    const encodedMsg = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodedMsg}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-white/10 rounded-2xl backdrop-blur-md">
              <Send className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
                Direct WhatsApp Medicine Order
              </span>
              <h3 className="text-2xl font-bold font-heading">{businessInfo.name}</h3>
            </div>
          </div>
          <p className="text-sm text-emerald-100 mt-1">
            Fill in your details & prescription to send an instant order directly to our Kurtha store WhatsApp.
          </p>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSendWhatsapp} className="p-6 md:p-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Customer Name <span className="text-emerald-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Kumar"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Mobile Number <span className="text-emerald-600">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9876543210"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. customer@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Preferred Delivery / Pickup Time
              </label>
              <select
                value={preferredDeliveryTime}
                onChange={(e) => setPreferredDeliveryTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              >
                <option value="Immediate (Store Pickup)">Immediate Store Pickup</option>
                <option value="Urgent Home Delivery">Urgent Home Delivery (Kurtha Area)</option>
                <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                <option value="Tomorrow Morning">Tomorrow Morning</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Medicine Required & Quantity <span className="text-emerald-600">*</span>
            </label>
            <textarea
              required
              rows={3}
              placeholder="e.g. Paracetamol 650mg (1 strip), Pan 40 (2 strips), Syrup Benadryl (1 bottle)"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Delivery Address (Kurtha & Nearby Localities)
            </label>
            <input
              type="text"
              placeholder="e.g. Balaji Mandir Road, Vidrohi Bajar, Kurtha, Bihar"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>

          {/* Upload Prescription */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-600" /> Upload Prescription Image
              </span>
              <label className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPrescription}
                  onChange={(e) => setHasPrescription(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                Doctor Prescription Available
              </label>
            </div>

            <div className="mt-2 flex flex-col sm:flex-row items-center gap-3">
              <label className="flex-1 w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-emerald-400/70 dark:border-emerald-600/70 rounded-xl cursor-pointer hover:bg-emerald-100/50 dark:hover:bg-emerald-900/50 transition-colors text-sm text-emerald-800 dark:text-emerald-300 font-medium">
                <Upload className="w-4 h-4 text-emerald-600" />
                {prescriptionFileName ? `File: ${prescriptionFileName}` : 'Choose Doctor Prescription (Photo / PDF)'}
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {uploadedPreview && (
                <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-emerald-300 flex-shrink-0">
                  <img src={uploadedPreview} alt="Prescription preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 text-emerald-600" />
              Prescription required for Schedule H/H1 antibiotics and blood pressure / diabetes drugs.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Additional Notes / Instructions
            </label>
            <input
              type="text"
              placeholder="e.g. Please send specific brand or call before dispatching"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-600/20 transition-all text-sm cursor-pointer"
            >
              <Send className="w-4 h-4" /> Send Order via WhatsApp
            </button>

            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold transition-all text-sm"
            >
              <Phone className="w-4 h-4" /> Call Store ({businessInfo.phoneDisplay})
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
