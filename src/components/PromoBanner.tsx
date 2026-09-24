import React, { useState, useEffect } from 'react';
import { Tag, Clock, Flame, Check, Copy, Gift, ArrowRight } from 'lucide-react';

interface PromoBannerProps {
  onApplyVoucher?: (code: string) => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onApplyVoucher }) => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  // Countdown timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const voucherCode = 'GIATNEM20';

  const handleCopy = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopied(true);
    if (onApplyVoucher) {
      onApplyVoucher(voucherCode);
    }
    setTimeout(() => setCopied(false), 3000);
  };

  const handleClaimNow = () => {
    if (onApplyVoucher) {
      onApplyVoucher(voucherCode);
    }
    const el = document.getElementById('dat-lich');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/15 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-slate-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                <Flame className="w-4 h-4 fill-slate-900" />
                <span>Chiến Dịch Cứu Nệm Mùa Mưa TP.HCM</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
                Ưu Đãi Đặc Quyền Mùa Mưa:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
                  GIẢM NGAY 20%
                </span>{' '}
                Cho Đơn Đầu Tiên
              </h2>

              <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed">
                Đừng để chiếc nệm gia đình ngậm ẩm mốc suốt mùa mưa! Alo Vệ Sinh trợ giá 20% toàn bộ dịch vụ giặt nệm kèm <strong className="text-amber-300">sấy nhiệt đối lưu miễn phí</strong>. Giới hạn đúng 50 suất trong tháng, áp dụng đến hết ngày 30/09 hoặc khi hết suất.
              </p>

              {/* Progress Bar of slots */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <span className="flex items-center gap-1 text-amber-300">
                    <Gift className="w-4 h-4" />
                    Đã có 42/50 khách hàng đăng ký thành công
                  </span>
                  <span className="text-orange-300 bg-orange-500/20 px-2 py-0.5 rounded font-bold">
                    Chỉ còn 8 suất hôm nay!
                  </span>
                </div>
                <div className="w-full bg-slate-700/60 rounded-full h-3 overflow-hidden p-0.5 border border-white/10">
                  <div
                    className="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-full transition-all duration-1000 shadow-sm"
                    style={{ width: '84%' }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Countdown & Voucher Box */}
            <div className="lg:col-span-5 bg-white/10 border border-white/20 rounded-2xl p-5 sm:p-6 text-center space-y-4">
              <div className="text-xs font-semibold text-sky-200 uppercase tracking-wider flex items-center justify-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Thời Gian Ưu Đãi Kết Thúc Sau (30/09)</span>
              </div>

              {/* Countdown Numbers */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-slate-900/60 rounded-xl p-2 border border-white/10">
                  <div className="text-xl sm:text-2xl font-black text-amber-300">{timeLeft.days}</div>
                  <div className="text-[10px] text-slate-300 uppercase">Ngày</div>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-2 border border-white/10">
                  <div className="text-xl sm:text-2xl font-black text-amber-300">{timeLeft.hours}</div>
                  <div className="text-[10px] text-slate-300 uppercase">Giờ</div>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-2 border border-white/10">
                  <div className="text-xl sm:text-2xl font-black text-amber-300">{timeLeft.minutes}</div>
                  <div className="text-[10px] text-slate-300 uppercase">Phút</div>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-2 border border-white/10">
                  <div className="text-xl sm:text-2xl font-black text-amber-300">{timeLeft.seconds}</div>
                  <div className="text-[10px] text-slate-300 uppercase">Giây</div>
                </div>
              </div>

              {/* Voucher Code Copy Component */}
              <div className="bg-slate-950/50 border-2 border-dashed border-amber-400/60 rounded-xl p-3 flex items-center justify-between gap-2">
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 font-medium uppercase">Mã giảm 20%</div>
                  <div className="text-lg font-mono font-black text-amber-400 tracking-wider">
                    {voucherCode}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép</span>
                    </>
                  )}
                </button>
              </div>

              <button
                type="button"
                onClick={handleClaimNow}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-orange-500/30 transition-all cursor-pointer"
              >
                <span>Nhận Suất Ưu Đãi Ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
