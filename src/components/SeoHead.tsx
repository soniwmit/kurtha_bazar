import React, { useEffect } from 'react';
import { businessInfo, faqList } from '../data/pharmacyData';
import { NavPage } from '../types';

interface SeoHeadProps {
  currentPage: NavPage;
  titleOverride?: string;
  descriptionOverride?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ currentPage, titleOverride, descriptionOverride }) => {
  const getPageTitle = (): string => {
    if (titleOverride) return titleOverride;
    switch (currentPage) {
      case 'home':
        return `${businessInfo.name} | Trusted Medical Store in Kurtha, Bihar | Genuine Medicines`;
      case 'about':
        return `About Us | ${businessInfo.name} - Balaji Mandir, Vidrohi Bajar, Kurtha`;
      case 'services':
        return `Our Medical Services | Prescription Drugs, Baby Care & Equipment - ${businessInfo.name}`;
      case 'gallery':
        return `Photo Gallery & Store Tour | ${businessInfo.name}, Kurtha, Bihar`;
      case 'testimonials':
        return `Customer Reviews & Testimonials | ${businessInfo.name} Kurtha`;
      case 'faq':
        return `Pharmacy FAQs | Frequently Asked Questions - ${businessInfo.name}`;
      case 'contact':
        return `Contact Us & Directions | ${businessInfo.name}, Vidrohi Bajar, Kurtha - 06378171368`;
      default:
        return `${businessInfo.name} | Pharmacy in Kurtha, Bihar`;
    }
  };

  const getPageDescription = (): string => {
    if (descriptionOverride) return descriptionOverride;
    return `${businessInfo.name} (${businessInfo.subtitle}) - Located at ${businessInfo.location}. Offering 100% genuine prescription medicines, OTC items, baby care products, surgical dressings & fast WhatsApp order delivery. Call ${businessInfo.phoneDisplay}.`;
  };

  useEffect(() => {
    // Update document title
    document.title = getPageTitle();

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', getPageDescription());
    }

    // Dynamic JSON-LD Schema injection
    const existingSchema = document.getElementById('pharmacy-jsonld');
    if (existingSchema) {
      existingSchema.remove();
    }

    const script = document.createElement('script');
    script.id = 'pharmacy-jsonld';
    script.type = 'application/ld+json';

    // LocalBusiness / Pharmacy Schema
    const pharmacySchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": businessInfo.name,
      "alternateName": "Kurtha Medical - Kurtha Bazar",
      "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      "@id": "https://kurthamedical.in/#pharmacy",
      "url": "https://kurthamedical.in",
      "telephone": businessInfo.phoneRaw,
      "priceRange": "₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Balaji Mandir, Vidrohi Bajar Road",
        "addressLocality": "Kurtha",
        "addressRegion": "Bihar",
        "postalCode": "804421",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0500",
        "longitude": "84.8500"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "07:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Google Pay, PhonePe",
      "currenciesAccepted": "INR"
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqList.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kurthamedical.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": currentPage.toUpperCase(),
          "item": `https://kurthamedical.in/#${currentPage}`
        }
      ]
    };

    script.textContent = JSON.stringify([pharmacySchema, faqSchema, breadcrumbSchema]);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('pharmacy-jsonld');
      if (el) el.remove();
    };
  }, [currentPage, titleOverride, descriptionOverride]);

  return null;
};
