import React from 'react';
import { Phone, Calendar, MessageSquare, Tag } from 'lucide-react';

interface StickyMobileBarProps {
  onQuickBook?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onQuickBook }) => {
  const scrollToBooking = () => {
    if (onQuickBook) {
      onQuickBook();
    }
    const el = document.getElementById('dat-lich');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const el = document.getElementById('bang-gia');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2.5 px-3">
      <div className="max-w-md mx-auto flex items-center gap-2">
        {/* Quick Price Button */}
        <button
          type="button"
          onClick={scrollToPricing}
          className="flex flex-col items-center justify-center px-3 py-1.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <Tag className="w-4 h-4 text-[#035e16]" />
          <span className="text-[10px] font-bold">Bảng Giá</span>
        </button>

        {/* Quick Booking Button */}
        <button
          type="button"
          onClick={scrollToBooking}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#035e16] hover:bg-[#024a11] text-white rounded-xl font-bold text-xs shadow-md shadow-[#035e16]/20 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Đặt Lịch (Có mặt 30P)</span>
        </button>

        {/* Pulsing Phone Call Button */}
        <a
          href="tel:0962440244"
          className="flex-1 relative flex items-center justify-center gap-1.5 py-2.5 px-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-black text-xs shadow-lg shadow-orange-500/30 active:scale-95 transition-all overflow-hidden"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <Phone className="w-4 h-4 fill-white" />
          <span>Gọi: 0962.440.244</span>
        </a>
      </div>
    </div>
  );
};
