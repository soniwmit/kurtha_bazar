import React, { useState } from 'react';
import { Image as ImageIcon, ZoomIn, X, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryList } from '../data/pharmacyData';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Store Front',
    'Medicine Shelves',
    'Medical Equipment',
    'Healthcare Products',
    'Customer Care'
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryList
    : galleryList.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="space-y-12 pb-16">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
            Store Showcase
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Pharmacy Photo Gallery
          </h1>
          <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
            Take a visual tour of Kurtha Medical store near Balaji Mandir, Vidrohi Bajar, Kurtha, Bihar.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90 text-slate-900 shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              <div className="p-5 space-y-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close photo view"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl space-y-4 p-4 text-white">
            <div className="relative max-h-[70vh] overflow-hidden rounded-2xl flex items-center justify-center bg-black">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>
            <div className="px-2 space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                {currentItem.category}
              </span>
              <h3 className="text-xl font-bold font-heading">{currentItem.title}</h3>
              <p className="text-xs text-slate-300">{currentItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
