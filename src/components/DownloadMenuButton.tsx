import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function DownloadMenuButton() {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1Mkmml85SC3JE-lPuFktVQZfn-23z9Za5/view?usp=sharing', '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-10 right-10 z-50"
    >
      <button 
        onClick={handleDownload}
        className="bg-gold text-black px-6 py-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 font-bold text-sm border-2 border-black/10"
      >
        <Download className="w-5 h-5" />
        <span>DOWNLOAD MENU</span>
      </button>
    </motion.div>
  );
}
