import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Cosmos Financial Group — Global Investment Banking & Financial Advisory",
    template: "%s | Cosmos Financial Group",
  },
  description:
    "Transcend to a cosmos of infinite opportunities. Cosmos Financial Group delivers world-class investment banking, asset management, capital advisory, and fintech solutions to global enterprises since 1995.",
  keywords: [
    "investment banking",
    "financial advisory",
    "asset management",
    "capital advisory",
    "IPO readiness",
    "IRA score",
    "fintech",
    "aircraft leasing",
    "green holdings",
    "Cosmos Financial Group",
  ],
  openGraph: {
    title: "Cosmos Financial Group",
    description:
      "Serving global businesses with investment banking & financial advisory since 1995.",
    type: "website",
    locale: "en_US",
    siteName: "Cosmos Financial Group",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
