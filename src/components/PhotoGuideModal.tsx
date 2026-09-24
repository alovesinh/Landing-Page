import React from 'react';
import { X, Camera, Image, CheckCircle, Sparkles, FileText, Info } from 'lucide-react';

interface PhotoGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoGuideModal: React.FC<PhotoGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const photoCategories = [
    {
      category: '1. Ảnh Hero Banner & Đầu Trang',
      specs: 'Tỷ lệ 16:9 hoặc 3:2 (1200 x 800px), định dạng WebP < 150KB',
      altText: 'Kỹ thuật viên Alo Vệ Sinh giặt nệm mùa mưa tại nhà TP.HCM bằng máy hơi nước nóng 140 độ C',
      notes: 'Ảnh kỹ thuật viên mặc đồng phục xanh Alo Vệ Sinh, cầm cần hút trong suốt đang hút nước đen/dơ từ nệm, máy móc Kärcher chuyên dụng đặt cạnh giường gọn gàng, có che bọc bảo vệ sàn gỗ.'
    },
    {
      category: '2. Ảnh So Sánh Trước & Sau (Before - After)',
      specs: 'Tỷ lệ 4:3 (800 x 600px), chụp cùng một góc máy và điều kiện ánh sáng',
      altText: 'Hình ảnh trước và sau khi giặt nệm cao su Kymdan bị ố vàng ẩm mốc mùa mưa tại TP.HCM',
      notes: 'Before: Vết ố vàng loang lổ do mồ hôi/nước tiểu hoặc chấm mốc đen thâm kim. After: Nệm trắng sáng đều màu, thớ vải sạch tinh tươm, không bị xù lông.'
    },
    {
      category: '3. Ảnh Quy Trình & Thiết Bị Máy Móc Chuyên Dụng',
      specs: 'Tỷ lệ 1:1 hoặc 4:3 (600 x 600px), chi tiết cận cảnh (close-up)',
      altText: 'Máy hút áp lực 3000W và máy sấy nhiệt đối lưu di động giặt nệm khô nhanh trong ngày mưa',
      notes: 'Ảnh đầu hút chiết xuất trong suốt thấy rõ dòng nước bẩn được kéo lên; ảnh máy phun hơi nước nóng bốc hơi trắng tiệt trùng; ảnh bình dung dịch enzyme sinh học hữu cơ organic lành tính cho trẻ nhỏ.'
    },
    {
      category: '4. Ảnh Đội Ngũ Kỹ Thuật Viên & Khách Nghiệm Thu',
      specs: 'Tỷ lệ 3:2 (900 x 600px), nụ cười tự nhiên, không khí gia đình ấm cúng',
      altText: 'Khách hàng tại Quận 7 kiểm tra nghiệm thu nệm sạch thơm khô ráo và nhận phiếu bảo hành 7 ngày Alo Vệ Sinh',
      notes: 'Ảnh chụp khoảnh khắc khách hàng sờ tay lên nệm cảm nhận độ khô ráo, mỉm cười hài lòng; kỹ thuật viên trao phiếu bảo hành chính hãng có đóng mộc Alo Vệ Sinh.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-sky-600" />
            <span>Tài Liệu Triển Khai SEO Visual Assets</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Gợi Ý Bộ Ảnh Chuẩn SEO Cho Landing Page Alo Vệ Sinh
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Hướng dẫn chi tiết quy chuẩn chụp ảnh thực tế, tỷ lệ khung hình và thẻ Alt Text tối ưu cho từ khóa: <em>“giặt nệm mùa mưa”, “giặt nệm tại nhà TP.HCM”, “giặt nệm sạch sâu khô nhanh”</em>.
          </p>
        </div>

        {/* List of Photo Recommendations */}
        <div className="space-y-4">
          {photoCategories.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Image className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{item.category}</span>
              </h4>

              <div className="text-xs space-y-1.5">
                <div>
                  <span className="font-semibold text-slate-700">Kích thước & định dạng: </span>
                  <span className="text-slate-600 font-mono text-[11px] bg-slate-200/60 px-1.5 py-0.5 rounded">
                    {item.specs}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-sky-800">Thẻ Alt Text SEO chuẩn: </span>
                  <p className="text-sky-900 bg-sky-50 border border-sky-200/60 p-2 rounded-lg font-medium text-[11px] mt-0.5">
                    "{item.altText}"
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-slate-700">Kịch bản bối cảnh chụp: </span>
                  <span className="text-slate-600 leading-relaxed">{item.notes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Production Tip */}
        <div className="mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-200/80 text-xs text-amber-900 space-y-1">
          <div className="font-bold flex items-center gap-1.5">
            <Info className="w-4 h-4 text-amber-600" />
            <span>Mẹo tối ưu Core Web Vitals cho ảnh:</span>
          </div>
          <p className="text-slate-700 leading-relaxed pl-5">
            Chuyển đổi toàn bộ ảnh sang định dạng WebP/AVIF, nén dung lượng dưới 150KB/ảnh, đặt thuộc tính <code>loading="lazy"</code> cho các ảnh dưới màn hình đầu tiên để đạt điểm Google PageSpeed 95+ trên mobile.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Đã hiểu & Đóng hướng dẫn
          </button>
        </div>
      </div>
    </div>
  );
};
