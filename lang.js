/* ==========================================================================
   نظام اللغات والترجمة الموحد - بكسل رحلتي
   ========================================================================== */

const siteTranslations = {
    ar: {
        dir: 'rtl',
        langBtnText: 'English',
        // القوائم المشتركة
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "الخدمات والشاشات",
        navFaq: "الأسئلة الشائعة",
        navContact: "تواصل معنا",
        navQuote: "طلب عرض سعر",
        footerNote: "لتأجير الشاشات وتنظيم الفعاليات والمعارض والمؤتمرات في المملكة العربية السعودية.",
        footerRights: "جميع الحقوق محفوظة © 2026 بكسل رحلتي (PIXEL REHLATY)",

        // صفحة index.html
        index_docTitle: "بكسل رحلتي | تأجير الشاشات وتنظيم الفعاليات والمؤتمرات",
        heroBadge: "نخلق تجارب استثنائية للفعاليات والمؤتمرات",
        heroTitle: "بكسل رحلتي <span>لتأجير الشاشات وتنظيم الفعاليات والمؤتمرات</span>",
        heroSubtitle: "حلول متكاملة تبدأ من تطوير الفكرة والتقنيات المرئية الحديثة وصولاً إلى التنفيذ الكامل بإدارة هندسية احترافية.",
        btnServices: "استكشف خدماتنا وشاشاتنا",
        btnWhatsapp: "حجز واستشارة سريعة",
        partnersTitle: "شركاؤنا في النجاح",
        partnersSubtitle: "نفخر بثقة نخبة من أكبر منظمي الفعاليات والشركات الرائدة",
        featTitle: "ماذا نقدم في بكسل رحلتي؟",
        featSubtitle: "منظومة شاملة تحول فكرة فعاليتك إلى واقع مبهر ومتقن",
        c1Title: "شاشات P2 و LED الفائقة",
        c1Desc: "تأجير وتركيب شاشات داخلية وخارجية بدقة متناهية ومعدل تحديث عالٍ يضمن نقاء العرض والبث المباشر بدون وميض.",
        c2Title: "إدارة وتنظيم المعارض والمؤتمرات",
        c2Desc: "تخطيط استراتيجي وإدارة ميدانية شاملة لجميع مراحل الحدث، من منصات التسجيل والبروتوكول وحتى التقارير الختامية.",
        c3Title: "التجهيزات الفنية والتقنية",
        c3Desc: "أنظمة صوتية واحترافية، وإضاءة مسرحية متقدمة، وأنظمة ترجمة فورية لجميع اللغات تحت إشراف مهندسين مختصين.",

        // صفحة about.html
        about_docTitle: "من نحن | بكسل رحلتي",
        about_heroTitle: "قصتنا في <span>بكسل رحلتي</span>",
        about_heroDesc: "نبتكر تجارب بصرية وتنظيمية تليق بفعاليتك وتمنحها الهيبة والاحترافية التي تستحقها.",
        about_storyTitle: "من نكون وماذا نصنع؟",
        about_storySubtitle: "خبرة متراكمة في تشغيل وتأجير الشاشات وتنظيم المؤتمرات والمعارض",
        about_visionTitle: "رؤيتنا",
        about_visionDesc: "أن نكون من المؤسسات الرائدة في صناعة الفعاليات وتقنيات العرض الذكي بالمملكة، عبر تقديم تجارب مبتكرة ترتقي بمعايير التنظيم عالمياً.",
        about_missionTitle: "رسالتنا",
        about_missionDesc: "تحويل الفكرة إلى تجربة استثنائية متكاملة تخلد في ذاكرة الحضور من خلال الإبداع والتخطيط الهندسي الدقيق والتنفيذ المتقن.",
        about_valuesTitle: "قيمنا",
        about_valuesDesc: "الدقة المتناهية، الالتزام الصارم بالمواعيد، الاحترافية الميدانية العالية، والابتكار المستمر في الحلول التقنية والبصرية.",

        // صفحة services.html
        services_docTitle: "الخدمات والحلول | بكسل رحلتي",
        services_heroTitle: "خدماتنا <span>وحلول الفعاليات المتكاملة</span>",
        services_heroDesc: "حلول هندسية وتنظيمية شاملة تغطي كل مراحل الفعالية من الفكرة حتى الختام بأعلى معايير الجودة العالمية.",
        s1Title: "شاشات P2 الداخلية فائقة الوضوح",
        s1Desc: "مسافة بكسل 2 مم تمنح وضوحاً فائقاً وقدرة مذهلة على قراءة المحتوى والتفاصيل من أقرب مسافة مشاهدة في المؤتمرات والاجتماعات الرفيعة.",
        s2Title: "شاشات LED الخارجية العملاقة",
        s2Desc: "سطوع فائق مقاوم لأشعة الشمس المباشرة وظروف الطقس المختلفة (IP65) للمهرجانات والاحتفالات الجماهيرية المفتوحة.",
        s3Title: "الهوية البصرية والمواد الدعائية",
        s3Desc: "تصميم الهوية المتكاملة للفعاليات، تصميم العروض التقديمية، الكتيبات والبروشورات، واللوحات الإعلانية واللافتات التوجيهية.",
        s4Title: "الصوتيات والإضاءة والترجمة",
        s4Desc: "أحدث تجهيزات هندسة الصوت الرقمية، الإضاءة المسرحية الاحترافية، وأنظمة الترجمة الفورية متعددة القنوات واللغات.",
        s5Title: "تصميم المنصات والديكور والبوثات",
        s5Desc: "تصميم وتصنيع المسارح والمنصات الرئيسية، ديكورات مناطق الاستقبال VIP، وأجنحة المعارض التجارية بأحدث الخامات العصرية.",
        s6Title: "إدارة الحشود والضيافة VIP",
        s6Desc: "تنظيم بوابات الدخول والتسجيل الإلكتروني، فرق التنسيق الأمني واللوجستي، مع خدمات ضيافة فندقية وبوفيهات فاخرة تناسب كبار الشخصيات.",

        // صفحة contact.html
        contact_docTitle: "تواصل معنا | بكسل رحلتي",
        contact_heroTitle: "تواصل <span>معنا</span>",
        contact_heroDesc: "طاقمنا الفني والهندسي متواجد لخدمتك وتقديم الاستشارات الفورية وعروض الأسعار لفعاليتك القادمة.",
        contact_channelsTitle: "قنوات التواصل المباشرة",
        contact_channelsSubtitle: "اختر وسيلة الاتصال الأنسب لك وسنرد عليك في أقرب وقت",
        contact_c1Title: "محادثة واتساب",
        contact_c1Desc: "تواصل فوري ومباشر على مدار الساعة لحجز الشاشات والاستفسار السريع.",
        contact_c2Title: "الاتصال الهاتفي",
        contact_c2Desc: "فريق خدمة العملاء جاهز للرد على المكالمات وتقديم الدعم الفني المباشر.",
        contact_c3Title: "البريد الإلكتروني",
        contact_c3Desc: "أرسل تفاصيل ومتطلبات فعاليتك للحصول على كراسة وعرض سعر رسمي مفصل.",

        // صفحة faq.html
        faq_docTitle: "الأسئلة الشائعة | بكسل رحلتي",
        faq_heroTitle: "الأسئلة <span>الشائعة</span>",
        faq_heroSubtitle: "إجابات شاملة وسريعة عن كل ما يخص حجز وتجهيز شاشات العرض وتنظيم الفعاليات لفعاليتك.",
        faq_searchPlaceholder: "ابحث عن سؤالك هنا (مثلاً: أسعار، تركيب، P2)...",
        faq_helpTitle: "لم تجد إجابة لسؤالك؟",
        faq_helpSubtitle: "طاقمنا الفني والهندسي متواجد على مدار الساعة للرد على استفساراتك وتزويدك بالمساعدة فوراً.",
        faq_helpBtnText: "تواصل معنا الآن",
        faqs: [
            { q: 'ما هي تقنية شاشات P2 وما الفارق بينها وبين الشاشات العادية؟', a: 'شاشات P2 تعني أن المسافة بين كل بكسل والآخر هي 2 ملليمتر فقط. هذا يعطي دقة فائقة جداً ووضوحاً ناصعاً يجعل المحتوى يبدو طبيعياً ونقياً حتى عند الوقوف بالقرب منها مباشرة، مما يجعلها الخيار المثالي للمؤتمرات والقاعات المغلقة والفعاليات الفاخرة.' },
            { q: 'هل تشمل خدمة التأجير النقل والتركيب في موقع الفعالية؟', a: 'نعم بالتأكيد. جميع باقاتنا تشمل النقل الآمن إلى موقعك، التركيب الهندسي الكامل، البرمجة، بالإضافة إلى تواجد مهندس وفني مختص طوال فترة الفعالية لضمان التشغيل السلس والتفكيك بعد الانتهاء.' },
            { q: 'كم الوقت الذي يستغرقه فريقكم لتركيب وتجهيز الشاشات؟', a: 'يعتمد ذلك على المقاس المطلوب، ولكن في الغالب يستغرق التجهيز الكامل من ساعتين إلى 4 ساعات. نضمن دائماً الحضور قبل بدء الفعالية بوقت كافٍ لاختبار المحتوى والتأكد من الجودة 100%.' },
            { q: 'كيف يتم احتساب أسعار تأجير الشاشات؟', a: 'يتم احتساب التكلفة بناءً على المتر المربع للمساحة المطلوبة، بالإضافة إلى عدد أيام التأجير وموقع الفعالية. يمكنك التواصل معنا مباشرة لطلب عرض سعر مخصص ومناسب لميزانيتك خلال دقائق.' },
            { q: 'هل تظهر خطوط أو وميض عند تصوير الشاشات بكاميرات الجوال أو الفيديو؟', a: 'لا إطلاقاً. تتميز شاشاتنا بمعدل تحديث عالٍ (High Refresh Rate) يصل إلى 3840Hz فأعلى، مما يضمن ظهور المحتوى صافياً وبدون أي وميض أو خطوط سوداء أثناء التصوير أو البث المباشر.' },
            { q: 'ما هي الصيغ والوسائط المدعومة للتشغيل على الشاشات؟', a: 'معالجات الفيديو لدينا تدعم جميع صيغ الفيديو والصور الحديثة مثل (MP4, MOV, PNG, JPG, PDF) بالإضافة إلى التوصيل المباشر بأجهزة الكومبيوتر، أجهزة العروض التقديمية، وكاميرات البث المباشر عبر مداخل HDMI.' },
            { q: 'قبل كم يوم يجب علي حجز الشاشة أو طلب تنظيم الفعالية؟', a: 'يفضل الحجز مسبقاً بـ 3 إلى 7 أيام لضمان توفر المقاسات المطلوبة وجدولة الطواقم الفنية، مع جاهزيتنا التامة لاستقبال الطلبات العاجلة والطارئة.' }
        ],
        about_docTitle: "من نحن | بكسل رحلتي",
        about_heroTitle: "رحلتنا تبدأ من كل <span>بكسل</span> يصنع الفارق",
        about_heroDesc: "نبتكر تجارب مرئية تليق بفعاليتك وتمنحها الوضوح والبريق الذي تستحقه.",
        story_title: "قصتنا في بكسل رحلتي",
story_p1: "تأسست شركة بكسل رحلتي لتقدم نقلة نوعية في قطاع تقنيات العرض المرئي، ونؤمن أن أي مؤتمر أو معرض أو حفل لا يكتمل سحره إلا بالوضوح المذهل والتفاصيل الدقيقة.",
story_p2: "نحن متخصصون في تأجير شاشات LED و P2 عالية الوضوح، مع فرق هندسية متكاملة تتولى النقل، التركيب، البرمجة، والدعم الفني الميداني المباشر طوال فترة الحدث.",
stat_screens: "شاشة وطراز جاهز",
stat_events: "فعالية ناجحة",
stat_clients: "عميل وشريك نجاح",
stat_satisfaction: "نسبة رضا العملاء",
vision_title: "رؤيتنا ورسالتنا",
vision_subtitle: "المبادئ الأساسية التي تدفعنا نحو التميز في كل مشروع",
card_vision_h: "رؤيتنا",
card_vision_p: "أن نكون الخيار الأول والشريك الأكثر موثوقية في مجال تأجير شاشات العرض والحلول المرئية المتكاملة على مستوى المنطقة.",
card_mission_h: "رسالتنا",
card_mission_p: "تقديم حلول مرئية مذهلة وموثوقة تضفي الحيوية على الفعاليات، وتضمن انبهار الحاضرين ونجاح الشركاء وفق أعلى معايير الجودة والسلامة.",
card_values_h: "قيمنا",
card_values_p: "الدقة المتناهية، السرعة في الإنجاز، الالتزام التام بالمواعيد، والاحترافية الفنية العالية في كافة تفاصيل الحدث.",
timeline_title: "محطات في مسيرتنا",
timeline_subtitle: "خطوات واثقة تبني نجاحاً مستمراً",
milestone1_badge: "البداية والانطلاقة",
milestone1_h: "تأسيس الانطلاقة الأولى",
milestone1_p: "بدأنا بشغف كبير ورؤية واضحة لتمكين المعارض والفعاليات من مواكبة أحدث تقنيات العرض الذكي.",
milestone2_badge: "التطور التقني",
milestone2_h: "شاشات P2 الدقيقة",
milestone2_p: "حققنا نقلة نوعية بإدخال شاشات P2 الداخلية فائقة الدقة والمصممة خصيصاً للمؤتمرات والاجتماعات الكبرى.",
milestone3_badge: "القمة والانتشار",
milestone3_h: "تغطية الفعاليات الكبرى",
milestone3_p: "توسعنا لنغطي الملتقيات الوطنية الكبرى والمعارض الترفيهية الضخمة بأعلى معايير التنفيذ الفني المتقن.",
    },
    en: {
        dir: 'ltr',
        langBtnText: 'العربية',
        // Shared Navigation
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services & Screens",
        navFaq: "FAQ",
        navContact: "Contact Us",
        navQuote: "Get a Quote",
        footerNote: "Screens rental and conference & event management across Saudi Arabia.",
        footerRights: "All Rights Reserved © 2026 Pixel Rehlaty",

        // index.html
        index_docTitle: "Pixel Rehlaty | Screens Rental & Event Management",
        heroBadge: "Creating Exceptional Event Experiences",
        heroTitle: "Pixel Rehlaty <span>Screens Rental & Event Management</span>",
        heroSubtitle: "Integrated event solutions from concept design and cutting-edge display technology to turnkey execution.",
        btnServices: "Explore Services & Screens",
        btnWhatsapp: "Quick Booking & Inquiry",
        partnersTitle: "Our Partners in Success",
        partnersSubtitle: "Trusted by leading event organizers and enterprises",
        featTitle: "What We Offer at Pixel Rehlaty",
        featSubtitle: "Comprehensive solutions transforming your event vision into an impactful reality",
        c1Title: "Precision P2 & LED Screens",
        c1Desc: "Rental and installation of ultra-fine indoor and outdoor displays with high refresh rates for flicker-free visuals.",
        c2Title: "Exhibition & Conference Management",
        c2Desc: "Strategic planning and field operation covering all event stages, registration booths, and protocol.",
        c3Title: "Technical & Production Setup",
        c3Desc: "Professional sound systems, stage lighting, and simultaneous interpretation equipment supported by expert engineers.",

        // about.html
        about_docTitle: "About Us | Pixel Rehlaty",
        about_heroTitle: "Our Story at <span>Pixel Rehlaty</span>",
        about_heroDesc: "We innovate visual and event experiences that elevate your brand and ensure lasting impressions.",
        about_storyTitle: "Who We Are & What We Do",
        about_storySubtitle: "Established expertise in screen rentals and complete event & exhibition production",
        about_visionTitle: "Our Vision",
        about_visionDesc: "To be a leading force in Saudi Arabia's event management and smart display industry by delivering world-class innovative standards.",
        about_missionTitle: "Our Mission",
        about_missionDesc: "Transforming client ideas into unforgettable integrated experiences through creativity, precise engineering, and flawless execution.",
        about_valuesTitle: "Our Values",
        about_valuesDesc: "Utmost precision, strict punctuality, exceptional on-site professionalism, and continuous visual technology innovation.",

        // services.html
        services_docTitle: "Services & Solutions | Pixel Rehlaty",
        services_heroTitle: "Our Services & <span>Integrated Event Solutions</span>",
        services_heroDesc: "Turnkey engineering and production solutions managing every stage of your event with global quality standards.",
        s1Title: "Ultra HD Indoor P2 Screens",
        s1Desc: "Ultra-fine 2.0mm pixel pitch delivering crystal clear visuals and seamless text reading even from close distances in executive summits.",
        s2Title: "High-Brightness Outdoor LED Screens",
        s2Desc: "Weatherproof (IP65) and sunlight-readable massive displays engineered for concerts, open-air festivals, and fan zones.",
        s3Title: "Event Branding & Visual Materials",
        s3Desc: "End-to-end visual identity design, keynote presentation slides, promotional brochures, banners, and orientation signages.",
        s4Title: "Sound, Lighting & Simultaneous Translation",
        s4Desc: "State-of-the-art digital audio mixing, intelligent stage lighting rigs, and multi-language interpretation cabins and headsets.",
        s5Title: "Stage Design, Exhibition Booths & Decor",
        s5Desc: "Custom stage and podium manufacturing, luxury VIP lounge fit-outs, and commercial trade-show booths built with premium finishes.",
        s6Title: "Crowd Flow, Logistics & VIP Hospitality",
        s6Desc: "Smart registration gates, protocol logistics, professional security coordinators, and 5-star catering and VIP hospitality.",

        // contact.html
        contact_docTitle: "Contact Us | Pixel Rehlaty",
        contact_heroTitle: "Contact <span>Us</span>",
        contact_heroDesc: "Our engineering and support crews are ready 24/7 to provide quotations and consultations for your upcoming event.",
        contact_channelsTitle: "Direct Contact Channels",
        contact_channelsSubtitle: "Choose your preferred channel and we will respond immediately",
        contact_c1Title: "WhatsApp Chat",
        contact_c1Desc: "Immediate 24/7 response for quick screen bookings and technical inquiries.",
        contact_c2Title: "Direct Phone Call",
        contact_c2Desc: "Direct communication with our customer service and technical planning teams.",
        contact_c3Title: "Official Email",
        contact_c3Desc: "Send your RFQ specifications to receive an official itemized quotation.",

        // faq.html
        faq_docTitle: "FAQ | Pixel Rehlaty",
        faq_heroTitle: "Frequently Asked <span>Questions</span>",
        faq_heroSubtitle: "Comprehensive and quick answers regarding booking and setting up screens for your events.",
        faq_searchPlaceholder: "Search your question here (e.g. pricing, setup, P2)...",
        faq_helpTitle: "Didn't find your answer?",
        faq_helpSubtitle: "Our technical and engineering staff is available 24/7 to answer your inquiries and provide immediate assistance.",
        faq_helpBtnText: "Contact Us Now",
        faqs: [
            { q: 'What is P2 screen technology and how does it differ from regular screens?', a: 'P2 technology means the distance between pixels is only 2mm. This delivers ultra-high resolution and crystal-clear clarity even from close viewing distances, making it the perfect choice for indoor conferences and luxury events.' },
            { q: 'Does the rental service include transportation and setup at the venue?', a: 'Yes, absolutely! All our packages include safe transport, complete engineering installation, programming, and an on-site engineer during your event to ensure smooth operation.' },
            { q: 'How long does your team take to install and set up the screens?', a: 'It depends on the screen size, but setup usually takes 2 to 4 hours. We always arrive well ahead of time to calibrate and test all content thoroughly.' },
            { q: 'How are screen rental prices determined?', a: 'Pricing is calculated per square meter based on dimensions, duration, and event location. Contact us directly to receive an official quote in minutes.' },
            { q: 'Will lines or flickering appear when filming the screens with phones or cameras?', a: 'Not at all. Our screens feature a high refresh rate of 3840Hz and above, guaranteeing flicker-free, crisp visuals on video recordings and live broadcasts.' },
            { q: 'What formats and media files are supported on the screens?', a: 'Our video processors support all modern formats (MP4, MOV, PNG, JPG, PDF), as well as direct connections to presentation devices and live broadcast cameras via HDMI.' },
            { q: 'How many days in advance should I book the screens or services?', a: 'We recommend booking 3 to 7 days in advance to ensure availability and crew scheduling, though we also accommodate urgent requests.' }
        ],
        about_docTitle: "About Us | Pixel Rehlaty",
about_heroTitle: "Our Journey Starts with Every <span>Pixel</span> Making a Difference",
about_heroDesc: "We innovate visual experiences, giving your event the prestige and clarity it deserves.",
story_title: "Our Story at Pixel Rehlaty",
story_p1: "Pixel Rehlaty was established to create a qualitative leap in the visual display technology sector. We believe every conference, exhibition, or ceremony is complete only with sharp clarity and striking details.",
story_p2: "We specialize in renting high-definition LED and P2 screens, backed by fully equipped engineering teams delivering seamless transportation, installation, programming, and live field support.",
stat_screens: "Screens & Models Ready",
stat_events: "Successful Events",
stat_clients: "Trusted Clients & Partners",
stat_satisfaction: "Client Satisfaction",
vision_title: "Our Vision & Mission",
vision_subtitle: "The core principles driving us toward excellence in every project",
card_vision_h: "Our Vision",
card_vision_p: "To be the premier choice and most trusted partner in display screen rentals and visual solution integrations across the region.",
card_mission_h: "Our Mission",
card_mission_p: "To deliver stunning and reliable visual solutions that bring events to life, ensuring visitor awe and partner success under the highest safety standards.",
card_values_h: "Our Values",
card_values_p: "Absolute precision, rapid execution, strict punctuality, and top-tier technical professionalism throughout every event.",
timeline_title: "Milestones in Our Journey",
timeline_subtitle: "Confident steps building continuous success",
milestone1_badge: "The Beginning",
milestone1_h: "Inception & Establishment",
milestone1_p: "We started with immense passion and a clear vision to empower exhibitions and events with state-of-the-art smart display technology.",
milestone2_badge: "Tech Evolution",
milestone2_h: "Precision P2 Displays",
milestone2_p: "We created a benchmark by introducing ultra-fine pitch indoor P2 screens tailored for high-profile corporate conventions.",
milestone3_badge: "Peak & Expansion",
milestone3_h: "Covering Premier Events",
milestone3_p: "Expanding nationwide to outfit major national forums, expos, and mega entertainment festivals with flawless technical execution."
            
    }
    
};

let currentLanguage = localStorage.getItem('pixel_lang') || 'ar';

function applyGlobalLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('pixel_lang', lang);
    const t = siteTranslations[lang];

    const htmlRoot = document.documentElement;
    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', t.dir);

    // تحديث جميع النصوص التي تحمل data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (t[key].includes('<span') || t[key].includes('</span>')) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // تحديث زر اللغة الموحد
    const langBtnSpan = document.querySelector('#langSwitchBtn span');
    if (langBtnSpan) {
        langBtnSpan.textContent = t.langBtnText;
    }

    // تحديث شريط بحث FAQ إن وجد
    const faqSearch = document.getElementById('faqSearch');
    if (faqSearch && t.faq_searchPlaceholder) {
        faqSearch.placeholder = t.faq_searchPlaceholder;
    }

    // بناء أسئلة FAQ إن كانت الصفحة الحالية faq.html
    if (typeof renderFAQs === 'function' && t.faqs) {
        renderFAQs(t.faqs);
    }
}

function toggleLanguage() {
    applyGlobalLanguage(currentLanguage === 'ar' ? 'en' : 'ar');
}

// تشغيل قائمة الجوال المشتركة
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const desktopNav = document.getElementById('desktopNav');

    if (hamburgerBtn && desktopNav) {
        hamburgerBtn.addEventListener('click', () => {
            desktopNav.classList.toggle('active');
            if (hamburgerIcon) {
                hamburgerIcon.classList.toggle('fa-bars');
                hamburgerIcon.classList.toggle('fa-xmark');
            }
        });
    }

    // تطبيق اللغة المحفوظة فور تحميل الصفحة
    applyGlobalLanguage(currentLanguage);
});