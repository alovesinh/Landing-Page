import React, { useState } from 'react';
import { B2B_SERVICES } from '../data/landingData';
import { Building2, Check, FileText, Phone, Send, Sparkles, ShieldCheck } from 'lucide-react';

export const B2BSection: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceRequirement, setServiceRequirement] = useState('Khách sạn / Căn hộ dịch vụ');
  const [isSent, setIsSent] = useState(false);

  const handleSubmitB2B = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !phone) return;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setCompanyName('');
      setContactName('');
      setPhone('');
    }, 4000);
  };

  return (
    <section id="b2b" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-sky-500/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>Dành Cho Khách Hàng Doanh Nghiệp</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            Giải Pháp Vệ Sinh B2B Cho Khách Sạn, Căn Hộ Dịch Vụ & Văn Phòng
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Duy trì tiêu chuẩn sạch sẽ 5 sao, diệt ẩm mốc phòng kín trong mùa mưa, hỗ trợ kiểm toán vệ sinh và xuất hóa đơn giá trị gia tăng (VAT) đầy đủ.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {B2B_SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="bg-slate-800/70 border border-slate-700/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-sky-500/50 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {srv.desc}
                </p>

                <ul className="space-y-2 text-xs text-slate-200">
                  {srv.perks.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span>Ưu đãi hợp đồng dài hạn</span>
                <span className="text-amber-400 font-bold">Giảm tới 30%</span>
              </div>
            </div>
          ))}
        </div>

        {/* B2B Quick Consultation Box */}
        <div className="bg-gradient-to-r from-slate-800 via-sky-950 to-slate-800 rounded-3xl p-6 sm:p-8 border border-sky-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <FileText className="w-4 h-4" />
                <span>Báo Giá Nhanh Trong 15 Phút</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Cần Khảo Sát Tận Nơi & Lên Hợp Đồng Định Kỳ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Đội ngũ chuyên viên B2B của Alo Vệ Sinh sẽ đến tận tòa nhà hoặc khách sạn của bạn để đo đạc khối lượng, test mẫu miễn phí 1 phòng và gửi bảng dự toán chi tiết kèm điều khoản xuất hóa đơn VAT.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Hóa đơn VAT hợp lệ
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  Test mẫu 0đ
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              {isSent ? (
                <div className="bg-emerald-950/80 border border-emerald-500/50 p-6 rounded-2xl text-center space-y-2 text-white">
                  <div className="text-emerald-400 text-lg font-bold">
                    ✓ Đã nhận thông tin doanh nghiệp!
                  </div>
                  <p className="text-xs text-slate-300">
                    Phòng kinh doanh B2B Alo Vệ Sinh sẽ liên hệ lại trong vòng 15 phút kèm theo hồ sơ năng lực công ty.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitB2B} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Tên khách sạn / công ty"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Người liên hệ *"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      placeholder="Số điện thoại / Zalo *"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                    <select
                      value={serviceRequirement}
                      onChange={(e) => setServiceRequirement(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    >
                      <option value="Khách sạn / Căn hộ dịch vụ">Khách sạn / Căn hộ dịch vụ</option>
                      <option value="Trường học / Mầm non">Trường học / Mầm non</option>
                      <option value="Ghế văn phòng & thảm tòa nhà">Ghế văn phòng & Thảm</option>
                      <option value="Nhu cầu khác">Nhu cầu khác</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>GỬI YÊU CẦU BÁO GIÁ DOANH NGHIỆP</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
