import React from 'react';
import { RISK_GUARANTEES } from '../data/landingData';
import { Clock, ShieldCheck, HeartHandshake, DollarSign, FileCheck, CheckCircle2 } from 'lucide-react';

export const RiskReversal: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-sky-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-500" />;
      case 'DollarSign':
        return <DollarSign className="w-6 h-6 text-amber-500" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-indigo-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Xóa Bỏ 100% Rủi Ro Khách Hàng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            5 Cam Kết Vàng Khi Giặt Nệm Tại{' '}
            <span className="text-sky-600">Alo Vệ Sinh</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Chúng tôi hiểu bạn luôn lo ngại về thợ đến trễ, làm ẩm ướt hỏng nệm hoặc phát sinh chi phí vô lý. Đây là lời cam kết bằng văn bản từ Ban giám đốc Alo Vệ Sinh:
          </p>
        </div>

        {/* 5 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {RISK_GUARANTEES.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:border-sky-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-base font-black text-slate-900 leading-snug mb-1">
                  {item.title}
                </h3>

                <div className="text-xs font-bold text-sky-600 mb-3">
                  {item.sub}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Cam kết có hiệu lực pháp lý</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
