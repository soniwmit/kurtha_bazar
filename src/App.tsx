import React, { useState, useEffect } from 'react';
import { NavPage } from './types';
import { useTracker } from './hooks/useTracker';
import { SeoHead } from './components/SeoHead';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsappOrderModal } from './components/WhatsappOrderModal';
import { MedicineSearchModal } from './components/MedicineSearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');

  // Global tracker hook
  useTracker(currentPage);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('kurtha_theme') === 'dark';
  });
  const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Sync dark mode class on html tag
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('kurtha_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('kurtha_theme', 'light');
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleOpenWhatsappOrderWithMedicine = (medicineName: string) => {
    setPrefilledMedicine(medicineName);
    setIsWhatsappModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenWhatsappOrder={() => setIsWhatsappModalOpen(true)}
            onOpenSearch={() => setIsSearchModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onOpenWhatsappOrder={() => setIsWhatsappModalOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onOpenWhatsappOrder={() => setIsWhatsappModalOpen(true)}
            onSelectServiceForOrder={(serviceName) => handleOpenWhatsappOrderWithMedicine(serviceName)}
          />
        );
      case 'gallery':
        return <GalleryPage />;
      case 'testimonials':
        return (
          <HomePage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenWhatsappOrder={() => setIsWhatsappModalOpen(true)}
            onOpenSearch={() => setIsSearchModalOpen(true)}
          />
        );
      case 'faq':
        return (
          <HomePage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenWhatsappOrder={() => setIsWhatsappModalOpen(true)}
            onOpenSearch={() => setIsSearchModalOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onOpenWhatsappOrder={() => setIsWhatsappModalOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenWhatsappOrder={() => setIsWhatsappModalOpen(true)}
            onOpenSearch={() => setIsSearchModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      {/* SEO Head & Schema Injector */}
      <SeoHead currentPage={currentPage} />

      {/* Sticky Header Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenWhatsappOrder={() => setIsWhatsappModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Main Page View */}
      <main className="flex-1 animate-fade-in">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(page) => setCurrentPage(page)}
        onOpenWhatsappOrder={() => setIsWhatsappModalOpen(true)}
      />

      {/* Permanent Floating Action Buttons (WhatsApp & Call) */}
      <FloatingActions
        onOpenWhatsappOrder={() => setIsWhatsappModalOpen(true)}
      />

      {/* WhatsApp Prescription Order Drawer / Modal */}
      <WhatsappOrderModal
        isOpen={isWhatsappModalOpen}
        onClose={() => setIsWhatsappModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Medicine Search Modal */}
      <MedicineSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectMedicineForOrder={(med) => handleOpenWhatsappOrderWithMedicine(med)}
      />
    </div>
  );
}
