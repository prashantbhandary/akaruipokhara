document.addEventListener("DOMContentLoaded", () => {
  // Animate team cards on load
  const cards = document.querySelectorAll(".team-card, .ceo-card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(16px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 150 * index);
  });
});
