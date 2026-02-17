import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Poppins } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Manan Kanani | Full Stack Developer in Mumbai",
  description:
    "Full stack developer based in Mumbai with 3+ years of experience, delivered 30+ web projects with strong UI/UX and robust backend solutions.",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17398916729"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17398916729');
  `}
        </Script>

        <link rel="canonical" href="https://manankanani.in" />
        <Script
          id="ld-json-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Manan Kanani",
              url: "https://manankanani.in",
              image: "https://manankanani.in/images/Main_pic.webp",
              sameAs: [
                "https://www.linkedin.com/in/manan-kanani/",
                "https://github.com/MananKanani5/",
                "https://www.instagram.com/m_a_n_a_n_02/",
                "https://leetcode.com/manankanani/",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
            }),
          }}
        />

        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Manan Kanani",
              url: "https://manankanani.in",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://manankanani.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "viy12ayt80");
</script>
      </head>
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
