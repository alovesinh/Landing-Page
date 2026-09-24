export interface MattressInfo {
  id: string;
  name: string;
  subName: string;
  commonBrands: string;
  moistureRisk: string;
  solution: string;
  dryTime: string;
  specialCare: string;
  recommendedTemp: string;
  image: string;
}

export interface StepInfo {
  step: number;
  title: string;
  duration: string;
  desc: string;
  iconName: string;
  tech: string;
}

export interface PricingRow {
  size: string;
  caoSu: number;
  loXo: number;
  foam: number;
  bongEp: number;
  topper: number;
}

export interface ComboPackage {
  id: string;
  name: string;
  badge: string;
  originalPrice: number;
  salePrice: number;
  saveAmount: number;
  features: string[];
  popular?: boolean;
  idealFor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  tag: string;
}

export interface Testimonial {
  name: string;
  role: string;
  district: string;
  rating: number;
  date: string;
  comment: string;
  mattressType: string;
  beforeImg: string;
  afterImg: string;
  condition: string;
}

export const MATTRESS_TYPES: MattressInfo[] = [
  {
    id: 'cao-su',
    name: 'Nệm Cao Su Thiên Nhiên',
    subName: 'Kymdan, Liên Á, Vạn Thành, Kim Cương...',
    commonBrands: 'Kymdan, Liên Á, Vạn Thành, Đồng Phú, Kim Cương',
    moistureRisk: 'Độ ẩm mùa mưa đọng lại trong các lỗ thông hơi li ti gây ải mủn cao su, ẩm mốc đen kịt từ bên trong và phát sinh mùi chua nồng rất khó chịu.',
    solution: 'Kiểm soát nhiệt độ hơi nước chính xác dưới 65°C, sử dụng dung dịch enzyme sinh học pH 7.0 trung tính, hút áp lực chân không rút sạch ẩm trong từng lỗ thở cao su và sấy gió nhiệt đối lưu chống chai cứng.',
    dryTime: 'Chỉ 45 - 60 phút là khô ráo 100%',
    specialCare: 'Tuyệt đối không dùng hóa chất tẩy clo làm cháy cao su, không phơi nắng gắt.',
    recommendedTemp: 'Hơi nước ấm 60°C - 65°C',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'lo-xo',
    name: 'Nệm Lò Xo Túi & Liên Kết',
    subName: 'Dunlopillo, King Koil, Tuấn Anh, Ưu Việt...',
    commonBrands: 'Dunlopillo, King Koil, Lady Americana, Ưu Việt',
    moistureRisk: 'Nệm lò xo có độ dày lớn (25cm - 40cm), nhiều lớp đệm mút lót bên trong. Khi trời mưa nồm, ẩm thấm sâu dễ gây rỉ sét hệ khung lò xo, phát ra tiếng cọt kẹt và sinh ổ mạt bụi rệp giường.',
    solution: 'Dùng đầu hút áp lực cao 3000W thẩm thấu qua các lớp đệm mousse, phun dung dịch diệt khuẩn nano bạc khử mùi rỉ sét kim loại, sấy luồng khí nóng đa chiều len lỏi vào từng túi lò xo.',
    dryTime: 'Khô hoàn toàn sau 60 - 75 phút',
    specialCare: 'Không làm ẩm ướt hệ khung lò xo, khử khuẩn chống nấm mốc các lớp mousse lót.',
    recommendedTemp: 'Hơi nước tiệt trùng 120°C',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'foam',
    name: 'Nệm Foam / Memory Foam',
    subName: 'Ru9, Oyasumi, Zinus, Casper, Aeroflow...',
    commonBrands: 'Ru9, Oyasumi, Aeroflow, Zinus, Amando',
    moistureRisk: 'Chất liệu bọt xốp Memory Foam rất nhạy cảm với độ ẩm. Mùa mưa nệm hút ẩm từ không khí khiến nệm bị nặng, giảm độ đàn hồi nâng đỡ cột sống và tích tụ mồ hôi cơ thể gây ố vàng.',
    solution: 'Phương pháp giặt bọt khô (dry-foam) kết hợp máy chiết xuất áp suất cao, bóc tách vết ố mồ hôi mà không làm ngấm đẫm lõi foam, phục hồi độ đàn hồi nguyên bản của cấu trúc bọt.',
    dryTime: 'Khô nhanh trong 45 phút',
    specialCare: 'Tránh ngâm nước đẫm, sử dụng luồng sấy nhiệt mát đối lưu luân phiên.',
    recommendedTemp: 'Nhiệt độ kiểm soát 50°C',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bong-ep',
    name: 'Nệm Bông Ép Hàn Quốc',
    subName: 'Everon, Edena, Sông Hồng, Hanvico...',
    commonBrands: 'Everon, Edena, Sông Hồng, Vạn Thành bông ép',
    moistureRisk: 'Các sợi bông polyester ép chặt dễ bị ngậm nước như miếng bọt biển. Nếu giặt sai cách khi trời mưa không có nắng, nệm sẽ bị thâm kim, ẩm mốc lõi bông và bốc mùi ẩm khó ngửi.',
    solution: 'Xử lý vết bẩn bằng enzyme hữu cơ, hút chân không 2 mặt với lực hút cực đại rút kiệt nước ngầm, dùng máy sấy nhiệt thổi thẳng qua thớ sợi bông giúp bông xốp tơi lại.',
    dryTime: 'Khô ráo 100% trong 50 phút',
    specialCare: 'Không chà sát quá mạnh làm bung xơ sợi bông, sấy kiệt lõi tránh mốc ngầm.',
    recommendedTemp: 'Hơi nước tiệt trùng 110°C',
    image: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=800&auto=format&fit=crop'
  }
];

export const TIMELINE_POINTS = [
  {
    time: '22:00',
    title: 'Khi Vừa Lên Giường',
    temp: 'Thân nhiệt 37°C + Ẩm phòng 85%',
    icon: 'Moon',
    desc: 'Không khí mùa mưa ẩm ướt kết hợp hơi ấm cơ thể tạo điều kiện lý tưởng đánh thức hàng triệu bào tử nấm mốc ẩn náu dưới lớp drap nệm.'
  },
  {
    time: '02:00',
    title: 'Đêm Sâu - Đỉnh Điểm Ẩm',
    temp: 'Tiết 300 - 500ml mồ hôi & bã nhờn',
    icon: 'CloudRain',
    desc: 'Cơ thể đào thải mồ hôi và tế bào chết ngấm thẳng vào ruột nệm. Mạt bụi (Dermatophagoides) hoạt động mạnh nhất, ăn da chết và thải ra hàng vạn hạt phân vi mô.'
  },
  {
    time: '05:00',
    title: 'Phát Tán Dị Ứng Toàn Phòng',
    temp: 'Độc tố vi sinh vật bay trong không khí',
    icon: 'AlertTriangle',
    desc: 'Phòng kín bật máy lạnh hoặc đóng cửa tránh mưa khiến nồng độ khí ẩm và vi khuẩn đạt mức cực đại. Gây phản ứng nghẹt mũi, khò khè, ho khan từng cơn.'
  },
  {
    time: '07:00',
    title: 'Thức Dậy Mệt Mỏi & Ngứa Ngáy',
    temp: 'Nguy cơ viêm da cơ địa & hen suyễn',
    icon: 'Frown',
    desc: 'Mắt ngứa cộm, da đỏ rát hoặc ngứa ngáy lưng cổ. Trẻ nhỏ và người lớn tuổi dễ tái phát viêm xoang và hen suyễn do tiếp xúc với nệm ẩm mốc suốt đêm.'
  }
];

export const TEN_STEPS: StepInfo[] = [
  {
    step: 1,
    title: 'Khảo sát và phân loại vết bẩn',
    duration: '3 - 5 phút',
    desc: 'Kiểm tra chất liệu nệm cao su, lò xo, foam và phân loại vết bẩn để chọn phương pháp vệ sinh phù hợp.',
    iconName: 'Search',
    tech: 'Phân loại chất liệu & vết bẩn'
  },
  {
    step: 2,
    title: 'Xử lý bụi mịn',
    duration: '5 - 7 phút',
    desc: 'Sử dụng máy hút chuyên dụng để loại bỏ hoàn toàn bụi mịn, tóc, da bong tróc bám trên bề mặt nệm.',
    iconName: 'Wind',
    tech: 'Máy hút bụi mịn chuyên dụng'
  },
  {
    step: 3,
    title: 'Pha và phun dung dịch chuyên dụng',
    duration: '5 phút',
    desc: 'Pha dung dịch với tỷ lệ chuẩn, sau đó phun đều và tập trung xử lý các vết bẩn cứng đầu.',
    iconName: 'Droplet',
    tech: 'Dung dịch chuyên dụng tỷ lệ chuẩn'
  },
  {
    step: 4,
    title: 'Xử lý vết bẩn chuyên sâu',
    duration: '8 - 10 phút',
    desc: 'Xử lý điểm bẩn, vết ố và dùng máy giặt nệm chuyên dụng để làm sạch sâu bên trong lõi nệm.',
    iconName: 'Sparkles',
    tech: 'Máy giặt nệm chuyên dụng làm sạch sâu'
  },
  {
    step: 5,
    title: 'Khử trùng bằng hơi nước nóng',
    duration: '10 phút',
    desc: 'Phun hơi nước nóng lên toàn bộ nệm, tiêu diệt vi khuẩn và nấm mốc lên đến 99%.',
    iconName: 'Flame',
    tech: 'Hơi nước nóng diệt khuẩn & mốc 99%'
  },
  {
    step: 6,
    title: 'Hút sạch nước và bụi bẩn',
    duration: '10 phút',
    desc: 'Dùng máy hút công suất lớn, kéo toàn bộ nước bẩn, dung dịch tồn dư và cặn bã ra khỏi nệm.',
    iconName: 'RefreshCw',
    tech: 'Máy hút công suất lớn thu hồi kiệt'
  },
  {
    step: 7,
    title: 'Phun nano bảo vệ',
    duration: '4 phút',
    desc: 'Phun một lớp phủ Nano để tạo ra một màng bảo vệ, ngăn ngừa sự phát triển của vi khuẩn sau khi giặt.',
    iconName: 'ShieldCheck',
    tech: 'Màng phủ Nano kháng khuẩn'
  },
  {
    step: 8,
    title: 'Khử mùi và tạo hương thơm',
    duration: '3 phút',
    desc: 'Sử dụng tinh dầu thiên nhiên để khử mùi và lưu lại hương thơm thư thái trên nệm.',
    iconName: 'Droplets',
    tech: 'Tinh dầu thiên nhiên thư thái'
  },
  {
    step: 9,
    title: 'Dọn dẹp khu vực vệ sinh',
    duration: '5 phút',
    desc: 'Sau khi hoàn tất, kỹ thuật viên sẽ dọn dẹp khu vực làm việc và sắp xếp ngăn nắp cho khách hàng.',
    iconName: 'RotateCw',
    tech: 'Dọn dẹp & sắp xếp ngăn nắp'
  },
  {
    step: 10,
    title: 'Bàn giao',
    duration: '3 phút',
    desc: 'Mời khách hàng kiểm tra chất lượng nệm sau khi giặt và chỉ nhận thanh toán khi khách hàng hài lòng.',
    iconName: 'CheckCircle2',
    tech: 'Hài lòng mới thanh toán'
  }
];

export interface OfficialPriceItem {
  stt: number;
  name: string;
  tamNho: number;
  tamLon: number;
}

export const OFFICIAL_PRICING: OfficialPriceItem[] = [
  { stt: 1, name: 'Giặt nệm kymdan', tamNho: 250000, tamLon: 300000 },
  { stt: 2, name: 'Giặt nệm cao su', tamNho: 250000, tamLon: 300000 },
  { stt: 3, name: 'Giặt nệm lò xo', tamNho: 250000, tamLon: 300000 },
  { stt: 4, name: 'Giặt nệm bông ép', tamNho: 250000, tamLon: 300000 },
  { stt: 5, name: 'Giặt nệm liên á', tamNho: 250000, tamLon: 300000 }
];

export const PRICING_TABLE: PricingRow[] = [
  { size: 'Tấm nhỏ (< 1m6: 1m, 1m2, 1m4)', caoSu: 250000, loXo: 250000, foam: 250000, bongEp: 250000, topper: 150000 },
  { size: 'Tấm lớn (≥ 1m6: 1m6, 1m8, 2m, 2m2)', caoSu: 300000, loXo: 300000, foam: 300000, bongEp: 300000, topper: 180000 }
];

export const COMBO_PACKAGES: ComboPackage[] = [
  {
    id: 'combo-giuong-ngu',
    name: 'Combo Sạch Toàn Diện Giường Ngủ',
    badge: 'Tiết kiệm 120.000đ',
    originalPrice: 570000,
    salePrice: 450000,
    saveAmount: 120000,
    features: [
      'Giặt 01 Nệm bất kỳ (kích thước lên tới 1m8)',
      'Giặt 01 Topper đệm cùng kích thước',
      'Tặng gói Phun khử khuẩn Nano Bạc',
      'Tặng xông tinh dầu xua đuổi côn trùng',
      'Sấy nhiệt khô nhanh dùng ngay tối nay'
    ],
    idealFor: 'Gia đình có dùng topper, trẻ nhỏ hay tè dầm'
  },
  {
    id: 'combo-phong-ngu-khach',
    name: 'Combo Phòng Ngủ + Sofa Khách',
    badge: 'Bán chạy nhất mùa mưa ⭐',
    originalPrice: 850000,
    salePrice: 599000,
    saveAmount: 251000,
    popular: true,
    features: [
      'Giặt 01 Nệm gia đình (1m6 - 1m8)',
      'Giặt 01 Bộ Sofa nỉ/da phòng khách (băng 3 chỗ)',
      'Khử nấm mốc triệt để chống ẩm mùa mưa',
      'Hút sạch 100% lông thú cưng và bụi mịn',
      'Bảo hành chất lượng dịch vụ 7 ngày',
      'Có mặt sau 30 phút đặt lịch'
    ],
    idealFor: 'Căn hộ chung cư, nhà phố cần vệ sinh trọn gói'
  },
  {
    id: 'combo-tong-ve-sinh-vip',
    name: 'Combo Tổng Vệ Sinh Mùa Mưa VIP',
    badge: 'Giảm 35% duy nhất',
    originalPrice: 1250000,
    salePrice: 799000,
    saveAmount: 451000,
    features: [
      'Giặt 02 Nệm phòng ngủ gia đình',
      'Giặt 01 Bộ Sofa phòng khách hoặc 01 Thảm lớn',
      'Vệ sinh 04 ruột gối khử khuẩn bằng tia UV',
      'Phun sương khử trùng toàn bộ phòng ngủ',
      'Ưu tiên kỹ thuật viên tay nghề bậc cao',
      'Bảo hành đổi hẹn linh hoạt trọn đời'
    ],
    idealFor: 'Nhà có từ 2 phòng ngủ, chuẩn bị đón bé hoặc tiệc tùng'
  }
];

export const RISK_GUARANTEES = [
  {
    title: 'Có mặt đúng 30 phút',
    sub: 'Nội thành TP.HCM',
    desc: 'Đội ngũ kỹ thuật viên thường trực tại 22 quận huyện. Nếu đến trễ quá 15 phút không báo trước, trừ ngay 50.000đ vào hóa đơn.',
    icon: 'Clock'
  },
  {
    title: 'Bảo hành tận tâm 7 ngày',
    sub: 'Không sạch giặt lại miễn phí',
    desc: 'Nếu nệm còn mùi ẩm sót lại hoặc vết bẩn chưa đạt cam kết, kỹ thuật viên đến xử lý lại miễn phí 100% trong 24h.',
    icon: 'ShieldCheck'
  },
  {
    title: 'An toàn 100% cho trẻ nhỏ',
    sub: 'Dung dịch Organic sinh học',
    desc: 'Không sử dụng hóa chất tẩy rửa Clo nồng gắt. Dung dịch enzyme dịu nhẹ đã kiểm định an toàn cho làn da sơ sinh và thú cưng.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Hoàn tiền 100% ngay lập tức',
    sub: 'Không sạch không tính phí',
    desc: 'Khách hàng nghiệm thu trực tiếp trước khi thanh toán. Nếu không hài lòng về chất lượng, chúng tôi không nhận tiền.',
    icon: 'DollarSign'
  },
  {
    title: 'Minh bạch 0 phụ phí',
    sub: 'Đồng giá cuối tuần & lễ',
    desc: 'Giá niêm yết rõ ràng. Tuyệt đối không phụ thu phí đi lại, không tăng giá ngày mưa, không phí ngoài giờ.',
    icon: 'FileCheck'
  }
];

export const BRAND_DIFFERENCES = [
  {
    title: 'Máy Hơi Nước Nóng Kärcher & Hút 3000W',
    cheapService: 'Dùng máy hút bụi gia đình yếu 200W, không có hơi nước nóng, chỉ hút được bụi mặt trên.',
    aloVeSinh: 'Nhập khẩu máy Kärcher Đức, áp suất hơi nước 140°C bóc tách mạt bụi sâu 20cm, hút sạch 95% ẩm.',
    icon: 'Zap'
  },
  {
    title: 'Dung Dịch Sinh Học Chuyên Biệt Từng Loại',
    cheapService: 'Dùng xà phòng giặt đồ hoặc javel tẩy trắng làm cháy cao su, bay màu vải và sực mùi hóa chất độc.',
    aloVeSinh: 'Enzyme sinh học hữu cơ chiết xuất thực vật, kiểm soát pH riêng cho Nệm cao su, Nệm lò xo, Vải nỉ nệm foam.',
    icon: 'FlaskConical'
  },
  {
    title: 'Kỹ Thuật Viên Đào Tạo – Lý Lịch Rõ Ràng',
    cheapService: 'Thợ thời vụ tuyển gấp trên mạng, không đồng phục, không trách nhiệm nếu xảy ra hư hỏng.',
    aloVeSinh: '100% nhân viên chính thức có hồ sơ xác minh, được đào tạo 120 giờ kỹ thuật nệm, thái độ lễ phép tận tâm.',
    icon: 'UserCheck'
  },
  {
    title: 'Sấy Cưỡng Bức Nhiệt – Khô Ngay Dù Trời Mưa',
    cheapService: 'Giặt xong nệm ướt sũng, bảo khách tự bật quạt phơi 2-3 ngày, mùa mưa sinh mốc đen trong ruột.',
    aloVeSinh: 'Máy sấy nhiệt đối lưu di động rút ẩm tức thì. Nệm khô ráo tinh tươm trong 45 - 60 phút, nằm ngủ được ngay.',
    icon: 'SunMedium'
  }
];

import beforeImgSrc from './before.png';
import afterImgSrc from './after.png';

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Chị Mai Lan',
    role: 'Khách hàng tại Thảo Điền, TP. Thủ Đức',
    district: 'TP. Thủ Đức',
    rating: 5,
    date: '18/09/2026',
    comment: 'Mùa mưa Sài Gòn nệm nhà mình bị ẩm ngấm mùi ẩm mốc, bé nhỏ cứ nửa đêm là hắt hơi ngứa ngáy. Gọi Alo Vệ Sinh tầm 25 phút là 2 bạn kỹ thuật viên có mặt. Làm kỹ từng góc, nước hút ra đen ngòm nhìn giật mình. Giặt xong có máy sấy thổi nên nệm khô ráo thơm phức, tối bé ngủ ngon lành!',
    mattressType: 'Nệm Cao Su Kymdan 1m8',
    beforeImg: beforeImgSrc,
    afterImg: afterImgSrc,
    condition: 'Bị ố vàng do đổ sữa + Ẩm mốc mùa mưa'
  },
  {
    name: 'Anh Trần Quốc Tuấn',
    role: 'Căn hộ Landmark 81, Bình Thạnh',
    district: 'Bình Thạnh',
    rating: 5,
    date: '12/09/2026',
    comment: 'Tôi rất kỹ tính với nệm lò xo cao cấp vì sợ thợ làm ướt rỉ lò xo bên trong. Alo Vệ Sinh dùng máy hút công suất lớn nhìn đầu hút trong suốt thấy nước dơ hút lên sạch bách. Kỹ thuật viên đeo bọc giày, che chắn sàn gỗ rất cẩn thận. Rất đáng đồng tiền!',
    mattressType: 'Nệm Lò Xo Túi Dunlopillo 2m',
    beforeImg: 'src/data/mattress_dirty.png',
    afterImg: 'src/data/mattress_clean.png',
    condition: 'Bụi mịn tích tụ 2 năm + Mùi hôi thú cưng'
  },
  {
    name: 'Chị Hoàng Yến',
    role: 'Nhà phố KDC Him Lam, Quận 7',
    district: 'Quận 7',
    rating: 5,
    date: '05/09/2026',
    comment: 'Nhà có 2 bé nhỏ tè dầm liên tục, cộng thêm trời mưa dầm cả tuần nệm bốc mùi khai không chịu nổi. Thợ Alo Vệ Sinh xịt dung dịch sinh học khử mùi triệt để, xông thêm tinh dầu sả chanh thơm nhẹ dễ chịu. Mình đặt luôn combo nệm + sofa được giảm hơn 250k.',
    mattressType: 'Nệm Bông Ép Everon + Topper',
    beforeImg: 'src/data/mattress_bedwetting_dirty.png',
    afterImg: 'src/data/mattress_bedwetting_clean.png',
    condition: 'Vết ố vàng tè dầm lâu ngày + Thâm kim'
  }
];

export const DISTRICTS_HCM = [
  { name: 'Quận 1', time: '15 - 25 phút', status: 'Có 3 thợ trực', zone: 'Trung tâm' },
  { name: 'Quận 3', time: '15 - 25 phút', status: 'Có 2 thợ trực', zone: 'Trung tâm' },
  { name: 'Quận 4', time: '20 - 30 phút', status: 'Có 2 thợ trực', zone: 'Nội thành' },
  { name: 'Quận 5', time: '20 - 30 phút', status: 'Có 2 thợ trực', zone: 'Nội thành' },
  { name: 'Quận 6', time: '25 - 35 phút', status: 'Có 2 thợ trực', zone: 'Nội thành' },
  { name: 'Quận 7', time: '20 - 30 phút', status: 'Có 3 thợ trực', zone: 'Khu Nam' },
  { name: 'Quận 8', time: '25 - 35 phút', status: 'Có 2 thợ trực', zone: 'Khu Nam' },
  { name: 'Quận 10', time: '15 - 25 phút', status: 'Có 3 thợ trực', zone: 'Trung tâm' },
  { name: 'Quận 11', time: '20 - 30 phút', status: 'Có 2 thợ trực', zone: 'Nội thành' },
  { name: 'Quận 12', time: '25 - 35 phút', status: 'Có 3 thợ trực', zone: 'Khu Bắc' },
  { name: 'Bình Thạnh', time: '15 - 25 phút', status: 'Có 4 thợ trực', zone: 'Khu Đông' },
  { name: 'Phú Nhuận', time: '15 - 25 phút', status: 'Có 2 thợ trực', zone: 'Trung tâm' },
  { name: 'Gò Vấp', time: '15 - 25 phút', status: 'Có 4 thợ trực', zone: 'Khu Bắc' },
  { name: 'Tân Bình', time: '15 - 25 phút', status: 'Có 3 thợ trực', zone: 'Khu Tây' },
  { name: 'Tân Phú', time: '20 - 30 phút', status: 'Có 2 thợ trực', zone: 'Khu Tây' },
  { name: 'Bình Tân', time: '25 - 35 phút', status: 'Có 3 thợ trực', zone: 'Khu Tây' },
  { name: 'TP. Thủ Đức', time: '20 - 30 phút', status: 'Có 5 thợ trực', zone: 'Khu Đông' },
  { name: 'Nhà Bè', time: '30 - 45 phút', status: 'Có 2 thợ trực', zone: 'Ngoại thành' },
  { name: 'Bình Chánh', time: '30 - 45 phút', status: 'Có 2 thợ trực', zone: 'Ngoại thành' },
  { name: 'Hóc Môn', time: '30 - 45 phút', status: 'Có 2 thợ trực', zone: 'Ngoại thành' },
  { name: 'Củ Chi', time: 'Đặt trước 1h', status: 'Lên lịch linh hoạt', zone: 'Ngoại thành' },
  { name: 'Cần Giờ', time: 'Đặt trước trong ngày', status: 'Theo lịch hẹn', zone: 'Ngoại thành' }
];

export const FAQS: FAQItem[] = [
  {
    tag: 'Thời tiết mùa mưa',
    question: 'Trời mưa nệm giặt xong có bị ẩm ướt hay hôi mốc không?',
    answer: 'Hoàn toàn không. Alo Vệ Sinh sử dụng máy hút công suất cực lớn 3000W hút sạch 90-95% lượng nước bẩn sâu bên trong lõi nệm, kết hợp máy sấy nhiệt đối lưu cưỡng bức chuyên dụng. Nệm sẽ khô ráo 100%, thơm tho và sử dụng được ngay trong ngày mà không phụ thuộc vào ánh nắng mặt trời hay thời tiết mưa dầm TP.HCM.'
  },
  {
    tag: 'An toàn sức khỏe',
    question: 'Dung dịch giặt nệm của Alo Vệ Sinh có an toàn cho trẻ sơ sinh và mẹ bầu không?',
    answer: '100% an toàn. Alo Vệ Sinh cam kết dùng dung dịch sinh học enzyme hữu cơ nhập khẩu, đã được kiểm nghiệm độ an toàn sinh học. Sản phẩm không chứa Clo tẩy trắng hay hóa chất nồng gắt, độ pH 7.0 lành tính tuyệt đối với làn da nhạy cảm của em bé và an toàn cho thú cưng.'
  },
  {
    tag: 'Tốc độ phục vụ',
    question: 'Sau khi đặt lịch thì bao lâu kỹ thuật viên có mặt tại nhà tôi?',
    answer: 'Alo Vệ Sinh có mạng lưới đội ngũ kỹ thuật viên phân bổ thường trực khắp 22 quận huyện TP.HCM. Kỹ thuật viên sẽ có mặt chỉ sau 15 - 30 phút tại các quận nội thành hoặc có mặt chính xác theo khung giờ hẹn mà bạn đã yêu cầu trên form đặt lịch.'
  },
  {
    tag: 'Bảo vệ nệm đắt tiền',
    question: 'Giặt nệm cao su thiên nhiên (Kymdan, Liên Á, Vạn Thành) có bị hư hay mục cao su không?',
    answer: 'Tuyệt đối không. Cao su thiên nhiên rất kỵ nhiệt độ quá cao và hóa chất kiềm mạnh. Kỹ thuật viên của Alo Vệ Sinh kiểm soát nhiệt độ hơi nước chính xác ở mức tiêu chuẩn (60°C - 65°C), chỉ dùng dung dịch trung tính chuyên dụng cho cao su và sấy gió nhiệt đối lưu ổn định, giữ nguyên độ đàn hồi dẻo dai và tuổi thọ của nệm.'
  },
  {
    tag: 'Hiệu quả tẩy điểm',
    question: 'Vết ố vàng do nước tiểu, cà phê, ẩm mốc lâu ngày có sạch 100% không?',
    answer: 'Với các vết bẩn mới và vết ẩm mốc trên bề mặt, chúng tôi làm sạch triệt để 95 - 99%. Với các vết ố vàng hữu cơ ngấm sâu nhiều năm qua lớp vải bọc, dung dịch enzyme sẽ bóc tách và làm mờ từ 80 - 95% mà không làm mục mủn sợi vải. Kỹ thuật viên Alo Vệ Sinh luôn kiểm tra tình trạng thực tế và tư vấn trung thực trước khi tiến hành giặt.'
  },
  {
    tag: 'Tiện lợi & chuẩn bị',
    question: 'Khách hàng có cần chuẩn bị hay dọn dẹp phòng trước khi thợ tới không?',
    answer: 'Bạn chỉ cần dọn dẹp đồ đạc cá nhân trên mặt nệm (chăn, gối, drap). Mọi khâu kê dịch nệm, bọc lót bảo vệ sàn gỗ xung quanh, hút bụi gầm giường và dọn dẹp sạch sẽ sau khi thi công đều do kỹ thuật viên Alo Vệ Sinh đảm nhiệm toàn bộ.'
  },
  {
    tag: 'Chi phí & phụ thu',
    question: 'Có phụ thu phí đi lại, làm ngoài giờ hoặc cuối tuần/ngày lễ không?',
    answer: 'Không bao giờ. Bảng giá dịch vụ của Alo Vệ Sinh niêm yết công khai và minh bạch, đồng giá mọi ngày trong tuần kể cả Thứ 7, Chủ Nhật và các ngày nghỉ lễ. Miễn phí di chuyển trong toàn bộ 22 quận huyện TP.HCM.'
  },
  {
    tag: 'Chính sách bảo hành',
    question: 'Chính sách bảo hành 7 ngày của Alo Vệ Sinh hoạt động như thế nào?',
    answer: 'Trong vòng 7 ngày sau khi giặt, nếu quý khách phát hiện mùi ẩm còn sót lại, vết bẩn chưa đạt chuẩn như cam kết hoặc có bất kỳ điều gì chưa hài lòng, Alo Vệ Sinh sẽ cử kỹ thuật viên đến xử lý lại hoàn toàn miễn phí trong vòng 24h hoặc hoàn tiền 100% không phiền hà.'
  }
];

export const B2B_SERVICES = [
  {
    title: 'Khách Sạn & Căn Hộ Dịch Vụ Airbnb',
    desc: 'Bảo dưỡng nệm định kỳ, khử mùi ẩm mốc phòng kín, đảm bảo điểm đánh giá vệ sinh 5 sao trên Agoda/Booking/Airbnb.',
    perks: ['Chiết khấu tới 30%', 'Hóa đơn đỏ VAT hợp lệ', 'Linh hoạt làm đêm hoặc giờ vắng khách']
  },
  {
    title: 'Trường Mầm Non & Trung Tâm Ngoại Ngữ',
    desc: 'Giặt nệm ngủ trưa cho bé bằng 100% dung dịch hữu cơ sinh học, xông tinh dầu đuổi muỗi và tiệt trùng bằng đèn UV.',
    perks: ['Chứng nhận an toàn da liễu', 'Khử khuẩn định kỳ hàng tháng', 'Ưu đãi hợp đồng dài hạn']
  },
  {
    title: 'Văn Phòng Công Ty & Tòa Nhà',
    desc: 'Giặt ghế văn phòng, giặt thảm trải sàn, sofa sảnh tiếp khách mùa mưa không gây mùi ẩm ẩm cho không gian làm việc.',
    perks: ['Thi công sau 18h hoặc cuối tuần', 'Máy sấy khô cấp tốc dùng ngay sáng T2', 'Báo giá nhanh trong 15 phút']
  }
];
