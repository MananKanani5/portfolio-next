import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Poppins } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Manan Kanani | Full Stack Developer in Mumbai",
  description:
    "Full stack developer in Mumbai with 3+ years of experience, delivering 30+ web projects with strong UI/UX and robust backend solutions.",
  openGraph: {
    type: "website",
    url: "https://www.manankanani.in",
    title: "Manan Kanani - Full Stack Developer",
    description:
      "Full stack developer in Mumbai with 3+ years of experience, delivering 30+ web projects with strong UI/UX and robust backend solutions.",
    images: ["https://www.manankanani.in/images/Main_pic.webp"],
    siteName: "Manan Kanani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manan Kanani - Full Stack Developer",
    description:
      "Full stack developer in Mumbai with 3+ years of experience, delivering 30+ web projects with strong UI/UX and robust backend solutions.",
    site: "https://www.manankanani.in",
    images: ["https://www.manankanani.in/images/Main_pic.webp"],
  },
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
  ],
  authors: [{ name: "Manan Kanani", url: "https://www.manankanani.in" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GoogleAnalytics />
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
