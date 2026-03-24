import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronRight, Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STATS, cn } from '../constants';

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
          const duration = 2000;
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
      <div className="text-5xl md:text-6xl font-serif font-bold text-gold mb-2">
        {count}{suffix}
      </div>
    </div>
  );
};

const MenuCarousel = () => {
  const items = [
    { name: "KULHAD CHAI", price: "30", image: "https://images.unsplash.com/photo-1594631252845-29fc4586c562?q=80&w=400" },
    { name: "ADRAK MASALA", price: "45", image: "https://images.unsplash.com/photo-1544787210-2827448636b2?q=80&w=400" },
    { name: "KESAR KASHMIRI", price: "55", image: "https://images.unsplash.com/photo-1594631252845-29fc4586c562?q=80&w=400" },
    { name: "TADKA ELAICHI", price: "35", image: "https://images.unsplash.com/photo-1544787210-2827448636b2?q=80&w=400" },
    { name: "ELAICHI ADRAK", price: "40", image: "https://images.unsplash.com/photo-1594631252845-29fc4586c562?q=80&w=400" },
    { name: "TULSI GINGER", price: "45", image: "https://images.unsplash.com/photo-1544787210-2827448636b2?q=80&w=400" },
    { name: "DEVIL ZONE", price: "149", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=400" },
    { name: "ROSE CHAI", price: "50", image: "https://images.unsplash.com/photo-1594631252845-29fc4586c562?q=80&w=400" },
    { name: "PAAN CHAI", price: "60", image: "https://images.unsplash.com/photo-1544787210-2827448636b2?q=80&w=400" },
  ];

  const extendedItems = [...items, ...items, ...items];
  const [currentIndex, setCurrentIndex] = useState(items.length);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemWidth = windowWidth < 640 ? 260 : 320;
  const gap = windowWidth < 640 ? 16 : 32;
  const totalWidth = itemWidth + gap;

  const handleIndexChange = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(newIndex);

    setTimeout(() => {
      if (newIndex >= items.length * 2) {
        setCurrentIndex(newIndex - items.length);
      } else if (newIndex < items.length) {
        setCurrentIndex(newIndex + items.length);
      }
      setIsAnimating(false);
    }, 500);
  };

  const onDragEnd = (event: any, info: any) => {
    const shift = info.offset.x + info.velocity.x * 0.1; // Predict destination based on velocity
    const indexThreshold = totalWidth / 3;
    
    if (Math.abs(shift) > indexThreshold) {
      const direction = shift > 0 ? -1 : 1;
      const moveCount = Math.max(1, Math.floor(Math.abs(shift) / totalWidth));
      handleIndexChange(currentIndex + (direction * moveCount));
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-24">
      <div className="relative flex justify-center items-center overflow-hidden">
        {/* Navigation Buttons - Hidden on Mobile */}
        <button 
          onClick={() => handleIndexChange(currentIndex - 1)}
          className="hidden md:flex absolute left-4 md:left-10 z-50 bg-gold/10 hover:bg-gold text-gold hover:text-black p-5 rounded-full transition-all backdrop-blur-md border border-gold/30 shadow-2xl group"
        >
          <ChevronRight className="w-8 h-8 rotate-180 group-hover:scale-110 transition-transform" />
        </button>

        <button 
          onClick={() => handleIndexChange(currentIndex + 1)}
          className="hidden md:flex absolute right-4 md:right-10 z-50 bg-gold/10 hover:bg-gold text-gold hover:text-black p-5 rounded-full transition-all backdrop-blur-md border border-gold/30 shadow-2xl group"
        >
          <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>

        <div className="w-full flex justify-center py-10">
          <motion.div 
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDragEnd={onDragEnd}
            style={{ gap: `${gap}px` }}
            animate={{ x: `calc(50% - ${itemWidth / 2}px - ${currentIndex * totalWidth}px)` }}
            transition={isAnimating ? { type: "spring", stiffness: 200, damping: 30, mass: 0.8 } : { duration: 0 }}
          >
            {extendedItems.map((item, i) => {
              const isCenter = i === currentIndex;
              return (
                <motion.div
                  key={i}
                  whileHover={{ 
                    scale: isCenter ? 1.15 : 1.05,
                    zIndex: 60 
                  }}
                  className={cn(
                    "relative shrink-0 rounded-[40px] md:rounded-[50px] pt-20 md:pt-28 pb-10 md:pb-14 px-6 md:px-10 transition-all duration-700 cursor-pointer select-none",
                    isCenter 
                      ? "bg-gold text-black scale-105 md:scale-110 z-40 shadow-[0_20px_40px_rgba(201,168,76,0.3)] md:shadow-[0_40px_80px_rgba(201,168,76,0.4)] ring-4 ring-gold/20" 
                      : "bg-bg-card text-white border border-white/10 opacity-30 scale-90 blur-[1px]"
                  )}
                  style={{ width: `${itemWidth}px` }}
                >
                  {/* Product Image */}
                  <div className={cn(
                    "absolute -top-12 md:-top-20 left-1/2 -translate-x-1/2 w-32 h-32 md:w-44 md:h-44 z-50 transition-all duration-700",
                    isCenter ? "scale-110 drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] md:drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]" : "scale-90 opacity-80"
                  )}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className={cn(
                        "w-full h-full object-cover rounded-full border-[4px] md:border-[6px]",
                        isCenter ? "border-white" : "border-gold/30"
                      )}
                      draggable={false}
                      referrerPolicy="no-referrer"
                    />
                    {isCenter && (
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-gold/20 -z-10 blur-xl"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-6 md:space-y-8">
                    <div className="space-y-1 md:space-y-2">
                      <span className={cn(
                        "text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase",
                        isCenter ? "text-black/60" : "text-gold"
                      )}>
                        Signature Blend
                      </span>
                      <h3 className="text-xl md:text-3xl font-black tracking-tighter leading-none">{item.name}</h3>
                    </div>

                    <div className="flex flex-col items-center gap-0.5 md:gap-1">
                      <span className="text-[10px] md:text-xs font-bold opacity-50 uppercase tracking-widest">Price</span>
                      <div className="text-2xl md:text-4xl font-serif font-black">₹{item.price}</div>
                    </div>
                    
                    <div className="pt-2 md:pt-4">
                      <Link 
                        to="/menu"
                        className={cn(
                          "inline-block w-full py-3 md:py-5 rounded-full font-black text-[10px] md:text-xs tracking-[0.2em] transition-all transform active:scale-95 shadow-xl uppercase",
                          isCenter 
                            ? "bg-black text-gold hover:bg-black/90" 
                            : "bg-gold text-black hover:bg-gold-light"
                        )}
                      >
                        Explore Taste
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-16">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => handleIndexChange(i + items.length)}
            className={cn(
              "h-2 rounded-full transition-all duration-500",
              (currentIndex % items.length) === i 
                ? "w-12 bg-gold shadow-[0_0_15px_rgba(201,168,76,0.5)]" 
                : "w-2 bg-white/10 hover:bg-white/30"
            )}
          />
        ))}
      </div>
    </div>
  );
};

const ChaiAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalFrames = 136;
  const frameRef = useRef(1);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadingState, setLoadingState] = useState<'initial' | 'partial' | 'complete'>('initial');

  useEffect(() => {
    let loadedCount = 0;
    const framesToLoad = Array.from({ length: totalFrames }, (_, i) => i + 1);
    
    // Prioritize frame 1 for instant visibility
    const loadFrame = (i: number) => {
      const img = new Image();
      img.src = `/frames/ezgif-frame-${i.toString().padStart(3, '0')}.png`;
      img.onload = () => {
        imagesRef.current[i] = img;
        loadedCount++;
        
        if (i === 1) setLoadingState('partial');
        if (loadedCount === totalFrames) setLoadingState('complete');
        
        // Render first frame immediately once ready
        if (i === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      };
    };

    // Load first frame immediately
    loadFrame(1);
    
    // Load the rest in chunks to not block the main thread
    setTimeout(() => {
      framesToLoad.slice(1).forEach(i => loadFrame(i));
    }, 100);
  }, []);

  useEffect(() => {
    if (loadingState === 'initial') return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const fps = 30;
    const interval = 1000 / fps;

    const render = (time: number) => {
      const delta = time - lastTime;
      if (delta > interval) {
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          if (ctx) {
            const img = imagesRef.current[frameRef.current];
            if (img && img.complete) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              
              // Maintain the final uncropped/stable sizing from previous refinements
              const sw = img.width; 
              const sh = 1550; 
              const sx = 0;
              const sy = (img.height - sh) / 2 + 50; 
              
              const padding = canvas.width * 0.05;
              const dSize = canvas.width - (padding * 2);
              const aspect = sw / sh;
              const dWidth = dSize * aspect;
              const dx = (canvas.width - dWidth) / 2;
              
              ctx.drawImage(img, sx, sy, sw, sh, dx, padding, dWidth, dSize);
              
              // Only advance frame if next frame is ready or we are repeating the last ready frame
              const nextFrame = (frameRef.current % totalFrames) + 1;
              if (imagesRef.current[nextFrame] && imagesRef.current[nextFrame].complete) {
                frameRef.current = nextFrame;
              }
              lastTime = time - (delta % interval);
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [loadingState]);

  return (
    <div className="relative w-full aspect-square flex items-center justify-center z-10 transition-all duration-500">
      <div className="w-[100%] max-w-[550px] aspect-square">
        <canvas 
          ref={canvasRef}
          width={1000} 
          height={1000}
          className="w-full h-full object-contain mix-blend-screen"
        />
      </div>
      {loadingState === 'initial' && (
        <div className="absolute inset-0 flex items-center justify-center text-gold/30 text-[10px] font-bold tracking-[0.5em] animate-pulse uppercase">
          Brewing...
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const menuPreview = [
    { name: "Kulhad Chai", price: "30", desc: "Classic clay cup masala chai — cardamom, ginger, spices", bestseller: true },
    { name: "Adrak Wali Chai", price: "35", desc: "Strong ginger brew with hand-crushed ginger" },
    { name: "Masala Maggi", price: "60", desc: "Street-style spicy Maggi with masala seasoning" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544787210-2827448636b2?q=80&w=2000)' }}
        />

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <p className="text-gold font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase text-center lg:text-left">CHAI XPRESS SIGNATURE</p>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold leading-tight text-center lg:text-left">
                <span className="italic font-normal block text-white">Taste The</span>
                <span className="text-gold">GOODNESS</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white/90 text-center lg:text-left">FOOD, FRIENDS & FUN</p>
            </div>
            
            <p className="text-text-muted max-w-md text-sm md:text-base leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
              Experience the soul of India in every sip. From the streets of Kolkata to the heart of Delhi, we bring you the most authentic Kulhad Chai.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/outlets" className="bg-gold text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-xs md:text-sm hover:bg-gold-light transition-all transform hover:scale-105">
                LOCATE STORE
              </Link>
              <Link to="/menu" className="border-2 border-gold text-gold px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-xs md:text-sm hover:bg-gold hover:text-black transition-all transform hover:scale-105">
                VIEW MENU
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <ChaiAnimation />
          </motion.div>
        </div>

        <div className="absolute right-0 top-0 h-full w-12 bg-gold hidden xl:flex flex-col items-center justify-center z-30">
          <span className="rotate-90 whitespace-nowrap font-bold tracking-[0.5em] text-black text-[10px]">KULHAD CHAI • CHAI XPRESS</span>
        </div>


      </section>

      {/* Story Section */}
      <section className="py-24 bg-bg-page overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold" />
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000" 
              alt="Cafe Interior"
              className="rounded-xl shadow-2xl transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
              A Story Brewed with <span className="text-gold">Passion</span>
            </h2>
            <div className="w-12 h-1 bg-gold mx-auto lg:mx-0" />
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              Our journey started with a simple vision: to bring the authentic taste of Indian street chai to a modern, premium setting. We believe that chai is more than just a drink; it's a culture, a conversation, and a moment of peace in a busy world.
            </p>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              Every cup we serve is brewed with hand-picked tea leaves, fresh spices, and a whole lot of love. Our signature Kulhad Chai is a tribute to the roots of Indian tea culture.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-gold font-bold hover:gap-4 transition-all text-sm">
              OUR STORY <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-section-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-text-muted text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-center">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section className="py-32 bg-bg-page overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24 space-y-4"
          >
            <span className="text-gold font-bold tracking-[0.4em] text-[10px] uppercase">CRAFTED WITH LOVE</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold">Signature <span className="text-gold italic font-normal">Showcase</span></h2>
          </motion.div>

            <div className="relative group">
              <div className="px-4 py-20 -my-20">
              <motion.div 
                className="flex gap-8"
                animate={{ x: `calc(-${(100 / 3) * 0}%)` }} // We'll use a simpler approach for the slider
              >
                {/* We'll implement a manual slider with state for better control */}
                <MenuCarousel />
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <Link to="/menu" className="inline-flex items-center gap-3 text-gold font-bold hover:gap-5 transition-all uppercase tracking-[0.3em] text-xs">
              EXPLORE FULL MENU <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sips of India Mobile Header */}
      <div className="lg:hidden bg-bg-page pt-20 pb-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-serif font-black text-white uppercase tracking-tighter"
        >
          Sips of India
        </motion.h2>
      </div>

      {/* Marquee Strip */}
      <div className="bg-gold py-4 overflow-hidden border-y-2 border-black">
        <div className="flex whitespace-nowrap animate-marquee-fast">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="text-black font-bold tracking-[0.3em] text-sm uppercase">CHAI XPRESS ✦ CHAI XPRESS ✦ </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bold Statement Section */}
      <section className="py-20 lg:py-40 bg-bg-page relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative flex items-center justify-between min-h-[200px] lg:min-h-[300px]">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden lg:block text-[clamp(2rem,8vw,8rem)] font-serif font-black leading-none text-white uppercase tracking-tighter select-none"
          >
            Sips Of
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full flex justify-center"
          >
            <img 
              src="https://res.cloudinary.com/dzc1dckta/image/upload/v1774346365/unnamed-removebg-preview_euguhg.png" 
              alt="Kulhad Chai" 
              className="w-64 md:w-80 lg:w-[450px] drop-shadow-[0_35px_60px_rgba(201,168,76,0.6)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 0.1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden lg:block text-[clamp(2rem,8vw,8rem)] font-serif font-black leading-none text-white uppercase tracking-tighter select-none"
          >
            India
          </motion.h2>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24 space-y-4"
          >
            <span className="text-gold font-bold tracking-[0.4em] text-[10px] uppercase">LIFESTYLE</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">More Than Just <span className="text-gold italic font-normal">Chai</span></h2>
            <div className="w-12 h-1 bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[240px]">
            {[
              { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800", label: "People Enjoying", className: "md:row-span-2" },
              { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800", label: "Café Vibe", className: "" },
              { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800", label: "Friends & Chai", className: "" },
              { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800", label: "Events", className: "" },
              { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800", label: "Moments", className: "md:col-span-3" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative rounded-[32px] overflow-hidden group border border-white/5",
                  item.className
                )}
              >
                <img 
                  src={item.src} 
                  alt={item.label} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-white font-serif text-2xl font-bold tracking-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {item.label}
                  </p>
                  <div className="w-0 group-hover:w-12 h-0.5 bg-gold transition-all duration-500 mt-2" />
                </div>

                {/* Decorative Border like in the image */}
                <div className="absolute inset-4 border border-gold/20 rounded-[24px] pointer-events-none group-hover:border-gold/50 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-24 bg-bg-page">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gold w-full md:w-16 rounded-2xl flex md:flex-col items-center justify-center p-4 md:py-12 gap-4"
            >
              <span className="md:-rotate-90 whitespace-nowrap font-black tracking-[0.5em] text-black text-xl uppercase">VISIT US</span>
            </motion.div>

            <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Rajinder Nagar", city: "New Delhi", time: "8AM–11PM" },
                { name: "Bandra West", city: "Mumbai, MH", time: "7:30AM–12AM" },
                { name: "Koramangala", city: "Bangalore, KA", time: "8AM–11:30PM" }
              ].map((outlet, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-bg-card p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all group"
                >
                  <div className="aspect-video bg-white/5 rounded-xl mb-6 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${outlet.name}/400/250`} alt={outlet.name} className="w-full h-full object-cover transition-all" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{outlet.name}</h3>
                  <p className="text-text-muted text-xs mb-4">{outlet.city}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold text-[10px] font-bold tracking-widest">{outlet.time}</span>
                    <Link to="/outlets" className="text-white hover:text-gold transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link to="/outlets" className="inline-flex items-center gap-2 text-gold font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs">
              VIEW ALL OUTLETS <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Franchise Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#111108] z-10 opacity-90" />
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559925373-c518398d57f3?q=80&w=2000)' }}
        />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 relative z-20 text-center space-y-6 md:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white">Bring Chai Xpress To Your City</h2>
          <p className="text-gold-light text-base md:text-xl max-w-2xl mx-auto font-medium">
            Join the fastest-growing chai café franchise in India and be part of our success story.
          </p>
          <Link to="/franchise" className="inline-block bg-gold text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-gold-light transition-all transform hover:scale-105 shadow-2xl">
            APPLY FOR FRANCHISE
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
