import React from 'react';
import { motion } from 'motion/react';
import { MENU_DATA } from '../constants';
import { Leaf } from 'lucide-react';

import DownloadMenuButton from '../components/DownloadMenuButton';

export default function Menu() {
  // Consolidate all menu items into a single array
  const allMenuItems = Object.entries(MENU_DATA).flatMap(([category, items]) => 
    items.map(item => ({ ...item, category }))
  );

  return (
    <div className="pt-24 pb-20">
      <div className="md:hidden">
        <DownloadMenuButton />
      </div>
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=2000)' }}
        />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">Our Menu</h1>
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-bold">Chai | Coffee | Snacks | Beverages</p>
        </motion.div>
      </section>

      {/* Menu Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allMenuItems.map((item, i) => (
            <motion.div
              key={`${item.category}-${item.name}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="bg-bg-card p-6 rounded-2xl border border-white/5 hover:border-gold/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold group-hover:text-gold transition-colors">{item.name}</h3>
                    <Leaf className="w-3 h-3 text-green-500 fill-green-500" />
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed">{item.description}</p>
                  <span className="inline-block text-[8px] font-bold tracking-widest text-gold/50 uppercase mt-2">{item.category}</span>
                </div>
                <div className="text-gold font-bold text-xl">₹{item.price}</div>
              </div>
              <div className="w-full h-[1px] bg-white/5 group-hover:bg-gold/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
