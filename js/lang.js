const translations = {
    ar: {
        // عام
        page_title: 'مطعم الأصالة | مأكولات كويتية',
        brand_name: 'مطعم الأصالة',
        nav_home: 'الرئيسية',
        nav_menu: 'القائمة',
        nav_gallery: 'المعرض',
        nav_booking: 'حجز',
        nav_contact: 'تواصل',
        
        // القسم الرئيسي
        hero_badge: 'مأكولات كويتية أصيلة',
        hero_title: 'طعم <span class="accent">الأصالة</span> في كل لقمة',
        hero_desc: 'نقدم أشهى المأكولات الكويتية والعربية في أجواء تراثية دافئة.',
        hero_btn1: 'تصفح القائمة',
        hero_btn2: 'احجز طاولة',
        stat_years: 'سنوات',
        stat_dishes: 'طبق',
        stat_rating: 'تقييم',
        
        // القائمة
        menu_title: 'قائمة الطعام',
        menu_sub: 'أشهى المأكولات الكويتية والعربية',
        tab_breakfast: 'إفطار',
        tab_lunch: 'غداء',
        tab_dinner: 'عشاء',
        tab_drinks: 'مشروبات',
        
        // المعرض
        gallery_title: 'معرض الصور',
        gallery_sub: 'أجواء مطعمنا وأطباقنا',
        
        
        // الحجز
        booking_title: 'احجز طاولة',
        booking_sub: 'املأ البيانات وسنؤكد حجزك',
        form_name: 'الاسم',
        form_phone: 'الجوال',
        form_date: 'التاريخ',
        form_time: 'الوقت',
        form_guests: 'عدد الأشخاص',
        form_area: 'المنطقة',
        form_notes: 'ملاحظات',
        form_submit: 'تأكيد',
        area_indoor: 'داخلي',
        area_outdoor: 'خارجي',
        area_arabic: 'مجلس عربي',
        guests_1: '1 شخص',
        guests_2: '2 أشخاص',
        guests_3: '3 أشخاص',
        guests_4: '4 أشخاص',
        guests_5: '5+ أشخاص',
        
        // التواصل
        contact_title: 'تواصل معنا',
        contact_sub: 'نحن سعداء بخدمتك',
        contact_phone: 'اتصل بنا',
        contact_address: 'العنوان',
        contact_hours: 'ساعات العمل',
        address: 'الشارع الرئيسي، المدينة',
        hours: '6 صباحاً – 1 صباحاً',
        
        // التذييل
        copyright: '© 2026 مطعم الأصالة | جميع الحقوق محفوظة',
        
        // السلة
        cart_title: 'طلباتي 🛒',
        cart_empty: 'السلة فارغة',
        cart_total: 'الإجمالي:',
        cart_send: 'إرسال الطلب 📱',
        customer_name_label: '👤 اسمك الكريم:',
        customer_name_placeholder: 'أدخل اسمك',
        clear_all_btn: '🗑️ حذف الكل',
        
        // الإفطار
        b1_name: 'بيض عيون', b1_desc: 'بيض مقلي مع خبز عربي',
        b2_name: 'شكشوكة', b2_desc: 'بيض مع طماطم وفلفل',
        b3_name: 'فول مدمس', b3_desc: 'فول مع طحينة وزيت',
        b4_name: 'حمص', b4_desc: 'حمص بالطحينة وزيت زيتون',
        b5_name: 'جبنة عكاوي', b5_desc: 'جبنة بيضاء طازجة',
        b6_name: 'زعتر وزيت', b6_desc: 'زعتر فلسطيني مع زيت',
        b7_name: 'لبنة', b7_desc: 'لبنة كويتية طازجة',
        b8_name: 'عسل ومربى', b8_desc: 'عسل طبيعي مع مربى',
        b9_name: 'كبدة', b9_desc: 'كبدة دجاج مع بصل',
        b10_name: 'مناقيش', b10_desc: 'مناقيش زعتر أو جبنة',
        b11_name: 'خبز محمر', b11_desc: 'خبز كويتي مع بيض',
        b12_name: 'هريس', b12_desc: 'هريس كويتي باللحم',
        
        // الغداء
        l1_name: 'مجبوس لحم', l1_desc: 'أرز بسمتي مع لحم',
        l2_name: 'مجبوس دجاج', l2_desc: 'أرز بسمتي مع دجاج',
        l3_name: 'برياني', l3_desc: 'برياني لحم أو دجاج',
        l4_name: 'كبسة', l4_desc: 'كبسة لحم مع مكسرات',
        l5_name: 'مقلوبة', l5_desc: 'مقلوبة باذنجان ودجاج',
        l6_name: 'منسف', l6_desc: 'منسف لحم مع جميد',
        l7_name: 'صيادية', l7_desc: 'أرز مع سمك فيلية',
        l8_name: 'كباب', l8_desc: 'كباب لحم مشوي',
        l9_name: 'مشاوي', l9_desc: 'مشاوي لحم ودجاج',
        l10_name: 'ملوخية', l10_desc: 'ملوخية خضراء مع دجاج',
        l11_name: 'بامية', l11_desc: 'بامية مع لحم',
        l12_name: 'ورق عنب', l12_desc: 'ورق عنب محشي',
        
        // العشاء
        d1_name: 'مشاوي مشكلة', d1_desc: 'لحم، دجاج، كباب',
        d2_name: 'سمك مشوي', d2_desc: 'سمك فيلية مشوي',
        d3_name: 'روبيان', d3_desc: 'روبيان مشوي بالزبدة',
        d4_name: 'دجاج تكا', d4_desc: 'دجاج متبل مشوي',
        d5_name: 'ستيك', d5_desc: 'ستيك لحم مع صوص',
        d6_name: 'لحم بعجين', d6_desc: 'لحم مفروم مع عجين',
        d7_name: 'معجنات', d7_desc: 'معجنات مشكلة',
        d8_name: 'شاورما', d8_desc: 'شاورما لحم أو دجاج',
        d9_name: 'فلافل', d9_desc: 'فلافل مع طحينة',
        d10_name: 'حمص شامي', d10_desc: 'حمص مع لحم مفروم',
        d11_name: 'متبل', d11_desc: 'متبل باذنجان',
        d12_name: 'فتوش', d12_desc: 'سلطة فتوش',
        
        // المشروبات
        dr1_name: 'قهوة عربية', dr1_desc: 'قهوة مع هيل',
        dr2_name: 'شاي كرك', dr2_desc: 'شاي مع حليب',
        dr3_name: 'عصير برتقال', dr3_desc: 'عصير طازج',
        dr4_name: 'عصير ليمون', dr4_desc: 'ليمون مع نعناع',
        dr5_name: 'كوكتيل', dr5_desc: 'كوكتيل فواكه',
        dr6_name: 'سحلب', dr6_desc: 'سحلب مع قرفة',
        dr7_name: 'كركديه', dr7_desc: 'كركديه بارد',
        dr8_name: 'قمر الدين', dr8_desc: 'مشروب قمر الدين',
        dr9_name: 'تمر هندي', dr9_desc: 'تمر هندي بارد',
        dr10_name: 'لبن', dr10_desc: 'لبن طازج',
        dr11_name: 'زنجبيل', dr11_desc: 'زنجبيل بالعسل',
        dr12_name: 'نعناع', dr12_desc: 'شاي نعناع'
    },
    
    en: {
        // General
        page_title: 'Al-Asala | Kuwaiti Cuisine',
        brand_name: 'Al-Asala',
        nav_home: 'Home',
        nav_menu: 'Menu',
        nav_gallery: 'Gallery',
        nav_booking: 'Reserve',
        nav_contact: 'Contact',
        
        // Hero
        hero_badge: 'Authentic Kuwaiti Cuisine',
        hero_title: 'Taste of <span class="accent">Authenticity</span>',
        hero_desc: 'Finest Kuwaiti & Arabic cuisine in a warm heritage atmosphere.',
        hero_btn1: 'View Menu',
        hero_btn2: 'Book Table',
        stat_years: 'Years',
        stat_dishes: 'Dishes',
        stat_rating: 'Rating',
        
        // Menu
        menu_title: 'Our Menu',
        menu_sub: 'Finest Kuwaiti & Arabic dishes',
        tab_breakfast: 'Breakfast',
        tab_lunch: 'Lunch',
        tab_dinner: 'Dinner',
        tab_drinks: 'Drinks',
        
        // Gallery
        gallery_title: 'Gallery',
        gallery_sub: 'Our atmosphere & dishes',
        // Booking
        booking_title: 'Book a Table',
        booking_sub: 'Fill details & we will confirm',
        form_name: 'Name',
        form_phone: 'Phone',
        form_date: 'Date',
        form_time: 'Time',
        form_guests: 'Guests',
        form_area: 'Area',
        form_notes: 'Notes',
        form_submit: 'Confirm',
        area_indoor: 'Indoor',
        area_outdoor: 'Outdoor',
        area_arabic: 'Arabic Majlis',
        guests_1: '1 Person',
        guests_2: '2 Persons',
        guests_3: '3 Persons',
        guests_4: '4 Persons',
        guests_5: '5+ Persons',
        
        // Contact
        contact_title: 'Contact Us',
        contact_sub: 'We are happy to serve you',
        contact_phone: 'Call Us',
        contact_address: 'Address',
        contact_hours: 'Hours',
        address: 'Main Street, City',
        hours: '6 AM – 1 AM',
        
        // Footer
        copyright: '© 2026 Al-Asala | All Rights Reserved',
        
        // Cart
        cart_title: 'My Order 🛒',
        cart_empty: 'Cart is empty',
        cart_total: 'Total:',
        cart_send: 'Send Order 📱',
        customer_name_label: '👤 Your Name:',
        customer_name_placeholder: 'Enter your name',
        clear_all_btn: '🗑️ Clear All',
        
        // Breakfast
        b1_name: 'Fried Eggs', b1_desc: 'Fried eggs with Arabic bread',
        b2_name: 'Shakshuka', b2_desc: 'Eggs with tomatoes & peppers',
        b3_name: 'Fava Beans', b3_desc: 'Fava beans with tahini',
        b4_name: 'Hummus', b4_desc: 'Hummus with olive oil',
        b5_name: 'Akkawi Cheese', b5_desc: 'Fresh white cheese',
        b6_name: 'Zaatar & Oil', b6_desc: 'Zaatar with olive oil',
        b7_name: 'Labneh', b7_desc: 'Fresh labneh with olives',
        b8_name: 'Honey & Jam', b8_desc: 'Natural honey with jam',
        b9_name: 'Liver', b9_desc: 'Chicken liver with onions',
        b10_name: 'Manakish', b10_desc: 'Zaatar or cheese manakish',
        b11_name: 'Toasted Bread', b11_desc: 'Toasted bread with eggs',
        b12_name: 'Harees', b12_desc: 'Authentic harees with meat',
        
        // Lunch
        l1_name: 'Lamb Majboos', l1_desc: 'Basmati rice with lamb',
        l2_name: 'Chicken Majboos', l2_desc: 'Basmati rice with chicken',
        l3_name: 'Biryani', l3_desc: 'Lamb or chicken biryani',
        l4_name: 'Kabsa', l4_desc: 'Lamb kabsa with nuts',
        l5_name: 'Maqluba', l5_desc: 'Eggplant maqluba',
        l6_name: 'Mansaf', l6_desc: 'Lamb mansaf with jameed',
        l7_name: 'Sayadieh', l7_desc: 'Rice with fish fillet',
        l8_name: 'Kebab', l8_desc: 'Grilled lamb kebab',
        l9_name: 'Mixed Grill', l9_desc: 'Mixed lamb & chicken grill',
        l10_name: 'Molokhia', l10_desc: 'Green molokhia',
        l11_name: 'Okra', l11_desc: 'Okra stew with lamb',
        l12_name: 'Stuffed Grape Leaves', l12_desc: 'Stuffed grape leaves',
        
        // Dinner
        d1_name: 'Mixed Grill', d1_desc: 'Lamb, chicken, kebab',
        d2_name: 'Grilled Fish', d2_desc: 'Grilled fish fillet',
        d3_name: 'Shrimp', d3_desc: 'Butter grilled shrimp',
        d4_name: 'Chicken Tikka', d4_desc: 'Spiced grilled chicken',
        d5_name: 'Steak', d5_desc: 'Beef steak with sauce',
        d6_name: 'Lahm Bi Ajeen', d6_desc: 'Minced meat on dough',
        d7_name: 'Pastries', d7_desc: 'Mixed pastries',
        d8_name: 'Shawarma', d8_desc: 'Lamb or chicken shawarma',
        d9_name: 'Falafel', d9_desc: 'Falafel with tahini',
        d10_name: 'Shami Hummus', d10_desc: 'Hummus with minced meat',
        d11_name: 'Moutabal', d11_desc: 'Eggplant moutabal',
        d12_name: 'Fattoush', d12_desc: 'Fattoush salad',
        
        // Drinks
        dr1_name: 'Arabic Coffee', dr1_desc: 'Coffee with cardamom',
        dr2_name: 'Karak Tea', dr2_desc: 'Tea with milk',
        dr3_name: 'Orange Juice', dr3_desc: 'Fresh orange juice',
        dr4_name: 'Lemonade', dr4_desc: 'Lemon with mint',
        dr5_name: 'Cocktail', dr5_desc: 'Fruit cocktail',
        dr6_name: 'Sahlab', dr6_desc: 'Sahlab with cinnamon',
        dr7_name: 'Hibiscus', dr7_desc: 'Cold hibiscus',
        dr8_name: 'Qamar Al-Din', dr8_desc: 'Apricot drink',
        dr9_name: 'Tamarind', dr9_desc: 'Cold tamarind',
        dr10_name: 'Yogurt', dr10_desc: 'Fresh yogurt',
        dr11_name: 'Ginger', dr11_desc: 'Ginger with honey',
        dr12_name: 'Mint', dr12_desc: 'Fresh mint tea'
    },
    
    ur: {
        // عمومی
        page_title: 'الاصالہ | کویتی کھانا',
        brand_name: 'الاصالہ',
        nav_home: 'ہوم',
        nav_menu: 'مینو',
        nav_gallery: 'گیلری',
        nav_booking: 'بکنگ',
        nav_contact: 'رابطہ',
        
        // ہیرو سیکشن
        hero_badge: 'مستند کویتی کھانا',
        hero_title: '<span class="accent">اصالت</span> کا ذائقہ',
        hero_desc: 'عربی اور کویتی کھانوں کو گرم ماحول میں پیش کرتے ہیں۔',
        hero_btn1: 'مینو دیکھیں',
        hero_btn2: 'بک کریں',
        stat_years: 'سال',
        stat_dishes: 'ڈشز',
        stat_rating: 'ریٹنگ',
        
        // مینو
        menu_title: 'ہمارا مینو',
        menu_sub: 'بہترین کویتی اور عربی پکوان',
        tab_breakfast: 'ناشتہ',
        tab_lunch: 'دوپہر',
        tab_dinner: 'رات',
        tab_drinks: 'مشروبات',
        
        // گیلری
        gallery_title: 'گیلری',
        gallery_sub: 'ہمارا ماحول اور پکوان',
        
        // بکنگ
        booking_title: 'بک کریں',
        booking_sub: 'تفصیلات بھریں، ہم تصدیق کریں گے',
        form_name: 'نام',
        form_phone: 'فون',
        form_date: 'تاریخ',
        form_time: 'وقت',
        form_guests: 'مہمان',
        form_area: 'علاقہ',
        form_notes: 'نوٹس',
        form_submit: 'تصدیق',
        area_indoor: 'اندرونی',
        area_outdoor: 'بیرونی',
        area_arabic: 'عربی مجلس',
        guests_1: '1 شخص',
        guests_2: '2 افراد',
        guests_3: '3 افراد',
        guests_4: '4 افراد',
        guests_5: '5+ افراد',
        
        // رابطہ
        contact_title: 'رابطہ کریں',
        contact_sub: 'ہم آپ کی خدمت میں خوش ہیں',
        contact_phone: 'فون کریں',
        contact_address: 'پتہ',
        contact_hours: 'اوقات',
        address: 'مرکزی سڑک، شہر',
        hours: 'صبح 6 – رات 1',
        
        // فوٹر
        copyright: '© 2026 الاصالہ | جملہ حقوق محفوظ',
        
        // کارٹ
        cart_title: 'میری آرڈر 🛒',
        cart_empty: 'کارٹ خالی',
        cart_total: 'کل:',
        cart_send: 'آرڈر بھیجیں 📱',
        customer_name_label: '👤 آپ کا نام:',
        customer_name_placeholder: 'اپنا نام درج کریں',
        clear_all_btn: '🗑️ سب حذف کریں',
        
        // ناشتہ
        b1_name: 'انڈے', b1_desc: 'روٹی کے ساتھ تلے انڈے',
        b2_name: 'شکشوکہ', b2_desc: 'ٹماٹر اور مرچ کے ساتھ انڈے',
        b3_name: 'فول مدمس', b3_desc: 'طحینہ کے ساتھ فول',
        b4_name: 'حمص', b4_desc: 'زیتون کے تیل کے ساتھ حمص',
        b5_name: 'عکاوی پنیر', b5_desc: 'تازہ سفید پنیر',
        b6_name: 'زعتر و زیت', b6_desc: 'زیتون کے تیل کے ساتھ زعتر',
        b7_name: 'لبنہ', b7_desc: 'تازہ لبنہ',
        b8_name: 'شہد و مربہ', b8_desc: 'قدرتی شہد کے ساتھ مربہ',
        b9_name: 'کلیجی', b9_desc: 'پیاز کے ساتھ کلیجی',
        b10_name: 'مناقیش', b10_desc: 'زعتر اور پنیر مناقیش',
        b11_name: 'ٹوسٹڈ بریڈ', b11_desc: 'انڈے کے ساتھ کویتی روٹی',
        b12_name: 'ہریس', b12_desc: 'مستند کویتی ہریس',
        
        // دوپہر
        l1_name: 'مجبوس گوشت', l1_desc: 'گوشت کے ساتھ چاول',
        l2_name: 'مجبوس چکن', l2_desc: 'چکن کے ساتھ چاول',
        l3_name: 'بریانی', l3_desc: 'گوشت یا چکن بریانی',
        l4_name: 'کبسہ', l4_desc: 'مکسرات کے ساتھ کبسہ',
        l5_name: 'مقلوبہ', l5_desc: 'بینگن مقلوبہ',
        l6_name: 'منسف', l6_desc: 'جمید کے ساتھ منسف',
        l7_name: 'صیادیہ', l7_desc: 'مچھلی کے ساتھ چاول',
        l8_name: 'کباب', l8_desc: 'گرل شدہ کباب',
        l9_name: 'مشاوی', l9_desc: 'گوشت اور چکن گرل',
        l10_name: 'ملوخیہ', l10_desc: 'سبز ملوخیہ',
        l11_name: 'باميہ', l11_desc: 'گوشت کے ساتھ باميہ',
        l12_name: 'وارق عنب', l12_desc: 'بھرے انگور کے پتے',
        
        // رات
        d1_name: 'مکسڈ گرل', d1_desc: 'گوشت، چکن، کباب',
        d2_name: 'گرل فش', d2_desc: 'گرل مچھلی',
        d3_name: 'جھینگے', d3_desc: 'گرل جھینگے',
        d4_name: 'چکن تکہ', d4_desc: 'مصالحہ دار گرل چکن',
        d5_name: 'سٹیک', d5_desc: 'سوس کے ساتھ سٹیک',
        d6_name: 'لحم بعجین', d6_desc: 'آٹے پر قیمہ',
        d7_name: 'پیسٹریز', d7_desc: 'مکسڈ پیسٹریز',
        d8_name: 'شاورما', d8_desc: 'گوشت یا چکن شاورما',
        d9_name: 'فلافل', d9_desc: 'طحینہ کے ساتھ فلافل',
        d10_name: 'شامی حمص', d10_desc: 'قیمہ کے ساتھ حمص',
        d11_name: 'متبل', d11_desc: 'بینگن متبل',
        d12_name: 'فتوش', d12_desc: 'فتوش سلاد',
        
        // مشروبات
        dr1_name: 'عربی کافی', dr1_desc: 'الائچی کے ساتھ کافی',
        dr2_name: 'کَرَک چائے', dr2_desc: 'دودھ کے ساتھ چائے',
        dr3_name: 'سنتری کا جوس', dr3_desc: 'تازہ سنتری کا رس',
        dr4_name: 'لیموں پانی', dr4_desc: 'پودینہ کے ساتھ لیموں',
        dr5_name: 'کوکٹیل', dr5_desc: 'پھلوں کا کوکٹیل',
        dr6_name: 'سحلب', dr6_desc: 'دار چینی کے ساتھ سحلب',
        dr7_name: 'گلخیرا', dr7_desc: 'ٹھنڈا گلخیرا',
        dr8_name: 'قمر الدین', dr8_desc: 'خوبانی کا مشروب',
        dr9_name: 'تمر ہندی', dr9_desc: 'ٹھنڈا تمر ہندی',
        dr10_name: 'دہی', dr10_desc: 'تازہ دہی',
        dr11_name: 'ادرک', dr11_desc: 'شہد کے ساتھ ادرک',
        dr12_name: 'پودینہ', dr12_desc: 'پودینہ کی چائے'
    }
};

let currentLang = 'ar';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (key === 'hero_title') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    document.querySelectorAll('select option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            option.textContent = translations[lang][key];
        }
    });
    
    // تحديث حقل اسم العميل
    const nameLabel = document.getElementById('customerNameLabel');
    if (nameLabel) nameLabel.textContent = translations[lang].customer_name_label;
    
    const nameInput = document.getElementById('customerName');
    if (nameInput) nameInput.placeholder = translations[lang].customer_name_placeholder;
    
    const clearBtn = document.getElementById('clearAllBtn');
    if (clearBtn) clearBtn.textContent = translations[lang].clear_all_btn;
    
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = lang;
    
    localStorage.setItem('lang', lang);
    
    if (typeof currentMenuCategory !== 'undefined') {
        showMenu(currentMenuCategory, currentMenuPage);
    }
    if (typeof updateCartDisplay === 'function') updateCartDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && translations[savedLang]) setLanguage(savedLang);
    else setLanguage('ar');
    
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
    }
});
