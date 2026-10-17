// Single source for contact links and details used across the site.
export const site = {
  name: "Temiloluwa Odunfa",
  url: "https://my-portfolio-nine-omega-88.vercel.app",
  email: "odunifa.temi@gmail.com",
  github: "https://github.com/tizreal",
  linkedin: "https://www.linkedin.com/in/temiloluwa-odunfa-60a9a21a6/",
  location: "Mississauga, Ontario, Canada",
  // Set to the PDF path in /public (e.g. "/Temiloluwa_Odunfa_Resume.pdf") once
  // it is ready. While null, resume links open an email request instead.
  resume: null,
};

export const resumeHref =
  site.resume ?? `mailto:${site.email}?subject=Resume%20request`;
