const toggleButtons = document.querySelectorAll("[data-toggle]");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.toggle);

    if (!target) return;

    target.classList.toggle("hidden");

    const isHidden = target.classList.contains("hidden");

    button.textContent = isHidden
      ? `▼ ${button.dataset.textOpen}`
      : `▲ ${button.dataset.textClose}`;

    button.setAttribute("aria-expanded", !isHidden);
  });
});

const searchInputs = document.querySelectorAll(".search");

searchInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    const items = document.querySelectorAll(".card, .match, .card-partido, tbody tr");

    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(value) ? "" : "none";
    });
  });
});