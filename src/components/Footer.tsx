import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, Camera } from 'lucide-react';

interface FooterProps {
  onOpenPhotoGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPhotoGuide }) => {
  return (
    <footer id="lien-he" className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-white rounded-xl px-3 py-1.5 inline-block shadow-sm">
                <img
                  src="https://alovesinh.com/wp-content/uploads/2025/09/logo-alo-ve-sinh.webp"
                  alt="Alo Vệ Sinh"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Alo Vệ Sinh là thương hiệu tiên phong ứng dụng công nghệ hơi nước nóng tiệt trùng 140°C kết hợp sấy nhiệt đối lưu di động. Đảm bảo nệm sạch sâu 99.9% mạt bụi, khử mùi ẩm mốc triệt để và khô cong ngay trong ngày dù trời mưa dầm TP.HCM.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="tel:0962440244"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-90 transition-opacity"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Hotline: 0962.440.244</span>
              </a>
           
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Dịch Vụ Tại Alo Vệ Sinh
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="https://alovesinh.com/giat-nem-tphcm/" className="hover:text-sky-400 transition-colors">
                  Giặt nệm tại nhà TP.HCM
                </a>
              </li>
              <li>
                <a href="https://alovesinh.com/giat-sofa-tphcm/" className="hover:text-sky-400 transition-colors">
                  Giặt sofa vải nỉ & da
                </a>
              </li>
              <li>
                <a href="https://alovesinh.com/giat-tham-tphcm/" className="hover:text-sky-400 transition-colors">
                  Giặt thảm văn phòng & gia đình
                </a>
              </li>
              <li>
                <a href="https://alovesinh.com/giat-ghe-van-phong-tphcm/" className="hover:text-sky-400 transition-colors">
                  Giặt ghế văn phòng
                </a>
              </li>
              <li>
                <a href="https://alovesinh.com/giat-topper-tphcm/" className="hover:text-sky-400 transition-colors">
                  Giặt topper đệm
                </a>
              </li>
              <li>
                <a href="https://alovesinh.com/giat-ghe-o-to-tphcm/" className="hover:text-sky-400 transition-colors">
                  Giặt ghế ô tô
                </a>
              </li>
              <li>
                <a href="https://alovesinh.com/phun-khu-khuan-tphcm/" className="hover:text-sky-400 transition-colors">
                  Phun khử khuẩn y tế
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Addresses */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Hệ Thống Trạm Kỹ Thuật
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Trụ sở chính:</strong> 48/12 Nguyễn Văn Dung, P.6, Gò Vấp, TP.HCM
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Trạm Khu Đông:</strong> 142 Song Hành, P. An Phú, TP. Thủ Đức
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Trạm Khu Nam:</strong> 360 Nguyễn Thị Thập, P. Tân Quy, Quận 7
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Trạm Khu Tây:</strong> 52 Kinh Dương Vương, P.13, Quận 6
                </span>
              </li>
            </ul>
          </div>

          {/* Working hours & Legal */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Thời Gian Làm Việc
            </h4>
            <div className="p-3.5 bg-slate-900 rounded-2xl border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-sky-400 font-bold">
                <Clock className="w-4 h-4" />
                <span>7:00 – 21:30 Hàng Ngày</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Phục vụ xuyên suốt Thứ 7, Chủ Nhật và ngày Lễ Tết không tăng giá, không phụ thu làm ngoài giờ.
              </p>
            </div>

            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Bảo hành chất lượng dịch vụ 7 ngày</span>
              </div>
              <div className="text-[11px] text-slate-500">
                GPKD số: 0316892440 cấp bởi Sở KH&ĐT TP.HCM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <strong className="text-slate-400">Alo Vệ Sinh</strong>. Bản quyền thuộc về Công ty TNHH Dịch Vụ Alo Vệ Sinh.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#loai-nem" className="hover:text-slate-400">Chính sách bảo hành</a>
            <span>•</span>
            <a href="#quy-trinh" className="hover:text-slate-400">Quy chuẩn dịch vụ</a>
            <span>•</span>
            <a href="#khu-vuc" className="hover:text-slate-400">Khu vực 22 quận huyện</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
