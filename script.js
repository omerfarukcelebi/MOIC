const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
const navbar=document.getElementById('navbar');
const languageSelect=document.getElementById('languageSelect');
if(menuToggle&&navLinks) {

  menuToggle.addEventListener('click', ()=>navLinks.classList.toggle('active'));
  navLinks.querySelectorAll('a').forEach(link=> {
    link.addEventListener('click', ()=> {
      if(window.innerWidth<=980)navLinks.classList.remove('active');

    });

  });

}window.addEventListener('scroll', ()=> {
  if(navbar) {

    if(window.scrollY>20)navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

  }
});
//const translations = {
  tr: {
    "nav.about": "Hakkında",
    "nav.committees": "Komiteler",
    "nav.registration": "Başvuru",
    "nav.schedule": "Program",
    "nav.contact": "İletişim",

    "drop.about.one": "UFSM AİHL Nedir",
    "drop.about.two": "MOIC Nedir",
    "drop.about.three": "Sponsor El Kitabı",
    "drop.about.four": "Delege El Kitabı",

    "drop.committees.one": "Türkçe Komitesi",
    "drop.committees.two": "Arapça Komitesi",
    "drop.committees.three": "İngilizce Komitesi",

    "drop.registration.one": "Organizasyon Başvuruları",
    "drop.registration.two": "Delege Başvuruları",

    "drop.schedule.one": "Ödüller",
    "drop.schedule.two": "Program Akışı",
    "drop.schedule.three": "Şartlar ve Kurallar",
    "drop.schedule.four": "Sponsorlar",

    "hero.eyebrow": "Uluslararası Fatih Sultan Mehmet Anadolu İmam Hatip Lisesi'nin ilk MOIC oturumu",
    "hero.title": "TR Model Of Islamic Cooperation",
    "hero.school": "Uluslararası Fatih Sultan Mehmet Anadolu İmam Hatip Lisesi",
    "hero.button": "Delege başvuruları açıldı",
    "hero.description": "Diplomasi, hitabet ve liderlik; seçkin bir akademik konferans atmosferinde bir araya geliyor.",

    "contact.name": "Ad Soyad",
    "contact.name.placeholder": "Ad Soyad",
    "contact.email": "E-posta",
    "contact.email.placeholder": "ornek@mail.com",
    "contact.topic": "Konu",
    "contact.option.one": "Genel Soru",
    "contact.option.two": "Şikayet",
    "contact.option.three": "Öneri",
    "contact.option.four": "Sponsorluk",
    "contact.phone": "Telefon",
    "contact.phone.placeholder": "+90 ...",
    "contact.message": "Mesajınız",
    "contact.message.placeholder": "Mesajınızı buraya yazın...",
    "contact.button": "Dileği Gönder",

    "ufsm.title": "UFSM AİHL",
    "ufsm.heroText": "Uluslararası Fatih Sultan Mehmet Anadolu İmam Hatip Lisesi hakkında kısa ve kurumsal bir bakış.",

    "moic.title": "MOIC Nedir?",
    "moic.heroText": "Model of Islamic Cooperation hakkında kısa, net ve profesyonel bir bakış.",

    "delegateHandbook.title": "Delege El Kitabı",
    "delegateHandbook.text": "Bu bölüm şu anda hazırlık aşamasındadır. Delege El Kitabı çok yakında yayınlanacaktır.",
    "delegateHandbook.note": "Yakında aktif olacaktır",

    "sponsorHandbook.title": "Sponsor El Kitabı",
    "sponsorHandbook.text": "Bu bölüm şu anda hazırlık aşamasındadır. Sponsor El Kitabı çok yakında yayınlanacaktır.",
    "sponsorHandbook.note": "Yakında aktif olacaktır",

    "delegateApp.title": "Delege Başvurusu",
    "delegateApp.heroText": "TR MOIC’e delege olarak katılmak isteyen öğrenciler için başvuru süreci burada yer almaktadır.",
    "delegateApp.badge.one": "Ücretsiz Başvuru",
    "delegateApp.badge.two": "Öğrenci Odaklı",
    "delegateApp.badge.three": "Akademik Deneyim",
    "delegateApp.form.title": "Delege Bilgileri",
    "delegateApp.form.text": "Aşağıdaki alanları dikkatlice doldurarak başvuru sürecinizi başlatabilirsiniz.",
    "delegateApp.school": "Okul",
    "delegateApp.school.placeholder": "Okul adı",
    "delegateApp.grade": "Sınıf",
    "delegateApp.committee": "Komite Seçimi",
    "delegateApp.committee.placeholder": "Komite seçiniz",
    "delegateApp.motivation": "Neden katılmak istiyorsunuz?",
    "delegateApp.motivation.placeholder": "Kısa bir motivasyon yazısı yazın...",
    "delegateApp.experience": "Varsa deneyimleriniz",
    "delegateApp.experience.placeholder": "Daha önce katıldığınız etkinlikler veya deneyimleriniz...",
    "delegateApp.submit": "Delege Başvurusu Gönder",

    "orgApp.title": "Organizasyon Başvuruları",
    "orgApp.closed": "Başvurular Kapandı",
    "orgApp.text": "TR MOIC organizasyon ekibi başvuruları tamamlanmıştır. Yoğun ilginiz için teşekkür ederiz.",
    "orgApp.subtext": "Gelecek etkinliklerde tekrar başvuru fırsatı sunulacaktır. Güncellemeler için bizi takip etmeyi unutmayın.",
    "orgApp.button": "Ana Sayfaya Dön",

    "awards.title": "Ödüller",
    "awards.heroText": "TR MOIC kapsamında gösterilen akademik başarı, temsil gücü ve komite performansı çeşitli ödül kategorileriyle takdir edilecektir.",
    "awards.best": "En İyi Delege",
    "awards.honorable": "Üstün Başarı Ödülü",
    "awards.mention": "Mansiyon",

    "programFlow.title": "Program Akışı",
    "programFlow.heroText": "Konferans süresince gerçekleşecek oturumlar, aralar ve temel etkinlik akışı aşağıda yer almaktadır.",

    "rules.title": "Şartlar ve Kurallar",
    "rules.heroText": "TR MOIC kapsamında tüm katılımcıların uyması beklenen temel kurallar ve organizasyon ilkeleri aşağıda yer almaktadır.",

    "sponsors.title": "Sponsorlarımız",
    "sponsors.heroText": "TR MOIC’e katkı sunan kurum ve kuruluşlara teşekkür ederiz. Organizasyonumuza destek veren sponsorlarımız aşağıda yer almaktadır.",

    "footer.brand": "TR Model Of Islamic Cooperation",
    "footer.text": "Uluslararası Fatih Sultan Mehmet Anadolu İmam Hatip Lisesi'nin ilk MOIC oturumu için oluşturulan resmi konferans sayfası.",
    "footer.links": "Hızlı Erişim",
    "footer.contact": "İletişim",
    "footer.social": "Sosyal Medya",
    "footer.copy": "© 2026 TR MOIC. Tüm hakları saklıdır."
  },

  en: {
    "nav.about": "About",
    "nav.committees": "Committees",
    "nav.registration": "Applications",
    "nav.schedule": "Program",
    "nav.contact": "Contact",

    "drop.about.one": "What is UFSM AİHL",
    "drop.about.two": "What is MOIC",
    "drop.about.three": "Sponsor Handbook",
    "drop.about.four": "Delegate Handbook",

    "drop.committees.one": "Turkish Committee",
    "drop.committees.two": "Arabic Committee",
    "drop.committees.three": "English Committee",

    "drop.registration.one": "Organization Applications",
    "drop.registration.two": "Delegate Applications",

    "drop.schedule.one": "Awards",
    "drop.schedule.two": "Program Flow",
    "drop.schedule.three": "Terms and Rules",
    "drop.schedule.four": "Sponsors",

    "hero.eyebrow": "The first MOIC session of International Fatih Sultan Mehmet Anatolian Imam Hatip High School",
    "hero.title": "TR Model Of Islamic Cooperation",
    "hero.school": "International Fatih Sultan Mehmet Anatolian Imam Hatip High School",
    "hero.button": "Delegate applications are open",
    "hero.description": "Diplomacy, public speaking and leadership come together in a distinguished academic conference atmosphere.",

    "contact.name": "Full Name",
    "contact.name.placeholder": "Full Name",
    "contact.email": "Email",
    "contact.email.placeholder": "example@mail.com",
    "contact.topic": "Subject",
    "contact.option.one": "General Question",
    "contact.option.two": "Complaint",
    "contact.option.three": "Suggestion",
    "contact.option.four": "Sponsorship",
    "contact.phone": "Phone",
    "contact.phone.placeholder": "+90 ...",
    "contact.message": "Your Message",
    "contact.message.placeholder": "Write your message here...",
    "contact.button": "Send Request",

    "ufsm.title": "UFSM AİHL",
    "ufsm.heroText": "A brief and institutional overview of International Fatih Sultan Mehmet Anatolian Imam Hatip High School.",

    "moic.title": "What is MOIC?",
    "moic.heroText": "A brief, clear and professional overview of the Model of Islamic Cooperation.",

    "delegateHandbook.title": "Delegate Handbook",
    "delegateHandbook.text": "This section is currently under preparation. The Delegate Handbook will be published soon.",
    "delegateHandbook.note": "Will be available soon",

    "sponsorHandbook.title": "Sponsor Handbook",
    "sponsorHandbook.text": "This section is currently under preparation. The Sponsor Handbook will be published soon.",
    "sponsorHandbook.note": "Will be available soon",

    "delegateApp.title": "Delegate Application",
    "delegateApp.heroText": "The application process for students who wish to participate in TR MOIC as delegates is available here.",
    "delegateApp.badge.one": "Free Application",
    "delegateApp.badge.two": "Student Focused",
    "delegateApp.badge.three": "Academic Experience",
    "delegateApp.form.title": "Delegate Information",
    "delegateApp.form.text": "You can start your application process by filling in the fields below carefully.",
    "delegateApp.school": "School",
    "delegateApp.school.placeholder": "School name",
    "delegateApp.grade": "Grade",
    "delegateApp.committee": "Committee Selection",
    "delegateApp.committee.placeholder": "Select a committee",
    "delegateApp.motivation": "Why do you want to participate?",
    "delegateApp.motivation.placeholder": "Write a short motivation text...",
    "delegateApp.experience": "Previous experience, if any",
    "delegateApp.experience.placeholder": "Events or experiences you attended before...",
    "delegateApp.submit": "Submit Delegate Application",

    "orgApp.title": "Organization Applications",
    "orgApp.closed": "Applications Closed",
    "orgApp.text": "Applications for the TR MOIC organization team have been completed. Thank you for your interest.",
    "orgApp.subtext": "A new opportunity may be offered in future events. Please follow updates.",
    "orgApp.button": "Return to Home",

    "awards.title": "Awards",
    "awards.heroText": "Academic achievement, representation and committee performance displayed at TR MOIC will be recognized through various award categories.",
    "awards.best": "Best Delegate",
    "awards.honorable": "Outstanding Performance Award",
    "awards.mention": "Honorable Mention",

    "programFlow.title": "Program Flow",
    "programFlow.heroText": "The sessions, breaks and the general flow of the conference are presented below.",

    "rules.title": "Terms and Rules",
    "rules.heroText": "The basic rules and organizational principles expected from all participants of TR MOIC are listed below.",

    "sponsors.title": "Our Sponsors",
    "sponsors.heroText": "We thank the institutions and organizations contributing to TR MOIC. Our supporting sponsors are listed below.",

    "footer.brand": "TR Model Of Islamic Cooperation",
    "footer.text": "The official conference website created for the first MOIC session of International Fatih Sultan Mehmet Anatolian Imam Hatip High School.",
    "footer.links": "Quick Links",
    "footer.contact": "Contact",
    "footer.social": "Social Media",
    "footer.copy": "© 2026 TR MOIC. All rights reserved."
  },

  ar: {
    "nav.about": "حول",
    "nav.committees": "اللجان",
    "nav.registration": "التسجيل",
    "nav.schedule": "البرنامج",
    "nav.contact": "التواصل",

    "drop.about.one": "ما هي UFSM AİHL",
    "drop.about.two": "ما هو MOIC",
    "drop.about.three": "دليل الرعاة",
    "drop.about.four": "دليل المندوب",

    "drop.committees.one": "اللجنة التركية",
    "drop.committees.two": "اللجنة العربية",
    "drop.committees.three": "اللجنة الإنجليزية",

    "drop.registration.one": "طلبات التنظيم",
    "drop.registration.two": "طلبات المندوبين",

    "drop.schedule.one": "الجوائز",
    "drop.schedule.two": "سير البرنامج",
    "drop.schedule.three": "الشروط والقواعد",
    "drop.schedule.four": "الرعاة",

    "hero.eyebrow": "الجلسة الأولى لمؤتمر MOIC في ثانوية فاتح سلطان محمد الدولية الأناضولية للأئمة والخطباء",
    "hero.title": "نموذج التعاون الإسلامي",
    "hero.school": "ثانوية فاتح سلطان محمد الدولية الأناضولية للأئمة والخطباء",
    "hero.button": "تم فتح طلبات تسجيل المندوبين",
    "hero.description": "تجتمع الدبلوماسية والخطابة والقيادة في أجواء مؤتمر أكاديمي راقٍ ومتميز.",

    "contact.name": "الاسم الكامل",
    "contact.name.placeholder": "الاسم الكامل",
    "contact.email": "البريد الإلكتروني",
    "contact.email.placeholder": "example@mail.com",
    "contact.topic": "الموضوع",
    "contact.option.one": "سؤال عام",
    "contact.option.two": "شكوى",
    "contact.option.three": "اقتراح",
    "contact.option.four": "رعاية",
    "contact.phone": "الهاتف",
    "contact.phone.placeholder": "+90 ...",
    "contact.message": "رسالتكم",
    "contact.message.placeholder": "اكتبوا رسالتكم هنا...",
    "contact.button": "أرسل طلبك",

    "ufsm.title": "UFSM AİHL",
    "ufsm.heroText": "نظرة موجزة ومؤسسية على ثانوية فاتح سلطان محمد الدولية الأناضولية للأئمة والخطباء.",

    "moic.title": "ما هو MOIC؟",
    "moic.heroText": "نظرة موجزة وواضحة واحترافية على نموذج التعاون الإسلامي.",

    "delegateHandbook.title": "دليل المندوب",
    "delegateHandbook.text": "هذا القسم قيد الإعداد حالياً. سيتم نشر دليل المندوب قريباً.",
    "delegateHandbook.note": "سيتوفر قريباً",

    "sponsorHandbook.title": "دليل الرعاة",
    "sponsorHandbook.text": "هذا القسم قيد الإعداد حالياً. سيتم نشر دليل الرعاة قريباً.",
    "sponsorHandbook.note": "سيتوفر قريباً",

    "delegateApp.title": "طلب المندوب",
    "delegateApp.heroText": "تتوفر هنا عملية التقديم للطلاب الراغبين في المشاركة في TR MOIC كمندوبين.",
    "delegateApp.badge.one": "تسجيل مجاني",
    "delegateApp.badge.two": "يركز على الطالب",
    "delegateApp.badge.three": "تجربة أكاديمية",
    "delegateApp.form.title": "بيانات المندوب",
    "delegateApp.form.text": "يمكنكم بدء عملية التقديم من خلال تعبئة الحقول التالية بعناية.",
    "delegateApp.school": "المدرسة",
    "delegateApp.school.placeholder": "اسم المدرسة",
    "delegateApp.grade": "الصف",
    "delegateApp.committee": "اختيار اللجنة",
    "delegateApp.committee.placeholder": "اختر لجنة",
    "delegateApp.motivation": "لماذا تريد المشاركة؟",
    "delegateApp.motivation.placeholder": "اكتب نصاً قصيراً يوضح الدافع...",
    "delegateApp.experience": "الخبرات السابقة إن وجدت",
    "delegateApp.experience.placeholder": "الفعاليات أو الخبرات التي شاركت فيها سابقاً...",
    "delegateApp.submit": "إرسال طلب المندوب",

    "orgApp.title": "طلبات التنظيم",
    "orgApp.closed": "أُغلقت الطلبات",
    "orgApp.text": "تم الانتهاء من استقبال طلبات فريق تنظيم TR MOIC. نشكركم على اهتمامكم.",
    "orgApp.subtext": "قد تُفتح فرصة جديدة في الفعاليات القادمة. يرجى متابعة التحديثات.",
    "orgApp.button": "العودة إلى الصفحة الرئيسية",

    "awards.title": "الجوائز",
    "awards.heroText": "سيتم تقدير الإنجاز الأكاديمي وقوة التمثيل وأداء اللجان في TR MOIC من خلال فئات جوائز متنوعة.",
    "awards.best": "أفضل مندوب",
    "awards.honorable": "جائزة الأداء المتميز",
    "awards.mention": "تنويه مشرف",

    "programFlow.title": "سير البرنامج",
    "programFlow.heroText": "تجدون أدناه الجلسات والاستراحات والمسار العام للمؤتمر.",

    "rules.title": "الشروط والقواعد",
    "rules.heroText": "فيما يلي القواعد الأساسية والمبادئ التنظيمية المتوقعة من جميع المشاركين في TR MOIC.",

    "sponsors.title": "الرعاة",
    "sponsors.heroText": "نشكر المؤسسات والجهات التي تدعم TR MOIC. تجدون أدناه قائمة بالرعاة الداعمين.",

    "footer.brand": "نموذج التعاون الإسلامي",
    "footer.text": "الموقع الرسمي للمؤتمر الذي أُنشئ لأول دورة MOIC في ثانوية فاتح سلطان محمد الدولية الأناضولية للأئمة والخطباء.",
    "footer.links": "روابط سريعة",
    "footer.contact": "التواصل",
    "footer.social": "وسائل التواصل",
    "footer.copy": "© 2026 TR MOIC. جميع الحقوق محفوظة."
  }
};
function applyLanguage(lang) {

  const dict=translations[lang]||translations.tr;
  document.documentElement.lang=lang;
  document.body.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=> {
    const key=el.getAttribute('data-i18n');
    if(dict[key])el.textContent=dict[key]
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=> {
    const key=el.getAttribute('data-i18n-placeholder');
    if(dict[key])el.setAttribute('placeholder', dict[key])
  });
  document.querySelectorAll('#topic option[data-i18n]').forEach(opt=> {
    const key=opt.getAttribute('data-i18n');
    if(dict[key])opt.textContent=dict[key]
  });
  localStorage.setItem('trmoic_lang', lang)
}if(languageSelect) {

  const savedLang=localStorage.getItem('trmoic_lang')||'tr';
  languageSelect.value=savedLang;
  applyLanguage(savedLang);
  languageSelect.addEventListener('change', e=>applyLanguage(e.target.value))
}

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const topic = document.getElementById('topic')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    formStatus.textContent = '';
    formStatus.className = 'form-status';

    if (!name || !email || !topic || !message) {
      formStatus.textContent = 'Lütfen zorunlu alanları doldurun.';
      formStatus.classList.add('error');
      return;
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      formStatus.textContent = 'Lütfen geçerli bir e-posta adresi girin.';
      formStatus.classList.add('error');
      return;
    }

    const formData = {
      name,
      email,
      topic,
      phone,
      message,
      createdAt: new Date().toISOString()
    };

    const existingMessages = JSON.parse(localStorage.getItem('trmoicMessages')) || [];
    existingMessages.push(formData);
    localStorage.setItem('trmoicMessages', JSON.stringify(existingMessages));

    formStatus.textContent = 'Mesajınız başarıyla kaydedildi.';
    formStatus.classList.add('success');

    contactForm.reset();
  });
}
