import React from 'react';
import { Phone, ShieldCheck, Clock, Award, Sparkles, Droplets, CheckCircle2, ChevronRight, Wind, Flame, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-sky-50/40 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-sky-100/60">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2 bg-white/90 border border-sky-200/80 shadow-sm rounded-full py-1.5 px-3.5 mb-6 text-xs sm:text-sm font-medium text-slate-700 backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-sky-800">Trạm kỹ thuật TP.HCM:</span>
          <span className="text-slate-600">Đang có 12 kỹ thuật viên trực sẵn khu vực nội thành</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Core Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Rainy Season Problem Tag */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-900 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide">
              <span>⛈️ GIẢI PHÁP ĐẶC TRỊ MÙA MƯA TP.HCM</span>
              <span className="hidden sm:inline text-amber-600">|</span>
              <span className="hidden sm:inline text-amber-700 font-semibold">Khử triệt để mùi ẩm mốc & mạt bụi</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-black text-slate-900 tracking-tight leading-[1.2]">
              Giặt Nệm Tại Nhà TP.HCM –{' '}
              <span className="text-[#035e16]">
                Sạch Sâu, Khô Nhanh
              </span>{' '}
              Ngay Trong Ngày Dù Trời Mưa
            </h1>

            {/* Subheadline emphasizing rainy season risks */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Độ ẩm mùa mưa TP.HCM vượt <strong className="text-slate-800 font-semibold">85%</strong> khiến nệm ngậm ẩm, bốc mùi ẩm mốc khó chịu và khiến <strong className="text-slate-800 font-semibold">mạt bụi, nấm mốc bùng nổ gấp 5 lần</strong> – nguyên nhân hàng đầu gây ngứa ngáy, dị ứng da và hen suyễn ở trẻ nhỏ.
              <br className="hidden sm:inline" />
              {' '}Alo Vệ Sinh mang công nghệ <span className="text-[#035e16] font-semibold underline decoration-emerald-300">hơi nước nóng 140°C & sấy nhiệt đối lưu</span>: Đánh bay vết ố vàng, diệt 99.9% mạt bụi, nệm khô kiệt dùng được ngay tối nay!
            </p>

            {/* 3 Core Trust Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-white/80 border border-emerald-100 p-3 rounded-2xl shadow-xs hover:border-[#035e16] transition-colors">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#035e16] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Có mặt sau 30 phút nội thành TP.HCM
                  </h3>
                  <p className="text-xs text-slate-500">
                    Mạng lưới trạm kỹ thuật phủ 22 quận huyện. Đúng hẹn, chu đáo, không ngại mưa gió ngập đường.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/80 border border-emerald-100 p-3 rounded-2xl shadow-xs hover:border-[#035e16] transition-colors">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Sạch sâu tận lõi – Khô nhanh ngay trong ngày
                  </h3>
                  <p className="text-xs text-slate-500">
                    Hút áp suất cực đại 3000W kết hợp sấy nhiệt đối lưu cưỡng bức, không cần phơi nắng, nằm ngủ ngay tối nay.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/80 border border-emerald-100 p-3 rounded-2xl shadow-xs hover:border-[#035e16] transition-colors">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#035e16] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    An toàn trẻ sơ sinh – Không sạch không tính tiền – Bảo hành 7 ngày
                  </h3>
                  <p className="text-xs text-slate-500">
                    100% dung dịch hữu cơ sinh học đạt chuẩn y tế. Nghiệm thu hài lòng mới thanh toán, cam kết xử lý lại 0đ nếu nệm còn mùi.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="tel:0962440244"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-base rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Phone className="w-5 h-5 fill-white animate-bounce" />
                <span>GỌI NGAY: 0962.440.244</span>
              </a>

              <a
                href="#bang-gia"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-emerald-50 text-slate-800 hover:text-[#035e16] font-bold text-base rounded-2xl border-2 border-slate-200 hover:border-[#035e16] shadow-sm transition-all"
              >
                <span>Xem Bảng Giá</span>
                <ChevronRight className="w-4 h-4 text-[#035e16]" />
              </a>
            </div>

            {/* Real Stats counter banner */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 border-t border-slate-200/60">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-[#035e16] text-sm sm:text-base">12.500+</span>
                <span>Nệm đã giặt sạch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-amber-600 text-sm sm:text-base">4.9/5 ⭐</span>
                <span>(1.280+ Đánh giá thật)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-emerald-600 text-sm sm:text-base">100%</span>
                <span>Khô ráo trong ngày</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1000&auto=format&fit=crop"
                alt="Kỹ thuật viên Alo Vệ Sinh đang giặt nệm tại nhà TP.HCM bằng máy hơi nước nóng công nghiệp"
                className="w-full h-[440px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                loading="eager"
              />

              {/* Gradient Overlay for badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-lg border border-white/50 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#035e16] text-white flex items-center justify-center font-bold text-sm">
                  140°
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800">Hơi Nước Nóng Diệt Khuẩn</div>
                  <div className="text-[10px] text-emerald-600 font-semibold">Tiêu diệt 99.9% vi khuẩn & mạt bụi</div>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/40 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#035e16] uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Công Nghệ Độc Quyền Alo Vệ Sinh
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Khô 100% Trong Ngày
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="text-slate-400 text-[10px]">Máy hút công suất</div>
                    <div className="font-bold text-slate-800 flex items-center gap-1">
                      <Wind className="w-3.5 h-3.5 text-sky-500" />
                      3000W Chân Không
                    </div>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <div className="text-slate-400 text-[10px]">Dung dịch sử dụng</div>
                    <div className="font-bold text-slate-800 flex items-center gap-1">
                      <Droplets className="w-3.5 h-3.5 text-emerald-500" />
                      100% Sinh Học Hữu Cơ
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1 border-t border-slate-100">
                  <span>Khảo sát & tư vấn miễn phí tận giường</span>
                  <a href="#dat-lich" className="text-sky-600 font-bold hover:underline">
                    Đặt lịch ngay →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
