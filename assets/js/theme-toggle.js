(() => {
  const button = document.querySelector(".theme-toggle");
  const label = document.querySelector("[data-theme-label]");
  if (!button || !label) return;

  const updateButton = (theme) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    button.setAttribute("aria-pressed", String(theme === "dark"));
    label.textContent = `${nextTheme[0].toUpperCase()}${nextTheme.slice(1)} mode`;
  };

  const initialTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  updateButton(initialTheme);

  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    updateButton(nextTheme);
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch (_) {
      // The current-page theme still works when storage is unavailable.
    }
  });
})();
