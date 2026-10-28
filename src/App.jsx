import { useState } from "react";
import logo from "./assets/logo.png";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Clock,
  Heart,
  CheckCircle2,
} from "lucide-react";
import "./index.css";

const WHATSAPP_NUMBER = "918519817775"; // Replace with your number
const PHONE_NUMBER = "+918519817775"; // Replace with your phone number

const services = [
  {
    id: 1,
    name: "Bridal Makeup",
    category: "Bridal",
    price: "On enquiry",
    icon: "💄",
    description:
      "Beautiful bridal looks designed to make your special day unforgettable.",
  },
  {
    id: 2,
    name: "Facial & Skin Care",
    category: "Skin",
    price: "On enquiry",
    icon: "✨",
    description:
      "Relaxing facial treatments tailored to your skin care needs.",
  },
  {
    id: 3,
    name: "Hair Styling",
    category: "Hair",
    price: "On enquiry",
    icon: "💇‍♀️",
    description:
      "Beautiful haircuts, styling and occasion-ready hairstyles.",
  },
  {
    id: 4,
    name: "Eyebrow Threading",
    category: "Beauty",
    price: "On enquiry",
    icon: "🌸",
    description:
      "Precise grooming for a clean and beautifully defined look.",
  },
  {
    id: 5,
    name: "Waxing",
    category: "Beauty",
    price: "On enquiry",
    icon: "🪷",
    description:
      "Personal care services with attention to comfort and hygiene.",
  },
  {
    id: 6,
    name: "Party Makeup",
    category: "Bridal",
    price: "On enquiry",
    icon: "💫",
    description:
      "Elegant makeup for parties, celebrations and special occasions.",
  },
];

function bookingLink(service = "Beauty appointment") {
  const message = `Hello Pallavi Beauty Parlour! I would like to enquire about ${service}. Please share the details and available timings.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="nav-container">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-icon"><img 
                 src={logo} 
                 alt="Pallavi Beauty Parlour Logo" 
                 style={{ height: '23px', width: 'auto', objectFit: 'contain' }} 
          /></span>
          <span>
            <strong>PALLAVI</strong>
            <small>BEAUTY PARLOUR</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </NavLink>
          ))}

          <a
            className="nav-book"
            href={bookingLink()}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() { 
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-icon"><img 
                 src={logo} 
                 alt="Pallavi Beauty Parlour Logo" 
                 style={{ height: '23px', width: 'auto', objectFit: 'contain' }} 
          /></span>
            <span>
              <strong>PALLAVI</strong>
              <small>BEAUTY PARLOUR</small>
            </span>
          </Link>
          <p className="footer-description">
            Your beauty, our passion. Feel confident, radiant and beautiful
            every day.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/about">About us</Link>
          <Link to="/services">Our services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact us</Link>
        </div>

        <div>
          <h3>Get in touch</h3>
          <p><Phone size={15} /> {PHONE_NUMBER}</p>
          <p><MapPin size={15} /> Vijayawada, Andhra Pradesh</p>
          <a href={bookingLink()} target="_blank" rel="noreferrer">
            Chat on WhatsApp <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Pallavi Beauty Parlour. All rights reserved.</p>
        <p>Made with <Heart size={14} fill="currentColor" /> for beauty</p>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-icon">{service.icon}</div>
      <span className="service-category">{service.category}</span>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <div className="service-card-bottom">
        <span>{service.price}</span>
        <a
          href={bookingLink(service.name)}
          target="_blank"
          rel="noreferrer"
          className="round-arrow"
          aria-label={`Enquire about ${service.name}`}
        >
          <ArrowUpRight size={19} />
        </a>
      </div>
    </article>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            <Sparkles size={15} /> YOUR BEAUTY, OUR PASSION
          </span>
          <h1>
            Radiate Elegance,
            <br />
            <span>Shine Bright.</span>
          </h1>
          <p>
            Discover a beauty experience made just for you. From bridal
            transformations to everyday self-care, let your natural beauty shine.
          </p>
          <div className="hero-actions">
            <a href={bookingLink()} target="_blank" rel="noreferrer" className="button button-gold">
              Book Your Appointment <ArrowRight size={18} />
            </a>
            <Link to="/services" className="button button-outline">
              Explore Services
            </Link>
          </div>
          <div className="hero-note">
            <Sparkles size={17} />
            <span>Beauty • Care • Confidence</span>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1100&q=85"
            alt="Elegant professional beauty salon"
          />
          <div className="image-caption">
            <Sparkles size={20} />
            <div>
              <strong>Your moment to shine</strong>
              <span>Beauty designed around you</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div><Sparkles /><span>Personalised Beauty Care</span></div>
        <div><Heart /><span>Made for Your Confidence</span></div>
        <div><CheckCircle2 /><span>Care in Every Detail</span></div>
      </section>

      <section className="section section-services">
        <SectionHeading
          eyebrow="WHAT WE OFFER"
          title="A little beauty, a lot of confidence."
          description="Explore our beauty services and find the perfect treatment for your next special moment."
        />
        <div className="services-grid">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="center-action">
          <Link to="/services" className="text-link">
            Discover all services <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="story-section">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85"
            alt="Beauty and hair styling"
            loading="lazy"
          />
        </div>
        <div className="story-content">
          <span className="eyebrow">A SPACE JUST FOR YOU</span>
          <h2>Every woman deserves to feel beautiful.</h2>
          <p>
            At Pallavi Beauty Parlour, we believe beauty is personal. Our goal
            is to help you feel comfortable, confident and radiant with care
            that suits your style.
          </p>
          <Link to="/about" className="text-link">
            Get to know us <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <Sparkles size={30} />
        <h2>Ready for your beauty moment?</h2>
        <p>Get in touch with us to enquire about services and appointments.</p>
        <a href={bookingLink()} target="_blank" rel="noreferrer" className="button button-dark">
          Chat with us on WhatsApp <ArrowRight size={18} />
        </a>
      </section>
    </>
  );
}

function About() {
  return (
    <main className="inner-page">
      <section className="page-banner">
        <span className="eyebrow">OUR STORY</span>
        <h1>Beauty with a personal touch.</h1>
        <p>A little care can make you feel like your most beautiful self.</p>
      </section>

      <section className="story-section about-story">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=85"
            alt="Beauty portrait"
          />
        </div>
        <div className="story-content">
          <span className="eyebrow">WELCOME TO PALLAVI</span>
          <h2>Where beauty meets confidence.</h2>
          <p>
            Pallavi Beauty Parlour is a place to relax, refresh and celebrate
            your own style. We aim to provide friendly service and personalised
            beauty care for everyday moments and special occasions.
          </p>
          <p>
            Whether you are getting ready for a wedding, a celebration or simply
            taking time for yourself, we want your experience to feel special.
          </p>
          <a href={bookingLink()} target="_blank" rel="noreferrer" className="button button-gold">
            Contact our team <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="values-section">
        <SectionHeading eyebrow="OUR PROMISE" title="Beauty that feels like you." />
        <div className="values-grid">
          <article><Sparkles /><h3>Personalised</h3><p>Services tailored to your style and preferences.</p></article>
          <article><Heart /><h3>Care First</h3><p>A welcoming experience with attention to your comfort.</p></article>
          <article><CheckCircle2 /><h3>Every Detail</h3><p>Thoughtful attention from consultation to final look.</p></article>
        </div>
      </section>
    </main>
  );
}

function Services() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Bridal", "Skin", "Hair", "Beauty"];
  const filteredServices = filter === "All"
    ? services
    : services.filter((service) => service.category === filter);

  return (
    <main className="inner-page">
      <section className="page-banner">
        <span className="eyebrow">OUR BEAUTY MENU</span>
        <h1>Services made for you.</h1>
        <p>Find your favourite treatment and enquire about your appointment.</p>
      </section>

      <section className="section services-page-section">
        <div className="filter-list" aria-label="Filter services">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={filter === category ? "filter-button selected" : "filter-button"}
              aria-pressed={filter === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="services-grid">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <p className="pricing-note">
          Service prices and availability may vary. Please contact us for details.
        </p>
      </section>
    </main>
  );
}

const galleryItems = [
  {
    title: "Beauty & Styling",
    category: "Beauty-parlour",
    image: "photo-1522337360788-8b13dee7a37e",
  },
  {
    title: "Bridal Inspiration",
    category: "Bridal",
    image: "photo-1519741497674-611481863552",
  },
  {
    title: "Hair & Care",
    category: "Hair",
    image: "photo-1560066984-138dadb4c035",
  },
  {
    title: "Natural Beauty",
    category: "Beauty",
    image: "photo-1487412947147-5cebf100ffc2",
  },
  {
    title: "Special Occasions",
    category: "Bridal",
    image: "photo-1524504388940-b1c1722653e1",
  },
  {
    title: "Salon Experience",
    category: "Hair",
    image: "photo-1521590832167-7bcbfaa6381f",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="inner-page">
      <section className="page-banner">
        <span className="eyebrow">OUR GALLERY</span>
        <h1>Beauty in every detail.</h1>
        <p>A collection of beauty inspiration for your next look.</p>
      </section>

      <section className="section">
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <button
              className="gallery-item"
              key={item.image}
              onClick={() => setSelectedImage(item)}
              aria-label={`View ${item.title}`}
            >
              <img
                src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=800&q=85`}
                alt={item.title}
                loading="lazy"
              />
              <span className="gallery-caption">
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X />
          </button>
          <img
            src={`https://images.unsplash.com/${selectedImage.image}?auto=format&fit=max&w=1400&q=90`}
            alt={selectedImage.title}
            onClick={(event) => event.stopPropagation()}
          />
          <p>{selectedImage.title}</p>
        </div>
      )}
    </main>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Bridal Makeup",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  function updateField(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    const phone = form.phone.trim();

    if (!/^[6-9]\d{9}$/.test(phone) || /^(\d)\1{9}$/.test(phone)) {
          nextErrors.phone =
              "Please enter a valid 10-digit Indian mobile number.";
          }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const message = [
      "Hello Pallavi Beauty Parlour!",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Preferred date: ${form.date || "Not specified"}`,
      `Message: ${form.message || "No additional details"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="inner-page">
      <section className="page-banner">
        <span className="eyebrow">WE ARE HERE FOR YOU</span>
        <h1>Let's talk beauty.</h1>
        <p>Questions about a treatment? Contact us or request an appointment.</p>
      </section>

      <section className="contact-layout">
        <div className="contact-details">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>We would love to hear from you.</h2>
          <p>
            Send us your enquiry and we will help you find the right service
            for your needs.
          </p>

          <div className="contact-item">
            <span className="contact-icon"><Phone /></span>
            <div><h3>Phone / WhatsApp</h3><p>{PHONE_NUMBER}</p></div>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><MapPin /></span>
            <div><h3>Visit our salon</h3><p>Add your full salon address here.</p></div>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><Clock /></span>
            <div><h3>Opening hours</h3><p>Add your actual business hours here.</p></div>
          </div>

          <a href={bookingLink()} target="_blank" rel="noreferrer" className="text-link">
            Message us directly <ArrowUpRight size={17} />
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>Appointment enquiry</h2>
          <p>Fill in your details to continue through WhatsApp.</p>

          <label htmlFor="name">Your name *</label>
          <input id="name" name="name" value={form.name} onChange={updateField} placeholder="Enter your full name" />
          {errors.name && <span className="form-error">{errors.name}</span>}

          <label htmlFor="phone">Phone number *</label>
          <input id="phone" name="phone" value={form.phone} onChange={updateField} placeholder="Enter your phone number" inputMode="tel" />
          {errors.phone && <span className="form-error">{errors.phone}</span>}

          <label htmlFor="service">Service you are interested in</label>
          <select id="service" name="service" value={form.service} onChange={updateField}>
            {services.map((service) => (
              <option key={service.id} value={service.name}>{service.name}</option>
            ))}
            <option value="Other">Other / Not sure yet</option>
          </select>

          <label htmlFor="date">Preferred appointment date</label>
          <input id="date" type="date" name="date" min={new Date().toLocaleDateString("en-CA")} value={form.date} onChange={updateField} />

          <label htmlFor="message">Additional details</label>
          <textarea id="message" name="message" rows="4" value={form.message} onChange={updateField} placeholder="Tell us what you need..." />

          <button className="button button-gold form-submit" type="submit">
            Continue to WhatsApp <ArrowRight size={18} />
          </button>
          <small className="form-note">
            This form opens WhatsApp with your enquiry. It does not automatically
            book or confirm an appointment.
          </small>
        </form>
      </section>
    </main>
  );
}

function NotFound() {
  const location = useLocation();

  return (
    <main className="not-found">
      <Sparkles size={35} />
      <span className="eyebrow">404 — PAGE NOT FOUND</span>
      <h1>Oops! This page needs a makeover.</h1>
      <p>
        The page at <strong>{location.pathname}</strong> could not be found.
        Let's take you back to something beautiful.
      </p>
      <Link to="/" className="button button-gold">
        Back to Home <ArrowRight size={18} />
      </Link>
    </main>
  );
}

function AppLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
