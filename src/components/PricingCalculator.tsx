import React, { useState } from 'react';
import { OFFICIAL_PRICING, OfficialPriceItem } from '../data/landingData';
import { Calculator, Tag, Sparkles, Check, AlertCircle, ArrowRight, ShieldCheck, Flame, Info } from 'lucide-react';

interface PricingCalculatorProps {
  onSelectPricePackage?: (info: { type: string; size: string; total: number }) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onSelectPricePackage }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0); // 0: Kymdan
  const [selectedSizeType, setSelectedSizeType] = useState<'tamNho' | 'tamLon'>('tamLon'); // default 'tamLon' (300k)
  const [includeHotSteam, setIncludeHotSteam] = useState<boolean>(true); // Giặt hơi nước nóng khô nhanh + khử mùi & diệt khuẩn 99%
  const [applyDiscount, setApplyDiscount] = useState<boolean>(true);

  const currentItem = OFFICIAL_PRICING[selectedItemIndex];
  const basePrice = selectedSizeType === 'tamNho' ? currentItem.tamNho : currentItem.tamLon;
  const hotSteamPrice = includeHotSteam ? 100000 : 0;
  
  const subtotal = basePrice + hotSteamPrice;
  const discountAmount = applyDiscount ? Math.round(subtotal * 0.2) : 0;
  const finalPrice = subtotal - discountAmount;

  const handleBookWithPrice = () => {
    if (onSelectPricePackage) {
      onSelectPricePackage({
        type: currentItem.name,
        size: selectedSizeType === 'tamNho' ? 'Tấm nhỏ (< 1m6)' : 'Tấm lớn (≥ 1m6)',
        total: finalPrice,
      });
    }
    const el = document.getElementById('dat-lich');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTableRow = (index: number, size: 'tamNho' | 'tamLon') => {
    setSelectedItemIndex(index);
    setSelectedSizeType(size);
  };

  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(num) + ' đ';
  };

  return (
    <section id="bang-gia" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5 text-emerald-600" />
            <span>Bảng Giá Niêm Yết Mới Nhất</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Bảng Giá Giặt Nệm Tại Nhà TP.HCM –{' '}
            <span className="text-[#035e16]">Đồng Giá Tiết Kiệm</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Alo Vệ Sinh công khai bảng giá chuẩn: <strong>Tấm nhỏ 250.000 đ – Tấm lớn 300.000 đ</strong> áp dụng cho tất cả các dòng nệm cao su, lò xo, foam và bông ép.
          </p>
        </div>

        {/* 1. Official Table as uploaded by user */}
        <div className="max-w-4xl mx-auto mb-12 bg-white rounded-2xl shadow-md border-2 border-[#035e16] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-[#035e16] text-white font-bold text-xs sm:text-sm tracking-wide">
                  <th className="py-3.5 px-3 border-r border-emerald-700/60 w-14 sm:w-16">STT</th>
                  <th className="py-3.5 px-4 border-r border-emerald-700/60 text-left uppercase">LOẠI NỆM</th>
                  <th className="py-3.5 px-4 border-r border-emerald-700/60 w-32 sm:w-44 uppercase">TẤM NHỎ</th>
                  <th className="py-3.5 px-4 w-32 sm:w-44 uppercase">TẤM LỚN</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm text-slate-800 divide-y divide-emerald-200">
                {OFFICIAL_PRICING.map((item, idx) => {
                  const isSelected = selectedItemIndex === idx;
                  return (
                    <tr
                      key={item.stt}
                      className={`transition-colors ${
                        isSelected ? 'bg-emerald-50/70 font-medium' : idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'
                      }`}
                    >
                      <td className="py-3 px-3 border-r border-emerald-200 text-slate-600 font-semibold">
                        {item.stt}
                      </td>
                      <td className="py-3 px-4 border-r border-emerald-200 text-left font-semibold capitalize text-slate-900">
                        {item.name}
                      </td>
                      <td
                        onClick={() => handleSelectTableRow(idx, 'tamNho')}
                        className={`py-3 px-4 border-r border-emerald-200 cursor-pointer transition-all ${
                          isSelected && selectedSizeType === 'tamNho'
                            ? 'bg-emerald-100 font-bold text-[#035e16] ring-2 ring-inset ring-[#035e16]'
                            : 'hover:bg-emerald-50/60 text-slate-800'
                        }`}
                      >
                        <span className="inline-block py-0.5 px-2 rounded-md">
                          {formatVND(item.tamNho)}
                        </span>
                      </td>
                      <td
                        onClick={() => handleSelectTableRow(idx, 'tamLon')}
                        className={`py-3 px-4 cursor-pointer transition-all ${
                          isSelected && selectedSizeType === 'tamLon'
                            ? 'bg-emerald-100 font-bold text-[#035e16] ring-2 ring-inset ring-[#035e16]'
                            : 'hover:bg-emerald-50/60 text-slate-800'
                        }`}
                      >
                        <span className="inline-block py-0.5 px-2 rounded-md">
                          {formatVND(item.tamLon)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Under-table Note banner as in image */}
          <div className="bg-[#f0f9f2] border-t-2 border-[#035e16] py-3 px-4 text-center">
            <p className="text-xs sm:text-sm font-semibold text-[#035e16] flex items-center justify-center gap-1.5">
              <Flame className="w-4 h-4 text-orange-500 inline shrink-0" />
              <span>Lựa chọn thêm: Giặt hơi nước nóng khô nhanh + khử mùi & diệt khuẩn 99%</span>
            </p>
          </div>
        </div>

        {/* 2. Interactive Calculator & Booking Helper */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
            <div>
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#035e16]" />
                <span>Tính Nhanh & Ước Tính Tổng Tiền</span>
              </h3>
              <p className="text-xs text-slate-500">
                Nhấp trực tiếp trên bảng giá hoặc chọn các mục bên dưới để áp mã ưu đãi
              </p>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full w-fit">
              ✓ Không phát sinh chi phí
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left form options */}
            <div className="space-y-4">
              {/* Type selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  1. Chọn dòng nệm cần giặt:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {OFFICIAL_PRICING.map((item, idx) => (
                    <button
                      key={item.stt}
                      type="button"
                      onClick={() => setSelectedItemIndex(idx)}
                      className={`p-2.5 rounded-xl text-xs font-bold text-left border transition-all cursor-pointer ${
                        selectedItemIndex === idx
                          ? 'bg-emerald-50 border-[#035e16] text-[#035e16] shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="capitalize">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size selection: Tam nho vs Tam lon */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  2. Chọn kích thước tấm:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSizeType('tamNho')}
                    className={`p-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                      selectedSizeType === 'tamNho'
                        ? 'bg-[#035e16] border-[#035e16] text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-black text-sm">TẤM NHỎ</div>
                    <div className="text-[11px] opacity-90 mt-0.5">Dưới 1m6 (1m, 1m2, 1m4)</div>
                    <div className="text-xs font-black mt-1">250.000 đ</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedSizeType('tamLon')}
                    className={`p-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                      selectedSizeType === 'tamLon'
                        ? 'bg-[#035e16] border-[#035e16] text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-black text-sm">TẤM LỚN</div>
                    <div className="text-[11px] opacity-90 mt-0.5">Từ 1m6 trở lên (1m6, 1m8, 2m)</div>
                    <div className="text-xs font-black mt-1">300.000 đ</div>
                  </button>
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                {/* Hot steam add-on */}
                <label className="flex items-center justify-between p-3 rounded-xl bg-orange-50/70 border border-orange-200 cursor-pointer hover:bg-orange-50 transition-colors">
                  <div className="flex items-center gap-2 text-xs">
                    <input
                      type="checkbox"
                      checked={includeHotSteam}
                      onChange={(e) => setIncludeHotSteam(e.target.checked)}
                      className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500"
                    />
                    <div>
                      <span className="font-bold text-orange-950 block">
                        Giặt hơi nước nóng khô nhanh + Khử mùi & diệt khuẩn 99%
                      </span>
                      <span className="text-[11px] text-orange-700">Khuyên dùng vào mùa mưa chống ẩm mốc</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-orange-700 shrink-0">
                    +100.000 đ
                  </span>
                </label>
              </div>

              {/* Discount voucher toggle */}
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="discountToggle"
                    checked={applyDiscount}
                    onChange={(e) => setApplyDiscount(e.target.checked)}
                    className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="discountToggle" className="text-xs font-bold text-amber-900 cursor-pointer">
                    Áp dụng Voucher Mùa Mưa (-20%)
                  </label>
                </div>
                <span className="text-xs font-extrabold text-orange-600 bg-orange-100 px-2 py-0.5 rounded">
                  GIATNEM20
                </span>
              </div>
            </div>

            {/* Right summary and booking CTA */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400">Dịch vụ đã chọn:</span>
                  <span className="text-sm font-bold text-sky-400 capitalize">
                    {currentItem.name}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Quy cách:</span>
                  <span className="font-semibold text-white">
                    {selectedSizeType === 'tamNho' ? 'Tấm nhỏ (< 1m6)' : 'Tấm lớn (≥ 1m6)'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Giá gốc theo niêm yết:</span>
                  <span className="font-semibold">{formatVND(basePrice)}</span>
                </div>

                {includeHotSteam && (
                  <div className="flex items-center justify-between text-xs text-orange-300">
                    <span>Hơi nước nóng + Khử khuẩn 99%:</span>
                    <span>+{formatVND(hotSteamPrice)}</span>
                  </div>
                )}

                {applyDiscount && (
                  <div className="flex items-center justify-between text-xs text-amber-400 font-medium">
                    <span>Ưu đãi voucher -20%:</span>
                    <span>-{formatVND(discountAmount)}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-800 flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Tổng thanh toán dự kiến:</span>
                    <span className="text-2xl sm:text-3xl font-black text-amber-400">
                      {formatVND(finalPrice)}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-2.5 py-1 rounded-md">
                    Khô trong ngày 100%
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleBookWithPrice}
                  className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm rounded-xl shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Đặt Lịch Theo Mức Giá Này</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  ⚡ Không cần cọc tiền – Kỹ thuật viên Alo Vệ Sinh gọi lại trong 5 phút
                </p>
              </div>
            </div>
          </div>

          {/* Transparent note */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              Cam kết không phát sinh phụ phí đi lại 22 quận huyện TP.HCM
            </span>
            <a href="tel:0962440244" className="text-sky-600 font-bold hover:underline">
              Cần tư vấn trực tiếp? Hotline 0962.440.244
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
