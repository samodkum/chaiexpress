import React from 'react';
import { motion } from 'motion/react';
import { OUTLETS } from '../constants';
import { MapPin, Clock, Navigation, Phone } from 'lucide-react';

export default function Outlets() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000)' }}
        />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">Our Outlets</h1>
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-bold">Select Your Nearest Outlet to View Menu</p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OUTLETS.map((outlet, i) => (
            <motion.div
              key={outlet.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all group flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/${outlet.name}/600/400`} 
                  alt={outlet.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-[10px] font-bold">
                  {outlet.region}
                </div>
              </div>
              <div className="p-8 space-y-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold">{outlet.name}</h3>
                <div className="space-y-4 text-sm text-text-muted flex-grow">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0" />
                    <p>{outlet.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-gold shrink-0" />
                    <p>{outlet.timing}</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-gold shrink-0" />
                    <p>{outlet.phone}</p>
                  </div>
                </div>
                <div className="pt-6 flex gap-4">
                  <a 
                    href={outlet.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gold text-black py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-gold-light transition-all"
                  >
                    <Navigation className="w-4 h-4" /> GET DIRECTIONS
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
