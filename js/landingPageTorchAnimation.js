const revealArea = document.querySelector(".reveal-area");
const darkOverlay = document.querySelector(".dark-overlay");

document.addEventListener("mousemove", (e) => {
  revealArea.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent 10%, rgba(0, 0, 0, 0.95) 11%)`;
  gsap.to(darkOverlay, {
    duration: 0.2,
    filter: "brightness(1)",
  });
});

document.addEventListener("mouseleave", () => {
  gsap.to(revealArea, {
    duration: 0.5,
    opacity: 0,
  });

  gsap.to(darkOverlay, {
    duration: 0.5,
    filter: "brightness(0.05)",
  });
});
