// src/lib/utils/animations.js

import { animate, stagger } from "motion";

/*
  Luxury motion presets for jitubanna.in
  Mobile-first animations designed to feel smooth, subtle and premium.
*/

/* -------------------------------------------------------------------------- */
/*                                BASE CONFIG                                 */
/* -------------------------------------------------------------------------- */

export const EASING = {
  smooth: [0.25, 0.8, 0.25, 1],
  soft: [0.33, 1, 0.68, 1],
  snap: [0.2, 0.8, 0.2, 1],
  gentle: [0.4, 0, 0.2, 1]
};

export const DURATIONS = {
  micro: 0.18,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  hero: 1.2
};

/* -------------------------------------------------------------------------- */
/*                             BASIC REVEAL ANIMATIONS                        */
/* -------------------------------------------------------------------------- */

export function fadeIn(el) {
  return animate(
    el,
    { opacity: [0, 1] },
    { duration: DURATIONS.normal, easing: EASING.smooth }
  );
}

export function fadeUp(el) {
  return animate(
    el,
    { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0px)"] },
    { duration: DURATIONS.normal, easing: EASING.soft }
  );
}

export function fadeDown(el) {
  return animate(
    el,
    { opacity: [0, 1], transform: ["translateY(-25px)", "translateY(0px)"] },
    { duration: DURATIONS.normal, easing: EASING.soft }
  );
}

export function scaleIn(el) {
  return animate(
    el,
    {
      opacity: [0, 1],
      transform: ["scale(0.95)", "scale(1)"]
    },
    {
      duration: DURATIONS.fast,
      easing: EASING.smooth
    }
  );
}

/* -------------------------------------------------------------------------- */
/*                          STAGGER REVEAL (SECTION ITEMS)                    */
/* -------------------------------------------------------------------------- */

export function staggerReveal(elements) {
  return animate(
    elements,
    {
      opacity: [0, 1],
      transform: ["translateY(30px)", "translateY(0px)"]
    },
    {
      delay: stagger(0.08),
      duration: DURATIONS.normal,
      easing: EASING.soft
    }
  );
}

/* -------------------------------------------------------------------------- */
/*                               HERO ENTRANCE                                */
/* -------------------------------------------------------------------------- */

export function heroReveal(container) {
  const items = container.querySelectorAll("[data-hero-item]");

  return animate(
    items,
    {
      opacity: [0, 1],
      transform: ["translateY(40px)", "translateY(0px)"]
    },
    {
      delay: stagger(0.12),
      duration: DURATIONS.hero,
      easing: EASING.soft
    }
  );
}

/* -------------------------------------------------------------------------- */
/*                              HAMBURGER MENU                                */
/* -------------------------------------------------------------------------- */

export function menuOpen(menu) {
  return animate(
    menu,
    {
      opacity: [0, 1],
      transform: ["scale(0.98)", "scale(1)"]
    },
    {
      duration: DURATIONS.fast,
      easing: EASING.gentle
    }
  );
}

export function menuClose(menu) {
  return animate(
    menu,
    {
      opacity: [1, 0],
      transform: ["scale(1)", "scale(0.98)"]
    },
    {
      duration: DURATIONS.fast,
      easing: EASING.snap
    }
  );
}

/* -------------------------------------------------------------------------- */
/*                              CARD INTERACTIONS                             */
/* -------------------------------------------------------------------------- */

export function cardHover(card) {
  return animate(
    card,
    {
      transform: "translateY(-6px) scale(1.02)"
    },
    {
      duration: DURATIONS.micro,
      easing: EASING.smooth
    }
  );
}

export function cardLeave(card) {
  return animate(
    card,
    {
      transform: "translateY(0px) scale(1)"
    },
    {
      duration: DURATIONS.micro,
      easing: EASING.smooth
    }
  );
}

/* -------------------------------------------------------------------------- */
/*                              BUTTON INTERACTIONS                           */
/* -------------------------------------------------------------------------- */

export function buttonTap(button) {
  return animate(
    button,
    {
      transform: ["scale(1)", "scale(0.95)", "scale(1)"]
    },
    {
      duration: 0.25,
      easing: EASING.snap
    }
  );
}

/* -------------------------------------------------------------------------- */
/*                            SCROLL REVEAL OBSERVER                          */
/* -------------------------------------------------------------------------- */

export function observeReveal(selector = "[data-reveal]") {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fadeUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/* -------------------------------------------------------------------------- */
/*                              PARALLAX BLOBS                                */
/* -------------------------------------------------------------------------- */

export function parallaxBlob(blob, speed = 0.25) {
  window.addEventListener("scroll", () => {
    const offset = window.scrollY * speed;

    blob.style.transform = `translateY(${offset}px)`;
  });
}

/* -------------------------------------------------------------------------- */
/*                             SMOOTH PAGE TRANSITION                         */
/* -------------------------------------------------------------------------- */

export function pageEnter(page) {
  return animate(
    page,
    {
      opacity: [0, 1],
      transform: ["translateY(20px)", "translateY(0px)"]
    },
    {
      duration: DURATIONS.normal,
      easing: EASING.smooth
    }
  );
}

export function pageLeave(page) {
  return animate(
    page,
    {
      opacity: [1, 0],
      transform: ["translateY(0px)", "translateY(15px)"]
    },
    {
      duration: DURATIONS.fast,
      easing: EASING.snap
    }
  );
}