// src/lib/stores/theme.js

import { writable } from "svelte/store";
import { THEMES } from "../utils/constants";
import { getStorage, setStorage } from "../utils/helpers";

/*
  Theme system for jitubanna.in
  Handles dark / light / auto with smooth transitions.
*/

const STORAGE_KEY = "jb-theme";

/* -------------------------------------------------------------------------- */
/*                              INTERNAL STATE                                */
/* -------------------------------------------------------------------------- */

function createThemeStore() {
  const storedTheme = getStorage(STORAGE_KEY, THEMES.AUTO);

  const { subscribe, set, update } = writable(storedTheme);

  /* ------------------------------------------------------------------------ */
  /*                         APPLY THEME TO DOCUMENT                          */
  /* ------------------------------------------------------------------------ */

  function applyTheme(theme) {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const resolved =
      theme === THEMES.AUTO
        ? prefersDark
          ? THEMES.DARK
          : THEMES.LIGHT
        : theme;

    root.dataset.theme = resolved;

    root.classList.remove("light", "dark");
    root.classList.add(resolved);
  }

  /* ------------------------------------------------------------------------ */
  /*                              SET THEME                                   */
  /* ------------------------------------------------------------------------ */

  function setTheme(theme) {
    set(theme);
    setStorage(STORAGE_KEY, theme);
    applyTheme(theme);
  }

  /* ------------------------------------------------------------------------ */
  /*                             TOGGLE THEME                                 */
  /* ------------------------------------------------------------------------ */

  function toggleTheme() {
    update((current) => {
      let next;

      if (current === THEMES.DARK) next = THEMES.LIGHT;
      else if (current === THEMES.LIGHT) next = THEMES.DARK;
      else next = THEMES.DARK;

      setStorage(STORAGE_KEY, next);
      applyTheme(next);

      return next;
    });
  }

  /* ------------------------------------------------------------------------ */
  /*                            INIT SYSTEM                                   */
  /* ------------------------------------------------------------------------ */

  function initTheme() {
    if (typeof window === "undefined") return;

    const saved = getStorage(STORAGE_KEY, THEMES.AUTO);

    set(saved);
    applyTheme(saved);

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    media.addEventListener("change", () => {
      if (saved === THEMES.AUTO) {
        applyTheme(THEMES.AUTO);
      }
    });
  }

  return {
    subscribe,
    setTheme,
    toggleTheme,
    initTheme
  };
}

/* -------------------------------------------------------------------------- */
/*                              EXPORT STORE                                  */
/* -------------------------------------------------------------------------- */

export const theme = createThemeStore();