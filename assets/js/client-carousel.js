(() => {
  const carousel = document.querySelector("[data-client-carousel]");
  const previous = document.querySelector("[data-carousel-previous]");
  const next = document.querySelector("[data-carousel-next]");
  if (!carousel || !previous || !next) return;

  const scrollByCard = (direction) => {
    const card = carousel.querySelector(".client-logo-card");
    if (!card) return;

    const gap = Number.parseFloat(getComputedStyle(carousel.querySelector(".carousel-track")).gap) || 0;
    carousel.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  previous.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCard(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(1);
    }
  });
})();
