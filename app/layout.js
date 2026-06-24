import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Temiloluwa Odunfa | Portfolio",
  description: "Software developer portfolio — Temiloluwa Odunfa",
};

const themeScript = `(function(){try{var saved=localStorage.getItem('theme');var preferred=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',saved||preferred);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans overflow-x-hidden">
        {/* Primary blob — top-left */}
        <div className="fixed -top-45 -left-45 w-162.5 h-162.5 rounded-full bg-accent/5 blur-[140px] pointer-events-none -z-10" />
        {/* Secondary blob — bottom-right (emerald) */}
        <div className="fixed -bottom-40 -right-40 w-145 h-145 rounded-full bg-secondary/8 blur-[130px] pointer-events-none -z-10" />
        {children}
      </body>
    </html>
  );
}
