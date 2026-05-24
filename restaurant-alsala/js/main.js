AOS.init({ duration: 800, once: true });
const darkToggle=document.getElementById('darkModeToggle'),darkCSS=document.getElementById('dark-mode-css'),body=document.body;
function setDark(e){if(e){body.classList.add('dark');darkCSS.disabled=false;darkToggle.innerHTML='<i class="fas fa-sun"></i>';}else{body.classList.remove('dark');darkCSS.disabled=true;darkToggle.innerHTML='<i class="fas fa-moon"></i>';}localStorage.setItem('darkMode',e?'enabled':'disabled');}
darkToggle.addEventListener('click',()=>setDark(!body.classList.contains('dark')));
if(localStorage.getItem('darkMode')==='enabled')setDark(true);

const header=document.getElementById('header'),bottomNav=document.getElementById('bottomNav');let ls=0;
window.addEventListener('scroll',()=>{let s=window.pageYOffset||document.documentElement.scrollTop;if(s>ls&&s>80){header.classList.add('header-hidden');if(bottomNav)bottomNav.classList.add('bottom-nav-hidden');}else{header.classList.remove('header-hidden');if(bottomNav)bottomNav.classList.remove('bottom-nav-hidden');}ls=s;updateActiveNav();});

function updateActiveNav(){const sec=['home','menu','gallery','booking','contact'];let c='home';sec.forEach(id=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=150)c=id;});document.querySelectorAll('.nav-list a, .bottom-nav-item').forEach(l=>{l.classList.remove('active');if(l.getAttribute('href')==='#'+c)l.classList.add('active');});}

const counters=document.querySelectorAll('.counter');let animated=false;
function animateCounters(){counters.forEach(c=>{const t=+c.getAttribute('data-target'),inc=t/40;const u=()=>{const cur=+c.innerText;if(cur<t){c.innerText=Math.ceil(cur+inc);setTimeout(u,30);}else c.innerText=t;};u();});}
window.addEventListener('scroll',()=>{const stats=document.querySelector('.hero-stats');if(stats&&!animated&&stats.getBoundingClientRect().top<window.innerHeight-100){animateCounters();animated=true;}});

// Menu Data (12 items per category)
const menuData = {
    breakfast: [
        {icon:'🍳',name:'b1_name',desc:'b1_desc',price:'3 د.ك'},{icon:'🫓',name:'b2_name',desc:'b2_desc',price:'3.5 د.ك'},
        {icon:'🥣',name:'b3_name',desc:'b3_desc',price:'2.5 د.ك'},{icon:'🫘',name:'b4_name',desc:'b4_desc',price:'3 د.ك'},
        {icon:'🧀',name:'b5_name',desc:'b5_desc',price:'4 د.ك'},{icon:'🫒',name:'b6_name',desc:'b6_desc',price:'2 د.ك'},
        {icon:'🥛',name:'b7_name',desc:'b7_desc',price:'3 د.ك'},{icon:'🍯',name:'b8_name',desc:'b8_desc',price:'3.5 د.ك'},
        {icon:'🥩',name:'b9_name',desc:'b9_desc',price:'4.5 د.ك'},{icon:'🫓',name:'b10_name',desc:'b10_desc',price:'3 د.ك'},
        {icon:'🍞',name:'b11_name',desc:'b11_desc',price:'2.5 د.ك'},{icon:'🥣',name:'b12_name',desc:'b12_desc',price:'4 د.ك'}
    ],
    lunch: [
        {icon:'🍚',name:'l1_name',desc:'l1_desc',price:'5 د.ك'},{icon:'🍛',name:'l2_name',desc:'l2_desc',price:'4 د.ك'},
        {icon:'🥘',name:'l3_name',desc:'l3_desc',price:'4.5 د.ك'},{icon:'🍖',name:'l4_name',desc:'l4_desc',price:'5.5 د.ك'},
        {icon:'🍲',name:'l5_name',desc:'l5_desc',price:'5 د.ك'},{icon:'🥩',name:'l6_name',desc:'l6_desc',price:'6 د.ك'},
        {icon:'🐟',name:'l7_name',desc:'l7_desc',price:'5 د.ك'},{icon:'🥙',name:'l8_name',desc:'l8_desc',price:'4.5 د.ك'},
        {icon:'🍗',name:'l9_name',desc:'l9_desc',price:'5 د.ك'},{icon:'🥬',name:'l10_name',desc:'l10_desc',price:'4 د.ك'},
        {icon:'🫒',name:'l11_name',desc:'l11_desc',price:'4.5 د.ك'},{icon:'🍃',name:'l12_name',desc:'l12_desc',price:'5 د.ك'}
    ],
    dinner: [
        {icon:'🥩',name:'d1_name',desc:'d1_desc',price:'6 د.ك'},{icon:'🐟',name:'d2_name',desc:'d2_desc',price:'5 د.ك'},
        {icon:'🦐',name:'d3_name',desc:'d3_desc',price:'7 د.ك'},{icon:'🍗',name:'d4_name',desc:'d4_desc',price:'4.5 د.ك'},
        {icon:'🥩',name:'d5_name',desc:'d5_desc',price:'8 د.ك'},{icon:'🍕',name:'d6_name',desc:'d6_desc',price:'3.5 د.ك'},
        {icon:'🥟',name:'d7_name',desc:'d7_desc',price:'4 د.ك'},{icon:'🌯',name:'d8_name',desc:'d8_desc',price:'2.5 د.ك'},
        {icon:'🧆',name:'d9_name',desc:'d9_desc',price:'2 د.ك'},{icon:'🫘',name:'d10_name',desc:'d10_desc',price:'4 د.ك'},
        {icon:'🍆',name:'d11_name',desc:'d11_desc',price:'3.5 د.ك'},{icon:'🥗',name:'d12_name',desc:'d12_desc',price:'3 د.ك'}
    ],
    drinks: [
        {icon:'☕',name:'dr1_name',desc:'dr1_desc',price:'1 د.ك'},{icon:'🍵',name:'dr2_name',desc:'dr2_desc',price:'0.75 د.ك'},
        {icon:'🍊',name:'dr3_name',desc:'dr3_desc',price:'1.5 د.ك'},{icon:'🍋',name:'dr4_name',desc:'dr4_desc',price:'1.5 د.ك'},
        {icon:'🍹',name:'dr5_name',desc:'dr5_desc',price:'2 د.ك'},{icon:'🥛',name:'dr6_name',desc:'dr6_desc',price:'1.5 د.ك'},
        {icon:'🍷',name:'dr7_name',desc:'dr7_desc',price:'1 د.ك'},{icon:'🥤',name:'dr8_name',desc:'dr8_desc',price:'1 د.ك'},
        {icon:'🍶',name:'dr9_name',desc:'dr9_desc',price:'1 د.ك'},{icon:'🥛',name:'dr10_name',desc:'dr10_desc',price:'0.75 د.ك'},
        {icon:'🫚',name:'dr11_name',desc:'dr11_desc',price:'1.5 د.ك'},{icon:'🌿',name:'dr12_name',desc:'dr12_desc',price:'1 د.ك'}
    ]
};

let currentMenuCategory = 'breakfast';
let currentMenuPage = 1;
let itemsPerPage = 8; // افتراضي للكمبيوتر

// تحديد عدد العناصر حسب حجم الشاشة
function getItemsPerPage() {
    const width = window.innerWidth;
    if (width <= 480) return 4;      // جوال صغير
    if (width <= 768) return 6;      // جوال كبير / تابلت صغير
    if (width <= 1024) return 8;     // تابلت / لابتوب صغير
    return 12;                        // كمبيوتر
}

// تحديث عدد العناصر عند تغيير حجم النافذة
window.addEventListener('resize', () => {
    const newItemsPerPage = getItemsPerPage();
    if (newItemsPerPage !== itemsPerPage) {
        itemsPerPage = newItemsPerPage;
        currentMenuPage = 1;
        showMenu(currentMenuCategory, currentMenuPage);
    }
});

function showMenu(category, page = 1) {
    currentMenuCategory = category;
    currentMenuPage = page;
    itemsPerPage = getItemsPerPage();
    
    // تحديث التبويبات
    document.querySelectorAll('.menu-tab').forEach(tab => tab.classList.remove('active'));
    const activeTab = document.querySelector(`[onclick*="showMenu('${category}'"]`);
    if (activeTab) activeTab.classList.add('active');
    
    const dishes = menuData[category];
    const totalPages = Math.ceil(dishes.length / itemsPerPage);
    
    // تصحيح رقم الصفحة إذا كان خارج النطاق
    if (page > totalPages) page = totalPages;
    if (page < 1) page = 1;
    currentMenuPage = page;
    
    const start = (page - 1) * itemsPerPage;
    const pageDishes = dishes.slice(start, start + itemsPerPage);
    
    // عرض الأطباق
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = pageDishes.map(dish => {
        const name = translations[currentLang]?.[dish.name] || dish.name;
        const desc = translations[currentLang]?.[dish.desc] || dish.desc;
        return `
            <div class="dish-card" data-aos="fade-up">
                <span class="dish-icon">${dish.icon}</span>
                <h4>${name}</h4>
                <p>${desc}</p>
                <span class="dish-price">${dish.price}</span>
            </div>
        `;
    }).join('');
    
    // بناء أزرار التصفح
    const pagination = document.getElementById('pagination');
    if (totalPages > 1) {
        let html = '';
        
        // زر السابق
        if (page > 1) {
            html += `<button class="page-btn" onclick="showMenu('${category}', ${page - 1})">«</button>`;
        }
        
        // أرقام الصفحات
        for (let i = 1; i <= totalPages; i++) {
            // نعرض الصفحة الحالية + صفحتين قبل وبعد
            if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
                html += `<button class="page-btn ${i === page ? 'active' : ''}" onclick="showMenu('${category}', ${i})">${i}</button>`;
            } else if (i === page - 2 || i === page + 2) {
                html += `<span class="page-dots">...</span>`;
            }
        }
        
        // زر التالي
        if (page < totalPages) {
            html += `<button class="page-btn" onclick="showMenu('${category}', ${page + 1})">»</button>`;
        }
        
        pagination.innerHTML = html;
    } else {
        pagination.innerHTML = '';
    }
    
    // التمرير للأعلى عند تغيير الصفحة
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Lightbox
const galleryTitles = ['gal1', 'gal2', 'gal3', 'gal4'];
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightboxContent');
    const titleKey = galleryTitles[index];
    const title = translations[currentLang]?.[titleKey] || titleKey;
    content.innerHTML = `<i class="fas fa-image"></i><h3>${title}</h3>`;
    lightbox.classList.add('active');
}
function closeLightbox() { document.getElementById('lightbox').classList.remove('active'); }
document.getElementById('lightbox').addEventListener('click', function(e) { if(e.target === this) closeLightbox(); });

// Booking WhatsApp
function submitBooking() {
    const name = document.getElementById('name')?.value?.trim() || '';
    const phone = document.getElementById('phone')?.value?.trim() || '';
    const date = document.getElementById('date')?.value || '';
    const time = document.getElementById('time')?.value || '';
    const guests = document.getElementById('guests')?.value || '';
    const area = document.getElementById('area')?.value || '';
    const notes = document.getElementById('notes')?.value || 'لا يوجد';
    const fb = document.getElementById('formFeedback');
    if (!name) { fb.textContent = 'الاسم مطلوب'; fb.style.color = 'red'; return; }
    if (!phone || !/^\d{8,}$/.test(phone)) { fb.textContent = 'رقم الجوال غير صحيح'; fb.style.color = 'red'; return; }
    if (!date) { fb.textContent = 'التاريخ مطلوب'; fb.style.color = 'red'; return; }
    if (!time) { fb.textContent = 'الوقت مطلوب'; fb.style.color = 'red'; return; }
    if (!guests) { fb.textContent = 'عدد الأشخاص مطلوب'; fb.style.color = 'red'; return; }
    if (!area) { fb.textContent = 'المنطقة مطلوبة'; fb.style.color = 'red'; return; }
    fb.style.color = '';
    const msg = `*حجز طاولة - مطعم الأصالة*\n\nالاسم: ${name}\nالجوال: ${phone}\nالتاريخ: ${date}\nالوقت: ${time}\nالأشخاص: ${guests}\nالمنطقة: ${area}\nملاحظات: ${notes}`;
    window.open(`https://wa.me/966507652943?text=${encodeURIComponent(msg)}`, '_blank');
    fb.textContent = '✅ تم فتح واتساب!'; fb.style.color = 'green';
    setTimeout(() => { fb.textContent = ''; }, 3000);
}

// Load default menu
showMenu('breakfast');