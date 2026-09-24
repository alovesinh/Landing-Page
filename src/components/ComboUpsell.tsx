import React from 'react';
import { COMBO_PACKAGES } from '../data/landingData';
import { Sparkles, Check, Flame, ArrowRight, ShieldCheck } from 'lucide-react';

interface ComboUpsellProps {
  onSelectCombo?: (comboName: string) => void;
}

export const ComboUpsell: React.FC<ComboUpsellProps> = ({ onSelectCombo }) => {
  const handleSelect = (name: string) => {
    if (onSelectCombo) {
      onSelectCombo(name);
    }
    const el = document.getElementById('dat-lich');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(num) + 'đ';
  };

  return (
    <section id="combo" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-orange-600" />
            <span>Tiết Kiệm Tối Đa – Giới Hạn 20 Suất/Ngày</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Combo Vệ Sinh Mùa Mưa –{' '}
            <span className="text-orange-600">Sạch Cả Nhà, Tiết Kiệm Đến 35%</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Mùa mưa không chỉ nệm bị ẩm mà sofa phòng khách, topper và thảm trải sàn cũng ngậm đầy vi khuẩn. Tiện một lần thợ tới, hãy vệ sinh trọn gói với chi phí ưu đãi nhất:
          </p>
        </div>

        {/* 3 Combo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {COMBO_PACKAGES.map((combo) => {
            const isPopular = combo.popular;
            return (
              <div
                key={combo.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-gradient-to-b from-emerald-50/60 to-white border-2 border-[#035e16] shadow-xl shadow-emerald-950/10 lg:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Highlight Tag */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-[11px] px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
                    ⭐ ĐƯỢC CHỌN NHIỀU NHẤT MÙA MƯA
                  </div>
                )}

                <div>
                  {/* Badge */}
                  <div className="inline-block text-[11px] font-bold text-orange-700 bg-orange-50 border border-orange-200/80 px-2.5 py-1 rounded-lg mb-3">
                    {combo.badge}
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-2">
                    {combo.name}
                  </h3>

                  <div className="text-xs text-slate-500 font-medium mb-4">
                    Thích hợp cho: {combo.idealFor}
                  </div>

                  {/* Price Box */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-orange-600">
                        {formatVND(combo.salePrice)}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        {formatVND(combo.originalPrice)}
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-700 font-bold mt-1">
                      Tiết kiệm ngay {formatVND(combo.saveAmount)}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                    {combo.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <button
                  type="button"
                  onClick={() => handleSelect(combo.name)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isPopular
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md shadow-orange-500/25'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Chọn Combo Này</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
