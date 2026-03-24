import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';

export default function Franchise() {
  const steps = [
    { title: "Apply Online", desc: "Fill out our simple application form with your details." },
    { title: "Initial Discussion", desc: "Our team will reach out to discuss the opportunity." },
    { title: "Agreement", desc: "Formalize the partnership with our franchise agreement." },
    { title: "Setup & Training", desc: "We help you set up the outlet and train your staff." },
    { title: "Grand Opening", desc: "Launch your very own Chai Xpress outlet!" }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559925373-c518398d57f3?q=80&w=2000)' }}
        />
        <div className="relative z-20 text-center space-y-4 px-6">
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white">Own a Chai Xpress</h1>
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-bold">We Serve Different Types of Tea — TASTE THE DIFFERENCE</p>
        </div>
      </section>

      {/* Why Franchise */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Why Own a Chai Xpress?</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: TrendingUp, title: "Low Investment", desc: "Start your business with a minimal capital requirement." },
            { icon: Award, title: "Proven Brand", desc: "Leverage our established brand identity and customer trust." },
            { icon: Users, title: "Training & Support", desc: "Full operational training and marketing support provided." },
            { icon: CheckCircle2, title: "High Footfall", desc: "Our outlets are strategically located for maximum visibility." }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-bg-card p-8 rounded-2xl border border-white/5 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Franchise Process */}
      <section className="bg-section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Franchise Process</h2>
            <div className="w-12 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gold/20 -translate-y-1/2 hidden lg:block" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="text-center space-y-6">
                  <div className="w-12 h-12 rounded-full bg-gold text-black font-bold flex items-center justify-center mx-auto text-xl shadow-[0_0_20px_rgba(201,168,76,0.5)]">
                    {i + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-white">{step.title}</h3>
                    <p className="text-text-muted text-xs">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Ready to Start Your <span className="text-gold">Entrepreneurial</span> Journey?
            </h2>
            <p className="text-text-muted text-lg">
              Fill out the form and our franchise development team will get in touch with you shortly.
            </p>
            <div className="aspect-video rounded-2xl overflow-hidden grayscale opacity-50">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" alt="Office" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-bg-card p-10 rounded-3xl border border-white/5 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold uppercase tracking-widest">Name *</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold uppercase tracking-widest">Mobile No *</label>
                  <input type="tel" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold uppercase tracking-widest">Email *</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold uppercase tracking-widest">City *</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gold uppercase tracking-widest">Query Box *</label>
                <textarea rows={4} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-gold text-black py-4 rounded-xl font-bold hover:bg-gold-light transition-all transform hover:scale-[1.02]">
                SUBMIT APPLICATION
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
