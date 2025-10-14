(function () {
  const storageKey = "preferredTheme";
  const root = document.documentElement;
  const toggleButton = document.getElementById("theme-toggle");

  if (!toggleButton) {
    return;
  }

  const applyTheme = (theme) => {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      toggleButton.setAttribute("aria-pressed", "true");
    } else {
      root.setAttribute("data-theme", "light");
      toggleButton.setAttribute("aria-pressed", "false");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const storedPreference = window.localStorage.getItem(storageKey);
  if (storedPreference) {
    applyTheme(storedPreference);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  }

  toggleButton.addEventListener("click", () => {
    const isDarkMode = root.getAttribute("data-theme") === "dark";
    applyTheme(isDarkMode ? "light" : "dark");
  });
})();
