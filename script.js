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
Object.assign(translations.en, {
    financeKicker: 'BAJAJ FINANCE EMI OPTION', zeroInterestBadge: '0% DOWN PAYMENT EMI', emiCta: 'Ask About EMI',
    financeTitle: '0% Down Payment EMI for Your Battery',
    financeCopy: 'Get a 0% down payment EMI option through Bajaj Finance, subject to eligibility and approved terms. Ask about interest rate, tenure, processing fee and monthly EMI.',
    languagePreferenceLabel: 'Preferred language', callTimeLabel: 'Preferred call time', oldExchangeLabel: 'I want to ask about old-battery exchange',
    conditionsKicker: 'BAJAJ FINANCE CONDITIONS', conditionsTitle: 'Before applying for 0% down payment EMI',
    conditionMinimum: 'Minimum purchase: Confirm the minimum amount with the shop or Bajaj Finance.',
    conditionTenure: 'Tenure: Available tenure options will be confirmed at enquiry.',
    conditionDocuments: 'Documents: Ask Bajaj Finance which documents are required for your application.',
    conditionFee: 'Processing fee: Confirm whether any processing or other charges apply.',
    conditionNote: '0% down payment does not necessarily mean zero interest or zero processing charges. Eligibility, tenure and final terms are subject to Bajaj Finance approval.',
    serviceKicker: 'WARRANTY & SERVICE', serviceTitle: 'Ask about support with your battery',
    serviceWarranty: 'Battery warranty: Warranty period and coverage depend on the brand and model.',
    serviceInstall: 'Installation/replacement: Ask about installation or replacement support.',
    serviceDelivery: 'Home delivery: Ask about delivery availability for your location.',
    serviceExchange: 'Old-battery exchange: Ask whether your old battery is eligible for exchange.',
    bringKicker: 'BEFORE YOU VISIT', bringTitle: 'What to bring',
    bringVehicle: "Vehicle registration details or your vehicle's make and model.",
    bringPhoto: 'A clear photo of your existing battery.',
    bringDocuments: 'Aadhaar/PAN or other documents requested by Bajaj Finance, if applying for EMI.',
    navProducts: 'Products', navHow: 'How it works', navEnquire: 'Enquire', navContact: 'Contact',
    catalogueKicker: 'BATTERY CATEGORIES', catalogueTitle: 'Find a battery for your needs',
    catalogueCopy: 'Choose a category to send an enquiry. Share your vehicle or existing battery details so the shop can help check compatibility, availability and price.',
    filterAll: 'All categories', filterCar: 'Car', filterTwoWheeler: 'Two-wheeler', filterInverter: 'Inverter & UPS', filterCommercial: 'Commercial',
    carTitle: 'Car Batteries', carCopy: 'Enquire about Amaron options for your car. Share the make, model and year for a compatibility check.',
    twoWheelerTitle: 'Two-Wheeler Batteries', twoWheelerCopy: 'Ask about options for your motorcycle or scooter. Share the vehicle make and model.',
    inverterTitle: 'Inverter Batteries', inverterCopy: 'Tell us your inverter details and backup requirement to enquire about suitable options.',
    upsTitle: 'UPS & Backup Batteries', upsCopy: 'Enquire about backup battery requirements for your UPS or equipment.',
    commercialTitle: 'Commercial Vehicle Batteries', commercialCopy: 'Contact us with your goods vehicle or commercial application details for an enquiry.',
    replacementTitle: 'Battery Replacement Help', replacementCopy: 'Not sure which battery fits? Send your old battery details or vehicle information for guidance.',
    confirmEnquiry: 'Confirm on enquiry', personalAssistance: 'Personal assistance', askWhatsapp: 'Ask on WhatsApp'
});
Object.assign(translations.hi, {
    financeKicker: 'BAJAJ FINANCE EMI विकल्प', zeroInterestBadge: '0% डाउन पेमेंट EMI',
    financeTitle: 'अपनी बैटरी 0% डाउन पेमेंट EMI पर खरीदें',
    financeCopy: 'Bajaj Finance के माध्यम से 0% डाउन पेमेंट EMI विकल्प पाएं, पात्रता और स्वीकृत शर्तों के अधीन। डाउन पेमेंट, अवधि, प्रोसेसिंग शुल्क और मासिक EMI के बारे में पूछें।',
    languagePreferenceLabel: 'पसंदीदा भाषा', callTimeLabel: 'पसंदीदा कॉल समय', oldExchangeLabel: 'पुरानी बैटरी बदलने के बारे में पूछना है',
    conditionsKicker: 'BAJAJ FINANCE की शर्तें', conditionsTitle: '0% डाउन पेमेंट EMI के लिए आवेदन करने से पहले',
    conditionMinimum: 'न्यूनतम खरीद: दुकान या Bajaj Finance से न्यूनतम राशि की पुष्टि करें।',
    conditionTenure: 'अवधि: उपलब्ध अवधि की पुष्टि पूछताछ के समय की जाएगी।',
    conditionDocuments: 'दस्तावेज़: अपने आवेदन के लिए Bajaj Finance से आवश्यक दस्तावेज़ पूछें।',
    conditionFee: 'प्रोसेसिंग शुल्क: किसी भी प्रोसेसिंग या अन्य शुल्क की पुष्टि करें।',
    conditionNote: '0% डाउन पेमेंट का मतलब हमेशा शून्य ब्याज या शून्य प्रोसेसिंग शुल्क नहीं होता। पात्रता, अवधि और अंतिम शर्तें Bajaj Finance की स्वीकृति के अधीन हैं।',
    serviceKicker: 'वारंटी और सेवा', serviceTitle: 'अपनी बैटरी के लिए सहायता के बारे में पूछें',
    serviceWarranty: 'बैटरी वारंटी: वारंटी अवधि और कवरेज ब्रांड और मॉडल पर निर्भर करते हैं।',
    serviceInstall: 'इंस्टॉलेशन/बदलाव: इंस्टॉलेशन या बैटरी बदलने की सहायता के बारे में पूछें।',
    serviceDelivery: 'होम डिलीवरी: अपने क्षेत्र के लिए डिलीवरी उपलब्धता पूछें।',
    serviceExchange: 'पुरानी बैटरी एक्सचेंज: पूछें कि आपकी पुरानी बैटरी एक्सचेंज के लिए योग्य है या नहीं।',
    bringKicker: 'आने से पहले', bringTitle: 'क्या साथ लाएं',
    bringVehicle: 'वाहन के रजिस्ट्रेशन विवरण या आपके वाहन का मेक और मॉडल।',
    bringPhoto: 'अपनी मौजूदा बैटरी की साफ फोटो।',
    bringDocuments: 'EMI के लिए आवेदन करने पर Aadhaar/PAN या Bajaj Finance द्वारा मांगे गए अन्य दस्तावेज़।',
    navProducts: 'उत्पाद', navHow: 'कैसे काम करता है', navEnquire: 'पूछताछ', navContact: 'संपर्क',
    catalogueKicker: 'बैटरी श्रेणियां', catalogueTitle: 'अपनी जरूरत के लिए बैटरी खोजें',
    catalogueCopy: 'पूछताछ भेजने के लिए श्रेणी चुनें। वाहन या पुरानी बैटरी की जानकारी साझा करें ताकि दुकान अनुकूलता, उपलब्धता और कीमत जांच सके।',
    filterAll: 'सभी श्रेणियां', filterCar: 'कार', filterTwoWheeler: 'दो-पहिया', filterInverter: 'इन्वर्टर और UPS', filterCommercial: 'वाणिज्यिक',
    carTitle: 'कार बैटरियां', carCopy: 'अपनी कार के लिए Amaron विकल्पों के बारे में पूछें। अनुकूलता जांच के लिए मेक, मॉडल और वर्ष साझा करें।',
    twoWheelerTitle: 'दो-पहिया बैटरियां', twoWheelerCopy: 'मोटरसाइकिल या स्कूटर के विकल्पों के बारे में पूछें। वाहन का मेक और मॉडल साझा करें।',
    inverterTitle: 'इन्वर्टर बैटरियां', inverterCopy: 'उपयुक्त विकल्पों के लिए अपने इन्वर्टर की जानकारी और बैकअप आवश्यकता बताएं।',
    upsTitle: 'UPS और बैकअप बैटरियां', upsCopy: 'अपने UPS या उपकरण के लिए बैकअप बैटरी की आवश्यकता के बारे में पूछें।',
    commercialTitle: 'वाणिज्यिक वाहन बैटरियां', commercialCopy: 'पूछताछ के लिए अपने मालवाहक वाहन या व्यावसायिक उपयोग की जानकारी भेजें।',
    replacementTitle: 'बैटरी बदलने में सहायता', replacementCopy: 'कौन-सी बैटरी सही है, पता नहीं? पुरानी बैटरी या वाहन की जानकारी भेजें।',
    confirmEnquiry: 'पूछताछ पर पुष्टि', personalAssistance: 'व्यक्तिगत सहायता', askWhatsapp: 'WhatsApp पर पूछें'
});
Object.assign(translations.mr, {
    financeKicker: 'BAJAJ FINANCE EMI पर्याय', zeroInterestBadge: '0% डाउन पेमेंट EMI',
    financeTitle: 'तुमची बॅटरी 0% डाउन पेमेंट EMI वर खरेदी करा',
    financeCopy: 'Bajaj Finance मार्फत 0% डाउन पेमेंट EMI पर्याय मिळवा, पात्रता आणि मंजूर अटींच्या अधीन. डाउन पेमेंट, कालावधी, प्रोसेसिंग फी आणि मासिक EMI बद्दल विचारा.',
    languagePreferenceLabel: 'पसंतीची भाषा', callTimeLabel: 'पसंतीची कॉल वेळ', oldExchangeLabel: 'जुनी बॅटरी एक्सचेंज बद्दल विचारायचे आहे',
    conditionsKicker: 'BAJAJ FINANCE च्या अटी', conditionsTitle: '0% डाउन पेमेंट EMI साठी अर्ज करण्यापूर्वी',
    conditionMinimum: 'किमान खरेदी: दुकान किंवा Bajaj Finance कडून किमान रकमेची खात्री करा.',
    conditionTenure: 'कालावधी: उपलब्ध कालावधीची माहिती चौकशीच्या वेळी दिली जाईल.',
    conditionDocuments: 'कागदपत्रे: अर्जासाठी Bajaj Finance कडून कोणती कागदपत्रे आवश्यक आहेत ते विचारा.',
    conditionFee: 'प्रोसेसिंग फी: प्रोसेसिंग किंवा इतर शुल्क लागू आहे का ते तपासा.',
    conditionNote: '0% डाउन पेमेंट म्हणजे नेहमी शून्य व्याज किंवा शून्य प्रोसेसिंग शुल्क असेलच असे नाही. पात्रता, कालावधी आणि अंतिम अटी Bajaj Finance च्या मंजुरीवर अवलंबून आहेत.',
    serviceKicker: 'वॉरंटी आणि सेवा', serviceTitle: 'तुमच्या बॅटरीसाठी मदतीबद्दल विचारा',
    serviceWarranty: 'बॅटरी वॉरंटी: वॉरंटीचा कालावधी आणि कव्हरेज ब्रँड व मॉडेलवर अवलंबून असते.',
    serviceInstall: 'इन्स्टॉलेशन/बदल: इन्स्टॉलेशन किंवा बॅटरी बदलण्याच्या मदतीबद्दल विचारा.',
    serviceDelivery: 'घरपोच सेवा: तुमच्या परिसरात डिलिव्हरी उपलब्ध आहे का ते विचारा.',
    serviceExchange: 'जुनी बॅटरी एक्सचेंज: तुमची जुनी बॅटरी एक्सचेंजसाठी पात्र आहे का ते विचारा.',
    bringKicker: 'भेट देण्यापूर्वी', bringTitle: 'काय सोबत आणावे',
    bringVehicle: 'वाहनाचे रजिस्ट्रेशन तपशील किंवा तुमच्या वाहनाचा मेक आणि मॉडेल.',
    bringPhoto: 'तुमच्या सध्याच्या बॅटरीचा स्पष्ट फोटो.',
    bringDocuments: 'EMI साठी अर्ज करत असल्यास Aadhaar/PAN किंवा Bajaj Finance ने मागितलेली इतर कागदपत्रे.',
    navProducts: 'उत्पादने', navHow: 'कसे काम करते', navEnquire: 'चौकशी', navContact: 'संपर्क',
    catalogueKicker: 'बॅटरी श्रेणी', catalogueTitle: 'तुमच्या गरजेसाठी बॅटरी शोधा',
    catalogueCopy: 'चौकशी पाठवण्यासाठी श्रेणी निवडा. वाहन किंवा जुन्या बॅटरीची माहिती शेअर करा, म्हणजे दुकान अनुकूलता, उपलब्धता आणि किंमत तपासू शकेल.',
    filterAll: 'सर्व श्रेणी', filterCar: 'कार', filterTwoWheeler: 'दुचाकी', filterInverter: 'इन्व्हर्टर आणि UPS', filterCommercial: 'व्यावसायिक',
    carTitle: 'कार बॅटरी', carCopy: 'तुमच्या कारसाठी Amaron पर्यायांबद्दल विचारा. अनुकूलता तपासण्यासाठी मेक, मॉडेल आणि वर्ष शेअर करा.',
    twoWheelerTitle: 'दुचाकी बॅटरी', twoWheelerCopy: 'मोटरसायकल किंवा स्कूटरसाठी पर्यायांबद्दल विचारा. वाहनाचा मेक आणि मॉडेल शेअर करा.',
    inverterTitle: 'इन्व्हर्टर बॅटरी', inverterCopy: 'योग्य पर्यायांसाठी तुमच्या इन्व्हर्टरची माहिती आणि बॅकअपची गरज सांगा.',
    upsTitle: 'UPS आणि बॅकअप बॅटरी', upsCopy: 'तुमच्या UPS किंवा उपकरणासाठी बॅकअप बॅटरीच्या गरजेबद्दल विचारा.',
    commercialTitle: 'व्यावसायिक वाहन बॅटरी', commercialCopy: 'चौकशीसाठी तुमच्या मालवाहू वाहनाची किंवा व्यावसायिक वापराची माहिती पाठवा.',
    replacementTitle: 'बॅटरी बदलण्यास मदत', replacementCopy: 'कोणती बॅटरी योग्य आहे हे कळत नाही? जुन्या बॅटरीची किंवा वाहनाची माहिती पाठवा.',
    confirmEnquiry: 'चौकशीवर खात्री', personalAssistance: 'वैयक्तिक मदत', askWhatsapp: 'WhatsApp वर विचारा'
});
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
    document.querySelectorAll('.avail').forEach((element) => {
        element.textContent = element.classList.contains('personal') ? copy.personalAssistance : copy.confirmEnquiry;
    });
    document.querySelectorAll('.ask').forEach((element) => {
        const icon = element.querySelector('svg');
        element.textContent = '';
        if (icon) element.appendChild(icon);
        const label = document.createElement('span');
        label.textContent = copy.askWhatsapp;
        element.appendChild(label);
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
    const oldExchange = data.get('oldExchange') ? 'Yes' : 'No';
    const message = `Hello Om Sai Batteries, I want to enquire about a battery.%0A%0AName: ${encodeURIComponent(data.get('name'))}%0AVehicle: ${encodeURIComponent(data.get('vehicle') || 'Not provided')}%0AExisting battery: ${encodeURIComponent(data.get('battery') || 'Not provided')}%0APhone: ${encodeURIComponent(data.get('phone'))}%0APreferred language: ${encodeURIComponent(data.get('preferredLanguage'))}%0APreferred call time: ${encodeURIComponent(data.get('callTime'))}%0AEMI through Bajaj Finance: ${emi}%0AOld-battery exchange: ${oldExchange}`;
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
