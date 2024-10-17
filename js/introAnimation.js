window.addEventListener("load", () => {
  const views = document.querySelectorAll(".intro-view");
  const landingPageContent = document.querySelector(".content");
  const torchAnimationElement = document.querySelector(".dark-overlay");
  let currentView = 0;

  torchAnimationElement.style.display = "none";

  const showNextView = () => {
    if (currentView > 0) {
      views[currentView - 1].classList.add("smoke-effect");
    }

    gsap.to(views[currentView], {
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(views[currentView], {
          delay: 1.5,
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
          onComplete: () => {
            currentView++;
            if (currentView < views.length) {
              showNextView();
            } else {
              document.getElementById("intro-container").style.display = "none";
              gsap.to(landingPageContent, {
                opacity: 1,
                duration: 2,
                ease: "power2.inOut",
              });

              torchAnimationElement.style.display = "block";
              activateTorchAnimation();
            }
          },
        });
      },
    });
  };

  showNextView();

  function activateTorchAnimation() {
    console.log("Torch animation starts");
  }
});
