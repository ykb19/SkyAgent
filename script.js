"use strict";

const lightbox = document.querySelector(".lightbox");
let lightboxTrigger;
document.querySelectorAll("[data-lightbox]").forEach((link) => {
  link.addEventListener("click", (event) => {
    // Preserve opening the original image in another tab and the HTML fallback.
    if (
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      typeof lightbox.showModal !== "function"
    )
      return;
    event.preventDefault();
    lightboxTrigger = link;
    const image = lightbox.querySelector("img");
    image.src = link.href;
    image.alt = link.querySelector("img").alt;
    lightbox.querySelector(".lightbox-caption").textContent = link
      .closest("figure")
      .querySelector("figcaption").textContent;
    lightbox.showModal();
    document.body.classList.add("modal-open");
  });
});
lightbox
  .querySelector("button")
  .addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target !== lightbox) return;
  const bounds = lightbox.getBoundingClientRect();
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  )
    lightbox.close();
});
lightbox.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  lightboxTrigger?.focus({ preventScroll: true });
});

document.getElementById("copy-link").addEventListener("click", async () => {
  const status = document.getElementById("copy-status");
  const projectUrl = "https://ykb19.github.io/SkyAgent/";
  try {
    await navigator.clipboard.writeText(projectUrl);
    status.textContent = "Project link copied.";
  } catch {
    status.textContent = `Project link: ${projectUrl}`;
  }
});

const sectionLinks = [
  ...document.querySelectorAll('nav a[href^="#"]:not(.nav-home)'),
];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) return;
      sectionLinks.forEach((link) => {
        if (link.hash === "#" + visible[0].target.id)
          link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-15% 0px -40% 0px", threshold: [0, 0.1, 0.5] },
  );
  sectionLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  });
  const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting)
      sectionLinks.forEach((link) => link.removeAttribute("aria-current"));
  });
  heroObserver.observe(document.querySelector(".hero"));
}
