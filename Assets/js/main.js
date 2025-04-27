// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select all hero sections
const sections = document.querySelectorAll(".hero-section");

sections.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
    scrub: true,
  });
});
