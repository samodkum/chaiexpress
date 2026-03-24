import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function DownloadMenuButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Chai Express Menu.pdf';
    link.download = 'Chai Express Menu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-10 right-10 z-[60]"
    >
      <button 
        onClick={handleDownload}
        className="bg-gold text-black px-6 py-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 font-bold text-sm border-2 border-black/10 group overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <Download className="w-5 h-5 relative z-10" />
        <span className="relative z-10">DOWNLOAD MENU</span>
      </button>
    </motion.div>
  );
}
