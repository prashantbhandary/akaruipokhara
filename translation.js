// AKARUI! Homepage translations (English, Japanese, Nepali)
(function () {
  const STORAGE_KEY = 'akaru_language';

  const translations = {
    en: {
      'meta.title': 'AKARUI! Education Consultancy',
      'nav.destinations': 'Destinations',
      'nav.services': 'Services',
      'nav.why': 'Why Us',
      'nav.stories': 'Stories',
      'nav.gallery': 'Gallery',
      'nav.contact': 'Contact',
      'nav.language': 'Language',
      'nav.cta': 'Free Counselling →',
      'nav.call': '📞 Call Us',
      'hero.tag': '📍 Based in Pokhara, Nepal',
      'hero.title': 'A Brighter Future<br><em>in the Land of the Rising Sun.</em>',
      'hero.sub': 'Akarui means "Bright" in Japanese, and that is exactly what we build for you. We provide end-to-end support for students in Nepal, handling everything from personalized counseling to final visa issuance for your life in Japan.',
      'hero.cta.counselling': 'Get Free Counselling →',
      'hero.cta.call': '📞 Call Us Now',
      'hero.cta.explore': 'Explore Destinations',
      'hero.stats.visa': 'Visa Success Rate',
      'hero.stats.countries': 'Top Cities',
      'hero.stats.students': 'Students Placed',
      'dest.tag': 'Study Destinations',
      'dest.title': 'Choose Your<br>Dream City in Japan',
      'dest.sub': "We have partnerships with top language schools and universities across Japan's most vibrant student hubs, providing you with a high-quality education and an immersive cultural experience.",
      'dest.city1.name': 'Tokyo', 'dest.city1.tag': 'The Global Metropolis', 'dest.city1.desc': "Home to 95,000+ international students and Japan's top-ranked universities. Ideal for career-focused students.",
      'dest.city2.name': 'Osaka', 'dest.city2.tag': 'The Kitchen of Japan', 'dest.city2.desc': 'Known for friendly locals and world-famous street food. A major business hub with a relaxed atmosphere.',
      'dest.city3.name': 'Kyoto', 'dest.city3.tag': 'The Cultural Heart', 'dest.city3.desc': '1 in 10 residents are students. Study amidst 17 UNESCO World Heritage sites in the ultimate college town.',
      'dest.city4.name': 'Fukuoka', 'dest.city4.tag': 'The Startup Hub', 'dest.city4.desc': 'A coastal "startup city" with lower cost of living and a booming tech scene. Gateway to Asia.',
      'dest.city5.name': 'Nagoya', 'dest.city5.tag': 'The Industrial Center', 'dest.city5.desc': "Central Japan's manufacturing powerhouse. Manageable big-city experience with strong automotive ties.",
      'dest.city6.name': 'Sapporo', 'dest.city6.tag': 'The Winter Wonderland', 'dest.city6.desc': 'Famous for its annual Snow Festival and outdoor nature. Great for quieter lifestyle and language immersion.',
      'dest.city7.name': 'Sendai', 'dest.city7.tag': 'The City of Trees', 'dest.city7.desc': 'A perfect balance of urban convenience and natural beauty. Known for high educational standards.',
      'dest.city8.name': 'Yokohama', 'dest.city8.tag': 'The Harbor City', 'dest.city8.desc': "Just 30 mins from Tokyo. Offers coastal lifestyle while remaining connected to Japan's largest job market.",
      'dest.table.title': 'Find Your Perfect City Match',
      'dest.table.header.city': 'City',
      'dest.table.header.vibe': 'Vibe',
      'dest.table.header.best': 'Best For...',
      'dest.table.row1.vibe': 'High Energy',
      'dest.table.row1.best': 'Business, Tech, & Fashion',
      'dest.table.row2.vibe': 'Traditional',
      'dest.table.row2.best': 'History, Arts, & Culture',
      'dest.table.row3.vibe': 'Outgoing',
      'dest.table.row3.best': 'Commerce & Culinary Arts',
      'dest.table.row4.vibe': 'Modern/Coastal',
      'dest.table.row4.best': 'Entrepreneurship & Innovation',
      'dest.table.row5.vibe': 'Balanced',
      'dest.table.row5.best': 'Engineering & Manufacturing',
      'dest.table.row6.vibe': 'Peaceful',
      'dest.table.row6.best': 'Nature & Language Immersion',
      'why.tag': 'Why AKARUI!',
      'why.title': "We Don't Just Send You — We Prepare You.",
      'services.tag': 'Our Services',
      'services.title': 'Everything You Need<br>in One Place',
      'services.sub': 'From your first consultation to landing at your destination university — AKARUI! covers it all.',
      'services.card1.title': 'Career Counselling',
      'services.card1.desc': '1-on-1 sessions to identify the right course, country, and university match for your career goals.',
      'services.card2.title': 'University Admission',
      'services.card2.desc': 'Application support, SOP writing, document review, and submission to top-ranked institutions.',
      'services.card3.title': 'Visa Processing',
      'services.card3.desc': 'Expert guidance on student visa applications with a 98% approval track record.',
      'services.card4.title': 'Test Preparation',
      'services.card4.desc': 'JLPT, NAT-TEST, EJU, and JFT-Basic coaching with experienced trainers in our Pokhara center.',
      'services.card5.title': 'Scholarship Guidance',
      'services.card5.desc': 'We identify and apply for scholarships to help reduce your financial burden abroad.',
      'services.card6.title': 'Accommodation & Housing Support',
      'services.card6.desc': 'We assist you in finding safe, affordable student dormitories or shared apartments in Japan. From lease translations to utility setups, we ensure you have a home ready before you even land.',
      'process.tag': 'How It Works',
      'process.title': '4 Simple Steps to<br>Your Overseas Education',
      'process.step1.title': 'Free Consultation',
      'process.step1.desc': 'Meet with our counsellors and discuss your goals, preferred destination, and budget.',
      'process.step2.title': 'Profile Evaluation',
      'process.step2.desc': 'We assess your academic record, language scores, and financial documents.',
      'process.step3.title': 'Apply & Get Offer',
      'process.step3.desc': 'We submit applications to shortlisted universities and secure your offer letter.',
      'process.step4.title': 'Visa & Fly!',
      'process.step4.desc': 'We prepare and submit your visa application, then help you prepare for departure.',
      'why.feature1.title': 'Personalized Counseling',
      'why.feature1.desc': 'Every student is matched with a dedicated expert who understands the Japanese education system. We align your goals with the right language schools or universities based on your budget and academic profile.',
      'why.feature2.title': 'Mastering the COE & Visa Process',
      'why.feature2.desc': 'The Certificate of Eligibility (COE) is the heart of your journey. We provide end-to-end support-from document translation to meticulous verification-handling the complex paperwork so you stay stress-free.',
      'why.feature3.title': 'Language & Cultural Immersion',
      'why.feature3.desc': 'Preparation goes beyond books. Our in-house center offers intensive JLPT & NAT-TEST coaching, along with Japanese "Life Skills" training to help you navigate your new environment with confidence.',
      'why.feature4.title': 'Total Post-Arrival Support',
      'why.feature4.desc': 'Our job is not done when you land. We assist with accommodation guidance, airport pickup connections, and introduce you to our vibrant community network of Nepalese students already thriving in Japan.',
      'testi.tag': 'Student Stories',
      'testi.title': 'Real Students,<br>Real Success in Japan',
      'testi.badge1': 'Tokyo Journey',
      'testi.badge2': 'Seamless COE Approval',
      'testi.badge3': 'Scholarship Success',
      'testi.text1': 'AKARUI made my dream of studying in Tokyo a reality. The team helped me every single step-from my first Hiragana lesson to finding my apartment near the Shinjuku campus. They truly care about you even after you land!',
      'testi.text2': 'My COE (Certificate of Eligibility) was approved without a single query. The counselors at AKARUI were so thorough with my document translations and bank verification. If you want a stress-free Japan visa, this is the place!',
      'testi.text3': 'I received a tuition waiver at a top Japanese Language School thanks to the AKARUI team. They prepared me for the interview so well that I felt confident from the very first question. I am now living my best life in Fukuoka!',
      'testi.dest1': 'Tokyo, Japan',
      'testi.dest2': 'Osaka, Japan',
      'testi.dest3': 'Fukuoka, Japan',
      'gallery.tag': 'Student Gallery',
      'gallery.title': 'Stories of<br>Success & Dreams',
      'gallery.sub': 'Every journey starts with a single step. See how our students turned their overseas dreams into reality.',
      'gallery.stat.students': 'Students Sent Abroad',
      'gallery.stat.visa': 'Visa Success Rate',
      'cta.title': 'Ready to Start Your<br><em>International Journey?</em>',
      'cta.sub': 'Book a free counselling session today — no obligations, just honest guidance.',
      'cta.book': 'Book Free Session →',
      'cta.follow': 'Follow us on Facebook',
      'contact.tag': 'Get in Touch',
      'contact.title': 'Start Your Journey<br>with AKARUI!',
      'contact.sub': "Our expert counsellors in Pokhara are ready to guide you. Drop by, call us, or use the link below — we'll get back to you the same day.",
      'contact.office': 'Office',
      'contact.phone': 'Phone / WhatsApp',
      'contact.social': 'Social Media',
      'social.facebook': '📘 Facebook',
      'social.instagram': '📸 Instagram',
      'social.youtube': '▶️ YouTube',
      'social.tiktok': '🎵 TikTok',
      'form.title': 'Free Counselling Form',
      'form.sub': "Fill in your details and we'll reach out within 24 hours.",
      'form.firstName': 'First Name',
      'form.lastName': 'Last Name',
      'form.phone': 'Phone / WhatsApp',
      'form.email': 'Email Address',
      'form.city': 'Preferred Study City in Japan',
      'form.message': 'Your Message (optional)',
      'form.cityDefault': 'Select a city...',
      'form.cityTokyo': 'Tokyo - Business, Tech & Fashion',
      'form.cityKyoto': 'Kyoto - History, Arts & Culture',
      'form.cityOsaka': 'Osaka - Commerce & Culinary',
      'form.cityFukuoka': 'Fukuoka - Entrepreneurship & Innovation',
      'form.cityNagoya': 'Nagoya - Engineering & Manufacturing',
      'form.citySapporo': 'Sapporo - Nature & Language Immersion',
      'form.citySendai': 'Sendai - Balance & Education',
      'form.cityYokohama': 'Yokohama - Harbor City Living',
      'form.placeholder.firstName': 'Rajesh',
      'form.placeholder.lastName': 'Thapa',
      'form.placeholder.phone': '+977 98XXXXXXXX',
      'form.placeholder.email': 'you@email.com',
      'form.placeholder.message': 'Tell us about your academic background, goals, or any questions...',
      'form.submit': 'Submit — Get Free Counselling →',
      'form.call': '📞 Call Us Now — Instant Help',
      'footer.destinations': 'Destinations',
      'footer.services': 'Services',
      'footer.why': 'Why Us',
      'footer.contact': 'Contact',
      'footer.copy': '© 2025 AKARUI! Education Consultancy (P) Ltd. · Pokhara, Nepal',
      'form.status.required': 'Please fill in all required fields.',
      'form.status.invalidEmail': 'Please enter a valid email address.',
      'form.status.submitting': 'Submitting your enquiry...',
      'form.status.success': 'Thank you. Your enquiry has been sent and our team will contact you within 24 hours.',
      'form.status.error': 'There was an error submitting the form. Please try again.'
    },
    ja: {
      'meta.title': 'AKARUI! 留学コンサルティング',
      'nav.destinations': '留学先',
      'nav.services': 'サービス',
      'nav.why': '選ばれる理由',
      'nav.stories': '体験談',
      'nav.gallery': 'ギャラリー',
      'nav.contact': 'お問い合わせ',
      'nav.language': '言語',
      'nav.cta': '無料カウンセリング予約 →',
      'nav.call': '📞 電話する',
      'hero.tag': '📍 ネパール・ポカラ拠点',
      'hero.title': '日出ずる国での<br><em>明るい未来を。</em>',
      'hero.sub': '「あかるい」という名前の通り、私たちは皆さんの輝かしい未来を築くお手伝いをします。ネパールの学生に対し、個別カウンセリングから日本での生活に向けたビザ発給まで、ワンストップでサポートを提供いたします。',
      'hero.cta.counselling': '無料カウンセリング →',
      'hero.cta.call': '📞 今すぐ電話',
      'hero.cta.explore': '留学都市を見る',
      'hero.stats.visa': 'ビザ成功率',
      'hero.stats.countries': 'トップ都市数',
      'hero.stats.students': '送り出した学生数',
      'dest.tag': '留学先',
      'dest.title': '日本であなたに合う<br>理想の都市を選ぶ',
      'dest.sub': '日本の主要都市にある提携語学学校・大学ネットワークで、高品質な学びと実践的な留学生活をサポートします。',
      'dest.city1.name': '東京', 'dest.city1.tag': 'グローバルな大都市', 'dest.city1.desc': '国際留学生9万5,000人以上が在籍し、日本トップクラスの大学が集中。キャリア志向の学生に最適。',
      'dest.city2.name': '大阪', 'dest.city2.tag': '日本の台所', 'dest.city2.desc': '親しみやすい市民と世界的に有名なストリートフードで知られる。リラックスした雰囲気の主要ビジネス拠点。',
      'dest.city3.name': '京都', 'dest.city3.tag': '文化のこころ', 'dest.city3.desc': '住民の10人に1人が学生。17のユネスコ世界遺産に囲まれた究極の学生都市。',
      'dest.city4.name': '福岡', 'dest.city4.tag': 'スタートアップの最前線', 'dest.city4.desc': '生活費が低く、テクノロジー産業が急成長する海辺のスタートアップ都市。アジアへのゲートウェイ。',
      'dest.city5.name': '名古屋', 'dest.city5.tag': '産業の中心地', 'dest.city5.desc': '中部日本の製造業の拠点。自動車産業との強いつながりを持つ適度な規模の大都市。',
      'dest.city6.name': '札幌', 'dest.city6.tag': '雪の王国', 'dest.city6.desc': '毎年恒例の雪まつりと豊かな自然で有名。語学没入に適した穏やかな生活スタイル。',
      'dest.city7.name': '仙台', 'dest.city7.tag': '杜の都', 'dest.city7.desc': '都市の利便性と自然美の絶妙なバランス。教育水準の高さで知られる文教都市。',
      'dest.city8.name': '横浜', 'dest.city8.tag': '港都市', 'dest.city8.desc': '東京から電車で30分。海辺の生活を楽しみながら日本最大の雇用市場へのアクセスも万全。',
      'dest.table.title': 'あなたに合う都市を見つけよう',
      'dest.table.header.city': '都市',
      'dest.table.header.vibe': '特徴',
      'dest.table.header.best': '向いている分野',
      'dest.table.row1.vibe': '大都会',
      'dest.table.row1.best': 'ビジネス、IT、ファッション',
      'dest.table.row2.vibe': '伝統的',
      'dest.table.row2.best': '歴史、芸術、文化',
      'dest.table.row3.vibe': '活気がある',
      'dest.table.row3.best': '商業、食文化',
      'dest.table.row4.vibe': '現代的・海辺',
      'dest.table.row4.best': '起業家精神、イノベーション',
      'dest.table.row5.vibe': 'バランス型',
      'dest.table.row5.best': '工学、製造業',
      'dest.table.row6.vibe': '穏やか',
      'dest.table.row6.best': '自然、語学没入',
      'why.tag': 'AKARUI! が選ばれる理由',
      'why.title': '送り出すだけでなく、<br>徹底的に準備を支援',
      'why.feature1.title': 'パーソナライズされたカウンセリング',
      'why.feature1.desc': '日本の教育システムに精通した専門家が担当。予算や成績に合わせて最適な語学学校・大学をマッチングします。',
      'why.feature2.title': 'COE（在留資格）＆ビザ申請のマスター',
      'why.feature2.desc': '留学の肝となるCOE取得を全面サポート。書類翻訳から厳格な確認まで、複雑な事務作業を代行します。',
      'why.feature3.title': '言語と文化のイマージョン',
      'why.feature3.desc': 'JLPTやNAT-TESTの対策に加え、日本での「ライフスキル」研修を実施。自信を持って新生活を始められます。',
      'why.feature4.title': '渡航後のトータルサポート',
      'why.feature4.desc': '入国後も終わりではありません。住居案内、空港送迎の連携、現地で活躍するネパール人学生ネットワークを紹介します。',
      'services.tag': 'サービス',
      'services.title': '必要なサポートを<br>ワンストップで',
      'services.sub': '初回相談から渡航後まで、AKARUI! が一貫してサポートします。',
      'services.card1.title': 'キャリアカウンセリング',
      'services.card1.desc': '目標に合ったコース、国、大学を特定する1対1セッション。',
      'services.card2.title': '大学入学サポート',
      'services.card2.desc': '出願、志望理由書（SOP）作成、書類審査、提出まで一貫サポート。',
      'services.card3.title': 'ビザ手続き',
      'services.card3.desc': '成功率98%の実績に基づく、学生ビザ申請の専門的指導。',
      'services.card4.title': '試験対策',
      'services.card4.desc': 'ポカラ校にて経験豊富な講師によるJLPT、NAT-TEST、EJU、JFT-Basicの指導。',
      'services.card5.title': '奨学金案内',
      'services.card5.desc': '経済的負担を軽減するための奨学金を探し、申請をサポートします。',
      'services.card6.title': '住居・生活サポート',
      'services.card6.desc': '安全で手頃な学生寮やシェアアパートの手配をサポート。賃貸契約の翻訳から公共料金の手続きまで、渡航前に住まいの準備を整えます。',
      'process.tag': 'ご利用の流れ',
      'process.title': '留学までの<br>4ステップ',
      'process.step1.title': '無料相談',
      'process.step1.desc': 'カウンセラーと目標、希望先、予算について話し合います。',
      'process.step2.title': 'プロファイル評価',
      'process.step2.desc': '成績、語学スコア、財務書類を確認・評価します。',
      'process.step3.title': '出願と合格',
      'process.step3.desc': '選定した大学に出願し、入学許可証を確保します。',
      'process.step4.title': 'ビザ取得と渡航',
      'process.step4.desc': 'ビザ申請を行い、出発前のオリエンテーションを実施します。',
      'testi.tag': '学生の声',
      'testi.title': '本物の学生が語る<br>日本での成功ストーリー',
      'testi.badge1': '東京への旅',
      'testi.badge2': 'スムーズなCOE承認',
      'testi.badge3': '奨学金獲得成功',
      'testi.text1': 'AKARUI! は東京留学の夢を現実にしてくれました。ひらがなの最初の授業から新宿近くのアパート探しまで、一歩ずつ支えてくれました。渡航後もずっと気にかけてくれます！',
      'testi.text2': '私のCOEは一度の問い合わせもなく承認されました。AKARUI! のカウンセラーは書類翻訳や銀行確認を徹底的に行ってくれました。ストレスフリーなビザ申請ならここです！',
      'testi.text3': 'AKARUI! チームのおかげで、トップ日本語学校で授業料免除を獲得できました。面接練習が充実していたので、最初の質問から自信を持って臨めました。今は福岡で最高の毎日を送っています！',
      'testi.dest1': '東京、日本',
      'testi.dest2': '大阪、日本',
      'testi.dest3': '福岡、日本',
      'gallery.tag': '学生ギャラリー',
      'gallery.title': '夢をかなえた<br>ストーリー',
      'gallery.sub': 'すべての挑戦は一歩から始まります。学生たちの留学成功ストーリーをご覧ください。',
      'gallery.stat.students': '海外進学した学生',
      'gallery.stat.visa': 'ビザ成功率',
      'cta.title': '海外進学の一歩を<br><em>今ここから</em>',
      'cta.sub': 'まずは無料相談。無理な勧誘なしで、あなたに合う進路をご案内します。',
      'cta.book': '無料相談を予約 →',
      'cta.follow': 'Facebook をフォロー',
      'contact.tag': 'お問い合わせ',
      'contact.title': 'AKARUI! と一緒に<br>留学準備を始めよう',
      'contact.sub': 'ポカラのカウンセラーが丁寧に対応します。来店、お電話、またはフォームからお気軽にご連絡ください。当日中に折り返しいたします。',
      'contact.office': 'オフィス',
      'contact.phone': '電話 / WhatsApp',
      'contact.social': 'SNS',
      'social.facebook': '📘 Facebook',
      'social.instagram': '📸 Instagram',
      'social.youtube': '▶️ YouTube',
      'social.tiktok': '🎵 TikTok',
      'form.title': '無料カウンセリング申込',
      'form.sub': '必要事項をご入力ください。24時間以内にご連絡します。',
      'form.firstName': '名',
      'form.lastName': '姓',
      'form.phone': '電話 / WhatsApp',
      'form.email': 'メールアドレス',
      'form.city': '希望する日本の都市',
      'form.message': 'メッセージ（任意）',
      'form.cityDefault': '都市を選択してください...',
      'form.cityTokyo': '東京 - ビジネス・IT・ファッション',
      'form.cityKyoto': '京都 - 歴史・芸術・文化',
      'form.cityOsaka': '大阪 - 商業・食文化',
      'form.cityFukuoka': '福岡 - 起業・イノベーション',
      'form.cityNagoya': '名古屋 - 工学・製造',
      'form.citySapporo': '札幌 - 自然・語学没入',
      'form.citySendai': '仙台 - バランスの良い学習環境',
      'form.cityYokohama': '横浜 - 港町ライフ',
      'form.placeholder.firstName': '太郎',
      'form.placeholder.lastName': '山田',
      'form.placeholder.phone': '+977 98XXXXXXXX',
      'form.placeholder.email': 'you@email.com',
      'form.placeholder.message': '学歴や目標、質問などをご記入ください。',
      'form.submit': '送信して無料相談 →',
      'form.call': '📞 今すぐ電話で相談',
      'footer.destinations': '留学先',
      'footer.services': 'サービス',
      'footer.why': '選ばれる理由',
      'footer.contact': 'お問い合わせ',
      'footer.copy': '© 2025 AKARUI! Education Consultancy (P) Ltd. · ネパール・ポカラ',
      'form.status.required': '必須項目を入力してください。',
      'form.status.invalidEmail': '有効なメールアドレスを入力してください。',
      'form.status.submitting': '送信しています...',
      'form.status.success': '送信ありがとうございました。24時間以内に担当者よりご連絡します。',
      'form.status.error': '送信中にエラーが発生しました。もう一度お試しください。'
    },
    ne: {
      'meta.title': 'AKARUI! शिक्षा परामर्श',
      'nav.destinations': 'गन्तव्य',
      'nav.services': 'सेवाहरू',
      'nav.why': 'किन हामी?',
      'nav.stories': 'कथाहरू',
      'nav.gallery': 'ग्यालरी',
      'nav.contact': 'सम्पर्क',
      'nav.language': 'भाषा',
      'nav.cta': 'निःशुल्क काउन्सिलिङ →',
      'nav.call': '📞 फोन गर्नुहोस्',
      'hero.tag': '📍 पोखरा, नेपालबाट सेवा',
      'hero.title': 'उदाउँदो सूर्यको देशमा<br><em>उज्ज्वल भविष्य।</em>',
      'hero.sub': 'जापानी भाषामा "अकारुई" को अर्थ "उज्यालो" हुन्छ-र हामी तपाईंको लागि ठ्याक्कै त्यही उज्यालो भविष्य निर्माण गर्छौं। हामी नेपालका विद्यार्थीहरूलाई व्यक्तिगत परामर्शदेखि जापानमा तपाईंको जीवनको लागि अन्तिम भिसा प्रक्रियासम्मका सम्पूर्ण सुविधाहरू प्रदान गर्दछौं।',
      'hero.cta.counselling': 'निःशुल्क काउन्सिलिङ →',
      'hero.cta.call': '📞 अहिले फोन गर्नुहोस्',
      'hero.cta.explore': 'गन्तव्य हेर्नुहोस्',
      'hero.stats.visa': 'भिसा सफलता दर',
      'hero.stats.countries': 'शीर्ष शहरहरू',
      'hero.stats.students': 'विद्यार्थी पठाइएका',
      'dest.tag': 'अध्ययन गन्तव्य',
      'dest.title': 'जापानमा तपाईंको<br>सपनाको सहर छान्नुहोस्',
      'dest.sub': 'जापानका प्रमुख विद्यार्थी सहरहरूमा रहेका उत्कृष्ट भाषा विद्यालय र विश्वविद्यालयसँगको साझेदारीमार्फत गुणस्तरीय शिक्षा र समृद्ध सांस्कृतिक अनुभव प्रदान गर्छौं।',
      'dest.city1.name': 'टोकियो', 'dest.city1.tag': 'विश्वव्यापी महानगर', 'dest.city1.desc': '९५,०००+ अन्तर्राष्ट्रिय विद्यार्थी र जापानका शीर्ष विश्वविद्यालयहरूको घर। क्यारियर केन्द्रित विद्यार्थीका लागि आदर्श।',
      'dest.city2.name': 'ओसाका', 'dest.city2.tag': 'जापानको भान्सा', 'dest.city2.desc': 'मैत्रीपूर्ण स्थानीय र विश्वप्रसिद्ध सडक खानाका लागि परिचित। शान्त वातावरणसहितको प्रमुख व्यापार केन्द्र।',
      'dest.city3.name': 'क्योटो', 'dest.city3.tag': 'सांस्कृतिक हृदय', 'dest.city3.desc': 'प्रत्येक १० मध्ये १ जना विद्यार्थी। १७ यूनेस्को विश्व सम्पदा स्थलका बीचमा अध्ययन गर्नुहोस्।',
      'dest.city4.name': 'फुकुओका', 'dest.city4.tag': 'स्टार्टअप हब', 'dest.city4.desc': 'कम जीवनयापन खर्च र फस्टाउँदो प्रविधि क्षेत्रसहितको तटीय स्टार्टअप सहर। एशियाको प्रवेशद्वार।',
      'dest.city5.name': 'नागोया', 'dest.city5.tag': 'औद्योगिक केन्द्र', 'dest.city5.desc': 'मध्य जापानको उत्पादन शक्तिकेन्द्र। मोटरगाडी उद्योगसँग बलियो सम्बन्ध भएको व्यवस्थित महानगर।',
      'dest.city6.name': 'साप्पोरो', 'dest.city6.tag': 'हिउँको स्वर्ग', 'dest.city6.desc': 'वार्षिक हिउँ महोत्सव र प्राकृतिक सौन्दर्यका लागि प्रसिद्ध। शान्त जीवनशैली र भाषा अभ्यासका लागि उत्तम।',
      'dest.city7.name': 'सेन्दाइ', 'dest.city7.tag': 'रुखहरूको सहर', 'dest.city7.desc': 'सहरी सुविधा र प्राकृतिक सौन्दर्यको उत्तम सन्तुलन। उच्च शैक्षिक मापदण्डका लागि परिचित।',
      'dest.city8.name': 'योकोहामा', 'dest.city8.tag': 'बन्दरगाह सहर', 'dest.city8.desc': 'टोकियोबाट केवल ३० मिनेट। तटीय जीवनशैलीको आनन्द लिँदै जापानको सबैभन्दा ठूलो रोजगार बजारमा पहुँच।',
      'dest.table.title': 'तपाईंका लागि उपयुक्त सहर छान्नुहोस्',
      'dest.table.header.city': 'सहर',
      'dest.table.header.vibe': 'विशेषता',
      'dest.table.header.best': 'उपयुक्त क्षेत्र',
      'dest.table.row1.vibe': 'उच्च उर्जा',
      'dest.table.row1.best': 'व्यापार, प्रविधि र फेसन',
      'dest.table.row2.vibe': 'परम्परागत',
      'dest.table.row2.best': 'इतिहास, कला र संस्कृति',
      'dest.table.row3.vibe': 'मिलनसार',
      'dest.table.row3.best': 'वाणिज्य र खानाका परिकार',
      'dest.table.row4.vibe': 'आधुनिक/तटीय',
      'dest.table.row4.best': 'उद्यमशीलता र नवीनता',
      'dest.table.row5.vibe': 'सन्तुलित',
      'dest.table.row5.best': 'इन्जिनियरिङ् र उत्पादन',
      'dest.table.row6.vibe': 'शान्त',
      'dest.table.row6.best': 'प्रकृति र भाषा सिकाइ',
      'why.tag': 'किन AKARUI!',
      'why.title': 'हामी तपाईंलाई<br>केवल पठाउँदैनौं —<br>तयार पनि पार्छौं',
      'services.tag': 'हाम्रा सेवाहरू',
      'services.title': 'तपाईंलाई चाहिने सबै<br>एकै ठाउँमा',
      'services.sub': 'पहिलो परामर्शदेखि गन्तव्य विश्वविद्यालय पुग्दासम्म — AKARUI! ले सम्पूर्ण साथ दिन्छ।',
      'services.card1.title': 'करियर काउन्सिलिङ',
      'services.card1.desc': 'तपाईंको करियर लक्ष्यअनुसार सही कोर्स, देश र विश्वविद्यालय छनोट गर्न 1-on-1 सत्र।',
      'services.card2.title': 'विश्वविद्यालय भर्ना',
      'services.card2.desc': 'आवेदन सहयोग, SOP लेखन, कागजात समीक्षा र उत्कृष्ट संस्थामा पेश गर्ने कार्य।',
      'services.card3.title': 'भिसा प्रोसेसिङ',
      'services.card3.desc': '९८% स्वीकृति सफलतासहित विद्यार्थी भिसा प्रक्रियामा विशेषज्ञ मार्गदर्शन।',
      'services.card4.title': 'परीक्षा तयारी',
      'services.card4.desc': 'पोखरा केन्द्रमा अनुभवी प्रशिक्षकहरूबाट JLPT, NAT-TEST, EJU र JFT-Basic को तयारी।',
      'services.card5.title': 'छात्रवृत्ति मार्गदर्शन',
      'services.card5.desc': 'आर्थिक भार घटाउन उपयोगी छात्रवृत्ति अवसर पहिचान र आवेदनमा सहयोग।',
      'services.card6.title': 'आवास तथा हाउजिङ सहयोग',
      'services.card6.desc': 'जापानमा सुरक्षित र किफायती विद्यार्थी छात्रावास वा सेयर अपार्टमेन्ट खोज्न सहयोग गर्छौं। लिज अनुवाददेखि युटिलिटी सेटअपसम्म, उडानअघि नै घर तयार पार्छौं।',
      'process.tag': 'भर्ना प्रक्रिया',
      'process.title': 'भर्ना प्रक्रियाका<br>४ सजिला चरणहरू',
      'process.step1.title': 'निःशुल्क परामर्श',
      'process.step1.desc': 'हाम्रा काउन्सिलरहरूसँग भेटेर लक्ष्य, चाहिएको गन्तव्य र बजेटबारे छलफल गर्नुहोस्।',
      'process.step2.title': 'प्रोफाइल मूल्याङ्कन',
      'process.step2.desc': 'तपाईंको शैक्षिक रेकर्ड, भाषा स्कोर र आर्थिक कागजातको मूल्याङ्कन गरिन्छ।',
      'process.step3.title': 'आवेदन र अफर',
      'process.step3.desc': 'छनोट गरिएका संस्थामा आवेदन पेश गरी अफर लेटर सुरक्षित गरिन्छ।',
      'process.step4.title': 'भिसा र उडान',
      'process.step4.desc': 'भिसा आवेदन तयारी तथा पेश गरेपछि प्रस्थानपूर्व मार्गदर्शन प्रदान गरिन्छ।',
      'why.feature1.title': 'व्यक्तिगत परामर्श',
      'why.feature1.desc': 'हरेक विद्यार्थीलाई जापानी शिक्षा प्रणाली राम्रोसँग बुझ्ने विशेषज्ञसँग मिलाइन्छ। तपाईंको लक्ष्य, बजेट र शैक्षिक प्रोफाइलअनुसार सही विद्यालय वा विश्वविद्यालय छनोटमा सहयोग गरिन्छ।',
      'why.feature2.title': 'COE र भिसा प्रक्रियामा निपुणता',
      'why.feature2.desc': 'Certificate of Eligibility (COE) तपाईंको यात्राको मुख्य आधार हो। कागजात अनुवाददेखि सावधानीपूर्वक प्रमाणीकरणसम्म हामी सम्पूर्ण प्रक्रिया सम्हाल्छौं।',
      'why.feature3.title': 'भाषा र सांस्कृतिक तयारी',
      'why.feature3.desc': 'तयारी केवल किताबमा सीमित छैन। हाम्रो केन्द्रमा JLPT र NAT-TEST को गहन कक्षा तथा जापानी Life Skills प्रशिक्षण उपलब्ध छ।',
      'why.feature4.title': 'पुगेपछिको पूर्ण सहयोग',
      'why.feature4.desc': 'तपाईं जापान पुगेपछि पनि हाम्रो सहयोग जारी रहन्छ। आवास, एयरपोर्ट पिकअप र त्यहाँ रहेका नेपाली विद्यार्थी नेटवर्कसँग जोड्न सहयोग गर्छौं।',
      'testi.tag': 'विद्यार्थी कथाहरू',
      'testi.title': 'वास्तविक विद्यार्थी,<br>जापानमा वास्तविक सफलता',
      'testi.badge1': 'टोक्यो यात्रा',
      'testi.badge2': 'सहज COE स्वीकृति',
      'testi.badge3': 'छात्रवृत्ति सफलता',
      'testi.text1': 'AKARUI ले टोक्योमा अध्ययन गर्ने मेरो सपना साकार बनायो। पहिलो हिरागाना कक्षादेखि शिन्जुकु नजिकको अपार्टमेन्ट खोज्नेसम्म टोलीले हरेक चरणमा साथ दियो।',
      'testi.text2': 'मेरो COE (Certificate of Eligibility) कुनै प्रश्न बिना स्वीकृत भयो। AKARUI का काउन्सिलरहरूले कागजात अनुवाद र बैंक प्रमाणीकरणमा अत्यन्त सावधानीपूर्वक सहयोग गरे।',
      'testi.text3': 'AKARUI टोलीको सहयोगले मैले शीर्ष जापानी भाषा विद्यालयमा ट्युसन छुट पाएको छु। अन्तर्वार्ता तयारी उत्कृष्ट भएकाले म पहिलो प्रश्नदेखि नै आत्मविश्वासी थिएँ।',
      'testi.dest1': 'टोक्यो, जापान',
      'testi.dest2': 'ओसाका, जापान',
      'testi.dest3': 'फुकुओका, जापान',
      'gallery.tag': 'विद्यार्थी ग्यालरी',
      'gallery.title': 'सफलता र सपनाका<br>कथाहरू',
      'gallery.sub': 'हरेक यात्रा एउटा कदमबाट सुरु हुन्छ। हाम्रा विद्यार्थीले कसरी विदेश पढाइको सपना पुरा गरे, हेर्नुहोस्।',
      'gallery.stat.students': 'विदेश पठाइएका विद्यार्थी',
      'gallery.stat.visa': 'भिसा सफलता दर',
      'cta.title': 'अन्तर्राष्ट्रिय यात्राको<br><em>सुरुवात गर्न तयार?</em>',
      'cta.sub': 'आजै निःशुल्क काउन्सिलिङ बुक गर्नुहोस् — कुनै दबाब छैन, इमानदार मार्गदर्शन मात्र।',
      'cta.book': 'निःशुल्क सेसन बुक गर्नुहोस् →',
      'cta.follow': 'Facebook मा हामीसँग जोडिनुहोस्',
      'contact.tag': 'सम्पर्क गर्नुहोस्',
      'contact.title': 'AKARUI! सँगै<br>तपाईंको यात्रा सुरु गरौं',
      'contact.sub': 'पोखरास्थित हाम्रो अनुभवी काउन्सिलर टोली मद्दत गर्न तयार छ। कार्यालयमा आउनुहोस्, फोन गर्नुहोस् वा तलको लिंक प्रयोग गर्नुहोस् — सोही दिन सम्पर्क गर्छौं।',
      'contact.office': 'कार्यालय',
      'contact.phone': 'फोन / WhatsApp',
      'contact.social': 'सामाजिक सञ्जाल',
      'social.facebook': '📘 Facebook',
      'social.instagram': '📸 Instagram',
      'social.youtube': '▶️ YouTube',
      'social.tiktok': '🎵 TikTok',
      'form.title': 'निःशुल्क काउन्सिलिङ फारम',
      'form.sub': 'तपाईंका विवरण भर्नुहोस्, हामी २४ घण्टाभित्र सम्पर्क गर्छौं।',
      'form.firstName': 'पहिलो नाम',
      'form.lastName': 'थर',
      'form.phone': 'फोन / WhatsApp',
      'form.email': 'इमेल ठेगाना',
      'form.city': 'जापानमा रुचाइएको अध्ययन सहर',
      'form.message': 'तपाईंको सन्देश (वैकल्पिक)',
      'form.cityDefault': 'सहर छान्नुहोस्...',
      'form.cityTokyo': 'टोकियो - व्यवसाय, टेक र फेसन',
      'form.cityKyoto': 'क्योटो - इतिहास, कला र संस्कृति',
      'form.cityOsaka': 'ओसाका - व्यापार र पाककला',
      'form.cityFukuoka': 'फुकुओका - उद्यमशीलता र नवप्रवर्तन',
      'form.cityNagoya': 'नागोया - इन्जिनियरिङ र उत्पादन',
      'form.citySapporo': 'साप्पोरो - प्रकृति र भाषा इमर्सन',
      'form.citySendai': 'सेन्दाइ - सन्तुलित शिक्षा वातावरण',
      'form.cityYokohama': 'योकोहामा - बन्दरगाह सहर जीवन',
      'form.placeholder.firstName': 'राजेश',
      'form.placeholder.lastName': 'थापा',
      'form.placeholder.phone': '+977 98XXXXXXXX',
      'form.placeholder.email': 'you@email.com',
      'form.placeholder.message': 'तपाईंको शैक्षिक पृष्ठभूमि, लक्ष्य वा प्रश्न लेख्नुहोस्...',
      'form.submit': 'पेश गर्नुहोस् — निःशुल्क काउन्सिलिङ →',
      'form.call': '📞 अहिले नै फोन गर्नुहोस् — तुरुन्त सहयोग',
      'footer.destinations': 'गन्तव्य',
      'footer.services': 'सेवाहरू',
      'footer.why': 'किन हामी',
      'footer.contact': 'सम्पर्क',
      'footer.copy': '© 2025 AKARUI! Education Consultancy (P) Ltd. · पोखरा, नेपाल',
      'form.status.required': 'कृपया सबै आवश्यक विवरण भर्नुहोस्।',
      'form.status.invalidEmail': 'कृपया मान्य इमेल ठेगाना प्रविष्ट गर्नुहोस्।',
      'form.status.submitting': 'तपाईंको फारम पठाइँदैछ...',
      'form.status.success': 'धन्यवाद। तपाईंको फारम पठाइएको छ र हाम्रो टोलीले २४ घण्टाभित्र सम्पर्क गर्नेछ।',
      'form.status.error': 'फारम पठाउँदा समस्या भयो। कृपया फेरि प्रयास गर्नुहोस्।'
    }
  };

  let currentLanguage = 'en';

  const bindings = [
    { selector: 'title', key: 'meta.title' },
    { selector: '.sr-only', key: 'nav.language' },
    { selector: '.nav-links li:nth-child(1) a', key: 'nav.destinations' },
    { selector: '.nav-links li:nth-child(2) a', key: 'nav.services' },
    { selector: '.nav-links li:nth-child(3) a', key: 'nav.why' },
    { selector: '.nav-links li:nth-child(4) a', key: 'nav.stories' },
    { selector: '.nav-links li:nth-child(5) a', key: 'nav.gallery' },
    { selector: '.nav-links li:nth-child(6) a', key: 'nav.contact' },
    { selector: '.nav-cta', key: 'nav.cta' },
    { selector: '.nav-call', key: 'nav.call' },
    { selector: '.hero-tag', key: 'hero.tag' },
    { selector: '.hero-h1', key: 'hero.title', html: true },
    { selector: '.hero-sub', key: 'hero.sub' },
    { selector: '.hero-actions .btn-primary', key: 'hero.cta.counselling' },
    { selector: '.hero-actions .btn-call', key: 'hero.cta.call' },
    { selector: '.hero-actions .btn-outline', key: 'hero.cta.explore' },
    { selector: '.hero-stats > div:nth-child(1) .stat-label', key: 'hero.stats.visa' },
    { selector: '.hero-stats > div:nth-child(2) .stat-label', key: 'hero.stats.countries' },
    { selector: '.hero-stats > div:nth-child(3) .stat-label', key: 'hero.stats.students' },
    { selector: '#destinations .section-tag', key: 'dest.tag' },
    { selector: '#destinations .section-title', key: 'dest.title', html: true },
    { selector: '#destinations .section-sub', key: 'dest.sub' },
    { selector: '#destinations .country-card:nth-child(1) .country-name', key: 'dest.city1.name' },
    { selector: '#destinations .country-card:nth-child(1) .country-meta strong', key: 'dest.city1.tag' },
    { selector: '#destinations .country-card:nth-child(1) .country-desc', key: 'dest.city1.desc' },
    { selector: '#destinations .country-card:nth-child(2) .country-name', key: 'dest.city2.name' },
    { selector: '#destinations .country-card:nth-child(2) .country-meta strong', key: 'dest.city2.tag' },
    { selector: '#destinations .country-card:nth-child(2) .country-desc', key: 'dest.city2.desc' },
    { selector: '#destinations .country-card:nth-child(3) .country-name', key: 'dest.city3.name' },
    { selector: '#destinations .country-card:nth-child(3) .country-meta strong', key: 'dest.city3.tag' },
    { selector: '#destinations .country-card:nth-child(3) .country-desc', key: 'dest.city3.desc' },
    { selector: '#destinations .country-card:nth-child(4) .country-name', key: 'dest.city4.name' },
    { selector: '#destinations .country-card:nth-child(4) .country-meta strong', key: 'dest.city4.tag' },
    { selector: '#destinations .country-card:nth-child(4) .country-desc', key: 'dest.city4.desc' },
    { selector: '#destinations .country-card:nth-child(5) .country-name', key: 'dest.city5.name' },
    { selector: '#destinations .country-card:nth-child(5) .country-meta strong', key: 'dest.city5.tag' },
    { selector: '#destinations .country-card:nth-child(5) .country-desc', key: 'dest.city5.desc' },
    { selector: '#destinations .country-card:nth-child(6) .country-name', key: 'dest.city6.name' },
    { selector: '#destinations .country-card:nth-child(6) .country-meta strong', key: 'dest.city6.tag' },
    { selector: '#destinations .country-card:nth-child(6) .country-desc', key: 'dest.city6.desc' },
    { selector: '#destinations .country-card:nth-child(7) .country-name', key: 'dest.city7.name' },
    { selector: '#destinations .country-card:nth-child(7) .country-meta strong', key: 'dest.city7.tag' },
    { selector: '#destinations .country-card:nth-child(7) .country-desc', key: 'dest.city7.desc' },
    { selector: '#destinations .country-card:nth-child(8) .country-name', key: 'dest.city8.name' },
    { selector: '#destinations .country-card:nth-child(8) .country-meta strong', key: 'dest.city8.tag' },
    { selector: '#destinations .country-card:nth-child(8) .country-desc', key: 'dest.city8.desc' },
    { selector: '.city-match-title', key: 'dest.table.title' },
    { selector: '.city-match-head-city', key: 'dest.table.header.city' },
    { selector: '.city-match-head-vibe', key: 'dest.table.header.vibe' },
    { selector: '.city-match-head-best', key: 'dest.table.header.best' },
    { selector: '.city-match-city-1', key: 'dest.city1.name', prefix: '🇯🇵 ' },
    { selector: '.city-match-vibe-1', key: 'dest.table.row1.vibe' },
    { selector: '.city-match-best-1', key: 'dest.table.row1.best' },
    { selector: '.city-match-city-2', key: 'dest.city3.name', prefix: '🇯🇵 ' },
    { selector: '.city-match-vibe-2', key: 'dest.table.row2.vibe' },
    { selector: '.city-match-best-2', key: 'dest.table.row2.best' },
    { selector: '.city-match-city-3', key: 'dest.city2.name', prefix: '🇯🇵 ' },
    { selector: '.city-match-vibe-3', key: 'dest.table.row3.vibe' },
    { selector: '.city-match-best-3', key: 'dest.table.row3.best' },
    { selector: '.city-match-city-4', key: 'dest.city4.name', prefix: '🇯🇵 ' },
    { selector: '.city-match-vibe-4', key: 'dest.table.row4.vibe' },
    { selector: '.city-match-best-4', key: 'dest.table.row4.best' },
    { selector: '.city-match-city-5', key: 'dest.city5.name', prefix: '🇯🇵 ' },
    { selector: '.city-match-vibe-5', key: 'dest.table.row5.vibe' },
    { selector: '.city-match-best-5', key: 'dest.table.row5.best' },
    { selector: '.city-match-city-6', key: 'dest.city6.name', prefix: '🇯🇵 ' },
    { selector: '.city-match-vibe-6', key: 'dest.table.row6.vibe' },
    { selector: '.city-match-best-6', key: 'dest.table.row6.best' },
    { selector: '#why .section-tag', key: 'why.tag' },
    { selector: '#why .section-title', key: 'why.title', html: true },
    { selector: '#why .feature-item:nth-child(1) .feature-text strong', key: 'why.feature1.title' },
    { selector: '#why .feature-item:nth-child(1) .feature-text p', key: 'why.feature1.desc' },
    { selector: '#why .feature-item:nth-child(2) .feature-text strong', key: 'why.feature2.title' },
    { selector: '#why .feature-item:nth-child(2) .feature-text p', key: 'why.feature2.desc' },
    { selector: '#why .feature-item:nth-child(3) .feature-text strong', key: 'why.feature3.title' },
    { selector: '#why .feature-item:nth-child(3) .feature-text p', key: 'why.feature3.desc' },
    { selector: '#why .feature-item:nth-child(4) .feature-text strong', key: 'why.feature4.title' },
    { selector: '#why .feature-item:nth-child(4) .feature-text p', key: 'why.feature4.desc' },
    { selector: '#services .section-tag', key: 'services.tag' },
    { selector: '#services .section-title', key: 'services.title', html: true },
    { selector: '#services .section-sub', key: 'services.sub' },
    { selector: '#services .service-card:nth-child(1) .service-title', key: 'services.card1.title' },
    { selector: '#services .service-card:nth-child(1) .service-desc', key: 'services.card1.desc' },
    { selector: '#services .service-card:nth-child(2) .service-title', key: 'services.card2.title' },
    { selector: '#services .service-card:nth-child(2) .service-desc', key: 'services.card2.desc' },
    { selector: '#services .service-card:nth-child(3) .service-title', key: 'services.card3.title' },
    { selector: '#services .service-card:nth-child(3) .service-desc', key: 'services.card3.desc' },
    { selector: '#services .service-card:nth-child(4) .service-title', key: 'services.card4.title' },
    { selector: '#services .service-card:nth-child(4) .service-desc', key: 'services.card4.desc' },
    { selector: '#services .service-card:nth-child(5) .service-title', key: 'services.card5.title' },
    { selector: '#services .service-card:nth-child(5) .service-desc', key: 'services.card5.desc' },
    { selector: '#services .service-card:nth-child(6) .service-title', key: 'services.card6.title' },
    { selector: '#services .service-card:nth-child(6) .service-desc', key: 'services.card6.desc' },
    { selector: '.process-steps .step:nth-child(1) .step-title', key: 'process.step1.title' },
    { selector: '.process-steps .step:nth-child(1) .step-desc', key: 'process.step1.desc' },
    { selector: '.process-steps .step:nth-child(2) .step-title', key: 'process.step2.title' },
    { selector: '.process-steps .step:nth-child(2) .step-desc', key: 'process.step2.desc' },
    { selector: '.process-steps .step:nth-child(3) .step-title', key: 'process.step3.title' },
    { selector: '.process-steps .step:nth-child(3) .step-desc', key: 'process.step3.desc' },
    { selector: '.process-steps .step:nth-child(4) .step-title', key: 'process.step4.title' },
    { selector: '.process-steps .step:nth-child(4) .step-desc', key: 'process.step4.desc' },
    { selector: '#testimonials .section-tag', key: 'testi.tag' },
    { selector: '#testimonials .section-title', key: 'testi.title', html: true },
    { selector: '#testimonials .testi-card:nth-child(1) .testi-badge', key: 'testi.badge1' },
    { selector: '#testimonials .testi-card:nth-child(2) .testi-badge', key: 'testi.badge2' },
    { selector: '#testimonials .testi-card:nth-child(3) .testi-badge', key: 'testi.badge3' },
    { selector: '#testimonials .testi-card:nth-child(1) .testi-text', key: 'testi.text1' },
    { selector: '#testimonials .testi-card:nth-child(2) .testi-text', key: 'testi.text2' },
    { selector: '#testimonials .testi-card:nth-child(3) .testi-text', key: 'testi.text3' },
    { selector: '#testimonials .testi-card:nth-child(1) .testi-dest', key: 'testi.dest1', prefix: '📍 ' },
    { selector: '#testimonials .testi-card:nth-child(2) .testi-dest', key: 'testi.dest2', prefix: '📍 ' },
    { selector: '#testimonials .testi-card:nth-child(3) .testi-dest', key: 'testi.dest3', prefix: '📍 ' },
    { selector: '#gallery .section-tag', key: 'gallery.tag' },
    { selector: '#gallery .section-title', key: 'gallery.title', html: true },
    { selector: '#gallery .section-sub', key: 'gallery.sub' },
    { selector: '#gallery .gallery-stat:nth-child(1) .gallery-stat-label', key: 'gallery.stat.students' },
    { selector: '#gallery .gallery-stat:nth-child(2) .gallery-stat-label', key: 'gallery.stat.visa' },
    { selector: '.cta-title', key: 'cta.title', html: true },
    { selector: '.cta-sub', key: 'cta.sub' },
    { selector: '.cta-section .btn-primary', key: 'cta.book' },
    { selector: '.cta-section .btn-outline', key: 'cta.follow' },
    { selector: '#contact .section-tag', key: 'contact.tag' },
    { selector: '#contact .section-title', key: 'contact.title', html: true },
    { selector: '#contact .contact-info > p', key: 'contact.sub' },
    { selector: '#contact .info-item:nth-child(2) .info-label', key: 'contact.office' },
    { selector: '#contact .info-item:nth-child(3) .info-label', key: 'contact.phone' },
    { selector: '#contact .info-item:nth-child(4) .info-label', key: 'contact.social' },
    { selector: '#contact .social-btn:nth-child(1)', key: 'social.facebook' },
    { selector: '#contact .social-btn:nth-child(2)', key: 'social.instagram' },
    { selector: '#contact .social-btn:nth-child(3)', key: 'social.youtube' },
    { selector: '#contact .social-btn:nth-child(4)', key: 'social.tiktok' },
    { selector: '.contact-form h3', key: 'form.title' },
    { selector: '.contact-form h3 + p', key: 'form.sub' },
    { selector: '.contact-form button.submit-btn', key: 'form.submit' },
    { selector: '.contact-form .call-now-btn', key: 'form.call' },
    { selector: 'footer .footer-links li:nth-child(1) a', key: 'footer.destinations' },
    { selector: 'footer .footer-links li:nth-child(2) a', key: 'footer.services' },
    { selector: 'footer .footer-links li:nth-child(3) a', key: 'footer.why' },
    { selector: 'footer .footer-links li:nth-child(4) a', key: 'footer.contact' },
    { selector: 'footer p', key: 'footer.copy' }
  ];

  function t(key) {
    return (translations[currentLanguage] && translations[currentLanguage][key]) || translations.en[key] || key;
  }

  function applyBinding(binding) {
    const element = document.querySelector(binding.selector);
    if (!element) return;

    const value = (binding.prefix || '') + t(binding.key);

    if (binding.html) {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  }

  function translateProcessSection() {
    const processSteps = document.querySelector('.process-steps');
    if (!processSteps) return;

    const processSection = processSteps.closest('section');
    if (!processSection) return;

    const tag = processSection.querySelector('.section-tag');
    const title = processSection.querySelector('.section-title');

    if (tag) {
      tag.textContent = t('process.tag');
    }
    if (title) {
      title.innerHTML = t('process.title');
    }
  }

  function translateFormLabelsAndPlaceholders() {
    const firstNameInput = document.querySelector('input[name="firstName"]');
    const lastNameInput = document.querySelector('input[name="lastName"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const emailInput = document.querySelector('input[name="email"]');
    const citySelect = document.querySelector('select[name="city"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    if (firstNameInput) {
      const label = firstNameInput.closest('.form-group')?.querySelector('label');
      if (label) label.textContent = t('form.firstName');
      firstNameInput.placeholder = t('form.placeholder.firstName');
    }

    if (lastNameInput) {
      const label = lastNameInput.closest('.form-group')?.querySelector('label');
      if (label) label.textContent = t('form.lastName');
      lastNameInput.placeholder = t('form.placeholder.lastName');
    }

    if (phoneInput) {
      const label = phoneInput.closest('.form-group')?.querySelector('label');
      if (label) label.textContent = t('form.phone');
      phoneInput.placeholder = t('form.placeholder.phone');
    }

    if (emailInput) {
      const label = emailInput.closest('.form-group')?.querySelector('label');
      if (label) label.textContent = t('form.email');
      emailInput.placeholder = t('form.placeholder.email');
    }

    if (messageInput) {
      const label = messageInput.closest('.form-group')?.querySelector('label');
      if (label) label.textContent = t('form.message');
      messageInput.placeholder = t('form.placeholder.message');
    }

    if (citySelect) {
      const label = citySelect.closest('.form-group')?.querySelector('label');
      if (label) label.textContent = t('form.city');

      const cityKeyMap = {
        '': 'form.cityDefault',
        'Tokyo': 'form.cityTokyo',
        'Kyoto': 'form.cityKyoto',
        'Osaka': 'form.cityOsaka',
        'Fukuoka': 'form.cityFukuoka',
        'Nagoya': 'form.cityNagoya',
        'Sapporo': 'form.citySapporo',
        'Sendai': 'form.citySendai',
        'Yokohama': 'form.cityYokohama'
      };

      citySelect.querySelectorAll('option').forEach(function (option) {
        const key = cityKeyMap[option.value];
        if (key) {
          option.textContent = t(key);
        }
      });
    }
  }

  function applyTranslations(lang) {
    if (!translations[lang]) {
      lang = 'en';
    }

    currentLanguage = lang;
    document.documentElement.lang = lang;

    bindings.forEach(applyBinding);
    translateProcessSection();
    translateFormLabelsAndPlaceholders();

    const switcher = document.getElementById('languageSwitcher');
    if (switcher && switcher.value !== lang) {
      switcher.value = lang;
    }
  }

  function setLanguage(lang, persist) {
    applyTranslations(lang);
    if (persist) {
      localStorage.setItem(STORAGE_KEY, currentLanguage);
    }
  }

  function initializeI18n() {
    const switcher = document.getElementById('languageSwitcher');
    const savedLanguage = localStorage.getItem(STORAGE_KEY) || 'en';

    applyTranslations(savedLanguage);

    if (switcher) {
      switcher.addEventListener('change', function (event) {
        setLanguage(event.target.value, true);
      });
    }
  }

  window.AkaruiI18n = {
    t,
    setLanguage,
    getLanguage: function () {
      return currentLanguage;
    }
  };

  document.addEventListener('DOMContentLoaded', initializeI18n);
})();
