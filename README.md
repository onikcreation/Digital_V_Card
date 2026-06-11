# 📇 Digital vCard — Al Amin Anik

একটি সম্পূর্ণ **Digital Business Card** ওয়েবসাইট — pure HTML, CSS এবং vanilla JavaScript দিয়ে তৈরি। কোনো framework বা build tool লাগে না।

🔗 **Live Demo:** https://তোমার-username.github.io/digital-vcard

---

## 🖼️ Preview

| Header | Contact Info | Social + vCard |
|--------|-------------|----------------|
| Purple→Red gradient, circular photo | Phone, Email, Company, Website | 8 social icons + Download button |

---

## 🚀 Features

- ✅ **Responsive** — Mobile-first design, 480px max-width
- ✅ **vCard Download** — `.vcf` file generate করে phone-এ import করা যায়
- ✅ **Sticky Action Bar** — CALL ও EMAIL বাটন সবসময় দৃশ্যমান
- ✅ **Loader Animation** — Page load হওয়ার সময় aNiK logo দেখায়
- ✅ **Toast Notification** — Download success message
- ✅ **Fallback Avatar** — Profile image না থাকলে icon দেখায়
- ✅ **Font Awesome 6** — সব icon
- ✅ **Inter Font** — Clean, modern typography
- ✅ **No dependencies** — CDN ছাড়া কিছু লাগে না

---

## 📂 File Structure

```
digital-vcard/
├── index.html        ← মূল পেজ
├── style.css         ← সব CSS (variables, responsive)
├── app.js            ← vCard download, loader, social links
├── assets/
│   └── profile.jpg   ← তোমার ছবি (replace করো)
└── README.md
```

---

## 🛠️ কাস্টমাইজ করার নিয়ম

### 1. নিজের তথ্য দাও — `index.html`

```html
<!-- নাম -->
<h1 class="profile-name">তোমার নাম</h1>

<!-- পদবি -->
<p class="profile-title">তোমার পদবি</p>

<!-- Phone -->
<a href="tel:+880XXXXXXXXXX" ...>+880XXXXXXXXXX</a>

<!-- Email -->
<a href="mailto:you@example.com" ...>you@example.com</a>
```

### 2. Social links দাও — `app.js`

```javascript
const socialLinks = {
  facebook  : 'https://facebook.com/তোমার-id',
  whatsapp  : 'https://wa.me/880XXXXXXXXXX',
  instagram : 'https://instagram.com/তোমার-id',
  // ...
};
```

### 3. vCard data আপডেট করো — `app.js`

```javascript
const vcfData = [
  'FN:তোমার নাম',
  'TEL;TYPE=CELL:+880XXXXXXXXXX',
  'EMAIL:you@example.com',
  // ...
]
```

### 4. Profile ছবি replace করো

`assets/profile.jpg` ফাইলটি তোমার ছবি দিয়ে replace করো।  
Size: **200×200px**, format: **JPG বা PNG**, circular crop করা হবে CSS দিয়ে।

---

## 🌐 GitHub Pages-এ Deploy করার নিয়ম

```bash
# Step 1 — Git init
git init
git add .
git commit -m "Initial commit: Digital vCard"

# Step 2 — GitHub-এ repo তৈরি করো
# github.com/new → repo name: digital-vcard

# Step 3 — Push করো
git remote add origin https://github.com/USERNAME/digital-vcard.git
git branch -M main
git push -u origin main

# Step 4 — GitHub Pages চালু করো
# Repo → Settings → Pages → Source: main → / (root) → Save
```

কিছুক্ষণ পরে:  
`https://USERNAME.github.io/digital-vcard` — Live!

---

## 🎨 রঙ পরিবর্তন করতে চাইলে — `style.css`

```css
:root {
  --purple : #6B2FA0;  /* Header ও button এর রঙ */
  --red    : #E31E24;  /* Gradient এর শেষ রঙ */
}
```

---

## 📱 vCard (.vcf) Format

Download করা `.vcf` ফাইলটি Android ও iPhone-এ সরাসরি import করা যায়:

- **Android:** ফাইলটি open করলে Contacts app-এ add করার option আসবে
- **iPhone:** ফাইলটি open করলে "Add to Contacts" দেখাবে

---

## 📄 License

MIT License — Free to use and modify.

---

**Made with ❤️ by aNiK**
