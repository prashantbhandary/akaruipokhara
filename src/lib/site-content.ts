import {
  destinations as baseDestinations,
  directorMessage as baseDirectorMessage,
  services as baseServices,
  teamCategories as baseTeamCategories,
  testimonials as baseTestimonials,
} from "@/lib/data";
import type { LanguageCode } from "@/lib/landing-content";

export type ServiceContent = {
  title: string;
  description: string;
};

export type DestinationContent = {
  country: string;
  headline: string;
  overview: string;
  requirements: string[];
  eligibility: string[];
  visaProcess: string[];
  benefits: string[];
  support: string[];
};

export type TestimonialContent = {
  name: string;
  destination: string;
  quote: string;
};

export type TeamMemberContent = {
  name: string;
  role: string;
  experience: string;
};

export type TeamGroupContent = {
  title: string;
  members: TeamMemberContent[];
};

type SiteContent = {
  services: ServiceContent[];
  destinations: DestinationContent[];
  testimonials: TestimonialContent[];
  team: {
    directorMessage: {
      message: string;
      name: string;
      title: string;
    };
    groups: TeamGroupContent[];
  };
};

const englishServices = baseServices.map((service) => ({
  title: service.title,
  description: service.description,
}));

const japaneseServices: ServiceContent[] = [
  {
    title: "個別カウンセリング",
    description: "一人ひとりの目標に合わせて、最適な進学先を一緒に探します。",
  },
  {
    title: "ビザ承認後のお支払い",
    description: "前払い不要。ビザが承認されてからのお支払いです。",
  },
  {
    title: "COE・ビザ手続き",
    description: "COE 申請から大使館提出まで、手続きを一括でサポートします。",
  },
  {
    title: "語学・文化準備",
    description: "JLPT だけでなく、日本での生活に必要な文化理解まで準備します。",
  },
  {
    title: "大学出願",
    description: "志望理由書、書類確認、出願作業まで丁寧に対応します。",
  },
  {
    title: "試験対策",
    description: "JLPT、NAT-TEST、EJU、JFT-Basic に向けた対策講座です。",
  },
  {
    title: "奨学金案内",
    description: "学費負担を軽減するための奨学金情報を提案します。",
  },
  {
    title: "住居サポート",
    description: "寮やアパート探し、入居前の準備まで支援します。",
  },
];

const nepaliServices: ServiceContent[] = [
  {
    title: "व्यक्तिगत परामर्श",
    description: "तपाईंको लक्ष्य अनुसार सबैभन्दा उपयुक्त अध्ययन गन्तव्य छान्न सहयोग गर्छौं।",
  },
  {
    title: "भिसा स्वीकृतिपछि भुक्तानी",
    description: "अग्रिम शुल्क छैन। भिसा स्वीकृत भएपछि मात्र भुक्तानी गर्नुहोस्।",
  },
  {
    title: "COE र भिसा प्रक्रिया",
    description: "COE आवेदनदेखि दूतावास बुझाउनेसम्म सबै कागजी प्रक्रिया हामीले सम्हाल्छौं।",
  },
  {
    title: "भाषा र सांस्कृतिक तयारी",
    description: "JLPT मात्र होइन, जापानको दैनिक जीवनका लागि आवश्यक तयारी पनि गराइन्छ।",
  },
  {
    title: "विश्वविद्यालय भर्ना",
    description: "SOP, कागजात जाँच, र आवेदन प्रक्रियामा पूर्ण सहयोग।",
  },
  {
    title: "परीक्षा तयारी",
    description: "JLPT, NAT-TEST, EJU, र JFT-Basic का लागि तयारी कक्षा।",
  },
  {
    title: "छात्रवृत्ति मार्गदर्शन",
    description: "अध्ययन खर्च घटाउन सहयोग पुग्ने छात्रवृत्ति विकल्पहरू पहिचान गर्छौं।",
  },
  {
    title: "बसोबास सहयोग",
    description: "डरमिटोरी वा अपार्टमेन्ट खोज्ने र सर्ने अघि तयारी गर्ने सहयोग।",
  },
];

const englishDestinations = baseDestinations.map((destination) => ({
  country: destination.country,
  headline: destination.headline,
  overview: destination.overview,
  requirements: destination.requirements,
  eligibility: destination.eligibility,
  visaProcess: destination.visaProcess,
  benefits: destination.benefits,
  support: destination.support,
}));

const japaneseDestinations: DestinationContent[] = [
  {
    country: "東京",
    headline: "キャリア志向の学生に最適な国際都市",
    overview: "95,000人以上の留学生が学ぶ、日本トップクラスの大学が集まる都市です。",
    requirements: ["成績証明書・卒業証明書", "JLPT / NAT / IELTS などの語学証明", "経済証明書類", "志望理由書"],
    eligibility: ["10+2 相当を修了", "大学ごとの GPA 基準を満たす", "明確な学習計画がある"],
    visaProcess: ["大学合格と COE 申請", "大使館申請と面接", "ビザ発給と渡航前説明"],
    benefits: ["トップレベルの大学", "強いキャリア機会", "充実した学生支援"],
    support: ["渡航前オリエンテーション", "空港送迎の調整", "住居案内"],
  },
  {
    country: "大阪",
    headline: "親しみやすい雰囲気と活気ある学生都市",
    overview: "食文化とビジネスの中心地で、東京より生活費を抑えやすい都市です。",
    requirements: ["学業成績証明", "JLPT / NAT / IELTS", "資金証明", "健康・身元証明"],
    eligibility: ["必要な学業成績", "言語条件の達成", "明確な進学目的"],
    visaProcess: ["合格通知と COE", "ビザ申請準備", "申請提出"],
    benefits: ["東京より生活費が低め", "ビジネス・IT の進路", "温かい学生文化"],
    support: ["都市選びの支援", "奨学金案内", "渡航前チェック"],
  },
  {
    country: "京都",
    headline: "歴史と学びが調和する文化の街",
    overview: "世界遺産に囲まれた静かな環境で、学習に集中しやすい都市です。",
    requirements: ["成績証明書", "語学証明", "資金証明", "志望理由書"],
    eligibility: ["学業の継続性", "学費を支払える証明", "明確な留学計画"],
    visaProcess: ["大学合格と COE", "ビザ申請支援", "審査対応"],
    benefits: ["文化体験が豊富", "落ち着いた学習環境", "歴史あるキャンパス"],
    support: ["SOP 作成", "書類確認", "到着後サポート"],
  },
  {
    country: "福岡",
    headline: "アジアに開かれた、費用を抑えやすい海辺の都市",
    overview: "テックやスタートアップも成長している、学生に人気の都市です。",
    requirements: ["成績証明書", "語学証明", "推薦状と SOP", "資金証明"],
    eligibility: ["コースに合う成績", "言語条件の達成", "関連分野の背景"],
    visaProcess: ["合格通知と COE", "ビザ申請", "渡航計画"],
    benefits: ["生活費を抑えやすい", "IT・技術分野に強い", "アジア圏へのアクセスが良い"],
    support: ["コース選び", "ビザ案内", "渡航前説明"],
  },
  {
    country: "名古屋",
    headline: "ものづくり産業が強い実践型都市",
    overview: "製造業と工学分野の進路に強く、落ち着いた大都市です。",
    requirements: ["成績証明書", "語学証明", "資金証明", "志望理由書"],
    eligibility: ["学業成績が安定", "コースに合う背景", "明確な将来像"],
    visaProcess: ["合格通知と COE", "ビザ手続き", "渡航前説明"],
    benefits: ["工学・自動車分野に強い", "ちょうどよい都市規模", "産業とのつながり"],
    support: ["大学マッチング", "面接練習", "必要書類チェック"],
  },
  {
    country: "札幌",
    headline: "自然と静けさが魅力の学生都市",
    overview: "雪まつりで有名な、落ち着いて学べる環境の都市です。",
    requirements: ["成績証明書", "語学証明", "資金証明", "志望理由書"],
    eligibility: ["10+2 相当を修了", "大学ごとの GPA 基準", "進学の流れが明確"],
    visaProcess: ["大学合格と COE", "大使館申請と面接", "ビザ発給と出発準備"],
    benefits: ["静かな学生環境", "自然と季節文化", "集中しやすい雰囲気"],
    support: ["渡航前オリエンテーション", "住居案内", "空港送迎の調整"],
  },
  {
    country: "仙台",
    headline: "学びやすさと暮らしやすさのバランスが良い街",
    overview: "緑の多い落ち着いた都市で、学生生活との相性が良い場所です。",
    requirements: ["成績証明書", "語学証明", "資金証明", "志望理由書"],
    eligibility: ["10+2 相当を修了", "大学ごとの GPA 基準", "継続した学業の流れ"],
    visaProcess: ["大学合格と COE", "大使館申請と面接", "ビザ発給と渡航前説明"],
    benefits: ["教育水準が高い", "自然に近い生活", "暮らしやすい都市"],
    support: ["渡航前オリエンテーション", "空港送迎の調整", "住居案内"],
  },
  {
    country: "横浜",
    headline: "東京に近い、海辺の学生都市",
    overview: "日本最大級の雇用圏に近く、アクセスの良い港町です。",
    requirements: ["成績証明書", "語学証明", "資金証明", "志望理由書"],
    eligibility: ["10+2 相当を修了", "大学ごとの GPA 基準", "進学計画が明確"],
    visaProcess: ["大学合格と COE", "大使館申請と面接", "ビザ発給と渡航前説明"],
    benefits: ["海辺の暮らし", "東京にすぐ行ける立地", "学生コミュニティが大きい"],
    support: ["渡航前オリエンテーション", "空港送迎の調整", "住居案内"],
  },
];

const nepaliDestinations: DestinationContent[] = [
  {
    country: "टोकियो",
    headline: "क्यारियर केन्द्रित विद्यार्थीका लागि उपयुक्त अन्तर्राष्ट्रिय सहर",
    overview: "९५,००० भन्दा बढी अन्तर्राष्ट्रिय विद्यार्थी र शीर्ष विश्वविद्यालयहरू भएको शहर।",
    requirements: ["शैक्षिक प्रमाणपत्र", "JLPT / NAT / IELTS जस्ता भाषा प्रमाण", "आर्थिक कागजात", "अध्ययन उद्देश्य पत्र"],
    eligibility: ["10+2 वा समकक्ष पूरा", "विश्वविद्यालयको GPA मापदण्ड", "स्पष्ट अध्ययन योजना"],
    visaProcess: ["विश्वविद्यालय भर्ना र COE आवेदन", "दूतावास आवेदन र अन्तर्वार्ता", "भिसा स्वीकृति र प्रस्थानपूर्व तयारी"],
    benefits: ["उच्चस्तरीय विश्वविद्यालय", "क्यारियर अवसर धेरै", "बलियो विद्यार्थी सहयोग"],
    support: ["प्रस्थानपूर्व अभिमुखीकरण", "एयरपोर्ट पिकअप समन्वय", "बसोबास मार्गदर्शन"],
  },
  {
    country: "ओसाका",
    headline: "मिलनसार वातावरण र सक्रिय विद्यार्थी सहर",
    overview: "खानपान र व्यवसायको केन्द्र, टोकियोभन्दा खर्च अलि कम हुने शहर।",
    requirements: ["शैक्षिक प्रमाणपत्र", "भाषा प्रमाण", "आर्थिक प्रमाण", "स्वास्थ्य/चरित्र कागजात"],
    eligibility: ["आवश्यक शैक्षिक स्तर", "भाषा मापदण्ड पूरा", "स्पष्ट अध्ययन लक्ष्य"],
    visaProcess: ["भर्ना पत्र र COE", "भिसा आवेदन तयारी", "आवेदन पेश"],
    benefits: ["टोकियोभन्दा कम खर्चिलो", "व्यवसाय र IT का अवसर", "न्यानो विद्यार्थी संस्कृति"],
    support: ["सहर छनोट सहयोग", "छात्रवृत्ति मार्गदर्शन", "प्रस्थानपूर्व चेकलिस्ट"],
  },
  {
    country: "क्योटो",
    headline: "इतिहास र अध्ययन सँगै पाइने सांस्कृतिक शहर",
    overview: "विश्व सम्पदा बीचमा शान्त वातावरणमा अध्ययन गर्न सजिलो शहर।",
    requirements: ["शैक्षिक प्रमाणपत्र", "भाषा प्रमाण", "आर्थिक प्रमाण", "अध्ययन उद्देश्य पत्र"],
    eligibility: ["शैक्षिक निरन्तरता", "खर्च धान्न सकिने प्रमाण", "स्पष्ट अध्ययन योजना"],
    visaProcess: ["विश्वविद्यालय भर्ना र COE", "भिसा आवेदन सहयोग", "जाँच प्रक्रिया"],
    benefits: ["समृद्ध सांस्कृतिक अनुभव", "शान्त अध्ययन वातावरण", "ऐतिहासिक क्याम्पस"],
    support: ["SOP तयारी", "कागजात जाँच", "आगमनपछिको सहयोग"],
  },
  {
    country: "फुकुओका",
    headline: "एशियासँग जोडिएको, खर्च कम हुने समुद्री शहर",
    overview: "स्टार्टअप र टेक्नोलोजी बढ्दै गएको, विद्यार्थीमैत्री शहर।",
    requirements: ["शैक्षिक प्रमाणपत्र", "भाषा प्रमाण", "सिफारिस पत्र र SOP", "आर्थिक कागजात"],
    eligibility: ["कोर्ससँग मेल खाने GPA", "भाषा मापदण्ड पूरा", "सम्बन्धित पृष्ठभूमि"],
    visaProcess: ["भर्ना पत्र र COE", "भिसा आवेदन", "यात्रा योजना"],
    benefits: ["कम जीवन खर्च", "टेक/व्यवसाय अवसर", "एशियासँग सहज पहुँच"],
    support: ["कोर्स छनोट", "भिसा सहयोग", "प्रस्थानपूर्व ब्रिफिङ"],
  },
  {
    country: "नागोया",
    headline: "इन्जिनियरिङ् र उत्पादन उद्योगमा बलियो सहर",
    overview: "प्राविधिक र औद्योगिक पढाइका लागि उपयुक्त, सन्तुलित ठूलो शहर।",
    requirements: ["शैक्षिक प्रमाणपत्र", "भाषा प्रमाण", "आर्थिक प्रमाण", "अध्ययन उद्देश्य पत्र"],
    eligibility: ["बलियो शैक्षिक प्रोफाइल", "कोर्ससँग मेल खाने पृष्ठभूमि", "स्पष्ट करियर लक्ष्य"],
    visaProcess: ["भर्ना पत्र र COE", "भिसा प्रक्रिया", "प्रस्थानपूर्व तयारी"],
    benefits: ["इन्जिनियरिङ् र अटोमोबाइल अवसर", "व्यवहारिक सहर आकार", "उद्योगसँग बलियो सम्बन्ध"],
    support: ["विश्वविद्यालय मिलान", "अन्तर्वार्ता तयारी", "दस्तावेज चेकलिस्ट"],
  },
  {
    country: "साप्पोरो",
    headline: "शान्त विद्यार्थी जीवनका लागि प्रकृतिसँग जोडिएको शहर",
    overview: "हिउँ उत्सवले चर्चित, अध्ययनमा ध्यान केन्द्रित गर्न सजिलो शहर।",
    requirements: ["शैक्षिक प्रमाणपत्र", "भाषा प्रमाण", "आर्थिक कागजात", "अध्ययन उद्देश्य पत्र"],
    eligibility: ["10+2 वा समकक्ष पूरा", "विश्वविद्यालयको GPA मापदण्ड", "स्पष्ट शैक्षिक प्रगति"],
    visaProcess: ["विश्वविद्यालय भर्ना र COE", "दूतावास आवेदन र अन्तर्वार्ता", "भिसा स्वीकृति र प्रस्थान तयारी"],
    benefits: ["शान्त विद्यार्थी वातावरण", "प्रकृति र सांस्कृतिक मौसमी जीवन", "ध्यान केन्द्रित अध्ययन"],
    support: ["प्रस्थानपूर्व अभिमुखीकरण", "बसोबास सहयोग", "एयरपोर्ट पिकअप"],
  },
  {
    country: "सेन्दाइ",
    headline: "सन्तुलित जीवन र उच्च शैक्षिक स्तर भएको शहर",
    overview: "हरियाली र सुविधा दुवै भएको, विद्यार्थी जीवनका लागि राम्रो सहर।",
    requirements: ["शैक्षिक प्रमाणपत्र", "भाषा प्रमाण", "आर्थिक कागजात", "अध्ययन उद्देश्य पत्र"],
    eligibility: ["10+2 वा समकक्ष पूरा", "विश्वविद्यालयको GPA मापदण्ड", "लगातार शैक्षिक प्रगति"],
    visaProcess: ["विश्वविद्यालय भर्ना र COE", "दूतावास आवेदन र अन्तर्वार्ता", "भिसा स्वीकृति र प्रस्थानपूर्व जानकारी"],
    benefits: ["उच्च शैक्षिक स्तर", "प्राकृतिक वातावरण", "सन्तुलित विद्यार्थी जीवन"],
    support: ["प्रस्थानपूर्व अभिमुखीकरण", "एयरपोर्ट पिकअप", "बसोबास सहयोग"],
  },
  {
    country: "योकोहामा",
    headline: "टोकियो नजिकको समुद्री शहर",
    overview: "जापानको ठूलो रोजगारी बजार र विद्यार्थी नेटवर्क नजिकै रहेको शहर।",
    requirements: ["शैक्षिक प्रमाणपत्र", "भाषा प्रमाण", "आर्थिक कागजात", "अध्ययन उद्देश्य पत्र"],
    eligibility: ["10+2 वा समकक्ष पूरा", "विश्वविद्यालयको GPA मापदण्ड", "स्पष्ट अध्ययन योजना"],
    visaProcess: ["विश्वविद्यालय भर्ना र COE", "दूतावास आवेदन र अन्तर्वार्ता", "भिसा स्वीकृति र प्रस्थानपूर्व तयारी"],
    benefits: ["समुद्री सहर जीवन", "टोकियोमा सजिलो पहुँच", "ठूलो विद्यार्थी समुदाय"],
    support: ["प्रस्थानपूर्व अभिमुखीकरण", "एयरपोर्ट पिकअप", "बसोबास सहयोग"],
  },
];

const japaneseTestimonials: TestimonialContent[] = [
  {
    name: "サンジェイ・ラナ",
    destination: "東京、日本",
    quote: "AKARUI のおかげで東京留学の夢が叶いました。初めてのひらがなから住まい探しまで全部支えてくれました。",
  },
  {
    name: "プリヤ・グルン",
    destination: "大阪、日本",
    quote: "COE は一度も問い合わせなく承認されました。翻訳や残高証明まで本当に丁寧でした。",
  },
  {
    name: "ロシャン・バスネット",
    destination: "福岡、日本",
    quote: "授業料の減免まで実現できました。面接準備が本当に万全だったので、最初から自信が持てました。",
  },
];

const nepaliTestimonials: TestimonialContent[] = [
  {
    name: "सञ्जय राना",
    destination: "टोकियो, जापान",
    quote: "AKARUI का कारण मेरो टोकियोमा अध्ययन गर्ने सपना पूरा भयो। पहिलो हिरागाना पाठदेखि अपार्टमेन्ट खोज्ने सम्म सहयोग पाएँ।",
  },
  {
    name: "प्रिया गुरुङ",
    destination: "ओसाका, जापान",
    quote: "मेरो COE मा एकपटक पनि प्रश्न आएन। अनुवाद र बैंक कागजातमा टोली एकदमै सावधान थियो।",
  },
  {
    name: "रोशन बस्नेत",
    destination: "फुकुओका, जापान",
    quote: "AKARUI टोलीले मलाई ट्युसन छुट दिलायो। अन्तर्वार्ता तयारी यति राम्रो थियो कि पहिलो प्रश्नदेखि नै आत्मविश्वास थियो।",
  },
];

const englishTeam = baseTeamCategories;

const japaneseTeam: SiteContent["team"]["groups"] = [
  {
    title: "リーダーチーム",
    members: [
      { name: "Founder & CEO", role: "経営陣", experience: "創業以来、AKARUI! を牽引" },
      { name: "Managing Director", role: "戦略・提携", experience: "ポカラ拠点と提携 नेटवर्कを統括" },
    ],
  },
  {
    title: "専門チーム",
    members: [
      { name: "Counselor", role: "学生相談", experience: "一人ひとりに合わせた進路案内" },
      { name: "Japanese Language Instructor", role: "JLPT・NAT-TEST", experience: "語学試験と生活準備を指導" },
      { name: "Documentation Officer", role: "COE・申請管理", experience: "書類と提出を正確に管理" },
      { name: "Marketing Coordinator", role: "広報・案内", experience: "学生と保護者に正確な情報を届ける" },
    ],
  },
];

const nepaliTeam: SiteContent["team"]["groups"] = [
  {
    title: "नेतृत्व टोली",
    members: [
      { name: "Founder & CEO", role: "कार्यकारी नेतृत्व", experience: "स्थापना देखि AKARUI! लाई अगाडि बढाउँदै" },
      { name: "Managing Director", role: "रणनीति र साझेदारी", experience: "पोखरा टोली र साझेदार सञ्जालको नेतृत्व" },
    ],
  },
  {
    title: "विशेषज्ञ टोली",
    members: [
      { name: "Counselor", role: "विद्यार्थी परामर्श", experience: "हरेक प्रोफाइलका लागि व्यक्तिगत मार्गदर्शन" },
      { name: "Japanese Language Instructor", role: "JLPT र NAT-TEST", experience: "भाषा परीक्षा र सांस्कृतिक तयारीमा सहयोग" },
      { name: "Documentation Officer", role: "COE र कागजात", experience: "कागजी प्रक्रिया र पेशीमा सावधानी" },
      { name: "Marketing Coordinator", role: "समुदाय समन्वय", experience: "विद्यार्थी र परिवारलाई सही जानकारी पुर्‍याउने" },
    ],
  },
];

const teamDirector = {
  en: baseDirectorMessage,
  ja: {
    message:
      "学生の成功は、信頼できる準備から始まります。AKARUI! は相談から渡航後まで責任を持って伴走します。",
    name: "Director",
    title: "Pokhara Leadership Team",
  },
  ne: {
    message:
      "विद्यार्थीको सफलता भरपर्दो तयारीबाट सुरु हुन्छ। AKARUI! ले परामर्शदेखि विदेश पुगेपछि पनि साथ दिन्छ।",
    name: "Director",
    title: "Pokhara नेतृत्व टोली",
  },
} satisfies Record<LanguageCode, SiteContent["team"]["directorMessage"]>;

export const siteContent: Record<LanguageCode, SiteContent> = {
  en: {
    services: englishServices,
    destinations: englishDestinations,
    testimonials: baseTestimonials,
    team: {
      directorMessage: teamDirector.en,
      groups: englishTeam,
    },
  },
  ja: {
    services: japaneseServices,
    destinations: japaneseDestinations,
    testimonials: japaneseTestimonials,
    team: {
      directorMessage: teamDirector.ja,
      groups: japaneseTeam,
    },
  },
  ne: {
    services: nepaliServices,
    destinations: nepaliDestinations,
    testimonials: nepaliTestimonials,
    team: {
      directorMessage: teamDirector.ne,
      groups: nepaliTeam,
    },
  },
};

export const baseSiteContent = {
  services: baseServices,
  destinations: baseDestinations,
  testimonials: baseTestimonials,
  teamCategories: baseTeamCategories,
};