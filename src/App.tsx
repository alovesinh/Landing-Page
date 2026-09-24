import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MattressTabs } from './components/MattressTabs';
import { PromoBanner } from './components/PromoBanner';
import { SleepTimeline } from './components/SleepTimeline';
import { TenStepsProcess } from './components/TenStepsProcess';
import { PricingCalculator } from './components/PricingCalculator';

import { BookingForm } from './components/BookingForm';
import { RiskReversal } from './components/RiskReversal';
import { BrandPositioning } from './components/BrandPositioning';
import { BeforeAfterReviews } from './components/BeforeAfterReviews';
import { LocalCoverage } from './components/LocalCoverage';
import { FAQSection } from './components/FAQSection';
import { B2BSection } from './components/B2BSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { PhotoGuideModal } from './components/PhotoGuideModal';

export default function App() {
  // Shared interactive states connecting sections
  const [selectedMattressType, setSelectedMattressType] = useState<string>('');
  const [selectedCombo, setSelectedCombo] = useState<string>('');
  const [voucherCode, setVoucherCode] = useState<string>('GIATNEM20');
  const [pricePackageInfo, setPricePackageInfo] = useState<{
    type: string;
    size: string;
    total: number;
  } | null>(null);

  const [isPhotoGuideOpen, setIsPhotoGuideOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
      {/* 1. Fixed Navbar */}
      <Navbar onOpenPhotoGuide={() => setIsPhotoGuideOpen(true)} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Khối tương tác: Tabs theo loại nệm (Lò xo / Cao su / Foam / Bông ép) */}
        <MattressTabs onSelectType={(type) => setSelectedMattressType(type)} />

        {/* 4. Voucher / Ưu đãi mùa mưa (Giảm 20% đơn đầu tiên, giới hạn 50 suất) */}
        <PromoBanner onApplyVoucher={(code) => setVoucherCode(code)} />

        {/* 5. Dẫn chứng khoa học dạng timeline đêm ngủ (22:00 -> 02:00 -> 05:00 -> 07:00) */}
        <SleepTimeline />

        {/* 6. Quy trình 10 bước trong 60 phút */}
        <TenStepsProcess />

        {/* 7. Bảng giá 2026 theo kích thước & chất liệu + Bộ tính giá tương tác */}
        <PricingCalculator
          onSelectPricePackage={(pkg) => {
            setPricePackageInfo(pkg);
            setSelectedMattressType(pkg.type);
          }}
        />



        {/* 9. Form đặt lịch ngắn gọn + Phản hồi gọi lại trong 5 phút */}
        <BookingForm
          initialType={selectedMattressType}
          initialCombo={selectedCombo}
          initialVoucher={voucherCode}
          initialPriceInfo={pricePackageInfo}
        />

        {/* 10. Cam kết xóa rủi ro (30 phút, bảo hành 7 ngày, an toàn trẻ em, hoàn tiền 100%, 0 phụ phí) */}
        <RiskReversal />

        {/* 11. Định vị thương hiệu: Vì sao không phải rẻ nhất (4 điểm khác biệt) */}
        <BrandPositioning />

        {/* 12. Review khách hàng thật + Before-After */}
        <BeforeAfterReviews />

        {/* 13. Khu vực phục vụ: 22 quận huyện TP.HCM, 30 phút nội thành */}
        <LocalCoverage />

        {/* 14. FAQ: 8 câu hỏi quan trọng theo dạng accordion rich snippet */}
        <FAQSection />

        {/* 15. Đối tác B2B (khách sạn, căn hộ dịch vụ, văn phòng) */}
        <B2BSection />
      </main>

      {/* 16. Footer đầy đủ thông tin liên hệ + Copyright */}
      <Footer onOpenPhotoGuide={() => setIsPhotoGuideOpen(true)} />

      {/* Sticky Mobile Call & Booking Action Bar */}
      <StickyMobileBar />

      {/* Photo SEO Reference Guide Modal */}
      <PhotoGuideModal
        isOpen={isPhotoGuideOpen}
        onClose={() => setIsPhotoGuideOpen(false)}
      />
    </div>
  );
}
