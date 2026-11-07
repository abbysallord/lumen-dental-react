import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, Sparkles, Calendar, Clock, MapPin, Phone, Mail, 
  ChevronRight, Star, UserCheck, Stethoscope, Award, ArrowUpRight, 
  CheckCircle2, X, Heart, Smile, Activity, MessageSquare, Menu, Send
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('General Checkup');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      window.gsap.fromTo(
        '.hero-content > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );

      window.gsap.utils.toArray('.reveal-section').forEach((section) => {
        window.gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }
  }, []);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsModalOpen(false);
    }, 3000);
  };

  const services = [
    {
      id: 'implants',
      title: 'Dental Implants',
      category: 'Surgery',
      price: 'From $1,200',
      duration: '60 mins',
      desc: 'Permanent, natural-looking tooth replacement crafted with German titanium and 3D precision mapping.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce6395?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ortho',
      title: 'Invisible Aligners',
      category: 'Orthodontics',
      price: 'From $2,400',
      duration: '30 mins',
      desc: 'Clear, custom-molded aligners designed to straighten your smile discreetly without traditional metal braces.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'whitening',
      title: 'Laser Teeth Whitening',
      category: 'Cosmetic',
      price: 'From $350',
      duration: '45 mins',
      desc: 'Advanced cold-laser whitening system that lifts up to 8 shades in a single relaxing 45-minute session.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'veneers',
      title: 'Porcelain Veneers',
      category: 'Cosmetic',
      price: 'From $850 / tooth',
      duration: '90 mins',
      desc: 'Ultra-thin custom porcelain shells bonded to the front of teeth to correct chips, gaps, and severe staining.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'pediatric',
      title: 'Gentle Pediatric Care',
      category: 'Family',
      price: 'From $120',
      duration: '30 mins',
      desc: 'Kid-friendly dental visits focused on early prevention, pain-free sealants, and positive lifelong habits.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'rootcanal',
      title: 'Pain-Free Endodontics',
      category: 'Restorative',
      price: 'From $600',
      duration: '75 mins',
      desc: 'Microscope-assisted root canal therapy performed under precision sedation for absolute patient comfort.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category.toLowerCase() === activeTab.toLowerCase());

  const doctors = [
    {
      name: 'Dr. Evelyn Vance, DDS',
      role: 'Chief Implantologist & Founder',
      exp: '18+ Years Experience',
      univ: 'Harvard School of Dental Medicine',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Dr. Marcus Thorne, DMD',
      role: 'Senior Orthodontist',
      exp: '14+ Years Experience',
      univ: 'UCLA Center for Esthetic Dentistry',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Dr. Sophia Chen, MS',
      role: 'Cosmetic & Laser Specialist',
      exp: '12+ Years Experience',
      univ: 'Columbia University College of Dental Medicine',
      image: 'https://images.unsplash.com/photo-1594824813576-788f34f4007b?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const testimonials = [
    {
      name: 'Jonathan Sterling',
      role: 'Tech Executive',
      text: 'I used to have crippling dental anxiety until I stepped into Lumen. The ambiance feels like a luxury spa, and Dr. Vance performed my implants with absolute perfection and zero pain.',
      rating: 5,
      date: '2 weeks ago'
    },
    {
      name: 'Amara Kalu',
      role: 'Architect',
      text: 'The invisible aligner journey was seamless! The digital scan showed my exact future smile on day one. Highly professional team and state-of-the-art facility.',
      rating: 5,
      date: '1 month ago'
    },
    {
      name: 'David & Rachel Miller',
      role: 'Family Patients',
      text: 'We bring both our children and elderly parents here. Their pediatric care is wonderfully patient, and the geriatric restorative work has given my mother her confidence back.',
      rating: 5,
      date: '3 weeks ago'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Top Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 text-slate-400">
            <span className="flex items-center gap-1.5 hover:text-cyan-400 transition">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" /> 450 Lexington Ave, Suite 1200, New York, NY
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-cyan-400 transition">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> Mon - Sat: 8:00 AM - 7:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+12125550198" className="flex items-center gap-1.5 text-cyan-400 font-semibold hover:underline">
              <Phone className="w-3.5 h-3.5" /> +1 (212) 555-0198
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Emergency Care Open
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition">
              <Smile className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight font-serif text-white">LUMEN</span>
              <span className="block text-[10px] tracking-widest text-cyan-400 font-semibold uppercase">Dental Studio</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-300">
            <a href="#services" className="hover:text-cyan-400 transition">Treatments</a>
            <a href="#technology" className="hover:text-cyan-400 transition">3D Tech</a>
            <a href="#doctors" className="hover:text-cyan-400 transition">Specialists</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition">Reviews</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Appointment
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium">Treatments</a>
            <a href="#technology" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium">3D Tech</a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium">Specialists</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium">Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium">Contact</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}
              className="w-full py-3 rounded-xl bg-cyan-500 text-white font-semibold text-center shadow-lg"
            >
              Book Appointment
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 hero-content">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Award-Winning Aesthetic & Clinical Dentistry
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif leading-[1.1] tracking-tight mb-6">
                Redefining the <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">Dental Experience</span>
              </h1>
              <p className="text-slate-400 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
                Experience pain-free restorative care, computer-guided dental implants, and custom smile makeovers in Manhattan's most serene modern dental studio.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Calendar className="w-5 h-5" /> Schedule Consultation
                </button>
                <a 
                  href="#services"
                  className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-semibold hover:bg-slate-800 transition flex items-center justify-center gap-2 text-base"
                >
                  Explore Services <ChevronRight className="w-4 h-4 text-cyan-400" />
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-extrabold font-serif text-white">4,900+</div>
                  <div className="text-xs text-slate-400 mt-1">Smiles Transformed</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-serif text-cyan-400">99.8%</div>
                  <div className="text-xs text-slate-400 mt-1">Patient Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-serif text-white">18 Yrs</div>
                  <div className="text-xs text-slate-400 mt-1">Clinical Excellence</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=900" 
                    alt="Modern Dental Studio" 
                    className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800/80 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Certified 3D Digital Suite</div>
                      <div className="text-xs text-slate-400">Zero radiation CBCT scanner & sedation certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-y border-slate-900 bg-slate-900/50 py-10 reveal-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-base">Painless Guarantee</h3>
              <p className="text-sm text-slate-400 mt-1">Advanced computerized local anesthesia and nitrous sedation options.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-base">Elite Specialists</h3>
              <p className="text-sm text-slate-400 mt-1">Board-certified ivy league surgeons and cosmetic dentists.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-base">Same-Day Crowns</h3>
              <p className="text-sm text-slate-400 mt-1">CEREC 3D milling technology creates permanent crowns in minutes.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-base">Flexible Financing</h3>
              <p className="text-sm text-slate-400 mt-1">0% APR payment plans and direct insurance coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-8 reveal-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">World-Class Care</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif mt-2">Comprehensive Dental Services</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {['All', 'Surgery', 'Orthodontics', 'Cosmetic', 'Restorative', 'Family'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="bg-slate-900 border border-slate-800/80 rounded-3xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-semibold text-cyan-400 border border-slate-800">
                    {service.category}
                  </span>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500 text-white text-xs font-bold shadow-md">
                    {service.price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif text-white mb-2 group-hover:text-cyan-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-4">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> {service.duration} session
                </span>
                <button 
                  onClick={() => { setSelectedService(service.title); setIsModalOpen(true); }}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-white text-xs font-semibold text-slate-200 transition flex items-center gap-1.5"
                >
                  Book Treatment <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-slate-900/40 border-y border-slate-900 relative overflow-hidden reveal-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Advanced Innovation</span>
              <h2 className="text-3xl sm:text-5xl font-bold font-serif mt-2 mb-6">
                Next-Gen 3D Digital Dentistry
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                We have eliminated messy traditional putty impressions and guesswork. Our clinic is equipped with cutting-edge intraoral scanners and AI-assisted diagnostics to ensure your treatment is faster, more comfortable, and exceptionally precise.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">iTero 3D Digital Impression Scanner</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Instantly maps your entire bite in full color with microscopic accuracy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Low-Radiation CBCT 3D Imaging</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Provides 360-degree views of bone structure, roots, and nerve paths for safe implants.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Biolase WaterLase Laser Technology</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Drill-free and needle-free gum reshaping and cavity treatments for children and adults.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=900" 
                  alt="Dental Technology" 
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">Experience Zero-Wait Precision</div>
                    <div className="text-xs text-slate-400 mt-0.5">Consultations include complimentary 3D smile simulation.</div>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2.5 rounded-xl bg-cyan-500 text-white font-semibold text-xs shadow-lg hover:bg-cyan-400 transition"
                  >
                    Book Scan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="doctors" className="py-24 max-w-7xl mx-auto px-4 sm:px-8 reveal-section">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">World-Class Faculty</span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif mt-2 mb-4">Meet Your Specialists</h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Our clinicians are internationally recognized leaders in implantology, orthodontics, and aesthetic dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group hover:border-cyan-500/50 transition">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-semibold text-cyan-400 border border-slate-800">
                  {doc.exp}
                </span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-serif text-white mb-1">{doc.name}</h3>
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">{doc.role}</div>
                <p className="text-xs text-slate-400">{doc.univ}</p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-white text-xs font-semibold text-slate-200 transition"
                >
                  Book with {doc.name.split(' ')[1]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-slate-900/40 border-y border-slate-900 reveal-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Patient Stories</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif mt-2 mb-4">Trusted by Thousands</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Read how we have transformed smiles and restored confidence for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                  <span className="text-xs text-slate-500">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8 reveal-section">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 p-8 sm:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-6">
              Ready for the Smile You've Always Wanted?
            </h2>
            <p className="text-cyan-100 text-base sm:text-lg mb-8">
              Book your comprehensive examination and 3D smile preview today. New patients receive complimentary whitening consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 text-white font-bold text-sm shadow-xl hover:bg-slate-900 transition"
              >
                Book Appointment Now
              </button>
              <a 
                href="tel:+12125550198"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition"
              >
                Call +1 (212) 555-0198
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                <Smile className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight font-serif text-white">LUMEN</span>
                <span className="block text-[10px] tracking-widest text-cyan-400 font-semibold uppercase">Dental Studio</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Manhattan's premier destination for advanced painless dentistry, aesthetic implants, and life-changing smile makeovers.
            </p>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>450 Lexington Ave, Suite 1200, New York, NY 10017</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Treatments</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-cyan-400 transition">Dental Implants</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Invisible Aligners</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Laser Whitening</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Porcelain Veneers</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Root Canals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#technology" className="hover:text-cyan-400 transition">3D Technology</a></li>
              <li><a href="#doctors" className="hover:text-cyan-400 transition">Our Specialists</a></li>
              <li><a href="#testimonials" className="hover:text-cyan-400 transition">Patient Reviews</a></li>
              <li><button onClick={() => setIsModalOpen(true)} className="hover:text-cyan-400 transition">Book Online</button></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Emergency Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Hours & Contact</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span className="text-white font-medium">8:00 AM - 7:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span className="text-white font-medium">9:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-cyan-400 font-medium">Emergency Only</span></li>
              <li className="pt-2"><a href="tel:+12125550198" className="text-cyan-400 font-bold hover:underline">+1 (212) 555-0198</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Lumen Dental Studio, LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition">HIPAA Compliance</a>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-white mb-2">Appointment Requested!</h3>
                <p className="text-slate-400 text-sm">
                  We have received your booking for <span className="text-cyan-400 font-semibold">{selectedService}</span>. Our concierge team will call you shortly to confirm your slot.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Instant Booking</span>
                  <h3 className="text-2xl font-bold font-serif text-white mt-1">Schedule Consultation</h3>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Select Treatment</label>
                      <select 
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                      >
                        <option>General Checkup & Clean</option>
                        <option>Dental Implants</option>
                        <option>Invisible Aligners</option>
                        <option>Laser Teeth Whitening</option>
                        <option>Porcelain Veneers</option>
                        <option>Pain-Free Endodontics</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Preferred Date</label>
                      <input 
                        type="date" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Preferred Time</label>
                      <select 
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                      >
                        <option>Morning (09:00 AM - 12:00 PM)</option>
                        <option>Afternoon (12:00 PM - 03:00 PM)</option>
                        <option>Evening (03:00 PM - 06:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Notes / Specific Concerns (Optional)</label>
                    <textarea 
                      rows="2"
                      placeholder="Let us know if you have any dental anxiety or specific pain..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition"
                  >
                    Confirm Booking Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
