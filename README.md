# Honda Galaxy - Ashulia (Next.js Landing Page)

An SEO-optimized, high-converting dealership landing page for **Honda Galaxy - Ashulia**, an Authorized 4S Dealer of **Bangladesh Honda Private Limited (BHL)** located in Ashulia, Savar, Dhaka.

## 🚀 Tech Stack & Libraries
- **Framework:** Next.js (App Router, static page pre-rendering, OpenGraph, JSON-LD schema)
- **Styling:** Tailwind CSS v4 + DaisyUI + custom Honda racing aesthetic
- **Smooth Scrolling:** [Lenis](https://github.com/darkroomengineering/lenis) smooth scroll with anchor link interception
- **Icons:** `lucide-react`
- **Feedback & Notifications:** `react-hot-toast`

## 📁 Project Structure
```text
Honda Galaxy/
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css     # Tailwind v4, Lenis scrollbar, theme classes
│   │   ├── layout.js       # SEO Metadata, OpenGraph, JSON-LD Schema.org
│   │   └── page.jsx        # Landing page composition
│   ├── Components/
│   │   ├── Header.jsx      # Sticky blur navbar, hotline, mobile menu
│   │   ├── Hero.jsx        # Trust badge, headline, CTAs, showroom stats
│   │   ├── BikeGrid.jsx    # Model lineup with category filtering
│   │   ├── BikeCard.jsx    # Specs (Power, Mileage, ABS/CBS), pricing, CTAs
│   │   ├── BikeModal.jsx   # Detailed specification sheet modal
│   │   ├── ServicesSection.jsx # 4S facilities (Sales, Service, Spares, Safety)
│   │   ├── OffersBanner.jsx # Official BHL seasonal campaigns & inquiries bulletin
│   │   ├── EMICalculator.jsx # Interactive Bank Credit Card EMI estimator
│   │   ├── WhyGalaxy.jsx   # Genuine BHL authorized dealership advantages
│   │   ├── LocationSection.jsx # Address, schedule, embedded map & directions
│   │   ├── FloatingActions.jsx # One-tap WhatsApp & Call floating buttons
│   │   ├── BookingModal.jsx # Test ride booking & lead generation form
│   │   ├── Footer.jsx      # Links, legal disclaimers, BHL dealer status
│   │   └── SmoothScroll.jsx # Lenis smooth scrolling provider
│   └── lib/
│       └── bikesData.js    # Bangladesh Honda bike catalog & showroom constants
├── jsconfig.json           # Path aliasing (@/*)
├── next.config.mjs         # Remote image pattern config
├── package.json
└── postcss.config.mjs
```

## 🛠️ Getting Started

### 1. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

## 🎯 Key Dealership Data Included
- **Showroom Address:** Shah Alam Tower, Bogabari, Baipail, Ashulia, Savar, Dhaka-1349
- **Hotline / Contact:** `01711-777525`
- **WhatsApp Integration:** Direct one-tap messaging
- **Facebook Page:** [facebook.com/hondagalaxyashulia](https://www.facebook.com/hondagalaxyashulia)
