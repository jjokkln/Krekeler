import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Changed fonts
import QuickAccessBar from "@/components/home/QuickAccessBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif", // Changed variable name
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Zahnarzt Ralf Krekeler",
    default: "Zahnarzt Ralf Krekeler | Ihre Praxis in Wetter (Ruhr)",
  },
  description: "Ihr Zahnarzt in der Nachbarschaft – moderne Medizin mit persönlichem Bezug. Vereinbaren Sie jetzt Ihren Termin in Wetter (Ruhr).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Zahnarztpraxis Ralf Krekeler",
              "image": "", // Pending photo
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gustav-Vorsteher-Straße 2",
                "addressLocality": "Wetter (Ruhr)",
                "postalCode": "58300",
                "addressCountry": "DE"
              },
              "telephone": "+4923355293",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Thursday"],
                  "opens": "08:00",
                  "closes": "12:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Thursday"],
                  "opens": "15:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Wednesday", "Friday"],
                  "opens": "08:00",
                  "closes": "12:00"
                }
              ]
            }),
          }}
        />
        <QuickAccessBar />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
