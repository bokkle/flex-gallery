const panels = document.querySelectorAll(".panel");

const toggleOpen = (event) => {
  const panel = event.currentTarget;
  const isOpen = panel.classList.contains("open");
  panels.forEach((panel) => panel.classList.remove("open"));
  if (!isOpen) {
    panel.classList.add("open");
  }
};

const toggleActive = (event) => {
  if (event.propertyName.includes("flex")) {
    event.target.classList.toggle("open-active");
  }
};

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
