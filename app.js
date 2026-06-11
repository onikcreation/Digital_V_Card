/**
 * digital-vcard / app.js
 * Author  : Md Al Amin (aNiK)
 * Version : 1.0
 *
 * Features:
 *  - Page loader hide
 *  - Profile image fallback
 *  - vCard (.vcf) download
 *  - Toast notification
 */

// =============================================
// 1. PAGE LOADER
// =============================================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 600);
  }
});

// =============================================
// 2. PROFILE IMAGE FALLBACK
//    (যদি assets/profile.jpg না থাকে)
// =============================================
const profileImg = document.getElementById('profileImg');
if (profileImg) {
  profileImg.addEventListener('error', function () {
    const wrap = this.parentElement;
    this.remove();
    const fallback = document.createElement('div');
    fallback.className = 'profile-img-fallback';
    fallback.innerHTML = '<i class="fa-solid fa-user"></i>';
    wrap.appendChild(fallback);
  });
}

// =============================================
// 3. DOWNLOAD VCARD
// =============================================

/**
 * vCard 3.0 format তৈরি করে .vcf ফাইল হিসেবে download করে।
 * Phone-এ import করলে সরাসরি contact-এ add হয়।
 */
function downloadVCard() {
  const vcfData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Al Amin Anik',
    'N:Anik;Al Amin;;;',
    'ORG:Udvash-Unmesh-Uttoron',
    'TITLE:Assistant Manager ERP & Web Management',
    'TEL;TYPE=CELL,VOICE:+8801313368630',
    'TEL;TYPE=WORK,VOICE:+8801675547466',
    'EMAIL;TYPE=WORK:anik@udvash.com',
    'URL:https://www.udvash.com',
    'PHOTO;VALUE=URI:assets/profile.jpg',
    'END:VCARD'
  ].join('\r\n');

  // Blob তৈরি করে download link generate করো
  const blob = new Blob([vcfData], { type: 'text/vcard;charset=utf-8' });
  const url  = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href  = url;
  link.download = 'Al_Amin_Anik.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Memory free করো
  setTimeout(() => URL.revokeObjectURL(url), 1000);

  // Success notification
  showToast('✅ vCard downloaded!');
}

// =============================================
// 4. TOAST NOTIFICATION
// =============================================
function showToast(message) {
  // পুরনো toast remove করো
  const old = document.querySelector('.toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  // Show করো
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });

  // 2.5 সেকেন্ড পর hide করো
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 2500);
}

// =============================================
// 5. SOCIAL LINKS — তোমার real links এখানে দাও
// =============================================
const socialLinks = {
  facebook  : 'https://www.facebook.com/onik786',
  messenger : 'https://m.me/onik786',
  whatsapp  : 'https://wa.me/8801313368630',
  skype     : 'skype:live:anik',
  instagram : 'https://www.instagram.com/imonik786',
  twitter   : 'https://x.com/',
  youtube   : 'https://youtube.com/',
  linkedin  : 'https://linkedin.com/in/',
};

// Social buttons-এ href set করো
document.addEventListener('DOMContentLoaded', () => {
  Object.entries(socialLinks).forEach(([platform, url]) => {
    const btn = document.querySelector(`.social-btn.${platform}`);
    if (btn && url) btn.href = url;
  });
});
