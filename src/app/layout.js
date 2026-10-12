import "./globals.css";
import { Toaster } from "react-hot-toast";
import SmoothScroll from "@/Components/SmoothScroll";

export const metadata = {
  metadataBase: new URL("https://www.facebook.com/hondagalaxyashulia"),
  title: {
    default: "Honda Galaxy - Ashulia | Authorized Honda Motorcycle Dealer Dhaka",
    template: "%s | Honda Galaxy Ashulia"
  },
  description: "Official Authorized 4S Dealer of Bangladesh Honda Private Limited (BHL) in Ashulia, Savar. Explore Honda Hornet 2.0, X-Blade 160, Shine 100, genuine parts, expert servicing, bank EMI, and bike exchange.",
  keywords: [
    "Honda Galaxy Ashulia",
    "Honda motorcycle showroom Ashulia",
    "Honda dealer Savar",
    "Bangladesh Honda Private Limited dealer",
    "Honda Hornet 2.0 Bangladesh",
    "Honda X-Blade 160 price Bangladesh",
    "Honda Shine 100 DX price",
    "Honda servicing Ashulia",
    "Honda Baipail Bogabari showroom",
    "Honda bike EMI Bangladesh",
    "Honda genuine parts Ashulia"
  ],
  authors: [{ name: "Honda Galaxy - Ashulia" }],
  creator: "Honda Galaxy",
  publisher: "Honda Galaxy",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/honda-galaxy-logo-card.png",
    apple: "/honda-galaxy-logo-card.png",
  },
  openGraph: {
    title: "Honda Galaxy - Ashulia | Authorized Honda Motorcycle Dealer Dhaka",
    description: "Official Authorized Dealer of Bangladesh Honda Private Limited in Ashulia, Savar. Genuine Sales, Certified Service, and OEM Parts.",
    url: "https://www.facebook.com/hondagalaxyashulia",
    siteName: "Honda Galaxy - Ashulia",
    images: [
      {
        url: "/honda-galaxy-logo-card.png",
        width: 894,
        height: 208,
        alt: "Honda Galaxy Ashulia Official Showroom Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honda Galaxy - Ashulia | Authorized Honda Motorcycle Dealer",
    description: "Official Authorized Dealer of Bangladesh Honda Private Limited (BHL) in Ashulia, Savar.",
    images: ["/honda-galaxy-logo-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.facebook.com/hondagalaxyashulia",
  },
};

export default function RootLayout({ children }) {
  // Schema.org Structured Data for Local Motorcycle Dealer SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MotorcycleDealer",
    "name": "Honda Galaxy - Ashulia",
    "alternateName": "Honda Galaxy Ashulia",
    "image": "/honda-galaxy-logo-card.png",
    "telephone": "+8801711-777525",
    "url": "https://www.facebook.com/hondagalaxyashulia",
    "priceRange": "৳৳",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shah Alam Tower, Bogabari, Baipail",
      "addressLocality": "Ashulia, Savar",
      "addressRegion": "Dhaka",
      "postalCode": "1349",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.9361954,
      "longitude": 90.2752753
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/hondagalaxyashulia"
    ]
  };

  return (
    <html lang="en" className="h-full bg-white text-slate-900 antialiased selection:bg-[#e60012] selection:text-white">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-sans text-slate-900 overflow-x-hidden">
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: '600'
            },
          }}
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
