import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { STATS } from '../constants';
import { Quote } from 'lucide-react';

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 800;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-serif font-bold text-gold mb-2">
        {count}{suffix}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2000)' }}
        />
        <div className="relative z-20 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">Our Story</h1>
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-bold">Home {'>'} About Us</p>
        </div>
      </section>
      {/* Our Philosophy Section */}
      <section className="bg-bg-page py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight">
              Our <span className="text-gold">Philosophy</span>
            </h2>
            <div className="w-16 h-1 bg-gold" />
            <div className="space-y-6 text-text-muted leading-relaxed text-lg">
              <p>
                Chai Xpress Café is not just another tea brand in a crowded market—it is a heartfelt experience built on values, warmth, and authenticity. While many cafés focus solely on products, we focus on people. What truly sets us apart is our belief that every customer who walks through our doors is not just a guest, but a part of our extended family.
              </p>
              <p>
                At Chai Xpress Café, quality is not a promise—it is a principle we live by. Every cup we serve reflects the same standards we would choose for ourselves. We use natural ingredients, enriched with grounded Ayurvedic elements, ensuring that every sip is not only flavorful but also nourishing. Our menu is thoughtfully curated, offering a wide variety of teas, including several blends that promote wellness and support a healthy lifestyle.
              </p>
              <p>
                With over 100 items on our menu, we ensure there is something for everyone—without compromising affordability. Keeping inclusivity at our core, we have designed our pricing so that every individual can enjoy a premium café experience within a budget of ₹200.
              </p>
              <p>
                Understanding the evolving culture of café conversations, we have created a space where people from all walks of life can come together, connect, and unwind. Our inviting ambience, attentive service, and accessible pricing are all aligned with one simple vision—to make everyone feel comfortable, valued, and happy.
              </p>
              <p>
                Our shakes, made from natural powder-based ingredients, further reflect our commitment to health-conscious innovation.
              </p>
              <p>
                At Chai Xpress Café, we are not just serving beverages—we are spreading love, building connections, and creating a community. For us, business is just a name; what we truly build are relationships that last beyond the cup.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-gold p-4">
              <img 
                src="https://res.cloudinary.com/dzc1dckta/image/upload/v1774344644/Screenshot_2026-03-24_151028_pdcu49.png" 
                alt="Founder Shivang Pandey"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-2xl shadow-2xl max-w-[250px]">
              <h3 className="text-black font-bold text-xl">Shivang Pandey</h3>
              <p className="text-black/70 text-sm font-medium">Founder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Quote className="w-12 h-12 text-gold opacity-50" />
            <div className="space-y-6 text-text-muted leading-relaxed text-lg italic">
              <p>
                "From a humble roadside stall to a thriving chain of 50 outlets, Chai Xpress Café is not just a business—it is a story of resilience, vision, and relentless determination."
              </p>
              <p>
                Born without the support of family or friends, Shivang Pandey carried nothing but a dream and an unshakable belief in himself. An orphan by circumstance, but a warrior by mindset, he chose to build his own destiny from the ground up. What began as a small tea stall outside his college during his B.Com days slowly turned into a symbol of ambition.
              </p>
              <p>
                Every cup of tea carried his struggle. Every setback—betrayal, criticism, and hardship—became fuel to push forward. Like Arjun, whose focus never wavered from the eye of the fish, Shivang’s vision remained fixed on creating something of his own.
              </p>
              <p>
                With his own earnings, he pursued an MBA, not as an escape, but as a tool to sharpen his entrepreneurial journey. He reinvested every ounce of knowledge and effort back into his dream.
              </p>
              <p>
                Today, Chai Xpress Café stands strong across multiple states—a brand born not from privilege, but from passion, pain, and persistence.
              </p>
              <p className="font-bold not-italic text-white">
                This is not just success.<br />
                This is courage brewed into reality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vinayak Maurya's Story */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-gold p-4">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800" 
                alt="Director Vinayak Maurya"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold p-8 rounded-2xl shadow-2xl max-w-[250px]">
              <h3 className="text-black font-bold text-xl">Vinayak Maurya</h3>
              <p className="text-black/70 text-sm font-medium">Operations & People Management Director</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 space-y-8"
          >
            <Quote className="w-12 h-12 text-gold opacity-50" />
            <div className="space-y-6 text-text-muted leading-relaxed text-lg italic">
              <p>
                Vinayak Maurya is the embodiment of relentless ambition—beginning his journey in a small village near Bansa, earning from childhood through jobs and even facilitating Aadhaar registrations.
              </p>
              <p>
                Driven by purpose, he moved to Lucknow with dreams larger than his circumstances, starting as a waiter and billing assistant at ₹6000. Fate aligned when he met Shivang Pandey at Chai Xpress Café—two parallel struggles, one shared vision.
              </p>
              <p>
                Recognizing his grit, Shivang embraced him like a brother and elevated him to leadership. Today, Vinayak Maurya stands as Operations & People Management Director, inspiring youth that nothing is impossible.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2"
            >
              <Counter value={10} suffix="+" />
              <p className="text-text-muted text-xs uppercase tracking-widest">Cities</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <Counter value={2} suffix=" Lakhs" />
              <p className="text-text-muted text-xs uppercase tracking-widest">Kulhads Per Day</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-2"
            >
              <Counter value={10000} suffix="" />
              <p className="text-text-muted text-xs uppercase tracking-widest">Litres Milk Used</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <Counter value={100} suffix="%" />
              <p className="text-text-muted text-xs uppercase tracking-widest">Vegetarian</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Tea Section */}
      <section className="py-24 bg-section-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-gold font-bold tracking-[0.3em] text-xs uppercase">THE ESSENCE OF INDIA</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                  Our <span className="text-gold italic">Tea</span> Section
                </h2>
                <div className="w-20 h-1 bg-gold" />
              </div>
              
              <p className="text-text-muted text-lg leading-relaxed">
                At Chai Xpress, tea is not just a beverage; it's a craft. We source our tea leaves from the finest gardens of Assam and Darjeeling, ensuring every brew carries the authentic aroma and strength that Indian tea lovers crave.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Hand-Picked Leaves", desc: "Sourced directly from premium estates." },
                  { title: "Fresh Spices", desc: "Hand-crushed ginger, cardamom, and cloves." },
                  { title: "Traditional Brewing", desc: "Slow-cooked to perfection for rich flavor." },
                  { title: "The Kulhad Magic", desc: "Served in earthy clay cups for that soil aroma." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-2"
                  >
                    <h4 className="text-gold font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                    <p className="text-text-muted text-xs">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold/10 rounded-full blur-3xl -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1594631252845-29fc4586c562?q=80&w=800" 
                alt="Our Tea" 
                className="w-full max-w-md mx-auto drop-shadow-[0_35px_60px_rgba(201,168,76,0.4)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">The Faces Behind <span className="text-gold">Chai Xpress</span></h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {[
            { name: "Shivang Pandey", role: "Founder", img: "https://res.cloudinary.com/dzc1dckta/image/upload/v1774344644/Screenshot_2026-03-24_151028_pdcu49.png" },
            { name: "Vinayak Maurya", role: "Operations & People Management Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800" }
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative mb-6">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors">{member.name}</h3>
                <p className="text-text-muted uppercase tracking-widest text-xs mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-bg-card p-12 rounded-3xl border-t-4 border-gold shadow-2xl"
          >
            <h3 className="text-3xl font-serif font-bold mb-6">Our Mission</h3>
            <p className="text-text-muted leading-relaxed">
              We're on a mission to spread our Kulhad Chai across the world and get people to try it globally & taste the aroma of India's soil with their every sip from Kulhad.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-bg-card p-12 rounded-3xl border-t-4 border-gold shadow-2xl"
          >
            <h3 className="text-3xl font-serif font-bold mb-6">Our Vision</h3>
            <p className="text-text-muted leading-relaxed">
              Our vision is simply to bring Indian cultural values from the roots and blend them with the world-class ambience to serve people with aromatic experiences and cheerful memories.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
