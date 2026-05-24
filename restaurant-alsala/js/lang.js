const translations = {
    ar: {
        page_title: 'مطعم الأصالة | مأكولات كويتية',
        brand_name: 'مطعم الأصالة',
        nav_home: 'الرئيسية', nav_menu: 'القائمة', nav_gallery: 'المعرض', nav_booking: 'حجز طاولة', nav_contact: 'تواصل',
        hero_badge: 'مأكولات كويتية أصيلة', hero_title: 'طعم <span class="accent">الأصالة</span> في كل لقمة',
        hero_desc: 'نقدم أشهى المأكولات الكويتية والعربية في أجواء تراثية دافئة.',
        hero_btn1: 'تصفح القائمة', hero_btn2: 'احجز طاولة',
        stat_years: 'عام خبرة', stat_dishes: 'طبق', stat_rating: 'تقييم',
        menu_title: 'قائمة الطعام', menu_sub: 'أشهى المأكولات الكويتية والعربية',
        tab_breakfast: 'إفطار', tab_lunch: 'غداء', tab_dinner: 'عشاء', tab_drinks: 'مشروبات',
        gallery_title: 'معرض الصور', gallery_sub: 'أجواء مطعمنا وأطباقنا',
        gal1: 'صالة المطعم', gal2: 'المجلس العربي', gal3: 'أطباقنا', gal4: 'المطبخ',
        booking_title: 'احجز طاولة', booking_sub: 'املأ البيانات وسنؤكد حجزك فوراً',
        form_name: 'الاسم', form_phone: 'رقم الجوال', form_date: 'التاريخ', form_time: 'الوقت',
        form_guests: 'عدد الأشخاص', form_area: 'المنطقة', form_notes: 'ملاحظات', form_submit: 'تأكيد الحجز',
        area_indoor: 'داخلي', area_outdoor: 'خارجي', area_arabic: 'مجلس عربي',
        contact_title: 'تواصل معنا', contact_sub: 'نحن سعداء بخدمتك',
        contact_phone: 'اتصل بنا', contact_address: 'العنوان', contact_hours: 'ساعات العمل',
        address: 'الكويت، حولي، شارع بيروت', hours: '6 صباحاً – 12 منتصف الليل',
        copyright: '© 2025 مطعم الأصالة. قالب من <strong>موقعك</strong> – Mawqeak',
        // أطباق الإفطار
        b1_name:'بيض عيون', b1_desc:'بيض مقلي مع خبز', b2_name:'شكشوكة', b2_desc:'بيض مع طماطم وفلفل',
        b3_name:'فول مدمس', b3_desc:'فول مع طحينة', b4_name:'حمص', b4_desc:'حمص مع زيت زيتون',
        b5_name:'جبنة عكاوي', b5_desc:'جبنة بيضاء طازجة', b6_name:'زعتر وزيت', b6_desc:'زعتر فلسطيني مع زيت',
        b7_name:'لبنة', b7_desc:'لبنة كويتية طازجة', b8_name:'عسل ومربى', b8_desc:'عسل طبيعي مع مربى',
        b9_name:'كبدة', b9_desc:'كبدة طازجة مع بصل', b10_name:'مناقيش', b10_desc:'مناقيش زعتر وجبنة',
        b11_name:'خبز محمر', b11_desc:'خبز كويتي مع بيض', b12_name:'هريس', b12_desc:'هريس كويتي أصيل',
        // أطباق الغداء
        l1_name:'مجبوس لحم', l1_desc:'أرز مع لحم كويتي', l2_name:'مجبوس دجاج', l2_desc:'أرز مع دجاج',
        l3_name:'برياني', l3_desc:'برياني لحم أو دجاج', l4_name:'كبسة', l4_desc:'كبسة لحم مع مكسرات',
        l5_name:'مقلوبة', l5_desc:'مقلوبة باذنجان', l6_name:'منسف', l6_desc:'منسف لحم مع جميد',
        l7_name:'صيادية', l7_desc:'أرز مع سمك', l8_name:'كباب', l8_desc:'كباب لحم مشوي',
        l9_name:'مشاوي', l9_desc:'مشاوي لحم ودجاج', l10_name:'ملوخية', l10_desc:'ملوخية خضراء',
        l11_name:'بامية', l11_desc:'بامية مع لحم', l12_name:'ورق عنب', l12_desc:'ورق عنب محشي',
        // أطباق العشاء
        d1_name:'مشاوي مشكلة', d1_desc:'لحم، دجاج، كباب', d2_name:'سمك مشوي', d2_desc:'سمك طازج مع أرز',
        d3_name:'روبيان', d3_desc:'روبيان مشوي', d4_name:'دجاج تكا', d4_desc:'دجاج متبل مشوي',
        d5_name:'ستيك', d5_desc:'ستيك لحم مع صوص', d6_name:'لحم بعجين', d6_desc:'لحم مفروم مع عجين',
        d7_name:'معجنات', d7_desc:'معجنات مشكلة', d8_name:'شاورما', d8_desc:'شاورما لحم أو دجاج',
        d9_name:'فلافل', d9_desc:'فلافل مع طحينة', d10_name:'حمص شامي', d10_desc:'حمص مع لحم',
        d11_name:'متبل', d11_desc:'متبل باذنجان', d12_name:'فتوش', d12_desc:'سلطة فتوش',
        // مشروبات
        dr1_name:'قهوة عربية', dr1_desc:'قهوة مع هيل', dr2_name:'شاي كرك', dr2_desc:'شاي مع حليب',
        dr3_name:'عصير برتقال', dr3_desc:'عصير طازج', dr4_name:'عصير ليمون', dr4_desc:'ليمون مع نعناع',
        dr5_name:'كوكتيل', dr5_desc:'كوكتيل فواكه', dr6_name:'سحلب', dr6_desc:'سحلب مع قرفة',
        dr7_name:'كركديه', dr7_desc:'كركديه بارد', dr8_name:'قمر الدين', dr8_desc:'مشروب قمر الدين',
        dr9_name:'تمر هندي', dr9_desc:'تمر هندي بارد', dr10_name:'لبن', dr10_desc:'لبن طازج',
        dr11_name:'زنجبيل', dr11_desc:'مشروب زنجبيل', dr12_name:'نعناع', dr12_desc:'شاي نعناع'
    },
    en: {
        page_title: 'Al-Asala Restaurant | Kuwaiti Cuisine',
        brand_name: 'Al-Asala Restaurant',
        nav_home: 'Home', nav_menu: 'Menu', nav_gallery: 'Gallery', nav_booking: 'Reserve', nav_contact: 'Contact',
        hero_badge: 'Authentic Kuwaiti Cuisine', hero_title: 'Taste of <span class="accent">Authenticity</span>',
        hero_desc: 'Serving the finest Kuwaiti and Arabic cuisine in a warm heritage atmosphere.',
        hero_btn1: 'View Menu', hero_btn2: 'Book a Table',
        stat_years: 'Years Exp.', stat_dishes: 'Dishes', stat_rating: 'Rating',
        menu_title: 'Our Menu', menu_sub: 'The finest Kuwaiti and Arabic dishes',
        tab_breakfast: 'Breakfast', tab_lunch: 'Lunch', tab_dinner: 'Dinner', tab_drinks: 'Drinks',
        gallery_title: 'Gallery', gallery_sub: 'Our restaurant atmosphere and dishes',
        gal1: 'Dining Hall', gal2: 'Arabic Majlis', gal3: 'Our Dishes', gal4: 'Kitchen',
        booking_title: 'Book a Table', booking_sub: 'Fill in your details and we will confirm immediately',
        form_name: 'Name', form_phone: 'Phone', form_date: 'Date', form_time: 'Time',
        form_guests: 'Guests', form_area: 'Area', form_notes: 'Notes', form_submit: 'Confirm',
        area_indoor: 'Indoor', area_outdoor: 'Outdoor', area_arabic: 'Arabic Majlis',
        contact_title: 'Contact Us', contact_sub: 'We are happy to serve you',
        contact_phone: 'Call Us', contact_address: 'Address', contact_hours: 'Working Hours',
        address: 'Kuwait, Hawally, Beirut Street', hours: '6 AM – 12 Midnight',
        copyright: '© 2025 Al-Asala Restaurant. Template by <strong>Mawqeak</strong>',
        // Breakfast
        b1_name:'Fried Eggs', b1_desc:'Fried eggs with bread', b2_name:'Shakshuka', b2_desc:'Eggs with tomatoes & peppers',
        b3_name:'Fava Beans', b3_desc:'Fava beans with tahini', b4_name:'Hummus', b4_desc:'Hummus with olive oil',
        b5_name:'Akkawi Cheese', b5_desc:'Fresh white cheese', b6_name:'Zaatar & Oil', b6_desc:'Palestinian zaatar with oil',
        b7_name:'Labneh', b7_desc:'Fresh Kuwaiti labneh', b8_name:'Honey & Jam', b8_desc:'Natural honey with jam',
        b9_name:'Liver', b9_desc:'Fresh liver with onions', b10_name:'Manakish', b10_desc:'Zaatar and cheese manakish',
        b11_name:'Toasted Bread', b11_desc:'Kuwaiti bread with eggs', b12_name:'Harees', b12_desc:'Authentic Kuwaiti harees',
        // Lunch
        l1_name:'Lamb Majboos', l1_desc:'Rice with Kuwaiti lamb', l2_name:'Chicken Majboos', l2_desc:'Rice with chicken',
        l3_name:'Biryani', l3_desc:'Lamb or chicken biryani', l4_name:'Kabsa', l4_desc:'Lamb kabsa with nuts',
        l5_name:'Maqluba', l5_desc:'Eggplant maqluba', l6_name:'Mansaf', l6_desc:'Lamb mansaf with jameed',
        l7_name:'Sayadieh', l7_desc:'Rice with fish', l8_name:'Kebab', l8_desc:'Grilled lamb kebab',
        l9_name:'Grilled Meat', l9_desc:'Lamb and chicken grill', l10_name:'Molokhia', l10_desc:'Green molokhia',
        l11_name:'Okra', l11_desc:'Okra with lamb', l12_name:'Stuffed Grape Leaves', l12_desc:'Stuffed grape leaves',
        // Dinner
        d1_name:'Mixed Grill', d1_desc:'Lamb, chicken, kebab', d2_name:'Grilled Fish', d2_desc:'Fresh fish with rice',
        d3_name:'Shrimp', d3_desc:'Grilled shrimp', d4_name:'Chicken Tikka', d4_desc:'Marinated grilled chicken',
        d5_name:'Steak', d5_desc:'Beef steak with sauce', d6_name:'Lahm Bi Ajeen', d6_desc:'Minced meat on dough',
        d7_name:'Pastries', d7_desc:'Mixed pastries', d8_name:'Shawarma', d8_desc:'Lamb or chicken shawarma',
        d9_name:'Falafel', d9_desc:'Falafel with tahini', d10_name:'Shami Hummus', d10_desc:'Hummus with meat',
        d11_name:'Moutabal', d11_desc:'Eggplant moutabal', d12_name:'Fattoush', d12_desc:'Fattoush salad',
        // Drinks
        dr1_name:'Arabic Coffee', dr1_desc:'Coffee with cardamom', dr2_name:'Karak Tea', dr2_desc:'Tea with milk',
        dr3_name:'Orange Juice', dr3_desc:'Fresh orange juice', dr4_name:'Lemonade', dr4_desc:'Lemon with mint',
        dr5_name:'Cocktail', dr5_desc:'Fruit cocktail', dr6_name:'Sahlab', dr6_desc:'Sahlab with cinnamon',
        dr7_name:'Hibiscus', dr7_desc:'Cold hibiscus', dr8_name:'Qamar Al-Din', dr8_desc:'Apricot drink',
        dr9_name:'Tamarind', dr9_desc:'Cold tamarind', dr10_name:'Yogurt', dr10_desc:'Fresh yogurt',
        dr11_name:'Ginger', dr11_desc:'Ginger drink', dr12_name:'Mint', dr12_desc:'Mint tea'
    }
};

let currentLang = 'ar';
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    const btn = document.getElementById('langToggle');
    if (btn) btn.innerHTML = lang === 'ar' ? '<i class="fas fa-globe"></i> English' : '<i class="fas fa-globe"></i> العربية';
    localStorage.setItem('lang', lang);
    if (typeof currentMenuCategory !== 'undefined') showMenu(currentMenuCategory);
}
function switchLanguage() { setLanguage(currentLang === 'ar' ? 'en' : 'ar'); }
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(localStorage.getItem('lang') || 'ar');
    document.getElementById('langToggle')?.addEventListener('click', switchLanguage);
});