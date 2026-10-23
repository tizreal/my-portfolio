import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "./data/site";
import Analytics from "./components/Analytics";

// Self-hosted at build time by next/font; Inter is a variable font, so every
// weight the site uses (400–900) is included.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-next",
});

const title = "Temiloluwa Odunfa | Software Engineer";
const description =
  "Software engineer in Mississauga, Ontario, working in Java, Spring Boot, PostgreSQL, REST APIs, and React.";
const image = {
  url: "/profile.png",
  width: 1254,
  height: 1254,
  alt: "Temiloluwa Odunfa",
};

export const metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description,
    locale: "en_CA",
    images: [image],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [image.url],
  },
};

const themeScript = `(function(){try{var saved=localStorage.getItem('theme');var preferred=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',saved||preferred);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans overflow-x-hidden">
        {/* Primary blob — top-left */}
        <div className="fixed -top-45 -left-45 w-162.5 h-162.5 rounded-full bg-accent/5 blur-[140px] pointer-events-none -z-10" />
        {/* Secondary blob — bottom-right (emerald) */}
        <div className="fixed -bottom-40 -right-40 w-145 h-145 rounded-full bg-secondary/8 blur-[130px] pointer-events-none -z-10" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
