import React, { useState } from 'react';
import { DISTRICTS_HCM } from '../data/landingData';
import { MapPin, Clock, Search, ShieldCheck, Phone, CheckCircle } from 'lucide-react';

export const LocalCoverage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState('Tất cả');

  const zones = ['Tất cả', 'Trung tâm', 'Nội thành', 'Khu Đông', 'Khu Tây', 'Khu Nam', 'Khu Bắc', 'Ngoại thành'];

  const filteredDistricts = DISTRICTS_HCM.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesZone = selectedZone === 'Tất cả' || d.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  return (
    <section id="khu-vuc" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Mạng Lưới Kỹ Thuật Viên Phủ Sóng Rộng Khắp</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Khu Vực Phục Vụ Tại TP.HCM –{' '}
            <span className="text-[#035e16]">Có Mặt Sau 30 Phút Nội Thành</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Alo Vệ Sinh bố trí các trạm kỹ thuật viên lưu động thường trực tại <strong className="text-slate-800">22 quận huyện TP.HCM</strong>. Dù trời mưa gió ngập đường, chúng tôi cam kết tới đúng giờ, không để khách hàng phải chờ đợi.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-3xl mx-auto mb-8 space-y-3">
          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Nhập tên quận/huyện của bạn (ví dụ: Quận 1, Bình Thạnh, Thủ Đức...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-medium shadow-xs focus:ring-2 focus:ring-[#035e16] focus:outline-none"
            />
          </div>

          {/* Zone filter chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {zones.map((z) => (
              <button
                key={z}
                onClick={() => setSelectedZone(z)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedZone === z
                    ? 'bg-[#035e16] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {z}
              </button>
            ))}
          </div>
        </div>

        {/* District Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredDistricts.map((d, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-xs hover:border-sky-400 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                  {d.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="flex items-center gap-1 text-[11px] text-sky-700 font-semibold mb-1">
                <Clock className="w-3 h-3 text-sky-500" />
                <span>{d.time}</span>
              </div>

              <div className="text-[10px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 font-medium truncate">
                {d.status}
              </div>
            </div>
          ))}
        </div>

        {filteredDistricts.length === 0 && (
          <div className="text-center py-10 text-slate-500 text-sm">
            Không tìm thấy quận huyện phù hợp. Vui lòng gọi ngay 0962.440.244 để được điều thợ gần nhất!
          </div>
        )}

        {/* Local SEO Assurance Box */}
        <div className="mt-10 bg-white rounded-3xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm sm:text-base">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Chính sách miễn phí 100% chi phí di chuyển nội thành</span>
            </div>
            <p className="text-slate-500 text-xs">
              Dù bạn ở hẻm sâu, chung cư cao tầng hay nhà phố ngoại thành, Alo Vệ Sinh giữ đúng giá niêm yết, không thu thêm phí cầu đường, bãi xe hay phụ phí ngày mưa.
            </p>
          </div>

          <a
            href="tel:0962440244"
            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Gọi Thợ Khu Vực Của Bạn: 0962.440.244</span>
          </a>
        </div>
      </div>
    </section>
  );
};
