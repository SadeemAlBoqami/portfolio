import type { PortfolioContent } from "@/lib/content-types";
import { english } from "./portfolio-content.en";

// Share identifiers, product names, links, and factual values. All prose is curated Arabic.
export const arabic: PortfolioContent = {
  ...english,
  site: { title: "سديم البقمي — مهندسة حاسب | البنية التحتية للذكاء الاصطناعي", description: "الملف المهني لسديم البقمي، مهندسة حاسب تعمل في البنية التحتية للذكاء الاصطناعي، واستدلال GPU، والذكاء الاصطناعي الطرفي، والروبوتات." },
  hero: {
    ...english.hero, name: "سديم البقمي", title: "مهندسة حاسب | البنية التحتية للذكاء الاصطناعي | الذكاء الاصطناعي الطرفي",
    tagline: "أبني وأقيّم أنظمة ذكية تجمع بين بنية GPU التحتية، والذكاء الاصطناعي الطرفي، والروبوتات، ونشر النماذج للتطبيقات العملية.",
    location: "الطائف، المملكة العربية السعودية", availability: "متاحة للفرص المهنية والتعاون",
  },
  navigation: [
    { id: "focus", label: "مجالات التركيز" }, { id: "experience", label: "الخبرات" },
    { id: "projects", label: "مشاريع مختارة" }, { id: "skills", label: "المهارات التقنية" },
    { id: "credentials", label: "الشهادات والاعتمادات" }, { id: "contact", label: "التواصل" },
  ],
  sections: { focus: "مجالات التركيز", experience: "الخبرات", education: "التعليم", projects: "مشاريع مختارة", skills: "المهارات التقنية", credentials: "الشهادات والاعتمادات", contact: "التواصل" },
  ui: {
    viewProjects: "استعراض المشاريع", downloadCV: "تحميل السيرة الذاتية", viewProject: "تفاصيل المشروع", viewCode: "عرض الكود",
    liveDemo: "العرض التجريبي", presentation: "العرض التقديمي", report: "التقرير", back: "جميع المشاريع",
    overview: "نبذة عن المشروع", built: "ما أنجزته", architecture: "المعمارية والبنية التحتية", results: "النتائج والقياسات", media: "وسائط المشروع", links: "روابط المشروع",
    status: { completed: "مكتمل", "in-preparation": "قيد التحضير" },
    menu: "فتح قائمة التنقل", closeMenu: "إغلاق قائمة التنقل", lightTheme: "تفعيل المظهر الفاتح", darkTheme: "تفعيل المظهر الداكن", skip: "الانتقال إلى المحتوى", switchLanguage: "View site in English",
    professionalCertifications: "شهادات مهنية قيد التحضير", training: "برامج تدريبية واعتمادات مختارة", trainingLabel: "برنامج تدريبي",
    preparationNote: "يجري التحضير لهذه الشهادات، ولم تُكتسب بعد.", gpa: "المعدل التراكمي",
    copy: "نسخ", copied: "تم النسخ", copyFailed: "تعذّر النسخ. يُرجى تحديد النص ونسخه يدويًا.",
    copyEmail: "نسخ البريد الإلكتروني", copyPhone: "نسخ رقم الهاتف", email: "البريد الإلكتروني", phone: "الهاتف", location: "الموقع",
    contactHeading: "لنبنِ أنظمة ذكية معًا.", contactDescription: "متاحة للفرص الهندسية والتعاون في البنية التحتية للذكاء الاصطناعي، والأنظمة الطرفية، والروبوتات.",
  },
  focusAreas: [
    { id: "infrastructure", title: "البنية التحتية للذكاء الاصطناعي وMLOps", description: "تشغيل النماذج على GPU، ونشر أحمال العمل بالحاويات، وإدارتها عبر Kubernetes ضمن بيئات قابلة لإعادة الإنتاج." },
    { id: "edge", title: "الذكاء الاصطناعي الطرفي والرؤية الحاسوبية", description: "استدلال بزمن استجابة منخفض على NVIDIA Jetson باستخدام TensorRT وPyTorch وOpenCV وYOLOv8." },
    { id: "robotics", title: "الروبوتات والأنظمة المدمجة", description: "دمج ROS 2 والمتحكمات الدقيقة والمستشعرات لبناء أنظمة ذكية تتكامل فيها البرمجيات مع العتاد." },
    { id: "gpu", title: "أنظمة GPU ومراقبة الأداء", description: "تقييم زمن الاستجابة ومعدل المعالجة واستهلاك VRAM، ومراقبة البنية التحتية باستخدام Prometheus وGrafana." },
  ],
  experience: [
    { ...english.experience[0], role: "معسكر تشغيل مراكز بيانات الذكاء الاصطناعي", organization: "الأكاديمية السعودية الرقمية (SDA) وWeCloudData", period: "أغسطس 2026 — أكتوبر 2026",
      highlights: ["نشرت أحمال استدلال للذكاء الاصطناعي بالحاويات باستخدام Docker وKubernetes/k3s وvLLM-Omni.", "قيّمت أداء الاستدلال على GPU من حيث زمن الاستجابة والموثوقية واستهلاك VRAM.", "طبّقت مراقبة البنية التحتية باستخدام Prometheus وGrafana."] },
    { ...english.experience[1], role: "متدربة هندسة روبوتات متكاملة", organization: "Smart Methods — الأساليب الذكية", period: "يونيو 2025 — أغسطس 2025",
      highlights: ["دمجت متحكمات ARM وESP32 في أنظمة حركة الروبوتات والتحكم بها.", "عملت على نماذج للرؤية الحاسوبية ومعالجة اللغة الطبيعية في الزمن الفعلي للأنظمة المدمجة والمستقلة.", "استخدمت ROS 2 في تكامل العتاد والبرمجيات."], skills: ["ROS 2", "ARM", "ESP32", "الرؤية الحاسوبية", "معالجة اللغة الطبيعية"] },
  ],
  education: { ...english.education, degree: "بكالوريوس هندسة الحاسب", institution: "جامعة الطائف", period: "أغسطس 2021 — يوليو 2026", distinction: "تميّز في المقررات المعملية لهندسة الحاسب" },
  projects: {
    "image-generation-infrastructure": {
      ...english.projects["image-generation-infrastructure"],
      title: "تقييم ونشر نماذج مفتوحة المصدر لتوليد الصور", descriptor: "بنية تحتية للذكاء الاصطناعي التوليدي وتقييم النماذج", period: "سبتمبر 2026",
      summary: "تقييم ونشر خدمتين لتوليد الصور على بطاقة NVIDIA RTX A6000 مشتركة، ضمن بيئة قابلة لإعادة الإنتاج مع مراقبة أداء GPU.",
      cardMetrics: [{ label: "مطالبات التقييم", value: "25" }, { label: "متوسط توليد FLUX", value: "6.705 s" }, { label: "عمليات التوليد الفاشلة", value: "0" }],
      overview: "تقييم أحمال توليد الصور مفتوحة المصدر ونشرها في بيئة بنية تحتية قابلة لإعادة الإنتاج، مع مقارنة زمن التوليد وأعلى استهلاك لذاكرة VRAM وموثوقية التشغيل.",
      built: ["نشرت FLUX.2 Klein وZ-Image-Turbo كخدمتين مستقلتين داخل حاويات على Kubernetes.", "استخدمت المشاركة الزمنية لوحدة GPU من NVIDIA لإتاحة موارد منطقية للجدولة على بطاقة RTX A6000 فعلية واحدة.", "استخدمت vLLM-Omni حيث ينطبق ضمن تنفيذ خدمة الاستدلال، مع Prometheus وGrafana للمراقبة."],
      architecture: { steps: ["خدمتا FLUX.2 Klein وZ-Image-Turbo", "حاويات Docker على Kubernetes / k3s", "المشاركة الزمنية لوحدة GPU من NVIDIA", "بطاقة NVIDIA RTX A6000 فعلية واحدة", "المراقبة باستخدام Prometheus وGrafana"], note: "تتيح المشاركة الزمنية موارد GPU منطقية للجدولة، لكنها لا تعزل ذاكرة VRAM بين أحمال العمل." },
      results: { summary: "شمل التقييم 25 مطالبة، دون عمليات توليد فاشلة.", metrics: [{ label: "متوسط زمن التوليد — FLUX", value: "6.705 s" }, { label: "أعلى استهلاك VRAM — FLUX", value: "11.67 GB" }, { label: "متوسط زمن التوليد — Z-Image-Turbo", value: "14.554 s" }, { label: "أعلى استهلاك VRAM — Z-Image-Turbo", value: "7.86 GB" }] },
      links: { github: "https://github.com/SadeemAlBoqami/beamdata-go-to-market-image-generation" },
      media: {
        cover: { src: "/projects/beam-data/GTM_Image_Generation_Team3_page-0001.jpg", alt: "غلاف عرض مشروع Beam Data لتوليد الصور مفتوح المصدر", width: 4000, height: 2250 },
        architectureImage: { src: "/projects/beam-data/GTM_Image_Generation_Team3_page-0031.jpg", alt: "معمارية نشر Beam Data لخدمتي توليد الصور مع Kubernetes وRTX A6000 وGrafana وPrometheus", width: 4000, height: 2250, caption: "معمارية النشر لخدمتي النماذج ومنظومة المراقبة" },
        gallery: [
          { src: "/projects/beam-data/GTM_Image_Generation_Team3_page-0008.jpg", alt: "مسار تقييم توليد الصور في Beam Data", width: 4000, height: 2250, caption: "مسار التقييم من مجموعة المطالبات إلى القياس النهائي" },
          { src: "/projects/beam-data/GTM_Image_Generation_Team3_page-0032.jpg", alt: "أدوات النشر والمراقبة المستخدمة في Beam Data", width: 4000, height: 2250, caption: "أدوات الخدمة والحاويات والتنظيم ومشاركة GPU والمراقبة" },
          { src: "/projects/beam-data/GTM_Image_Generation_Team3_page-0033.jpg", alt: "تحديات النشر وحلولها في Beam Data", width: 4000, height: 2250, caption: "تحديات النشر والحلول المطبقة" },
          { src: "/projects/beam-data/GTM_Image_Generation_Team3_page-0034.jpg", alt: "لوحة Grafana لمراقبة أحمال الذكاء الاصطناعي في Beam Data", width: 4000, height: 2250, caption: "مراقبة GPU ومضيف التشغيل في Grafana" },
        ],
      },
    },
    "saudi-labor-rag": {
      ...english.projects["saudi-labor-rag"], title: "Saudi Labor RAG", descriptor: "نظام عربي للتوليد المعزّز بالاسترجاع في النصوص القانونية", period: "سبتمبر 2026",
      summary: "نظام RAG يعمل محليًا على نظام العمل السعودي ولائحته التنفيذية، يجمع بين الاسترجاع باللغة العربية وإجابات مرتبطة بمصادرها.",
      cardMetrics: [{ label: "مواد نظامية مهيكلة", value: "201" }, { label: "وثائق للاسترجاع", value: "249" }],
      overview: "تطبيق محلي للاسترجاع والتوليد يعتمد على الوثائق الرسمية لنظام العمل السعودي ولائحته التنفيذية. يركّز المشروع على استرجاع النصوص العربية وربط الإجابات بالمصادر.",
      built: ["هيكلت 201 مادة من نظام العمل السعودي وفهرست 249 وثيقة للاسترجاع.", "دمجت تمثيلات BGE-M3 مع استرجاع FAISS وإعادة الترتيب باستخدام BGE للنصوص القانونية العربية.", "شغّلت Gemma 3 4B Q4_K_M محليًا عبر llama.cpp، وأتحت التطبيق من خلال FastAPI ضمن حاوية Docker."],
      architecture: { steps: ["الوثائق القانونية الرسمية", "متن قانوني مهيكل", "تمثيلات BGE-M3", "استرجاع FAISS", "إعادة الترتيب باستخدام BGE", "استدلال Gemma محليًا عبر llama.cpp", "FastAPI", "التطبيق داخل حاوية"] },
      results: { summary: "أُجري تقييم أداء النظام باستخدام NVIDIA RTX A6000.", metrics: [{ label: "مواد مهيكلة من نظام العمل السعودي", value: "201" }, { label: "وثائق مفهرسة للاسترجاع", value: "249" }] },
    },
    "precrash-ai": {
      ...english.projects["precrash-ai"], descriptor: "نظام لتشخيص الحركة المرورية وسلامة الطرق بالذكاء الاصطناعي", period: "سبتمبر 2025 — يونيو 2026",
      summary: "مسار إدراك وتنبؤ في الزمن الفعلي باستخدام YOLOv8 وLSTM، يدمج ROS 2 واستدلالًا طرفيًا محسّنًا باستخدام TensorRT على NVIDIA Jetson.",
      overview: "نظام ذكاء اصطناعي متكامل لتشخيص الحركة المرورية وسلامة الطرق، يجمع بين الإدراك والتنبؤ على أجهزة طرفية.",
      built: ["دمجت الإدراك باستخدام YOLOv8 مع مسار تنبؤ يعتمد على LSTM في الزمن الفعلي.", "ربطت مكونات النظام باستخدام ROS 2 على NVIDIA Jetson.", "استخدمت TensorRT للاستدلال الطرفي ضمن تكامل العتاد والبرمجيات."],
      architecture: { steps: ["الإدراك باستخدام YOLOv8", "التنبؤ باستخدام LSTM", "تكامل النظام عبر ROS 2", "النشر على NVIDIA Jetson باستخدام TensorRT"] },
      media: {
        cover: { src: "/projects/precrash-ai/20260502_093135000_iOS.jpg", alt: "منصة PRECRASH AI الروبوتية من الأمام", width: 1600, height: 1200 },
        gallery: [
          { src: "/projects/precrash-ai/20260502_063108000_iOS.jpg", alt: "منصة PRECRASH AI الروبوتية مع الشاشة والعجلات", width: 1600, height: 1200, caption: "منصة العتاد الروبوتية المدمجة" },
          { src: "/projects/precrash-ai/20260510_151833000_iOS.png", alt: "اختبار PRECRASH AI في CARLA مع مربعات الإدراك ومؤشرات المخاطر", width: 2404, height: 1415, caption: "اختبار محاكاة حي مع مؤشرات الإدراك وحالة المخاطر" },
        ],
        presentation: "/projects/precrash-ai/CP2 Poster - Road Safety.pdf",
        demoVideos: [
          { kind: "youtube", src: "https://www.youtube-nocookie.com/embed/T_bd7J-IUW0", title: "PRECRASH AI — عرض المشروع" },
          { kind: "file", src: "/projects/precrash-ai/FULL SIM DEMO.mp4", title: "PRECRASH AI — عرض المحاكاة الكامل" },
        ],
      },
    },
    "smart-restaurant": {
      ...english.projects["smart-restaurant"], title: "نظام ذكي لطلبات المطاعم", descriptor: "تطبيق طلبات يعتمد على إنترنت الأشياء", period: "أبريل 2025 — مايو 2025",
      summary: "نظام لطلبات المطاعم يتيح للعملاء الطلب والمتابعة عبر تطبيق جوال، مع إشعارات فورية بين العملاء وفريق المطعم.",
      tags: ["ESP32", "Bluetooth", "إنترنت الأشياء", "تطبيق جوال"],
      overview: "نظام للطلب عبر الجوال يربط العملاء وفريق المطعم باستخدام إنترنت الأشياء ومتحكم ESP32.",
      built: ["ربطت تطبيق الجوال ومتحكم ESP32 باستخدام Bluetooth.", "أتحت إرسال الطلبات ومتابعتها عبر تطبيق الجوال.", "نفّذت إشعارات فورية للطلبات بين العملاء وفريق المطعم."],
      links: { github: "https://github.com/SadeemAlBoqami/YummyGo-Restaurant" },
    },
  },
  skills: [
    { title: "البرمجة والأنظمة", items: english.skills[0].items },
    { title: "البنية التحتية للذكاء الاصطناعي وMLOps", items: ["Docker", "Kubernetes / k3s", "vLLM / vLLM-Omni", "Prometheus", "Grafana", "تشغيل النماذج", "تقييم أداء GPU"] },
    { title: "الذكاء الاصطناعي والرؤية الحاسوبية", items: english.skills[2].items },
    { title: "العتاد والمنصات", items: ["NVIDIA GPUs", "NVIDIA Jetson Orin Nano", "ESP32", "متحكمات ARM"] },
  ],
  credentials: {
    preparation: english.credentials.preparation,
    training: [
      { ...english.credentials.training[0], title: "برنامج تسريع مهارات الذكاء الاصطناعي", issuer: "IBM وجامعة الملك سعود" },
      { ...english.credentials.training[1], title: "البدء بالذكاء الاصطناعي على Jetson Nano", issuer: "NVIDIA Deep Learning Institute" },
      { ...english.credentials.training[2], title: "المسار التعليمي لشهادة AWS Certified AI Practitioner", issuer: "الأكاديمية السعودية الرقمية" },
    ],
  },
  contact: { ...english.contact, location: "الطائف، المملكة العربية السعودية" },
  footer: { copyright: "سديم البقمي", status: "متاحة للفرص المهنية" },
};
