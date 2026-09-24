import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/landingData';
import { Star, MapPin, CheckCircle, Sparkles, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

export const BeforeAfterReviews: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeReviewIndex, setActiveReviewIndex] = useState<number>(0);

  const currentReview = TESTIMONIALS[activeReviewIndex];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Người Thật – Việc Thật – Kết Quả Thật</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Hình Ảnh Thực Tế Trước & Sau Khi Giặt –{' '}
            <span className="text-sky-600">Đánh Giá Từ Khách Hàng TP.HCM</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Hơn 12.500+ khách hàng tại TP.HCM đã lấy lại chiếc nệm sạch tinh tươm, khô ráo thơm mát trong những ngày mưa dầm ẩm ướt nhất. Kéo thanh trượt để so sánh hiệu quả:
          </p>
        </div>

        {/* Interactive Before - After Comparison Showcase */}
        <div className="max-w-4xl mx-auto mb-16 bg-slate-50 p-4 sm:p-6 rounded-3xl border border-slate-200">
          <div className="flex items-center justify-between mb-3 text-xs sm:text-sm font-bold">
            <span className="text-rose-700 bg-rose-100 px-3 py-1 rounded-lg">
              ❌ TRƯỚC KHI GIẶT (Ố vàng, ẩm mốc, mạt bụi)
            </span>
            <span className="flex items-center gap-1 text-slate-500 font-medium text-xs hidden sm:flex">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Kéo thanh trượt để so sánh
            </span>
            <span className="text-emerald-700 bg-emerald-100 px-3 py-1 rounded-lg">
              ✨ SAU KHI GIẶT (Sạch sâu 99%, sấy khô ráo)
            </span>
          </div>

          {/* Image Container with Slider Overlay */}
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg select-none">
            {/* After Image (Full background) */}
            <img
              src={currentReview.afterImg}
              alt={`Sau khi giặt sạch ${currentReview.mattressType} tại TP.HCM`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentReview.beforeImg}
                alt={`Trước khi giặt ${currentReview.mattressType}`}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl flex items-center justify-center -translate-x-1/2"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-white text-slate-800 shadow-xl border-2 border-sky-500 flex items-center justify-center cursor-ew-resize">
                <SlidersHorizontal className="w-4 h-4 text-sky-600" />
              </div>
            </div>

            {/* Range Input for Accessible Dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="So sánh ảnh trước và sau"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>

          {/* Condition note for the active case */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-800">
              Trường hợp: {currentReview.condition}
            </span>
            <span className="text-sky-700 font-bold">
              Loại: {currentReview.mattressType}
            </span>
          </div>
        </div>

        {/* Customer Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveReviewIndex(idx)}
              className={`rounded-3xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                activeReviewIndex === idx
                  ? 'bg-sky-50/70 border-sky-400 shadow-md ring-2 ring-sky-400/20'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-500 ml-1 font-semibold">{item.date}</span>
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                  “{item.comment}”
                </p>
              </div>

              {/* Author & District */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    <span>{item.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-sky-600 inline" />
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-sky-500" />
                    <span>{item.district}, TP.HCM</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
