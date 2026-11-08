document.getElementById('year').textContent = new Date().getFullYear();
const translations = {
    en: {
        financeKicker: 'EASY PAYMENT OPTION', financeTitle: 'Buy your battery on EMI',
        financeCopy: 'EMI is available through Bajaj Finance, subject to eligibility. Ask about down payment, tenure, processing fee and monthly EMI.',
        financePoint1: 'Monthly instalments', financePoint2: 'Eligibility confirmation', financePoint3: 'Terms explained before purchase',
        emiCta: 'Get EMI estimate on WhatsApp', enquiryKicker: 'QUICK ENQUIRY', enquiryTitle: 'Tell us what battery you need',
        enquiryCopy: 'Share a few details and we’ll send your enquiry to Om Sai Batteries on WhatsApp.', languageLabel: 'Language',
        nameLabel: 'Customer name', vehicleLabel: 'Vehicle make and model', batteryLabel: 'Existing battery details', phoneLabel: 'Phone number',
        emiNeedLabel: 'I want an EMI option through Bajaj Finance', formCta: 'Send enquiry on WhatsApp',
        formNote: 'We’ll confirm availability, pricing, GST billing and EMI terms before purchase.',
        namePlaceholder: 'Your name', vehiclePlaceholder: 'Example: Maruti Swift 2018', batteryPlaceholder: 'Brand, model or a photo description', phonePlaceholder: 'Your phone number'
    },
    hi: {
        financeKicker: 'आसान भुगतान विकल्प', financeTitle: 'अपनी बैटरी EMI पर खरीदें',
        financeCopy: 'Bajaj Finance के माध्यम से EMI उपलब्ध है, पात्रता के अधीन। डाउन पेमेंट, अवधि, प्रोसेसिंग शुल्क और मासिक EMI के बारे में पूछें।',
        financePoint1: 'मासिक किस्तें', financePoint2: 'पात्रता की पुष्टि', financePoint3: 'खरीद से पहले शर्तों की जानकारी',
        emiCta: 'WhatsApp पर EMI अनुमान लें', enquiryKicker: 'त्वरित पूछताछ', enquiryTitle: 'बताएं आपको कौन-सी बैटरी चाहिए',
        enquiryCopy: 'कुछ जानकारी साझा करें और हम आपकी पूछताछ Om Sai Batteries के WhatsApp पर भेजेंगे।', languageLabel: 'भाषा',
        nameLabel: 'ग्राहक का नाम', vehicleLabel: 'वाहन का मेक और मॉडल', batteryLabel: 'पुरानी बैटरी की जानकारी', phoneLabel: 'फोन नंबर',
        emiNeedLabel: 'मुझे Bajaj Finance के माध्यम से EMI चाहिए', formCta: 'WhatsApp पर पूछताछ भेजें',
        formNote: 'खरीद से पहले उपलब्धता, कीमत, GST बिल और EMI की शर्तों की पुष्टि की जाएगी।',
        namePlaceholder: 'अपना नाम', vehiclePlaceholder: 'उदाहरण: Maruti Swift 2018', batteryPlaceholder: 'ब्रांड, मॉडल या फोटो का विवरण', phonePlaceholder: 'अपना फोन नंबर'
    },
    mr: {
        financeKicker: 'सोपा पेमेंट पर्याय', financeTitle: 'तुमची बॅटरी EMI वर खरेदी करा',
        financeCopy: 'Bajaj Finance मार्फत EMI उपलब्ध आहे, पात्रतेच्या अधीन. डाउन पेमेंट, कालावधी, प्रोसेसिंग फी आणि मासिक EMI बद्दल विचारा।',
        financePoint1: 'मासिक हप्ते', financePoint2: 'पात्रतेची खात्री', financePoint3: 'खरेदीपूर्वी अटींची माहिती',
        emiCta: 'WhatsApp वर EMI अंदाज मिळवा', enquiryKicker: 'त्वरित चौकशी', enquiryTitle: 'तुम्हाला कोणती बॅटरी हवी ते सांगा',
        enquiryCopy: 'काही माहिती शेअर करा आणि आम्ही तुमची चौकशी Om Sai Batteries च्या WhatsApp वर पाठवू.', languageLabel: 'भाषा',
        nameLabel: 'ग्राहकाचे नाव', vehicleLabel: 'वाहनाचा मेक आणि मॉडेल', batteryLabel: 'जुन्या बॅटरीची माहिती', phoneLabel: 'फोन नंबर',
        emiNeedLabel: 'मला Bajaj Finance मार्फत EMI पर्याय हवा आहे', formCta: 'WhatsApp वर चौकशी पाठवा',
        formNote: 'खरेदीपूर्वी उपलब्धता, किंमत, GST बिल आणि EMI अटींची खात्री केली जाईल.',
        namePlaceholder: 'तुमचे नाव', vehiclePlaceholder: 'उदाहरण: Maruti Swift 2018', batteryPlaceholder: 'ब्रँड, मॉडेल किंवा फोटोचे वर्णन', phonePlaceholder: 'तुमचा फोन नंबर'
    }
};
const setLanguage = (language) => {
    const copy = translations[language] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (copy[key]) element.textContent = copy[key];
    });
    document.querySelectorAll('[data-placeholder]').forEach((element) => {
        const key = element.dataset.placeholder;
        if (copy[key]) element.placeholder = copy[key];
    });
    document.querySelectorAll('.language-btn').forEach((button) => button.classList.toggle('active', button.dataset.language === language));
    document.documentElement.lang = language === 'hi' ? 'hi' : language === 'mr' ? 'mr' : 'en';
};
document.querySelectorAll('.language-btn').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(enquiryForm);
    const emi = data.get('emi') ? 'Yes' : 'No';
    const message = `Hello Om Sai Batteries, I want to enquire about a battery.%0A%0AName: ${encodeURIComponent(data.get('name'))}%0AVehicle: ${encodeURIComponent(data.get('vehicle') || 'Not provided')}%0AExisting battery: ${encodeURIComponent(data.get('battery') || 'Not provided')}%0APhone: ${encodeURIComponent(data.get('phone'))}%0AEMI through Bajaj Finance: ${emi}`;
    window.open(`https://wa.me/919270801701?text=${message}`, '_blank', 'noopener');
});
const productIcons = ['car-front', 'bike', 'house', 'zap', 'truck', 'search'];
document.querySelectorAll('.product .symbol').forEach((icon, index) => {
    icon.innerHTML = `<i data-lucide="${productIcons[index]}" class="icon"></i>`;
});
if (window.lucide) window.lucide.createIcons();
const buttons = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.product')];
buttons.forEach((button) => button.addEventListener('click', () => {
    buttons.forEach((item) => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter;
    cards.forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
}));
