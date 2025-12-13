import gsap from "gsap";

export const pageEnter = (el: HTMLElement) => {
  return gsap.fromTo(
    el,
    { autoAlpha: 0, y: 50 },
    { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" },
  );
};

export const pageExit = (el: HTMLElement) => {
  return gsap.to(el, {
    autoAlpha: 0,
    y: -50,
    duration: 0.8,
    ease: "power3.in",
  });
};
