/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  Droplet,
  Flame,
  Crown,
  Gift,
  Flower2,
  Sparkles,
  BadgeCheck,
  Truck,
  MessageCircle,
  CheckCircle2,
  Layers,
  IndianRupee,
  Clock,
  HeartHandshake,
  MapPin,
  Star,
  Quote,
  ChevronDown,
  Navigation,
  Phone,
  Menu,
  X,
  ExternalLink,
  Sparkle
} from 'lucide-react';

// ==========================================
// CONFIG CONSTANTS (Easily editable by owner)
// ==========================================
const SHOP_NAME = "Al Hamdan Perfumes & Attars";

// CRITICAL: Replace these placeholders with the real phone / WhatsApp numbers before publishing
// Must be format: Country code (91) + 10-digit number, no leading '+' or spaces
const WHATSAPP_NUMBER = "919059737965"; // Actual or placeholder country code + number
const CALL_NUMBER = "+919059737965";     // Actual or placeholder call number with + symbol

const WHATSAPP_MESSAGE = "Hello Al Hamdan! I'd like to know more about your premium attars and perfumes.";

const BRANCH_1 = {
  name: "Al Hamdan Perfumes & Attars — Main Branch",
  area: "Bill Nagar",
  address: "Guntur Rd, Bill Nagar, Ongole, Andhra Pradesh 523001",
  hours: "Open daily, 9:00 AM – 10:00 PM",
  rating: "4.8",
  reviews: 29,
  maps: "https://maps.google.com/maps?cid=9410471989022877883",
  isMain: true
};

const BRANCH_2 = {
  name: "Al Hamdan Perfumes — Second Branch",
  area: "Siva Prasad Colony",
  address: "Mangamuru Rd, Siva Prasad Colony, Ongole, Andhra Pradesh 523002",
  hours: "Open daily, 9:30 AM – 10:00 PM",
  rating: "5.0",
  reviews: 11,
  maps: "https://maps.google.com/maps?cid=4681318231926936145",
  isMain: false
};

// Generated Image Paths
const HERO_IMAGE_PATH = "/src/assets/images/luxury_attar_bottles_1791367828964.jpg";
const ABOUT_IMAGE_PATH = "/src/assets/images/boutique_ambiance_1791367844987.jpg";

// Quick URL generators
const getWhatsAppLink = (customMsg?: string) => {
  const msg = customMsg || WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

const getCallLink = () => `tel:${CALL_NUMBER}`;

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Monitor active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'collections', 'why-us', 'how-to-order', 'locations', 'reviews', 'faq'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for sticky navbar
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'collections', label: 'Collections' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'locations', label: 'Locations' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 72; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const collections = [
    {
      icon: <Droplet className="w-7 h-7 text-[#C9A24B]" />,
      title: "Light Attars",
      description: "Soft, fresh, and easy to wear every day. Perfect for office, college, and daily use.",
      msg: "Hello Al Hamdan! I am interested in knowing more about your Light Attars collection."
    },
    {
      icon: <Flame className="w-7 h-7 text-[#C9A24B]" />,
      title: "Strong & Royal Attars",
      description: "Deep, rich, long-lasting blends with warm woody and oud-style character for special occasions.",
      msg: "Hello Al Hamdan! I am interested in knowing more about your Strong & Royal Attars collection."
    },
    {
      icon: <Crown className="w-7 h-7 text-[#C9A24B]" />,
      title: "Super-Luxury Attars",
      description: "Premium luxury-brand attars for those who want something truly exceptional and exclusive.",
      msg: "Hello Al Hamdan! I am interested in knowing more about your Super-Luxury Attars collection."
    },
    {
      icon: <Sparkle className="w-7 h-7 text-[#C9A24B]" />,
      title: "Branded Perfumes",
      description: "A wide selection of national and international perfumes for men, women, and everyone.",
      msg: "Hello Al Hamdan! I am interested in knowing more about your Branded Perfumes collection."
    },
    {
      icon: <Gift className="w-7 h-7 text-[#C9A24B]" />,
      title: "Gifting Selections",
      description: "Beautiful fragrance gifts for weddings, Eid, festivals, birthdays, and anniversaries.",
      msg: "Hello Al Hamdan! I am interested in knowing more about your Gifting Selections."
    },
    {
      icon: <Flower2 className="w-7 h-7 text-[#C9A24B]" />,
      title: "Floral & Fresh Notes",
      description: "Rose, jasmine, and fresh aquatic notes for a light, elegant, feel-good impression.",
      msg: "Hello Al Hamdan! I am interested in knowing more about your Floral & Fresh Notes collection."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Layers className="w-8 h-8 text-[#C9A24B]" />,
      title: "Wide Variety",
      description: "From light to strong attars and from everyday to luxury perfumes, there is something for every taste."
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-[#C9A24B]" />,
      title: "Fair, Reasonable Prices",
      description: "Quality fragrances at prices that respect your budget. Premium scents shouldn't be out of reach."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#C9A24B]" />,
      title: "Long-Lasting Scents",
      description: "Rich, pleasing fragrances that stay with you through the day, crafted with superior oil concentration."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#C9A24B]" />,
      title: "Friendly Service",
      description: "Honest guidance from our team, in store or on WhatsApp. We help you find your exact match."
    }
  ];

  const orderSteps = [
    {
      num: "1",
      title: "Message Us",
      description: "Tap the WhatsApp button and tell us what you're looking for — attar, perfume, or a gift."
    },
    {
      num: "2",
      title: "Choose Your Scent",
      description: "We'll share options and guide you to the right fragrance for your taste and budget."
    },
    {
      num: "3",
      title: "Pick Up or Get Delivery",
      description: "Visit either of our Ongole branches, or ask about delivery directly to your doorstep."
    }
  ];

  const reviewThemes = [
    {
      text: "Amazing variety of fragrances — something for everyone, and the attars have a lovely, pleasing quality.",
      metric: "Premium Oil Quality"
    },
    {
      text: "Reasonable prices for both perfumes and luxury attars, with friendly and helpful service.",
      metric: "Great Value & Hospitality"
    },
    {
      text: "Ordered on WhatsApp and it arrived securely packed and on time.",
      metric: "Flawless Delivery Service"
    }
  ];

  const faqs = [
    {
      q: "What is the difference between an attar and a perfume?",
      a: "Attars are traditional concentrated fragrance oils, usually applied in small amounts and known for long-lasting, natural-style scents. Perfumes are alcohol-based sprays. We stock both so you can choose what suits you."
    },
    {
      q: "Do you have light attars as well as strong ones?",
      a: "Yes. We offer both light, fresh attars for daily wear and strong, rich attars for special occasions. Ask us on WhatsApp or visit a branch and we'll help you find the right one."
    },
    {
      q: "Do you sell branded perfumes?",
      a: "Yes, we have a wide collection of national and international perfumes. Availability changes, so message us on WhatsApp to check a particular fragrance."
    },
    {
      q: "Can I order on WhatsApp and get it delivered?",
      a: "Yes. Message us on WhatsApp with what you're looking for and ask about delivery to your area. Customers have shared that their orders arrived securely packed and on time."
    },
    {
      q: "Where are your shops and what are your timings?",
      a: "We have two branches in Ongole — Guntur Rd, Bill Nagar (open daily 9:00 AM to 10:00 PM) and Mangamuru Rd, Siva Prasad Colony (open daily 9:30 AM to 10:00 PM)."
    },
    {
      q: "Can you help me pick a gift?",
      a: "Absolutely. Tell us the occasion and your budget and we'll suggest fragrances that make a thoughtful gift."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5EA] font-body text-[#2A1F16] relative selection:bg-[#C9A24B] selection:text-white pb-16 md:pb-0">
      
      {/* SECTION 0 — NAVBAR */}
      <header className="sticky top-0 z-50 h-[72px] bg-[#FAF5EA]/90 backdrop-blur-md border-b border-[#C9A24B]/20 transition-luxury">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Logo & Brand Wordmark (Single text structure for accessibility) */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left focus-ring rounded-lg cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-[#0F3D2E] flex items-center justify-center border border-[#C9A24B]/30 group-hover:border-[#C9A24B] transition-luxury shadow-md">
              <Droplet className="w-5 h-5 text-[#C9A24B]" />
            </div>
            <div>
              <span className="font-heading text-xl sm:text-2xl font-bold text-[#0F3D2E] leading-none block">
                Al Hamdan
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#C9A24B] font-semibold block leading-none mt-0.5">
                PERFUMES & ATTARS
              </span>
            </div>
          </button>

          {/* Center Links (Desktop only) */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-luxury relative py-2 focus-ring cursor-pointer hover:text-[#C9A24B] ${
                  activeSection === link.id ? 'text-[#0F3D2E]' : 'text-[#6F6253]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Button (Desktop only) */}
          <div className="hidden md:flex items-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide shadow-md transition-luxury focus-ring whitespace-nowrap uppercase cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Order on WhatsApp
            </a>
          </div>

          {/* Hamburger Menu Toggle (Mobile only) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#0F3D2E] hover:bg-[#F1E7D0] focus-ring cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-down Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[72px] left-0 w-full bg-[#FAF5EA] border-b border-[#C9A24B]/30 shadow-xl z-40 py-6 px-4 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-semibold text-left py-2 px-3 rounded-lg transition-luxury focus-ring cursor-pointer ${
                  activeSection === link.id 
                    ? 'bg-[#0F3D2E] text-white' 
                    : 'text-[#2A1F16] hover:bg-[#F1E7D0]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] text-white py-3 px-4 rounded-full text-sm font-semibold shadow-md focus-ring transition-luxury mt-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Order on WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* SECTION 1 — HERO */}
      <section 
        id="home" 
        className="relative overflow-hidden bg-gradient-to-b from-[#14100D] to-[#0F3D2E] text-white py-20 lg:py-28"
      >
        {/* Lattice overlay */}
        <div className="absolute inset-0 bg-lattice pointer-events-none opacity-20" />
        
        {/* Decorative subtle background glow */}
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-[#C9A24B] rounded-full filter blur-[150px] opacity-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            <span className="uppercase tracking-[0.25em] text-xs text-[#C9A24B] font-semibold mb-3 block">
              ONGOLE'S HOME OF FINE FRAGRANCE
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 max-w-2xl mx-auto lg:mx-0">
              Where Every Scent Tells a Story
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Discover premium attars and branded perfumes at Al Hamdan — from soft, light attars for everyday to rich, long-lasting oud-style blends for special occasions.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C9A24B] hover:bg-[#E3C77D] text-[#14100D] font-semibold rounded-full px-8 py-3.5 shadow-lg transition-luxury focus-ring cursor-pointer text-sm tracking-wide uppercase"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Order on WhatsApp
              </a>
              <button
                onClick={() => handleNavClick('locations')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-medium rounded-full px-8 py-3.5 border border-white/40 transition-luxury focus-ring cursor-pointer text-sm"
              >
                <MapPin className="w-5 h-5 text-[#C9A24B]" />
                Visit Our Store
              </button>
            </div>

            {/* Proof line under buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-white/75 border-t border-white/10 pt-6">
              <span className="flex items-center gap-1.5 font-medium">
                <Star className="w-4 h-4 text-[#C9A24B] fill-[#C9A24B]" />
                4.8 on Google Reviews
              </span>
              <span className="text-[#C9A24B]">•</span>
              <span>2 Branches in Ongole</span>
              <span className="text-[#C9A24B]">•</span>
              <span>Open Daily Till 10 PM</span>
            </div>
          </div>

          {/* Right Column Visual Graphic Area */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Outer golden ring frame */}
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#C9A24B]/30 flex items-center justify-center p-3 relative bg-radial from-[#C9A24B]/10 to-transparent">
              
              {/* Inner container displaying generated high-fidelity image */}
              <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-[#C9A24B]/20 shadow-2xl">
                <img
                  src={HERO_IMAGE_PATH}
                  alt="Al Hamdan Premium Attars and Branded Perfumes"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fail-safe SVG inline fallback if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('hero-img-fallback');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                
                {/* Fallback container with stunning custom SVG artwork */}
                <div 
                  id="hero-img-fallback" 
                  className="hidden absolute inset-0 bg-gradient-to-b from-[#1E2522] to-[#0A2C21] flex flex-col items-center justify-center p-4 text-center"
                >
                  <svg className="w-24 h-24 text-[#C9A24B] mb-4" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Elegant Attar Bottle Illustration */}
                    <path d="M50 15V22" stroke="#C9A24B" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M45 22H55V27H45V22Z" fill="#C9A24B" stroke="#C9A24B" strokeWidth="1.5"/>
                    <path d="M38 31.5C38 29 40 27 42.5 27H57.5C60 27 62 29 62 31.5V36H38V31.5Z" fill="#C9A24B"/>
                    <path d="M35 36H65V76C65 81.5 60.5 86 55 86H45C39.5 86 35 81.5 35 76V36Z" fill="#0F3D2E" stroke="#C9A24B" strokeWidth="2.5"/>
                    {/* Glass reflections */}
                    <line x1="42" y1="42" x2="42" y2="78" stroke="#C9A24B" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
                    <line x1="48" y1="42" x2="48" y2="80" stroke="#C9A24B" strokeWidth="1" strokeOpacity="0.3" strokeLinecap="round"/>
                    <circle cx="50" cy="60" r="10" stroke="#C9A24B" strokeWidth="1.5" strokeDasharray="4 2"/>
                    <circle cx="50" cy="60" r="2" fill="#C9A24B"/>
                  </svg>
                  <span className="font-heading text-lg font-bold text-[#FAF5EA]">Premium Craftsmanship</span>
                </div>
              </div>

              {/* Float chips with animated behavior */}
              <div className="absolute -top-3 left-4 bg-[#FAF5EA]/10 backdrop-blur-md border border-[#C9A24B]/30 rounded-full px-4 py-1.5 text-xs font-semibold text-[#FAF5EA] shadow-lg float-slow">
                ✨ Alcohol-Free Attars
              </div>
              <div className="absolute bottom-8 -left-6 bg-[#FAF5EA]/10 backdrop-blur-md border border-[#C9A24B]/30 rounded-full px-4 py-1.5 text-xs font-semibold text-[#FAF5EA] shadow-lg float-slow-delayed">
                💎 Branded Perfumes
              </div>
              <div className="absolute top-1/2 -right-8 bg-[#FAF5EA]/10 backdrop-blur-md border border-[#C9A24B]/30 rounded-full px-4 py-1.5 text-xs font-semibold text-[#FAF5EA] shadow-lg float-slow-delayed-more">
                🎁 Gift Ready
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 — TRUST STRIP */}
      <section className="bg-[#C9A24B] py-6 shadow-inner relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#14100D]">
            
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Sparkles className="w-5 h-5 shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">Premium Quality Attars</span>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <BadgeCheck className="w-5 h-5 shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">Branded Fragrances</span>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Truck className="w-5 h-5 shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">Delivery Available</span>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">Easy WhatsApp Order</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT */}
      <section id="about" className="py-20 bg-[#FAF5EA] relative overflow-hidden">
        {/* Subtle decorative background detail */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F1E7D0]/50 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Premium Image block with overlapping layout */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#C9A24B]/30 shadow-xl bg-[#0F3D2E] aspect-[4/3] sm:aspect-square">
                {/* Background layout style lattice */}
                <div className="absolute inset-0 bg-lattice opacity-15 pointer-events-none" />
                
                <img
                  src={ABOUT_IMAGE_PATH}
                  alt="Al Hamdan Boutique Ambience"
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-102"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback artwork
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('about-img-fallback');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />

                {/* Elegant fallback if image doesn't render */}
                <div 
                  id="about-img-fallback" 
                  className="hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white"
                >
                  <svg className="w-20 h-20 text-[#C9A24B] mb-4" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="#C9A24B" strokeWidth="1.5" strokeDasharray="6 4" />
                    <path d="M50 20C40 20 30 35 30 50C30 65 40 80 50 80C60 80 70 65 70 50C70 35 60 20 50 20Z" stroke="#C9A24B" strokeWidth="2" />
                    <circle cx="50" cy="45" r="8" fill="#C9A24B" />
                    <path d="M50 55V70" stroke="#C9A24B" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="font-heading text-lg font-bold text-[#FAF5EA]">Traditional & Modern Blends</span>
                </div>

                {/* Caption chip overlaid at bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#14100D]/80 backdrop-blur-sm border border-[#C9A24B]/30 rounded-xl p-3 text-center">
                  <p className="text-xs text-[#FAF5EA] font-medium tracking-wide">
                    "Traditional craft. Modern taste."
                  </p>
                </div>
              </div>

              {/* Offset decorative box */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#C9A24B]/10 pointer-events-none -z-10 bg-[#F1E7D0]" />
            </div>

            {/* Right side: Editorial text copy */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="uppercase tracking-[0.25em] text-xs text-[#C9A24B] font-semibold mb-3">
                OUR STORY
              </span>
              
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3D2E] mb-6 leading-tight">
                A Fragrance for Every Mood and Moment
              </h2>
              
              {/* Gold divider */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-px bg-[#C9A24B]" />
                <div className="w-1.5 h-1.5 bg-[#C9A24B] transform rotate-45" />
                <div className="w-12 h-px bg-[#C9A24B]" />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#6F6253] leading-relaxed mb-8">
                <p>
                  Al Hamdan Perfumes & Attars is a premium fragrance destination in Ongole for people who love beautiful scents. We bring together a wide collection of national and international perfumes and a rich selection of attars, so you can find the one that feels like you.
                </p>
                <p>
                  Whether you prefer a gentle, light attar for daily wear or a bold, long-lasting fragrance for weddings, festivals, and celebrations, our team is happy to help you choose — without pressure and at fair, honest prices.
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F3D2E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#2A1F16]">
                    Light and strong attar options tailored to your personal taste
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F3D2E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#2A1F16]">
                    Luxury-brand attars and designer international perfumes
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F3D2E] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#2A1F16]">
                    Friendly guidance in-store and responsive support on WhatsApp
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — COLLECTIONS */}
      <section id="collections" className="py-20 bg-[#F1E7D0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="uppercase tracking-[0.25em] text-xs text-[#C9A24B] font-semibold mb-3 block">
            OUR COLLECTIONS
          </span>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3D2E] mb-4">
            Find Your Signature Scent
          </h2>

          {/* Hairline Divider with diamond ornament */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-16 h-px bg-[#C9A24B]" />
            <div className="w-1.5 h-1.5 bg-[#C9A24B] transform rotate-45" />
            <div className="w-16 h-px bg-[#C9A24B]" />
          </div>

          <p className="text-sm sm:text-base text-[#6F6253] max-w-2xl mx-auto mb-12">
            Explore our most-loved fragrance families. Message us on WhatsApp to ask about what's available today and we'll send you custom options.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {collections.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#C9A24B]/35 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-luxury flex flex-col h-full group"
              >
                {/* Icon Tile */}
                <div className="w-14 h-14 rounded-xl bg-[#0F3D2E] flex items-center justify-center mb-5 border border-[#C9A24B]/20 group-hover:bg-[#0A2C21] transition-luxury">
                  {item.icon}
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F3D2E] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6F6253] leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                {/* WhatsApp Enquiry Link */}
                <a
                  href={getWhatsAppLink(item.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0F3D2E] hover:text-[#C9A24B] transition-luxury focus-ring whitespace-nowrap"
                >
                  Ask on WhatsApp
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — WHY CHOOSE US */}
      <section id="why-us" className="py-20 bg-gradient-to-b from-[#14100D] to-[#0A2C21] text-white relative">
        <div className="absolute inset-0 bg-lattice pointer-events-none opacity-20" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <span className="uppercase tracking-[0.25em] text-xs text-[#C9A24B] font-semibold mb-3 block">
            WHY AL HAMDAN
          </span>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Fragrance You Can Trust
          </h2>

          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="w-16 h-px bg-[#C9A24B]" />
            <div className="w-1.5 h-1.5 bg-[#C9A24B] transform rotate-45" />
            <div className="w-16 h-px bg-[#C9A24B]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#C9A24B]/30 rounded-2xl p-6 hover:border-[#C9A24B] hover:bg-white/[0.08] transition-luxury"
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 — HOW TO ORDER */}
      <section id="how-to-order" className="py-20 bg-[#FAF5EA] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="uppercase tracking-[0.25em] text-xs text-[#C9A24B] font-semibold mb-3 block">
            ORDER EASILY
          </span>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3D2E] mb-4">
            Order in 3 Simple Steps
          </h2>

          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="w-16 h-px bg-[#C9A24B]" />
            <div className="w-1.5 h-1.5 bg-[#C9A24B] transform rotate-45" />
            <div className="w-16 h-px bg-[#C9A24B]" />
          </div>

          {/* Process Row with connector line on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
            {/* Dashed line across columns on desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-[#C9A24B]/40 -z-10" />

            {orderSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center bg-white rounded-2xl p-6 border border-[#C9A24B]/20 shadow-sm relative hover:shadow-md transition-luxury">
                
                {/* Number badge */}
                <div className="w-14 h-14 rounded-full bg-[#0F3D2E] border-2 border-[#C9A24B] text-[#C9A24B] font-heading text-2xl font-bold flex items-center justify-center mb-5 shadow-md">
                  {step.num}
                </div>

                <h3 className="text-lg font-semibold text-[#2A1F16] mb-3">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#6F6253] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="inline-block mt-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-luxury focus-ring cursor-pointer text-sm tracking-wide uppercase"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Start Your Order on WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 7 — STORE LOCATIONS */}
      <section id="locations" className="py-20 bg-[#F1E7D0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="uppercase tracking-[0.25em] text-xs text-[#C9A24B] font-semibold mb-3 block">
            VISIT US
          </span>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3D2E] mb-4">
            Two Branches in Ongole
          </h2>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-16 h-px bg-[#C9A24B]" />
            <div className="w-1.5 h-1.5 bg-[#C9A24B] transform rotate-45" />
            <div className="w-16 h-px bg-[#C9A24B]" />
          </div>

          <p className="text-sm sm:text-base text-[#6F6253] max-w-xl mx-auto mb-12">
            Walk in any day of the week — we are open daily to welcome you with welcoming notes.
          </p>

          {/* Two cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            {[BRANCH_1, BRANCH_2].map((branch, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-[#C9A24B]/35 shadow-md flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-luxury"
              >
                {/* Card Top Title & Badge */}
                <div className="bg-[#0F3D2E] text-white p-5 border-b border-[#C9A24B]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#C9A24B]" />
                    <span className="font-semibold text-xs tracking-wider uppercase text-[#C9A24B]">
                      {branch.area}
                    </span>
                  </div>
                  {branch.isMain && (
                    <span className="bg-[#C9A24B] text-[#14100D] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                      Main Branch
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-heading text-2xl font-bold text-[#0F3D2E] mb-3">
                    {branch.name}
                  </h3>

                  {/* Rating indicator */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2A1F16] mb-5">
                    <span className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#C9A24B] fill-[#C9A24B]" />
                      ))}
                    </span>
                    <span className="ml-1 text-sm">{branch.rating}</span>
                    <span className="text-[#6F6253]">·</span>
                    <span className="text-xs text-[#6F6253] font-normal">
                      ({branch.reviews} Google reviews)
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 mb-8 text-sm text-[#6F6253]">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>

                  {/* Buttons Action Area */}
                  <div className="mt-auto space-y-3">
                    <a
                      href={branch.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#0F3D2E] hover:bg-[#0A2C21] text-white font-semibold rounded-full py-3 text-xs uppercase tracking-wide transition-luxury focus-ring cursor-pointer"
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </a>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={getCallLink()}
                        className="flex items-center justify-center gap-2 bg-transparent hover:bg-[#0F3D2E]/5 border border-[#0F3D2E] text-[#0F3D2E] font-medium rounded-full py-2.5 text-xs uppercase tracking-wide transition-luxury focus-ring cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Call Now
                      </a>
                      <a
                        href={getWhatsAppLink(`Hello! I'd like to reach your ${branch.area} branch.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-medium rounded-full py-2.5 text-xs uppercase tracking-wide transition-luxury focus-ring cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        WhatsApp
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8 — CUSTOMER LOVE */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-[#0F3D2E] to-[#14100D] text-white relative">
        <div className="absolute inset-0 bg-lattice pointer-events-none opacity-20" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <span className="uppercase tracking-[0.25em] text-xs text-[#C9A24B] font-semibold mb-3 block">
            LOVED IN ONGOLE
          </span>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What Customers Say on Google
          </h2>

          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="w-16 h-px bg-[#C9A24B]" />
            <div className="w-1.5 h-1.5 bg-[#C9A24B] transform rotate-45" />
            <div className="w-16 h-px bg-[#C9A24B]" />
          </div>

          {/* Big Score Block */}
          <div className="bg-white/5 border border-[#C9A24B]/35 rounded-2xl max-w-2xl mx-auto p-8 mb-12 shadow-xl">
            <span className="font-heading text-6xl sm:text-7xl font-bold text-[#C9A24B] block mb-2 leading-none">
              4.8
            </span>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 sm:w-7 h-6 sm:h-7 text-[#C9A24B] fill-[#C9A24B]" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
              Branch 1: 4.8 ★ (29 reviews) &nbsp;•&nbsp; Branch 2: 5.0 ★ (11 reviews)
            </p>
          </div>

          {/* Review themes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {reviewThemes.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border border-[#C9A24B]/20 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#C9A24B] opacity-60 mb-4" />
                  <div className="flex gap-0.5 mb-3.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#C9A24B] fill-[#C9A24B]" />
                    ))}
                  </div>
                  <p className="text-sm italic text-white/90 leading-relaxed mb-6">
                    "{item.text}"
                  </p>
                </div>
                
                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#C9A24B] font-bold block">
                    GOOGLE REVIEW THEME
                  </span>
                  <span className="text-[11px] font-medium text-white/60">
                    {item.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[11px] text-white/50">
            * Ratings and review themes are aggregated based on public Google Business Profile records of our Ongole branches.
          </p>

        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section id="faq" className="py-20 bg-[#FAF5EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-xs text-[#C9A24B] font-semibold mb-3 block">
              GOT QUESTIONS?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3D2E] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-px bg-[#C9A24B]" />
              <div className="w-1.5 h-1.5 bg-[#C9A24B] transform rotate-45" />
              <div className="w-16 h-px bg-[#C9A24B]" />
            </div>
          </div>

          {/* Accordions Stack */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border border-[#C9A24B]/35 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm sm:text-base text-[#2A1F16] hover:text-[#0F3D2E] transition-luxury focus-ring cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#C9A24B] shrink-0 ml-4 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6F6253] leading-relaxed border-t border-[#FAF5EA]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F3D2E] to-[#14100D] text-white py-24 text-center">
        <div className="absolute inset-0 bg-lattice pointer-events-none opacity-20" />
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#C9A24B] rounded-full filter blur-[120px] opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <span className="uppercase tracking-[0.25em] text-xs text-[#C9A24B] font-semibold mb-3 block">
            YOUR SCENT AWAITS
          </span>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Find the Fragrance That's Truly You
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Visit us in Ongole or message us on WhatsApp — we are open every day until 10 PM. Our perfume advisors are ready to welcome you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-semibold rounded-full px-8 py-4 shadow-lg transition-luxury focus-ring cursor-pointer uppercase text-xs tracking-wider"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Order on WhatsApp
            </a>
            
            <button
              onClick={() => handleNavClick('locations')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-medium rounded-full px-8 py-4 border border-[#C9A24B]/60 hover:border-[#C9A24B] transition-luxury focus-ring cursor-pointer text-xs uppercase tracking-wider"
            >
              Find Nearest Branch
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 11 — FOOTER */}
      <footer className="bg-[#14100D] text-white/70 border-t border-[#C9A24B]/20 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Column 1: Brand details */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-full bg-[#0F3D2E] flex items-center justify-center border border-[#C9A24B]/30">
                  <Droplet className="w-4 h-4 text-[#C9A24B]" />
                </div>
                <span className="font-heading text-lg font-bold text-white leading-none">
                  Al Hamdan
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Premium attars and branded perfumes in Ongole. Creating fragrance journeys for everyday wear and special milestones.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-lg font-semibold text-white">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className="hover:text-[#C9A24B] transition-luxury focus-ring text-left cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Branches */}
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-lg font-semibold text-white">
                Our Branches
              </h3>
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <span className="text-white block font-medium">Main Branch (Bill Nagar):</span>
                  <a 
                    href={BRANCH_1.maps} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#C9A24B] transition-luxury inline-flex items-center gap-1 focus-ring"
                  >
                    Guntur Rd, Ongole 523001
                    <ExternalLink className="w-3 h-3 text-[#C9A24B]" />
                  </a>
                </div>
                <div>
                  <span className="text-white block font-medium">Second Branch:</span>
                  <a 
                    href={BRANCH_2.maps} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#C9A24B] transition-luxury inline-flex items-center gap-1 focus-ring"
                  >
                    Mangamuru Rd, Ongole 523002
                    <ExternalLink className="w-3 h-3 text-[#C9A24B]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-lg font-semibold text-white">
                Contact & Timings
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#C9A24B] transition-luxury focus-ring"
                  >
                    Order on WhatsApp
                  </a>
                </li>
                <li>
                  <a 
                    href={getCallLink()} 
                    className="hover:text-[#C9A24B] transition-luxury focus-ring"
                  >
                    Call Us Now
                  </a>
                </li>
                <li className="text-white/40 italic mt-2 text-xs">
                  Open daily till 10 PM
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/15 pt-8 text-center text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} {SHOP_NAME}, Ongole. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (Gentle pulse animation) */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-luxury pulse-gentle hover:scale-105 cursor-pointer focus-ring"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>

      {/* MOBILE-ONLY FOOTER ACTION OVERLAY (Call and Directions) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#14100D]/95 backdrop-blur-md border-t border-[#C9A24B]/30 py-3.5 px-4 z-40 grid grid-cols-2 gap-3.5 shadow-2xl">
        <a
          href={getCallLink()}
          className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/40 text-white font-medium rounded-full py-2.5 text-xs uppercase tracking-wide transition-luxury focus-ring cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 text-[#C9A24B]" />
          Call Now
        </a>
        <button
          onClick={() => handleNavClick('locations')}
          className="flex items-center justify-center gap-2 bg-[#0F3D2E] hover:bg-[#0A2C21] text-white font-semibold rounded-full py-2.5 text-xs uppercase tracking-wide transition-luxury focus-ring cursor-pointer"
        >
          <Navigation className="w-3.5 h-3.5 text-[#C9A24B]" />
          Directions
        </button>
      </div>

    </div>
  );
}
