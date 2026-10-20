// Single source for contact links and details used across the site.
export const site = {
  name: "Temiloluwa Odunfa",
  url: "https://my-portfolio-nine-omega-88.vercel.app",
  email: "odunifa.temi@gmail.com",
  github: "https://github.com/tizreal",
  linkedin: "https://www.linkedin.com/in/temiloluwa-odunfa-60a9a21a6/",
  location: "Mississauga, Ontario, Canada",
  // PDF in /public. To update the resume, replace that file and keep the name.
  // If set to null, resume links open an email request instead.
  resume: "/Temiloluwa_Odunfa_Resume.pdf",
};

export const resumeHref =
  site.resume ?? `mailto:${site.email}?subject=Resume%20request`;
