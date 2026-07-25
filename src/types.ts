export type NavPage = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'faq' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  features: string[];
  badge?: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  itemCount: string;
  imageUrl: string;
  popularItems: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
  verifiedBadge: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Prescription' | 'Orders' | 'Store';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store Front' | 'Medicine Shelves' | 'Medical Equipment' | 'Healthcare Products' | 'Customer Care';
  imageUrl: string;
  description: string;
}

export interface MedicineProduct {
  id: string;
  name: string;
  category: string;
  dosageForm: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Supplement' | 'Care Product';
  inStock: boolean;
  requiresPrescription: boolean;
  description: string;
  tags: string[];
}

export interface OrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  prescriptionFileName?: string;
  hasPrescription: boolean;
  message: string;
  preferredDeliveryTime: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface BusinessInfo {
  name: string;
  subtitle: string;
  category: string;
  location: string;
  landmark: string;
  tagline: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappRaw: string;
  email: string;
  timingWeekdays: string;
  timingSunday: string;
  timingEmergency: string;
}
