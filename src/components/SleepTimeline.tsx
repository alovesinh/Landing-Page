import React from 'react';
import { TIMELINE_POINTS } from '../data/landingData';
import { Moon, CloudRain, AlertTriangle, Frown, ShieldCheck, Microscope, Bug, Sparkles } from 'lucide-react';

export const SleepTimeline: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Moon':
        return <Moon className="w-5 h-5 text-indigo-500" />;
      case 'CloudRain':
        return <CloudRain className="w-5 h-5 text-sky-500" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'Frown':
        return <Frown className="w-5 h-5 text-rose-500" />;
      default:
        return <Microscope className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Microscope className="w-3.5 h-3.5 text-rose-600" />
            <span>Góc nhìn vi sinh học mùa mưa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Điều Gì Thực Sự Xảy Ra Trong Chiếc Nệm Ẩm{' '}
            <span className="text-rose-600">Suốt 8 Giờ Đêm Bạn Ngủ?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Trong mùa mưa dầm tại TP.HCM, độ ẩm không khí thường xuyên duy trì ở mức <strong className="text-slate-800">85% – 95%</strong>. Chiếc nệm phòng ngủ không thể thoát ẩm tự nhiên, trở thành chiếc “lồng ấp” lý tưởng cho hàng triệu sinh vật gây hại:
          </p>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-sky-300 to-rose-200 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {TIMELINE_POINTS.map((pt, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge with Time & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-xl">
                      {pt.time}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                      {getIcon(pt.icon)}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {pt.title}
                  </h3>

                  {/* Scientific Metric Tag */}
                  <div className="inline-block text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-200/60 px-2 py-0.5 rounded-md mb-3">
                    {pt.temp}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                {/* Sub insight indicator */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                  <Bug className="w-3.5 h-3.5 text-slate-400" />
                  <span>Ảnh hưởng trực tiếp đến hệ hô hấp</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scientific Solution Card Callout */}
        <div className="mt-12 bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-sky-200 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Giải Pháp Triệt Tiêu Chu Trình Sinh Học</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold">
              Công nghệ Hơi Nước Nóng 140°C & Khử Khuẩn Nano Bạc Alo Vệ Sinh
            </h3>
            <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed">
              Khác với giặt nước lạnh thông thường chỉ làm ướt thêm lõi nệm trong mùa mưa, công nghệ hơi nước nóng áp suất cao bóc tách toàn bộ mạt bụi, kết hợp lực hút 3000W rút cạn phân vi sinh vật và sấy nhiệt cưỡng bức dập tắt môi trường ẩm sinh sôi.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#dat-lich"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-amber-400/30 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Bảo Vệ Giấc Ngủ Gia Đình</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
