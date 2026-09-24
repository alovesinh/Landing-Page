import React from 'react';
import { BRAND_DIFFERENCES } from '../data/landingData';
import { XCircle, CheckCircle2, ShieldCheck, Zap, FlaskConical, UserCheck, SunMedium } from 'lucide-react';

export const BrandPositioning: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#035e16]" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-[#035e16]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#035e16]" />;
      case 'SunMedium':
        return <SunMedium className="w-5 h-5 text-orange-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#035e16]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-[#035e16] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#035e16]" />
            <span>Định Vị Chất Lượng Dịch Vụ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Vì Sao Alo Vệ Sinh{' '}
            <span className="text-[#035e16]">Không Phải Là Đơn Vị Rẻ Nhất?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Một tấm nệm cao su hay lò xo có giá từ <strong className="text-slate-800">10 – 35 triệu đồng</strong>. Liệu bạn có dám đánh cược sức khỏe cả nhà và tuổi thọ tấm nệm với dịch vụ “giặt nệm 99k” dùng hóa chất tẩy quần áo và để nệm ngậm nước ẩm mốc suốt mùa mưa?
          </p>
        </div>

        {/* 4 Differences Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {BRAND_DIFFERENCES.map((diff, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              {/* Title with Icon */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  {getIcon(diff.icon)}
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  {diff.title}
                </h3>
              </div>

              {/* Comparison boxes */}
              <div className="space-y-3 text-xs sm:text-sm">
                {/* Cheap / amateur service */}
                <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 text-slate-700 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-rose-800 block text-xs">
                      Dịch vụ giá rẻ trôi nổi:
                    </span>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {diff.cheapService}
                    </p>
                  </div>
                </div>

                {/* Alo Ve Sinh standard */}
                <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-slate-700 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-900 block text-xs">
                      Tiêu chuẩn chuẩn hóa Alo Vệ Sinh:
                    </span>
                    <p className="text-slate-700 mt-0.5 leading-relaxed font-medium">
                      {diff.aloVeSinh}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 italic">
            “Chi phí để mua một tấm nệm mới đắt gấp 20 lần chi phí vệ sinh chuyên nghiệp đúng cách định kỳ 6 tháng/lần.”
          </p>
        </div>
      </div>
    </section>
  );
};
