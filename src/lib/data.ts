import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Globe2,
  GraduationCap,
  Handshake,
  Languages,
  MessageCircle,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

export const navLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Stories", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { label: "Visa success rate", value: "98%" },
  { label: "Students placed", value: "5,000+" },
  { label: "Top cities", value: "8" },
  { label: "Partner universities", value: "100+" },
  { label: "Post-visa support", value: "∞" },
];

export const services = [
  {
    title: "Personalized Counseling",
    description:
      "Dedicated expert guidance tailored to your unique goals and circumstances throughout your journey.",
    icon: MessageCircle,
  },
  {
    title: "Payment After Getting Visa",
    description:
      "Pay only after your visa is approved. No upfront fees - we succeed when you succeed.",
    icon: ShieldCheck,
  },
  {
    title: "COE & Visa Processing",
    description:
      "End-to-end support from certificate of eligibility paperwork to embassy submission.",
    icon: Award,
  },
  {
    title: "Language & Cultural Immersion",
    description:
      "JLPT and NAT-TEST coaching, plus life-skills training for your new environment.",
    icon: Languages,
  },
  {
    title: "University Admission",
    description:
      "Application support, SOP writing, document review, and submission to top-ranked institutions.",
    icon: GraduationCap,
  },
  {
    title: "Test Preparation",
    description:
      "JLPT, NAT-TEST, EJU, and JFT-Basic coaching with experienced trainers in Pokhara.",
    icon: Handshake,
  },
  {
    title: "Scholarship Guidance",
    description:
      "We identify and apply for scholarships to help reduce your financial burden abroad.",
    icon: Briefcase,
  },
  {
    title: "Accommodation & Housing Support",
    description:
      "Dormitory and apartment support, lease translations, and utility setup before you land.",
    icon: Building2,
  },
];

export const destinations = [
  {
    country: "Tokyo",
    headline: "The global metropolis for career-focused students",
    overview:
      "Home to 95,000+ international students and Japan's top-ranked universities. Ideal for ambitious students.",
    requirements: [
      "Academic transcripts and certificates",
      "Language proficiency (JLPT / NAT / IELTS)",
      "Financial documents",
      "Statement of purpose",
    ],
    eligibility: [
      "Completed 10+2 or equivalent",
      "Minimum GPA per institution",
      "Clear academic progression",
    ],
    visaProcess: [
      "University offer and COE processing",
      "Embassy application and interview",
      "Visa issuance and pre-departure briefing",
    ],
    benefits: [
      "Top-ranked universities",
      "Strong career opportunities",
      "Extensive student support",
    ],
    support: [
      "Pre-departure orientation",
      "Airport pickup coordination",
      "Accommodation guidance",
    ],
    image: "/assets/gallery/ECA/IMG_6441.JPG",
  },
  {
    country: "Osaka",
    headline: "The kitchen of Japan with a friendly student atmosphere",
    overview:
      "Known for friendly locals, world-famous street food, and a major business hub with a relaxed atmosphere.",
    requirements: [
      "Academic records",
      "JLPT / NAT / IELTS scores",
      "Financial evidence",
      "Health and character checks",
    ],
    eligibility: [
      "Minimum academic percentage",
      "Japanese or English language compliance",
      "Clear study plan",
    ],
    visaProcess: [
      "Offer letter and COE",
      "Embassy preparation",
      "Visa application submission",
    ],
    benefits: [
      "Lower cost of living than Tokyo",
      "Business and tech pathways",
      "Warm student culture",
    ],
    support: [
      "City shortlisting",
      "Scholarship guidance",
      "Pre-departure checklist",
    ],
    image: "/assets/gallery/School%20Visit/IMG_6384.JPG",
  },
  {
    country: "Kyoto",
    headline: "The cultural heart of Japan for focused learners",
    overview:
      "Study amidst centuries of history and 17 UNESCO World Heritage sites in a true college town.",
    requirements: [
      "Academic transcripts",
      "Language proficiency",
      "Financial documentation",
      "Statement of purpose",
    ],
    eligibility: [
      "Academic progression",
      "Proof of funds",
      "Clear study plan",
    ],
    visaProcess: [
      "University offer and COE",
      "Visa application support",
      "Visa processing",
    ],
    benefits: [
      "Rich cultural immersion",
      "Peaceful study environment",
      "Historic campus life",
    ],
    support: [
      "SOP drafting",
      "Visa document review",
      "Post-arrival support",
    ],
    image: "/assets/gallery/Farewell/IMG_3073.JPG",
  },
  {
    country: "Fukuoka",
    headline: "A coastal startup city with lower living costs",
    overview:
      "A gateway to Asia with a booming tech scene and a welcoming student lifestyle.",
    requirements: [
      "Academic transcripts",
      "Language proficiency",
      "References and SOP",
      "Financial documentation",
    ],
    eligibility: [
      "Course specific GPA",
      "Language proficiency",
      "Relevant background",
    ],
    visaProcess: [
      "CAS issuance",
      "Visa application and biometrics",
      "Decision and travel planning",
    ],
    benefits: [
      "Affordable city life",
      "Startup and tech opportunities",
      "Easy access to the rest of Asia",
    ],
    support: [
      "Course shortlisting",
      "Visa guidance",
      "Pre-departure briefing",
    ],
    image: "/assets/gallery/Interview%20Photo/IMG_6397.JPG",
  },
  {
    country: "Nagoya",
    headline: "Japan's industrial center with strong engineering links",
    overview:
      "Central Japan's manufacturing powerhouse with a manageable big-city experience.",
    requirements: [
      "Academic transcripts",
      "Language proficiency",
      "Financial documentation",
      "Statement of purpose",
    ],
    eligibility: [
      "Strong academic profile",
      "Course aligned background",
      "Clear career goals",
    ],
    visaProcess: [
      "Offer letter and COE",
      "Visa filing support",
      "Pre-departure briefing",
    ],
    benefits: [
      "Engineering and automotive pathways",
      "Practical city scale",
      "Strong industry ties",
    ],
    support: [
      "University matching",
      "Interview training",
      "Visa readiness checklist",
    ],
    image: "/assets/gallery/Picnic%20/IMG_6509.JPG",
  },
  {
    country: "Sapporo",
    headline: "The winter wonderland for quieter student life",
    overview:
      "Famous for its Snow Festival and open nature. Great for language immersion and a calmer pace.",
    requirements: [
      "Academic transcripts",
      "Language proficiency",
      "Financial documents",
      "Statement of purpose",
    ],
    eligibility: [
      "Completed 10+2 or equivalent",
      "Minimum GPA per institution",
      "Clear academic progression",
    ],
    visaProcess: [
      "University offer and COE processing",
      "Embassy application and interview",
      "Visa issuance and departure prep",
    ],
    benefits: [
      "Quiet student environment",
      "Nature and seasonal culture",
      "Focused study atmosphere",
    ],
    support: [
      "Pre-departure orientation",
      "Accommodation guidance",
      "Airport pickup coordination",
    ],
    image: "/assets/gallery/ECA/IMG_6466.JPG",
  },
  {
    country: "Sendai",
    headline: "A balanced city with strong educational standards",
    overview:
      "A perfect balance of urban convenience and natural beauty in the City of Trees.",
    requirements: [
      "Academic transcripts",
      "Language proficiency",
      "Financial documents",
      "Statement of purpose",
    ],
    eligibility: [
      "Completed 10+2 or equivalent",
      "Minimum GPA per institution",
      "Clear academic progression",
    ],
    visaProcess: [
      "University offer and COE processing",
      "Embassy application and interview",
      "Visa issuance and pre-departure briefing",
    ],
    benefits: [
      "High educational standards",
      "Natural surroundings",
      "Balanced student lifestyle",
    ],
    support: [
      "Pre-departure orientation",
      "Airport pickup coordination",
      "Accommodation guidance",
    ],
    image: "/assets/gallery/School%20Visit/IMG_6388.JPG",
  },
  {
    country: "Yokohama",
    headline: "The harbor city just minutes from Tokyo",
    overview:
      "A coastal lifestyle with quick access to Japan's largest job market and student network.",
    requirements: [
      "Academic transcripts",
      "Language proficiency",
      "Financial documents",
      "Statement of purpose",
    ],
    eligibility: [
      "Completed 10+2 or equivalent",
      "Minimum GPA per institution",
      "Clear academic progression",
    ],
    visaProcess: [
      "University offer and COE processing",
      "Embassy application and interview",
      "Visa issuance and pre-departure briefing",
    ],
    benefits: [
      "Coastal city lifestyle",
      "Easy Tokyo access",
      "Large student community",
    ],
    support: [
      "Pre-departure orientation",
      "Airport pickup coordination",
      "Accommodation guidance",
    ],
    image: "/assets/gallery/Interview%20Photo/IMG_6423.JPG",
  },
];

export const teamCategories = [
  {
    title: "Leadership Team",
    members: [
      {
        name: "Founder & CEO",
        role: "Executive Leadership",
        bio: "Bridges Nepal and Japan with a student-first vision and disciplined execution.",
        experience: "Guiding AKARUI! since its founding",
      },
      {
        name: "Managing Director",
        role: "Strategy & Partnerships",
        bio: "Leads growth, partnerships, and the premium student experience.",
        experience: "Oversees the Pokhara team and partner network",
      },
    ],
  },
  {
    title: "Expert Team",
    members: [
      {
        name: "Counselor",
        role: "Student Guidance",
        bio: "Provides personalized counseling and destination matching for every profile.",
        experience: "Dedicated to student outcomes and clear planning",
      },
      {
        name: "Japanese Language Instructor",
        role: "JLPT & NAT-TEST",
        bio: "Helps students build confidence for language exams and daily life in Japan.",
        experience: "Focused on language preparation and cultural readiness",
      },
      {
        name: "Documentation Officer",
        role: "COE & Compliance",
        bio: "Keeps paperwork, translations, and submission details accurate.",
        experience: "Supports COE and visa documentation end-to-end",
      },
      {
        name: "Marketing Coordinator",
        role: "Community Outreach",
        bio: "Connects students and families with the right information at the right time.",
        experience: "Supports communication and student engagement",
      },
    ],
  },
];

export const testimonials = [
  {
    name: "Sanjay Rana",
    destination: "Tokyo, Japan",
    quote:
      "AKARUI made my dream of studying in Tokyo a reality. The team helped me every step, from my first Hiragana lesson to finding my apartment near campus.",
  },
  {
    name: "Priya Gurung",
    destination: "Osaka, Japan",
    quote:
      "My COE was approved without a single query. The counselors were so thorough with translations and bank verification.",
  },
  {
    name: "Roshan Basnet",
    destination: "Fukuoka, Japan",
    quote:
      "I received a tuition waiver thanks to the AKARUI team. They prepared me so well for the interview that I felt confident from the first question.",
  },
  {
    name: "Kabita Shrestha",
    destination: "Kyoto, Japan",
    quote:
      "Two months after walking into AKARUI, I was on my way to Kyoto. Incredible team, and the support did not stop after visa approval.",
  },
];

export const faqs = [
  {
    question: "How early should I start my application?",
    answer:
      "We recommend starting 6 to 8 months before your intended intake to secure admissions and visas on time.",
  },
  {
    question: "Does Akarui Education Pokhara help with scholarships?",
    answer:
      "Yes. We guide you through scholarship options and help craft strong applications.",
  },
  {
    question: "Can I visit the Pokhara office without an appointment?",
    answer:
      "Walk-ins are welcome, but booking a consultation ensures dedicated time with a counselor.",
  },
  {
    question: "Do you provide post-visa support?",
    answer:
      "Yes. We offer pre-departure briefings, housing guidance, and community connections.",
  },
];

export const blogPosts = [
  {
    title: "Study in Japan: A complete 2026 roadmap",
    category: "Study Abroad",
    date: "May 10, 2026",
    summary:
      "A step-by-step timeline for application, COE, visa processing, and arrival preparation.",
    image: "/assets/gallery/ECA/IMG_6466.JPG",
  },
  {
    title: "Visa interview checklist for Pokhara students",
    category: "Visa",
    date: "Apr 24, 2026",
    summary:
      "Everything you need to prepare for embassy interviews with confidence.",
    image: "/assets/gallery/Interview%20Photo/IMG_6411.JPG",
  },
  {
    title: "Language preparation tips that boost acceptance",
    category: "Language",
    date: "Apr 2, 2026",
    summary:
      "How to align JLPT or IELTS goals with your target university requirements.",
    image: "/assets/gallery/Farewell%202/IMG_6359.JPG",
  },
];

export const values = [
  {
    title: "Personalized Support",
    description: "Dedicated guidance tailored to each student's goals and circumstances.",
    icon: ShieldCheck,
  },
  {
    title: "Payment After Visa",
    description: "No upfront fees. We win when your visa is approved.",
    icon: Users,
  },
  {
    title: "Japan-First Readiness",
    description: "Language, paperwork, and culture preparation built around Japan.",
    icon: Globe2,
  },
];

export const timeline = [
  {
    year: "2015",
    title: "Akarui Pokhara begins",
    description: "Started with a small team focused on Japan admissions and student care.",
  },
  {
    year: "2019",
    title: "Expanded city network",
    description: "Built partnerships across Tokyo, Osaka, Kyoto, and other Japanese student hubs.",
  },
  {
    year: "2023",
    title: "5,000+ student milestone",
    description: "Celebrated thousands of successful placements and visa approvals.",
  },
  {
    year: "2026",
    title: "Premium student experience",
    description: "Elevated counseling, coaching, and post-arrival support for every student.",
  },
];

export const contactInfo = {
  address: "Pokhara, Nepal",
  phone: "+977 61-570978",
  email: "akaruipkreducation@gmail.com",
  hours: "Sun - Fri: 7:00 AM - 5:00 PM",
};

export const contactLinks = [
  { label: "Facebook", href: "https://www.facebook.com/prakash.kharel.7758" },
  { label: "Instagram", href: "https://www.instagram.com/akaruipokhara12" },
  { label: "YouTube", href: "https://www.youtube.com/@AkaruiPokhara" },
  { label: "TikTok", href: "https://www.tiktok.com/@akaruieducationpokhara" },
];

export const highlights = [
  {
    title: "Personalized Support",
    description:
      "Expert guidance tailored to your goals and circumstances throughout the journey.",
    icon: MessageCircle,
  },
  {
    title: "Payment After Getting Visa",
    description:
      "No upfront fees. We only succeed when your visa is approved.",
    icon: ShieldCheck,
  },
  {
    title: "Dream City Network",
    description:
      "Tokyo, Osaka, Kyoto, Fukuoka, Nagoya, Sapporo, Sendai, and Yokohama.",
    icon: Plane,
  },
  {
    title: "Post-Arrival Support",
    description:
      "Accommodation guidance, airport pickup, and community connections after landing.",
    icon: BookOpen,
  },
];

export const directorMessage = {
  name: "Founder & CEO",
  title: "Director, Akarui Education Pokhara",
  message:
    "At AKARUI!, we believe every student deserves a brighter future. We do not just process applications - we build futures through personalized guidance and unwavering support.",
};
