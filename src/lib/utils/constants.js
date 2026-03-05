// src/lib/utils/constants.js

/**
 * Global constants for jitubanna.in
 * Mobile-first luxury portfolio configuration
 */

/* -------------------------------------------------------------------------- */
/*                                  SITE INFO                                 */
/* -------------------------------------------------------------------------- */

export const SITE = {
  name: "Jitu Banna",
  domain: "https://jitubanna.in",
  title: "Jitu Banna — Web Developer",
  description:
    "Mobile-first developer portfolio of Jitu Banna. Building fast, experimental, and beautifully crafted web tools.",
  author: "Jitu Banna",
  email: "hello@jitubanna.in"
};

/* -------------------------------------------------------------------------- */
/*                                  NAVIGATION                                */
/* -------------------------------------------------------------------------- */

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Projects",
    href: "/projects"
  },
  {
    label: "Hire Me",
    href: "/hire"
  },
  {
    label: "Contact",
    href: "/contact"
  }
];

/* -------------------------------------------------------------------------- */
/*                              SOCIAL CONNECTIONS                            */
/* -------------------------------------------------------------------------- */

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/jitendra-math"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/"
  },
  {
    name: "Email",
    url: "mailto:hello@jitubanna.in"
  }
];

/* -------------------------------------------------------------------------- */
/*                               MOBILE BREAKPOINTS                           */
/* -------------------------------------------------------------------------- */

export const BREAKPOINTS = {
  mobile: 320,
  mobileLarge: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1280
};

/* -------------------------------------------------------------------------- */
/*                                UI CONSTANTS                                */
/* -------------------------------------------------------------------------- */

export const UI = {
  maxMobileWidth: 480,
  containerPadding: 16,
  sectionSpacing: 80,
  cardRadius: 20,
  glassBlur: 16
};

/* -------------------------------------------------------------------------- */
/*                              THEME CONFIGURATION                           */
/* -------------------------------------------------------------------------- */

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  AUTO: "auto"
};

/* -------------------------------------------------------------------------- */
/*                               GRADIENT PRESETS                             */
/* -------------------------------------------------------------------------- */

export const GRADIENTS = {
  primary: "from-violet-500 via-purple-500 to-indigo-500",
  cyan: "from-cyan-400 via-sky-500 to-blue-600",
  sunset: "from-pink-500 via-rose-500 to-orange-400",
  neon: "from-emerald-400 via-teal-400 to-cyan-500"
};

/* -------------------------------------------------------------------------- */
/*                              HERO SECTION TEXT                             */
/* -------------------------------------------------------------------------- */

export const HERO = {
  greeting: "Hello, I'm",
  name: "Jitu Banna",
  tagline: "Web Developer",
  subtext: "Building fast and experimental web tools for the modern internet.",
  primaryCTA: {
    label: "View Projects",
    href: "/projects"
  },
  secondaryCTA: {
    label: "Hire Me",
    href: "/hire"
  }
};

/* -------------------------------------------------------------------------- */
/*                           HOMEPAGE SECTION ORDER                           */
/* -------------------------------------------------------------------------- */

export const HOME_SECTIONS = [
  "hero",
  "bento",
  "projects",
  "skills",
  "about",
  "experiments",
  "hire"
];

/* -------------------------------------------------------------------------- */
/*                             ANIMATION DURATIONS                            */
/* -------------------------------------------------------------------------- */

export const ANIMATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.8,
  pageTransition: 0.6
};

/* -------------------------------------------------------------------------- */
/*                             FEATURE FLAGS (FUTURE)                         */
/* -------------------------------------------------------------------------- */

export const FEATURES = {
  enableSmoothScroll: true,
  enableGlassUI: true,
  enableGradientBlobs: true,
  enableScrollAnimations: true
};