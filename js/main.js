AOS.init({ duration: 800, once: true });

// Dark Mode
const darkToggle = document.getElementById('darkModeToggle');
const darkCSS = document.getElementById('dark-mode-css');
const body = document.body;

function setDark(enabled) {
    if (enabled) {
        body.classList.add('dark');
        darkCSS.disabled = false;
        darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('dark');
        darkCSS.disabled = true;
        darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    localStorage.setItem('darkMode', enabled ? 'enabled' : 'disabled');
}

darkToggle.addEventListener('click', () => setDark(!body.classList.contains('dark')));
if (localStorage.getItem('darkMode') === 'enabled') setDark(true);

// Header hide on scroll
const header = document.getElementById('header');
const bottomNav = document.getElementById('bottomNav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > lastScroll && scrollY > 80) {
        header.classList.add('header-hidden');
        if (bottomNav) bottomNav.classList.add('bottom-nav-hidden');
    } else {
        header.classList.remove('header-hidden');
        if (bottomNav) bottomNav.classList.remove('bottom-nav-hidden');
    }
    lastScroll = scrollY;
    updateActiveNav();
});

function updateActiveNav() {
    const sections = ['home', 'menu', 'gallery', 'booking', 'contact'];
    let current = 'home';
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) current = id;
    });
    document.querySelectorAll('.nav-list a, .bottom-nav-item').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
}

// Counters Animation
const counters = document.querySelectorAll('.counter');
let animated = false;

function animateCounters() {
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const increment = target / 40;
        let current = 0;
        counter.innerText = '0';
        const update = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                setTimeout(update, 30);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
}

window.addEventListener('scroll', () => {
    const stats = document.querySelector('.hero-stats');
    if (stats && !animated && stats.getBoundingClientRect().top < window.innerHeight - 100) {
        animateCounters();
        animated = true;
    }
});

// ========== MENU DATA ==========
const menuData = {
    breakfast: [
        { icon: '🍳', nameKey: 'b1_name', descKey: 'b1_desc', price: 3.0 },
        { icon: '🫓', nameKey: 'b2_name', descKey: 'b2_desc', price: 3.5 },
        { icon: '🥣', nameKey: 'b3_name', descKey: 'b3_desc', price: 2.5 },
        { icon: '🫘', nameKey: 'b4_name', descKey: 'b4_desc', price: 3.0 },
        { icon: '🧀', nameKey: 'b5_name', descKey: 'b5_desc', price: 4.0 },
        { icon: '🫒', nameKey: 'b6_name', descKey: 'b6_desc', price: 2.0 },
        { icon: '🥛', nameKey: 'b7_name', descKey: 'b7_desc', price: 3.0 },
        { icon: '🍯', nameKey: 'b8_name', descKey: 'b8_desc', price: 3.5 },
        { icon: '🥩', nameKey: 'b9_name', descKey: 'b9_desc', price: 4.5 },
        { icon: '🫓', nameKey: 'b10_name', descKey: 'b10_desc', price: 3.0 },
        { icon: '🍞', nameKey: 'b11_name', descKey: 'b11_desc', price: 2.5 },
        { icon: '🥣', nameKey: 'b12_name', descKey: 'b12_desc', price: 4.0 }
    ],
    lunch: [
        { icon: '🍚', nameKey: 'l1_name', descKey: 'l1_desc', price: 5.0 },
        { icon: '🍛', nameKey: 'l2_name', descKey: 'l2_desc', price: 4.0 },
        { icon: '🥘', nameKey: 'l3_name', descKey: 'l3_desc', price: 4.5 },
        { icon: '🍖', nameKey: 'l4_name', descKey: 'l4_desc', price: 5.5 },
        { icon: '🍲', nameKey: 'l5_name', descKey: 'l5_desc', price: 5.0 },
        { icon: '🥩', nameKey: 'l6_name', descKey: 'l6_desc', price: 6.0 },
        { icon: '🐟', nameKey: 'l7_name', descKey: 'l7_desc', price: 5.0 },
        { icon: '🥙', nameKey: 'l8_name', descKey: 'l8_desc', price: 4.5 },
        { icon: '🍗', nameKey: 'l9_name', descKey: 'l9_desc', price: 5.0 },
        { icon: '🥬', nameKey: 'l10_name', descKey: 'l10_desc', price: 4.0 },
        { icon: '🫒', nameKey: 'l11_name', descKey: 'l11_desc', price: 4.5 },
        { icon: '🍃', nameKey: 'l12_name', descKey: 'l12_desc', price: 5.0 }
    ],
    dinner: [
        { icon: '🥩', nameKey: 'd1_name', descKey: 'd1_desc', price: 6.0 },
        { icon: '🐟', nameKey: 'd2_name', descKey: 'd2_desc', price: 5.0 },
        { icon: '🦐', nameKey: 'd3_name', descKey: 'd3_desc', price: 7.0 },
        { icon: '🍗', nameKey: 'd4_name', descKey: 'd4_desc', price: 4.5 },
        { icon: '🥩', nameKey: 'd5_name', descKey: 'd5_desc', price: 8.0 },
        { icon: '🍕', nameKey: 'd6_name', descKey: 'd6_desc', price: 3.5 },
        { icon: '🥟', nameKey: 'd7_name', descKey: 'd7_desc', price: 4.0 },
        { icon: '🌯', nameKey: 'd8_name', descKey: 'd8_desc', price: 2.5 },
        { icon: '🧆', nameKey: 'd9_name', descKey: 'd9_desc', price: 2.0 },
        { icon: '🫘', nameKey: 'd10_name', descKey: 'd10_desc', price: 4.0 },
        { icon: '🍆', nameKey: 'd11_name', descKey: 'd11_desc', price: 3.5 },
        { icon: '🥗', nameKey: 'd12_name', descKey: 'd12_desc', price: 3.0 }
    ],
    drinks: [
        { icon: '☕', nameKey: 'dr1_name', descKey: 'dr1_desc', price: 1.0 },
        { icon: '🍵', nameKey: 'dr2_name', descKey: 'dr2_desc', price: 0.75 },
        { icon: '🍊', nameKey: 'dr3_name', descKey: 'dr3_desc', price: 1.5 },
        { icon: '🍋', nameKey: 'dr4_name', descKey: 'dr4_desc', price: 1.5 },
        { icon: '🍹', nameKey: 'dr5_name', descKey: 'dr5_desc', price: 2.0 },
        { icon: '🥛', nameKey: 'dr6_name', descKey: 'dr6_desc', price: 1.5 },
        { icon: '🍷', nameKey: 'dr7_name', descKey: 'dr7_desc', price: 1.0 },
        { icon: '🥤', nameKey: 'dr8_name', descKey: 'dr8_desc', price: 1.0 },
        { icon: '🍶', nameKey: 'dr9_name', descKey: 'dr9_desc', price: 1.0 },
        { icon: '🥛', nameKey: 'dr10_name', descKey: 'dr10_desc', price: 0.75 },
        { icon: '🫚', nameKey: 'dr11_name', descKey: 'dr11_desc', price: 1.5 },
        { icon: '🌿', nameKey: 'dr12_name', descKey: 'dr12_desc', price: 1.0 }
    ]
};

// ========== SHOPPING CART ==========
let cart = JSON.parse(localStorage.getItem('cart')) || {};

function addToCart(category, index) {
    const dish = menuData[category][index];
    const key = `${category}_${index}`;
    
    if (cart[key]) {
        cart[key].quantity += 1;
    } else {
        cart[key] = {
            category: category,
            index: index,
            nameKey: dish.nameKey,
            price: dish.price,
            icon: dish.icon,
            quantity: 1
        };
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    updateSingleDishButton(category, index, key);
    showAddedFeedback(category, index);
}

function showAddedFeedback(category, index) {
    const itemsPerPage = getItemsPerPage();
    const currentPage = currentMenuPage;
    const start = (currentPage - 1) * itemsPerPage;
    
    if (index >= start && index < start + itemsPerPage) {
        const dishCards = document.querySelectorAll('.dish-card');
        const relativeIndex = index - start;
        
        if (dishCards[relativeIndex]) {
            const actionsDiv = dishCards[relativeIndex].querySelector('.dish-actions');
            if (actionsDiv) {
                const addBtn = actionsDiv.querySelector('.cart-btn');
                if (addBtn) {
                    const feedbackText = currentLang === 'ar' ? '✓ تم الإضافة' : (currentLang === 'en' ? '✓ Added' : '✓ شامل کر دیا');
                    addBtn.textContent = feedbackText;
                    addBtn.style.background = '#22c55e';
                    
                    setTimeout(() => {
                        if (addBtn) {
                            const cartKey = `${category}_${index}`;
                            const qty = cart[cartKey] ? cart[cartKey].quantity : 0;
                            if (qty > 0) {
                                actionsDiv.innerHTML = `
                                    <div class="qty-control">
                                        <button class="qty-btn" onclick="updateCartItemQuantity('${cartKey}', -1)">-</button>
                                        <span class="qty-num">${qty}</span>
                                        <button class="qty-btn" onclick="updateCartItemQuantity('${cartKey}', 1)">+</button>
                                    </div>
                                `;
                            }
                        }
                    }, 800);
                }
            }
        }
    }
}

function updateSingleDishButton(category, index, cartKey) {
    const itemsPerPage = getItemsPerPage();
    const currentPage = currentMenuPage;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    if (index >= start && index < end) {
        const qty = cart[cartKey] ? cart[cartKey].quantity : 0;
        
        const dishCards = document.querySelectorAll('.dish-card');
        const relativeIndex = index - start;
        if (dishCards[relativeIndex]) {
            const actionsDiv = dishCards[relativeIndex].querySelector('.dish-actions');
            if (actionsDiv) {
                if (qty > 0) {
                    actionsDiv.innerHTML = `
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateCartItemQuantity('${cartKey}', -1)">-</button>
                            <span class="qty-num">${qty}</span>
                            <button class="qty-btn" onclick="updateCartItemQuantity('${cartKey}', 1)">+</button>
                        </div>
                    `;
                } else {
                    const addToCartText = currentLang === 'ar' ? '🛒 أضف للسلة' : (currentLang === 'en' ? '🛒 Add to Cart' : '🛒 کارٹ میں شامل کریں');
                    actionsDiv.innerHTML = `<button class="cart-btn" onclick="addToCart('${category}', ${index})">${addToCartText}</button>`;
                }
            }
        }
    }
}

function removeFromCart(key) {
    delete cart[key];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    
    const parts = key.split('_');
    const category = parts[0];
    const index = parseInt(parts[1]);
    updateSingleDishButton(category, index, key);
}

function updateCartItemQuantity(key, delta) {
    if (cart[key]) {
        cart[key].quantity += delta;
        if (cart[key].quantity <= 0) {
            delete cart[key];
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        
        const parts = key.split('_');
        const category = parts[0];
        const index = parseInt(parts[1]);
        updateSingleDishButton(category, index, key);
    }
}

// ========== CLEAR ALL CART WITH CONFIRMATION ==========
function clearAllCart() {
    const confirmMsg = currentLang === 'ar' ? 'هل أنت متأكد من حذف جميع الطلبات؟' :
                      currentLang === 'en' ? 'Are you sure you want to clear all orders?' :
                      'کیا آپ تمام آرڈرز کو حذف کرنے کے یقین ہیں؟';
    
    if (confirm(confirmMsg)) {
        cart = {};
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        refreshCurrentPage();
        closeCartDialog();
        
        const successMsg = currentLang === 'ar' ? '✅ تم حذف جميع الطلبات بنجاح' :
                          currentLang === 'en' ? '✅ All orders cleared successfully' :
                          '✅ تمام آرڈرز کامیابی سے حذف کر دیے گئے';
        
        const notification = document.createElement('div');
        notification.textContent = successMsg;
        notification.style.position = 'fixed';
        notification.style.bottom = '180px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#22c55e';
        notification.style.color = 'white';
        notification.style.padding = '12px 20px';
        notification.style.borderRadius = '10px';
        notification.style.zIndex = '2000';
        notification.style.fontWeight = 'bold';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
    }
}

function refreshCurrentPage() {
    const dishes = menuData[currentMenuCategory];
    const itemsPerPage = getItemsPerPage();
    const start = (currentMenuPage - 1) * itemsPerPage;
    const pageDishes = dishes.slice(start, start + itemsPerPage);
    
    const addToCartText = currentLang === 'ar' ? '🛒 أضف للسلة' : (currentLang === 'en' ? '🛒 Add to Cart' : '🛒 کارٹ میں شامل کریں');
    
    const grid = document.getElementById('menuGrid');
    if (!grid) return;
    
    const dishCards = grid.querySelectorAll('.dish-card');
    
    pageDishes.forEach((dish, idx) => {
        const globalIdx = start + idx;
        const cartKey = `${currentMenuCategory}_${globalIdx}`;
        const qty = cart[cartKey] ? cart[cartKey].quantity : 0;
        
        if (dishCards[idx]) {
            const actionsDiv = dishCards[idx].querySelector('.dish-actions');
            if (actionsDiv) {
                if (qty > 0) {
                    actionsDiv.innerHTML = `
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateCartItemQuantity('${cartKey}', -1)">-</button>
                            <span class="qty-num">${qty}</span>
                            <button class="qty-btn" onclick="updateCartItemQuantity('${cartKey}', 1)">+</button>
                        </div>
                    `;
                } else {
                    actionsDiv.innerHTML = `<button class="cart-btn" onclick="addToCart('${currentMenuCategory}', ${globalIdx})">${addToCartText}</button>`;
                }
            }
        }
    });
}

function getCartTotal() {
    let total = 0;
    for (let key in cart) {
        total += cart[key].price * cart[key].quantity;
    }
    return total;
}

function getCartItemCount() {
    let count = 0;
    for (let key in cart) {
        count += cart[key].quantity;
    }
    return count;
}

function updateCartDisplay() {
    const total = getCartTotal();
    const count = getCartItemCount();
    const totalSpan = document.getElementById('cartTotalPrice');
    const badgeSpan = document.getElementById('cartBadge');
    
    if (totalSpan) totalSpan.innerHTML = `${total.toFixed(2)} د.ك`;
    if (badgeSpan) {
        badgeSpan.innerHTML = count;
        if (count === 0) {
            badgeSpan.style.display = 'none';
        } else {
            badgeSpan.style.display = 'inline-block';
        }
    }
    updateCartDialog();
}

// Cart Dialog
function openCartDialog() {
    const dialog = document.getElementById('cartDialog');
    if (dialog) dialog.classList.add('active');
    updateCartDialog();
}

function closeCartDialog() {
    const dialog = document.getElementById('cartDialog');
    if (dialog) dialog.classList.remove('active');
}

function updateCartDialog() {
    const itemsList = document.getElementById('cartItemsList');
    const totalSpan = document.getElementById('dialogTotalPrice');
    if (!itemsList) return;
    
    if (Object.keys(cart).length === 0) {
        const emptyText = currentLang === 'ar' ? 'السلة فارغة' : (currentLang === 'en' ? 'Cart is empty' : 'کارٹ خالی ہے');
        itemsList.innerHTML = `<div class="cart-empty">${emptyText}</div>`;
        if (totalSpan) totalSpan.innerHTML = '0.00 د.ك';
        return;
    }
    
    let html = '';
    for (let key in cart) {
        const item = cart[key];
        const name = translations[currentLang]?.[item.nameKey] || item.nameKey;
        const total = item.price * item.quantity;
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.icon} ${name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} د.ك</div>
                </div>
                <div class="cart-item-qty">
                    <button onclick="updateCartItemQuantity('${key}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartItemQuantity('${key}', 1)">+</button>
                </div>
                <div class="cart-item-total">${total.toFixed(2)} د.ك</div>
                <button class="cart-item-remove" onclick="removeFromCart('${key}')"><i class="fas fa-trash"></i></button>
            </div>
        `;
    }
    itemsList.innerHTML = html;
    if (totalSpan) totalSpan.innerHTML = `${getCartTotal().toFixed(2)} د.ك`;
}

// ========== GENERATE INVOICE NUMBER (4 DIGITS ONLY) ==========
function generateInvoiceNumber() {
    const random = Math.floor(Math.random() * 9000) + 1000;
    return `${random}`;
}

// ========== GET CUSTOMER NAME ==========
function getCustomerName() {
    const nameInput = document.getElementById('customerName');
    if (!nameInput) return '';
    return nameInput.value.trim();
}

// ========== SEND ORDER TO WHATSAPP WITH CUSTOMER NAME ==========
function sendOrderToWhatsApp() {
    // التحقق من وجود طلبات
    if (Object.keys(cart).length === 0) {
        const emptyMsg = currentLang === 'ar' ? 'السلة فارغة! أضف بعض الأطباق أولاً.' :
                        currentLang === 'en' ? 'Cart is empty! Add some dishes first.' :
                        'کارٹ خالی ہے! پہلے کچھ ڈشز شامل کریں۔';
        alert(emptyMsg);
        return;
    }
    
    // التحقق من إدخال اسم العميل
    const customerName = getCustomerName();
    const nameMsg = currentLang === 'ar' ? 'الرجاء إدخال اسمك الكريم قبل إرسال الطلب' :
                   currentLang === 'en' ? 'Please enter your name before sending the order' :
                   'براہ کرم آرڈر بھیجنے سے پہلے اپنا نام درج کریں';
    
    if (!customerName) {
        alert(nameMsg);
        document.getElementById('customerName')?.focus();
        return;
    }
    
    const invoiceNumber = generateInvoiceNumber();
    const now = new Date();
    const orderDate = now.toLocaleDateString('ar-EG');
    const orderTime = now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
    
    let orderText = ` طلب جديد من مطعم الأصالة \n`;
    orderText += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    orderText += `اسم العميل: ${customerName}\n`;
    orderText += `رقم الفاتورة: ${invoiceNumber}\n`;
    orderText += `التاريخ: ${orderDate}\n`;
    orderText += `الوقت: ${orderTime}\n`;
    orderText += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    orderText += `قائمة الطلبات:\n`;
    orderText += `─────────────────────────────────\n`;
    
    let itemNumber = 1;
    for (let key in cart) {
        const item = cart[key];
        const arabicName = translations['ar'][item.nameKey] || item.nameKey;
        const total = item.price * item.quantity;
        orderText += `${itemNumber}. ${arabicName}\n`;
        orderText += `   الكمية: ${item.quantity} × ${item.price.toFixed(2)} د.ك = ${total.toFixed(2)} د.ك\n`;
        orderText += `─────────────────────────────────\n`;
        itemNumber++;
    }
    
    const totalAmount = getCartTotal();
    orderText += `\nالإجمالي الكلي: ${totalAmount.toFixed(2)} د.ك\n`;
    orderText += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    orderText += `شكراً لك ${customerName} على ثقتك بمطعم الأصالة\n`;
    orderText += `نتطلع لخدمتك مرة أخرى\n`;
    
    const phoneNumber = '966507652943';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderText)}`;
    
    window.open(url, '_blank');
    
    const invoiceMsg = currentLang === 'ar' ? `✅ تم إرسال الطلب بنجاح ${customerName}!\n📋 رقم فاتورتك: ${invoiceNumber}\nيرجى الاحتفاظ بهذا الرقم للمتابعة.` :
                      currentLang === 'en' ? `✅ Order sent successfully ${customerName}!\n📋 Your invoice number: ${invoiceNumber}\nPlease keep this number for follow-up.` :
                      `✅ آرڈر کامیابی سے بھیج دیا گیا ${customerName}!\n📋 آپ کا انوائس نمبر: ${invoiceNumber}\nبراہ کرم فالو اپ کے لیے یہ نمبر رکھیں۔`;
    
    alert(invoiceMsg);
    
    cart = {};
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    refreshCurrentPage();
    closeCartDialog();
    
    // تفريغ حقل اسم العميل
    const nameInput = document.getElementById('customerName');
    if (nameInput) nameInput.value = '';
    
    const notification = document.createElement('div');
    const notificationMsg = currentLang === 'ar' ? `✅ تم الإرسال! رقم الفاتورة: ${invoiceNumber}` :
                           (currentLang === 'en' ? `✅ Sent! Invoice: ${invoiceNumber}` :
                            `✅ بھیج دیا! انوائس: ${invoiceNumber}`);
    notification.textContent = notificationMsg;
    notification.style.position = 'fixed';
    notification.style.bottom = '180px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#22c55e';
    notification.style.color = 'white';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = '10px';
    notification.style.zIndex = '2000';
    notification.style.fontWeight = 'bold';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// ========== GENERATE BOOKING NUMBER ==========
function generateBookingNumber() {
    const random = Math.floor(Math.random() * 9000) + 1000;
    return `${random}`;
}

// ========== BOOKING ==========
function submitBooking() {
    const name = document.getElementById('name')?.value?.trim() || '';
    const phone = document.getElementById('phone')?.value?.trim() || '';
    const date = document.getElementById('date')?.value || '';
    const time = document.getElementById('time')?.value || '';
    const guestsSelect = document.getElementById('guests');
    const guests = guestsSelect?.options[guestsSelect.selectedIndex]?.text || '';
    const areaSelect = document.getElementById('area');
    const area = areaSelect?.options[areaSelect.selectedIndex]?.text || '';
    const notes = document.getElementById('notes')?.value || '';
    const fb = document.getElementById('formFeedback');
    
    const msgs = {
        ar: { name: 'الاسم مطلوب', phone: 'رقم الجوال غير صحيح (8 أرقام على الأقل)', date: 'التاريخ مطلوب', time: 'الوقت مطلوب' },
        en: { name: 'Name is required', phone: 'Invalid phone number (at least 8 digits)', date: 'Date is required', time: 'Time is required' },
        ur: { name: 'نام درکار ہے', phone: 'غلط فون نمبر (کم از کم 8 ہندسے)', date: 'تاریخ درکار ہے', time: 'وقت درکار ہے' }
    };
    const msg = msgs[currentLang] || msgs.ar;
    
    if (!name) { fb.textContent = msg.name; fb.style.color = 'red'; return; }
    if (!phone || phone.length < 8) { fb.textContent = msg.phone; fb.style.color = 'red'; return; }
    if (!date) { fb.textContent = msg.date; fb.style.color = 'red'; return; }
    if (!time) { fb.textContent = msg.time; fb.style.color = 'red'; return; }
    
    const bookingNumber = generateBookingNumber();
    const now = new Date();
    const requestTime = now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
    
    let whatsappMsg = ` حجز طاولة - مطعم الأصالة \n`;
    whatsappMsg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    whatsappMsg += `الاسم: ${name}\n`;
    whatsappMsg += `رقم الحجز: ${bookingNumber}\n`;
    whatsappMsg += `الجوال: ${phone}\n`;
    whatsappMsg += `التاريخ: ${date}\n`;
    whatsappMsg += `الوقت: ${time}\n`;
    whatsappMsg += `عدد الأشخاص: ${guests}\n`;
    whatsappMsg += `المنطقة: ${area}\n`;
    whatsappMsg += `ملاحظات: ${notes || 'لا يوجد'}\n`;
    whatsappMsg += `وقت الإرسال: ${requestTime}\n`;
    whatsappMsg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    whatsappMsg += `نشكركم لاختياركم مطعم الأصالة`;
    
    window.open(`https://wa.me/966507652943?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    
    const successMsg = currentLang === 'ar' ? `✅ تم إرسال طلب الحجز ${name}!\n📋 رقم الحجز: ${bookingNumber}\nسنقوم بالتأكيد خلال دقائق.` :
                      currentLang === 'en' ? `✅ Booking request sent ${name}!\n📋 Booking number: ${bookingNumber}\nWe will confirm within minutes.` :
                      `✅ بکنگ کی درخواست بھیج دی گئی ${name}!\n📋 بکنگ نمبر: ${bookingNumber}\nہم چند منٹ میں تصدیق کریں گے۔`;
    
    alert(successMsg);
    fb.textContent = successMsg;
    fb.style.color = 'green';
    
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('notes').value = '';
    
    setTimeout(() => { fb.textContent = ''; }, 5000);
}

// ========== MENU DISPLAY ==========
let currentMenuCategory = 'breakfast';
let currentMenuPage = 1;
let itemsPerPage = 8;

function getItemsPerPage() {
    const width = window.innerWidth;
    if (width <= 480) return 4;
    if (width <= 768) return 6;
    return 8;
}

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
    
    document.querySelectorAll('.menu-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-category') === category) tab.classList.add('active');
    });
    
    const dishes = menuData[category];
    const totalPages = Math.ceil(dishes.length / itemsPerPage);
    let validPage = page;
    if (validPage > totalPages) validPage = totalPages;
    if (validPage < 1) validPage = 1;
    currentMenuPage = validPage;
    
    const start = (validPage - 1) * itemsPerPage;
    const pageDishes = dishes.slice(start, start + itemsPerPage);
    
    const addToCartText = currentLang === 'ar' ? '🛒 أضف للسلة' : (currentLang === 'en' ? '🛒 Add to Cart' : '🛒 کارٹ میں شامل کریں');
    
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = pageDishes.map((dish, idx) => {
        const globalIdx = start + idx;
        const name = translations[currentLang]?.[dish.nameKey] || dish.nameKey;
        const desc = translations[currentLang]?.[dish.descKey] || dish.descKey;
        const cartKey = `${category}_${globalIdx}`;
        const qty = cart[cartKey] ? cart[cartKey].quantity : 0;
        
        return `
            <div class="dish-card" data-aos="fade-up">
                <span class="dish-icon">${dish.icon}</span>
                <h4>${name}</h4>
                <p>${desc}</p>
                <span class="dish-price">${dish.price.toFixed(2)} د.ك</span>
                <div class="dish-actions">
                    ${qty > 0 ? `
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateCartItemQuantity('${cartKey}', -1)">-</button>
                            <span class="qty-num">${qty}</span>
                            <button class="qty-btn" onclick="updateCartItemQuantity('${cartKey}', 1)">+</button>
                        </div>
                    ` : `
                        <button class="cart-btn" onclick="addToCart('${category}', ${globalIdx})">${addToCartText}</button>
                    `}
                </div>
            </div>
        `;
    }).join('');
    
    const pagination = document.getElementById('pagination');
    if (totalPages > 1) {
        let html = '';
        if (validPage > 1) html += `<button class="page-btn" onclick="showMenu('${category}', ${validPage - 1})">«</button>`;
        
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= validPage - 1 && i <= validPage + 1)) {
                html += `<button class="page-btn ${i === validPage ? 'active' : ''}" onclick="showMenu('${category}', ${i})">${i}</button>`;
            } else if (i === validPage - 2 || i === validPage + 2) {
                html += `<span class="page-dots">...</span>`;
            }
        }
        
        if (validPage < totalPages) html += `<button class="page-btn" onclick="showMenu('${category}', ${validPage + 1})">»</button>`;
        pagination.innerHTML = html;
    } else {
        pagination.innerHTML = '';
    }
    
    AOS.refresh();
}
// ========== GALLERY WITH REAL IMAGES ==========
const galleryItems = [
    { img: 'images/image1.jpg' },
    { img: 'images/image2.webp' },
    { img: 'images/image3.jpg' }
];

function loadGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    grid.innerHTML = galleryItems.map((item, idx) => `
        <div class="gallery-item" data-aos="zoom-in" data-aos-delay="${idx * 100}" onclick="openLightbox(${idx})">
            <div class="gallery-image-wrapper">
                <img  src="${item.img}" alt="${translations[currentLang]?.[item.titleKey] || item.title}"
                loading="lazy"
                    decoding="async" 
                     style="width: 100%; height: 220px; object-fit: cover; border-radius: 24px; transition: 0.3s; cursor: pointer;">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus" style="color: white; font-size: 2rem;"></i>
                </div>
            </div>

        </div>
    `).join('');
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const item = galleryItems[index];
    const title = translations[currentLang]?.[item.titleKey] || item.title;
    
    if (lightboxImg) lightboxImg.src = item.img;
    if (lightboxTitle) lightboxTitle.textContent = title;
    
    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('active');
    const lightboxImg = document.getElementById('lightboxImage');
    if (lightboxImg) lightboxImg.src = '';
}

// ========== UPDATE TRANSLATIONS FOR CUSTOMER NAME FIELD ==========
function updateCustomerNameLabel() {
    const label = document.getElementById('customerNameLabel');
    if (label) {
        label.textContent = currentLang === 'ar' ? '👤 اسمك الكريم:' :
                           currentLang === 'en' ? '👤 Your Name:' :
                           '👤 آپ کا نام:';
    }
    const placeholder = document.getElementById('customerName');
    if (placeholder) {
        placeholder.placeholder = currentLang === 'ar' ? 'أدخل اسمك' :
                                 currentLang === 'en' ? 'Enter your name' :
                                 'اپنا نام درج کریں';
    }
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    showMenu('breakfast');
    updateCartDisplay();
    updateCustomerNameLabel();
    
    document.querySelectorAll('.menu-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            showMenu(tab.getAttribute('data-category'), 1);
        });
    });
    
    const submitBtn = document.getElementById('submitBookingBtn');
    if (submitBtn) submitBtn.addEventListener('click', submitBooking);
    
    const sendOrderBtn = document.getElementById('sendOrderBtn');
    if (sendOrderBtn) sendOrderBtn.addEventListener('click', sendOrderToWhatsApp);
    
    const clearAllBtn = document.getElementById('clearAllBtn');
    if (clearAllBtn) clearAllBtn.addEventListener('click', clearAllCart);
    
    document.getElementById('cartDialog')?.addEventListener('click', (e) => {
        if (e.target === document.getElementById('cartDialog')) closeCartDialog();
    });
    
    document.getElementById('lightbox')?.addEventListener('click', (e) => {
        if (e.target === document.getElementById('lightbox')) closeLightbox();
    });
    
    AOS.refresh();
});
// منع الكليك يمين فقط
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});
