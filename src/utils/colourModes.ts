import { createSignal } from "solid-js";

/**
 * Represents the different colour themes in the application.
 */
enum Theme {
  System = "system",
  Light = "light",
  Dark = "dark",
}

const DATA_ATTR = "data-bs-theme";
const STORAGE_KEY = "theme";
const DARK_MODE_QUERY = window.matchMedia("(prefers-color-scheme: dark)");

const [activeTheme, setActiveTheme] = createSignal<Theme>(getStoredTheme());

/**
 * Gets the {@link Theme} value from local storage.
 * @returns The {@link Theme} value from local storage, or {@link Theme.System} if it does not exist.
 */
function getStoredTheme(): Theme {
  return (localStorage.getItem(STORAGE_KEY) as Theme) ?? Theme.System;
}

/**
 * Sets the {@link Theme} value in local storage.
 * @param theme The {@link Theme} value to set in local storage.
 */
function setStoredTheme(theme: Theme) {
  localStorage.setItem(STORAGE_KEY, theme as string);
}

/**
 * Refreshes the theme for the current document.
 */
function refreshDocument() {
  if (
    activeTheme() === Theme.Dark ||
    (activeTheme() === Theme.System && DARK_MODE_QUERY.matches)
  ) {
    document.documentElement.setAttribute(DATA_ATTR, "dark");
  } else {
    document.documentElement.setAttribute(DATA_ATTR, "light");
  }
}

/**
 * Sets the theme used for the application.
 * @param theme The new {@link Theme} to use.
 */
function setTheme(theme: Theme) {
  setActiveTheme(theme);
  setStoredTheme(theme);
  refreshDocument();
}

/**
 * Loads the initial theme and sets up a listener for system theme changes.
 */
function initTheme() {
  // Load the initial theme
  refreshDocument();

  // Listen for changes to system theme
  DARK_MODE_QUERY.addEventListener("change", () => {
    if (activeTheme() === Theme.System) {
      refreshDocument();
    }
  });
}

export { Theme, activeTheme, setTheme, initTheme };
