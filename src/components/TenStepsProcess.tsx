import React from 'react';
import { TEN_STEPS } from '../data/landingData';
import {
  Search,
  Wind,
  Droplet,
  Sparkles,
  Flame,
  RefreshCw,
  ShieldCheck,
  Droplets,
  RotateCw,
  CheckCircle2,
  Clock,
  Zap,
} from 'lucide-react';

export const TenStepsProcess: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-sky-600" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-sky-600" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-orange-600" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-sky-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-teal-600" />;
      case 'RotateCw':
        return <RotateCw className="w-5 h-5 text-indigo-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      default:
        return <Zap className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="quy-trinh" className="py-16 sm:py-20 bg-slate-50/60 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-[#035e16] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-[#035e16]" />
            <span>Quy Chuẩn Chuyên Nghiệp 10 Bước</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Quy Trình Giặt Nệm Chuẩn Y Khoa{' '}
            <span className="text-[#035e16]">10 Bước Sạch Sâu</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Mỗi bước đều được kỹ thuật viên Alo Vệ Sinh thực hiện tỉ mỉ, kiểm tra chất liệu cẩn thận, xử lý triệt để vết ố và vi khuẩn nhằm mang lại sự an tâm tuyệt đối cho giấc ngủ của gia đình bạn.
          </p>
        </div>

        {/* 10 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {TEN_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white hover:bg-emerald-50/30 rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-[#035e16] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Step number + Duration */}
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-[#035e16] text-white font-black text-sm flex items-center justify-center shadow-xs">
                    {step.step < 10 ? `0${step.step}` : step.step}
                  </span>
                  <span className="text-[11px] font-bold text-[#035e16] bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#035e16]" />
                    {step.duration}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(step.iconName)}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Tech badge */}
              <div className="mt-4 pt-2.5 border-t border-slate-100 text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="truncate">{step.tech}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Commitment */}
        <div className="mt-10 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-700 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>Cam kết chất lượng:</strong> Khách hàng trực tiếp kiểm tra và nghiệm thu nệm sạch thơm, chỉ thanh toán khi hoàn toàn hài lòng!
            </span>
          </div>
          <a
            href="tel:0962440244"
            className="shrink-0 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
          >
            Tư vấn quy trình: 0962.440.244
          </a>
        </div>
      </div>
    </section>
  );
};

