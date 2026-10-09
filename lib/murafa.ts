// Content for the Murafa'a product site (/murafa and /murafa/en).
// Every string is written as an { ar, en } pair so both translations sit side by side;
// `localize` resolves a tree of pairs to a single language.

export type MurafaLang = "ar" | "en";

// Set this once the App Store listing is live. While it is null the badge
// renders as "coming soon" instead of a dead link.
export const APP_STORE_URL: string | null = null;

export const SUPPORT_EMAIL = "support@murafaa.app";
export const TERMS_URL =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

type Pair = { ar: string; en: string };
const P = (ar: string, en: string): Pair => ({ ar, en });

type Localized<T> = T extends Pair
  ? string
  : T extends string
  ? T
  : T extends readonly (infer U)[]
  ? Localized<U>[]
  : T extends object
  ? { [K in keyof T]: Localized<T[K]> }
  : T;

const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";
const arabicDigits = (s: string) =>
  s.replace(/[0-9]/g, (d) => ARABIC_DIGITS[Number(d)]);

function isPair(o: object): o is Pair {
  const keys = Object.keys(o);
  return keys.length === 2 && "ar" in o && "en" in o;
}

export function localize<T>(o: T, lang: MurafaLang): Localized<T> {
  if (typeof o === "string")
    return (lang === "ar" ? arabicDigits(o) : o) as Localized<T>;
  if (Array.isArray(o)) return o.map((x) => localize(x, lang)) as Localized<T>;
  if (o && typeof o === "object") {
    if (isPair(o)) return localize(o[lang], lang) as Localized<T>;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(o)) out[k] = localize(v, lang);
    return out as Localized<T>;
  }
  return o as Localized<T>;
}

export const murafaContent = {
  meta: {
    title: P(
      "مُرافعة — موكلوك وقضاياك وجلساتك في جيبك",
      "Murafa’a — Your clients, cases and court sessions, in your pocket"
    ),
    description: P(
      "تطبيق آيفون للمحامين ومكاتب المحاماة في العراق: امسح البطاقة الوطنية والوكالة، تابع الجلسات والتأجيلات، واستلم تذكيرًا قبل كل جلسة.",
      "An iPhone app for lawyers and law offices in Iraq: scan national IDs and powers of attorney, track sessions and postponements, and get a reminder before every session."
    ),
  },
  t: {
    name: P("مُرافعة", "Murafa’a"),
    navF: P("المزايا", "Features"),
    navP: P("الأسعار", "Pricing"),
    navS: P("الخصوصية", "Privacy"),
    navQ: P("الأسئلة", "FAQ"),
    switchTo: P("English", "العربية"),
    download: P("حمّل التطبيق", "Get the app"),
    eyebrow: P(
      "للمحامين ومكاتب المحاماة في العراق",
      "For lawyers and law offices in Iraq"
    ),
    h1: P(
      "موكلوك وقضاياك وجلساتك، في جيبك",
      "Your clients, cases and court sessions, in your pocket"
    ),
    lead: P(
      "امسح البطاقة الوطنية والوكالة، تابع الجلسات والتأجيلات، واستلم تذكيرًا قبل كل جلسة. بالعربية أولًا، ومقفل بـ Face ID.",
      "Scan national IDs and powers of attorney, track sessions and postponements, and get a reminder before every session. Arabic first, locked with Face ID."
    ),
    dlSmall: P("حمّله من", "Download on the"),
    dlSoonSmall: P("قريبًا على", "Coming soon to the"),
    dlNote: P("مجاني للبدء · للآيفون", "Free to start · iPhone"),
    date: P("الأحد 11 تشرين الأول", "Sunday, 11 October"),
    today: P("اليوم", "Today"),
    qa1: P("مسح مستند", "Scan"),
    qa2: P("موكل جديد", "New client"),
    qa3: P("جلسة جديدة", "New session"),
    todayS: P("جلسات اليوم", "Today’s sessions"),
    fH: P(
      "صُمّم ليومك بين المكتب والمحكمة",
      "Built for days between the office and the court"
    ),
    fLead: P(
      "تفتحه عشرات المرات في اليوم لمهمة سريعة، فكل شيء على بعد لمسة أو لمستين.",
      "You open it many times a day for something quick, so everything is one or two taps away."
    ),
    pEyebrow: P("التأجيل", "Postponements"),
    pH: P(
      "تأجّلت الجلسة؟ سجّلها قبل أن تغادر القاعة",
      "Session postponed? Log it before you leave the courtroom"
    ),
    pLead: P(
      "اختر السبب والموعد الجديد، ويبقى الوقت كما هو. يُحفظ السبب في سجل القضية ويُعاد ضبط التذكير تلقائيًا.",
      "Pick the reason and the new date; the time carries over. The reason is kept on the case record and the reminder reschedules itself."
    ),
    postT: P("تأجيل الجلسة", "Postpone Session"),
    reason: P("سبب التأجيل", "Reason"),
    nextD: P("موعد الجلسة التالية", "Next session date"),
    savePost: P("حفظ التأجيل", "Save postponement"),
    sH: P("ملفات موكليك أمانة", "Your clients’ files are a trust"),
    sLead: P(
      "تحمل وثائق شخصية وقانونية حساسة، فصمّمنا مُرافعة ليبقيها معك وحدك.",
      "You carry sensitive personal and legal papers, so Murafa’a is built to keep them with you alone."
    ),
    prH: P("أسعار واضحة", "Clear pricing"),
    prLead: P(
      "ابدأ مجانًا. اشترك عندما يكبر عملك، وألغِ متى شئت.",
      "Start free. Subscribe when your practice grows, and cancel anytime."
    ),
    prFine: P(
      "تُجدَّد الاشتراكات تلقائيًا ويمكن إلغاؤها من إعدادات Apple ID قبل 24 ساعة من نهاية الفترة. إذا انتهى اشتراكك تبقى كل ملفاتك متاحة للعرض والتصدير.",
      "Subscriptions renew automatically and can be cancelled in Apple ID settings at least 24 hours before the period ends. If your subscription ends, all your files stay available to view and export."
    ),
    qH: P("أسئلة شائعة", "Questions"),
    copy: P("© 2026 مُرافعة", "© 2026 Murafa’a"),
    privacy: P("الخصوصية", "Privacy"),
    terms: P("شروط الاستخدام", "Terms of Use"),
    support: P("الدعم", "Support"),
  },
  sessions: [
    {
      time: "9:00",
      ap: P("ص", "AM"),
      court: P("محكمة بداءة الكرخ", "Karkh Court of First Instance"),
      client: P("عبد الرحمن محمد الجبوري", "Abdulrahman M. Al-Jubouri"),
      status: "attended",
      chip: P("حضرت", "Attended"),
      note: P("التالية: الإثنين 2 تشرين الثاني", "Next: Mon 2 November"),
      next: false,
    },
    {
      time: "10:30",
      ap: P("ص", "AM"),
      court: P(
        "محكمة الأحوال الشخصية في الأعظمية",
        "Adhamiya Personal Status Court"
      ),
      client: P("زينب كاظم الموسوي", "Zainab Kadhim Al-Mousawi"),
      status: "postponed",
      chip: P("تأجلت", "Postponed"),
      note: P("إلى 1 تشرين الثاني · عدم التبليغ", "To 1 November · Not served"),
      next: false,
    },
    {
      time: "12:00",
      ap: P("م", "PM"),
      court: P("محكمة جنح الرصافة", "Rusafa Misdemeanour Court"),
      client: P("حيدر علي الساعدي", "Haider Ali Al-Saadi"),
      status: "upcoming",
      chip: P("بعد 40 دقيقة", "In 40 min"),
      note: P("القاعة الثالثة", "Hall 3"),
      next: true,
    },
  ],
  features: [
    {
      icon: "document_scanner",
      tone: "green",
      h: P("امسح بالكاميرا", "Scan with the camera"),
      p: P(
        "البطاقة الوطنية بوجهيها، الوكالة، العقود وأوراق المحكمة. سمِّ المستند واختر نوعه وموكله في خطوة واحدة.",
        "National ID front and back, powers of attorney, contracts and court papers. Name it, set its type and client in one step."
      ),
    },
    {
      icon: "event_repeat",
      tone: "amber",
      h: P("الجلسات والتأجيلات", "Sessions and postponements"),
      p: P(
        "جلسات اليوم والأيام السبعة القادمة أمامك فور فتح التطبيق، مع سجل كامل لكل قضية.",
        "Today’s sessions and the next 7 days the moment you open the app, with a full history for every case."
      ),
    },
    {
      icon: "notifications",
      tone: "green",
      h: P("تذكير قبل كل جلسة", "A reminder before every session"),
      p: P(
        "مساء اليوم السابق وصباح يوم الجلسة، بالأوقات التي تختارها.",
        "The evening before and the morning of, at times you choose."
      ),
    },
    {
      icon: "folder_shared",
      tone: "green",
      h: P("ملف لكل موكل", "A folder for every client"),
      p: P(
        "الهاتف ورقم البطاقة وكل القضايا والمستندات. اتصل أو راسل عبر واتساب من الملف مباشرة.",
        "Phone, ID number, every case and document. Call or WhatsApp straight from the file."
      ),
    },
    {
      icon: "translate",
      tone: "ink",
      h: P("عربي أولًا", "Arabic first"),
      p: P(
        "من اليمين إلى اليسار بالكامل، بأسماء الأشهر العراقية والمحاكم العراقية، مع واجهة إنكليزية كاملة.",
        "Fully right-to-left, with Iraqi month names and courts, plus a complete English interface."
      ),
    },
    {
      icon: "ios_share",
      tone: "ink",
      h: P("صدّر وشارك", "Export and share"),
      p: P(
        "شارك مستندًا واحدًا أو صدّر ملف الموكل كاملًا PDF.",
        "Share a single document or export a whole client file as PDF."
      ),
    },
  ],
  reasons: [
    P("عدم التبليغ", "Not served"),
    P("غياب الخصم", "Opponent absent"),
    P("طلب مهلة", "Time requested"),
    P("إحالة إلى خبير", "Referred to expert"),
    P("أخرى", "Other"),
  ],
  dates: [
    { rel: P("بعد أسبوع", "In 1 week"), date: P("18 تشرين الأول", "18 October"), selected: false },
    { rel: P("بعد أسبوعين", "In 2 weeks"), date: P("25 تشرين الأول", "25 October"), selected: false },
    { rel: P("بعد 3 أسابيع", "In 3 weeks"), date: P("1 تشرين الثاني", "1 November"), selected: true },
    { rel: P("تاريخ آخر", "Other date"), date: P("اختيار…", "Choose…"), selected: false },
  ],
  privacy: [
    {
      icon: "familiar_face_and_zone",
      h: P("مقفل بـ Face ID", "Locked with Face ID"),
      p: P(
        "أو برمز الدخول، في كل مرة يُفتح فيها التطبيق.",
        "Or your passcode, every time the app opens."
      ),
    },
    {
      icon: "cloud_done",
      h: P("على جهازك وفي iCloud الخاص بك", "On your device and in your own iCloud"),
      p: P("لا خوادم لنا تُخزَّن عليها ملفاتك.", "Your files are never stored on our servers."),
    },
    {
      icon: "visibility_off",
      h: P("أرقام البطاقات مخفية", "ID numbers masked"),
      p: P(
        "حتى تطلب عرضها وتؤكد هويتك.",
        "Until you choose to reveal them and confirm it’s you."
      ),
    },
    {
      icon: "block",
      h: P("بلا إعلانات أو تتبّع", "No ads, no tracking"),
      p: P("لا نبيع بياناتك ولا نشاركها.", "We don’t sell or share your data."),
    },
  ],
  plans: [
    {
      name: P("مجاني", "Free"),
      price: P("0 US$", "US$0"),
      per: P("", ""),
      note: P("للبدء والتجربة", "To get started"),
      badge: null,
      items: [
        P("حتى 3 موكلين", "Up to 3 clients"),
        P("حتى 15 مستندًا", "Up to 15 documents"),
        P("الجلسات والتذكيرات", "Sessions and reminders"),
      ],
    },
    {
      name: P("شهري", "Monthly"),
      price: P("4٫99 US$", "US$4.99"),
      per: P("شهريًا", "/month"),
      note: P("بدون فترة تجريبية", "No free trial"),
      badge: null,
      items: [
        P("موكلون ومستندات بلا حدود", "Unlimited clients and documents"),
        P("مزامنة iCloud", "iCloud sync"),
        P("تصدير ملف الموكل PDF", "Export client files as PDF"),
      ],
    },
    {
      name: P("سنوي", "Yearly"),
      price: P("39٫99 US$", "US$39.99"),
      per: P("سنويًا", "/year"),
      note: P("7 أيام مجانًا · يعادل 3٫33 US$ شهريًا", "7 days free · US$3.33 a month"),
      badge: P("الأوفر", "Best value"),
      items: [
        P("كل ما في الاشتراك الشهري", "Everything in Monthly"),
        P("تجربة مجانية 7 أيام", "7-day free trial"),
        P("وفّر 33٪", "Save 33%"),
      ],
    },
  ],
  faq: [
    {
      q: P("أين تُحفظ ملفات موكليّ؟", "Where are my clients’ files stored?"),
      a: P(
        "على جهازك، وفي حساب iCloud الخاص بك إن فعّلت المزامنة. لا نملك أي نسخة منها ولا نستطيع الاطلاع عليها.",
        "On your iPhone, and in your own iCloud account if you turn on sync. We don’t hold a copy and can’t see them."
      ),
    },
    {
      q: P("ماذا يحدث إذا انتهى اشتراكي؟", "What happens if my subscription ends?"),
      a: P(
        "لا يُحذف شيء. تبقى كل الملفات والقضايا متاحة للعرض والتصدير، وتستمر التذكيرات. تتوقف فقط إضافة موكلين ومستندات فوق الحد المجاني.",
        "Nothing is deleted. All files and cases stay available to view and export, and reminders keep working. Only adding beyond the Free limits pauses."
      ),
    },
    {
      q: P("هل يعمل بدون إنترنت؟", "Does it work offline?"),
      a: P(
        "نعم. كل شيء محفوظ على الجهاز، وتتم المزامنة عند عودة الاتصال.",
        "Yes. Everything is on the device, and it syncs when you’re back online."
      ),
    },
    {
      q: P(
        "هل يمكن استخدامه في مكتب فيه أكثر من محامٍ؟",
        "Can a small office with several lawyers use it?"
      ),
      a: P(
        "حاليًا يعمل كل محامٍ بحسابه على جهازه. مشاركة الملفات بين أعضاء المكتب قيد التطوير.",
        "Today each lawyer uses it on their own iPhone and account. Sharing files across an office is in development."
      ),
    },
    {
      q: P("هل يدعم الآيباد؟", "Does it support iPad?"),
      a: P(
        "نعم، ويتزامن مع الآيفون عبر iCloud في اشتراك برو.",
        "Yes, and it syncs with your iPhone through iCloud on Pro."
      ),
    },
  ],
} as const;

export type MurafaCopy = Localized<typeof murafaContent>;
