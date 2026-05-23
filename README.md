# 🔥 AL ANANI Restaurant & Grill — Digital Menu

> Premium Arabic grill restaurant digital menu experience. Customers scan a QR code → browse all menu items visually → contact via WhatsApp.

---

## ✅ Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 16 (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |
| Lucide React | 1 |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
http://localhost:3000

# Production build
npm run build && npm start
```

---

## 📁 Project Structure

```
alanani/
├── app/
│   ├── layout.tsx          # Root layout — SEO metadata, fonts, Open Graph
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Global styles, gold/glass/animation utilities
│
├── components/
│   ├── Navbar.tsx          # Sticky blur navbar + mobile hamburger menu
│   ├── MenuCard.tsx        # Individual menu item card with WhatsApp CTA
│   ├── WhatsAppButton.tsx  # Floating pulsing WhatsApp button (fixed)
│   └── ScrollProgress.tsx  # Gold scroll progress bar at top of page
│
├── sections/
│   ├── HeroSection.tsx     # Full-screen cinematic hero with gold particles
│   ├── FeaturedSection.tsx # Editorial featured dishes layout with parallax
│   ├── MenuSection.tsx     # Full menu — category tabs, search, product grid
│   ├── AboutSection.tsx    # Restaurant story + stats + parallax image
│   ├── ContactSection.tsx  # Contact cards + map + opening hours
│   └── Footer.tsx          # Footer — links, categories, social, copyright
│
├── data/
│   └── menu.ts             # ⭐ ALL menu content lives here — edit to update
│
├── lib/
│   └── utils.ts            # Utilities: cn(), formatPrice(), WhatsApp URL
│
└── next.config.ts          # Image domains (Unsplash), optimization settings
```

---

## ✏️ Updating the Menu

All menu content is in **`data/menu.ts`** — no coding required, just edit the data.

### Add a new dish:
```ts
{
  id: "my-dish-1",                          // unique id
  nameEn: "Grilled Lamb Rack",
  nameAr: "رف ضلوع الخروف المشوي",
  descriptionEn: "Premium lamb rack, charcoal grilled",
  descriptionAr: "رف ضلوع خروف فاخر مشوي على الفحم",
  price: 95,
  currency: "SAR",
  image: "https://images.unsplash.com/photo-XXXXX?w=800&q=80",
  category: "mixed-grills",   // must match a category id in the categories array
  featured: true,             // appears in Featured section
  bestseller: true,           // shows "الأكثر طلباً" gold badge
  spicy: true,                // shows 🔥 Spicy badge
}
```

### Available category IDs:
`mixed-grills` · `chicken` · `kebabs` · `shawarma` · `appetizers` · `rice-dishes` · `beverages` · `desserts`

---

## 📞 Update Contact Details

**1. WhatsApp number** → `lib/utils.ts`:
```ts
export const WHATSAPP_NUMBER = "966501234567";  // no + sign, country code first
```

**2. Phone / Address displayed** → `sections/ContactSection.tsx` and `sections/Footer.tsx`

**3. Google Maps embed** → `sections/ContactSection.tsx`:
- Go to maps.google.com → find your location → Share → Embed a map → Copy HTML
- Replace the `src="..."` value in the `<iframe>`

**4. Social media links** → `sections/ContactSection.tsx` and `sections/Footer.tsx`:
- Find `href="#"` on the Instagram / Facebook links and replace with your URLs

---

## 🖼️ Food Images

Currently uses Unsplash placeholder photography. To use real food photos:

**Option A — Keep Unsplash (free):**
Replace any `image` URL in `data/menu.ts` with a different Unsplash photo URL.

**Option B — Local photos (best for production):**
1. Add your photos to `/public/images/`
2. Update the `image` field: `"/images/your-dish.jpg"`

---

## 🌐 Deploy to Vercel (Free)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at **[vercel.com](https://vercel.com)** → auto-deploy on every push.

---

## 📲 QR Code

After deploying, generate a QR at **[qr.io](https://qr.io)**:
- URL: `https://your-site.vercel.app`
- Style: dark background · gold color · restaurant logo in center
- Print and place on tables for scan-to-menu experience

---

## 🎨 Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#0A0C14` | Page background |
| Navy Card | `#161926` | Card backgrounds |
| Gold | `#C9A84C` | Accents, borders, prices |
| Gold Light | `#E8C96A` | Gradient highlights |
| WhatsApp Green | `#25D366` | WhatsApp CTAs |

All colors are defined as CSS variables in `app/globals.css`.
