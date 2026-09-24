import React, { useState } from 'react';
import { MATTRESS_TYPES } from '../data/landingData';
import { AlertCircle, CheckCircle2, ShieldAlert, Sparkles, Thermometer, Clock, ArrowRight } from 'lucide-react';

interface MattressTabsProps {
  onSelectType?: (typeName: string) => void;
}

export const MattressTabs: React.FC<MattressTabsProps> = ({ onSelectType }) => {
  const [activeTab, setActiveTab] = useState<string>('cao-su');

  const currentMattress = MATTRESS_TYPES.find((m) => m.id === activeTab) || MATTRESS_TYPES[0];

  const handleBookType = (name: string) => {
    if (onSelectType) {
      onSelectType(name);
    }
    const el = document.getElementById('dat-lich');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="loai-nem" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-[#035e16] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#035e16]" />
            <span>Kỹ thuật chuyên sâu theo chất liệu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Xử Lý Riêng Biệt Từng Loại Nệm Trong Mùa Mưa –{' '}
            <span className="text-[#035e16]">Tuyệt Đối Không Làm Hỏng Nệm</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Mỗi chất liệu nệm có cấu trúc lỗ thở và khả năng chịu nhiệt khác nhau. Trong mùa mưa ẩm ướt TP.HCM, giặt sai cách sẽ làm <strong className="text-slate-800">chai mủn cao su, rỉ sét khung lò xo hay mốc đen lõi bông</strong>. Xem cách Alo Vệ Sinh bảo vệ tấm nệm yêu quý của bạn:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {MATTRESS_TYPES.map((type) => {
            const isActive = activeTab === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`px-4 sm:px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#035e16] text-white shadow-lg shadow-[#035e16]/30 scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                <span>{type.name.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel Details */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image & Quick Specs */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md h-64 sm:h-72 group">
                <img
                  src={currentMattress.image}
                  alt={`Dịch vụ giặt ${currentMattress.name} tại nhà TP.HCM chuyên nghiệp sạch sâu chống ẩm`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-medium text-sky-300">Dòng phổ biến:</div>
                  <div className="text-sm font-bold truncate">{currentMattress.commonBrands}</div>
                </div>
              </div>

              {/* Technical indicators */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2.5">
                  <Thermometer className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Nhiệt độ hơi chuẩn</div>
                    <div className="text-xs font-bold text-slate-800">{currentMattress.recommendedTemp}</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Thời gian khô ráo</div>
                    <div className="text-xs font-bold text-slate-800">{currentMattress.dryTime}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information Details */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  {currentMattress.subName}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Kỹ Thuật Giặt {currentMattress.name} Mùa Mưa
                </h3>
              </div>

              {/* Risk in Rainy Season Box */}
              <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 text-xs sm:text-sm text-amber-900 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-amber-800">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Cảnh báo rủi ro khi trời mưa độ ẩm cao:</span>
                </div>
                <p className="leading-relaxed pl-6 text-slate-700">
                  {currentMattress.moistureRisk}
                </p>
              </div>

              {/* Alo Ve Sinh Professional Solution */}
              <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-4 text-xs sm:text-sm text-sky-950 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sky-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Giải pháp kỹ thuật chuyên biệt của Alo Vệ Sinh:</span>
                </div>
                <p className="leading-relaxed pl-6 text-slate-700">
                  {currentMattress.solution}
                </p>
              </div>

              {/* Note / Special Care */}
              <div className="flex items-start gap-2 text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200">
                <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="font-semibold text-slate-800">Cam kết an toàn:</strong>{' '}
                  {currentMattress.specialCare}
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => handleBookType(currentMattress.name)}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-xl shadow-md shadow-sky-600/25 transition-all cursor-pointer"
                >
                  <span>Đặt Giặt {currentMattress.name.split(' (')[0]} Ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:0962440244"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 bg-white border border-slate-300 hover:border-sky-500 text-slate-700 font-semibold text-sm rounded-xl transition-all"
                >
                  <span>Tư vấn kỹ thuật: 0962.440.244</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
