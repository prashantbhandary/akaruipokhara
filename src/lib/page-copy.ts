import type { LanguageCode } from "@/lib/landing-content";

type PageCopy = {
  nav: {
    destinations: string;
    services: string;
    whyUs: string;
    team: string;
    stories: string;
    gallery: string;
    contact: string;
    freeCounselling: string;
    callUs: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    whyEyebrow: string;
    whyTitle: string;
    whyDescription: string;
    journeyEyebrow: string;
    journeyTitle: string;
    journeyDescription: string;
    teamEyebrow: string;
    teamTitle: string;
    teamDescription: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
  };
  team: {
    eyebrow: string;
    title: string;
    description: string;
  };
  destinations: {
    eyebrow: string;
    title: string;
    description: string;
    labels: {
      requirements: string;
      eligibility: string;
      visaProcess: string;
      benefits: string;
      support: string;
    };
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    previewLabel: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    description: string;
    categories: string[];
    searchPlaceholder: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contactSection: {
    office: string;
    email: string;
    phone: string;
    hours: string;
    social: string;
    submit: string;
    call: string;
  };
  footer: {
    title: string;
    subtitle: string;
    description: string;
    quickLinks: string;
    office: string;
    destinations: string;
    destinationItems: string[];
  };
  teamSections: {
    directorEyebrow: string;
    directorTitle: string;
    directorDescription: string;
    groups: { eyebrow: string; title: string; description: string }[];
  };
};

export const pageCopy: Record<LanguageCode, PageCopy> = {
  en: {
    nav: {
      destinations: "Destinations",
      services: "Services",
      whyUs: "Why Us",
      team: "Team",
      stories: "Stories",
      gallery: "Gallery",
      contact: "Contact",
      freeCounselling: "Free Counselling",
      callUs: "Call Us",
    },
    about: {
      eyebrow: "About AKARUI!",
      title: "A brighter future for Pokhara students.",
      description:
        "We provide personalized support, Japan-first preparation, and post-arrival guidance so every student feels prepared before, during, and after departure.",
      whyEyebrow: "Why AKARUI!",
      whyTitle: "We don't just send you - we prepare you.",
      whyDescription:
        "From counseling to visa support and life-skills coaching, every step is built around student success in Japan.",
      journeyEyebrow: "Our Journey",
      journeyTitle: "Growth rooted in student success.",
      journeyDescription:
        "AKARUI! has expanded with one goal: deliver the best possible outcomes for Japan-bound students.",
      teamEyebrow: "Meet Our Team",
      teamTitle: "Leadership and experts you can count on.",
      teamDescription:
        "A passionate team working together to guide students toward success in Japan.",
    },
    services: {
      eyebrow: "Services",
      title: "Everything you need in one place.",
      description:
        "From your first consultation to landing at your destination university, AKARUI! covers it all.",
    },
    team: {
      eyebrow: "Meet Our Team",
      title: "We don't just send you - we prepare you.",
      description:
        "AKARUI! brings together leadership, advisors, visa experts, and language instructors who guide every step of the journey.",
    },
    destinations: {
      eyebrow: "Study Destinations",
      title: "Choose your dream city in Japan.",
      description:
        "Tokyo, Osaka, Kyoto, Fukuoka, Nagoya, Sapporo, Sendai, and Yokohama all matched to different student goals.",
      labels: {
        requirements: "Requirements",
        eligibility: "Eligibility",
        visaProcess: "Visa Process",
        benefits: "Benefits",
        support: "Student Support",
      },
    },
    testimonials: {
      eyebrow: "Student Stories",
      title: "Real students, real success in Japan.",
      description:
        "Hear from students who trusted AKARUI! for their study abroad journey.",
    },
    gallery: {
      eyebrow: "Student Gallery",
      title: "Stories of success and dreams.",
      description:
        "Browse highlights from counseling sessions, orientations, COE documents, and student celebrations.",
      previewLabel: "Sample images preview",
    },
    blog: {
      eyebrow: "Blog",
      title: "Insights and updates from Akarui Education Pokhara.",
      description:
        "Study abroad tips, visa guidance, and success stories for Pokhara students.",
      categories: ["All", "Study Abroad", "Visa", "Language", "News"],
      searchPlaceholder: "Search articles",
    },
    contact: {
      eyebrow: "Contact",
      title: "Start Your Journey with AKARUI!",
      description:
        "Our expert counsellors in Pokhara are ready to guide you. Drop by, call us, or use the link below — we'll get back to you the same day.",
    },
    contactSection: {
      office: "Office",
      email: "Email",
      phone: "Phone / WhatsApp",
      hours: "Hours",
      social: "Social Media",
      submit: "Submit — Get Free Counselling",
      call: "Call Us Now — Instant Help",
    },
    footer: {
      title: "Akarui Education Pokhara",
      subtitle: "Akarui Education Consultancy",
      description:
        "Premium education consultancy in Pokhara supporting students with counseling, documentation, and global admissions.",
      quickLinks: "Quick Links",
      office: "Office",
      destinations: "Study Destinations",
      destinationItems: ["Japan", "Australia", "Canada", "United Kingdom", "United States"],
    },
    teamSections: {
      directorEyebrow: "Director's Message",
      directorTitle: "Leadership grounded in care and credibility.",
      directorDescription: "A message from the Pokhara leadership team.",
      groups: [
        {
          eyebrow: "Leadership Team",
          title: "Our Leadership Team",
          description: "Strategic leadership guiding the Pokhara office.",
        },
        {
          eyebrow: "Expert Team",
          title: "Our Expert Team",
          description: "Experienced specialists guiding every application and visa step.",
        },
      ],
    },
  },
  ja: {
    nav: {
      destinations: "留学先",
      services: "サービス",
      whyUs: "AKARUI! の強み",
      team: "チーム",
      stories: "学生の声",
      gallery: "ギャラリー",
      contact: "お問い合わせ",
      freeCounselling: "無料カウンセリング",
      callUs: "電話する",
    },
    about: {
      eyebrow: "AKARUI! について",
      title: "ポカラの学生に、より明るい未来を。",
      description:
        "私たちは、個別サポート、日本向けの準備、渡航後の案内まで提供し、出発前・滞在中・帰国後まで安心して進めるよう支えます。",
      whyEyebrow: "AKARUI! の強み",
      whyTitle: "送り出すだけでなく、しっかり準備します。",
      whyDescription:
        "カウンセリングからビザ支援、生活準備まで、日本での成功を中心に設計しています。",
      journeyEyebrow: "歩み",
      journeyTitle: "学生の成功から広がる成長。",
      journeyDescription:
        "AKARUI! は、日本へ進学する学生に最良の結果を届けることを目標に成長してきました。",
      teamEyebrow: "チーム紹介",
      teamTitle: "信頼できるリーダーと専門家。",
      teamDescription:
        "学生が日本で成功できるよう、情熱を持ったチームが一丸となって支えます。",
    },
    services: {
      eyebrow: "サービス",
      title: "必要なことを一か所で。",
      description:
        "最初の相談から大学到着まで、AKARUI! がすべてをサポートします。",
    },
    team: {
      eyebrow: "チーム紹介",
      title: "送り出すだけでなく、しっかり準備します。",
      description:
        "AKARUI! には、学生の一歩一歩を支えるリーダー、アドバイザー、ビザ専門家、語学講師が揃っています。",
    },
    destinations: {
      eyebrow: "留学先",
      title: "日本で夢の都市を選びましょう。",
      description:
        "東京、大阪、京都、福岡、名古屋、札幌、仙台、横浜など、それぞれの学生に合った都市を案内します。",
      labels: {
        requirements: "必要書類",
        eligibility: "応募条件",
        visaProcess: "ビザ手続き",
        benefits: "メリット",
        support: "学生サポート",
      },
    },
    testimonials: {
      eyebrow: "学生の声",
      title: "日本での本当の成功体験。",
      description:
        "AKARUI! を信頼した学生たちの留学体験をご覧ください。",
    },
    gallery: {
      eyebrow: "学生ギャラリー",
      title: "夢と成功のストーリー。",
      description:
        "カウンセリング、オリエンテーション、COE 書類、学生の記念写真をご覧ください。",
      previewLabel: "サンプル画像のプレビュー",
    },
    blog: {
      eyebrow: "ブログ",
      title: "Akarui Education Pokhara の最新情報。",
      description:
        "留学のコツ、ビザ情報、ポカラの学生向け成功事例をご紹介します。",
      categories: ["すべて", "留学", "ビザ", "言語", "ニュース"],
      searchPlaceholder: "記事を検索",
    },
    contact: {
      eyebrow: "お問い合わせ",
      title: "AKARUI! であなたの旅を始めましょう。",
      description:
        "ポカラの専門カウンセラーがご案内します。ご来店、お電話、または下のリンクからご連絡ください。",
    },
    contactSection: {
      office: "オフィス",
      email: "メール",
      phone: "電話 / WhatsApp",
      hours: "営業時間",
      social: "ソーシャルメディア",
      submit: "送信 — 無料カウンセリング",
      call: "今すぐ電話 — すぐに対応",
    },
    footer: {
      title: "Akarui Education Pokhara",
      subtitle: "Akarui Education Consultancy",
      description:
        "ポカラで学生を支えるプレミアム留学相談サービス。カウンセリング、書類作成、海外進学をサポートします。",
      quickLinks: "クイックリンク",
      office: "オフィス",
      destinations: "留学先",
      destinationItems: ["日本", "オーストラリア", "カナダ", "イギリス", "アメリカ"],
    },
    teamSections: {
      directorEyebrow: "代表メッセージ",
      directorTitle: "思いやりと信頼に基づくリーダーシップ。",
      directorDescription: "ポカラのリーダーシップチームからのメッセージ。",
      groups: [
        {
          eyebrow: "リーダーチーム",
          title: "リーダーチーム",
          description: "ポカラ拠点を導く戦略チーム。",
        },
        {
          eyebrow: "専門チーム",
          title: "専門チーム",
          description: "出願からビザまで丁寧に支える専門家たち。",
        },
      ],
    },
  },
  ne: {
    nav: {
      destinations: "गन्तव्य",
      services: "सेवाहरू",
      whyUs: "हामी किन",
      team: "टिम",
      stories: "कथाहरू",
      gallery: "ग्यालेरी",
      contact: "सम्पर्क",
      freeCounselling: "निःशुल्क परामर्श",
      callUs: "कल गर्नुहोस्",
    },
    about: {
      eyebrow: "AKARUI! बारेमा",
      title: "पोखराका विद्यार्थीका लागि उज्यालो भविष्य।",
      description:
        "हामी व्यक्तिगत सहयोग, जापान-केन्द्रित तयारी, र विदेश पुगेपछि पनि मार्गदर्शन प्रदान गर्छौं ताकि विद्यार्थी प्रस्थान अघि, यात्रा गर्दा, र पछि पनि तयार रहून्।",
      whyEyebrow: "AKARUI! किन?",
      whyTitle: "हामी केवल पठाउँदैनौं - हामी तयार पार्छौं।",
      whyDescription:
        "परामर्शदेखि भिसा सहयोग र जीवन-सीप कोचिङसम्म, हरेक चरण विद्यार्थीको सफलताका लागि बनाइएको छ।",
      journeyEyebrow: "हाम्रो यात्रा",
      journeyTitle: "विद्यार्थी सफलताबाट प्रेरित वृद्धि।",
      journeyDescription:
        "AKARUI! जापान जाने विद्यार्थीलाई उत्कृष्ट नतिजा दिन एक उद्देश्यसहित बढेको छ।",
      teamEyebrow: "हाम्रो टोली",
      teamTitle: "भरपर्दो नेतृत्व र विशेषज्ञहरू।",
      teamDescription:
        "जापानमा सफलताका लागि विद्यार्थीलाई मार्गदर्शन गर्ने उत्साही टोली।",
    },
    services: {
      eyebrow: "सेवाहरू",
      title: "आवश्यक सबै कुरा एउटै ठाउँमा।",
      description:
        "पहिलो परामर्शदेखि विश्वविद्यालयमा पुग्दासम्म, AKARUI! ले सबै कुरा सम्हाल्छ।",
    },
    team: {
      eyebrow: "हाम्रो टोली",
      title: "हामी केवल पठाउँदैनौं - हामी तयार पार्छौं।",
      description:
        "AKARUI! मा नेतृत्व, सल्लाहकार, भिसा विशेषज्ञ, र भाषा प्रशिक्षक सबै छन् जो यात्राको हरेक चरणमा साथ दिन्छन्।",
    },
    destinations: {
      eyebrow: "गन्तव्यहरू",
      title: "जापानमा आफ्नो सपनाको शहर छान्नुहोस्।",
      description:
        "टोकियो, ओसाका, क्योटो, फुकुओका, नागोया, साप्पोरो, सेन्दाइ, र योकोहामा—हरेक विद्यार्थी लक्ष्यअनुसार।",
      labels: {
        requirements: "आवश्यकताहरू",
        eligibility: "योग्यता",
        visaProcess: "भिसा प्रक्रिया",
        benefits: "फाइदाहरू",
        support: "विद्यार्थी सहयोग",
      },
    },
    testimonials: {
      eyebrow: "विद्यार्थी कथाहरू",
      title: "जापानमा वास्तविक विद्यार्थी, वास्तविक सफलता।",
      description:
        "AKARUI! लाई विश्वास गरेका विद्यार्थीहरूको अनुभव सुन्नुहोस्।",
    },
    gallery: {
      eyebrow: "विद्यार्थी ग्यालेरी",
      title: "सफलता र सपनाका कथाहरू।",
      description:
        "परामर्श, ओरिएन्टेसन, COE कागजात, र विद्यार्थी उत्सवका झलकहरू हेर्नुहोस्।",
      previewLabel: "नमुना छविहरूको पूर्वावलोकन",
    },
    blog: {
      eyebrow: "ब्लग",
      title: "Akarui Education Pokhara का अपडेटहरू।",
      description:
        "विदेश अध्ययन सुझाव, भिसा मार्गदर्शन, र पोखराका विद्यार्थीका सफलताका कथाहरू।",
      categories: ["सबै", "विदेश अध्ययन", "भिसा", "भाषा", "समाचार"],
      searchPlaceholder: "लेख खोज्नुहोस्",
    },
    contact: {
      eyebrow: "सम्पर्क",
      title: "AKARUI! सँग आफ्नो यात्रा सुरु गर्नुहोस्।",
      description:
        "पोखराका विशेषज्ञ सल्लाहकारहरू तपाईंलाई मार्गदर्शन गर्न तयार छन्। आउनुहोस्, फोन गर्नुहोस्, वा तलको लिंक प्रयोग गर्नुहोस्।",
    },
    contactSection: {
      office: "कार्यालय",
      email: "इमेल",
      phone: "फोन / व्हाट्सएप",
      hours: "समय",
      social: "सामाजिक सञ्जाल",
      submit: "पेश गर्नुहोस् — निःशुल्क परामर्श",
      call: "अहिले नै कल गर्नुहोस् — तुरुन्त सहयोग",
    },
    footer: {
      title: "Akarui Education Pokhara",
      subtitle: "Akarui Education Consultancy",
      description:
        "पोखरामा आधारित प्रिमियम शैक्षिक परामर्श सेवा, जसले विद्यार्थीलाई परामर्श, कागजात, र भर्ना प्रक्रियामा सहयोग गर्छ।",
      quickLinks: "छिटो लिङ्कहरू",
      office: "कार्यालय",
      destinations: "अध्ययन गन्तव्यहरू",
      destinationItems: ["जापान", "अष्ट्रेलिया", "क्यानडा", "युके", "अमेरिका"],
    },
    teamSections: {
      directorEyebrow: "निर्देशकको सन्देश",
      directorTitle: "हेरचाह र विश्वसनीयतामा आधारित नेतृत्व।",
      directorDescription: "पोखरा नेतृत्व टोलीबाट सन्देश।",
      groups: [
        {
          eyebrow: "नेतृत्व टोली",
          title: "हाम्रो नेतृत्व टोली",
          description: "पोखरा कार्यालयलाई मार्गदर्शन गर्ने रणनीतिक नेतृत्व।",
        },
        {
          eyebrow: "विशेषज्ञ टोली",
          title: "हाम्रो विशेषज्ञ टोली",
          description: "हरेक आवेदन र भिसा चरणमा साथ दिने अनुभवी विशेषज्ञहरू।",
        },
      ],
    },
  },
};