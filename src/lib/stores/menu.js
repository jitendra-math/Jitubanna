// src/lib/stores/menu.js

import { writable } from "svelte/store";
import { lockScroll, unlockScroll } from "../utils/helpers";

/*
  Global mobile menu state
  Controls fullscreen hamburger menu behaviour
*/

function createMenuStore() {
  const { subscribe, set, update } = writable({
    open: false
  });

  function openMenu() {
    set({ open: true });
    lockScroll();
  }

  function closeMenu() {
    set({ open: false });
    unlockScroll();
  }

  function toggleMenu() {
    update((state) => {
      const next = !state.open;

      if (next) lockScroll();
      else unlockScroll();

      return { open: next };
    });
  }

  function isOpen(state) {
    return state.open;
  }

  return {
    subscribe,
    openMenu,
    closeMenu,
    toggleMenu,
    isOpen
  };
}

export const menu = createMenuStore();