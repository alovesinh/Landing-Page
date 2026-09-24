import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, MapPin, CheckCircle, ShieldCheck, AlertCircle, Sparkles, X } from 'lucide-react';
import { DISTRICTS_HCM } from '../data/landingData';

interface BookingFormProps {
  initialType?: string;
  initialCombo?: string;
  initialVoucher?: string;
  initialPriceInfo?: { type: string; size: string; total: number } | null;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialType,
  initialCombo,
  initialVoucher,
  initialPriceInfo,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('Quận 1');
  const [mattressType, setMattressType] = useState('Nệm Cao Su (Kymdan, Liên Á...)');
  const [mattressSize, setMattressSize] = useState('1m6 x 2m0 (Chuẩn)');
  const [desiredTime, setDesiredTime] = useState('Gấp sau 30 phút');
  const [selectedCombo, setSelectedCombo] = useState('Không chọn combo');
  const [voucherCode, setVoucherCode] = useState('GIATNEM20');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Sync props when user clicked from other sections
  useEffect(() => {
    if (initialType) {
      setMattressType(initialType);
    }
  }, [initialType]);

  useEffect(() => {
    if (initialCombo) {
      setSelectedCombo(initialCombo);
    }
  }, [initialCombo]);

  useEffect(() => {
    if (initialVoucher) {
      setVoucherCode(initialVoucher);
    }
  }, [initialVoucher]);

  useEffect(() => {
    if (initialPriceInfo) {
      setMattressType(initialPriceInfo.type);
      setMattressSize(initialPriceInfo.size);
    }
  }, [initialPriceInfo]);

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) {
      errs.fullName = 'Vui lòng nhập họ và tên của bạn';
    }

    const cleanPhone = phone.replace(/[\s.-]/g, '');
    const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;
    if (!cleanPhone) {
      errs.phone = 'Vui lòng nhập số điện thoại';
    } else if (!phoneRegex.test(cleanPhone)) {
      errs.phone = 'Số điện thoại không hợp lệ (gồm 10 số, bắt đầu bằng 03, 05, 07, 08, 09)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate fast dispatch
    setTimeout(() => {
      const generatedRef = 'AVS-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(generatedRef);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <section id="dat-lich" className="py-16 sm:py-20 bg-gradient-to-b from-sky-50 to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-sky-100 relative overflow-hidden">
          {/* Top Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Tiếp nhận 24/7 – Không Cần Cọc Tiền</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Đặt Lịch Giặt Nệm Tại Nhà TP.HCM
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Điền thông tin bên dưới – <strong className="text-sky-700">Alo Vệ Sinh sẽ gọi lại tư vấn & xác nhận trong 5 phút!</strong>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Grid 1: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Họ và tên của bạn <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all ${
                    errors.fullName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-slate-50/50'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Số điện thoại liên hệ <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Ví dụ: 0962440244"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all ${
                    errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-slate-50/50'
                  }`}
                />
                {errors.phone && (
                  <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Grid 2: District and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Quận / Huyện tại TP.HCM <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    {DISTRICTS_HCM.map((d, idx) => (
                      <option key={idx} value={d.name}>
                        {d.name} ({d.status})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Thời gian mong muốn <span className="text-rose-500">*</span>
                </label>
                <select
                  value={desiredTime}
                  onChange={(e) => setDesiredTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                >
                  <option value="Gấp sau 30 phút">⚡ Có mặt gấp sau 30 phút</option>
                  <option value="Sáng nay (8h00 - 12h00)">Hôm nay: Sáng (8h00 - 12h00)</option>
                  <option value="Chiều nay (13h00 - 17h00)">Hôm nay: Chiều (13h00 - 17h00)</option>
                  <option value="Tối nay (17h00 - 20h30)">Hôm nay: Tối sau giờ làm (17h00 - 20h30)</option>
                  <option value="Sáng mai">Sáng mai</option>
                  <option value="Cuối tuần">Thứ 7 hoặc Chủ Nhật tuần này</option>
                </select>
              </div>
            </div>

            {/* Grid 3: Mattress Type & Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Loại nệm cần giặt
                </label>
                <select
                  value={mattressType}
                  onChange={(e) => setMattressType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                >
                  <option value="Giặt nệm kymdan">Giặt nệm Kymdan</option>
                  <option value="Giặt nệm cao su">Giặt nệm Cao su</option>
                  <option value="Giặt nệm lò xo">Giặt nệm Lò xo</option>
                  <option value="Giặt nệm bông ép">Giặt nệm Bông ép</option>
                  <option value="Giặt nệm liên á">Giặt nệm Liên Á</option>
                  <option value="Nệm Foam / Memory Foam">Nệm Foam / Memory Foam</option>
                  <option value="Chưa rõ loại nệm">Chưa rõ loại (kỹ thuật viên xem tại chỗ)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Kích thước ước lượng
                </label>
                <select
                  value={mattressSize}
                  onChange={(e) => setMattressSize(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                >
                  <option value="Tấm nhỏ (< 1m6: 1m, 1m2, 1m4) - 250.000đ">Tấm nhỏ (&lt; 1m6: 1m, 1m2, 1m4) - 250.000đ</option>
                  <option value="Tấm lớn (≥ 1m6: 1m6, 1m8, 2m) - 300.000đ">Tấm lớn (≥ 1m6: 1m6, 1m8, 2m) - 300.000đ</option>
                  <option value="1m2 x 2m0 (Tấm nhỏ - 250.000đ)">1m2 x 2m0 (Tấm nhỏ - 250.000đ)</option>
                  <option value="1m4 x 2m0 (Tấm nhỏ - 250.000đ)">1m4 x 2m0 (Tấm nhỏ - 250.000đ)</option>
                  <option value="1m6 x 2m0 (Tấm lớn - 300.000đ)">1m6 x 2m0 (Tấm lớn - 300.000đ)</option>
                  <option value="1m8 x 2m0 (Tấm lớn - 300.000đ)">1m8 x 2m0 (Tấm lớn - 300.000đ)</option>
                  <option value="2m0 x 2m2 (Tấm lớn - 300.000đ)">2m0 x 2m2 (Tấm lớn - 300.000đ)</option>
                </select>
              </div>
            </div>

            {/* Grid 4: Combo & Voucher */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Combo tùy chọn (nếu có)
                </label>
                <select
                  value={selectedCombo}
                  onChange={(e) => setSelectedCombo(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                >
                  <option value="Không chọn combo">Chỉ giặt nệm lẻ</option>
                  <option value="Combo Sạch Toàn Diện Giường Ngủ (Nệm + Topper)">
                    Combo Nệm + Topper (Tiết kiệm 120k)
                  </option>
                  <option value="Combo Phòng Ngủ + Sofa Khách (Bán chạy)">
                    Combo Nệm + Sofa (Tiết kiệm 250k - Hot)
                  </option>
                  <option value="Combo Tổng Vệ Sinh Mùa Mưa VIP">
                    Combo Tổng Vệ Sinh VIP (Giảm 35%)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Mã ưu đãi giảm 20%
                </label>
                <input
                  type="text"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value.toUpperCase())}
                  placeholder="GIATNEM20"
                  className="w-full px-4 py-3 rounded-xl border border-amber-300 bg-amber-50/40 text-sm font-bold text-amber-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Ghi chú tình trạng nệm (nếu có)
              </label>
              <textarea
                rows={2}
                placeholder="Ví dụ: Bé tè dầm 2 hôm trước, có vết ố vàng mép phải, nệm nằm ngứa ngáy..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-base rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                    Đang gửi thông tin đến kỹ thuật viên...
                  </span>
                ) : (
                  <>
                    <Phone className="w-5 h-5 fill-white" />
                    <span>XÁC NHẬN ĐẶT LỊCH – ALO VỆ SINH GỌI LẠI TRONG 5 PHÚT</span>
                  </>
                )}
              </button>
            </div>

            {/* Micro guarantees */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 text-center">
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                Không cần thanh toán trước
              </span>
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                Đồng giá Thứ 7, CN & Lễ
              </span>
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                Hài lòng mới trả tiền
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 text-center space-y-4 relative">
            <button
              onClick={() => setIsSuccess(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                Mã lịch hẹn: {bookingRef}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Đặt Lịch Thành Công!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Cảm ơn bạn <strong className="text-slate-800">{fullName}</strong>. Tổng đài viên Alo Vệ Sinh sẽ gọi lại tới số <strong className="text-sky-700">{phone}</strong> trong vòng <span className="text-rose-600 font-bold">5 phút</span> để xác nhận chính xác giờ kỹ thuật viên tới tại {district}.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 text-left text-xs space-y-2 border border-slate-200">
              <div className="flex justify-between">
                <span className="text-slate-500">Dịch vụ:</span>
                <span className="font-semibold text-slate-800">{mattressType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Khu vực:</span>
                <span className="font-semibold text-slate-800">{district}, TP.HCM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Thời gian yêu cầu:</span>
                <span className="font-bold text-sky-700">{desiredTime}</span>
              </div>
              {voucherCode && (
                <div className="flex justify-between text-amber-700 font-bold">
                  <span>Ưu đãi áp dụng:</span>
                  <span>Mã {voucherCode} (Giảm 20%)</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0962440244"
                className="flex-1 py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>Cần gấp? Bấm gọi 0962.440.244</span>
              </a>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
