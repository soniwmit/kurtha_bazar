import React, { useState } from 'react';
import { Search, X, Pill, CheckCircle2, AlertTriangle, Send, Filter, ShoppingBag } from 'lucide-react';
import { popularMedicinesCatalog, businessInfo } from '../data/pharmacyData';
import { MedicineProduct } from '../types';

interface MedicineSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedicineForOrder: (medicineName: string) => void;
}

export const MedicineSearchModal: React.FC<MedicineSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMedicineForOrder
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedForm, setSelectedForm] = useState<string>('All');

  if (!isOpen) return null;

  const dosageForms = ['All', 'Tablet', 'Capsule', 'Syrup', 'Equipment', 'Supplement', 'Care Product'];

  const filteredMedicines = popularMedicinesCatalog.filter((med) => {
    const matchesQuery =
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesForm = selectedForm === 'All' || med.dosageForm === selectedForm;

    return matchesQuery && matchesForm;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="p-6 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 rounded-2xl">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-800 dark:text-slate-100">
                Search Medicine Inventory
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Check stock for common tablets, syrups, equipment & health products in Kurtha Medical
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search input & Category pill filters */}
        <div className="p-6 space-y-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              autoFocus
              placeholder="Search by medicine name, brand, condition (e.g. fever, BP, acidity, insulin)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Form Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold uppercase text-slate-400 flex items-center gap-1 flex-shrink-0">
              <Filter className="w-3.5 h-3.5" /> Type:
            </span>
            {dosageForms.map((form) => (
              <button
                key={form}
                onClick={() => setSelectedForm(form)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedForm === form
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {form}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((med) => (
              <div
                key={med.id}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 hover:border-emerald-500/50 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-slate-800 dark:text-slate-100 text-base">
                      {med.name}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                      {med.dosageForm}
                    </span>
                    {med.requiresPrescription && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Rx Required
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {med.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="font-medium text-slate-600 dark:text-slate-300">Category: {med.category}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> In Stock at Kurtha Store
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onSelectMedicineForOrder(med.name);
                    onClose();
                  }}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" /> Order on WhatsApp
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 px-4 space-y-3">
              <Pill className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
              <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                Item Not in Frequent Catalog?
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                We carry thousands of additional prescription & OTC medicines at our Kurtha store. Send us your prescription or requirement directly on WhatsApp for instant stock verification!
              </p>
              <button
                onClick={() => {
                  onSelectMedicineForOrder(searchTerm || 'Custom Medicine Request');
                  onClose();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-700 transition-colors"
              >
                <Send className="w-3.5 h-3.5" /> Request "{searchTerm || 'Medicine'}" via WhatsApp
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Need emergency consultation? Call <strong>{businessInfo.phoneDisplay}</strong></span>
          <button onClick={onClose} className="hover:underline text-slate-600 dark:text-slate-300">
            Close Search
          </button>
        </div>
      </div>
    </div>
  );
};
