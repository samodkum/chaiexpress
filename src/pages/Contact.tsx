import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const contactCards = [
    { icon: MapPin, title: "Our Main Office", content: "Shop No-2, Tower T-5, NX One Avenue, Plot No-17, Greater Noida, Uttar Pradesh 201306" },
    { icon: Phone, title: "Phone Number", content: "Call Us: +91-8400110044, +91-8726279693" },
    { icon: Mail, title: "Mail Us", content: "chaixpresscafe@gmail.com" }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000)' }}
        />
        <div className="relative z-20 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">Contact Us</h1>
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-bold">We'd Love to Hear From You</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-bg-card p-10 rounded-3xl border border-white/5 text-center space-y-6 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                <card.icon className="w-8 h-8 text-gold" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-card p-10 rounded-3xl border border-white/5 shadow-2xl"
          >
            <h2 className="text-3xl font-serif font-bold mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gold uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-gold transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gold uppercase tracking-widest">Your Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-gold transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-gold text-black py-5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gold-light transition-all transform hover:scale-[1.02]">
                SEND MESSAGE <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Map Placeholder */}
          <div className="rounded-3xl overflow-hidden border border-white/5 h-full min-h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562012301234!2d77.4472!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMjYnNTAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
              className="w-full h-full grayscale invert contrast-125 opacity-80"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[20px] border-bg-card/20" />
          </div>
        </div>
      </section>
    </div>
  );
}
