import React, { useState } from 'react';
import { FAQS } from '../data/landingData';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, Phone } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // Open first 2 by default
  const [activeTag, setActiveTag] = useState<string>('Tất cả');

  const tags = ['Tất cả', 'Thời tiết mùa mưa', 'An toàn sức khỏe', 'Tốc độ phục vụ', 'Bảo vệ nệm đắt tiền', 'Chính sách bảo hành'];

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeTag === 'Tất cả') return true;
    return faq.tag === activeTag;
  });

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Giải Đáp Thắc Mắc Khách Hàng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            8 Câu Hỏi Thường Gặp Về{' '}
            <span className="text-sky-600">Giặt Nệm Mùa Mưa</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Mọi thắc mắc của bạn về độ ẩm, thời gian khô, an toàn cho trẻ nhỏ và chính sách bảo hành đều được giải đáp minh bạch dưới đây:
          </p>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTag === tag
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50 hover:border-sky-300"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:text-sky-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-sky-600 font-extrabold text-xs bg-sky-100 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    <p className="pl-9">{faq.answer}</p>
                    <div className="mt-3 pl-9 flex items-center gap-2">
                      <span className="text-[10px] bg-slate-100 text-slate-500 font-semibold px-2 py-0.5 rounded">
                        Chủ đề: {faq.tag}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 p-5 bg-sky-50 rounded-2xl border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs sm:text-sm text-sky-900">
            <span className="font-bold">Bạn còn thắc mắc chưa được giải đáp?</span>{' '}
            <span className="text-slate-600 block sm:inline">
              Đừng ngần ngại gọi trực tiếp hotline để được trưởng nhóm kỹ thuật tư vấn miễn phí.
            </span>
          </div>
          <a
            href="tel:0962440244"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl shadow-md transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Hotline 24/7: 0962.440.244</span>
          </a>
        </div>
      </div>
    </section>
  );
};
