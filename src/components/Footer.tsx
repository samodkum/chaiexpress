import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-20 pb-10 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img 
              src="https://res.cloudinary.com/dzc1dckta/image/upload/v1774343553/Gemini_Generated_Image_pu8p2ppu8p2ppu8p-removebg-preview_w0sdcy.png" 
              alt="Chai Xpress Logo" 
              className="w-14 h-14 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-serif font-bold tracking-tight">
              Chai <span className="text-gold">Xpress</span>
            </span>
          </div>
          <p className="text-text-muted text-sm leading-relaxed">
            India's premium chai experience. Authentic flavors. Modern café culture. Digital excellence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/chaixpresscafe/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold font-bold mb-6 tracking-widest text-sm">QUICK LINKS</h4>
          <ul className="space-y-4 text-sm text-text-muted">
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Founder's Word</Link></li>
            <li><Link to="/menu" className="hover:text-gold transition-colors">Our Menu</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Business */}
        <div>
          <h4 className="text-gold font-bold mb-6 tracking-widest text-sm">BUSINESS</h4>
          <ul className="space-y-4 text-sm text-text-muted">
            <li><Link to="/outlets" className="hover:text-gold transition-colors">Our Outlets</Link></li>
            <li><Link to="/outlets" className="hover:text-gold transition-colors">Locate Store</Link></li>
            <li><Link to="/franchise" className="hover:text-gold transition-colors">Franchise Opportunities</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact & Subscribe */}
        <div className="space-y-6">
          <h4 className="text-gold font-bold mb-6 tracking-widest text-sm">CONTACT</h4>
          <div className="space-y-4 text-sm text-text-muted">
            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <p>+91-8400110044</p>
            </div>
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <p>chaixpresscafe@gmail.com</p>
            </div>
          </div>

          <div className="pt-6">
            <h4 className="text-gold font-bold mb-4 tracking-widest text-xs">SUBSCRIBE</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-text-muted text-xs">
        <p>© 2023-24 Chai Xpress. All rights reserved.</p>
      </div>
    </footer>
  );
}
