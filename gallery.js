document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".gallery-item");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    card.style.transition = "opacity 0.4s ease, transform 0.4s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 120 * index);
  });
});
