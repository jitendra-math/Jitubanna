// src/lib/utils/helpers.js

import { BREAKPOINTS, UI } from "./constants";

/*
  Utility helpers for jitubanna.in
  Small tools that keep components clean and mobile-first friendly
*/

/* -------------------------------------------------------------------------- */
/*                               CLASS MERGER                                 */
/* -------------------------------------------------------------------------- */

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */
/*                               MOBILE CHECK                                 */
/* -------------------------------------------------------------------------- */

export function isMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= BREAKPOINTS.mobileLarge;
}

export function isTablet() {
  if (typeof window === "undefined") return false;
  return (
    window.innerWidth > BREAKPOINTS.mobileLarge &&
    window.innerWidth <= BREAKPOINTS.tablet
  );
}

export function isDesktop() {
  if (typeof window === "undefined") return false;
  return window.innerWidth > BREAKPOINTS.tablet;
}

/* -------------------------------------------------------------------------- */
/*                           SMOOTH SCROLL TO ELEMENT                         */
/* -------------------------------------------------------------------------- */

export function scrollToElement(id, offset = 0) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(id);
  if (!el) return;

  const y =
    el.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}

/* -------------------------------------------------------------------------- */
/*                              LOCK BODY SCROLL                              */
/* -------------------------------------------------------------------------- */

export function lockScroll() {
  if (typeof document === "undefined") return;
  document.body.style.overflow = "hidden";
}

export function unlockScroll() {
  if (typeof document === "undefined") return;
  document.body.style.overflow = "";
}

/* -------------------------------------------------------------------------- */
/*                               FORMAT TITLE                                 */
/* -------------------------------------------------------------------------- */

export function formatTitle(page, siteName = "Jitu Banna") {
  if (!page) return siteName;
  return `${page} • ${siteName}`;
}

/* -------------------------------------------------------------------------- */
/*                             RANDOM GRADIENT PICK                           */
/* -------------------------------------------------------------------------- */

export function pickRandomGradient(gradients) {
  const keys = Object.keys(gradients);
  const index = Math.floor(Math.random() * keys.length);
  return gradients[keys[index]];
}

/* -------------------------------------------------------------------------- */
/*                            VIEWPORT HEIGHT FIX                             */
/* -------------------------------------------------------------------------- */

export function setViewportHeight() {
  if (typeof window === "undefined") return;

  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

/* -------------------------------------------------------------------------- */
/*                             TOUCH DEVICE CHECK                             */
/* -------------------------------------------------------------------------- */

export function isTouchDevice() {
  if (typeof window === "undefined") return false;

  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  );
}

/* -------------------------------------------------------------------------- */
/*                             CREATE UNIQUE ID                               */
/* -------------------------------------------------------------------------- */

export function uid(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

/* -------------------------------------------------------------------------- */
/*                              DEBOUNCE HELPER                               */
/* -------------------------------------------------------------------------- */

export function debounce(fn, delay = 200) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/* -------------------------------------------------------------------------- */
/*                              THROTTLE HELPER                               */
/* -------------------------------------------------------------------------- */

export function throttle(fn, limit = 200) {
  let waiting = false;

  return (...args) => {
    if (!waiting) {
      fn(...args);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

/* -------------------------------------------------------------------------- */
/*                         MOBILE CONTAINER WIDTH HELPER                      */
/* -------------------------------------------------------------------------- */

export function getContainerStyle() {
  return {
    maxWidth: `${UI.maxMobileWidth}px`,
    margin: "0 auto",
    padding: `${UI.containerPadding}px`
  };
}

/* -------------------------------------------------------------------------- */
/*                          LOCAL STORAGE SAFE ACCESS                         */
/* -------------------------------------------------------------------------- */

export function getStorage(key, fallback = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

export function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

/* -------------------------------------------------------------------------- */
/*                               COPY TO CLIPBOARD                            */
/* -------------------------------------------------------------------------- */

export async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}