# 🏀 Pines Elite

**Premium 3D AAU Basketball Website** | Southern Pines, North Carolina

A high-end, interactive nonprofit website for **Pines Elite** — an elite AAU basketball program developing young athletes with world-class training, character, and college pathways.

**Red & Black** athletic aesthetic with a fully interactive 3D basketball experience powered by Three.js.

## ✨ Highlights

- **Stunning Interactive 3D Hero** — Drag to rotate a premium red basketball with pine accent (Southern Pines branding)
- **Complete Conversion-Focused Site**
  - Age-group program pathways (8U–17U)
  - Athlete testimonials & success stories
  - Measurable impact stats (200+ athletes, college commitments, etc.)
  - Fully functional **Donate** form with tiers + monthly option (toasts + tax-deductible messaging)
  - Tryouts / Interest form
- **Premium Design System** — Glassmorphism, bold typography, buttery animations, mobile-first
- Built as a **501(c)(3) nonprofit showcase** to attract players, families, sponsors & donors

## 🚀 Tech Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Three.js** + React Three Fiber + Drei (interactive 3D basketball)
- **Tailwind CSS v4** + custom design tokens (Red & Black theme)
- **Framer Motion** + GSAP for smooth animations
- **Lucide Icons** + Sonner (beautiful toasts)
- Fully responsive & accessible

## 👨‍💻 Getting Started

```bash
# Clone the repo
git clone https://github.com/Pottstim/Pineselite-.git
cd Pineselite-

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — explore the 3D basketball and donation flow.

## 🌍 Deployment

Deploy instantly on **Vercel** (recommended):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPottstim%2FPineselite-)

Or build locally:
```bash
npm run build
npm start
```

## 🎯 Project Goals

This site was built to:
- Attract talented young basketball players & families in Moore County, NC
- Convert sponsors and donors with clear impact storytelling
- Showcase the premium, serious nature of the program (red & black = power & professionalism)

## 📝 Customization

- Update real athlete photos, coach bios, and upcoming tryout dates in `app/page.tsx`
- Connect the donation form to Stripe / Donorbox / your payment processor
- Replace placeholder SVGs in `public/` with real team imagery
- Tweak colors or 3D elements in `app/components/3d/Basketball3D.tsx` and `app/globals.css`

## 👋 Contributing

Pull requests welcome! Especially for:
- Real imagery & content
- Payment integration
- Additional 3D interactions
- Accessibility / performance improvements

## 🌐 Links

- **Live Site** (after deploy): Coming soon
- **GitHub**: https://github.com/Pottstim/Pineselite-
- **Program**: Pines Elite — Southern Pines, NC

---

**Built with pride for Southern Pines basketball.**

*This is a 501(c)(3) nonprofit project. Donations via the site are tax-deductible (connect real processor for live use).