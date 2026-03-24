import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { cn } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Force dark theme
    document.documentElement.classList.remove('light');
    localStorage.setItem('cx-theme', 'dark');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MENU', path: '/menu' },
    { name: 'OUR OUTLETS', path: '/outlets' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'OWN A CHAI XPRESS', path: '/franchise' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-[#0D0D0D]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="https://res.cloudinary.com/dzc1dckta/image/upload/v1774343553/Gemini_Generated_Image_pu8p2ppu8p2ppu8p-removebg-preview_w0sdcy.png" 
            alt="Chai Xpress Logo" 
            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl font-serif font-bold tracking-tight text-white">
            Chai <span className="text-gold">Xpress</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-xs font-medium tracking-widest hover:text-gold transition-colors relative group',
                location.pathname === link.path ? 'text-gold' : 'text-white/80'
              )}
            >
              {link.name}
              <span className={cn(
                'absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full',
                location.pathname === link.path && 'w-full'
              )} />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            to="/outlets"
            className="hidden sm:flex items-center gap-2 bg-gold hover:bg-gold-light text-black px-4 py-2 rounded-full text-xs font-bold transition-all transform hover:scale-105"
          >
            <MapPin className="w-4 h-4" />
            LOCATE STORE
          </Link>

          <button
            className="lg:hidden p-2 text-gold"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0D0D0D] z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <img 
                  src="https://res.cloudinary.com/dzc1dckta/image/upload/v1774343553/Gemini_Generated_Image_pu8p2ppu8p2ppu8p-removebg-preview_w0sdcy.png" 
                  alt="Chai Xpress Logo" 
                  className="w-10 h-10 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-2xl font-serif font-bold text-white">
                  Chai <span className="text-gold">Xpress</span>
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gold">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-2xl font-serif font-bold hover:text-gold transition-colors',
                    location.pathname === link.path ? 'text-gold' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/10">
              <Link
                to="/outlets"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gold text-black py-4 rounded-xl font-bold"
              >
                <MapPin className="w-5 h-5" />
                LOCATE STORE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
