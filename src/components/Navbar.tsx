import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, ShieldCheck, Clock, MapPin, CheckCircle } from 'lucide-react';

interface NavbarProps {
  onOpenPhotoGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPhotoGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    { name: 'Giặt Nệm Tại Nhà', href: 'https://alovesinh.com/giat-nem-tphcm/', tag: 'Chống ẩm mốc' },
    { name: 'Giặt Sofa Vải Nỉ & Da', href: 'https://alovesinh.com/giat-sofa-tphcm/', tag: 'Sấy khô nhanh' },
    { name: 'Giặt Thảm Văn Phòng & Nhà', href: 'https://alovesinh.com/giat-tham-tphcm/', tag: 'Diệt khuẩn 99%' },
    { name: 'Giặt Ghế Văn Phòng', href: 'https://alovesinh.com/giat-ghe-van-phong-tphcm/', tag: 'Giá rẻ số lượng' },
    { name: 'Giặt Topper Đệm', href: 'https://alovesinh.com/giat-topper-tphcm/', tag: 'Khử mùi sâu' },
    { name: 'Giặt Ghế Ô Tô', href: 'https://alovesinh.com/giat-ghe-o-to-tphcm/', tag: 'Tại nhà tiện lợi' },
    { name: 'Phun Khử Khuẩn Cloramin B', href: 'https://alovesinh.com/phun-khu-khuan-tphcm/', tag: 'Chuẩn y tế' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#035e16] text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-900 text-[11px] font-bold px-2 py-0.5 rounded">
              ⛈️ MÙA MƯA TP.HCM
            </span>
            <span className="hidden sm:inline text-emerald-100">
              Độ ẩm không khí tăng cao gây ẩm mốc, mạt bụi bùng nổ – Đặt giặt nệm sấy nhiệt dùng ngay hôm nay!
            </span>
            <span className="sm:hidden text-emerald-100">
              Sấy khô nệm dùng ngay trong ngày mưa!
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-emerald-100">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Có mặt sau 30 phút</span>
            </span>
            <span className="hidden md:flex items-center gap-1 text-emerald-200 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Bảo hành 7 ngày</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white shadow-sm py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="https://alovesinh.com/wp-content/uploads/2025/09/logo-alo-ve-sinh.webp"
              alt="Alo Vệ Sinh"
              className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <span className="hidden sm:inline-flex bg-emerald-50 text-[#035e16] text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-200">
              24/7
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#035e16] transition-colors py-2 cursor-pointer"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Dịch Vụ</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#035e16]' : 'text-slate-400'
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 px-2 transition-all animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Danh Mục Dịch Vụ Tại Nhà
                  </div>
                  {servicesList.map((srv, idx) => (
                    <a
                      key={idx}
                      href={srv.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-emerald-50 hover:text-[#035e16] transition-colors"
                    >
                      <span>{srv.name}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-normal">
                        {srv.tag}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#loai-nem"
              className="text-sm font-semibold text-slate-700 hover:text-[#035e16] transition-colors"
            >
              Loại Nệm
            </a>

            <a
              href="#quy-trinh"
              className="text-sm font-semibold text-slate-700 hover:text-[#035e16] transition-colors"
            >
              Quy Trình
            </a>

            <a
              href="#bang-gia"
              className="text-sm font-semibold text-slate-700 hover:text-[#035e16] transition-colors"
            >
              Bảng Giá
            </a>

            <a
              href="#khu-vuc"
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-[#035e16] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#035e16]" />
              <span>Khu Vực (22 Quận Huyện)</span>
            </a>

            <a
              href="#faq"
              className="text-sm font-semibold text-slate-700 hover:text-[#035e16] transition-colors"
            >
              Hỏi Đáp FAQ
            </a>
          </nav>

          {/* Desktop Right Action: Phone CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0962440244"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white font-bold text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <Phone className="w-4 h-4 fill-white" />
              <span>Gọi ngay: 0962.440.244</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl space-y-3 animate-in slide-in-from-top-2">
            <div className="bg-sky-50 rounded-xl p-3 border border-sky-100 text-xs text-sky-800 flex items-center justify-between">
              <span className="font-semibold">⚡ Trạm kỹ thuật trực 22 quận</span>
              <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">
                Có mặt sau 30P
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold uppercase text-slate-400 px-2 pt-2">
                Dịch vụ tại Alo Vệ Sinh
              </div>
              <div className="grid grid-cols-1 gap-1 pl-1">
                {servicesList.map((srv, idx) => (
                  <a
                    key={idx}
                    href={srv.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                  >
                    <span>{srv.name}</span>
                    <span className="text-[10px] text-sky-600 font-semibold bg-sky-50 px-1.5 py-0.5 rounded">
                      Xem trang ↗
                    </span>
                  </a>
                ))}
              </div>

              <div className="text-xs font-bold uppercase text-slate-400 px-2 pt-3">
                Mục Trang Giặt Nệm
              </div>
              <a
                href="#loai-nem"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-sky-50"
              >
                🛏️ Xử lý 4 loại nệm mùa mưa (Cao su, Lò xo, Foam, Bông ép)
              </a>
              <a
                href="#quy-trinh"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-sky-50"
              >
                🔄 Quy trình 10 bước trong 60 phút
              </a>
              <a
                href="#bang-gia"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-sky-50"
              >
                💰 Bảng giá giặt nệm 2026 (Tính giá nhanh)
              </a>
              <a
                href="#combo"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-amber-700 bg-amber-50"
              >
                🔥 Combo ưu đãi mùa mưa (Tiết kiệm 35%)
              </a>
              <a
                href="#khu-vuc"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-sky-50"
              >
                📍 Khu vực phục vụ (22 quận huyện TP.HCM)
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-sky-50"
              >
                ❓ Câu hỏi thường gặp (FAQ)
              </a>
              <a
                href="#dat-lich"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-sky-700 bg-sky-50"
              >
                📝 Đặt lịch giặt nệm tại nhà
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:0962440244"
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl shadow-md text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Bấm gọi ngay: 0962.440.244</span>
              </a>
              {onOpenPhotoGuide && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPhotoGuide();
                  }}
                  className="text-xs text-slate-500 hover:text-sky-600 underline text-center py-1"
                >
                  📷 Xem hướng dẫn ảnh SEO & máy móc
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
