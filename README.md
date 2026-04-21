# MEVIA — Premium Transport Website

**On Point. On Time.** — Dursun Limousine-ის სტილზე აგებული, MEVIA-ს ბრენდირებით გაფორმებული luxury სატრანსპორტო საიტი.

---

## 📁 ფაილების სტრუქტურა

```
mevia/
├── index.html          # მთავარი საიტი (ყველაფერი ერთ ფაილშია)
├── assets/
│   └── logo.jpeg       # MEVIA-ს ლოგო
└── README.md           # ეს ინსტრუქცია
```

## 🚀 ეტაპები - რა უნდა გავაკეთო ახლა

### ეტაპი 1: ლოკალურად ნახვა (ახლავე შესაძლებელია)

1. გახსენით `index.html` ფაილი ბრაუზერში (ორჯერ დააწკაპუნეთ ან გადაიტანეთ Chrome-ში).
2. საიტი უკვე სრულად მუშაობს: ნავიგაცია, ფორმა, ანიმაციები, მობილური ვერსია.

### ეტაპი 2: დომენის ყიდვა

რეკომენდირებული ქართული პროვაიდერები:
- **Proservice** (proservice.ge) — ყველაზე პოპულარული საქართველოში
- **GoDaddy** — საერთაშორისო
- **Namecheap** — კარგი ფასი/ხარისხი

**რეკომენდაცია**: შეიძინეთ `mevia.ge` (~40 GEL/წელი) ან `mevia.com` (~50 USD/წელი).

### ეტაპი 3: ჰოსტინგი (საიტის ინტერნეტში განთავსება)

**უფასო / სწრაფი ვარიანტები** (რეკომენდებული სტარტისთვის):

#### A) Netlify (ყველაზე მარტივი — 5 წუთში)
1. შედით: https://netlify.com
2. რეგისტრაცია უფასოდ
3. Drag & Drop გადმოიტანეთ `mevia` ფოლდერი მთავარ გვერდზე
4. საიტი ავტომატურად გამოქვეყნდება — `mevia-xyz.netlify.app`
5. დომენის მიბმა: Site Settings → Domain Management → Add custom domain → `mevia.ge`

#### B) Vercel (ალტერნატივა)
- https://vercel.com — იგივე logika, ასევე უფასო

#### C) Georgian Hosting (ქართული სერვერი)
- **Proservice.ge** — 20-30 GEL/თვე
- **Servage.ge**
- FTP-ით ან cPanel-ით ატვირთვა

### ეტაპი 4: ფოტოების დამატება

საიტზე ამჟამად გამოყენებულია 1 Unsplash-ის ფოტო `about` სექციაში. შეცვალეთ თქვენი ფოტოებით:

**სად უნდა შეიცვალოს:**
- `index.html` ფაილში მოიძიეთ `unsplash.com` — შეცვალეთ თქვენი ფოტოს URL-ით ან გადაიტანეთ ფოტო `assets/` ფოლდერში და მიუთითეთ `assets/your-photo.jpg`.

**რა ფოტოები გჭირდებათ:**
1. **About სექცია**: მძღოლი / ავტომობილი / გუნდი (1 ფოტო, 800x1000px)
2. **Hero**: შეგიძლიათ დაუმატოთ video ან ფოტო ფონზე (არასავალდებულოა)
3. **MEVIA Move**: გადაზიდვის პროცესი / სატვირთო (ახლა გრადიენტი აქვს)
4. **Fleet**: შესაძლოა რეალური ფოტოები თითოეული ავტომობილის

**რეკომენდაცია**: დაიქირავეთ ფოტოგრაფი ან გამოიყენეთ Unsplash/Pexels.

### ეტაპი 5: ფორმის დაკავშირება (აუცილებელი!)

**ამჟამად** ფორმა მხოლოდ UI დონეზე მუშაობს — მონაცემები არსად არ იგზავნება. გააქტიურეთ ერთ-ერთი:

#### ვარიანტი 1: Formspree (უფასო, უმარტივესი)
1. შედით: https://formspree.io
2. რეგისტრაცია — მიიღებთ unique URL-ს (მაგ. `https://formspree.io/f/xyz123`)
3. `index.html`-ში მოიძიეთ `<form class="booking-form"` და დაამატეთ: `action="https://formspree.io/f/xyz123" method="POST"`
4. JavaScript-ში `btnNext.addEventListener` ბოლო ნაბიჯში `return`-ის ნაცვლად `form.submit()` გააკეთეთ.

#### ვარიანტი 2: EmailJS
- https://emailjs.com — 200 უფასო email/თვე
- პირდაპირ JavaScript-იდან აგზავნის მეილს

#### ვარიანტი 3: WhatsApp Direct
- დააგენერირეთ WhatsApp URL `+995557538606` ნომრითა და ფორმის მონაცემებით

### ეტაპი 6: SEO & ანალიტიკა

1. **Google Analytics**: დაამატეთ tracking კოდი `<head>`-ში
2. **Google Search Console**: დაარეგისტრირეთ საიტი
3. **Meta tags**: ფაილში უკვე არის `description` — დააპტიმიზირეთ თქვენი keywords-ით
4. **Favicon**: დაამატეთ `<link rel="icon" href="assets/favicon.ico">`

### ეტაპი 7: მობილური ტესტირება

შემდეგ ბრაუზერებზე შეამოწმეთ:
- Chrome (Desktop + Mobile)
- Safari (iPhone)
- Firefox
- Edge

საიტი ყველა მოწყობილობაზე ადაპტირდება (responsive).

---

## 🎨 დიზაინის პრინციპები (გამოყენებული)

- **ფერები**: შავი `#0A0A0B` + ოქრო `#C5A572` (ლოგოდან) + warm off-white `#F7F4ED`
- **ფონტები**: Noto Serif Georgian (headings) + Noto Sans Georgian (body) + Cormorant Garamond (Latin display)
- **სტრუქტურა**: Hero → Services → MEVIA Move → Fleet → About → Why Us → Booking → Contact → Footer
- **ინტერაქტიული**: Multi-step booking form, scroll reveal animations, hover states
- **ინსპირაცია**: Dursun Limousine (Switzerland)

## 🔧 შინაარსის რედაქტირება

ტექსტის შესაცვლელად:
1. გახსენით `index.html` Notepad-ში, VS Code-ში, ან Sublime Text-ში
2. მოიძიეთ ტექსტი და შეცვალეთ
3. შეინახეთ ფაილი
4. განაახლეთ ბრაუზერში

რეკომენდირებული editor: **VS Code** (უფასო) — https://code.visualstudio.com

## 📞 კონტაქტები საიტზე

ამჟამად მითითებულია:
- ტელ: +995 557 53 86 06
- Email: MEVIA@MEVIA.com
- მისამართი: თბილისი, საქართველო

**ახლავე შეცვალეთ** თუ რაიმე განსხვავებული გჭირდებათ.

---

## ⚡ სწრაფი Checklist

- [ ] ლოკალურად გავხსენი index.html-ი — მუშაობს ✓
- [ ] დომენი ვიყიდე (mevia.ge)
- [ ] ჰოსტინგი ავირჩიე (Netlify / Vercel / Proservice)
- [ ] ფოტოები დავამატე (შევცვალე Unsplash URL)
- [ ] Formspree-ზე რეგისტრაცია + ფორმის დაკავშირება
- [ ] Google Analytics დავამატე
- [ ] Favicon შევქმენი
- [ ] Meta description ჩავსვი ჩემი keywords-ით
- [ ] მობილურზე შევამოწმე
- [ ] საიტი ONLINE არის 🎉

---

## 💡 მომავალი გაუმჯობესებები

- **მრავალენოვანი**: English + Russian ვერსიები
- **ინსტანტ ფასების კალკულატორი**: მარშრუტიდან გამომდინარე
- **Admin panel**: მოთხოვნების მართვისთვის
- **Loyalty program**: რეგულარული კლიენტებისთვის
- **Mobile app**: React Native-ით

---

MEVIA © 2026 · Built with precision.
